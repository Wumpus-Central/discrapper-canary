n.d(t, { RQ: () => S, Ri: () => T, U: () => A, bf: () => d, ed: () => u, r$: () => I, v8: () => c });
var i = n(296489),
    r = n.n(i),
    a = n(499867),
    s = n(265690),
    _ = n(121894),
    l = n(698279);
let o = Object.freeze({
        activeView: null,
        lastActiveView: null,
        activeViewType: null,
        activeChannelId: null,
        searchQuery: "",
        isSearchSuggestion: !1,
        pickerId: (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
            return r()(e);
        })(),
        isNitroLockedSectionVisible: !1,
        areOnlyNitroLockedSectionsVisible: !1,
    }),
    E = (0, s.h)()(
        (0, a.Zr)((e, t) => o, {
            name: "expression-picker-last-active-view",
            partialize: (e) => ({ lastActiveView: e.lastActiveView }),
        }),
    ),
    d = (e, t, n) => {
        (0, _.r)(() =>
            E.setState({
                activeView: e,
                activeViewType: t,
                activeChannelId: n,
                lastActiveView: E.getState().activeView,
            }),
        );
    },
    c = (e, t) => {
        let n = E.getState();
        (void 0 !== e && e !== n.activeViewType) ||
            (void 0 !== t && t !== n.activeChannelId) ||
            (null !== n.activeView &&
                (0, _.r)(() =>
                    E.setState({
                        activeView: null,
                        activeViewType: null,
                        activeChannelId: null,
                        lastActiveView: n.activeView,
                    }),
                ));
    },
    u = (e, t) => {
        let n = E.getState();
        null == n.activeView ? d(n.lastActiveView ?? l.kx.EMOJI, e, t) : c();
    },
    I = (e, t, n) => {
        E.getState().activeView === e ? c() : d(e, t, n);
    },
    A = (e) => {
        (0, _.r)(() => E.setState({ activeView: e, lastActiveView: E.getState().activeView }));
    },
    T = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, _.r)(() => E.setState({ searchQuery: e, isSearchSuggestion: t }));
    },
    S = E;
