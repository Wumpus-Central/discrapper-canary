n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var o = n(481060),
    i = n(823379),
    a = n(836197),
    l = n(747101),
    c = n(517157),
    s = n(985748),
    d = n(566007),
    u = n(173951),
    f = n(455731),
    m = n(19043);
function p(e) {
    let { widget: t, user: n, loading: o = !1 } = e,
        l = t.gameWidgetType;
    switch (l) {
        case a.g.FAVORITE:
            return (0, r.jsx)(d.Z, {
                user: n,
                widget: t,
                loading: o
            });
        case a.g.CURRENT:
            return (0, r.jsx)(s.Z, {
                user: n,
                widget: t,
                loading: o
            });
        case a.g.WANT_TO_PLAY:
            return (0, r.jsx)(f.Z, {
                user: n,
                widget: t,
                loading: o
            });
        case a.g.PLAYED:
            return (0, r.jsx)(u.Z, {
                user: n,
                widget: t,
                loading: o
            });
        default:
            return (0, i.vE)(l);
    }
}
function g(e) {
    let { user: t } = e,
        n = (0, c.Z)(),
        { widgets: i, isFetching: a } = (0, l.Z)(n);
    return (0, r.jsx)(o.Ttm, {
        className: m.scroller,
        fade: !0,
        children: i.map((e) =>
            (0, r.jsx)(
                p,
                {
                    widget: e,
                    user: t,
                    loading: a
                },
                e.id
            )
        )
    });
}
