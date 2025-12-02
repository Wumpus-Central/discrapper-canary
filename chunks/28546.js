n.d(t, {
    Iu: () => g,
    PG: () => d,
    RO: () => _,
    _Q: () => f,
    hr: () => m,
    j9: () => p,
    ql: () => h,
});
var r = n(97613),
    i = n.n(r),
    a = n(690775),
    o = n(748521),
    s = n(731965),
    l = n(957825);
let c = Object.freeze({
        activeView: null,
        lastActiveView: null,
        activeViewType: null,
        activeChannelId: null,
        searchQuery: "",
        isSearchSuggestion: !1,
        pickerId: (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
            return i()(e);
        })(),
        isNitroLockedSectionVisible: !1,
        areOnlyNitroLockedSectionsVisible: !1,
    }),
    u = (0, o.F)()(
        (0, a.tJ)((e, t) => c, {
            name: "expression-picker-last-active-view",
            partialize: (e) => ({ lastActiveView: e.lastActiveView }),
        }),
    ),
    d = (e, t, n) => {
        (0, s.j)(() =>
            u.setState({
                activeView: e,
                activeViewType: t,
                activeChannelId: n,
                lastActiveView: u.getState().activeView,
            }),
        );
    },
    f = (e, t) => {
        let n = u.getState();
        (void 0 === e || e === n.activeViewType) &&
            (void 0 === t || t === n.activeChannelId) &&
            null !== n.activeView &&
            (0, s.j)(() =>
                u.setState({
                    activeView: null,
                    activeViewType: null,
                    activeChannelId: null,
                    lastActiveView: n.activeView,
                }),
            );
    },
    p = (e, t) => {
        let n = u.getState();
        if (null == n.activeView) {
            var r;
            d(null != (r = n.lastActiveView) ? r : l.X1.EMOJI, e, t);
        } else f();
    },
    _ = (e, t, n) => {
        u.getState().activeView === e ? f() : d(e, t, n);
    },
    m = (e) => {
        (0, s.j)(() =>
            u.setState({
                activeView: e,
                lastActiveView: u.getState().activeView,
            }),
        );
    },
    h = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, s.j)(() =>
            u.setState({
                searchQuery: e,
                isSearchSuggestion: t,
            }),
        );
    },
    g = u;
