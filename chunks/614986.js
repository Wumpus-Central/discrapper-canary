"use strict";
n.d(t, { A: () => D });
var i = n(627968),
    s = n(64700),
    r = n(40153),
    l = n(311907),
    a = n(397927),
    o = n(73153),
    c = n(846293),
    d = n(900662),
    u = n(765671),
    h = n(854378),
    _ = n(210714),
    p = n(961350),
    g = n(71393),
    m = n(299091),
    f = n(954571),
    A = n(486020),
    E = n(403362),
    x = n(21599),
    v = n(949155),
    I = n(663572),
    N = n(131929),
    S = n(172799),
    j = n(652215),
    C = n(985018),
    T = n(446160);
function y() {
    return (0, i.jsx)("div", { className: T.$k, children: (0, i.jsx)(a.y$y, {}) });
}
let b = (e) => {
    let t = e?.state == null && e?.channel == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case j.elq.RESOLVED:
        case j.elq.ACCEPTED:
        case j.elq.APP_NOT_OPENED:
        case j.elq.APP_OPENED:
        case j.elq.ACCEPTING:
        case j.elq.APP_OPENING:
            return 1;
        case j.elq.EXPIRED:
        case j.elq.BANNED:
        case j.elq.ERROR:
            return 2;
        case j.elq.RESOLVING:
            return 0;
        default:
            (0, E.xb)(n);
    }
};
function R(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === j.elq.BANNED
        ? (0, i.jsx)(d.N, { text: C.intl.string(C.t["5AkWAd"]), buttonCta: C.intl.string(C.t["8osdkn"]), onClick: n })
        : (0, i.jsx)(d.N, { text: C.intl.string(C.t["usP+Mb"]), buttonCta: C.intl.string(C.t["8osdkn"]), onClick: n });
}
function O(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: l, innerStyle: o, ...c } = e,
        { invite: d } = c,
        [h, _] = s.useState(b(d)),
        { ref: p, height: g } = (0, u.Ay)(),
        m = (0, a.zhh)({ height: null != g && 0 !== g ? `${g}px` : `${l}px`, config: r.config.stiff });
    return (
        s.useEffect(() => {
            let e = b(d);
            e !== h && _(e);
        }, [d, h]),
        (0, i.jsxs)(r.animated.div, {
            className: T.qF,
            style: m,
            children: [
                (0, i.jsx)(r.animated.div, {
                    className: T.NS,
                    style: m,
                    children: (0, i.jsx)("section", { ref: p, className: o?.(h), children: t(h) }),
                }),
                n,
            ],
        })
    );
}
function L(e) {
    let { invite: t } = e;
    return null != t && (0, v.Fk)(t)
        ? (0, i.jsx)(O, {
              startAnimHeightPx: 0,
              innerStyle: () => T.ui,
              ...e,
              children: (e) => (null == t ? null : 1 === e ? (0, i.jsx)(N.s, { invite: t }) : null),
          })
        : null;
}
function w(e) {
    let { invite: t } = e,
        n = { 1: T._r, 2: T.Gm, 0: T.Kt };
    return (0, i.jsx)(O, {
        startAnimHeightPx: 200,
        innerStyle: (e) => n[e],
        ...e,
        children: (n) =>
            ((n) => {
                if (null == t) return (0, i.jsx)(y, {});
                switch (n) {
                    case 1:
                        return (0, i.jsx)(I.A, { ...e, invite: t });
                    case 2:
                        return (0, i.jsx)(R, { ...e, invite: t });
                    default:
                        return (0, i.jsx)(y, {});
                }
            })(n),
    });
}
function k(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: s } = t ?? {},
        r = {};
    if (s?.splash != null) {
        let e = A.Ay.getGuildSplashURL({ id: s.id, splash: s.splash });
        null != e && ((r.backgroundImage = `url(${e})`), (r.backgroundSize = "cover"));
    }
    return (0, i.jsxs)(h.Ay, {
        theme: j.NJ8.DARK,
        className: T.G3,
        style: r,
        contentClassName: T.__,
        children: [(0, i.jsx)(w, { ...e, onAcceptInvite: n }), (0, i.jsx)(L, { ...e })],
    });
}
function D(e) {
    let { inviteKey: t, transitionTo: n } = e,
        r = (0, l.bG)([m.A], () => m.A.getInvite(t));
    return (
        s.useEffect(() => {
            let e = p.default.getAnalyticsToken();
            null != e && o.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: p.default.getId() }),
                (0, _.d)("invite_mobile"),
                f.default.track(j.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
        }, []),
        (0, i.jsx)(k, {
            invite: r,
            onAcceptInvite: (e) => {
                let n, i, s, l;
                e?.preventDefault(),
                    f.default.track(j.HAw.INVITE_APP_OPENED, {
                        invite_code: (0, x.m0)(t),
                        guild_id: r?.guild?.id,
                        channel_id: r?.channel?.id,
                        inviter_id: r?.inviter?.id,
                        invite_type: null != r && r?.type != null ? S.Xd[r?.type] : void 0,
                        user_is_member: null != r && null != r.guild && null != g.A.getGuild(r.guild.id),
                        size_total: r?.approximate_member_count,
                    }),
                    (n = null != r && r.state !== j.elq.EXPIRED && r.state !== j.elq.BANNED ? t : void 0),
                    (s = null != (i = p.default.getFingerprint()) ? i : p.default.getId()),
                    (l = null != r && r?.type != null ? Number(r?.type) : void 0),
                    c.Ay.openApp(n, void 0, s, void 0, l);
            },
            transitionTo: n,
        })
    );
}
