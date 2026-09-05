E.d(n, { default: () => u });
var e = E(477900),
    i = E(582128),
    _ = E(189213),
    I = E(192308),
    r = E(975807),
    l = E(379257),
    o = E(847599),
    s = E(36149),
    A = E(945276),
    a = E(780964),
    C = E(766075),
    R = E(975571),
    L = E(390248),
    c = E(652215),
    M = E(375708);
let u = function (t) {
    let { channelId: n, messageId: u, transitionState: T, onClose: d } = t,
        f = (0, A.A)(),
        N = (0, s.yM)(),
        O = (0, L._R)(),
        S = M.intl.string(M.t["9KiIz6"]),
        g = i.useMemo(() => N && O, [N, O]),
        P = i.useCallback(
            (t) => {
                (0, L.hv)({ action: t, channelId: n, messageId: u });
            },
            [n, u],
        ),
        h = i.useCallback(() => {
            d(),
                P(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, I.openModalLazy)(async () => {
                    let { default: t } = await E(679276);
                    return (E) => (0, e.jsx)(t, { channelId: n, messageId: u, ...E });
                });
        }, [n, u, d, P]);
    return (
        i.useEffect(() => {
            (0, L.hv)({ action: L.rY.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId: n, messageId: u });
        }, [n, u]),
        (0, e.jsx)(_.Modal, {
            title: M.intl.string(M.t.sGW77l),
            subtitle: (function () {
                if (g)
                    return M.intl.format(M.t.KEPOlE, {
                        handleOnHelpUrlHook: () => {
                            l.A.openUrl(R.A.getArticleURL(c.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                P(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                        },
                    });
                let t = M.intl.string(M.t.RUw0ZC),
                    n = M.intl.string(M.t["E/oQYL"]);
                return f ? t : n;
            })(),
            actions: [
                (function () {
                    if (!O && !g) return { text: M.intl.string(M.t.ZH7P2h), onClick: h, variant: "secondary" };
                })(),
                g
                    ? {
                          text: S,
                          onClick: function () {
                              d(),
                                  P(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                  l.A.showAgeVerificationGetStartedModal({
                                      entryPoint: o.q1.SENSITIVE_MEDIA_LEARN_MORE,
                                  });
                          },
                      }
                    : f
                      ? {
                            text: M.intl.string(M.t["9D+zGX"]),
                            onClick: function () {
                                P(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                    (0, C.openUserSettings)(a.X.CONTENT_FILTERS_SETTING),
                                    d();
                            },
                        }
                      : {
                            text: M.intl.string(M.t.hvVgAZ),
                            onClick: function () {
                                (0, r.A)(R.A.getArticleURL(c.MVz.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (d(), P(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: T,
        })
    );
};
