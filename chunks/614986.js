"use strict";
n.d(t, { A: () => H });
var i = n(627968),
    s = n(64700),
    r = n(517738),
    l = n(280513),
    a = n(311907),
    o = n(289873),
    c = n(717421),
    d = n(73153),
    u = n(846293),
    _ = n(900662),
    h = n(765671),
    m = n(854378),
    p = n(9994),
    g = n(210714),
    A = n(961350),
    f = n(71393),
    x = n(299091),
    E = n(954571),
    I = n(486020),
    v = n(403362),
    N = n(860689),
    j = n(21599),
    C = n(949155),
    T = n(663572),
    b = n(439680),
    S = n(131929),
    y = n(66027),
    R = n(172799),
    w = n(652215),
    O = n(985018),
    L = n(888849);
let k = n(843020);
function G(e) {
    if (null == e || !l.i.VISIBLE.has(e.visibility)) return !1;
    let t = null != e.description && e.description.length > 0,
        n = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
    return t || n;
}
function U() {
    return (0, i.jsx)("div", { className: L.$k, children: (0, i.jsx)(o.y, {}) });
}
function D(e) {
    let t = e?.state == null && e?.channel == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case w.elq.RESOLVED:
        case w.elq.ACCEPTED:
        case w.elq.APP_NOT_OPENED:
        case w.elq.APP_OPENED:
        case w.elq.ACCEPTING:
        case w.elq.APP_OPENING:
            return 1;
        case w.elq.EXPIRED:
        case w.elq.BANNED:
        case w.elq.ERROR:
            return 2;
        case w.elq.RESOLVING:
            return 0;
        default:
            (0, v.xb)(n);
    }
}
function P(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === w.elq.BANNED
        ? (0, i.jsx)(_.N, { text: O.intl.string(O.t["5AkWAd"]), buttonCta: O.intl.string(O.t["8osdkn"]), onClick: n })
        : (0, i.jsx)(_.N, { text: O.intl.string(O.t["usP+Mb"]), buttonCta: O.intl.string(O.t["8osdkn"]), onClick: n });
}
function B(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: s, sectionClassName: l, inviteCardClassName: a = L.qF } = e,
        { ref: o, height: d } = (0, h.Ay)(),
        u = (0, c.z)({ height: null != d && 0 !== d ? `${d}px` : `${s}px`, config: r.config.stiff });
    return (0, i.jsxs)(r.animated.div, {
        className: a,
        style: u,
        children: [
            (0, i.jsx)(r.animated.div, {
                className: L.NS,
                style: u,
                children: (0, i.jsx)("section", { ref: o, className: l, children: t }),
            }),
            n,
        ],
    });
}
function M(e) {
    let { invite: t } = e;
    if (null == t || !(0, C.Fk)(t)) return null;
    let n = D(t);
    return (0, i.jsx)(B, {
        startAnimHeightPx: 0,
        sectionClassName: L.ui,
        children: 1 === n ? (0, i.jsx)(S.s, { invite: t }) : null,
    });
}
let V = { 1: L._r, 2: L.Gm, 0: L.Kt };
function F(e) {
    let t,
        { invite: n } = e,
        r = D(n),
        { enabled: l } = y.n.useConfig({ location: "AcceptInviteMobile" }),
        a = null != n ? (0, p.oO)(n) : null,
        o = n?.guild != null ? (0, N.DY)(n.guild) : null,
        c = null != o && G(a) && null != n && !(0, C.Fk)(n),
        d = l && c;
    if (
        (s.useEffect(() => {
            c && y.n.getConfig({ location: "AcceptInviteMobile.hasProfile" });
        }, [c]),
        null == n)
    )
        t = (0, i.jsx)(U, {});
    else
        switch (r) {
            case 1:
                t = d
                    ? (0, i.jsx)(b.A, { invite: n, guild: o, profile: a, onAcceptInvite: e.onAcceptInvite })
                    : (0, i.jsx)(T.A, { ...e, invite: n });
                break;
            case 2:
                t = (0, i.jsx)(P, { ...e, invite: n });
                break;
            default:
                t = (0, i.jsx)(U, {});
        }
    let u = 1 === r && d ? L.c4 : L.qF;
    return (0, i.jsx)(B, { startAnimHeightPx: 200, sectionClassName: V[r], inviteCardClassName: u, children: t });
}
function W(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: s } = t ?? {},
        r = {},
        { enabled: l } = y.n.useConfig({ location: "AcceptInviteMobile" }),
        a = null != t ? (0, p.oO)(t) : null,
        o = null != s && G(a) && null != t && !(0, C.Fk)(t);
    if (s?.splash != null) {
        let e = I.Ay.getGuildSplashURL({ id: s.id, splash: s.splash });
        null != e && ((r.backgroundImage = `url(${e})`), (r.backgroundSize = "cover"));
    } else l && o && ((r.backgroundImage = `url(${k})`), (r.backgroundSize = "cover"));
    return (0, i.jsxs)(m.Ay, {
        theme: w.NJ8.DARK,
        className: L.G3,
        style: r,
        contentClassName: L.__,
        children: [(0, i.jsx)(F, { ...e, onAcceptInvite: n }), (0, i.jsx)(M, { ...e })],
    });
}
function H(e) {
    let { inviteKey: t, transitionTo: n } = e,
        r = (0, a.bG)([x.A], () => x.A.getInvite(t));
    return (
        s.useEffect(() => {
            let e = A.default.getAnalyticsToken();
            null != e && d.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: A.default.getId() }),
                (0, g.d)("invite_mobile"),
                E.default.track(w.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
        }, []),
        (0, i.jsx)(W, {
            invite: r,
            onAcceptInvite: (e) => {
                let n, i, s, l;
                e?.preventDefault(),
                    E.default.track(w.HAw.INVITE_APP_OPENED, {
                        invite_code: (0, j.m0)(t),
                        guild_id: r?.guild?.id,
                        channel_id: r?.channel?.id,
                        inviter_id: r?.inviter?.id,
                        invite_type: null != r && r?.type != null ? R.Xd[r?.type] : void 0,
                        user_is_member: null != r && null != r.guild && null != f.A.getGuild(r.guild.id),
                        size_total: r?.approximate_member_count,
                    }),
                    (n = null != r && r.state !== w.elq.EXPIRED && r.state !== w.elq.BANNED ? t : void 0),
                    (s = null != (i = A.default.getFingerprint()) ? i : A.default.getId()),
                    (l = null != r && r?.type != null ? Number(r?.type) : void 0),
                    u.Ay.openApp(n, void 0, s, void 0, l);
            },
            transitionTo: n,
        })
    );
}
