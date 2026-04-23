n.d(t, { j: () => A });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(27232),
    s = n(505930),
    a = n(602853),
    u = n(827734),
    o = n(996439),
    d = n(914853),
    c = n(676923),
    h = n(406595),
    g = n(74395),
    m = n(652215),
    I = n(499214),
    E = n(985018);
function A(e) {
    let {
            tab: t,
            targetId: n,
            widgetType: A = m.uss.FRIENDS,
            showTooltip: f = !0,
            shouldStopPropagation: p = !0,
            className: S,
        } = e,
        [N] = (0, i.bG)([h.A], () => h.A.isFavorite(t, n), [t, n], o.D),
        x = (0, g.t)({ tab: t, targetId: n, shouldStopPropagation: p, widgetType: A }),
        T = N ? r.G : s.y,
        _ = (0, a.r)(u.A.colors.ICON_FEEDBACK_WARNING),
        y = (0, a.r)(u.A.colors.ICON_DEFAULT),
        v =
            t === d.x.FRIENDS
                ? N
                    ? E.intl.string(I.default.Xr8XHk)
                    : E.intl.string(I.default.w1MU8Y)
                : N
                  ? E.intl.string(I.default.dvUElD)
                  : E.intl.string(I.default.iK1QsY);
    return (0, l.jsx)(c.S, {
        tooltipText: v,
        showTooltip: f,
        className: S,
        onClick: x,
        children: (0, l.jsx)(T, { size: "sm", color: N ? _.hex() : y.hex() }),
    });
}
