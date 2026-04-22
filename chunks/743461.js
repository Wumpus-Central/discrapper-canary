n.d(e, { default: () => c });
var i = n(627968),
    r = n(64700),
    l = n(189213),
    E = n(192308),
    a = n(975807),
    o = n(935649),
    s = n(847599),
    _ = n(36149),
    I = n(945276),
    A = n(780964),
    d = n(858897),
    C = n(975571),
    u = n(390248),
    R = n(652215),
    L = n(985018);
let c = (t) => {
    let { channelId: e, messageId: c, transitionState: M, onClose: g } = t,
        f = (0, I.A)(),
        T = (0, _.yM)(),
        h = (0, u._R)(),
        P = L.intl.string(L.t["9KiIz6"]),
        S = r.useMemo(() => T && h, [T, h]),
        O = r.useCallback(
            (t) => {
                (0, u.hv)({ action: t, channelId: e, messageId: c });
            },
            [e, c],
        ),
        p = r.useCallback(() => {
            g(),
                O(u.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, E.openModalLazy)(async () => {
                    let { default: t } = await n(652442);
                    return (n) => (0, i.jsx)(t, { channelId: e, messageId: c, ...n });
                });
        }, [e, c, g, O]);
    return (
        r.useEffect(() => {
            (0, u.hv)({ action: u.rY.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId: e, messageId: c });
        }, [e, c]),
        (0, i.jsx)(l.Modal, {
            title: L.intl.string(L.t.sGW77l),
            subtitle: (function () {
                if (S)
                    return L.intl.format(L.t.KEPOlE, {
                        handleOnHelpUrlHook: () => {
                            o.A.openUrl(C.A.getArticleURL(R.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                O(u.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                        },
                    });
                let t = L.intl.string(L.t.RUw0ZC),
                    e = L.intl.string(L.t["E/oQYL"]);
                return f ? t : e;
            })(),
            actions: [
                (function () {
                    if (!h && !S) return { text: L.intl.string(L.t.ZH7P2h), onClick: p, variant: "secondary" };
                })(),
                S
                    ? {
                          text: P,
                          onClick: function () {
                              g(),
                                  O(u.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                  o.A.showAgeVerificationGetStartedModal({
                                      entryPoint: s.q1.SENSITIVE_MEDIA_LEARN_MORE,
                                  });
                          },
                      }
                    : f
                      ? {
                            text: L.intl.string(L.t["9D+zGX"]),
                            onClick: function () {
                                O(u.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                    (0, d.openUserSettings)(A.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING),
                                    g();
                            },
                        }
                      : {
                            text: L.intl.string(L.t.hvVgAZ),
                            onClick: () => {
                                (0, a.A)(C.A.getArticleURL(R.MVz.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (g(), O(u.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: M,
        })
    );
};
