n.d(t, { $: () => T, C: () => p });
var i = n(64700),
    s = n(934551),
    l = n(974544),
    r = n(200921),
    a = n(419954),
    o = n(933297),
    d = n(780964),
    c = n(358776),
    u = n(102255),
    m = n(416047),
    g = n(222994),
    _ = n(342537),
    x = n(985018);
let h = (0, a.zZ)(d.X.SESSIONS_CATEGORY, {
        useTitle: () => x.intl.string(x.t.mEndXM),
        useSubtitle: () => x.intl.string(x.t.b7ZpTM),
        initialize: () => {
            (0, r.GY)();
        },
        buildLayout: () => [m.I, _.A, g.V],
        useSearchTerms: () => [
            x.intl.string(x.t["+1h0k/"]),
            x.intl.string(x.t.LLS19o),
            x.intl.string(x.t.xx1MWc),
            x.intl.string(x.t.lSWsrd),
        ],
    }),
    A = (0, a.zZ)(d.X.SESSIONS_CATEGORY, {
        useSearchTerms: () => [
            x.intl.string(x.t["+1h0k/"]),
            x.intl.string(x.t.LLS19o),
            x.intl.string(x.t.xx1MWc),
            x.intl.string(x.t.Vij32M),
            x.intl.string(x.t.lSWsrd),
        ],
        buildLayout: () => [m.I, _.A],
        initialize: () => (
            (0, r.GY)(),
            () => {
                (0, r.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return i.useMemo(() => ({ type: o.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: u.jH }), []);
        },
    }),
    p = (0, a.t_)(d.X.SESSIONS_PANEL, {
        useTitle: () => ((0, c._A)("SessionsPanel") ? x.intl.string(x.t.mEndXM) : x.intl.string(x.t["+1h0k/"])),
        useObscuredNotice: l.L,
        buildLayout: () => ((0, c.pC)("SessionsPanel") ? [h] : [A]),
    }),
    T = (0, a.i4)(d.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => x.intl.string(x.t["+1h0k/"]),
        icon: s.LaptopPhoneIcon,
        usePredicate: () => !(0, c._A)("SessionsPanel"),
        buildLayout: () => [p],
    });
