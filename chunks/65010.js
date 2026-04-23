i.d(e, { A: () => m });
var n = i(627968),
    l = i(64700),
    r = i(862482),
    s = i(935649),
    d = i(847599),
    a = i(171316),
    u = i(71393),
    _ = i(954571),
    S = i(975571),
    o = i(115063),
    g = i(152076),
    E = i(762183),
    A = i(253932),
    c = i(112469),
    T = i(106148),
    I = i(650832),
    R = i(137675),
    G = i(542457),
    f = i(355097);
i(927693);
var C = i(652215),
    x = i(985018),
    h = i(602339);
function p(t) {
    let { ingress: e, guildId: i } = t,
        f = (0, c.q9)(),
        p = (0, E.K)(),
        m = A.$s.useSetting().includes(i),
        U = (0, a.uM)(),
        v = A.YX.useSetting(),
        V = A.Zr.useSetting().includes(i),
        j = l.useCallback(
            (t) => {
                let n = (0, o.xo)();
                t ? n.delete(i) : n.add(i),
                    A.Zr.updateSetting(Array.from(n)),
                    _.default.track(C.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: G.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [e, i],
        );
    function L(t, e) {
        _.default.track(C.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    function Y(t, e) {
        var i;
        !t && (0, g.w)()
            ? s.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.MESSAGE_REQUESTS_SETTINGS })
            : e
              ? j(t)
              : ((i = !t),
                (0, R.O)({
                    header: x.intl.string(x.t.yAfu1p),
                    body: x.intl.string(x.t.Ry2z74),
                    confirmText: x.intl.string(x.t.gm1Vej),
                    cancelText: x.intl.string(x.t.p89ACt),
                    confirmButtonColor: r.$n.Colors.BRAND,
                    onConfirm: () => {
                        A.YX.updateSetting(i), L(i, !1);
                    },
                    onCancel: () => {
                        A.YX.updateSetting(i), A.Zr.updateSetting(i ? u.A.getGuildIds() : []), L(i, !0);
                    },
                }));
    }
    return (0, n.jsx)(T.h, {
        children:
            "0" === i
                ? (0, n.jsx)(I.Ay, {
                      title: x.intl.string(x.t["3o2ojh"]),
                      value: !p && !v,
                      onChange: (t) => Y(t, !1),
                      disabled: p || U,
                      tooltipText: U ? x.intl.string(h.default["6Af/cw"]) : void 0,
                      note: x.intl.format(x.t.wkm9a3, { helpdeskArticle: S.A.getArticleURL(C.MVz.MESSAGE_REQUESTS) }),
                  })
                : (0, n.jsx)(I.Ay, {
                      title: x.intl.string(x.t["3o2ojh"]),
                      value: !m && !V,
                      onChange: (t) => Y(t, !0),
                      disabled: m,
                      note: f
                          ? x.intl.format(x.t.WpnWLc, { helpdeskArticle: S.A.getArticleURL(C.MVz.MESSAGE_REQUESTS) })
                          : x.intl.format(x.t.wkm9a3, { helpdeskArticle: S.A.getArticleURL(C.MVz.MESSAGE_REQUESTS) }),
                  }),
    });
}
function m(t) {
    let { ingress: e = f.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, c.Tx)();
    return (0, n.jsx)(p, { ingress: e, guildId: i ?? l });
}
