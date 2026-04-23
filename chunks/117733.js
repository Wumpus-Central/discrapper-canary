l.d(n, { A: () => k });
var a = l(627968),
    s = l(64700),
    t = l(503698),
    i = l.n(t),
    r = l(417597),
    d = l(855473),
    c = l(140735),
    o = l(312138),
    u = l(599319),
    h = l(686956),
    m = l(241524),
    x = l(58149),
    g = l(293865),
    A = l(742589),
    _ = l(138298),
    f = l(761640),
    j = l(954571),
    b = l(225142),
    I = l(701785),
    N = l(65995),
    C = l(978165),
    v = l(490171),
    p = l(119593),
    E = l(283012),
    y = l(12446),
    G = l(913423),
    M = l(652215),
    L = l(746080),
    D = l(985018),
    w = l(354476),
    R = l(964623);
let T = v.O + 300 + 64,
    S = s.memo(function (e) {
        let { guild: n } = e;
        return (0, a.jsxs)(A.A, {
            channelId: L.VV.GUILD_HOME,
            guildId: n.id,
            className: i()(w.DD, w.Tp),
            innerClassname: w.vi,
            children: [
                (0, a.jsx)(A.A.Icon, { icon: d.Z, "aria-hidden": !0 }),
                (0, a.jsxs)(A.A.Title, {
                    children: [(0, a.jsx)(c.A, { children: n.name }), D.intl.string(D.t.VbpLyU)],
                }),
            ],
        });
    });
function k(e) {
    let { guild: n, width: l } = e,
        t = (0, r.bG)([f.Ay], () => f.Ay.getSection(L.VV.GUILD_HOME)),
        [d, c] = s.useState(!1),
        [A, D] = s.useState(M.da6),
        k = t === M.YvQ.SIDEBAR_CHAT,
        H = (0, o.R7)(),
        B = (0, r.bG)([I.h], () => I.h.getSettings(n.id)),
        O = B?.welcomeMessage,
        U = (0, C.A)(n.id),
        V = !U && (B?.resourceChannels?.length ?? 0) === 0,
        z = (0, m.A)("(max-width: 1300px)"),
        K = l - M.MdR - A,
        $ = (k && K < T) || z || V;
    return (s.useEffect(() => {
        B === I.A
            ? (0, b.ag)(n.id)
            : null != B &&
              j.default.track(M.HAw.SERVER_GUIDE_VIEWED, {
                  ...(0, x.H$)(n.id),
                  num_member_actions: B.newMemberActions?.length ?? 0,
                  num_member_actions_completed: Object.keys(N.A.getCompletedActions(n.id) ?? {}).length,
                  num_resource_channels: B.resourceChannels?.length ?? 0,
              });
    }, [n.id, B]),
    s.useEffect(
        () => () => {
            _.A.closeChannelSidebar(L.VV.GUILD_HOME);
        },
        [],
    ),
    s.useEffect(() => {
        V && B !== I.A && h.A.escapeToDefaultChannel(n.id);
    }, [n.id, V, B]),
    V)
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsxs)("div", {
                      className: i()(R.TE, w.Tp, { [R.js]: k, [R.jl]: k && d }),
                      children: [
                          (0, a.jsx)(S, { guild: n }),
                          (0, a.jsx)(u.Gt, {
                              ...H,
                              children: (0, a.jsxs)("div", {
                                  className: i()(w.$d, { [w.Mk]: $ }),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: w.QI,
                                          children: (0, a.jsx)(g.A, { guild: n, titleClassName: z ? w.H2 : void 0 }),
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: i()(w.xr, w.QI),
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: w.rb,
                                                  children: [
                                                      U && (0, a.jsx)(G.A, { guildId: n.id, welcomeMessage: O }),
                                                      U && (0, a.jsx)(E.A, { guildId: n.id }),
                                                      !U || $ ? (0, a.jsx)(y.Ay, { guild: n, isNewMember: U }) : null,
                                                  ],
                                              }),
                                              $ ? null : (0, a.jsx)(p.A, { guild: n, isNewMember: U }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
                  k
                      ? (0, a.jsx)(v.A, {
                            pageWidth: l,
                            onSidebarResize: (e, n) => {
                                c(n), D(e);
                            },
                        })
                      : null,
              ],
          });
}
