r.d(n, {
    Iu: function () {
        return E;
    },
    PG: function () {
        return f;
    },
    RO: function () {
        return _;
    },
    _Q: function () {
        return p;
    },
    hr: function () {
        return m;
    },
    j9: function () {
        return h;
    },
    ql: function () {
        return g;
    }
});
var i = r(97613),
    a = r.n(i),
    o = r(877124),
    s = r(65400),
    l = r(731965),
    u = r(957825);
let c = Object.freeze({
        activeView: null,
        lastActiveView: null,
        activeViewType: null,
        searchQuery: '',
        isSearchSuggestion: !1,
        pickerId: (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'uid_';
            return a()(e);
        })()
    }),
    d = (0, s.F)()(
        (0, o.tJ)((e, n) => c, {
            name: 'expression-picker-last-active-view',
            partialize: (e) => ({ lastActiveView: e.lastActiveView })
        })
    ),
    f = (e, n) => {
        (0, l.j)(() =>
            d.setState({
                activeView: e,
                activeViewType: n,
                lastActiveView: d.getState().activeView
            })
        );
    },
    p = (e) => {
        let n = d.getState();
        if ((void 0 === e || e === n.activeViewType) && null !== n.activeView)
            (0, l.j)(() =>
                d.setState({
                    activeView: null,
                    activeViewType: null,
                    lastActiveView: n.activeView
                })
            );
    },
    h = (e) => {
        let n = d.getState();
        if (null == n.activeView) {
            var r;
            f(null !== (r = n.lastActiveView) && void 0 !== r ? r : u.X1.EMOJI, e);
        } else p();
    },
    _ = (e, n) => {
        d.getState().activeView === e ? p() : f(e, n);
    },
    m = (e) => {
        (0, l.j)(() =>
            d.setState({
                activeView: e,
                lastActiveView: d.getState().activeView
            })
        );
    },
    g = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, l.j)(() =>
            d.setState({
                searchQuery: e,
                isSearchSuggestion: n
            })
        );
    },
    E = d;
