i.d(n, { default: () => ei });
var l = i(627968);
i(64700);
var s = i(17928),
    t = i(550079),
    r = i(477782),
    d = i(442433),
    a = i(847767),
    o = i(358367),
    c = i(155718),
    u = i(468389),
    h = i(793574),
    A = i(810845),
    m = i(854182),
    x = i(422229),
    j = i(823104),
    g = i(855187),
    v = i(479335),
    C = i(50268),
    p = i(844065),
    f = i(164891),
    I = i(734057),
    b = i(309010),
    M = i(803664),
    U = i(29293),
    E = i(509302),
    N = i(497600),
    _ = i(646911),
    T = i(239211),
    w = i(707378),
    G = i(732159),
    O = i(661531),
    k = i(192308),
    D = i(778712),
    X = i(834730),
    S = i(97808),
    P = i(308528),
    R = i(297413),
    y = i(966327),
    z = i(287809),
    Z = i(985018),
    B = i(269098);
function L(e) {
    let { color: n, className: i } = e;
    return (0, l.jsx)("svg", {
        className: i,
        height: "16",
        width: "80",
        viewBox: "0 0 80 16",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, l.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
                (0, l.jsx)("path", { d: "m0 0h80v16h-80z" }),
                (0, l.jsxs)("g", {
                    stroke: n,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    children: [
                        (0, l.jsx)("path", { d: "m71 1h4v4.16" }),
                        (0, l.jsx)("path", { d: "m2 1h4v4.16", transform: "matrix(-1 0 0 1 8 0)" }),
                        (0, l.jsx)("path", { d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4" }),
                        (0, l.jsx)("path", { d: "m72.13 10.474 2.869 3.12 2.631-3.12" }),
                    ],
                }),
            ],
        }),
    });
}
var V = i(984894),
    W = i(399476),
    J = i(889460),
    Y = i(448290),
    F = i(301541),
    H = i(460597),
    K = i(313998),
    q = i(198229),
    Q = i(243949),
    $ = i(972432),
    ee = i(77544),
    en = i(652215);
let ei = (0, o.A)(
    (0, a.A)(
        function (e) {
            var n, i;
            let a,
                o,
                h,
                {
                    user: en,
                    channel: ei,
                    context: el,
                    showChatItems: es = !0,
                    showMediaItems: et = !1,
                    showChannelCallItems: er = !1,
                    showModalItems: ed = !0,
                    onSelect: ea,
                    onHeightUpdate: eo,
                    onInteraction: ec,
                } = e,
                eu = (0, Q.A)({ userId: en.id, guildId: null }),
                eh = (0, Y.A)(en, null, el),
                eA = (0, s.bG)([b.A, I.A], () => {
                    let e = b.A.getVoiceChannelId();
                    return I.A.getChannel(e);
                }),
                { enabled: em } = f.A.useExperiment({ guildId: eA?.guild_id, location: "GroupDMUserContextMenu" }),
                ex = em ? eA?.id : ei.id,
                ej = (0, K.A)(en, ex),
                eg = (0, F.A)(en.id, el),
                ev = (0, w.A)({ user: en, context: el }),
                eC = (0, j.D)({ userId: en.id }),
                ep = (0, N.A)({ user: en, channelId: ei.id, context: el }),
                ef = (0, U.A)({ user: en }),
                eI = (0, $.A)(en.id),
                eb =
                    ((n = en.id),
                    (i = ei.id),
                    (a = (0, s.bG)([z.default], () => z.default.getCurrentUser(), [])),
                    null == (o = (0, s.bG)([I.A], () => I.A.getChannel(i), [i])) ||
                    o.isOwner(n) ||
                    null == a ||
                    !o.isOwner(a.id) ||
                    !o.recipients?.includes(n)
                        ? null
                        : (0, l.jsx)(r.Dr, {
                              id: "remove",
                              label: Z.intl.string(Z.t["n5zMI+"]),
                              action: () => P.A.removeRecipient(i, n),
                              color: "danger",
                          })),
                eM = (0, q.A)(en.id),
                eU = (0, v.u)({ userId: en.id, channelId: ei.id, guildId: ei.getGuildId() }),
                eE = (0, V.A)(en.id, ei.id),
                eN = (0, J.A)({ user: en }),
                e_ = (0, u.A)(null, en),
                eT = (0, M.A)({ user: en }),
                ew = (0, E.A)({ user: en }),
                eG = (0, H.A)({ user: en }),
                eO = (0, T.A)({ user: en, location: "GroupDMUserContextMenu" }),
                ek = (0, W.A)({ user: en, location: "GroupDMUserContextMenu" }),
                eD = (0, C.A)({ id: en.id, label: Z.intl.string(Z.t["/AXYnE"]) }),
                eX = (0, ee.A)(en.id),
                eS = (0, x.A)(en.id),
                eP = (0, m.A)(ei.id),
                eR = (0, p.A)(en),
                ey = (0, g.A)(en.id),
                ez = (0, A.A)(ei.id, en.id),
                eZ = (0, _.A)({
                    commandType: c.kc.USER,
                    commandTargetId: en.id,
                    channel: ei,
                    guildId: void 0,
                    onHeightUpdate: eo,
                }),
                eB =
                    null == (h = (0, s.bG)([z.default], () => z.default.getCurrentUser())) ||
                    ei.ownerId !== h.id ||
                    en.id === h.id
                        ? null
                        : (0, l.jsx)(r.Dr, {
                              id: "make-dm-owner",
                              color: "danger",
                              label: Z.intl.string(Z.t["6t3CyN"]),
                              action: () => {
                                  (0, k.openModal)((e) =>
                                      (0, l.jsx)(G.ConfirmModal, {
                                          title: Z.intl.string(Z.t.WZoUsm),
                                          confirmText: Z.intl.string(Z.t["cY+Oob"]),
                                          cancelText: Z.intl.string(Z.t["ETE/oC"]),
                                          onConfirm: () => P.A.setDMOwner(ei.id, en.id),
                                          ...e,
                                          children: (0, l.jsxs)("div", {
                                              className: B.Uh,
                                              children: [
                                                  (0, l.jsx)(L, { color: O.A.unsafe_rawColors.PRIMARY_300.css }),
                                                  (0, l.jsxs)("div", {
                                                      className: B.nS,
                                                      children: [
                                                          (0, l.jsx)("div", {
                                                              className: B.HT,
                                                              children: (0, l.jsx)(y.A, {
                                                                  user: h,
                                                                  size: D._3.SIZE_80,
                                                              }),
                                                          }),
                                                          (0, l.jsx)("div", {
                                                              className: B.to,
                                                              children: (0, l.jsx)(y.A, {
                                                                  user: en,
                                                                  size: D._3.SIZE_80,
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)(X.E, {
                                                      variant: "text-md/normal",
                                                      children: Z.intl.format(Z.t.gsBb3F, {
                                                          usernameHook: (e, n) =>
                                                              (0, l.jsx)(
                                                                  R.A,
                                                                  {
                                                                      usernameIcon: (0, l.jsx)(S.eu, {
                                                                          className: B.jj,
                                                                          src: en.getAvatarURL(void 0, 16),
                                                                          size: D._3.SIZE_16,
                                                                          "aria-hidden": !0,
                                                                      }),
                                                                      className: B.xK,
                                                                      usernameClass: B.Xh,
                                                                      discriminatorClass: B.D2,
                                                                      user: en,
                                                                  },
                                                                  n,
                                                              ),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      }),
                                  );
                              },
                          }),
                eL = en.isNonUserBot(),
                eV = ei.isManaged(),
                eW = ei.recipients?.includes(en.id);
            return (0, l.jsxs)(t.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: d.Z_,
                "aria-label": Z.intl.string(Z.t.liqwPJ),
                onSelect: ea,
                onInteraction: ec,
                children: [
                    !eL &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.rX, { children: eR }),
                                (0, l.jsxs)(r.rX, {
                                    children: [ed && eu, es && eh, eg, eC, ev, !eV && ej, ed && ep, ed && ef, eX],
                                }),
                                et && (0, l.jsx)(r.rX, { children: eI }),
                                eW && (0, l.jsxs)(r.rX, { children: [!eV && eb, eB] }),
                                (0, l.jsx)(r.rX, { children: ed && e_ }),
                                er && (0, l.jsxs)(r.rX, { children: [ez, eP, eS] }),
                                (0, l.jsxs)(r.rX, {
                                    children: [
                                        et && eM,
                                        et && eU,
                                        et && eE,
                                        et && ey,
                                        eZ,
                                        ed && eN,
                                        eT,
                                        ew,
                                        eG,
                                        ed && ek,
                                        ed && eO,
                                    ],
                                }),
                            ],
                        }),
                    (0, l.jsx)(r.rX, { children: eD }),
                ],
            });
        },
        { object: en.ZSU.CONTEXT_MENU },
    ),
    [h.A.CONTEXT_MENU, h.A.GROUP_DM_USER_MENU],
);
