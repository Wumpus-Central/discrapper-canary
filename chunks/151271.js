i.d(t, { RQ: () => S, Ri: () => k, U: () => h, bf: () => w, ed: () => d, ke: () => p, r$: () => V, v8: () => u });
var a = i(277057),
    c = i.n(a),
    n = i(537812),
    l = i(882035),
    s = i(121894),
    v = i(698279);
let o = Object.freeze({
        activeView: null,
        lastActiveView: null,
        activeViewType: null,
        activeChannelId: null,
        showEmojiPacks: !1,
        searchQuery: "",
        isSearchSuggestion: !1,
        pickerId: (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
            return c()(e);
        })(),
        isNitroLockedSectionVisible: !1,
        areOnlyNitroLockedSectionsVisible: !1,
    }),
    r = (0, l.h)()(
        (0, n.Zr)((e, t) => o, {
            name: "expression-picker-last-active-view",
            partialize: (e) => ({ lastActiveView: e.lastActiveView }),
        }),
    );
function w(e, t, i, a) {
    (0, s.r)(() =>
        r.setState({
            activeView: e,
            activeViewType: t,
            activeChannelId: i,
            showEmojiPacks: a?.showEmojiPacks ?? !1,
            lastActiveView: r.getState().activeView,
        }),
    );
}
function u(e, t) {
    let i = r.getState();
    (void 0 !== e && e !== i.activeViewType) ||
        (void 0 !== t && t !== i.activeChannelId) ||
        (null !== i.activeView &&
            (0, s.r)(() =>
                r.setState({
                    activeView: null,
                    activeViewType: null,
                    activeChannelId: null,
                    showEmojiPacks: !1,
                    lastActiveView: i.activeView,
                }),
            ));
}
function d(e, t) {
    let i = r.getState();
    null == i.activeView
        ? w(i.lastActiveView ?? v.kx.EMOJI, e, t)
        : i.activeViewType !== e || i.activeChannelId !== t
          ? w(i.activeView, e, t)
          : u();
}
function V(e, t, i) {
    let a = r.getState();
    a.activeView === e && a.activeViewType === t && a.activeChannelId === i ? u() : w(e, t, i);
}
function h(e) {
    (0, s.r)(() => r.setState({ activeView: e, lastActiveView: r.getState().activeView, showEmojiPacks: !1 }));
}
function p(e) {
    (0, s.r)(() => r.setState({ showEmojiPacks: e }));
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (0, s.r)(() => r.setState({ searchQuery: e, isSearchSuggestion: t }));
}
let S = r;
