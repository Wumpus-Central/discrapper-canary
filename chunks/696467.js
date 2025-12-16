n.d(e, { u: () => L });
var i = n(755721),
    l = n(168107),
    s = n(480916),
    u = n(915009),
    r = n(509613),
    a = n(430824),
    o = n(626135),
    T = n(63063),
    S = n(88658),
    c = n(750832),
    E = n(976978),
    d = n(695346),
    g = n(313789),
    _ = n(997950),
    I = n(639814),
    N = n(922628),
    A = n(703115),
    O = n(526761),
    C = n(981631),
    f = n(388032);
let R = (t, e) => {
        o.default.track(C.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    },
    L = (0, r.qs)(g.n.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: () => f.intl.string(f.t["3o2ojh"]),
        useSubtitle: () =>
            (0, I.c_)()
                ? f.intl.format(f.t.WpnWLc, { helpdeskArticle: T.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) })
                : f.intl.format(f.t.wkm9a3, { helpdeskArticle: T.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) }),
        useValue: () => {
            let t = (0, I.is)(),
                e = (0, E.q)(),
                n = d.h2.useSetting().includes(t),
                i = d.mX.useSetting(),
                l = d.zA.useSetting().includes(t);
            return t === _.Th ? !e && !i : !n && !l;
        },
        useDisabled: () => {
            let t = (0, I.is)(),
                e = (0, u.LN)(),
                n = (0, E.q)(),
                i = d.h2.useSetting().includes(t);
            return t === _.Th ? n || e : i;
        },
        setValue: (t) => {
            let e = _.xu.getState().selectedGuildId;
            if (!t && (0, c.S)())
                return void l.Z.showAgeVerificationGetStartedModal({ entryPoint: s.cU.MESSAGE_REQUESTS_SETTINGS });
            if (e === _.Th) {
                var n;
                (n = !t),
                    (0, N.V)({
                        header: f.intl.string(f.t.yAfu1p),
                        body: f.intl.string(f.t.Ry2z74),
                        confirmText: f.intl.string(f.t.gm1Vej),
                        cancelText: f.intl.string(f.t.p89ACt),
                        confirmButtonColor: i.zx.Colors.BRAND,
                        onConfirm: () => {
                            d.mX.updateSetting(n), R(n, !1);
                        },
                        onCancel: () => {
                            d.mX.updateSetting(n), d.zA.updateSetting(n ? a.Z.getGuildIds() : []), R(n, !0);
                        },
                    });
            } else {
                let n = (0, S.gl)();
                t ? n.delete(e) : n.add(e),
                    d.zA.updateSetting(Array.from(n)),
                    o.default.track(C.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: A.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: O.f4.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: e,
                    });
            }
        },
    });
