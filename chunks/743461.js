n.d(e, {
    default: () => O,
});
var r = n(627968),
    i = n(64700),
    l = n(158954),
    o = n(397927),
    a = n(975807),
    E = n(935649),
    s = n(847599),
    _ = n(620715),
    I = n(870383),
    c = n(36149),
    u = n(945276),
    A = n(780964),
    d = n(358776),
    C = n(840065),
    L = n(975571),
    R = n(390248),
    M = n(652215),
    T = n(355097),
    g = n(985018);
let O = (t) => {
    let { channelId: e, messageId: O, transitionState: f, onClose: P } = t,
        h = (0, u.A)(),
        p = (0, c.yM)(),
        v = (0, R._R)(),
        { enabled: N } = _.Y.useConfig({
            location: "ExplicitMediaLearnMoreModal",
        }),
        S = (0, I.W)(g.intl.string(g.t.KPGVWl), g.intl.string(g.t["9KiIz6"])),
        b = i.useMemo(() => p && v, [p, v]),
        D = i.useCallback(
            (t) => {
                (0, R.hv)({
                    action: t,
                    channelId: e,
                    messageId: O,
                });
            },
            [e, O],
        ),
        m = i.useCallback(() => {
            P(),
                D(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, o.mMO)(async () => {
                    let { default: t } = await n(652442);
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            (function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (e) {
                                            var r;
                                            (r = n[e]),
                                                e in t
                                                    ? Object.defineProperty(t, e, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (t[e] = r);
                                        });
                                }
                                return t;
                            })(
                                {
                                    channelId: e,
                                    messageId: O,
                                },
                                n,
                            ),
                        );
                });
        }, [e, O, P, D]);
    return (
        i.useEffect(() => {
            (0, R.hv)({
                action: R.rY.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: e,
                messageId: O,
            });
        }, [e, O]),
        (0, r.jsx)(l.Modal, {
            title: g.intl.string(g.t.sGW77l),
            subtitle: (function () {
                if (b)
                    return g.intl.format(N ? g.t.KEPOlE : g.t["1L0huf"], {
                        handleOnHelpUrlHook: () => {
                            E.A.openUrl(L.A.getArticleURL(M.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                D(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                        },
                    });
                let t = g.intl.string(g.t.RUw0ZC),
                    e = g.intl.string(g.t["E/oQYL"]);
                return h ? t : e;
            })(),
            actions: [
                (function () {
                    if (!v && !b)
                        return {
                            text: g.intl.string(g.t.ZH7P2h),
                            onClick: m,
                            variant: "secondary",
                        };
                })(),
                b
                    ? {
                          text: S,
                          onClick: function () {
                              P(),
                                  D(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                  E.A.showAgeVerificationGetStartedModal({
                                      entryPoint: s.q1.SENSITIVE_MEDIA_LEARN_MORE,
                                  });
                          },
                      }
                    : h
                      ? {
                            text: g.intl.string(g.t["9D+zGX"]),
                            onClick: function () {
                                D(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
                                let t = (0, d.WJ)("ExplicitMediaLearnMoreModal");
                                (0, C.openUserSettings)(
                                    t ? A.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING : A.X.CONTENT_AND_SOCIAL_PANEL,
                                    {
                                        section: M.nc_.CONTENT_AND_SOCIAL,
                                        scrollPosition: t ? void 0 : T.d1.EXPLICIT_MEDIA_REDACTION_V2,
                                    },
                                ),
                                    P();
                            },
                        }
                      : {
                            text: g.intl.string(g.t.hvVgAZ),
                            onClick: () => {
                                (0, a.A)(L.A.getArticleURL(M.MVz.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (P(), D(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: f,
        })
    );
};
