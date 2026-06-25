"use strict";
n.d(t, { RQ: () => m, Ri: () => E, U: () => p, bf: () => d, ed: () => h, r$: () => f, v8: () => _ });
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
    );
function d(e, t, n) {
    (0, o.r)(() =>
        c.setState({ activeView: e, activeViewType: t, activeChannelId: n, lastActiveView: c.getState().activeView }),
    );
}
function _(e, t) {
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
}
function h(e, t) {
    let n = c.getState();
    null == n.activeView
        ? d(n.lastActiveView ?? l.kx.EMOJI, e, t)
        : n.activeViewType !== e || n.activeChannelId !== t
          ? d(n.activeView, e, t)
          : _();
}
function f(e, t, n) {
    let i = c.getState();
    i.activeView === e && i.activeViewType === t && i.activeChannelId === n ? _() : d(e, t, n);
}
function p(e) {
    (0, o.r)(() => c.setState({ activeView: e, lastActiveView: c.getState().activeView }));
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (0, o.r)(() => c.setState({ searchQuery: e, isSearchSuggestion: t }));
}
let m = c;
