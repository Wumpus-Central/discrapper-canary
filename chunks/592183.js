n.d(t, { Z: () => l });
var r = n(544891),
    i = n(570140),
    o = n(594174),
    a = n(86419),
    s = n(981631);
let l = {
    setPendingWidgets(e) {
        i.Z.dispatch({
            type: "WIDGET_PENDING_SET",
            widgets: e,
        });
    },
    async savePendingWidgets(e) {
        var t;
        let n = null == (t = o.default.getCurrentUser()) ? void 0 : t.id;
        if (null == n) return;
        i.Z.dispatch({ type: "WIDGET_PENDING_SAVE_START" });
        let l = e.map(a.vH);
        try {
            let e = await r.tn.put({
                url: s.ANM.USER_PROFILE_WIDGETS,
                body: { widgets: l },
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
};
