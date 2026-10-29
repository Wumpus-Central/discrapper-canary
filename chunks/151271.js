t.d(i, { RQ: () => p, Ri: () => S, U: () => V, bf: () => w, ed: () => h, ke: () => k, r$: () => u, v8: () => r });
var a = t(277057),
    c = t.n(a),
    l = t(537812),
    n = t(882035),
    s = t(121894),
    o = t(698279);
let v = Object.freeze({
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
    d = (0, n.h)()(
        (0, l.Zr)((e, i) => v, {
            name: "expression-picker-last-active-view",
            partialize: (e) => ({ lastActiveView: e.lastActiveView }),
        }),
    );
function w(e, i, t, a) {
    (0, s.r)(() =>
        d.setState({
            activeView: e,
            activeViewType: i,
            activeChannelId: t,
            showEmojiPacks: a?.showEmojiPacks ?? !1,
            showSelectedEmojiPackId: a?.showSelectedEmojiPackId,
            lastActiveView: d.getState().activeView,
        }),
    );
}
function r(e, i) {
    let t = d.getState();
    (void 0 !== e && e !== t.activeViewType) ||
        (void 0 !== i && i !== t.activeChannelId) ||
        (null !== t.activeView &&
            (0, s.r)(() =>
                d.setState({
                    activeView: null,
                    activeViewType: null,
                    activeChannelId: null,
                    showEmojiPacks: !1,
                    showSelectedEmojiPackId: void 0,
                    lastActiveView: t.activeView,
                }),
            ));
}
function h(e, i) {
    let t = d.getState();
    null == t.activeView
        ? w(t.lastActiveView ?? o.kx.EMOJI, e, i)
        : t.activeViewType !== e || t.activeChannelId !== i
          ? w(t.activeView, e, i)
          : r();
}
function u(e, i, t) {
    let a = d.getState();
    a.activeView === e && a.activeViewType === i && a.activeChannelId === t ? r() : w(e, i, t);
}
function V(e) {
    (0, s.r)(() =>
        d.setState({
            activeView: e,
            lastActiveView: d.getState().activeView,
            showEmojiPacks: !1,
            showSelectedEmojiPackId: void 0,
        }),
    );
}
function k(e) {
    (0, s.r)(() => d.setState({ showEmojiPacks: e, showSelectedEmojiPackId: void 0 }));
}
function S(e) {
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (0, s.r)(() => d.setState({ searchQuery: e, isSearchSuggestion: i }));
}
let p = d;
