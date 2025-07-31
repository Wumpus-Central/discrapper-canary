let r;
n.d(t, {
    Iu: () => b,
    PG: () => f,
    RO: () => m,
    _Q: () => p,
    hr: () => g,
    j9: () => h,
    ql: () => E
});
var i = n(97613),
    a = n.n(i),
    o = n(296574),
    s = n(362383),
    l = n(731965),
    c = n(182501),
    u = n(957825);
let d = Object.freeze({
        activeView: null,
        lastActiveView: null,
        activeViewType: null,
        searchQuery: '',
        isSearchSuggestion: !1,
        pickerId: (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'uid_';
            return a()(e);
        })(),
        isNitroLockedSectionVisible: !1,
        areOnlyNitroLockedSectionsVisible: !1
    }),
    _ = (0, s.F)()(
        (0, o.tJ)((e, t) => d, {
            name: 'expression-picker-last-active-view',
            partialize: (e) => ({ lastActiveView: e.lastActiveView })
        })
    ),
    f = (e, t) => {
        if (e === u.X1.GIF) {
            if (null != r) return;
            let { enabled: n, delayMs: i } = (0, c.Kr)('gif-picker');
            if (n) {
                r = setTimeout(() => {
                    ((r = null),
                        (0, l.j)(() =>
                            _.setState({
                                activeView: e,
                                activeViewType: t,
                                lastActiveView: _.getState().activeView
                            })
                        ));
                }, i);
                return;
            }
        } else null != r && (clearTimeout(r), (r = null));
        (0, l.j)(() =>
            _.setState({
                activeView: e,
                activeViewType: t,
                lastActiveView: _.getState().activeView
            })
        );
    },
    p = (e) => {
        let t = _.getState();
        (void 0 === e || e === t.activeViewType) &&
            null !== t.activeView &&
            (0, l.j)(() =>
                _.setState({
                    activeView: null,
                    activeViewType: null,
                    lastActiveView: t.activeView
                })
            );
    },
    h = (e) => {
        let t = _.getState();
        if (null == t.activeView) {
            var n;
            f(null != (n = t.lastActiveView) ? n : u.X1.EMOJI, e);
        } else p();
    },
    m = (e, t) => {
        _.getState().activeView === e ? p() : f(e, t);
    },
    g = (e) => {
        (0, l.j)(() =>
            _.setState({
                activeView: e,
                lastActiveView: _.getState().activeView
            })
        );
    },
    E = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, l.j)(() =>
            _.setState({
                searchQuery: e,
                isSearchSuggestion: t
            })
        );
    },
    b = _;
