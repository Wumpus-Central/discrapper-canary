n.d(t, { j: () => p });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    s = n(27232),
    a = n(505930),
    u = n(602853),
    o = n(661531),
    d = n(996439),
    c = n(914853),
    h = n(676923),
    g = n(406595),
    m = n(810412),
    E = n(509295),
    I = n(652215),
    A = n(499214),
    f = n(985018);
function p(e) {
    let {
            tab: t,
            targetId: n,
            widgetType: p = I.uss.FRIENDS,
            showTooltip: S = !0,
            shouldStopPropagation: N = !0,
            className: x,
        } = e,
        [T] = (0, r.bG)([g.A], () => g.A.isFavorite(t, n), [t, n], d.D),
        _ = (function (e) {
            let { tab: t, targetId: n, shouldStopPropagation: l, widgetType: r } = e;
            return i.useCallback(
                (e) => {
                    l && (e?.preventDefault(), e?.stopPropagation());
                    let [i] = g.A.isFavorite(t, n);
                    (0, E.k)({ tab: t, targetId: n, isFavorite: !i }),
                        (0, m.YX)(r, {
                            type: m.Z5.FAVORITE,
                            value: i ? m.IP.REMOVED_FROM_FAVORITES : m.IP.ADDED_TO_FAVORITES,
                            secondaryValue: t,
                            userId: t === c.x.FRIENDS ? n : void 0,
                        });
                },
                [l, t, n, r],
            );
        })({ tab: t, targetId: n, shouldStopPropagation: N, widgetType: p }),
        y = T ? s.G : a.y,
        v = (0, u.r)(o.A.colors.ICON_FEEDBACK_WARNING),
        C = (0, u.r)(o.A.colors.ICON_DEFAULT),
        R =
            t === c.x.FRIENDS
                ? T
                    ? f.intl.string(A.default.Xr8XHk)
                    : f.intl.string(A.default.w1MU8Y)
                : T
                  ? f.intl.string(A.default.dvUElD)
                  : f.intl.string(A.default.iK1QsY);
    return (0, l.jsx)(h.S, {
        tooltipText: R,
        showTooltip: S,
        className: x,
        onClick: _,
        children: (0, l.jsx)(y, { size: "sm", color: T ? v.hex() : C.hex() }),
    });
}
