n.d(t, { J: () => g });
var i = n(934551),
    s = n(824552),
    l = n(974544),
    r = n(419954),
    a = n(780964),
    o = n(630457),
    d = n(122462),
    c = n(985018);
let u = (0, r.zZ)(a.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [d._],
        initialize: () => (
            s.A.fetch(),
            () => {
                o.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    m = (0, r.t_)(a.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => c.intl.string(c.t["f6kk+r"]),
        useObscuredNotice: l.L,
        buildLayout: () => [u],
    }),
    g = (0, r.i4)(a.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t["f6kk+r"]),
        icon: i.AppsIcon,
        buildLayout: () => [m],
    });
