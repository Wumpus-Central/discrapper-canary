n.d(e, { default: () => M });
var i = n(627968),
    r = n(64700),
    l = n(158954),
    E = n(397927),
    o = n(975807),
    _ = n(935649),
    s = n(847599),
    a = n(36149),
    I = n(945276),
    A = n(780964),
    C = n(358776),
    d = n(840065),
    L = n(975571),
    c = n(390248),
    R = n(652215),
    u = n(355097),
    T = n(985018);
let M = (t) => {
    let { channelId: e, messageId: M, transitionState: g, onClose: N } = t,
        O = (0, I.A)(),
        f = (0, a.yM)(),
        P = (0, c._R)(),
        h = T.intl.string(T.t["9KiIz6"]),
        S = r.useMemo(() => f && P, [f, P]),
        D = r.useCallback(
            (t) => {
                (0, c.hv)({ action: t, channelId: e, messageId: M });
            },
            [e, M],
        ),
        p = r.useCallback(() => {
            N(),
                D(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, E.mMO)(async () => {
                    let { default: t } = await n(652442);
                    return (n) => (0, i.jsx)(t, { channelId: e, messageId: M, ...n });
                });
        }, [e, M, N, D]);
    return (
        r.useEffect(() => {
            (0, c.hv)({ action: c.rY.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId: e, messageId: M });
        }, [e, M]),
        (0, i.jsx)(l.Modal, {
            title: T.intl.string(T.t.sGW77l),
            subtitle: (function () {
                if (S)
                    return T.intl.format(T.t.KEPOlE, {
                        handleOnHelpUrlHook: () => {
                            _.A.openUrl(L.A.getArticleURL(R.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                D(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                        },
                    });
                let t = T.intl.string(T.t.RUw0ZC),
                    e = T.intl.string(T.t["E/oQYL"]);
                return O ? t : e;
            })(),
            actions: [
                (function () {
                    if (!P && !S) return { text: T.intl.string(T.t.ZH7P2h), onClick: p, variant: "secondary" };
                })(),
                S
                    ? {
                          text: h,
                          onClick: function () {
                              N(),
                                  D(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                  _.A.showAgeVerificationGetStartedModal({
                                      entryPoint: s.q1.SENSITIVE_MEDIA_LEARN_MORE,
                                  });
                          },
                      }
                    : O
                      ? {
                            text: T.intl.string(T.t["9D+zGX"]),
                            onClick: function () {
                                D(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
                                let t = (0, C.WJ)("ExplicitMediaLearnMoreModal");
                                (0, d.openUserSettings)(
                                    t ? A.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING : A.X.CONTENT_AND_SOCIAL_PANEL,
                                    {
                                        section: R.nc_.CONTENT_AND_SOCIAL,
                                        scrollPosition: t ? void 0 : u.d1.EXPLICIT_MEDIA_REDACTION_V2,
                                    },
                                ),
                                    N();
                            },
                        }
                      : {
                            text: T.intl.string(T.t.hvVgAZ),
                            onClick: () => {
                                (0, o.A)(L.A.getArticleURL(R.MVz.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (N(), D(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: g,
        })
    );
};
