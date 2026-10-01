i.d(t, { RQ: () => S, Ri: () => p, U: () => h, bf: () => u, ed: () => V, r$: () => o, v8: () => w });
var a = i(277057),
    c = i.n(a),
    n = i(537812),
    l = i(882035),
    v = i(121894),
    s = i(698279);
let r = Object.freeze({
        activeView: null,
        lastActiveView: null,
        activeViewType: null,
        activeChannelId: null,
        searchQuery: "",
        isSearchSuggestion: !1,
        pickerId: (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
            return c()(e);
        })(),
        isNitroLockedSectionVisible: !1,
        areOnlyNitroLockedSectionsVisible: !1,
    }),
    d = (0, l.h)()(
        (0, n.Zr)((e, t) => r, {
            name: "expression-picker-last-active-view",
            partialize: (e) => ({ lastActiveView: e.lastActiveView }),
        }),
    );
function u(e, t, i) {
    (0, v.r)(() =>
        d.setState({ activeView: e, activeViewType: t, activeChannelId: i, lastActiveView: d.getState().activeView }),
    );
}
function w(e, t) {
    let i = d.getState();
    (void 0 !== e && e !== i.activeViewType) ||
        (void 0 !== t && t !== i.activeChannelId) ||
        (null !== i.activeView &&
            (0, v.r)(() =>
                d.setState({
                    activeView: null,
                    activeViewType: null,
                    activeChannelId: null,
                    lastActiveView: i.activeView,
                }),
            ));
}
function V(e, t) {
    let i = d.getState();
    null == i.activeView
        ? u(i.lastActiveView ?? s.kx.EMOJI, e, t)
        : i.activeViewType !== e || i.activeChannelId !== t
          ? u(i.activeView, e, t)
          : w();
}
function o(e, t, i) {
    let a = d.getState();
    a.activeView === e && a.activeViewType === t && a.activeChannelId === i ? w() : u(e, t, i);
}
function h(e) {
    (0, v.r)(() => d.setState({ activeView: e, lastActiveView: d.getState().activeView }));
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (0, v.r)(() => d.setState({ searchQuery: e, isSearchSuggestion: t }));
}
let S = d;
