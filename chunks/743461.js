n.d(e, {
    default: () => M,
});
var r = n(627968),
    i = n(64700),
    l = n(158954),
    o = n(397927),
    a = n(975807),
    E = n(935649),
    s = n(847599),
    _ = n(36149),
    I = n(945276),
    c = n(780964),
    u = n(358776),
    A = n(840065),
    C = n(975571),
    d = n(390248),
    L = n(652215),
    R = n(355097),
    T = n(985018);
let M = (t) => {
    let { channelId: e, messageId: M, transitionState: O, onClose: f } = t,
        g = (0, I.A)(),
        P = (0, _.yM)(),
        h = (0, d._R)(),
        v = i.useMemo(() => P && h, [P, h]),
        N = i.useCallback(
            (t) => {
                (0, d.hv)({
                    action: t,
                    channelId: e,
                    messageId: M,
                });
            },
            [e, M],
        ),
        p = i.useCallback(() => {
            f(),
                N(d.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
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
                                    messageId: M,
                                },
                                n,
                            ),
                        );
                });
        }, [e, M, f, N]);
    return (
        i.useEffect(() => {
            (0, d.hv)({
                action: d.rY.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: e,
                messageId: M,
            });
        }, [e, M]),
        (0, r.jsx)(l.Modal, {
            title: T.intl.string(T.t.sGW77l),
            subtitle: (function () {
                if (v)
                    return T.intl.format(T.t["1L0huf"], {
                        handleOnHelpUrlHook: () => {
                            E.A.openUrl(C.A.getArticleURL(L.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                N(d.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                        },
                    });
                let t = T.intl.string(T.t.RUw0ZC),
                    e = T.intl.string(T.t["E/oQYL"]);
                return g ? t : e;
            })(),
            actions: [
                (function () {
                    if (!h && !v)
                        return {
                            text: T.intl.string(T.t.ZH7P2h),
                            onClick: p,
                            variant: "secondary",
                        };
                })(),
                v
                    ? {
                          text: T.intl.string(T.t.KPGVWl),
                          onClick: function () {
                              f(),
                                  N(d.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                  E.A.showAgeVerificationGetStartedModal({
                                      entryPoint: s.q1.SENSITIVE_MEDIA_LEARN_MORE,
                                  });
                          },
                      }
                    : g
                      ? {
                            text: T.intl.string(T.t["9D+zGX"]),
                            onClick: function () {
                                N(d.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
                                let t = (0, u.WJ)("ExplicitMediaLearnMoreModal");
                                (0, A.openUserSettings)(
                                    t ? c.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING : c.X.CONTENT_AND_SOCIAL_PANEL,
                                    {
                                        section: L.nc_.CONTENT_AND_SOCIAL,
                                        scrollPosition: t ? void 0 : R.d1.EXPLICIT_MEDIA_REDACTION_V2,
                                    },
                                ),
                                    f();
                            },
                        }
                      : {
                            text: T.intl.string(T.t.hvVgAZ),
                            onClick: () => {
                                (0, a.A)(C.A.getArticleURL(L.MVz.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (f(), N(d.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: O,
        })
    );
};
