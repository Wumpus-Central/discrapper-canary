e.d(i, { default: () => nn });
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
    C = e(250737),
    X = e(73883),
    b = e(508654),
    N = e(24661),
    _ = e(769591),
    m = e(446600),
    p = e(687340),
    v = e(533957),
    f = e(886393),
    E = e(477190),
    L = e(307623),
    V = e(317910),
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
    O = e(868548),
    Z = e(995102),
    M = e(288104),
    H = e(661504),
    Q = e(969128),
    U = e(304694),
    w = e(314116),
    B = e(849736),
    D = e(233993),
    F = e(576705);
function R(n, i) {
    let e = (0, l.bG)([F.A], () => F.A.can(D.QY, n), [n]);
    return null != i && e
        ? (0, t.jsx)(s.Dr, {
              id: "end-stage",
              label: I.intl.string(I.t.saZaRb),
              color: "danger",
              action: function () {
                  (0, w.A)({
                      title: I.intl.string(I.t.gW9je1),
                      subtitle: I.intl.string(I.t.mT7jwN),
                      confirmText: I.intl.string(I.t.saZaRb),
                      onConfirm: () => (0, B.OE)(n),
                  });
              },
          })
        : null;
}
e(237984);
var W = e(704543),
    y = e(671483),
    z = e(217563),
    Y = e(367513),
    q = e(976860),
    J = e(652215);
function K(n, i) {
    return (0, l.bG)([F.A], () => F.A.can(J.xBc.CONNECT, n), [n]) && n.isGuildVocal()
        ? (0, t.jsx)(s.Dr, {
              id: "open-chat",
              label: I.intl.string(I.t.ZXxLQg),
              action: () => {
                  (Y.A.updateChatOpen(n.id, !0), (0, q.uh)(i.id, n.id));
              },
          })
        : null;
}
function P(n) {
    let { channel: i, guild: e, onSelect: d } = n,
        c = i.isGuildStageVoice(),
        o = (0, l.bG)([m.A], () => (c ? m.A.getStageInstanceByChannel(i.id) : void 0), [c, i.id]),
        h = (0, O.A)(i),
        X = (0, f.A)(i),
        p = (0, b.Qs)(i.id),
        v = (0, N.A)(p?.id, e, i),
        E = R(i, o),
        L = (0, x.C)(i),
        V = (0, C.A)(i),
        k = (0, j.A)(i),
        G = (0, g.A)(i),
        T = S(i),
        Q = (0, Z.A)(i),
        w = (0, M.A)(i),
        B = (0, H.A)(i),
        D = (0, _.os)("ChannelListVoiceContextMenuFavorites"),
        F = K(i, e),
        W = (0, y.A)(i, e),
        z = (0, u.A)({ id: i.id, label: I.intl.string(I.t.gFHI3k) }),
        Y = (0, U.A)(i),
        q = (0, A.A)(i);
    return (0, t.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": I.intl.string(I.t.Xm41aV),
        onSelect: d,
        children: [
            (0, t.jsx)(s.rX, { children: null != p ? v : E }),
            (0, t.jsx)(s.rX, { children: h }),
            (0, t.jsxs)(s.rX, { children: [k, G, V] }),
            (0, t.jsxs)(s.rX, { children: [q, X] }),
            (0, t.jsxs)(s.rX, { children: [F, W, T, Y] }),
            (0, t.jsxs)(s.rX, { children: [Q, D ? B : w] }),
            (0, t.jsx)(s.rX, { children: L }),
            (0, t.jsxs)(s.rX, { children: [z, null] }),
        ],
    });
}
function $(n) {
    let { channel: i, guild: e, onSelect: d } = n,
        c = i.isGuildStageVoice(),
        o = (0, l.bG)([m.A], () => (c ? m.A.getStageInstanceByChannel(i.id) : void 0), [c, i.id]),
        h = (0, O.A)(i),
        j = (0, f.A)(i),
        g = (0, b.Qs)(i.id),
        C = (0, N.A)(g?.id, e, i),
        k = R(i, o),
        G = (0, x.z)(i),
        w = (0, x.C)(i),
        B = S(i),
        D = (0, M.A)(i),
        F = (0, V.A)(i),
        Y = (0, T.A)(i, e, o),
        q = K(i, e),
        J = (0, y.A)(i, e),
        P = (0, z.A)(i, e.id),
        $ = (0, v.A)(i, e),
        nn = (0, E.A)(i, e),
        ni = (0, L.A)(i),
        ne = (0, u.A)({ id: i.id, label: I.intl.string(I.t.gFHI3k) }),
        nt = (0, U.A)(i),
        nl = (0, A.A)(i),
        nr = (0, W.A)(i),
        ns = (0, Q.A)(i),
        na = (0, p.A)(i),
        nd = (0, X.A)(i),
        nc = (0, Z.A)(i),
        nA = (0, _.os)("ChannelListVoiceContextMenuNormal"),
        no = (0, H.A)(i);
    return (0, t.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": I.intl.string(I.t.Xm41aV),
        onSelect: d,
        children: [
            (0, t.jsx)(s.rX, { children: null != g ? C : k }),
            (0, t.jsx)(s.rX, { children: h }, "mark-as-read-or-favorite"),
            (0, t.jsx)(s.rX, { children: G }),
            (0, t.jsxs)(s.rX, { children: [Y, nl, nr, ns, na, j] }, "channel-actions"),
            (0, t.jsxs)(s.rX, { children: [P, q, J, B, nd, nt] }, "voice-actions"),
            (0, t.jsxs)(s.rX, { children: [nc, nA ? no : D] }, "notifications"),
            (0, t.jsxs)(s.rX, { children: [F, $, nn, ni] }, "admin-actions"),
            (0, t.jsx)(s.rX, { children: w }),
            (0, t.jsxs)(s.rX, { children: [ne, null] }, "developer-actions"),
        ],
    });
}
let nn = (0, c.A)(
    (0, d.A)(
        function (n) {
            return (0, h.DZ)() ? (0, t.jsx)(P, { ...n }) : (0, t.jsx)($, { ...n });
        },
        { object: J.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.CHANNEL_LIST_VOICE_CHANNEL_MENU],
);
