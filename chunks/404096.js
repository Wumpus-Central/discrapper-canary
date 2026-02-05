i.d(e, { w: () => b });
var n = i(421380),
    l = i(935649),
    s = i(847599),
    r = i(171316),
    a = i(419954),
    u = i(71393),
    o = i(954571),
    d = i(975571),
    T = i(115063),
    A = i(152076),
    S = i(762183),
    E = i(253932),
    g = i(780964),
    _ = i(612025),
    c = i(112469),
    I = i(997913),
    N = i(542457),
    C = i(355097),
    O = i(652215),
    L = i(985018);
let R = (t, e) => {
        o.default.track(O.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    },
    b = (0, a.zD)(g.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: () => L.intl.string(L.t["3o2ojh"]),
        useSubtitle: () =>
            (0, c.q9)()
                ? L.intl.format(L.t.WpnWLc, { helpdeskArticle: d.A.getArticleURL(O.MVz.MESSAGE_REQUESTS) })
                : L.intl.format(L.t.wkm9a3, { helpdeskArticle: d.A.getArticleURL(O.MVz.MESSAGE_REQUESTS) }),
        useValue: () => {
            let t = (0, c.Tx)(),
                e = (0, S.K)(),
                i = E.$s.useSetting().includes(t),
                n = E.YX.useSetting(),
                l = E.Zr.useSetting().includes(t);
            return t === _.YG ? !e && !n : !i && !l;
        },
        useDisabled: () => {
            let t = (0, c.Tx)(),
                e = (0, r.uM)(),
                i = (0, S.K)(),
                n = E.$s.useSetting().includes(t);
            return t === _.YG ? i || e : n;
        },
        setValue: (t) => {
            let e = _.xk.getState().selectedGuildId;
            if (!t && (0, A.w)())
                return void l.A.showAgeVerificationGetStartedModal({ entryPoint: s.q1.MESSAGE_REQUESTS_SETTINGS });
            if (e === _.YG) {
                var i;
                (i = !t),
                    (0, I.O)({
                        header: L.intl.string(L.t.yAfu1p),
                        body: L.intl.string(L.t.Ry2z74),
                        confirmText: L.intl.string(L.t.gm1Vej),
                        cancelText: L.intl.string(L.t.p89ACt),
                        confirmButtonColor: n.$n.Colors.BRAND,
                        onConfirm: () => {
                            E.YX.updateSetting(i), R(i, !1);
                        },
                        onCancel: () => {
                            E.YX.updateSetting(i), E.Zr.updateSetting(i ? u.A.getGuildIds() : []), R(i, !0);
                        },
                    });
            } else {
                let i = (0, T.xo)();
                t ? i.delete(e) : i.add(e),
                    E.Zr.updateSetting(Array.from(i)),
                    o.default.track(O.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: N.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: C.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: e,
                    });
            }
        },
    });
