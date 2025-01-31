n.d(t, {
    Iu: () => g,
    PG: () => d,
    RO: () => p,
    _Q: () => f,
    hr: () => h,
    j9: () => _,
    ql: () => m
});
var i = n(97613),
    r = n.n(i),
    a = n(877124),
    s = n(65400),
    o = n(731965),
    l = n(957825);
let u = Object.freeze({
        activeView: null,
        lastActiveView: null,
        activeViewType: null,
        searchQuery: '',
        isSearchSuggestion: !1,
        pickerId: (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'uid_';
            return r()(e);
        })()
    }),
    c = (0, s.F)()(
        (0, a.tJ)((e, t) => u, {
            name: 'expression-picker-last-active-view',
            partialize: (e) => ({ lastActiveView: e.lastActiveView })
        })
    ),
    d = (e, t) => {
        (0, o.j)(() =>
            c.setState({
                activeView: e,
                activeViewType: t,
                lastActiveView: c.getState().activeView
            })
        );
    },
    f = (e) => {
        let t = c.getState();
        (void 0 === e || e === t.activeViewType) &&
            null !== t.activeView &&
            (0, o.j)(() =>
                c.setState({
                    activeView: null,
                    activeViewType: null,
                    lastActiveView: t.activeView
                })
            );
    },
    _ = (e) => {
        let t = c.getState();
        if (null == t.activeView) {
            var n;
            d(null !== (n = t.lastActiveView) && void 0 !== n ? n : l.X1.EMOJI, e);
        } else f();
    },
    p = (e, t) => {
        c.getState().activeView === e ? f() : d(e, t);
    },
    h = (e) => {
        (0, o.j)(() =>
            c.setState({
                activeView: e,
                lastActiveView: c.getState().activeView
            })
        );
    },
    m = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, o.j)(() =>
            c.setState({
                searchQuery: e,
                isSearchSuggestion: t
            })
        );
    },
    g = c;
