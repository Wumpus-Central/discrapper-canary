r.d(t, { RQ: () => I, Ri: () => f, U: () => g, bf: () => d, ed: () => m, r$: () => p, v8: () => h });
var n = r(277057),
    s = r.n(n),
    l = r(537812),
    i = r(882035),
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
            return s()(e);
        })(),
        isNitroLockedSectionVisible: !1,
        areOnlyNitroLockedSectionsVisible: !1,
    }),
    c = (0, i.h)()(
        (0, l.Zr)((e, t) => u, {
            name: "expression-picker-last-active-view",
            partialize: (e) => ({ lastActiveView: e.lastActiveView }),
        }),
    );
function d(e, t, r) {
    (0, a.r)(() =>
        c.setState({ activeView: e, activeViewType: t, activeChannelId: r, lastActiveView: c.getState().activeView }),
    );
}
function h(e, t) {
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
}
function m(e, t) {
    let r = c.getState();
    null == r.activeView
        ? d(r.lastActiveView ?? o.kx.EMOJI, e, t)
        : r.activeViewType !== e || r.activeChannelId !== t
          ? d(r.activeView, e, t)
          : h();
}
function p(e, t, r) {
    let n = c.getState();
    n.activeView === e && n.activeViewType === t && n.activeChannelId === r ? h() : d(e, t, r);
}
function g(e) {
    (0, a.r)(() => c.setState({ activeView: e, lastActiveView: c.getState().activeView }));
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (0, a.r)(() => c.setState({ searchQuery: e, isSearchSuggestion: t }));
}
let I = c;
