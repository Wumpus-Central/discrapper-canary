"use strict";
n.d(t, { A: () => M });
var i = n(627968),
    s = n(64700),
    r = n(687498),
    l = n(280513),
    a = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(846293),
    u = n(900662),
    h = n(765671),
    _ = n(854378),
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
    C = n(949155),
    j = n(663572),
    S = n(439680),
    T = n(131929),
    y = n(66027),
    b = n(172799),
    R = n(652215),
    O = n(985018),
    L = n(974818);
function w() {
    return (0, i.jsx)("div", { className: L.$k, children: (0, i.jsx)(o.y$y, {}) });
}
function k(e) {
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
function D(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === R.elq.BANNED
        ? (0, i.jsx)(u.N, { text: O.intl.string(O.t["5AkWAd"]), buttonCta: O.intl.string(O.t["8osdkn"]), onClick: n })
        : (0, i.jsx)(u.N, { text: O.intl.string(O.t["usP+Mb"]), buttonCta: O.intl.string(O.t["8osdkn"]), onClick: n });
}
function U(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: s, sectionClassName: l, inviteCardClassName: a = L.qF } = e,
        { ref: d, height: c } = (0, h.Ay)(),
        u = (0, o.zhh)({ height: null != c && 0 !== c ? `${c}px` : `${s}px`, config: r.config.stiff });
    return (0, i.jsxs)(r.animated.div, {
        className: a,
        style: u,
        children: [
            (0, i.jsx)(r.animated.div, {
                className: L.NS,
                style: u,
                children: (0, i.jsx)("section", { ref: d, className: l, children: t }),
            }),
            n,
        ],
    });
}
function P(e) {
    let { invite: t } = e;
    if (null == t || !(0, C.Fk)(t)) return null;
    let n = k(t);
    return (0, i.jsx)(U, {
        startAnimHeightPx: 0,
        sectionClassName: L.ui,
        children: 1 === n ? (0, i.jsx)(T.s, { invite: t }) : null,
    });
}
let B = { 1: L._r, 2: L.Gm, 0: L.Kt };
function G(e) {
    let t,
        { invite: n } = e,
        r = k(n),
        { enabled: a } = y.n.useConfig({ location: "AcceptInviteMobile" }),
        o = null != n ? (0, p.oO)(n) : null,
        d = n?.guild != null ? (0, N.DY)(n.guild) : null,
        c =
            a &&
            null != o &&
            (function (e) {
                if (null == e || !l.i.VISIBLE.has(e.visibility)) return !1;
                let t = null != e.description && e.description.length > 0,
                    n = null != e.traits && e.traits.filter((e) => e.label.length > 0).length > 0,
                    i = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
                return t && (n || i);
            })(o) &&
            null != d &&
            null != n &&
            !(0, C.Fk)(n);
    if (
        (s.useEffect(() => {
            c && y.n.getConfig({ location: "AcceptInviteMobile.hasProfile" });
        }, [c]),
        null == n)
    )
        t = (0, i.jsx)(w, {});
    else
        switch (r) {
            case 1:
                t = c
                    ? (0, i.jsx)(S.A, { invite: n, guild: d, profile: o, onAcceptInvite: e.onAcceptInvite })
                    : (0, i.jsx)(j.A, { ...e, invite: n });
                break;
            case 2:
                t = (0, i.jsx)(D, { ...e, invite: n });
                break;
            default:
                t = (0, i.jsx)(w, {});
        }
    let u = 1 === r && c ? L.c4 : L.qF;
    return (0, i.jsx)(U, { startAnimHeightPx: 200, sectionClassName: B[r], inviteCardClassName: u, children: t });
}
function F(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: s } = t ?? {},
        r = {};
    if (s?.splash != null) {
        let e = x.Ay.getGuildSplashURL({ id: s.id, splash: s.splash });
        null != e && ((r.backgroundImage = `url(${e})`), (r.backgroundSize = "cover"));
    }
    return (0, i.jsxs)(_.Ay, {
        theme: R.NJ8.DARK,
        className: L.G3,
        style: r,
        contentClassName: L.__,
        children: [(0, i.jsx)(G, { ...e, onAcceptInvite: n }), (0, i.jsx)(P, { ...e })],
    });
}
function M(e) {
    let { inviteKey: t, transitionTo: n } = e,
        r = (0, a.bG)([f.A], () => f.A.getInvite(t));
    return (
        s.useEffect(() => {
            let e = m.default.getAnalyticsToken();
            null != e && d.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: m.default.getId() }),
                (0, g.d)("invite_mobile"),
                E.default.track(R.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
        }, []),
        (0, i.jsx)(F, {
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
                    c.Ay.openApp(n, void 0, s, void 0, l);
            },
            transitionTo: n,
        })
    );
}
