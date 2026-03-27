"use strict";
n.d(t, { A: () => D });
var i = n(627968),
    s = n(64700),
    r = n(880013),
    l = n(311907),
    a = n(397927),
    o = n(73153),
    d = n(846293),
    c = n(900662),
    u = n(765671),
    h = n(854378),
    _ = n(210714),
    p = n(961350),
    g = n(71393),
    m = n(299091),
    A = n(954571),
    f = n(486020),
    E = n(403362),
    x = n(21599),
    I = n(949155),
    N = n(663572),
    v = n(131929),
    j = n(172799),
    S = n(652215),
    T = n(985018),
    C = n(974818);
function y() {
    return (0, i.jsx)("div", { className: C.$k, children: (0, i.jsx)(a.y$y, {}) });
}
let b = (e) => {
    let t = e?.state == null && e?.channel == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case S.elq.RESOLVED:
        case S.elq.ACCEPTED:
        case S.elq.APP_NOT_OPENED:
        case S.elq.APP_OPENED:
        case S.elq.ACCEPTING:
        case S.elq.APP_OPENING:
            return 1;
        case S.elq.EXPIRED:
        case S.elq.BANNED:
        case S.elq.ERROR:
            return 2;
        case S.elq.RESOLVING:
            return 0;
        default:
            (0, E.xb)(n);
    }
};
function R(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === S.elq.BANNED
        ? (0, i.jsx)(c.N, { text: T.intl.string(T.t["5AkWAd"]), buttonCta: T.intl.string(T.t["8osdkn"]), onClick: n })
        : (0, i.jsx)(c.N, { text: T.intl.string(T.t["usP+Mb"]), buttonCta: T.intl.string(T.t["8osdkn"]), onClick: n });
}
function O(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: l, innerStyle: o, ...d } = e,
        { invite: c } = d,
        [h, _] = s.useState(b(c)),
        { ref: p, height: g } = (0, u.Ay)(),
        m = (0, a.zhh)({ height: null != g && 0 !== g ? `${g}px` : `${l}px`, config: r.config.stiff });
    return (
        s.useEffect(() => {
            let e = b(c);
            e !== h && _(e);
        }, [c, h]),
        (0, i.jsxs)(r.animated.div, {
            className: C.qF,
            style: m,
            children: [
                (0, i.jsx)(r.animated.div, {
                    className: C.NS,
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
    return null != t && (0, I.Fk)(t)
        ? (0, i.jsx)(O, {
              startAnimHeightPx: 0,
              innerStyle: () => C.ui,
              ...e,
              children: (e) => (null == t ? null : 1 === e ? (0, i.jsx)(v.s, { invite: t }) : null),
          })
        : null;
}
function w(e) {
    let { invite: t } = e,
        n = { 1: C._r, 2: C.Gm, 0: C.Kt };
    return (0, i.jsx)(O, {
        startAnimHeightPx: 200,
        innerStyle: (e) => n[e],
        ...e,
        children: (n) =>
            ((n) => {
                if (null == t) return (0, i.jsx)(y, {});
                switch (n) {
                    case 1:
                        return (0, i.jsx)(N.A, { ...e, invite: t });
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
        let e = f.Ay.getGuildSplashURL({ id: s.id, splash: s.splash });
        null != e && ((r.backgroundImage = `url(${e})`), (r.backgroundSize = "cover"));
    }
    return (0, i.jsxs)(h.Ay, {
        theme: S.NJ8.DARK,
        className: C.G3,
        style: r,
        contentClassName: C.__,
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
                A.default.track(S.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
        }, []),
        (0, i.jsx)(k, {
            invite: r,
            onAcceptInvite: (e) => {
                let n, i, s, l;
                e?.preventDefault(),
                    A.default.track(S.HAw.INVITE_APP_OPENED, {
                        invite_code: (0, x.m0)(t),
                        guild_id: r?.guild?.id,
                        channel_id: r?.channel?.id,
                        inviter_id: r?.inviter?.id,
                        invite_type: null != r && r?.type != null ? j.Xd[r?.type] : void 0,
                        user_is_member: null != r && null != r.guild && null != g.A.getGuild(r.guild.id),
                        size_total: r?.approximate_member_count,
                    }),
                    (n = null != r && r.state !== S.elq.EXPIRED && r.state !== S.elq.BANNED ? t : void 0),
                    (s = null != (i = p.default.getFingerprint()) ? i : p.default.getId()),
                    (l = null != r && r?.type != null ? Number(r?.type) : void 0),
                    d.Ay.openApp(n, void 0, s, void 0, l);
            },
            transitionTo: n,
        })
    );
}
