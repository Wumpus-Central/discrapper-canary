n.d(t, { Z: () => c });
var r = n(544891),
    i = n(570140),
    a = n(594174),
    o = n(960048),
    s = n(86419),
    l = n(981631);
let c = {
    setPendingWidgets(e) {
        i.Z.dispatch({
            type: "WIDGET_PENDING_SET",
            widgets: e,
        });
    },
    async savePendingWidgets(e) {
        var t;
        let n = null == (t = a.default.getCurrentUser()) ? void 0 : t.id;
        if (null == n) return;
        i.Z.dispatch({ type: "WIDGET_PENDING_SAVE_START" });
        let o = e.map(s.vH);
        try {
            let e = await r.tn.put({
                url: l.ANM.USER_PROFILE_WIDGETS,
                body: { widgets: o },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            return (
                i.Z.dispatch({
                    type: "WIDGET_PENDING_SAVE_SUCCESS",
                    userId: n,
                    widgets: e.body.widgets,
                }),
                e.body
            );
        } catch (e) {
            throw (i.Z.dispatch({ type: "WIDGET_PENDING_SAVE_FAILURE" }), e);
        }
    },
    clearPendingWidgets() {
        i.Z.dispatch({ type: "WIDGET_PENDING_CLEAR" });
    },
    async fetchSuggestedGames() {
        i.Z.dispatch({ type: "WIDGET_SUGGESTED_FETCH_START" });
        try {
            var e, t, n, a, s, c;
            let u = await r.tn.get({
                url: l.ANM.USER_PROFILE_SUGGESTED_GAMES,
                rejectWithError: !0,
            });
            ((null == (e = u.body) ? void 0 : e.suggested_games) == null ||
                (null == (t = u.body) ? void 0 : t.suggested_wishlist_games) == null) &&
                o.Z.captureMessage("Suggested games or wishlist games not found"),
                i.Z.dispatch({
                    type: "WIDGET_SUGGESTED_FETCH_SUCCESS",
                    suggestedGamesIds: null != (s = null == (n = u.body) ? void 0 : n.suggested_games) ? s : [],
                    suggestedWishlistGamesIds:
                        null != (c = null == (a = u.body) ? void 0 : a.suggested_wishlist_games) ? c : [],
                });
        } catch (e) {
            throw (i.Z.dispatch({ type: "WIDGET_SUGGESTED_FETCH_FAILURE" }), o.Z.captureException(e), e);
        }
    },
    removeGameFromSuggestedGames(e) {
        i.Z.dispatch({
            type: "WIDGET_SUGGESTED_REMOVE_GAME",
            applicationId: e,
        });
    },
};
