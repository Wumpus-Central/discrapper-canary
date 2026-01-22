n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    l = n(554146),
    a = n(397927),
    s = n(15073),
    o = n(954571),
    c = n(488926),
    u = n(45780),
    d = n(652215),
    p = n(49999),
    f = n(349828),
    h = n(124759);
function A(e) {
    var t;
    let A = (0, s.TZ)(e),
        g = h.dR.some((t) => (null == e ? void 0 : e.id) !== f.V && c.Ib(t, e)),
        m = (null == e ? void 0 : e.defaultMessageNotifications) === d.orn.ALL_MESSAGES,
        b = (0, u.G$)(
            l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
            null != (t = null == e ? void 0 : e.id) ? t : d.dJq,
        ),
        _ = A && (g || m) && !b,
        E = i.useCallback(() => {
            var t;
            (0, u._$)(
                l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                null != (t = null == e ? void 0 : e.id) ? t : d.dJq,
                !0,
                p.i.DISMISS,
            );
        }, [e]),
        O = i.useRef(!1);
    i.useEffect(() => {
        if (_ && !O.current) {
            var t;
            (0, a.mMO)(
                async () => {
                    let { default: t } = await n.e("42446").then(n.bind(n, 653981));
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
                                    isDefaultNotificationsAllMessages: m,
                                },
                                n,
                            ),
                        );
                },
                { onCloseCallback: E },
            ),
                o.default.track(d.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: l.V[l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: null != (t = null == e ? void 0 : e.id) ? t : d.dJq,
                }),
                (O.current = !0);
        }
    }, [g, e, E, m, _]);
}
