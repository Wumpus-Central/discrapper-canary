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
    g = e(250737),
    X = e(73883),
    b = e(508654),
    C = e(24661),
    _ = e(446600),
    p = e(687340),
    N = e(533957),
    f = e(886393),
    m = e(477190),
    v = e(307623),
    E = e(317910),
    k = e(686449),
    G = e(945886),
    I = e(375708);
function S(n) {
    let i = (0, l.bG)([G.A], () => G.A.isCollapsed(n.id), [n.id]);
    return __OVERLAY__
        ? null
        : (0, t.jsx)(s.sL, {
              id: "hide-voice-names",
              label: I.intl.string(I.t.LxzNiu),
              action: () => k.A.update(n.id),
              checked: i,
          });
}
var T = e(475777),
    L = e(868548),
    O = e(173522),
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
              label: I.intl.string(I.t.saZaRb),
              color: "danger",
              action: function () {
                  (0, U.A)({
                      title: I.intl.string(I.t.gW9je1),
                      subtitle: I.intl.string(I.t.mT7jwN),
                      confirmText: I.intl.string(I.t.saZaRb),
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
              label: I.intl.string(I.t.ZXxLQg),
              action: () => {
                  (z.A.updateChatOpen(n.id, !0), (0, F.uh)(i.id, n.id));
              },
          })
        : null;
}
function J(n) {
    let { channel: i, guild: e, onSelect: d } = n,
        c = i.isGuildStageVoice(),
        o = (0, l.bG)([_.A], () => (c ? _.A.getStageInstanceByChannel(i.id) : void 0), [c, i.id]),
        h = (0, L.A)(i),
        X = (0, f.A)(i),
        p = (0, b.Qs)(i.id),
        N = (0, C.A)(p?.id, e, i),
        m = M(i, o),
        v = (0, x.C)(i),
        E = (0, g.A)(i),
        k = (0, j.A)(i),
        G = (0, O.A)(i),
        T = S(i),
        H = (0, V.A)(i),
        U = (0, Z.A)(i),
        w = q(i, e),
        B = (0, W.A)(i, e),
        D = (0, u.A)({ id: i.id, label: I.intl.string(I.t.gFHI3k) }),
        R = (0, Q.A)(i),
        y = (0, A.A)(i);
    return (0, t.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": I.intl.string(I.t.Xm41aV),
        onSelect: d,
        children: [
            (0, t.jsx)(s.rX, { children: null != p ? N : m }),
            (0, t.jsx)(s.rX, { children: h }),
            (0, t.jsxs)(s.rX, { children: [k, G, E] }),
            (0, t.jsxs)(s.rX, { children: [y, X] }),
            (0, t.jsxs)(s.rX, { children: [w, B, T, R] }),
            (0, t.jsxs)(s.rX, { children: [H, U] }),
            (0, t.jsx)(s.rX, { children: v }),
            (0, t.jsxs)(s.rX, { children: [D, null] }),
        ],
    });
}
function K(n) {
    let { channel: i, guild: e, onSelect: d } = n,
        c = i.isGuildStageVoice(),
        o = (0, l.bG)([_.A], () => (c ? _.A.getStageInstanceByChannel(i.id) : void 0), [c, i.id]),
        h = (0, L.A)(i),
        j = (0, f.A)(i),
        g = (0, b.Qs)(i.id),
        k = (0, C.A)(g?.id, e, i),
        G = M(i, o),
        U = (0, x.z)(i),
        w = (0, x.C)(i),
        B = S(i),
        D = (0, E.A)(i),
        z = (0, T.A)(i, e, o),
        F = q(i, e),
        Y = (0, W.A)(i, e),
        J = (0, y.A)(i, e.id),
        K = (0, N.A)(i, e),
        P = (0, m.A)(i, e),
        $ = (0, v.A)(i),
        nn = (0, u.A)({ id: i.id, label: I.intl.string(I.t.gFHI3k) }),
        ni = (0, Q.A)(i),
        ne = (0, A.A)(i),
        nt = (0, R.A)(i),
        nl = (0, H.A)(i),
        nr = (0, p.A)(i),
        ns = (0, X.A)(i),
        na = (0, V.A)(i),
        nd = (0, Z.A)(i),
        nc = (0, O.A)(i);
    return (0, t.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": I.intl.string(I.t.Xm41aV),
        onSelect: d,
        children: [
            (0, t.jsx)(s.rX, { children: null != g ? k : G }),
            (0, t.jsx)(s.rX, { children: h }, "mark-as-read-or-favorite"),
            (0, t.jsx)(s.rX, { children: U }),
            (0, t.jsxs)(s.rX, { children: [z, ne, nt, nl, nr, j] }, "channel-actions"),
            (0, t.jsxs)(s.rX, { children: [J, F, Y, B, ns, ni] }, "voice-actions"),
            (0, t.jsxs)(s.rX, { children: [na, nd] }, "notifications"),
            (0, t.jsx)(s.rX, { children: nc }),
            (0, t.jsxs)(s.rX, { children: [D, K, P, $] }, "admin-actions"),
            (0, t.jsx)(s.rX, { children: w }),
            (0, t.jsxs)(s.rX, { children: [nn, null] }, "developer-actions"),
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
