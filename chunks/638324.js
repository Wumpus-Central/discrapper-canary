n.d(e, { A: () => v });
var i = n(627968),
    l = n(64700),
    r = n(421380),
    u = n(935649),
    d = n(847599),
    s = n(171316),
    a = n(71393),
    o = n(954571),
    c = n(975571),
    g = n(115063),
    S = n(152076),
    _ = n(762183),
    T = n(253932),
    A = n(112469),
    E = n(106148),
    f = n(650832),
    C = n(137675),
    G = n(542457),
    p = n(355097);
n(927693);
var I = n(652215),
    m = n(985018),
    x = n(842130);
function R(t) {
    let { ingress: e, guildId: n } = t,
        p = (0, A.q9)(),
        R = (0, _.K)(),
        v = T.$s.useSetting().includes(n),
        h = (0, s.uM)(),
        D = T.YX.useSetting(),
        U = T.Zr.useSetting().includes(n),
        N = l.useCallback(
            (t) => {
                let i = (0, g.xo)();
                t ? i.delete(n) : i.add(n),
                    T.Zr.updateSetting(Array.from(i)),
                    o.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: G.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: e,
                        guild_id: n,
                    });
            },
            [e, n],
        );
    function j(t, e) {
        o.default.track(I.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    function k(t, e) {
        var n;
        !t && (0, S.w)()
            ? u.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.MESSAGE_REQUESTS_SETTINGS })
            : e
              ? N(t)
              : ((n = !t),
                (0, C.O)({
                    header: m.intl.string(m.t.yAfu1p),
                    body: m.intl.string(m.t.Ry2z74),
                    confirmText: m.intl.string(m.t.gm1Vej),
                    cancelText: m.intl.string(m.t.p89ACt),
                    confirmButtonColor: r.$n.Colors.BRAND,
                    onConfirm: () => {
                        T.YX.updateSetting(n), j(n, !1);
                    },
                    onCancel: () => {
                        T.YX.updateSetting(n), T.Zr.updateSetting(n ? a.A.getGuildIds() : []), j(n, !0);
                    },
                }));
    }
    return (0, i.jsx)(E.h, {
        children:
            "0" === n
                ? (0, i.jsx)(f.Ay, {
                      title: m.intl.string(m.t["3o2ojh"]),
                      value: !R && !D,
                      onChange: (t) => k(t, !1),
                      disabled: R || h,
                      tooltipText: h ? m.intl.string(x.default["6Af/cw"]) : void 0,
                      note: m.intl.format(m.t.wkm9a3, { helpdeskArticle: c.A.getArticleURL(I.MVz.MESSAGE_REQUESTS) }),
                  })
                : (0, i.jsx)(f.Ay, {
                      title: m.intl.string(m.t["3o2ojh"]),
                      value: !v && !U,
                      onChange: (t) => k(t, !0),
                      disabled: v,
                      note: p
                          ? m.intl.format(m.t.WpnWLc, { helpdeskArticle: c.A.getArticleURL(I.MVz.MESSAGE_REQUESTS) })
                          : m.intl.format(m.t.wkm9a3, { helpdeskArticle: c.A.getArticleURL(I.MVz.MESSAGE_REQUESTS) }),
                  }),
    });
}
function v(t) {
    let { ingress: e = p.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = t,
        l = (0, A.Tx)();
    return (0, i.jsx)(R, { ingress: e, guildId: n ?? l });
}
