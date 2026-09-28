e.d(n, { default: () => R });
var i = e(477900),
    E = e(582128),
    _ = e(189213),
    r = e(192308),
    I = e(975807),
    s = e(379257),
    l = e(36149),
    o = e(945276),
    C = e(780964),
    a = e(766075),
    A = e(975571),
    c = e(390248),
    L = e(652215),
    u = e(375708);
let R = function (t) {
    let { channelId: n, messageId: R, transitionState: M, onClose: T } = t,
        g = (0, o.A)(),
        f = (0, l.yM)(),
        d = (0, c._R)(),
        N = E.useMemo(() => f && d, [f, d]),
        h = E.useCallback(
            (t) => {
                (0, c.hv)({ action: t, channelId: n, messageId: R });
            },
            [n, R],
        ),
        S = E.useCallback(() => {
            (T(),
                h(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, r.openModalLazy)(async () => {
                    let { default: t } = await e(679276);
                    return (e) => (0, i.jsx)(t, { channelId: n, messageId: R, ...e });
                }));
        }, [n, R, T, h]);
    return (
        E.useEffect(() => {
            (0, c.hv)({ action: c.rY.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId: n, messageId: R });
        }, [n, R]),
        (0, i.jsx)(_.a, {
            title: u.intl.string(u.t.sGW77l),
            subtitle: (function () {
                if (N) return u.intl.string(u.t["5e0geG"]);
                let t = u.intl.string(u.t.RUw0ZC),
                    n = u.intl.string(u.t["E/oQYL"]);
                return g ? t : n;
            })(),
            actions: [
                (function () {
                    if (!d && !N) return { text: u.intl.string(u.t.ZH7P2h), onClick: S, variant: "secondary" };
                })(),
                N
                    ? {
                          text: u.intl.string(u.t.hvVgAZ),
                          onClick: function () {
                              (h(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE),
                                  s.A.openUrl(A.A.getArticleURL(L.MVz.TIGGER_PAWTECT_LEARN_MORE)));
                          },
                      }
                    : g
                      ? {
                            text: u.intl.string(u.t["9D+zGX"]),
                            onClick: function () {
                                (h(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                    (0, a.openUserSettings)(C.X.CONTENT_FILTERS_SETTING),
                                    T());
                            },
                        }
                      : {
                            text: u.intl.string(u.t.hvVgAZ),
                            onClick: function () {
                                (0, I.A)(A.A.getArticleURL(L.MVz.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (T(), h(c.rY.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: M,
        })
    );
};
