n.d(t, {
    Iu: () => g,
    PG: () => d,
    RO: () => p,
    _Q: () => f,
    hr: () => h,
    j9: () => _,
    ql: () => m
});
var r = n(97613),
    i = n.n(r),
    o = n(781930),
    a = n(372793),
    s = n(731965),
    l = n(957825);
let c = Object.freeze({
        activeView: null,
        lastActiveView: null,
        activeViewType: null,
        searchQuery: '',
        isSearchSuggestion: !1,
        pickerId: (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'uid_';
            return i()(e);
        })()
    }),
    u = (0, a.F)()(
        (0, o.tJ)((e, t) => c, {
            name: 'expression-picker-last-active-view',
            partialize: (e) => ({ lastActiveView: e.lastActiveView })
        })
    ),
    d = (e, t) => {
        (0, s.j)(() =>
            u.setState({
                activeView: e,
                activeViewType: t,
                lastActiveView: u.getState().activeView
            })
        );
    },
    f = (e) => {
        let t = u.getState();
        (void 0 === e || e === t.activeViewType) &&
            null !== t.activeView &&
            (0, s.j)(() =>
                u.setState({
                    activeView: null,
                    activeViewType: null,
                    lastActiveView: t.activeView
                })
            );
    },
    _ = (e) => {
        let t = u.getState();
        if (null == t.activeView) {
            var n;
            d(null != (n = t.lastActiveView) ? n : l.X1.EMOJI, e);
        } else f();
    },
    p = (e, t) => {
        u.getState().activeView === e ? f() : d(e, t);
    },
    h = (e) => {
        (0, s.j)(() =>
            u.setState({
                activeView: e,
                lastActiveView: u.getState().activeView
            })
        );
    },
    m = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, s.j)(() =>
            u.setState({
                searchQuery: e,
                isSearchSuggestion: t
            })
        );
    },
    g = u;
