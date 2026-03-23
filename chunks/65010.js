i.d(e, { A: () => U });
var n = i(627968),
    l = i(64700),
    r = i(421380),
    s = i(935649),
    d = i(847599),
    a = i(171316),
    u = i(71393),
    o = i(954571),
    S = i(975571),
    A = i(115063),
    g = i(152076),
    _ = i(762183),
    E = i(253932),
    c = i(112469),
    T = i(106148),
    R = i(650832),
    f = i(137675),
    I = i(542457),
    C = i(355097);
i(927693);
var G = i(652215),
    x = i(985018),
    p = i(842130);
function h(t) {
    let { ingress: e, guildId: i } = t,
        C = (0, c.q9)(),
        h = (0, _.K)(),
        U = E.$s.useSetting().includes(i),
        V = (0, a.uM)(),
        j = E.YX.useSetting(),
        m = E.Zr.useSetting().includes(i),
        k = l.useCallback(
            (t) => {
                let n = (0, A.xo)();
                t ? n.delete(i) : n.add(i),
                    E.Zr.updateSetting(Array.from(n)),
                    o.default.track(G.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: I.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [e, i],
        );
    function v(t, e) {
        o.default.track(G.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    function Y(t, e) {
        var i;
        !t && (0, g.w)()
            ? s.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.MESSAGE_REQUESTS_SETTINGS })
            : e
              ? k(t)
              : ((i = !t),
                (0, f.O)({
                    header: x.intl.string(x.t.yAfu1p),
                    body: x.intl.string(x.t.Ry2z74),
                    confirmText: x.intl.string(x.t.gm1Vej),
                    cancelText: x.intl.string(x.t.p89ACt),
                    confirmButtonColor: r.$n.Colors.BRAND,
                    onConfirm: () => {
                        E.YX.updateSetting(i), v(i, !1);
                    },
                    onCancel: () => {
                        E.YX.updateSetting(i), E.Zr.updateSetting(i ? u.A.getGuildIds() : []), v(i, !0);
                    },
                }));
    }
    return (0, n.jsx)(T.h, {
        children:
            "0" === i
                ? (0, n.jsx)(R.Ay, {
                      title: x.intl.string(x.t["3o2ojh"]),
                      value: !h && !j,
                      onChange: (t) => Y(t, !1),
                      disabled: h || V,
                      tooltipText: V ? x.intl.string(p.default["6Af/cw"]) : void 0,
                      note: x.intl.format(x.t.wkm9a3, { helpdeskArticle: S.A.getArticleURL(G.MVz.MESSAGE_REQUESTS) }),
                  })
                : (0, n.jsx)(R.Ay, {
                      title: x.intl.string(x.t["3o2ojh"]),
                      value: !U && !m,
                      onChange: (t) => Y(t, !0),
                      disabled: U,
                      note: C
                          ? x.intl.format(x.t.WpnWLc, { helpdeskArticle: S.A.getArticleURL(G.MVz.MESSAGE_REQUESTS) })
                          : x.intl.format(x.t.wkm9a3, { helpdeskArticle: S.A.getArticleURL(G.MVz.MESSAGE_REQUESTS) }),
                  }),
    });
}
function U(t) {
    let { ingress: e = C.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, c.Tx)();
    return (0, n.jsx)(h, { ingress: e, guildId: i ?? l });
}
