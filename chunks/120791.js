i.d(t, { A: () => h });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(961350),
    a = i(823016),
    r = i(507247),
    d = i(750492),
    o = i(253798),
    c = i(622249),
    u = i(676526),
    g = i(192);
function m(e) {
    let { games: t, ...i } = e,
        { registerItemRef: l, manageFocusOnDelete: s } = (0, a.r)();
    return (0, n.jsx)(r.A, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(u.h, { index: t, game: e, coverRef: l(e.applicationId), onRemoveGame: s, ...i }),
    });
}
function h(e) {
    let { userId: t, widgetType: i, disableInteraction: r, games: u } = e,
        h = (0, l.bG)([s.default], () => s.default.getId() === t),
        { getManageButtonForWidget: x } = (0, g.r)(),
        p = x(i),
        { expanded: A, setExpanded: f } = (0, o.B)(),
        j = A ? u : u.slice(0, 8),
        I = u.length > 8,
        v = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(m, { ...e, games: j }),
                I && (0, n.jsx)(c.A, { expanded: A, onClick: () => f((e) => !e) }),
            ],
        });
    return h && !r
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(d.A, { widgetType: i, gameCount: u.length }),
                  (0, n.jsx)(a.B, { emptyListFallbackRef: p, children: v }),
              ],
          })
        : v;
}
