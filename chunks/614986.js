"use strict";
n.d(t, { A: () => W });
var i = n(627968),
    s = n(64700),
    r = n(517738),
    l = n(280513),
    a = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(846293),
    u = n(900662),
    _ = n(765671),
    h = n(854378),
    p = n(9994),
    g = n(210714),
    m = n(961350),
    A = n(71393),
    f = n(299091),
    E = n(954571),
    x = n(486020),
    I = n(403362),
    N = n(860689),
    v = n(21599),
    T = n(949155),
    C = n(663572),
    j = n(439680),
    y = n(131929),
    S = n(66027),
    b = n(172799),
    R = n(652215),
    O = n(985018),
    L = n(888849);
let w = n(843020);
function k(e) {
    if (null == e || !l.i.VISIBLE.has(e.visibility)) return !1;
    let t = null != e.description && e.description.length > 0,
        n = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
    return t || n;
}
function D() {
    return (0, i.jsx)("div", { className: L.$k, children: (0, i.jsx)(o.y$y, {}) });
}
function U(e) {
    let t = e?.state == null && e?.channel == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case R.elq.RESOLVED:
        case R.elq.ACCEPTED:
        case R.elq.APP_NOT_OPENED:
        case R.elq.APP_OPENED:
        case R.elq.ACCEPTING:
        case R.elq.APP_OPENING:
            return 1;
        case R.elq.EXPIRED:
        case R.elq.BANNED:
        case R.elq.ERROR:
            return 2;
        case R.elq.RESOLVING:
            return 0;
        default:
            (0, I.xb)(n);
    }
}
function P(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === R.elq.BANNED
        ? (0, i.jsx)(u.N, { text: O.intl.string(O.t["5AkWAd"]), buttonCta: O.intl.string(O.t["8osdkn"]), onClick: n })
        : (0, i.jsx)(u.N, { text: O.intl.string(O.t["usP+Mb"]), buttonCta: O.intl.string(O.t["8osdkn"]), onClick: n });
}
function B(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: s, sectionClassName: l, inviteCardClassName: a = L.qF } = e,
        { ref: c, height: d } = (0, _.Ay)(),
        u = (0, o.zhh)({ height: null != d && 0 !== d ? `${d}px` : `${s}px`, config: r.config.stiff });
    return (0, i.jsxs)(r.animated.div, {
        className: a,
        style: u,
        children: [
            (0, i.jsx)(r.animated.div, {
                className: L.NS,
                style: u,
                children: (0, i.jsx)("section", { ref: c, className: l, children: t }),
            }),
            n,
        ],
    });
}
function G(e) {
    let { invite: t } = e;
    if (null == t || !(0, T.Fk)(t)) return null;
    let n = U(t);
    return (0, i.jsx)(B, {
        startAnimHeightPx: 0,
        sectionClassName: L.ui,
        children: 1 === n ? (0, i.jsx)(y.s, { invite: t }) : null,
    });
}
let M = { 1: L._r, 2: L.Gm, 0: L.Kt };
function F(e) {
    let t,
        { invite: n } = e,
        r = U(n),
        { enabled: l } = S.n.useConfig({ location: "AcceptInviteMobile" }),
        a = null != n ? (0, p.oO)(n) : null,
        o = n?.guild != null ? (0, N.DY)(n.guild) : null,
        c = null != o && k(a) && null != n && !(0, T.Fk)(n),
        d = l && c;
    if (
        (s.useEffect(() => {
            c && S.n.getConfig({ location: "AcceptInviteMobile.hasProfile" });
        }, [c]),
        null == n)
    )
        t = (0, i.jsx)(D, {});
    else
        switch (r) {
            case 1:
                t = d
                    ? (0, i.jsx)(j.A, { invite: n, guild: o, profile: a, onAcceptInvite: e.onAcceptInvite })
                    : (0, i.jsx)(C.A, { ...e, invite: n });
                break;
            case 2:
                t = (0, i.jsx)(P, { ...e, invite: n });
                break;
            default:
                t = (0, i.jsx)(D, {});
        }
    let u = 1 === r && d ? L.c4 : L.qF;
    return (0, i.jsx)(B, { startAnimHeightPx: 200, sectionClassName: M[r], inviteCardClassName: u, children: t });
}
function V(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: s } = t ?? {},
        r = {},
        { enabled: l } = S.n.useConfig({ location: "AcceptInviteMobile" }),
        a = null != t ? (0, p.oO)(t) : null,
        o = null != s && k(a) && null != t && !(0, T.Fk)(t);
    if (s?.splash != null) {
        let e = x.Ay.getGuildSplashURL({ id: s.id, splash: s.splash });
        null != e && ((r.backgroundImage = `url(${e})`), (r.backgroundSize = "cover"));
    } else l && o && ((r.backgroundImage = `url(${w})`), (r.backgroundSize = "cover"));
    return (0, i.jsxs)(h.Ay, {
        theme: R.NJ8.DARK,
        className: L.G3,
        style: r,
        contentClassName: L.__,
        children: [(0, i.jsx)(F, { ...e, onAcceptInvite: n }), (0, i.jsx)(G, { ...e })],
    });
}
function W(e) {
    let { inviteKey: t, transitionTo: n } = e,
        r = (0, a.bG)([f.A], () => f.A.getInvite(t));
    return (
        s.useEffect(() => {
            let e = m.default.getAnalyticsToken();
            null != e && c.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: m.default.getId() }),
                (0, g.d)("invite_mobile"),
                E.default.track(R.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
        }, []),
        (0, i.jsx)(V, {
            invite: r,
            onAcceptInvite: (e) => {
                let n, i, s, l;
                e?.preventDefault(),
                    E.default.track(R.HAw.INVITE_APP_OPENED, {
                        invite_code: (0, v.m0)(t),
                        guild_id: r?.guild?.id,
                        channel_id: r?.channel?.id,
                        inviter_id: r?.inviter?.id,
                        invite_type: null != r && r?.type != null ? b.Xd[r?.type] : void 0,
                        user_is_member: null != r && null != r.guild && null != A.A.getGuild(r.guild.id),
                        size_total: r?.approximate_member_count,
                    }),
                    (n = null != r && r.state !== R.elq.EXPIRED && r.state !== R.elq.BANNED ? t : void 0),
                    (s = null != (i = m.default.getFingerprint()) ? i : m.default.getId()),
                    (l = null != r && r?.type != null ? Number(r?.type) : void 0),
                    d.Ay.openApp(n, void 0, s, void 0, l);
            },
            transitionTo: n,
        })
    );
}
