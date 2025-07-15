n.d(t, {
    Yf: () => s,
    d0: () => a
});
var i = n(365449),
    r = n(138224),
    o = n(73800);
class s {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        ((this.defaultPrevented = !0), this.nativeEvent.preventDefault());
    }
    stopPropagation() {
        (this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0));
    }
    isPropagationStopped() {
        return !1;
    }
    persist() {}
    constructor(e, t) {
        ((this.nativeEvent = t), (this.target = t.target), (this.currentTarget = t.currentTarget), (this.relatedTarget = t.relatedTarget), (this.bubbles = t.bubbles), (this.cancelable = t.cancelable), (this.defaultPrevented = t.defaultPrevented), (this.eventPhase = t.eventPhase), (this.isTrusted = t.isTrusted), (this.timeStamp = t.timeStamp), (this.type = e));
    }
}
function a(e) {
    let t = (0, o.useRef)({
        isFocused: !1,
        observer: null
    });
    (0, i.b)(() => {
        let e = t.current;
        return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
        };
    }, []);
    let n = (0, r.i)((t) => {
        null == e || e(t);
    });
    return (0, o.useCallback)(
        (e) => {
            if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let i = e.target;
                (i.addEventListener(
                    'focusout',
                    (e) => {
                        ((t.current.isFocused = !1), i.disabled && n(new s('blur', e)), t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null)));
                    },
                    { once: !0 }
                ),
                    (t.current.observer = new MutationObserver(() => {
                        if (t.current.isFocused && i.disabled) {
                            var e;
                            null == (e = t.current.observer) || e.disconnect();
                            let n = i === document.activeElement ? null : document.activeElement;
                            (i.dispatchEvent(new FocusEvent('blur', { relatedTarget: n })),
                                i.dispatchEvent(
                                    new FocusEvent('focusout', {
                                        bubbles: !0,
                                        relatedTarget: n
                                    })
                                ));
                        }
                    })),
                    t.current.observer.observe(i, {
                        attributes: !0,
                        attributeFilter: ['disabled']
                    }));
            }
        },
        [n]
    );
}
