n.d(e, { default: () => L });
var r = n(627968),
    i = n(64700),
    l = n(158954),
    E = n(397927),
    s = n(975807),
    a = n(935649),
    o = n(847599),
    _ = n(36149),
    I = n(945276),
    A = n(780964),
    d = n(840065),
    C = n(975571),
    u = n(390248),
    R = n(652215),
    c = n(985018);
let L = (t) => {
    let { channelId: e, messageId: L, transitionState: M, onClose: T } = t,
        g = (0, I.A)(),
        f = (0, _.yM)(),
        h = (0, u._R)(),
        P = c.intl.string(c.t["9KiIz6"]),
        S = i.useMemo(() => f && h, [f, h]),
        O = i.useCallback(
            (t) => {
                (0, u.hv)({ action: t, channelId: e, messageId: L });
            },
            [e, L],
        ),
        p = i.useCallback(() => {
            T(),
                O(u.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, E.mMO)(async () => {
                    let { default: t } = await n(652442);
                    return (n) => (0, r.jsx)(t, { channelId: e, messageId: L, ...n });
                });
        }, [e, L, T, O]);
    return (
        i.useEffect(() => {
            (0, u.hv)({ action: u.rY.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId: e, messageId: L });
        }, [e, L]),
        (0, r.jsx)(l.Modal, {
            title: c.intl.string(c.t.sGW77l),
            subtitle: (function () {
                if (S)
                    return c.intl.format(c.t.KEPOlE, {
                        handleOnHelpUrlHook: () => {
                            a.A.openUrl(C.A.getArticleURL(R.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                O(u.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                        },
                    });
                let t = c.intl.string(c.t.RUw0ZC),
                    e = c.intl.string(c.t["E/oQYL"]);
                return g ? t : e;
            })(),
            actions: [
                (function () {
                    if (!h && !S) return { text: c.intl.string(c.t.ZH7P2h), onClick: p, variant: "secondary" };
                })(),
                S
                    ? {
                          text: P,
                          onClick: function () {
                              T(),
                                  O(u.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                  a.A.showAgeVerificationGetStartedModal({
                                      entryPoint: o.q1.SENSITIVE_MEDIA_LEARN_MORE,
                                  });
                          },
                      }
                    : g
                      ? {
                            text: c.intl.string(c.t["9D+zGX"]),
                            onClick: function () {
                                O(u.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                    (0, d.openUserSettings)(A.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING),
                                    T();
                            },
                        }
                      : {
                            text: c.intl.string(c.t.hvVgAZ),
                            onClick: () => {
                                (0, s.A)(C.A.getArticleURL(R.MVz.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (T(), O(u.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: M,
        })
    );
};
