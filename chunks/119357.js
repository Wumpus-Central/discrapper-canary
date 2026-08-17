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
    g = e(527835),
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
    O = e(848977),
    Z = e(995102),
    M = e(288104),
    y = e(661504),
    H = e(969128),
    Q = e(304694),
    U = e(314116),
    w = e(849736),
    B = e(233993),
    D = e(576705);
function F(n, i) {
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
    z = e(217563),
    Y = e(367513),
    q = e(976860),
    J = e(652215);
function K(n, i) {
    return (0, l.bG)([D.A], () => D.A.can(J.xBc.CONNECT, n), [n]) && n.isGuildVocal()
        ? (0, t.jsx)(s.Dr, {
              id: "open-chat",
              label: I.intl.string(I.t.ZXxLQg),
              action: () => {
                  Y.A.updateChatOpen(n.id, !0), (0, q.uh)(i.id, n.id);
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
        E = F(i, o),
        L = (0, x.C)(i),
        V = (0, C.A)(i),
        k = (0, j.A)(i),
        G = (0, g.A)(i),
        T = S(i),
        H = (0, Z.A)(i),
        U = (0, M.A)(i),
        w = (0, y.Ay)(i),
        B = (0, _.os)("ChannelListVoiceContextMenuFavorites"),
        D = K(i, e),
        R = (0, W.A)(i, e),
        z = (0, u.A)({ id: i.id, label: I.intl.string(I.t.gFHI3k) }),
        Y = (0, Q.A)(i),
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
            (0, t.jsxs)(s.rX, { children: [D, R, T, Y] }),
            (0, t.jsxs)(s.rX, { children: [H, B ? w : U] }),
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
        k = F(i, o),
        G = (0, x.z)(i),
        U = (0, x.C)(i),
        w = S(i),
        B = (0, M.A)(i),
        D = (0, V.A)(i),
        Y = (0, T.A)(i, e, o),
        q = K(i, e),
        J = (0, W.A)(i, e),
        P = (0, z.A)(i, e.id),
        $ = (0, v.A)(i, e),
        nn = (0, E.A)(i, e),
        ni = (0, L.A)(i),
        ne = (0, u.A)({ id: i.id, label: I.intl.string(I.t.gFHI3k) }),
        nt = (0, Q.A)(i),
        nl = (0, A.A)(i),
        nr = (0, R.A)(i),
        ns = (0, H.A)(i),
        na = (0, p.A)(i),
        nd = (0, X.A)(i),
        nc = (0, Z.A)(i),
        nA = (0, _.os)("ChannelListVoiceContextMenuNormal"),
        no = (0, y.Ay)(i);
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
            (0, t.jsxs)(s.rX, { children: [P, q, J, w, nd, nt] }, "voice-actions"),
            (0, t.jsxs)(s.rX, { children: [nc, nA ? no : B] }, "notifications"),
            (0, t.jsxs)(s.rX, { children: [D, $, nn, ni] }, "admin-actions"),
            (0, t.jsx)(s.rX, { children: U }),
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
