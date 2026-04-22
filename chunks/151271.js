r.d(t, { RQ: () => E, Ri: () => g, U: () => p, bf: () => d, ed: () => m, r$: () => f, v8: () => h });
var s = r(296489),
    l = r.n(s),
    n = r(499867),
    i = r(265690),
    o = r(121894),
    a = r(698279);
let c = Object.freeze({
        activeView: null,
        lastActiveView: null,
        activeViewType: null,
        activeChannelId: null,
        searchQuery: "",
        isSearchSuggestion: !1,
        pickerId: (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
            return l()(e);
        })(),
        isNitroLockedSectionVisible: !1,
        areOnlyNitroLockedSectionsVisible: !1,
    }),
    u = (0, i.h)()(
        (0, n.Zr)((e, t) => c, {
            name: "expression-picker-last-active-view",
            partialize: (e) => ({ lastActiveView: e.lastActiveView }),
        }),
    ),
    d = (e, t, r) => {
        (0, o.r)(() =>
            u.setState({
                activeView: e,
                activeViewType: t,
                activeChannelId: r,
                lastActiveView: u.getState().activeView,
            }),
        );
    },
    h = (e, t) => {
        let r = u.getState();
        (void 0 !== e && e !== r.activeViewType) ||
            (void 0 !== t && t !== r.activeChannelId) ||
            (null !== r.activeView &&
                (0, o.r)(() =>
                    u.setState({
                        activeView: null,
                        activeViewType: null,
                        activeChannelId: null,
                        lastActiveView: r.activeView,
                    }),
                ));
    },
    m = (e, t) => {
        let r = u.getState();
        null == r.activeView ? d(r.lastActiveView ?? a.kx.EMOJI, e, t) : h();
    },
    f = (e, t, r) => {
        u.getState().activeView === e ? h() : d(e, t, r);
    },
    p = (e) => {
        (0, o.r)(() => u.setState({ activeView: e, lastActiveView: u.getState().activeView }));
    },
    g = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, o.r)(() => u.setState({ searchQuery: e, isSearchSuggestion: t }));
    },
    E = u;
