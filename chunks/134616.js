n.d(t, { u: () => u });
var r = n(374470),
    i = n(481060),
    o = n(40851),
    l = n(574254),
    s = n(585483),
    a = n(547420),
    c = n(981631);
let u = (function (e) {
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
})(
    {
        POP_LAYER: {
            binds: ['esc'],
            comboKeysBindGlobal: !0,
            action(e) {
                if ((0, i.Vbw)()) return !1;
                if (s.S.hasSubscribers(c.CkL.CALL_DECLINE)) return s.S.dispatch(c.CkL.CALL_DECLINE), !1;
                if (l.Z.close()) return !1;
                if ((0, r.k)(e.target)) {
                    let t = (0, o.J5)(e.target);
                    if (null == t ? void 0 : t.hasSubscribers(c.CkL.POPOUT_CLOSE)) return t.dispatch(c.CkL.POPOUT_CLOSE), !1;
                }
                if (s.S.hasSubscribers(c.CkL.MODAL_CLOSE)) return s.S.dispatch(c.CkL.MODAL_CLOSE), !1;
                s.S.dispatch(c.CkL.LAYER_POP_ESCAPE_KEY);
            }
        }
    },
    a.ZP
);
