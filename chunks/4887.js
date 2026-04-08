n.d(t, { $: () => f, C: () => T });
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
    _ = n(222994),
    x = n(342537),
    A = n(985018);
let h = (0, o.zZ)(c.X.SESSIONS_CATEGORY, {
        useTitle: () => A.intl.string(A.t.mEndXM),
        useSubtitle: () => A.intl.string(A.t.b7ZpTM),
        initialize: () => (
            (0, r.GY)(),
            () => {
                (0, r.ZQ)();
            }
        ),
        buildLayout: () => [g.I, x.A, _.V],
        useSearchTerms: () => [
            A.intl.string(A.t["+1h0k/"]),
            A.intl.string(A.t.LLS19o),
            A.intl.string(A.t.xx1MWc),
            A.intl.string(A.t.lSWsrd),
        ],
    }),
    p = (0, o.zZ)(c.X.SESSIONS_CATEGORY, {
        useSearchTerms: () => [
            A.intl.string(A.t["+1h0k/"]),
            A.intl.string(A.t.LLS19o),
            A.intl.string(A.t.xx1MWc),
            A.intl.string(A.t.Vij32M),
            A.intl.string(A.t.lSWsrd),
        ],
        buildLayout: () => [g.I, x.A],
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
    T = (0, o.t_)(c.X.SESSIONS_PANEL, {
        useTitle: () => ((0, u._A)("SessionsPanel") ? A.intl.string(A.t.mEndXM) : A.intl.string(A.t["+1h0k/"])),
        useObscuredNotice: a.L,
        buildLayout: () => ((0, u.pC)("SessionsPanel") ? [h] : [p]),
    }),
    f = (0, o.i4)(c.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t["+1h0k/"]),
        icon: s.LaptopPhoneIcon,
        getDismissibleBadges: function () {
            return [{ badgeType: d.Xi.NEW, dismissibleContent: l.M.AUTH_SESSIONS_NEW }];
        },
        usePredicate: () => !(0, u._A)("SessionsPanel"),
        buildLayout: () => [T],
    });
