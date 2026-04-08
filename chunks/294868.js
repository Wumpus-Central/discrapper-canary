n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var a = n(311907),
    l = n(961350),
    s = n(823016),
    r = n(750492),
    o = n(253798),
    d = n(622249),
    c = n(742710),
    u = n(192),
    g = n(23024);
function m(e) {
    let { games: t, user: n, widgetType: a, ...l } = e,
        { registerItemRef: r, manageFocusOnDelete: o } = (0, s.r)();
    return (0, i.jsx)("ul", {
        className: g.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(c.A, {
                        index: t,
                        user: n,
                        game: e,
                        widgetType: a,
                        coverRef: r(e.applicationId),
                        onRemoveGame: o,
                        ...l,
                    }),
                },
                e.applicationId,
            ),
        ),
    });
}
function x(e) {
    let { user: t, widgetType: n, disableInteraction: c, games: g } = e,
        x = (0, a.bG)([l.default], () => l.default.getId() === t.id),
        { getManageButtonForWidget: f } = (0, u.r)(),
        p = f(n),
        { expanded: h, setExpanded: _ } = (0, o.B)(),
        A = h ? g : g.slice(0, 2),
        I = g.length > 2,
        j = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m, { ...e, games: A }),
                I && (0, i.jsx)(d.A, { expanded: h, onClick: () => _((e) => !e) }),
            ],
        });
    return x && !c
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(r.A, { widgetType: n, gameCount: g.length }),
                  (0, i.jsx)(s.B, { emptyListFallbackRef: p, children: j }),
              ],
          })
        : j;
}
