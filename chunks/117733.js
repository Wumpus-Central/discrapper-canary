l.d(n, { A: () => w });
var a = l(627968),
    s = l(64700),
    t = l(503698),
    i = l.n(t),
    r = l(417597),
    d = l(397927),
    c = l(686956),
    o = l(241524),
    u = l(58149),
    h = l(293865),
    m = l(742589),
    x = l(138298),
    g = l(761640),
    A = l(954571),
    _ = l(225142),
    f = l(701785),
    j = l(65995),
    b = l(978165),
    I = l(490171),
    N = l(119593),
    C = l(283012),
    p = l(12446),
    v = l(913423),
    E = l(652215),
    G = l(746080),
    M = l(985018),
    y = l(159453),
    T = l(638990);
let L = I.O + 300 + 64,
    H = s.memo(function (e) {
        let { guild: n } = e;
        return (0, a.jsxs)(m.A, {
            channelId: G.VV.GUILD_HOME,
            guildId: n.id,
            className: i()(y.DD, y.Tp),
            innerClassname: y.vi,
            children: [
                (0, a.jsx)(m.A.Icon, { icon: d.Zf8, "aria-hidden": !0 }),
                (0, a.jsxs)(m.A.Title, {
                    children: [(0, a.jsx)(d.AC4, { children: n.name }), M.intl.string(M.t.VbpLyU)],
                }),
            ],
        });
    });
function w(e) {
    let { guild: n, width: l } = e,
        t = (0, r.bG)([g.Ay], () => g.Ay.getSection(G.VV.GUILD_HOME)),
        [m, M] = s.useState(!1),
        [w, R] = s.useState(E.da6),
        k = t === E.YvQ.SIDEBAR_CHAT,
        S = (0, d.R7z)(),
        B = (0, r.bG)([f.h], () => f.h.getSettings(n.id)),
        D = B?.welcomeMessage,
        U = (0, b.A)(n.id),
        O = !U && (B?.resourceChannels?.length ?? 0) === 0,
        V = (0, o.A)("(max-width: 1300px)"),
        z = l - E.MdR - w,
        K = (k && z < L) || V || O;
    return (s.useEffect(() => {
        B === f.A
            ? (0, _.ag)(n.id)
            : null != B &&
              A.default.track(E.HAw.SERVER_GUIDE_VIEWED, {
                  ...(0, u.H$)(n.id),
                  num_member_actions: B.newMemberActions?.length ?? 0,
                  num_member_actions_completed: Object.keys(j.A.getCompletedActions(n.id) ?? {}).length,
                  num_resource_channels: B.resourceChannels?.length ?? 0,
              });
    }, [n.id, B]),
    s.useEffect(
        () => () => {
            x.A.closeChannelSidebar(G.VV.GUILD_HOME);
        },
        [],
    ),
    s.useEffect(() => {
        O && B !== f.A && c.A.escapeToDefaultChannel(n.id);
    }, [n.id, O, B]),
    O)
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsxs)("div", {
                      className: i()(T.TE, y.Tp, { [T.js]: k, [T.jl]: k && m }),
                      children: [
                          (0, a.jsx)(H, { guild: n }),
                          (0, a.jsx)(d.GtU, {
                              ...S,
                              children: (0, a.jsxs)("div", {
                                  className: i()(y.$d, { [y.Mk]: K }),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: y.QI,
                                          children: (0, a.jsx)(h.A, { guild: n, titleClassName: V ? y.H2 : void 0 }),
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: i()(y.xr, y.QI),
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: y.rb,
                                                  children: [
                                                      U && (0, a.jsx)(v.A, { guildId: n.id, welcomeMessage: D }),
                                                      U && (0, a.jsx)(C.A, { guildId: n.id }),
                                                      !U || K ? (0, a.jsx)(p.Ay, { guild: n, isNewMember: U }) : null,
                                                  ],
                                              }),
                                              K ? null : (0, a.jsx)(N.A, { guild: n, isNewMember: U }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
                  k
                      ? (0, a.jsx)(I.A, {
                            pageWidth: l,
                            onSidebarResize: (e, n) => {
                                M(n), R(e);
                            },
                        })
                      : null,
              ],
          });
}
