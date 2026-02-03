n.d(t, {
    j: () => f,
}),
    n(896048);
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(996439),
    s = n(914853),
    o = n(676923),
    u = n(406595),
    c = n(74395),
    d = n(652215),
    h = n(895867),
    p = n(985018);

function f(e) {
    let {
            tab: t,
            targetId: n,
            widgetType: f = d.uss.FRIENDS,
            showTooltip: g = !0,
            shouldStopPropagation: m = !0,
            className: y,
        } = e,
        [A] = (0, r.bG)([u.A], () => u.A.isFavorite(t, n), [t, n], a.D),
        v = (0, c.t)({
            tab: t,
            targetId: n,
            shouldStopPropagation: m,
            widgetType: f,
        }),
        b = A ? l.Gg5 : l.yA2,
        E = (0, l.rdh)(l.LU0.colors.ICON_FEEDBACK_WARNING),
        O = (0, l.rdh)(l.LU0.colors.ICON_DEFAULT),
        x =
            t === s.x.FRIENDS
                ? A
                    ? p.intl.string(h.default.Xr8XHk)
                    : p.intl.string(h.default.w1MU8Y)
                : A
                  ? p.intl.string(h.default.dvUElD)
                  : p.intl.string(h.default.iK1QsY);
    return (0, i.jsx)(o.S, {
        tooltipText: x,
        showTooltip: g,
        className: y,
        onClick: v,
        children: (0, i.jsx)(b, {
            size: "sm",
            color: A ? E.hex() : O.hex(),
        }),
    });
}
