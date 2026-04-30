"use strict";
n.d(t, { RQ: () => m, Ri: () => E, U: () => p, bf: () => d, ed: () => f, r$: () => h, v8: () => _ });
var i = n(296489),
    r = n.n(i),
    s = n(499867),
    a = n(265690),
    o = n(121894),
    l = n(698279);
let u = Object.freeze({
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
    c = (0, a.h)()(
        (0, s.Zr)((e, t) => u, {
            name: "expression-picker-last-active-view",
            partialize: (e) => ({ lastActiveView: e.lastActiveView }),
        }),
    ),
    d = (e, t, n) => {
        (0, o.r)(() =>
            c.setState({
                activeView: e,
                activeViewType: t,
                activeChannelId: n,
                lastActiveView: c.getState().activeView,
            }),
        );
    },
    _ = (e, t) => {
        let n = c.getState();
        (void 0 !== e && e !== n.activeViewType) ||
            (void 0 !== t && t !== n.activeChannelId) ||
            (null !== n.activeView &&
                (0, o.r)(() =>
                    c.setState({
                        activeView: null,
                        activeViewType: null,
                        activeChannelId: null,
                        lastActiveView: n.activeView,
                    }),
                ));
    },
    f = (e, t) => {
        let n = c.getState();
        null == n.activeView ? d(n.lastActiveView ?? l.kx.EMOJI, e, t) : _();
    },
    h = (e, t, n) => {
        c.getState().activeView === e ? _() : d(e, t, n);
    },
    p = (e) => {
        (0, o.r)(() => c.setState({ activeView: e, lastActiveView: c.getState().activeView }));
    },
    E = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, o.r)(() => c.setState({ searchQuery: e, isSearchSuggestion: t }));
    },
    m = c;
