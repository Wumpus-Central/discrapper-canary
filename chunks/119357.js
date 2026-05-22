e.d(i, { default: () => $ });
var t = e(627968);
e(64700);
var l = e(17928),
    r = e(980707),
    s = e(477782),
    a = e(442433),
    d = e(847767),
    c = e(358367),
    o = e(468389),
    A = e(793574),
    u = e(50268),
    h = e(313281),
    x = e(133238),
    j = e(572763),
    g = e(979807),
    X = e(671470),
    C = e(73883),
    b = e(508654),
    m = e(24661),
    N = e(769591),
    _ = e(446600),
    p = e(533957),
    v = e(886393),
    f = e(477190),
    E = e(307623),
    L = e(317910),
    V = e(686449),
    k = e(945886),
    G = e(375708);
function I(n) {
    let i = (0, l.bG)([k.A], () => k.A.isCollapsed(n.id), [n.id]);
    return __OVERLAY__
        ? null
        : (0, t.jsx)(s.sL, {
              id: "hide-voice-names",
              label: G.intl.string(G.t.LxzNiu),
              action: () => V.A.update(n.id),
              checked: i,
          });
}
var S = e(475777),
    T = e(848977),
    O = e(995102),
    Z = e(288104),
    y = e(661504),
    M = e(969128),
    H = e(304694),
    Q = e(314116),
    U = e(849736),
    w = e(233993),
    B = e(576705);
function D(n, i) {
    let e = (0, l.bG)([B.A], () => B.A.can(w.QY, n), [n]);
    return null != i && e
        ? (0, t.jsx)(s.Dr, {
              id: "end-stage",
              label: G.intl.string(G.t.saZaRb),
              color: "danger",
              action: function () {
                  (0, Q.A)({
                      title: G.intl.string(G.t.gW9je1),
                      subtitle: G.intl.string(G.t.mT7jwN),
                      confirmText: G.intl.string(G.t.saZaRb),
                      onConfirm: () => (0, U.OE)(n),
                  });
              },
          })
        : null;
}
e(237984);
var F = e(643111),
    R = e(671483),
    W = e(217563),
    Y = e(367513),
    z = e(976860),
    q = e(652215);
function J(n, i) {
    return (0, l.bG)([B.A], () => B.A.can(q.xBc.CONNECT, n), [n]) && n.isGuildVocal()
        ? (0, t.jsx)(s.Dr, {
              id: "open-chat",
              label: G.intl.string(G.t.ZXxLQg),
              action: () => {
                  Y.A.updateChatOpen(n.id, !0), (0, z.uh)(i.id, n.id);
              },
          })
        : null;
}
function K(n) {
    let { channel: i, guild: e, onSelect: d } = n,
        c = i.isGuildStageVoice(),
        A = (0, l.bG)([_.A], () => (c ? _.A.getStageInstanceByChannel(i.id) : void 0), [c, i.id]),
        h = (0, T.A)(i),
        C = (0, v.A)(i),
        p = (0, b.Qs)(i.id),
        f = (0, m.A)(p?.id, e, i),
        E = D(i, A),
        L = (0, x.y)(i),
        V = (0, j.A)(i),
        k = (0, g.A)(i),
        S = (0, X.A)(i),
        M = I(i),
        Q = (0, O.A)(i),
        U = (0, Z.A)(i),
        w = (0, y.Ay)(i),
        B = (0, N.os)("ChannelListVoiceContextMenuFavorites"),
        F = J(i, e),
        W = (0, R.A)(i, e),
        Y = (0, u.A)({ id: i.id, label: G.intl.string(G.t.gFHI3k) }),
        z = (0, H.A)(i),
        q = (0, o.A)(i);
    return (0, t.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": G.intl.string(G.t.Xm41aV),
        onSelect: d,
        children: [
            (0, t.jsx)(s.rX, { children: null != p ? f : E }),
            (0, t.jsx)(s.rX, { children: h }),
            (0, t.jsxs)(s.rX, { children: [k, S, V] }),
            (0, t.jsxs)(s.rX, { children: [q, C] }),
            (0, t.jsxs)(s.rX, { children: [F, W, M, z] }),
            (0, t.jsxs)(s.rX, { children: [Q, B ? w : U] }),
            (0, t.jsx)(s.rX, { children: L }),
            (0, t.jsxs)(s.rX, { children: [Y, null] }),
        ],
    });
}
function P(n) {
    let { channel: i, guild: e, onSelect: d } = n,
        c = i.isGuildStageVoice(),
        A = (0, l.bG)([_.A], () => (c ? _.A.getStageInstanceByChannel(i.id) : void 0), [c, i.id]),
        h = (0, T.A)(i),
        j = (0, v.A)(i),
        g = (0, b.Qs)(i.id),
        X = (0, m.A)(g?.id, e, i),
        V = D(i, A),
        k = (0, x.m)(i),
        Q = (0, x.y)(i),
        U = I(i),
        w = (0, Z.A)(i),
        B = (0, L.A)(i),
        Y = (0, S.A)(i, e, A),
        z = J(i, e),
        q = (0, R.A)(i, e),
        K = (0, W.A)(i, e.id),
        P = (0, p.A)(i, e),
        $ = (0, f.A)(i, e),
        nn = (0, E.A)(i),
        ni = (0, u.A)({ id: i.id, label: G.intl.string(G.t.gFHI3k) }),
        ne = (0, H.A)(i),
        nt = (0, o.A)(i),
        nl = (0, F.A)(i),
        nr = (0, M.A)(i),
        ns = (0, C.A)(i),
        na = (0, O.A)(i),
        nd = (0, N.os)("ChannelListVoiceContextMenuNormal"),
        nc = (0, y.Ay)(i);
    return (0, t.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": G.intl.string(G.t.Xm41aV),
        onSelect: d,
        children: [
            (0, t.jsx)(s.rX, { children: null != g ? X : V }),
            (0, t.jsx)(s.rX, { children: h }, "mark-as-read-or-favorite"),
            (0, t.jsx)(s.rX, { children: k }),
            (0, t.jsxs)(s.rX, { children: [Y, nt, nl, nr, j] }, "channel-actions"),
            (0, t.jsxs)(s.rX, { children: [K, z, q, U, ns, ne] }, "voice-actions"),
            (0, t.jsxs)(s.rX, { children: [na, nd ? nc : w] }, "notifications"),
            (0, t.jsxs)(s.rX, { children: [B, P, $, nn] }, "admin-actions"),
            (0, t.jsx)(s.rX, { children: Q }),
            (0, t.jsxs)(s.rX, { children: [ni, null] }, "developer-actions"),
        ],
    });
}
let $ = (0, c.A)(
    (0, d.A)(
        function (n) {
            return (0, h.DZ)() ? (0, t.jsx)(K, { ...n }) : (0, t.jsx)(P, { ...n });
        },
        { object: q.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.CHANNEL_LIST_VOICE_CHANNEL_MENU],
);
