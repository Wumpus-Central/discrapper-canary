e.d(i, { default: () => P });
var t = e(477900);
e(582128);
var l = e(17928),
    r = e(980707),
    s = e(477782),
    a = e(442433),
    d = e(847767),
    c = e(358367),
    A = e(468389),
    o = e(793574),
    u = e(50268),
    h = e(93055),
    x = e(438653),
    j = e(6351),
    g = e(349807),
    X = e(250737),
    b = e(73883),
    C = e(508654),
    _ = e(24661),
    p = e(446600),
    N = e(687340),
    f = e(533957),
    m = e(886393),
    v = e(477190),
    E = e(307623),
    k = e(317910),
    G = e(686449),
    I = e(945886),
    S = e(375708);
function T(n) {
    let i = (0, l.bG)([I.A], () => I.A.isCollapsed(n.id), [n.id]);
    return __OVERLAY__
        ? null
        : (0, t.jsx)(s.sL, {
              id: "hide-voice-names",
              label: S.intl.string(S.t.LxzNiu),
              action: () => G.A.update(n.id),
              checked: i,
          });
}
var L = e(475777),
    O = e(868548),
    V = e(995102),
    Z = e(288104),
    H = e(969128),
    Q = e(304694),
    U = e(314116),
    w = e(849736),
    B = e(233993),
    D = e(576705);
function M(n, i) {
    let e = (0, l.bG)([D.A], () => D.A.can(B.QY, n), [n]);
    return null != i && e
        ? (0, t.jsx)(s.Dr, {
              id: "end-stage",
              label: S.intl.string(S.t.saZaRb),
              color: "danger",
              action: function () {
                  (0, U.A)({
                      title: S.intl.string(S.t.gW9je1),
                      subtitle: S.intl.string(S.t.mT7jwN),
                      confirmText: S.intl.string(S.t.saZaRb),
                      onConfirm: () => (0, w.OE)(n),
                  });
              },
          })
        : null;
}
e(237984);
var R = e(704543),
    W = e(671483),
    y = e(217563),
    z = e(367513),
    F = e(976860),
    Y = e(652215);
function q(n, i) {
    return (0, l.bG)([D.A], () => D.A.can(Y.xBc.CONNECT, n), [n]) && n.isGuildVocal()
        ? (0, t.jsx)(s.Dr, {
              id: "open-chat",
              label: S.intl.string(S.t.ZXxLQg),
              action: () => {
                  (z.A.updateChatOpen(n.id, !0), (0, F.uh)(i.id, n.id));
              },
          })
        : null;
}
function J(n) {
    let { channel: i, guild: e, onSelect: d } = n,
        c = i.isGuildStageVoice(),
        o = (0, l.bG)([p.A], () => (c ? p.A.getStageInstanceByChannel(i.id) : void 0), [c, i.id]),
        h = (0, O.A)(i),
        b = (0, m.A)(i),
        N = (0, C.Qs)(i.id),
        f = (0, _.A)(N?.id, e, i),
        v = M(i, o),
        E = (0, x.C)(i),
        k = (0, X.A)(i),
        G = (0, j.A)(i),
        I = (0, g.A)(i),
        L = T(i),
        H = (0, V.A)(i),
        U = (0, Z.A)(i),
        w = q(i, e),
        B = (0, W.A)(i, e),
        D = (0, u.A)({ id: i.id, label: S.intl.string(S.t.gFHI3k) }),
        R = (0, Q.A)(i),
        y = (0, A.A)(i);
    return (0, t.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": S.intl.string(S.t.Xm41aV),
        onSelect: d,
        children: [
            (0, t.jsx)(s.rX, { children: null != N ? f : v }),
            (0, t.jsx)(s.rX, { children: h }),
            (0, t.jsxs)(s.rX, { children: [G, I, k] }),
            (0, t.jsxs)(s.rX, { children: [y, b] }),
            (0, t.jsxs)(s.rX, { children: [w, B, L, R] }),
            (0, t.jsxs)(s.rX, { children: [H, U] }),
            (0, t.jsx)(s.rX, { children: E }),
            (0, t.jsxs)(s.rX, { children: [D, null] }),
        ],
    });
}
function K(n) {
    let { channel: i, guild: e, onSelect: d } = n,
        c = i.isGuildStageVoice(),
        o = (0, l.bG)([p.A], () => (c ? p.A.getStageInstanceByChannel(i.id) : void 0), [c, i.id]),
        h = (0, O.A)(i),
        j = (0, m.A)(i),
        g = (0, C.Qs)(i.id),
        X = (0, _.A)(g?.id, e, i),
        G = M(i, o),
        I = (0, x.z)(i),
        U = (0, x.C)(i),
        w = T(i),
        B = (0, k.A)(i),
        D = (0, L.A)(i, e, o),
        z = q(i, e),
        F = (0, W.A)(i, e),
        Y = (0, y.A)(i, e.id),
        J = (0, f.A)(i, e),
        K = (0, v.A)(i, e),
        P = (0, E.A)(i),
        $ = (0, u.A)({ id: i.id, label: S.intl.string(S.t.gFHI3k) }),
        nn = (0, Q.A)(i),
        ni = (0, A.A)(i),
        ne = (0, R.A)(i),
        nt = (0, H.A)(i),
        nl = (0, N.A)(i),
        nr = (0, b.A)(i),
        ns = (0, V.A)(i),
        na = (0, Z.A)(i);
    return (0, t.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": S.intl.string(S.t.Xm41aV),
        onSelect: d,
        children: [
            (0, t.jsx)(s.rX, { children: null != g ? X : G }),
            (0, t.jsx)(s.rX, { children: h }, "mark-as-read-or-favorite"),
            (0, t.jsx)(s.rX, { children: I }),
            (0, t.jsxs)(s.rX, { children: [D, ni, ne, nt, nl, j] }, "channel-actions"),
            (0, t.jsxs)(s.rX, { children: [Y, z, F, w, nr, nn] }, "voice-actions"),
            (0, t.jsxs)(s.rX, { children: [ns, na] }, "notifications"),
            (0, t.jsxs)(s.rX, { children: [B, J, K, P] }, "admin-actions"),
            (0, t.jsx)(s.rX, { children: U }),
            (0, t.jsxs)(s.rX, { children: [$, null] }, "developer-actions"),
        ],
    });
}
let P = (0, c.A)(
    (0, d.A)(
        function (n) {
            return (0, h.DZ)() ? (0, t.jsx)(J, { ...n }) : (0, t.jsx)(K, { ...n });
        },
        { object: Y.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.CHANNEL_LIST_VOICE_CHANNEL_MENU],
);
