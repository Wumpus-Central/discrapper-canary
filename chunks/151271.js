n.d(t, {
    RQ: () => g,
    Ri: () => m,
    U: () => h,
    bf: () => d,
    ed: () => p,
    r$: () => _,
    v8: () => f,
});
var r = n(296489),
    i = n.n(r),
    a = n(499867),
    s = n(265690),
    o = n(121894),
    l = n(698279);
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
    u = (0, s.h)()(
        (0, a.Zr)((e, t) => c, {
            name: "expression-picker-last-active-view",
            partialize: (e) => ({
                lastActiveView: e.lastActiveView,
            }),
        }),
    ),
    d = (e, t, n) => {
        (0, o.r)(() =>
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
        (void 0 !== e && e !== n.activeViewType) ||
            (void 0 !== t && t !== n.activeChannelId) ||
            (null !== n.activeView &&
                (0, o.r)(() =>
                    u.setState({
                        activeView: null,
                        activeViewType: null,
                        activeChannelId: null,
                        lastActiveView: n.activeView,
                    }),
                ));
    },
    p = (e, t) => {
        let n = u.getState();
        if (null == n.activeView) {
            var r;
            d(null != (r = n.lastActiveView) ? r : l.kx.EMOJI, e, t);
        } else f();
    },
    _ = (e, t, n) => {
        u.getState().activeView === e ? f() : d(e, t, n);
    },
    h = (e) => {
        (0, o.r)(() =>
            u.setState({
                activeView: e,
                lastActiveView: u.getState().activeView,
            }),
        );
    },
    m = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, o.r)(() =>
            u.setState({
                searchQuery: e,
                isSearchSuggestion: t,
            }),
        );
    },
    g = u;
