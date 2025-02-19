n.d(t, { Z: () => l }), n(47120);
var r = n(192379),
    i = n(585483),
    a = n(981631);
function o(e) {
    return Object.keys(e).some((t) => e[t]);
}
function l(e, t) {
    let [n, l] = r.useState(t),
        [s, c] = r.useState(o(n)),
        d = r.useRef(s),
        u = r.useRef(null),
        p = r.useCallback((e) => {
            l((t) => {
                let n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, t, e),
                    r = o(n);
                return r !== d.current && ((d.current = r), null != u.current && (cancelAnimationFrame(u.current), (u.current = null)), r ? c(!0) : (u.current = requestAnimationFrame(() => c(!1)))), n;
            });
        }, []);
    return (
        r.useEffect(() => {
            let t = (e) => {
                let { emojiPicker: t, emojiBurstPicker: n } = e;
                return p({
                    emojiPicker: t,
                    emojiBurstPicker: n
                });
            };
            return i.S.subscribeKeyed(a.LPv.TOGGLE_REACTION_POPOUT, e, t), () => void i.S.unsubscribeKeyed(a.LPv.TOGGLE_REACTION_POPOUT, e, t);
        }, [e, p]),
        {
            popouts: n,
            setPopout: p,
            selected: s
        }
    );
}
