n.d(t, { K: () => C, w: () => v });
var i = n(862482),
    s = n(935649),
    l = n(847599),
    a = n(171316),
    r = n(419954),
    o = n(71393),
    d = n(954571),
    u = n(975571),
    c = n(115063),
    g = n(152076),
    m = n(762183),
    _ = n(253932),
    A = n(780964),
    h = n(612025),
    p = n(112469),
    x = n(137675),
    E = n(542457),
    T = n(355097),
    S = n(652215),
    f = n(985018);
let b = (e, t) => {
    d.default.track(S.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function C() {
    return f.intl.string(f.t["3o2ojh"]);
}
let v = (0, r.zD)(A.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
    useTitle: C,
    useSubtitle: () =>
        (0, p.q9)()
            ? f.intl.format(f.t.WpnWLc, { helpdeskArticle: u.A.getArticleURL(S.MVz.MESSAGE_REQUESTS) })
            : f.intl.format(f.t.wkm9a3, { helpdeskArticle: u.A.getArticleURL(S.MVz.MESSAGE_REQUESTS) }),
    useValue: () => {
        let e = (0, p.Tx)(),
            t = (0, m.K)(),
            n = _.$s.useSetting().includes(e),
            i = _.YX.useSetting(),
            s = _.Zr.useSetting().includes(e);
        return e === h.YG ? !t && !i : !n && !s;
    },
    useDisabled: () => {
        let e = (0, p.Tx)(),
            t = (0, a.uM)(),
            n = (0, m.K)(),
            i = _.$s.useSetting().includes(e);
        return e === h.YG ? n || t : i;
    },
    setValue: (e) => {
        let t = h.xk.getState().selectedGuildId;
        if (!e && (0, g.w)())
            return void s.A.showAgeVerificationGetStartedModal({ entryPoint: l.q1.MESSAGE_REQUESTS_SETTINGS });
        if (t === h.YG) {
            var n;
            (n = !e),
                (0, x.O)({
                    header: f.intl.string(f.t.yAfu1p),
                    body: f.intl.string(f.t.Ry2z74),
                    confirmText: f.intl.string(f.t.gm1Vej),
                    cancelText: f.intl.string(f.t.p89ACt),
                    confirmButtonColor: i.$n.Colors.BRAND,
                    onConfirm: () => {
                        _.YX.updateSetting(n), b(n, !1);
                    },
                    onCancel: () => {
                        _.YX.updateSetting(n), _.Zr.updateSetting(n ? o.A.getGuildIds() : []), b(n, !0);
                    },
                });
        } else {
            let n = (0, c.xo)();
            e ? n.delete(t) : n.add(t),
                _.Zr.updateSetting(Array.from(n)),
                d.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: E.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                    ingress: T.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        }
    },
});
