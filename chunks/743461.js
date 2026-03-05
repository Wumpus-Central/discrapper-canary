n.d(e, { default: () => L });
var i = n(627968),
    r = n(64700),
    l = n(158954),
    E = n(397927),
    s = n(975807),
    a = n(935649),
    o = n(847599),
    _ = n(36149),
    I = n(945276),
    A = n(780964),
    C = n(840065),
    d = n(975571),
    c = n(390248),
    u = n(652215),
    R = n(985018);
let L = (t) => {
    let { channelId: e, messageId: L, transitionState: T, onClose: M } = t,
        g = (0, I.A)(),
        f = (0, _.yM)(),
        h = (0, c._R)(),
        O = R.intl.string(R.t["9KiIz6"]),
        S = r.useMemo(() => f && h, [f, h]),
        N = r.useCallback(
            (t) => {
                (0, c.hv)({ action: t, channelId: e, messageId: L });
            },
            [e, L],
        ),
        P = r.useCallback(() => {
            M(),
                N(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, E.mMO)(async () => {
                    let { default: t } = await n(652442);
                    return (n) => (0, i.jsx)(t, { channelId: e, messageId: L, ...n });
                });
        }, [e, L, M, N]);
    return (
        r.useEffect(() => {
            (0, c.hv)({ action: c.rY.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId: e, messageId: L });
        }, [e, L]),
        (0, i.jsx)(l.Modal, {
            title: R.intl.string(R.t.sGW77l),
            subtitle: (function () {
                if (S)
                    return R.intl.format(R.t.KEPOlE, {
                        handleOnHelpUrlHook: () => {
                            a.A.openUrl(d.A.getArticleURL(u.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                N(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                        },
                    });
                let t = R.intl.string(R.t.RUw0ZC),
                    e = R.intl.string(R.t["E/oQYL"]);
                return g ? t : e;
            })(),
            actions: [
                (function () {
                    if (!h && !S) return { text: R.intl.string(R.t.ZH7P2h), onClick: P, variant: "secondary" };
                })(),
                S
                    ? {
                          text: O,
                          onClick: function () {
                              M(),
                                  N(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                  a.A.showAgeVerificationGetStartedModal({
                                      entryPoint: o.q1.SENSITIVE_MEDIA_LEARN_MORE,
                                  });
                          },
                      }
                    : g
                      ? {
                            text: R.intl.string(R.t["9D+zGX"]),
                            onClick: function () {
                                N(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                    (0, C.openUserSettings)(A.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
                                        section: u.nc_.CONTENT_AND_SOCIAL,
                                    }),
                                    M();
                            },
                        }
                      : {
                            text: R.intl.string(R.t.hvVgAZ),
                            onClick: () => {
                                (0, s.A)(d.A.getArticleURL(u.MVz.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (M(), N(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: T,
        })
    );
};
