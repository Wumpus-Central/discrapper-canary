n.d(t, { J: () => m });
var i = n(323384),
    s = n(824552),
    l = n(974544),
    a = n(419954),
    r = n(780964),
    o = n(630457),
    d = n(122462),
    u = n(985018);
let c = (0, a.zZ)(r.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [d._],
        initialize: () => (
            s.A.fetch(),
            () => {
                o.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    g = (0, a.t_)(r.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => u.intl.string(u.t["f6kk+r"]),
        useObscuredNotice: l.L,
        buildLayout: () => [c],
    }),
    m = (0, a.i4)(r.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => u.intl.string(u.t["f6kk+r"]),
        icon: i.k,
        buildLayout: () => [g],
    });
