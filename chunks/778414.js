n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var o = n(924322),
    i = n(481060),
    a = n(747101),
    l = n(517157),
    c = n(985748),
    s = n(566007),
    d = n(173951),
    u = n(455731),
    f = n(19043);
function m(e) {
    let { widget: t, user: n, loading: i = !1 } = e;
    switch (t.gameWidgetType) {
        case o.g.FAVORITE:
            return (0, r.jsx)(s.Z, {
                user: n,
                widget: t,
                loading: i
            });
        case o.g.CURRENT:
            return (0, r.jsx)(c.Z, {
                user: n,
                widget: t,
                loading: i
            });
        case o.g.WANT_TO_PLAY:
            return (0, r.jsx)(u.Z, {
                user: n,
                widget: t,
                loading: i
            });
        case o.g.PLAYED:
            return (0, r.jsx)(d.Z, {
                user: n,
                widget: t,
                loading: i
            });
        default:
            return null;
    }
}
function p(e) {
    let { user: t } = e,
        n = (0, l.Z)(),
        { widgets: o, isFetching: c } = (0, a.Z)(n);
    return (0, r.jsx)(i.Ttm, {
        className: f.scroller,
        fade: !0,
        children: o.map((e) =>
            (0, r.jsx)(
                m,
                {
                    widget: e,
                    user: t,
                    loading: c
                },
                e.id
            )
        )
    });
}
