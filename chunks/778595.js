n.d(i, { default: () => $ });
var s = n(477900);
n(582128);
var r = n(980707),
    d = n(477782),
    t = n(442433),
    l = n(847767),
    a = n(358367),
    o = n(155718),
    c = n(468389),
    h = n(793574),
    u = n(810845),
    m = n(854182),
    x = n(422229),
    A = n(855187),
    j = n(479335),
    g = n(50268),
    v = n(844065),
    p = n(803664),
    I = n(29293),
    C = n(509302),
    _ = n(497600),
    w = n(646911),
    U = n(239211),
    f = n(373397),
    E = n(17928),
    N = n(661531),
    M = n(192308),
    b = n(732159),
    X = n(778712),
    k = n(834730),
    T = n(97808),
    R = n(308528),
    S = n(297413),
    D = n(966327),
    G = n(287809),
    O = n(375708),
    Z = n(575721);
function z(e) {
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
var y = n(984894),
    B = n(399476),
    L = n(889460),
    P = n(448290),
    W = n(301541),
    Y = n(460597),
    F = n(734057),
    H = n(313998),
    q = n(198229),
    J = n(243949),
    K = n(972432),
    Q = n(77544),
    V = n(652215);
let $ = (0, a.A)(
    (0, l.A)(
        function (e) {
            var i, n;
            let l,
                a,
                h,
                {
                    user: V,
                    channel: $,
                    context: ee,
                    showChatItems: ei = !0,
                    showMediaItems: en = !1,
                    showChannelCallItems: es = !1,
                    showModalItems: er = !0,
                    onSelect: ed,
                    onHeightUpdate: et,
                    onInteraction: el,
                } = e,
                ea = (0, J.A)({ userId: V.id, guildId: null }),
                eo = (0, P.A)(V, null, $.id, ee),
                ec = $.id,
                eh = (0, H.A)(V, ec),
                eu = (0, W.A)(V.id, ee),
                em = (0, f.A)({ user: V, context: ee }),
                ex = (0, _.A)({ user: V, channelId: $.id, context: ee }),
                eA = (0, I.A)({ user: V }),
                ej = (0, K.A)(V.id),
                eg =
                    ((i = V.id),
                    (n = $.id),
                    (l = (0, E.bG)([G.default], () => G.default.getCurrentUser(), [])),
                    null == (a = (0, E.bG)([F.A], () => F.A.getChannel(n), [n])) ||
                    a.isOwner(i) ||
                    null == l ||
                    !a.isOwner(l.id) ||
                    !a.recipients?.includes(i)
                        ? null
                        : (0, s.jsx)(d.Dr, {
                              id: "remove",
                              label: O.intl.string(O.t["n5zMI+"]),
                              action: () => R.A.removeRecipient(n, i),
                              color: "danger",
                          })),
                ev = (0, q.A)(V.id),
                ep = (0, j.u)({ userId: V.id, channelId: $.id, guildId: $.getGuildId() }),
                eI = (0, y.A)(V.id, $.id),
                eC = (0, L.A)({ user: V }),
                e_ = (0, c.A)(null, V),
                ew = (0, p.A)({ user: V }),
                eU = (0, C.A)({ user: V }),
                ef = (0, Y.A)({ user: V }),
                eE = (0, U.A)({ user: V, location: "GroupDMUserContextMenu" }),
                eN = (0, B.A)({ user: V, location: "GroupDMUserContextMenu" }),
                eM = (0, g.A)({ id: V.id, label: O.intl.string(O.t["/AXYnE"]) }),
                eb = (0, Q.A)(V.id),
                eX = (0, x.A)(V.id),
                ek = (0, m.A)($.id),
                eT = (0, v.A)(V),
                eR = (0, A.A)(V.id),
                eS = (0, u.A)($.id, V.id),
                eD = (0, w.A)({
                    commandType: o.kc.USER,
                    commandTargetId: V.id,
                    channel: $,
                    guildId: void 0,
                    onHeightUpdate: et,
                }),
                eG =
                    null == (h = (0, E.bG)([G.default], () => G.default.getCurrentUser())) ||
                    $.ownerId !== h.id ||
                    V.id === h.id
                        ? null
                        : (0, s.jsx)(d.Dr, {
                              id: "make-dm-owner",
                              color: "danger",
                              label: O.intl.string(O.t["6t3CyN"]),
                              action: () => {
                                  (0, M.openModal)((e) =>
                                      (0, s.jsx)(b.u, {
                                          title: O.intl.string(O.t.WZoUsm),
                                          confirmText: O.intl.string(O.t["cY+Oob"]),
                                          cancelText: O.intl.string(O.t["ETE/oC"]),
                                          onConfirm: () => R.A.setDMOwner($.id, V.id),
                                          ...e,
                                          children: (0, s.jsxs)("div", {
                                              className: Z.Uh,
                                              children: [
                                                  (0, s.jsx)(z, { color: N.A.unsafe_rawColors.PRIMARY_300.css }),
                                                  (0, s.jsxs)("div", {
                                                      className: Z.nS,
                                                      children: [
                                                          (0, s.jsx)("div", {
                                                              className: Z.HT,
                                                              children: (0, s.jsx)(D.A, {
                                                                  user: h,
                                                                  size: X._3.SIZE_80,
                                                              }),
                                                          }),
                                                          (0, s.jsx)("div", {
                                                              className: Z.to,
                                                              children: (0, s.jsx)(D.A, {
                                                                  user: V,
                                                                  size: X._3.SIZE_80,
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, s.jsx)(k.E, {
                                                      variant: "text-md/normal",
                                                      children: O.intl.format(O.t.gsBb3F, {
                                                          usernameHook: (e, i) =>
                                                              (0, s.jsx)(
                                                                  S.A,
                                                                  {
                                                                      usernameIcon: (0, s.jsx)(T.eu, {
                                                                          className: Z.jj,
                                                                          src: V.getAvatarURL(void 0, 16),
                                                                          size: X._3.SIZE_16,
                                                                          "aria-hidden": !0,
                                                                      }),
                                                                      className: Z.xK,
                                                                      usernameClass: Z.Xh,
                                                                      discriminatorClass: Z.D2,
                                                                      user: V,
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
                eO = V.isNonUserBot(),
                eZ = $.isManaged(),
                ez = $.recipients?.includes(V.id);
            return (0, s.jsxs)(r.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: t.Z_,
                "aria-label": O.intl.string(O.t.liqwPJ),
                onSelect: ed,
                onInteraction: el,
                children: [
                    !eO &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(d.rX, { children: eT }),
                                (0, s.jsxs)(d.rX, {
                                    children: [er && ea, ei && eo, eu, em, !eZ && eh, er && ex, er && eA, eb],
                                }),
                                en && (0, s.jsx)(d.rX, { children: ej }),
                                ez && (0, s.jsxs)(d.rX, { children: [!eZ && eg, eG] }),
                                (0, s.jsx)(d.rX, { children: er && e_ }),
                                es && (0, s.jsxs)(d.rX, { children: [eS, ek, eX] }),
                                (0, s.jsxs)(d.rX, {
                                    children: [
                                        en && ev,
                                        en && ep,
                                        en && eI,
                                        en && eR,
                                        eD,
                                        er && eC,
                                        ew,
                                        eU,
                                        ef,
                                        er && eN,
                                        er && eE,
                                    ],
                                }),
                            ],
                        }),
                    (0, s.jsx)(d.rX, { children: eM }),
                ],
            });
        },
        { object: V.ZSU.CONTEXT_MENU },
    ),
    [h.A.CONTEXT_MENU, h.A.GROUP_DM_USER_MENU],
);
