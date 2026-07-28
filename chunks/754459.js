n.d(t, { A: () => r });
var i = n(582128),
    l = n(625494),
    s = n(652215);
function a(e) {
    return Object.keys(e).some((t) => e[t]);
}
function r(e, t) {
    let [n, r] = i.useState(t),
        [o, c] = i.useState(a(n)),
        d = i.useRef(o),
        u = i.useRef(null),
        m = i.useCallback((e) => {
            r((t) => {
                let n = { ...t, ...e },
                    i = a(n);
                return (
                    i !== d.current &&
                        ((d.current = i),
                        null != u.current && (cancelAnimationFrame(u.current), (u.current = null)),
                        i ? c(!0) : (u.current = requestAnimationFrame(() => c(!1)))),
                    n
                );
            });
        }, []);
    return (
        i.useEffect(() => {
            function t(e) {
                let { emojiPicker: t, emojiBurstPicker: n } = e;
                return m({ emojiPicker: t, emojiBurstPicker: n });
            }
            return (
                l._.subscribeKeyed(s.zOV.TOGGLE_REACTION_POPOUT, e, t),
                () => void l._.unsubscribeKeyed(s.zOV.TOGGLE_REACTION_POPOUT, e, t)
            );
        }, [e, m]),
        { popouts: n, setPopout: m, selected: o }
    );
}
