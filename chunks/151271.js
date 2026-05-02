r.d(t, { RQ: () => I, Ri: () => f, U: () => g, bf: () => d, ed: () => m, r$: () => p, v8: () => h });
var s = r(296489),
    n = r.n(s),
    l = r(499867),
    i = r(265690),
    a = r(121894),
    o = r(698279);
let u = Object.freeze({
        activeView: null,
        lastActiveView: null,
        activeViewType: null,
        activeChannelId: null,
        searchQuery: "",
        isSearchSuggestion: !1,
        pickerId: (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
            return n()(e);
        })(),
        isNitroLockedSectionVisible: !1,
        areOnlyNitroLockedSectionsVisible: !1,
    }),
    c = (0, i.h)()(
        (0, l.Zr)((e, t) => u, {
            name: "expression-picker-last-active-view",
            partialize: (e) => ({ lastActiveView: e.lastActiveView }),
        }),
    ),
    d = (e, t, r) => {
        (0, a.r)(() =>
            c.setState({
                activeView: e,
                activeViewType: t,
                activeChannelId: r,
                lastActiveView: c.getState().activeView,
            }),
        );
    },
    h = (e, t) => {
        let r = c.getState();
        (void 0 !== e && e !== r.activeViewType) ||
            (void 0 !== t && t !== r.activeChannelId) ||
            (null !== r.activeView &&
                (0, a.r)(() =>
                    c.setState({
                        activeView: null,
                        activeViewType: null,
                        activeChannelId: null,
                        lastActiveView: r.activeView,
                    }),
                ));
    },
    m = (e, t) => {
        let r = c.getState();
        null == r.activeView ? d(r.lastActiveView ?? o.kx.EMOJI, e, t) : h();
    },
    p = (e, t, r) => {
        c.getState().activeView === e ? h() : d(e, t, r);
    },
    g = (e) => {
        (0, a.r)(() => c.setState({ activeView: e, lastActiveView: c.getState().activeView }));
    },
    f = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, a.r)(() => c.setState({ searchQuery: e, isSearchSuggestion: t }));
    },
    I = c;
