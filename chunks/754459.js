n.d(t, { A: () => a });
var i = n(64700),
    l = n(625494),
    s = n(652215);
function r(e) {
    return Object.keys(e).some((t) => e[t]);
}
function a(e, t) {
    let [n, a] = i.useState(t),
        [o, d] = i.useState(r(n)),
        c = i.useRef(o),
        u = i.useRef(null),
        m = i.useCallback((e) => {
            a((t) => {
                let n = { ...t, ...e },
                    i = r(n);
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
            let t = (e) => {
                let { emojiPicker: t, emojiBurstPicker: n } = e;
                return m({ emojiPicker: t, emojiBurstPicker: n });
            };
            return (
                l._.subscribeKeyed(s.zOV.TOGGLE_REACTION_POPOUT, e, t),
                () => void l._.unsubscribeKeyed(s.zOV.TOGGLE_REACTION_POPOUT, e, t)
            );
        }, [e, m]),
        { popouts: n, setPopout: m, selected: o }
    );
}
