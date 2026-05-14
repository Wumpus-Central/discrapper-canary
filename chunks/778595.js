n.d(i, { default: () => ei });
var s = n(627968);
n(64700);
var r = n(17928),
    d = n(980707),
    t = n(477782),
    l = n(442433),
    a = n(847767),
    o = n(358367),
    c = n(155718),
    u = n(468389),
    h = n(793574),
    A = n(810845),
    m = n(854182),
    x = n(422229),
    j = n(855187),
    g = n(479335),
    p = n(50268),
    v = n(844065),
    C = n(164891),
    I = n(734057),
    _ = n(309010),
    M = n(803664),
    U = n(29293),
    f = n(509302),
    w = n(497600),
    E = n(646911),
    N = n(239211),
    b = n(707378),
    X = n(732159),
    k = n(661531),
    T = n(192308),
    G = n(778712),
    D = n(834730),
    R = n(97808),
    S = n(308528),
    O = n(297413),
    Z = n(966327),
    z = n(287809),
    y = n(375708),
    B = n(269098);
function L(e) {
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
var P = n(984894),
    W = n(399476),
    Y = n(889460),
    F = n(448290),
    H = n(301541),
    q = n(460597),
    J = n(313998),
    K = n(198229),
    V = n(243949),
    Q = n(972432),
    $ = n(77544),
    ee = n(652215);
let ei = (0, o.A)(
    (0, a.A)(
        function (e) {
            var i, n;
            let a,
                o,
                h,
                {
                    user: ee,
                    channel: ei,
                    context: en,
                    showChatItems: es = !0,
                    showMediaItems: er = !1,
                    showChannelCallItems: ed = !1,
                    showModalItems: et = !0,
                    onSelect: el,
                    onHeightUpdate: ea,
                    onInteraction: eo,
                } = e,
                ec = (0, V.A)({ userId: ee.id, guildId: null }),
                eu = (0, F.A)(ee, null, en),
                eh = (0, r.bG)([_.A, I.A], () => {
                    let e = _.A.getVoiceChannelId();
                    return I.A.getChannel(e);
                }),
                { enabled: eA } = C.A.useExperiment({ guildId: eh?.guild_id, location: "GroupDMUserContextMenu" }),
                em = eA ? eh?.id : ei.id,
                ex = (0, J.A)(ee, em),
                ej = (0, H.A)(ee.id, en),
                eg = (0, b.A)({ user: ee, context: en }),
                ep = (0, w.A)({ user: ee, channelId: ei.id, context: en }),
                ev = (0, U.A)({ user: ee }),
                eC = (0, Q.A)(ee.id),
                eI =
                    ((i = ee.id),
                    (n = ei.id),
                    (a = (0, r.bG)([z.default], () => z.default.getCurrentUser(), [])),
                    null == (o = (0, r.bG)([I.A], () => I.A.getChannel(n), [n])) ||
                    o.isOwner(i) ||
                    null == a ||
                    !o.isOwner(a.id) ||
                    !o.recipients?.includes(i)
                        ? null
                        : (0, s.jsx)(t.Dr, {
                              id: "remove",
                              label: y.intl.string(y.t["n5zMI+"]),
                              action: () => S.A.removeRecipient(n, i),
                              color: "danger",
                          })),
                e_ = (0, K.A)(ee.id),
                eM = (0, g.u)({ userId: ee.id, channelId: ei.id, guildId: ei.getGuildId() }),
                eU = (0, P.A)(ee.id, ei.id),
                ef = (0, Y.A)({ user: ee }),
                ew = (0, u.A)(null, ee),
                eE = (0, M.A)({ user: ee }),
                eN = (0, f.A)({ user: ee }),
                eb = (0, q.A)({ user: ee }),
                eX = (0, N.A)({ user: ee, location: "GroupDMUserContextMenu" }),
                ek = (0, W.A)({ user: ee, location: "GroupDMUserContextMenu" }),
                eT = (0, p.A)({ id: ee.id, label: y.intl.string(y.t["/AXYnE"]) }),
                eG = (0, $.A)(ee.id),
                eD = (0, x.A)(ee.id),
                eR = (0, m.A)(ei.id),
                eS = (0, v.A)(ee),
                eO = (0, j.A)(ee.id),
                eZ = (0, A.A)(ei.id, ee.id),
                ez = (0, E.A)({
                    commandType: c.kc.USER,
                    commandTargetId: ee.id,
                    channel: ei,
                    guildId: void 0,
                    onHeightUpdate: ea,
                }),
                ey =
                    null == (h = (0, r.bG)([z.default], () => z.default.getCurrentUser())) ||
                    ei.ownerId !== h.id ||
                    ee.id === h.id
                        ? null
                        : (0, s.jsx)(t.Dr, {
                              id: "make-dm-owner",
                              color: "danger",
                              label: y.intl.string(y.t["6t3CyN"]),
                              action: () => {
                                  (0, T.openModal)((e) =>
                                      (0, s.jsx)(X.ConfirmModal, {
                                          title: y.intl.string(y.t.WZoUsm),
                                          confirmText: y.intl.string(y.t["cY+Oob"]),
                                          cancelText: y.intl.string(y.t["ETE/oC"]),
                                          onConfirm: () => S.A.setDMOwner(ei.id, ee.id),
                                          ...e,
                                          children: (0, s.jsxs)("div", {
                                              className: B.Uh,
                                              children: [
                                                  (0, s.jsx)(L, { color: k.A.unsafe_rawColors.PRIMARY_300.css }),
                                                  (0, s.jsxs)("div", {
                                                      className: B.nS,
                                                      children: [
                                                          (0, s.jsx)("div", {
                                                              className: B.HT,
                                                              children: (0, s.jsx)(Z.A, {
                                                                  user: h,
                                                                  size: G._3.SIZE_80,
                                                              }),
                                                          }),
                                                          (0, s.jsx)("div", {
                                                              className: B.to,
                                                              children: (0, s.jsx)(Z.A, {
                                                                  user: ee,
                                                                  size: G._3.SIZE_80,
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, s.jsx)(D.E, {
                                                      variant: "text-md/normal",
                                                      children: y.intl.format(y.t.gsBb3F, {
                                                          usernameHook: (e, i) =>
                                                              (0, s.jsx)(
                                                                  O.A,
                                                                  {
                                                                      usernameIcon: (0, s.jsx)(R.eu, {
                                                                          className: B.jj,
                                                                          src: ee.getAvatarURL(void 0, 16),
                                                                          size: G._3.SIZE_16,
                                                                          "aria-hidden": !0,
                                                                      }),
                                                                      className: B.xK,
                                                                      usernameClass: B.Xh,
                                                                      discriminatorClass: B.D2,
                                                                      user: ee,
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
                eB = ee.isNonUserBot(),
                eL = ei.isManaged(),
                eP = ei.recipients?.includes(ee.id);
            return (0, s.jsxs)(d.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: l.Z_,
                "aria-label": y.intl.string(y.t.liqwPJ),
                onSelect: el,
                onInteraction: eo,
                children: [
                    !eB &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(t.rX, { children: eS }),
                                (0, s.jsxs)(t.rX, {
                                    children: [et && ec, es && eu, ej, eg, !eL && ex, et && ep, et && ev, eG],
                                }),
                                er && (0, s.jsx)(t.rX, { children: eC }),
                                eP && (0, s.jsxs)(t.rX, { children: [!eL && eI, ey] }),
                                (0, s.jsx)(t.rX, { children: et && ew }),
                                ed && (0, s.jsxs)(t.rX, { children: [eZ, eR, eD] }),
                                (0, s.jsxs)(t.rX, {
                                    children: [
                                        er && e_,
                                        er && eM,
                                        er && eU,
                                        er && eO,
                                        ez,
                                        et && ef,
                                        eE,
                                        eN,
                                        eb,
                                        et && ek,
                                        et && eX,
                                    ],
                                }),
                            ],
                        }),
                    (0, s.jsx)(t.rX, { children: eT }),
                ],
            });
        },
        { object: ee.ZSU.CONTEXT_MENU },
    ),
    [h.A.CONTEXT_MENU, h.A.GROUP_DM_USER_MENU],
);
