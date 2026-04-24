n.d(t, { A: () => s });
var i = n(64700),
    l = n(625494),
    a = n(652215);
function r(e) {
    return Object.keys(e).some((t) => e[t]);
}
function s(e, t) {
    let [n, s] = i.useState(t),
        [o, c] = i.useState(r(n)),
        d = i.useRef(o),
        u = i.useRef(null),
        _ = i.useCallback((e) => {
            s((t) => {
                let n = { ...t, ...e },
                    i = r(n);
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
            let t = (e) => {
                let { emojiPicker: t, emojiBurstPicker: n } = e;
                return _({ emojiPicker: t, emojiBurstPicker: n });
            };
            return (
                l._.subscribeKeyed(a.zOV.TOGGLE_REACTION_POPOUT, e, t),
                () => void l._.unsubscribeKeyed(a.zOV.TOGGLE_REACTION_POPOUT, e, t)
            );
        }, [e, _]),
        { popouts: n, setPopout: _, selected: o }
    );
}
