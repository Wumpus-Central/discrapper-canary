n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    r = n(585483),
    l = n(981631);
function a(e) {
    return Object.keys(e).some((t) => e[t]);
}
function o(e, t) {
    let [n, o] = i.useState(t),
        [s, c] = i.useState(a(n)),
        d = i.useRef(s),
        u = i.useRef(null),
        m = i.useCallback((e) => {
            o((t) => {
                let n = {
                        ...t,
                        ...e
                    },
                    i = a(n);
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
            return r.S.subscribeKeyed(l.LPv.TOGGLE_REACTION_POPOUT, e, t), () => void r.S.unsubscribeKeyed(l.LPv.TOGGLE_REACTION_POPOUT, e, t);
        }, [e, m]),
        {
            popouts: n,
            setPopout: m,
            selected: s
        }
    );
}
