n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(961350),
    r = n(823016),
    s = n(507247),
    o = n(750492),
    d = n(253798),
    c = n(622249),
    u = n(676526),
    g = n(192);
function m(e) {
    let { games: t, ...n } = e,
        { registerItemRef: l, manageFocusOnDelete: a } = (0, r.r)();
    return (0, i.jsx)(s.A, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(u.h, { index: t, game: e, coverRef: l(e.applicationId), onRemoveGame: a, ...n }),
    });
}
function x(e) {
    let { userId: t, widgetType: n, disableInteraction: s, games: u } = e,
        x = (0, l.bG)([a.default], () => a.default.getId() === t),
        { getManageButtonForWidget: f } = (0, g.r)(),
        h = f(n),
        { expanded: p, setExpanded: _ } = (0, d.B)(),
        A = p ? u : u.slice(0, 8),
        I = u.length > 8,
        j = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m, { ...e, games: A }),
                I && (0, i.jsx)(c.A, { expanded: p, onClick: () => _((e) => !e) }),
            ],
        });
    return x && !s
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.A, { widgetType: n, gameCount: u.length }),
                  (0, i.jsx)(r.B, { emptyListFallbackRef: h, children: j }),
              ],
          })
        : j;
}
