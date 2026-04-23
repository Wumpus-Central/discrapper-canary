n.d(t, { $: () => E, C: () => x });
var i = n(64700),
    s = n(766928),
    l = n(974544),
    a = n(200921),
    r = n(419954),
    o = n(933297),
    d = n(780964),
    u = n(358776),
    c = n(102255),
    g = n(416047),
    m = n(222994),
    _ = n(342537),
    A = n(985018);
let h = (0, r.zZ)(d.X.SESSIONS_CATEGORY, {
        useTitle: () => A.intl.string(A.t.mEndXM),
        useSubtitle: () => A.intl.string(A.t.b7ZpTM),
        initialize: () => {
            (0, a.GY)();
        },
        buildLayout: () => [g.I, _.A, m.V],
        useSearchTerms: () => [
            A.intl.string(A.t["+1h0k/"]),
            A.intl.string(A.t.LLS19o),
            A.intl.string(A.t.xx1MWc),
            A.intl.string(A.t.lSWsrd),
        ],
    }),
    p = (0, r.zZ)(d.X.SESSIONS_CATEGORY, {
        useSearchTerms: () => [
            A.intl.string(A.t["+1h0k/"]),
            A.intl.string(A.t.LLS19o),
            A.intl.string(A.t.xx1MWc),
            A.intl.string(A.t.Vij32M),
            A.intl.string(A.t.lSWsrd),
        ],
        buildLayout: () => [g.I, _.A],
        initialize: () => (
            (0, a.GY)(),
            () => {
                (0, a.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return i.useMemo(() => ({ type: o.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: c.jH }), []);
        },
    }),
    x = (0, r.t_)(d.X.SESSIONS_PANEL, {
        useTitle: () => ((0, u._A)("SessionsPanel") ? A.intl.string(A.t.mEndXM) : A.intl.string(A.t["+1h0k/"])),
        useObscuredNotice: l.L,
        buildLayout: () => ((0, u.pC)("SessionsPanel") ? [h] : [p]),
    }),
    E = (0, r.i4)(d.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t["+1h0k/"]),
        icon: s.W,
        usePredicate: () => !(0, u._A)("SessionsPanel"),
        buildLayout: () => [x],
    });
