n.d(t, { Z: () => d });
var r = n(544891),
    i = n(780384),
    a = n(570140),
    o = n(594174),
    s = n(585483),
    l = n(960048),
    c = n(981631),
    u = n(388032);
let d = {
    setPendingWidgets(e) {
        a.Z.dispatch({
            type: "WIDGET_PENDING_SET",
            widgets: e,
        });
    },
    async savePendingWidgets(e) {
        var t;
        let n = null == (t = o.default.getCurrentUser()) ? void 0 : t.id;
        if (null == n) return;
        a.Z.dispatch({ type: "WIDGET_PENDING_SAVE_START" });
        let i = e.map((e) => e.toSubmission());
        try {
            let e = await r.tn.put({
                url: c.ANM.USER_PROFILE_WIDGETS,
                body: { widgets: i },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            return (
                a.Z.dispatch({
                    type: "WIDGET_PENDING_SAVE_SUCCESS",
                    userId: n,
                    widgets: e.body.widgets,
                }),
                e.body
            );
        } catch (e) {
            throw (a.Z.dispatch({ type: "WIDGET_PENDING_SAVE_FAILURE" }), e);
        }
    },
    clearPendingWidgets() {
        a.Z.dispatch({ type: "WIDGET_PENDING_CLEAR" });
    },
    async fetchSuggestedGames() {
        a.Z.dispatch({ type: "WIDGET_SUGGESTED_FETCH_START" });
        try {
            var e, t, n, i, o, s;
            let u = await r.tn.get({
                url: c.ANM.USER_PROFILE_SUGGESTED_GAMES,
                rejectWithError: !0,
            });
            ((null == (e = u.body) ? void 0 : e.suggested_games) == null ||
                (null == (t = u.body) ? void 0 : t.suggested_wishlist_games) == null) &&
                l.Z.captureMessage("Suggested games or wishlist games not found"),
                a.Z.dispatch({
                    type: "WIDGET_SUGGESTED_FETCH_SUCCESS",
                    suggestedGamesIds: null != (o = null == (n = u.body) ? void 0 : n.suggested_games) ? o : [],
                    suggestedWishlistGamesIds:
                        null != (s = null == (i = u.body) ? void 0 : i.suggested_wishlist_games) ? s : [],
                });
        } catch (e) {
            throw (a.Z.dispatch({ type: "WIDGET_SUGGESTED_FETCH_FAILURE" }), l.Z.captureException(e), e);
        }
    },
    removeGameFromSuggestedGames(e) {
        a.Z.dispatch({
            type: "WIDGET_SUGGESTED_REMOVE_GAME",
            applicationId: e,
        });
    },
    notifyUnsavedWidgets() {
        s.S.dispatch(c.CkL.SHAKE_PROFILE_MODAL),
            s.S.dispatch(c.CkL.EMPHASIZE_NOTICE),
            i.uv.announce("".concat(u.intl.string(u.t.GP7JLE), " ").concat(u.intl.string(u.t.gKoO1D)));
    },
};
