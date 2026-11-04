var e = i(477900),
    E = i(582128),
    _ = i(189213),
    r = i(192308),
    I = i(975807),
    s = i(871309),
    l = i(36149),
    A = i(945276),
    C = i(780964),
    c = i(766075),
    o = i(975571),
    a = i(390248),
    u = i(652215),
    L = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { channelId: n, messageId: R, transitionState: M, onClose: T } = t,
                g = (0, A.A)(),
                f = (0, l.yM)(),
                N = (0, a._R)(),
                d = E.useMemo(() => f && N, [f, N]),
                h = E.useCallback(
                    (t) => {
                        (0, a.hv)({ action: t, channelId: n, messageId: R });
                    },
                    [n, R],
                ),
                O = E.useCallback(() => {
                    (T(),
                        h(a.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                        (0, r.mM)(async () => {
                            let { default: t } = await i(544135);
                            return (i) => (0, e.jsx)(t, { channelId: n, messageId: R, ...i });
                        }));
                }, [n, R, T, h]);
            return (
                E.useEffect(() => {
                    (0, a.hv)({ action: a.rY.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId: n, messageId: R });
                }, [n, R]),
                (0, e.jsx)(_.a, {
                    title: L.intl.string(L.t.sGW77l),
                    subtitle: (function () {
                        if (d) return L.intl.string(L.t["5e0geG"]);
                        let t = L.intl.string(L.t.RUw0ZC),
                            n = L.intl.string(L.t["E/oQYL"]);
                        return g ? t : n;
                    })(),
                    actions: [
                        (function () {
                            if (!N && !d) return { text: L.intl.string(L.t.ZH7P2h), onClick: O, variant: "secondary" };
                        })(),
                        d
                            ? {
                                  text: L.intl.string(L.t.hvVgAZ),
                                  onClick: function () {
                                      (h(a.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE),
                                          s.A.openUrl(o.A.getArticleURL(u.MVz.AGE_VERIFICATION_LEARN_MORE)));
                                  },
                              }
                            : g
                              ? {
                                    text: L.intl.string(L.t["9D+zGX"]),
                                    onClick: function () {
                                        (h(a.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                            (0, c.openUserSettings)(C.X.CONTENT_FILTERS_SETTING),
                                            T());
                                    },
                                }
                              : {
                                    text: L.intl.string(L.t.hvVgAZ),
                                    onClick: function () {
                                        (0, I.A)(o.A.getArticleURL(u.MVz.EXPLICIT_MEDIA_REDACTION));
                                    },
                                },
                    ].filter((t) => void 0 !== t),
                    onClose: () => (T(), h(a.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
                    transitionState: M,
                })
            );
        },
    },
);
