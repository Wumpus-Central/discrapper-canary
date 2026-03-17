E.d(t, { A: () => c });
var e = E(627968),
    A = E(64700),
    I = E(421380),
    S = E(935649),
    T = E(847599),
    n = E(171316),
    C = E(71393),
    R = E(954571),
    i = E(975571),
    l = E(115063),
    r = E(152076),
    N = E(762183),
    u = E(253932),
    d = E(112469),
    O = E(871930),
    s = E(578746),
    V = E(997913),
    D = E(542457),
    a = E(355097),
    P = E(531525);
E(820575);
var o = E(652215),
    G = E(985018),
    Y = E(842130);
function L(_) {
    let { ingress: t, guildId: E } = _,
        a = (0, d.q9)(),
        L = (0, N.K)(),
        c = u.$s.useSetting().includes(E),
        g = (0, n.uM)(),
        M = u.YX.useSetting(),
        U = u.Zr.useSetting().includes(E),
        F = A.useCallback(
            (_) => {
                let e = (0, l.xo)();
                _ ? e.delete(E) : e.add(E),
                    u.Zr.updateSetting(Array.from(e)),
                    R.default.track(o.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: D.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: E,
                    });
            },
            [t, E],
        );
    function f(_, t) {
        R.default.track(o.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: _,
            applied_to_existing_guilds: t,
        });
    }
    function x(_, t) {
        var E;
        !_ && (0, r.w)()
            ? S.A.showAgeVerificationGetStartedModal({ entryPoint: T.q1.MESSAGE_REQUESTS_SETTINGS })
            : t
              ? F(_)
              : ((E = !_),
                (0, V.O)({
                    header: G.intl.string(G.t.yAfu1p),
                    body: G.intl.string(G.t.Ry2z74),
                    confirmText: G.intl.string(G.t.gm1Vej),
                    cancelText: G.intl.string(G.t.p89ACt),
                    confirmButtonColor: I.$n.Colors.BRAND,
                    onConfirm: () => {
                        u.YX.updateSetting(E), f(E, !1);
                    },
                    onCancel: () => {
                        u.YX.updateSetting(E), u.Zr.updateSetting(E ? C.A.getGuildIds() : []), f(E, !0);
                    },
                }));
    }
    return (0, e.jsx)(O.h, {
        setting: P.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        children:
            "0" === E
                ? (0, e.jsx)(s.Ay, {
                      title: G.intl.string(G.t["3o2ojh"]),
                      value: !L && !M,
                      onChange: (_) => x(_, !1),
                      disabled: L || g,
                      tooltipText: g ? G.intl.string(Y.default["6Af/cw"]) : void 0,
                      note: G.intl.format(G.t.wkm9a3, { helpdeskArticle: i.A.getArticleURL(o.MVz.MESSAGE_REQUESTS) }),
                  })
                : (0, e.jsx)(s.Ay, {
                      title: G.intl.string(G.t["3o2ojh"]),
                      value: !c && !U,
                      onChange: (_) => x(_, !0),
                      disabled: c,
                      note: a
                          ? G.intl.format(G.t.WpnWLc, { helpdeskArticle: i.A.getArticleURL(o.MVz.MESSAGE_REQUESTS) })
                          : G.intl.format(G.t.wkm9a3, { helpdeskArticle: i.A.getArticleURL(o.MVz.MESSAGE_REQUESTS) }),
                  }),
    });
}
function c(_) {
    let { ingress: t = a.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: E } = _,
        A = (0, d.Tx)();
    return (0, e.jsx)(L, { ingress: t, guildId: E ?? A });
}
