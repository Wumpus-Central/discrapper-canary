n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(704215),
    a = n(481060),
    s = n(785697),
    o = n(626135),
    c = n(700785),
    u = n(645041),
    d = n(981631),
    p = n(921944),
    f = n(647086),
    m = n(135899);
function h(e) {
    var t;
    let h = (0, s.SE)(e),
        g = m.$X.some((t) => (null == e ? void 0 : e.id) !== f._ && c.oz(t, e)),
        _ = (null == e ? void 0 : e.defaultMessageNotifications) === d.bL.ALL_MESSAGES,
        b = (0, u.FT)(
            l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
            null != (t = null == e ? void 0 : e.id) ? t : d.lds,
        ),
        E = h && (g || _) && !b,
        O = i.useCallback(() => {
            var t;
            (0, u.Qd)(
                l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                null != (t = null == e ? void 0 : e.id) ? t : d.lds,
                !0,
                p.L.DISMISS,
            );
        }, [e]),
        I = i.useRef(!1);
    i.useEffect(() => {
        if (E && !I.current) {
            var t;
            (0, a.ZDy)(
                async () => {
                    let { default: t } = await n.e("54597").then(n.bind(n, 29022));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            (function (e) {
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
                                    guild: e,
                                    canEveryoneModerate: g,
                                    isDefaultNotificationsAllMessages: _,
                                },
                                n,
                            ),
                        );
                },
                { onCloseCallback: O },
            ),
                o.default.track(d.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                    type: l.C[l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: null != (t = null == e ? void 0 : e.id) ? t : d.lds,
                }),
                (I.current = !0);
        }
    }, [g, e, O, _, E]);
}
