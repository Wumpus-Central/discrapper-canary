n.d(i, { default: () => es });
var s = n(477900);
n(582128);
var r = n(165862),
    d = n(477782),
    t = n(442433),
    l = n(847767),
    a = n(358367),
    o = n(155718),
    c = n(468389),
    u = n(793574),
    h = n(810845),
    x = n(854182),
    m = n(575079),
    A = n(855187),
    j = n(479335),
    g = n(374846),
    v = n(50268),
    p = n(708645),
    I = n(414636),
    C = n(106401),
    U = n(803664),
    f = n(29293),
    _ = n(509302),
    w = n(497600),
    E = n(173500),
    M = n(239211),
    N = n(949674),
    b = n(855986),
    T = n(646514),
    X = n(192308),
    k = n(732159),
    O = n(778712),
    R = n(834730),
    D = n(97808),
    G = n(308528),
    S = n(297413),
    Z = n(966327),
    z = n(287809),
    P = n(792996),
    y = n(575721);
function B(e) {
    let { color: i, className: n } = e;
    return (0, s.jsx)("svg", {
        className: n,
        height: "16",
        width: "80",
        viewBox: "0 0 80 16",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, s.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
                (0, s.jsx)("path", { d: "m0 0h80v16h-80z" }),
                (0, s.jsxs)("g", {
                    stroke: i,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    children: [
                        (0, s.jsx)("path", { d: "m71 1h4v4.16" }),
                        (0, s.jsx)("path", { d: "m2 1h4v4.16", transform: "matrix(-1 0 0 1 8 0)" }),
                        (0, s.jsx)("path", { d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4" }),
                        (0, s.jsx)("path", { d: "m72.13 10.474 2.869 3.12 2.631-3.12" }),
                    ],
                }),
            ],
        }),
    });
}
var L = n(984894),
    W = n(399476),
    Y = n(889460),
    q = n(448290),
    F = n(301541),
    H = n(460597),
    J = n(734057),
    K = n(313998),
    Q = n(198229),
    V = n(243949),
    $ = n(972432),
    ee = n(77544),
    ei = n(652215);
function en(e) {
    var i, n;
    let l,
        a,
        u,
        {
            user: p,
            channel: en,
            context: es,
            showChatItems: er = !0,
            showMediaItems: ed = !1,
            showChannelCallItems: et = !1,
            showModalItems: el = !0,
            onSelect: ea,
            onHeightUpdate: eo,
            onInteraction: ec,
        } = e,
        eu = (0, V.A)({ userId: p.id, guildId: null }),
        eh = (0, I.gE)(p, void 0),
        ex = (0, q.A)(p, (0, g.I)(es === ei.BRT.POPOUT ? null : en.id)),
        em = en.id,
        eA = (0, K.A)(p, em),
        ej = (0, F.A)(p.id, es),
        eg = (0, N.A)({ user: p, context: es }),
        ev = (0, w.A)({ user: p, channelId: en.id, context: es }),
        ep = (0, f.A)({ user: p }),
        eI = (0, $.A)(p.id),
        eC =
            ((i = p.id),
            (n = en.id),
            (l = (0, b.bG)([z.default], () => z.default.getCurrentUser(), [])),
            null == (a = (0, b.bG)([J.A], () => J.A.getChannel(n), [n])) ||
            a.isOwner(i) ||
            null == l ||
            !a.isOwner(l.id) ||
            !a.recipients?.includes(i)
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "remove",
                      label: P.intl.string(P.t["n5zMI+"]),
                      action: () => G.A.removeRecipient(n, i),
                      color: "danger",
                  })),
        eU = (0, Q.A)(p.id),
        ef = (0, j.u)({ userId: p.id, channelId: en.id, guildId: en.getGuildId() }),
        e_ = (0, L.A)(p.id, en.id),
        ew = (0, Y.A)({ user: p }),
        eE = (0, c.A)(null, p),
        eM = (0, U.A)({ user: p }),
        eN = (0, _.A)({ user: p }),
        eb = (0, H.A)({ user: p }),
        eT = (0, M.A)({ user: p, location: "GroupDMUserContextMenu" }),
        eX = (0, W.A)({ user: p, location: "GroupDMUserContextMenu" }),
        ek = (0, v.A)({ id: p.id, label: P.intl.string(P.t["/AXYnE"]) }),
        eO = (0, ee.A)(p.id),
        eR = (0, m.A)(p.id),
        eD = (0, x.A)(en.id),
        eG = (0, C.A)(p),
        eS = (0, A.A)(p.id),
        eZ = (0, h.A)(en.id, p.id),
        ez = (0, E.A)({
            commandType: o.kc.USER,
            commandTargetId: p.id,
            channel: en,
            guildId: void 0,
            onHeightUpdate: eo,
        }),
        eP =
            null == (u = (0, b.bG)([z.default], () => z.default.getCurrentUser())) ||
            en.ownerId !== u.id ||
            p.id === u.id
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "make-dm-owner",
                      color: "danger",
                      label: P.intl.string(P.t["6t3CyN"]),
                      action: () => {
                          (0, X.qf)((e) =>
                              (0, s.jsx)(k.u, {
                                  title: P.intl.string(P.t.WZoUsm),
                                  confirmText: P.intl.string(P.t["cY+Oob"]),
                                  cancelText: P.intl.string(P.t["ETE/oC"]),
                                  onConfirm: () => G.A.setDMOwner(en.id, p.id),
                                  ...e,
                                  children: (0, s.jsxs)("div", {
                                      className: y.Uh,
                                      children: [
                                          (0, s.jsx)(B, { color: T.A.unsafe_rawColors.PRIMARY_300.css }),
                                          (0, s.jsxs)("div", {
                                              className: y.nS,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: y.HT,
                                                      children: (0, s.jsx)(Z.A, { user: u, size: O._3.SIZE_80 }),
                                                  }),
                                                  (0, s.jsx)("div", {
                                                      className: y.to,
                                                      children: (0, s.jsx)(Z.A, { user: p, size: O._3.SIZE_80 }),
                                                  }),
                                              ],
                                          }),
                                          (0, s.jsx)(R.E, {
                                              variant: "body-md/normal",
                                              children: P.intl.format(P.t.gsBb3F, {
                                                  usernameHook: (e, i) =>
                                                      (0, s.jsx)(
                                                          S.A,
                                                          {
                                                              usernameIcon: (0, s.jsx)(D.eu, {
                                                                  className: y.jj,
                                                                  src: p.getAvatarURL(void 0, 16),
                                                                  size: O._3.SIZE_16,
                                                                  "aria-hidden": !0,
                                                              }),
                                                              className: y.xK,
                                                              usernameClass: y.Xh,
                                                              discriminatorClass: y.D2,
                                                              user: p,
                                                          },
                                                          i,
                                                      ),
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                          );
                      },
                  }),
        ey = p.isNonUserBot(),
        eB = en.isManaged(),
        eL = en.recipients?.includes(p.id);
    return (0, s.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "user-context",
        onClose: t.Z_,
        "aria-label": P.intl.string(P.t.liqwPJ),
        onSelect: ea,
        onInteraction: ec,
        children: [
            !ey &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(d.rX, { children: eG }),
                        (0, s.jsxs)(d.rX, {
                            children: [el && eu, el && eh, er && ex, ej, eg, !eB && eA, el && ev, el && ep, eO],
                        }),
                        ed && (0, s.jsx)(d.rX, { children: eI }),
                        eL && (0, s.jsxs)(d.rX, { children: [!eB && eC, eP] }),
                        (0, s.jsx)(d.rX, { children: el && eE }),
                        et && (0, s.jsxs)(d.rX, { children: [eZ, eD, eR] }),
                        (0, s.jsxs)(d.rX, {
                            children: [
                                ed && eU,
                                ed && ef,
                                ed && e_,
                                ed && eS,
                                ez,
                                el && ew,
                                eM,
                                eN,
                                eb,
                                el && eX,
                                el && eT,
                            ],
                        }),
                    ],
                }),
            (0, s.jsx)(d.rX, { children: ek }),
        ],
    });
}
let es = (0, a.A)(
    (0, l.A)(
        function (e) {
            return (0, s.jsx)(p.ZQ, {
                user: e.user,
                guildId: void 0,
                location: "GroupDMUserContextMenu",
                children: (0, s.jsx)(en, { ...e }),
            });
        },
        { object: ei.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.GROUP_DM_USER_MENU],
);
