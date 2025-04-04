r.d(e, {
    Yf: () => a,
    d0: () => u
});
var n = r(212769),
    i = r(312376),
    o = r(192379);
class a {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
    }
    isPropagationStopped() {
        return !1;
    }
    persist() {}
    constructor(t, e) {
        (this.nativeEvent = e), (this.target = e.target), (this.currentTarget = e.currentTarget), (this.relatedTarget = e.relatedTarget), (this.bubbles = e.bubbles), (this.cancelable = e.cancelable), (this.defaultPrevented = e.defaultPrevented), (this.eventPhase = e.eventPhase), (this.isTrusted = e.isTrusted), (this.timeStamp = e.timeStamp), (this.type = t);
    }
}
function u(t) {
    let e = (0, o.useRef)({
        isFocused: !1,
        observer: null
    });
    (0, n.b)(() => {
        let t = e.current;
        return () => {
            t.observer && (t.observer.disconnect(), (t.observer = null));
        };
    }, []);
    let r = (0, i.i)((e) => {
        null == t || t(e);
    });
    return (0, o.useCallback)(
        (t) => {
            if (t.target instanceof HTMLButtonElement || t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement || t.target instanceof HTMLSelectElement) {
                e.current.isFocused = !0;
                let n = t.target;
                n.addEventListener(
                    'focusout',
                    (t) => {
                        (e.current.isFocused = !1), n.disabled && r(new a('blur', t)), e.current.observer && (e.current.observer.disconnect(), (e.current.observer = null));
                    },
                    { once: !0 }
                ),
                    (e.current.observer = new MutationObserver(() => {
                        if (e.current.isFocused && n.disabled) {
                            var t;
                            null == (t = e.current.observer) || t.disconnect();
                            let r = n === document.activeElement ? null : document.activeElement;
                            n.dispatchEvent(new FocusEvent('blur', { relatedTarget: r })),
                                n.dispatchEvent(
                                    new FocusEvent('focusout', {
                                        bubbles: !0,
                                        relatedTarget: r
                                    })
                                );
                        }
                    })),
                    e.current.observer.observe(n, {
                        attributes: !0,
                        attributeFilter: ['disabled']
                    });
            }
        },
        [r]
    );
}
