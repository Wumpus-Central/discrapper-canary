n.d(i, { default: () => en });
var s = n(477900);
n(582128);
var r = n(980707),
    d = n(477782),
    t = n(442433),
    l = n(847767),
    a = n(358367),
    o = n(155718),
    c = n(468389),
    u = n(793574),
    h = n(810845),
    x = n(854182),
    m = n(422229),
    A = n(855187),
    j = n(479335),
    g = n(50268),
    v = n(708645),
    p = n(630821),
    I = n(844065),
    C = n(803664),
    U = n(29293),
    _ = n(509302),
    f = n(497600),
    w = n(646911),
    E = n(239211),
    M = n(373397),
    N = n(17928),
    b = n(661531),
    X = n(192308),
    k = n(732159),
    T = n(778712),
    D = n(834730),
    G = n(97808),
    R = n(308528),
    S = n(297413),
    O = n(966327),
    Z = n(287809),
    z = n(660183),
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
    P = n(399476),
    W = n(889460),
    Y = n(448290),
    F = n(301541),
    H = n(460597),
    q = n(734057),
    J = n(313998),
    K = n(198229),
    Q = n(243949),
    V = n(972432),
    $ = n(77544),
    ee = n(652215);
function ei(e) {
    var i, n;
    let l,
        a,
        u,
        {
            user: v,
            channel: ee,
            context: ei,
            showChatItems: en = !0,
            showMediaItems: es = !1,
            showChannelCallItems: er = !1,
            showModalItems: ed = !0,
            onSelect: et,
            onHeightUpdate: el,
            onInteraction: ea,
        } = e,
        eo = (0, Q.A)({ userId: v.id, guildId: null }),
        ec = (0, p.gE)(v, void 0),
        eu = (0, Y.A)(v, null, ee.id, ei),
        eh = ee.id,
        ex = (0, J.A)(v, eh),
        em = (0, F.A)(v.id, ei),
        eA = (0, M.A)({ user: v, context: ei }),
        ej = (0, f.A)({ user: v, channelId: ee.id, context: ei }),
        eg = (0, U.A)({ user: v }),
        ev = (0, V.A)(v.id),
        ep =
            ((i = v.id),
            (n = ee.id),
            (l = (0, N.bG)([Z.default], () => Z.default.getCurrentUser(), [])),
            null == (a = (0, N.bG)([q.A], () => q.A.getChannel(n), [n])) ||
            a.isOwner(i) ||
            null == l ||
            !a.isOwner(l.id) ||
            !a.recipients?.includes(i)
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "remove",
                      label: z.intl.string(z.t["n5zMI+"]),
                      action: () => R.A.removeRecipient(n, i),
                      color: "danger",
                  })),
        eI = (0, K.A)(v.id),
        eC = (0, j.u)({ userId: v.id, channelId: ee.id, guildId: ee.getGuildId() }),
        eU = (0, L.A)(v.id, ee.id),
        e_ = (0, W.A)({ user: v }),
        ef = (0, c.A)(null, v),
        ew = (0, C.A)({ user: v }),
        eE = (0, _.A)({ user: v }),
        eM = (0, H.A)({ user: v }),
        eN = (0, E.A)({ user: v, location: "GroupDMUserContextMenu" }),
        eb = (0, P.A)({ user: v, location: "GroupDMUserContextMenu" }),
        eX = (0, g.A)({ id: v.id, label: z.intl.string(z.t["/AXYnE"]) }),
        ek = (0, $.A)(v.id),
        eT = (0, m.A)(v.id),
        eD = (0, x.A)(ee.id),
        eG = (0, I.A)(v),
        eR = (0, A.A)(v.id),
        eS = (0, h.A)(ee.id, v.id),
        eO = (0, w.A)({
            commandType: o.kc.USER,
            commandTargetId: v.id,
            channel: ee,
            guildId: void 0,
            onHeightUpdate: el,
        }),
        eZ =
            null == (u = (0, N.bG)([Z.default], () => Z.default.getCurrentUser())) ||
            ee.ownerId !== u.id ||
            v.id === u.id
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "make-dm-owner",
                      color: "danger",
                      label: z.intl.string(z.t["6t3CyN"]),
                      action: () => {
                          (0, X.openModal)((e) =>
                              (0, s.jsx)(k.u, {
                                  title: z.intl.string(z.t.WZoUsm),
                                  confirmText: z.intl.string(z.t["cY+Oob"]),
                                  cancelText: z.intl.string(z.t["ETE/oC"]),
                                  onConfirm: () => R.A.setDMOwner(ee.id, v.id),
                                  ...e,
                                  children: (0, s.jsxs)("div", {
                                      className: y.Uh,
                                      children: [
                                          (0, s.jsx)(B, { color: b.A.unsafe_rawColors.PRIMARY_300.css }),
                                          (0, s.jsxs)("div", {
                                              className: y.nS,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: y.HT,
                                                      children: (0, s.jsx)(O.A, { user: u, size: T._3.SIZE_80 }),
                                                  }),
                                                  (0, s.jsx)("div", {
                                                      className: y.to,
                                                      children: (0, s.jsx)(O.A, { user: v, size: T._3.SIZE_80 }),
                                                  }),
                                              ],
                                          }),
                                          (0, s.jsx)(D.E, {
                                              variant: "text-md/normal",
                                              children: z.intl.format(z.t.gsBb3F, {
                                                  usernameHook: (e, i) =>
                                                      (0, s.jsx)(
                                                          S.A,
                                                          {
                                                              usernameIcon: (0, s.jsx)(G.eu, {
                                                                  className: y.jj,
                                                                  src: v.getAvatarURL(void 0, 16),
                                                                  size: T._3.SIZE_16,
                                                                  "aria-hidden": !0,
                                                              }),
                                                              className: y.xK,
                                                              usernameClass: y.Xh,
                                                              discriminatorClass: y.D2,
                                                              user: v,
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
        ez = v.isNonUserBot(),
        ey = ee.isManaged(),
        eB = ee.recipients?.includes(v.id);
    return (0, s.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "user-context",
        onClose: t.Z_,
        "aria-label": z.intl.string(z.t.liqwPJ),
        onSelect: et,
        onInteraction: ea,
        children: [
            !ez &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(d.rX, { children: eG }),
                        (0, s.jsxs)(d.rX, {
                            children: [ed && eo, ed && ec, en && eu, em, eA, !ey && ex, ed && ej, ed && eg, ek],
                        }),
                        es && (0, s.jsx)(d.rX, { children: ev }),
                        eB && (0, s.jsxs)(d.rX, { children: [!ey && ep, eZ] }),
                        (0, s.jsx)(d.rX, { children: ed && ef }),
                        er && (0, s.jsxs)(d.rX, { children: [eS, eD, eT] }),
                        (0, s.jsxs)(d.rX, {
                            children: [
                                es && eI,
                                es && eC,
                                es && eU,
                                es && eR,
                                eO,
                                ed && e_,
                                ew,
                                eE,
                                eM,
                                ed && eb,
                                ed && eN,
                            ],
                        }),
                    ],
                }),
            (0, s.jsx)(d.rX, { children: eX }),
        ],
    });
}
let en = (0, a.A)(
    (0, l.A)(
        function (e) {
            return (0, s.jsx)(v.ZQ, {
                user: e.user,
                guildId: void 0,
                location: "GroupDMUserContextMenu",
                children: (0, s.jsx)(ei, { ...e }),
            });
        },
        { object: ee.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.GROUP_DM_USER_MENU],
);
