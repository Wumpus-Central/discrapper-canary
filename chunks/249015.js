n.d(t, { j: () => S });
var l = n(477900),
    i = n(582128),
    r = n(855986),
    s = n(27232),
    a = n(505930),
    o = n(602853),
    u = n(646514),
    d = n(996439),
    c = n(914853),
    h = n(676923),
    g = n(406595),
    m = n(810412),
    I = n(509295),
    E = n(652215),
    A = n(361729),
    f = n(792996);
function S(e) {
    let {
            tab: t,
            targetId: n,
            widgetType: S = E.uss.FRIENDS,
            showTooltip: p = !0,
            shouldStopPropagation: N = !0,
            className: T,
        } = e,
        [x] = (0, r.bG)([g.A], () => g.A.isFavorite(t, n), [t, n], d.D),
        y = (function (e) {
            let { tab: t, targetId: n, shouldStopPropagation: l, widgetType: r } = e;
            return i.useCallback(
                (e) => {
                    l && (e?.preventDefault(), e?.stopPropagation());
                    let [i] = g.A.isFavorite(t, n);
                    ((0, I.k)({ tab: t, targetId: n, isFavorite: !i }),
                        (0, m.YX)(r, {
                            type: m.Z5.FAVORITE,
                            value: i ? m.IP.REMOVED_FROM_FAVORITES : m.IP.ADDED_TO_FAVORITES,
                            secondaryValue: t,
                            userId: t === c.x.FRIENDS ? n : void 0,
                        }));
                },
                [l, t, n, r],
            );
        })({ tab: t, targetId: n, shouldStopPropagation: N, widgetType: S }),
        _ = x ? s.StarIcon : a.StarOutlineIcon,
        C = (0, o.r)(u.A.colors.ICON_FEEDBACK_WARNING),
        v = (0, o.r)(u.A.colors.ICON_DEFAULT),
        R =
            t === c.x.FRIENDS
                ? x
                    ? f.intl.string(A.default.Xr8XHk)
                    : f.intl.string(A.default.w1MU8Y)
                : x
                  ? f.intl.string(A.default.dvUElD)
                  : f.intl.string(A.default.iK1QsY);
    return (0, l.jsx)(h.S, {
        tooltipText: R,
        showTooltip: p,
        className: T,
        onClick: y,
        children: (0, l.jsx)(_, { size: "sm", color: x ? C.hex() : v.hex() }),
    });
}
