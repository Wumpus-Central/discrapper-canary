n.d(t, { Z: () => s }), n(47120);
var i = n(192379),
    l = n(585483),
    a = n(981631);
function r(e) {
    return Object.keys(e).some((t) => e[t]);
}
function s(e, t) {
    let [n, s] = i.useState(t),
        [o, c] = i.useState(r(n)),
        d = i.useRef(o),
        u = i.useRef(null),
        m = i.useCallback((e) => {
            s((t) => {
                let n = {
                        ...t,
                        ...e
                    },
                    i = r(n);
                return i !== d.current && ((d.current = i), null != u.current && (cancelAnimationFrame(u.current), (u.current = null)), i ? c(!0) : (u.current = requestAnimationFrame(() => c(!1)))), n;
            });
        }, []);
    return (
        i.useEffect(() => {
            let t = (e) => {
                let { emojiPicker: t, emojiBurstPicker: n } = e;
                return m({
                    emojiPicker: t,
                    emojiBurstPicker: n
                });
            };
            return l.S.subscribeKeyed(a.LPv.TOGGLE_REACTION_POPOUT, e, t), () => void l.S.unsubscribeKeyed(a.LPv.TOGGLE_REACTION_POPOUT, e, t);
        }, [e, m]),
        {
            popouts: n,
            setPopout: m,
            selected: o
        }
    );
}
