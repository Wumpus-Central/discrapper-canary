i.d(t, { A: () => h });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(961350),
    a = i(823016),
    r = i(750492),
    d = i(253798),
    o = i(622249),
    c = i(742710),
    u = i(192),
    g = i(714813);
function m(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: d } = (0, a.r)();
    return (0, n.jsx)("ul", {
        className: g.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(c.A, {
                        index: t,
                        user: i,
                        game: e,
                        widgetType: l,
                        coverRef: r(e.applicationId),
                        onRemoveGame: d,
                        ...s,
                    }),
                },
                e.applicationId,
            ),
        ),
    });
}
function h(e) {
    let { user: t, widgetType: i, disableInteraction: c, games: g } = e,
        h = (0, l.bG)([s.default], () => s.default.getId() === t.id),
        { getManageButtonForWidget: x } = (0, u.r)(),
        p = x(i),
        { expanded: A, setExpanded: f } = (0, d.B)(),
        j = A ? g : g.slice(0, 2),
        I = g.length > 2,
        v = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(m, { ...e, games: j }),
                I && (0, n.jsx)(o.A, { expanded: A, onClick: () => f((e) => !e) }),
            ],
        });
    return h && !c
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(r.A, { widgetType: i, gameCount: g.length }),
                  (0, n.jsx)(a.B, { emptyListFallbackRef: p, children: v }),
              ],
          })
        : v;
}
