var E = i(477900),
    e = i(582128),
    _ = i(189213),
    I = i(192308),
    r = i(975807),
    l = i(871309),
    o = i(171576),
    s = i(36149),
    a = i(945276),
    A = i(780964),
    C = i(766075),
    c = i(975571),
    L = i(390248),
    R = i(652215),
    M = i(792996),
    g = i(221858);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { channelId: n, messageId: u, transitionState: T, onClose: N } = t,
                d = (0, a.A)(),
                D = (0, s.yM)(),
                S = (0, L._R)(),
                k = e.useMemo(() => D && S, [D, S]),
                O = e.useCallback(
                    (t) => {
                        (0, L.hv)({ action: t, channelId: n, messageId: u });
                    },
                    [n, u],
                );
            function f() {
                (O(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE),
                    (0, r.A)(c.A.getArticleURL(R.MVz.EXPLICIT_MEDIA_REDACTION)));
            }
            let h = e.useCallback(() => {
                (N(),
                    O(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                    (0, I.mM)(async () => {
                        let { default: t } = await i(544135);
                        return (i) => (0, E.jsx)(t, { channelId: n, messageId: u, ...i });
                    }));
            }, [n, u, N, O]);
            return (
                e.useEffect(() => {
                    (0, L.hv)({ action: L.rY.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId: n, messageId: u });
                }, [n, u]),
                (0, E.jsx)(_.a, {
                    title: S ? M.intl.string(M.t["2t3DCx"]) : M.intl.string(M.t.sGW77l),
                    subtitle: k
                        ? M.intl.format(M.t["24JQP1"], {
                              handleOnTeenAgeGroupHook: function () {
                                  (O(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE),
                                      l.A.openUrl(c.A.getArticleURL(M.intl.string(g.default.agiNYw))));
                              },
                          })
                        : S
                          ? M.intl.string(M.t["3y2fov"])
                          : !0 === d
                            ? M.intl.format(M.t.kIEcIY, { handleOnHelpCenterHook: f })
                            : M.intl.string(M.t["E/oQYL"]),
                    actions: [
                        k
                            ? {
                                  text: M.intl.string(M.t.bmbHPA),
                                  onClick: function () {
                                      (O(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), N());
                                  },
                                  variant: "secondary",
                              }
                            : S
                              ? { text: M.intl.string(M.t.hvVgAZ), onClick: f, variant: "secondary" }
                              : { text: M.intl.string(M.t.GMeoVu), onClick: h, variant: "secondary" },
                        k
                            ? { text: M.intl.string(M.t.hvVgAZ), onClick: f }
                            : S
                              ? {
                                    text: M.intl.string(M.t.DVywUB),
                                    onClick: function () {
                                        (O(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                            N(),
                                            l.A.showAgeVerificationGetStartedModal({
                                                entryPoint: o.q1.SENSITIVE_MEDIA_LEARN_MORE,
                                            }));
                                    },
                                }
                              : !0 === d
                                ? {
                                      text: M.intl.string(M.t["9D+zGX"]),
                                      onClick: function () {
                                          (O(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                              (0, C.openUserSettings)(A.X.CONTENT_FILTERS_SETTING),
                                              N());
                                      },
                                  }
                                : { text: M.intl.string(M.t.hvVgAZ), onClick: f },
                    ],
                    onClose: () => (N(), O(L.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
                    transitionState: T,
                })
            );
        },
    },
);
