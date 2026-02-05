n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    r = n(421380),
    a = n(935649),
    l = n(847599),
    o = n(171316),
    c = n(71393),
    d = n(954571),
    u = n(975571),
    _ = n(115063),
    m = n(152076),
    A = n(762183),
    g = n(253932),
    E = n(112469),
    h = n(871930),
    p = n(578746),
    C = n(997913),
    x = n(542457),
    T = n(355097),
    I = n(531525);
n(820575);
var S = n(652215),
    f = n(985018),
    N = n(842130);
function b(e) {
    let { ingress: t, guildId: n } = e,
        b = (0, E.q9)(),
        R = (0, A.K)(),
        v = g.$s.useSetting().includes(n),
        O = (0, o.uM)(),
        j = g.YX.useSetting(),
        P = g.Zr.useSetting().includes(n),
        y = s.useCallback(
            (e) => {
                let i = (0, _.xo)();
                e ? i.delete(n) : i.add(n),
                    g.Zr.updateSetting(Array.from(i)),
                    d.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: x.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [t, n],
        );
    function L(e, t) {
        d.default.track(S.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    }
    function D(e, t) {
        var n;
        !e && (0, m.w)()
            ? a.A.showAgeVerificationGetStartedModal({ entryPoint: l.q1.MESSAGE_REQUESTS_SETTINGS })
            : t
              ? y(e)
              : ((n = !e),
                (0, C.O)({
                    header: f.intl.string(f.t.yAfu1p),
                    body: f.intl.string(f.t.Ry2z74),
                    confirmText: f.intl.string(f.t.gm1Vej),
                    cancelText: f.intl.string(f.t.p89ACt),
                    confirmButtonColor: r.$n.Colors.BRAND,
                    onConfirm: () => {
                        g.YX.updateSetting(n), L(n, !1);
                    },
                    onCancel: () => {
                        g.YX.updateSetting(n), g.Zr.updateSetting(n ? c.A.getGuildIds() : []), L(n, !0);
                    },
                }));
    }
    return (0, i.jsx)(h.h, {
        setting: I.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: T.d1.MESSAGE_REQUESTS_V2,
        children:
            "0" === n
                ? (0, i.jsx)(p.Ay, {
                      title: f.intl.string(f.t["3o2ojh"]),
                      value: !R && !j,
                      onChange: (e) => D(e, !1),
                      disabled: R || O,
                      tooltipText: O ? f.intl.string(N.default["6Af/cw"]) : void 0,
                      note: f.intl.format(f.t.wkm9a3, { helpdeskArticle: u.A.getArticleURL(S.MVz.MESSAGE_REQUESTS) }),
                  })
                : (0, i.jsx)(p.Ay, {
                      title: f.intl.string(f.t["3o2ojh"]),
                      value: !v && !P,
                      onChange: (e) => D(e, !0),
                      disabled: v,
                      note: b
                          ? f.intl.format(f.t.WpnWLc, { helpdeskArticle: u.A.getArticleURL(S.MVz.MESSAGE_REQUESTS) })
                          : f.intl.format(f.t.wkm9a3, { helpdeskArticle: u.A.getArticleURL(S.MVz.MESSAGE_REQUESTS) }),
                  }),
    });
}
function R(e) {
    let { ingress: t = T.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, E.Tx)();
    return (0, i.jsx)(b, { ingress: t, guildId: n ?? s });
}
