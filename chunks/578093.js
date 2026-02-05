n.d(t, { j: () => I });
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    r = n(996439),
    a = n(914853),
    u = n(676923),
    o = n(406595),
    d = n(74395),
    c = n(652215),
    h = n(895867),
    g = n(985018);
function I(e) {
    let {
            tab: t,
            targetId: n,
            widgetType: I = c.uss.FRIENDS,
            showTooltip: E = !0,
            shouldStopPropagation: A = !0,
            className: f,
        } = e,
        [m] = (0, i.bG)([o.A], () => o.A.isFavorite(t, n), [t, n], r.D),
        S = (0, d.t)({ tab: t, targetId: n, shouldStopPropagation: A, widgetType: I }),
        p = m ? s.Gg5 : s.yA2,
        N = (0, s.rdh)(s.LU0.colors.ICON_FEEDBACK_WARNING),
        T = (0, s.rdh)(s.LU0.colors.ICON_DEFAULT),
        _ =
            t === a.x.FRIENDS
                ? m
                    ? g.intl.string(h.default.Xr8XHk)
                    : g.intl.string(h.default.w1MU8Y)
                : m
                  ? g.intl.string(h.default.dvUElD)
                  : g.intl.string(h.default.iK1QsY);
    return (0, l.jsx)(u.S, {
        tooltipText: _,
        showTooltip: E,
        className: f,
        onClick: S,
        children: (0, l.jsx)(p, { size: "sm", color: m ? N.hex() : T.hex() }),
    });
}
