e.d(n, { default: () => K });
var i = e(627968);
e(64700);
var l = e(17928),
    a = e(550079),
    s = e(477782),
    r = e(442433),
    d = e(847767),
    c = e(358367),
    o = e(468389),
    A = e(793574),
    u = e(50268),
    g = e(313281),
    h = e(133238),
    f = e(795144),
    x = e(979807),
    p = e(671470),
    y = e(73883),
    v = e(508654),
    j = e(24661),
    C = e(769591),
    b = e(446600),
    G = e(533957),
    N = e(886393),
    m = e(477190),
    E = e(307623),
    T = e(317910),
    X = e(686449),
    L = e(945886),
    S = e(985018);
function I(t) {
    let n = (0, l.bG)([L.A], () => L.A.isCollapsed(t.id), [t.id]);
    return __OVERLAY__
        ? null
        : (0, i.jsx)(s.sL, {
              id: "hide-voice-names",
              label: S.intl.string(S.t.LxzNiu),
              action: () => X.A.update(t.id),
              checked: n,
          });
}
var _ = e(475777),
    O = e(848977),
    V = e(995102),
    D = e(288104),
    M = e(661504),
    P = e(969128),
    w = e(304694),
    k = e(314116),
    B = e(849736),
    Y = e(233993),
    Z = e(576705);
function z(t, n) {
    let e = (0, l.bG)([Z.A], () => Z.A.can(Y.QY, t), [t]);
    return null != n && e
        ? (0, i.jsx)(s.Dr, {
              id: "end-stage",
              label: S.intl.string(S.t.saZaRb),
              color: "danger",
              action: function () {
                  (0, k.A)({
                      title: S.intl.string(S.t.gW9je1),
                      subtitle: S.intl.string(S.t.mT7jwN),
                      confirmText: S.intl.string(S.t.saZaRb),
                      onConfirm: () => (0, B.OE)(t),
                  });
              },
          })
        : null;
}
e(237984);
var U = e(643111),
    H = e(671483),
    q = e(217563),
    F = e(367513),
    Q = e(976860),
    R = e(652215);
function W(t, n) {
    return (0, l.bG)([Z.A], () => Z.A.can(R.xBc.CONNECT, t), [t]) && t.isGuildVocal()
        ? (0, i.jsx)(s.Dr, {
              id: "open-chat",
              label: S.intl.string(S.t.ZXxLQg),
              action: () => {
                  F.A.updateChatOpen(t.id, !0), (0, Q.uh)(n.id, t.id);
              },
          })
        : null;
}
function $(t) {
    let { channel: n, guild: e, onSelect: d } = t,
        c = n.isGuildStageVoice(),
        A = (0, l.bG)([b.A], () => (c ? b.A.getStageInstanceByChannel(n.id) : void 0), [c, n.id]),
        g = (0, O.A)(n),
        y = (0, N.A)(n),
        G = (0, v.Qs)(n.id),
        m = (0, j.A)(G?.id, e, n),
        E = z(n, A),
        T = (0, h.y)(n),
        X = (0, f.A)(n),
        L = (0, x.A)(n),
        _ = (0, p.A)(n),
        P = I(n),
        k = (0, V.A)(n),
        B = (0, D.A)(n),
        Y = (0, M.Ay)(n),
        Z = (0, C.os)("ChannelListVoiceContextMenuFavorites"),
        U = W(n, e),
        H = (0, u.A)({ id: n.id, label: S.intl.string(S.t.gFHI3k) }),
        q = (0, w.A)(n),
        F = (0, o.A)(n);
    return (0, i.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: r.Z_,
        "aria-label": S.intl.string(S.t.Xm41aV),
        onSelect: d,
        children: [
            (0, i.jsx)(s.rX, { children: null != G ? m : E }),
            (0, i.jsx)(s.rX, { children: g }),
            (0, i.jsxs)(s.rX, { children: [L, _, X] }),
            (0, i.jsxs)(s.rX, { children: [F, y] }),
            (0, i.jsxs)(s.rX, { children: [U, P, q] }),
            (0, i.jsxs)(s.rX, { children: [k, Z ? Y : B] }),
            (0, i.jsx)(s.rX, { children: T }),
            (0, i.jsxs)(s.rX, { children: [H, null] }),
        ],
    });
}
function J(t) {
    let { channel: n, guild: e, onSelect: d } = t,
        c = n.isGuildStageVoice(),
        A = (0, l.bG)([b.A], () => (c ? b.A.getStageInstanceByChannel(n.id) : void 0), [c, n.id]),
        g = (0, O.A)(n),
        f = (0, N.A)(n),
        x = (0, v.Qs)(n.id),
        p = (0, j.A)(x?.id, e, n),
        X = z(n, A),
        L = (0, h.m)(n),
        k = (0, h.y)(n),
        B = I(n),
        Y = (0, D.A)(n),
        Z = (0, T.A)(n),
        F = (0, _.A)(n, e, A),
        Q = W(n, e),
        R = (0, H.A)(n, e),
        $ = (0, q.A)(n, e.id),
        J = (0, G.A)(n, e),
        K = (0, m.A)(n, e),
        tt = (0, E.A)(n),
        tn = (0, u.A)({ id: n.id, label: S.intl.string(S.t.gFHI3k) }),
        te = (0, w.A)(n),
        ti = (0, o.A)(n),
        tl = (0, U.A)(n),
        ta = (0, P.A)(n),
        ts = (0, y.A)(n),
        tr = (0, V.A)(n),
        td = (0, C.os)("ChannelListVoiceContextMenuNormal"),
        tc = (0, M.Ay)(n);
    return (0, i.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: r.Z_,
        "aria-label": S.intl.string(S.t.Xm41aV),
        onSelect: d,
        children: [
            (0, i.jsx)(s.rX, { children: null != x ? p : X }),
            (0, i.jsx)(s.rX, { children: g }, "mark-as-read-or-favorite"),
            (0, i.jsx)(s.rX, { children: L }),
            (0, i.jsxs)(s.rX, { children: [F, ti, tl, ta, f] }, "channel-actions"),
            (0, i.jsxs)(s.rX, { children: [$, Q, R, B, ts, te] }, "voice-actions"),
            (0, i.jsxs)(s.rX, { children: [tr, td ? tc : Y] }, "notifications"),
            (0, i.jsxs)(s.rX, { children: [Z, J, K, tt] }, "admin-actions"),
            (0, i.jsx)(s.rX, { children: k }),
            (0, i.jsxs)(s.rX, { children: [tn, null] }, "developer-actions"),
        ],
    });
}
let K = (0, c.A)(
    (0, d.A)(
        function (t) {
            return (0, g.DZ)() ? (0, i.jsx)($, { ...t }) : (0, i.jsx)(J, { ...t });
        },
        { object: R.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.CHANNEL_LIST_VOICE_CHANNEL_MENU],
);
