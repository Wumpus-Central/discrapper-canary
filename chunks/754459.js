n.d(t, { A: () => r });
var i = n(582128),
    l = n(625494),
    s = n(652215);
function a(e) {
    return Object.keys(e).some((t) => e[t]);
}
function r(e, t) {
    let [n, r] = i.useState(t),
        [o, d] = i.useState(a(n)),
        c = i.useRef(o),
        u = i.useRef(null),
        m = i.useCallback((e) => {
            r((t) => {
                let n = { ...t, ...e },
                    i = a(n);
                return (
                    i !== c.current &&
                        ((c.current = i),
                        null != u.current && (cancelAnimationFrame(u.current), (u.current = null)),
                        i ? d(!0) : (u.current = requestAnimationFrame(() => d(!1)))),
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
                () => {
                    l._.unsubscribeKeyed(s.zOV.TOGGLE_REACTION_POPOUT, e, t);
                }
            );
        }, [e, m]),
        { popouts: n, setPopout: m, selected: o }
    );
}
