n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    a = n(421380),
    s = n(935649),
    o = n(847599),
    l = n(171316),
    c = n(71393),
    u = n(954571),
    d = n(975571),
    f = n(115063),
    p = n(152076),
    _ = n(762183),
    h = n(253932),
    m = n(112469),
    g = n(871930),
    E = n(578746),
    b = n(997913),
    y = n(542457),
    O = n(355097),
    A = n(531525);
n(820575);
var v = n(652215),
    S = n(985018),
    I = n(842130);
function T(e) {
    let { ingress: t, guildId: n } = e,
        T = (0, m.q9)(),
        C = (0, _.K)(),
        N = h.$s.useSetting().includes(n),
        R = (0, l.uM)(),
        w = h.YX.useSetting(),
        P = h.Zr.useSetting().includes(n),
        D = i.useCallback(
            (e) => {
                let r = (0, f.xo)();
                e ? r.delete(n) : r.add(n),
                    h.Zr.updateSetting(Array.from(r)),
                    u.default.track(v.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: y.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [t, n],
        );
    function x(e, t) {
        u.default.track(v.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    }
    function L(e, t) {
        !e && (0, p.w)()
            ? s.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.MESSAGE_REQUESTS_SETTINGS })
            : t
              ? D(e)
              : j(!e);
    }
    function j(e) {
        let t = () => {
                h.YX.updateSetting(e), h.Zr.updateSetting(e ? c.A.getGuildIds() : []), x(e, !0);
            },
            n = () => {
                h.YX.updateSetting(e), x(e, !1);
            };
        (0, b.O)({
            header: S.intl.string(S.t.yAfu1p),
            body: S.intl.string(S.t.Ry2z74),
            confirmText: S.intl.string(S.t.gm1Vej),
            cancelText: S.intl.string(S.t.p89ACt),
            confirmButtonColor: a.$n.Colors.BRAND,
            onConfirm: n,
            onCancel: t,
        });
    }
    return (0, r.jsx)(g.h, {
        setting: A.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: O.d1.MESSAGE_REQUESTS_V2,
        children:
            "0" === n
                ? (0, r.jsx)(E.Ay, {
                      title: S.intl.string(S.t["3o2ojh"]),
                      value: !C && !w,
                      onChange: (e) => L(e, !1),
                      disabled: C || R,
                      tooltipText: R ? S.intl.string(I.default["6Af/cw"]) : void 0,
                      note: S.intl.format(S.t.wkm9a3, { helpdeskArticle: d.A.getArticleURL(v.MVz.MESSAGE_REQUESTS) }),
                  })
                : (0, r.jsx)(E.Ay, {
                      title: S.intl.string(S.t["3o2ojh"]),
                      value: !N && !P,
                      onChange: (e) => L(e, !0),
                      disabled: N,
                      note: T
                          ? S.intl.format(S.t.WpnWLc, { helpdeskArticle: d.A.getArticleURL(v.MVz.MESSAGE_REQUESTS) })
                          : S.intl.format(S.t.wkm9a3, { helpdeskArticle: d.A.getArticleURL(v.MVz.MESSAGE_REQUESTS) }),
                  }),
    });
}
function C(e) {
    let { ingress: t = O.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, m.Tx)();
    return (0, r.jsx)(T, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
