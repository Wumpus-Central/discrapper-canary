n.d(t, { A: () => s });
var i = n(64700),
    l = n(203982),
    a = n(652215);
function r(e) {
    return Object.keys(e).some((t) => e[t]);
}
function s(e, t) {
    let [n, s] = i.useState(t),
        [o, d] = i.useState(r(n)),
        c = i.useRef(o),
        u = i.useRef(null),
        m = i.useCallback((e) => {
            s((t) => {
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
                l._.subscribeKeyed(a.zOV.TOGGLE_REACTION_POPOUT, e, t),
                () => void l._.unsubscribeKeyed(a.zOV.TOGGLE_REACTION_POPOUT, e, t)
            );
        }, [e, m]),
        { popouts: n, setPopout: m, selected: o }
    );
}
