n.d(t, { Z: () => c }), n(388685);
var r = n(473749),
    i = n(585483),
    a = n(981631);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e) {
    return Object.keys(e).some((t) => e[t]);
}
function c(e, t) {
    let [n, o] = r.useState(t),
        [c, u] = r.useState(l(n)),
        d = r.useRef(c),
        f = r.useRef(null),
        p = r.useCallback((e) => {
            o((t) => {
                let n = s({}, t, e),
                    r = l(n);
                return (
                    r !== d.current &&
                        ((d.current = r),
                        null != f.current && (cancelAnimationFrame(f.current), (f.current = null)),
                        r ? u(!0) : (f.current = requestAnimationFrame(() => u(!1)))),
                    n
                );
            });
        }, []);
    return (
        r.useEffect(() => {
            let t = (e) => {
                let { emojiPicker: t, emojiBurstPicker: n } = e;
                return p({
                    emojiPicker: t,
                    emojiBurstPicker: n,
                });
            };
            return (
                i.S.subscribeKeyed(a.LPv.TOGGLE_REACTION_POPOUT, e, t),
                () => void i.S.unsubscribeKeyed(a.LPv.TOGGLE_REACTION_POPOUT, e, t)
            );
        }, [e, p]),
        {
            popouts: n,
            setPopout: p,
            selected: c,
        }
    );
}
