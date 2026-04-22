n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(417597),
    o = n(990078),
    d = n(192308),
    c = n(821609),
    u = n(939249),
    m = n(22231),
    g = n(140735),
    h = n(374084),
    x = n(913423),
    _ = n(961350),
    p = n(199940),
    A = n(132514),
    E = n(817136),
    f = n(985018),
    j = n(327084);
let N = function (e) {
    let { guildId: t } = e,
        s = (0, a.cf)([A.A], () => A.A.getSettings().welcomeMessage ?? E.p),
        N = l.useCallback(
            () =>
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await n.e("94194").then(n.bind(n, 930345));
                    return (n) => (0, i.jsx)(e, { ...n, guildId: t, welcomeMessage: s, onSave: (e) => (0, p.hL)(e) });
                }),
            [t, s],
        ),
        I = (0, a.bG)([_.default], () => _.default.getId());
    return (0, h.Fn)(s)
        ? (0, i.jsx)(c.$, { variant: "primary", size: "sm", text: f.intl.string(f.t["9Z+aEP"]), onClick: N })
        : (0, i.jsxs)(u.D, {
              className: j.ab,
              onClick: N,
              children: [
                  (0, i.jsx)(x.A, {
                      guildId: t,
                      welcomeMessage: { authorIds: s.authorIds.length > 0 ? s.authorIds : [I], message: s.message },
                  }),
                  (0, i.jsx)(o.m, {
                      text: f.intl.string(f.t.bt75uw),
                      children: (0, i.jsxs)("div", {
                          className: r()(j.Md, j.Tu),
                          children: [
                              (0, i.jsx)(m.R, { size: "md", color: "currentColor" }),
                              (0, i.jsx)(g.A, { children: f.intl.string(f.t.bt75uw) }),
                          ],
                      }),
                  }),
              ],
          });
};
