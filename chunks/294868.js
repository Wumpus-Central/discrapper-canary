n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(961350),
    r = n(823016),
    s = n(750492),
    o = n(253798),
    d = n(622249),
    c = n(742710),
    u = n(192),
    g = n(957382);
function m(e) {
    let { games: t, user: n, widgetType: l, ...a } = e,
        { registerItemRef: s, manageFocusOnDelete: o } = (0, r.r)();
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
                        widgetType: l,
                        coverRef: s(e.applicationId),
                        onRemoveGame: o,
                        ...a,
                    }),
                },
                e.applicationId,
            ),
        ),
    });
}
function x(e) {
    let { user: t, widgetType: n, disableInteraction: c, games: g } = e,
        x = (0, l.bG)([a.default], () => a.default.getId() === t.id),
        { getManageButtonForWidget: f } = (0, u.r)(),
        h = f(n),
        { expanded: p, setExpanded: _ } = (0, o.B)(),
        A = p ? g : g.slice(0, 2),
        I = g.length > 2,
        j = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m, { ...e, games: A }),
                I && (0, i.jsx)(d.A, { expanded: p, onClick: () => _((e) => !e) }),
            ],
        });
    return x && !c
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(s.A, { widgetType: n, gameCount: g.length }),
                  (0, i.jsx)(r.B, { emptyListFallbackRef: h, children: j }),
              ],
          })
        : j;
}
