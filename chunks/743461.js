E.d(n, { default: () => u });
var e = E(627968),
    i = E(64700),
    _ = E(189213),
    I = E(192308),
    r = E(975807),
    l = E(139716),
    o = E(847599),
    s = E(36149),
    A = E(945276),
    C = E(780964),
    a = E(766075),
    R = E(975571),
    L = E(390248),
    c = E(652215),
    M = E(375708);
let u = function (t) {
    let { channelId: n, messageId: u, transitionState: T, onClose: N } = t,
        d = (0, A.A)(),
        O = (0, s.yM)(),
        f = (0, L._R)(),
        S = M.intl.string(M.t["9KiIz6"]),
        g = i.useMemo(() => O && f, [O, f]),
        D = i.useCallback(
            (t) => {
                (0, L.hv)({ action: t, channelId: n, messageId: u });
            },
            [n, u],
        ),
        P = i.useCallback(() => {
            N(),
                D(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, I.openModalLazy)(async () => {
                    let { default: t } = await E(679276);
                    return (E) => (0, e.jsx)(t, { channelId: n, messageId: u, ...E });
                });
        }, [n, u, N, D]);
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
                                D(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                        },
                    });
                let t = M.intl.string(M.t.RUw0ZC),
                    n = M.intl.string(M.t["E/oQYL"]);
                return d ? t : n;
            })(),
            actions: [
                (function () {
                    if (!f && !g) return { text: M.intl.string(M.t.ZH7P2h), onClick: P, variant: "secondary" };
                })(),
                g
                    ? {
                          text: S,
                          onClick: function () {
                              N(),
                                  D(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                  l.A.showAgeVerificationGetStartedModal({
                                      entryPoint: o.q1.SENSITIVE_MEDIA_LEARN_MORE,
                                  });
                          },
                      }
                    : d
                      ? {
                            text: M.intl.string(M.t["9D+zGX"]),
                            onClick: function () {
                                D(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                    (0, a.openUserSettings)(C.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING),
                                    N();
                            },
                        }
                      : {
                            text: M.intl.string(M.t.hvVgAZ),
                            onClick: function () {
                                (0, r.A)(R.A.getArticleURL(c.MVz.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (N(), D(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: T,
        })
    );
};
