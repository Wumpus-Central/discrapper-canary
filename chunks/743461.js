n.d(e, { default: () => f });
var i = n(627968),
    r = n(64700),
    l = n(158954),
    E = n(397927),
    o = n(975807),
    a = n(935649),
    s = n(847599),
    _ = n(620715),
    I = n(870383),
    A = n(36149),
    d = n(945276),
    C = n(780964),
    L = n(358776),
    c = n(840065),
    u = n(975571),
    R = n(390248),
    M = n(652215),
    T = n(355097),
    g = n(985018);
let f = (t) => {
    let { channelId: e, messageId: f, transitionState: N, onClose: O } = t,
        P = (0, d.A)(),
        h = (0, A.yM)(),
        S = (0, R._R)(),
        { enabled: D } = _.Y.useConfig({ location: "ExplicitMediaLearnMoreModal" }),
        p = (0, I.W)(g.intl.string(g.t.KPGVWl), g.intl.string(g.t["9KiIz6"])),
        v = r.useMemo(() => h && S, [h, S]),
        m = r.useCallback(
            (t) => {
                (0, R.hv)({ action: t, channelId: e, messageId: f });
            },
            [e, f],
        ),
        X = r.useCallback(() => {
            O(),
                m(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, E.mMO)(async () => {
                    let { default: t } = await n(652442);
                    return (n) => (0, i.jsx)(t, { channelId: e, messageId: f, ...n });
                });
        }, [e, f, O, m]);
    return (
        r.useEffect(() => {
            (0, R.hv)({ action: R.rY.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId: e, messageId: f });
        }, [e, f]),
        (0, i.jsx)(l.Modal, {
            title: g.intl.string(g.t.sGW77l),
            subtitle: (function () {
                if (v)
                    return g.intl.format(D ? g.t.KEPOlE : g.t["1L0huf"], {
                        handleOnHelpUrlHook: () => {
                            a.A.openUrl(u.A.getArticleURL(M.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                m(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                        },
                    });
                let t = g.intl.string(g.t.RUw0ZC),
                    e = g.intl.string(g.t["E/oQYL"]);
                return P ? t : e;
            })(),
            actions: [
                (function () {
                    if (!S && !v) return { text: g.intl.string(g.t.ZH7P2h), onClick: X, variant: "secondary" };
                })(),
                v
                    ? {
                          text: p,
                          onClick: function () {
                              O(),
                                  m(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                  a.A.showAgeVerificationGetStartedModal({
                                      entryPoint: s.q1.SENSITIVE_MEDIA_LEARN_MORE,
                                  });
                          },
                      }
                    : P
                      ? {
                            text: g.intl.string(g.t["9D+zGX"]),
                            onClick: function () {
                                m(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
                                let t = (0, L.WJ)("ExplicitMediaLearnMoreModal");
                                (0, c.openUserSettings)(
                                    t ? C.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING : C.X.CONTENT_AND_SOCIAL_PANEL,
                                    {
                                        section: M.nc_.CONTENT_AND_SOCIAL,
                                        scrollPosition: t ? void 0 : T.d1.EXPLICIT_MEDIA_REDACTION_V2,
                                    },
                                ),
                                    O();
                            },
                        }
                      : {
                            text: g.intl.string(g.t.hvVgAZ),
                            onClick: () => {
                                (0, o.A)(u.A.getArticleURL(M.MVz.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (O(), m(R.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: N,
        })
    );
};
