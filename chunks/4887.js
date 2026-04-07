n.d(t, { $: () => p, C: () => h });
var i = n(64700),
    s = n(934551),
    l = n(554146),
    a = n(974544),
    r = n(200921),
    o = n(419954),
    d = n(933297),
    c = n(780964),
    u = n(358776),
    m = n(102255),
    g = n(416047),
    _ = n(342537),
    x = n(985018);
let A = (0, o.zZ)(c.X.SESSIONS_CATEGORY, {
        buildLayout: () => [g.I, _.A],
        initialize: () => (
            (0, r.GY)(),
            () => {
                (0, r.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return i.useMemo(() => ({ type: d.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: m.jH }), []);
        },
    }),
    h = (0, o.t_)(c.X.SESSIONS_PANEL, {
        useTitle: () => ((0, u._A)("SessionsPanel") ? x.intl.string(x.t.mEndXM) : x.intl.string(x.t["+1h0k/"])),
        useObscuredNotice: a.L,
        buildLayout: () => [A],
    }),
    p = (0, o.i4)(c.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => x.intl.string(x.t["+1h0k/"]),
        icon: s.LaptopPhoneIcon,
        getDismissibleBadges: function () {
            return [{ badgeType: d.Xi.NEW, dismissibleContent: l.M.AUTH_SESSIONS_NEW }];
        },
        usePredicate: () => !(0, u._A)("SessionsPanel"),
        buildLayout: () => [h],
    });
