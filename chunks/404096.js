n.d(t, { K: () => b, w: () => N });
var i = n(421380),
    s = n(935649),
    l = n(847599),
    a = n(171316),
    r = n(419954),
    o = n(71393),
    d = n(954571),
    c = n(975571),
    u = n(115063),
    _ = n(152076),
    m = n(762183),
    g = n(253932),
    A = n(780964),
    x = n(612025),
    h = n(112469),
    p = n(137675),
    T = n(542457),
    E = n(355097),
    S = n(652215),
    f = n(985018);
let C = (e, t) => {
    d.default.track(S.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function b() {
    return f.intl.string(f.t["3o2ojh"]);
}
let N = (0, r.zD)(A.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
    useTitle: b,
    useSubtitle: () =>
        (0, h.q9)()
            ? f.intl.format(f.t.WpnWLc, { helpdeskArticle: c.A.getArticleURL(S.MVz.MESSAGE_REQUESTS) })
            : f.intl.format(f.t.wkm9a3, { helpdeskArticle: c.A.getArticleURL(S.MVz.MESSAGE_REQUESTS) }),
    useValue: () => {
        let e = (0, h.Tx)(),
            t = (0, m.K)(),
            n = g.$s.useSetting().includes(e),
            i = g.YX.useSetting(),
            s = g.Zr.useSetting().includes(e);
        return e === x.YG ? !t && !i : !n && !s;
    },
    useDisabled: () => {
        let e = (0, h.Tx)(),
            t = (0, a.uM)(),
            n = (0, m.K)(),
            i = g.$s.useSetting().includes(e);
        return e === x.YG ? n || t : i;
    },
    setValue: (e) => {
        let t = x.xk.getState().selectedGuildId;
        if (!e && (0, _.w)())
            return void s.A.showAgeVerificationGetStartedModal({ entryPoint: l.q1.MESSAGE_REQUESTS_SETTINGS });
        if (t === x.YG) {
            var n;
            (n = !e),
                (0, p.O)({
                    header: f.intl.string(f.t.yAfu1p),
                    body: f.intl.string(f.t.Ry2z74),
                    confirmText: f.intl.string(f.t.gm1Vej),
                    cancelText: f.intl.string(f.t.p89ACt),
                    confirmButtonColor: i.$n.Colors.BRAND,
                    onConfirm: () => {
                        g.YX.updateSetting(n), C(n, !1);
                    },
                    onCancel: () => {
                        g.YX.updateSetting(n), g.Zr.updateSetting(n ? o.A.getGuildIds() : []), C(n, !0);
                    },
                });
        } else {
            let n = (0, u.xo)();
            e ? n.delete(t) : n.add(t),
                g.Zr.updateSetting(Array.from(n)),
                d.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: T.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                    ingress: E.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        }
    },
});
