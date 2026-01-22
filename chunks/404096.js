i.d(e, {
    w: () => b,
});
var n = i(421380),
    l = i(935649),
    s = i(847599),
    r = i(171316),
    u = i(419954),
    a = i(71393),
    o = i(954571),
    T = i(975571),
    A = i(115063),
    S = i(152076),
    E = i(762183),
    d = i(253932),
    _ = i(780964),
    I = i(612025),
    g = i(112469),
    c = i(997913),
    N = i(542457),
    O = i(355097),
    C = i(652215),
    L = i(985018);
let R = (t, e) => {
        o.default.track(C.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    },
    b = (0, u.zD)(_.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: () => L.intl.string(L.t["3o2ojh"]),
        useSubtitle: () =>
            (0, g.q9)()
                ? L.intl.format(L.t.WpnWLc, {
                      helpdeskArticle: T.A.getArticleURL(C.MVz.MESSAGE_REQUESTS),
                  })
                : L.intl.format(L.t.wkm9a3, {
                      helpdeskArticle: T.A.getArticleURL(C.MVz.MESSAGE_REQUESTS),
                  }),
        useValue: () => {
            let t = (0, g.Tx)(),
                e = (0, E.K)(),
                i = d.$s.useSetting().includes(t),
                n = d.YX.useSetting(),
                l = d.Zr.useSetting().includes(t);
            return t === I.YG ? !e && !n : !i && !l;
        },
        useDisabled: () => {
            let t = (0, g.Tx)(),
                e = (0, r.uM)(),
                i = (0, E.K)(),
                n = d.$s.useSetting().includes(t);
            return t === I.YG ? i || e : n;
        },
        setValue: (t) => {
            let e = I.xk.getState().selectedGuildId;
            if (!t && (0, S.w)())
                return void l.A.showAgeVerificationGetStartedModal({
                    entryPoint: s.q1.MESSAGE_REQUESTS_SETTINGS,
                });
            if (e === I.YG) {
                var i;
                (i = !t),
                    (0, c.O)({
                        header: L.intl.string(L.t.yAfu1p),
                        body: L.intl.string(L.t.Ry2z74),
                        confirmText: L.intl.string(L.t.gm1Vej),
                        cancelText: L.intl.string(L.t.p89ACt),
                        confirmButtonColor: n.$n.Colors.BRAND,
                        onConfirm: () => {
                            d.YX.updateSetting(i), R(i, !1);
                        },
                        onCancel: () => {
                            d.YX.updateSetting(i), d.Zr.updateSetting(i ? a.A.getGuildIds() : []), R(i, !0);
                        },
                    });
            } else {
                let i = (0, A.xo)();
                t ? i.delete(e) : i.add(e),
                    d.Zr.updateSetting(Array.from(i)),
                    o.default.track(C.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: N.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: O.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: e,
                    });
            }
        },
    });
