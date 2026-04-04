n.d(t, { $: () => h, C: () => A });
var i = n(64700),
    s = n(934551),
    l = n(554146),
    a = n(200921),
    r = n(419954),
    o = n(933297),
    d = n(780964),
    c = n(358776),
    u = n(102255),
    m = n(416047),
    g = n(342537),
    _ = n(985018);
let x = (0, r.zZ)(d.X.SESSIONS_CATEGORY, {
        buildLayout: () => [m.I, g.A],
        initialize: () => (
            (0, a.GY)(),
            () => {
                (0, a.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return i.useMemo(() => ({ type: o.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: u.jH }), []);
        },
    }),
    A = (0, r.t_)(d.X.SESSIONS_PANEL, {
        useTitle: () => ((0, c._A)("SessionsPanel") ? _.intl.string(_.t.mEndXM) : _.intl.string(_.t["+1h0k/"])),
        hideInStreamerMode: !0,
        buildLayout: () => [x],
    }),
    h = (0, r.i4)(d.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        icon: s.LaptopPhoneIcon,
        getDismissibleBadges: function () {
            return [{ badgeType: o.Xi.NEW, dismissibleContent: l.M.AUTH_SESSIONS_NEW }];
        },
        usePredicate: () => !(0, c._A)("SessionsPanel"),
        buildLayout: () => [A],
    });
