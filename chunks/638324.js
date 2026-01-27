n.d(t, {
    A: () => j,
});
var r = n(627968),
    i = n(64700),
    l = n(421380),
    s = n(935649),
    a = n(847599),
    o = n(171316),
    c = n(71393),
    d = n(954571),
    u = n(975571),
    _ = n(115063),
    p = n(152076),
    m = n(762183),
    g = n(253932),
    A = n(112469),
    f = n(871930),
    h = n(578746),
    b = n(997913),
    E = n(542457),
    x = n(355097),
    O = n(531525);
n(820575);
var C = n(652215),
    I = n(985018),
    T = n(842130);

function S(e) {
    let { ingress: t, guildId: n } = e,
        S = (0, A.q9)(),
        j = (0, m.K)(),
        v = g.$s.useSetting().includes(n),
        N = (0, o.uM)(),
        y = g.YX.useSetting(),
        P = g.Zr.useSetting().includes(n),
        R = i.useCallback(
            (e) => {
                let r = (0, _.xo)();
                e ? r.delete(n) : r.add(n),
                    g.Zr.updateSetting(Array.from(r)),
                    d.default.track(C.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: E.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [t, n],
        );

    function D(e, t) {
        d.default.track(C.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    }

    function w(e, t) {
        var n;
        !e && (0, p.w)()
            ? s.A.showAgeVerificationGetStartedModal({
                  entryPoint: a.q1.MESSAGE_REQUESTS_SETTINGS,
              })
            : t
              ? R(e)
              : ((n = !e),
                (0, b.O)({
                    header: I.intl.string(I.t.yAfu1p),
                    body: I.intl.string(I.t.Ry2z74),
                    confirmText: I.intl.string(I.t.gm1Vej),
                    cancelText: I.intl.string(I.t.p89ACt),
                    confirmButtonColor: l.$n.Colors.BRAND,
                    onConfirm: () => {
                        g.YX.updateSetting(n), D(n, !1);
                    },
                    onCancel: () => {
                        g.YX.updateSetting(n), g.Zr.updateSetting(n ? c.A.getGuildIds() : []), D(n, !0);
                    },
                }));
    }
    return (0, r.jsx)(f.h, {
        setting: O.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: x.d1.MESSAGE_REQUESTS_V2,
        children:
            "0" === n
                ? (0, r.jsx)(h.Ay, {
                      title: I.intl.string(I.t["3o2ojh"]),
                      value: !j && !y,
                      onChange: (e) => w(e, !1),
                      disabled: j || N,
                      tooltipText: N ? I.intl.string(T.default["6Af/cw"]) : void 0,
                      note: I.intl.format(I.t.wkm9a3, {
                          helpdeskArticle: u.A.getArticleURL(C.MVz.MESSAGE_REQUESTS),
                      }),
                  })
                : (0, r.jsx)(h.Ay, {
                      title: I.intl.string(I.t["3o2ojh"]),
                      value: !v && !P,
                      onChange: (e) => w(e, !0),
                      disabled: v,
                      note: S
                          ? I.intl.format(I.t.WpnWLc, {
                                helpdeskArticle: u.A.getArticleURL(C.MVz.MESSAGE_REQUESTS),
                            })
                          : I.intl.format(I.t.wkm9a3, {
                                helpdeskArticle: u.A.getArticleURL(C.MVz.MESSAGE_REQUESTS),
                            }),
                  }),
    });
}

function j(e) {
    let { ingress: t = x.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, A.Tx)();
    return (0, r.jsx)(S, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
