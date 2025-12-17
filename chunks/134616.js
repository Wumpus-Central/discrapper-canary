n.d(t, { u: () => u });
var r = n(374470),
    i = n(481060),
    l = n(728285),
    a = n(574254),
    o = n(585483),
    s = n(547420),
    c = n(981631);
let u = (function (e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
})(
    {
        POP_LAYER: {
            binds: ["esc"],
            comboKeysBindGlobal: !0,
            action(e) {
                if ((0, i.Vbw)()) return !1;
                if (o.S.hasSubscribers(c.CkL.CALL_DECLINE)) return o.S.dispatch(c.CkL.CALL_DECLINE), !1;
                if (a.Z.close()) return !1;
                if ((0, r.kK)(e.target)) {
                    let t = (0, l.J5)(e.target);
                    if (null == t ? void 0 : t.hasSubscribers(c.CkL.POPOUT_CLOSE))
                        return t.dispatch(c.CkL.POPOUT_CLOSE), !1;
                }
                if (o.S.hasSubscribers(c.CkL.MODAL_CLOSE)) return o.S.dispatch(c.CkL.MODAL_CLOSE), !1;
                o.S.dispatch(c.CkL.LAYER_POP_ESCAPE_KEY);
            },
        },
    },
    s.ZP,
);
