var i = n(620632),
    r = n(73153),
    a = n(812020),
    s = n(46653),
    l = n(596344),
    o = n(129230),
    d = n(856383),
    c = n(682901),
    u = n(652215);
function _(e, t, n) {
    (o.default.track(u.HAw.GIFT_INTENT_DISMISSED, {
        gift_intent_type: e,
        dismiss_type: n,
        affinity: a.A.getUserAffinity(t)?.dmProbability,
    }),
        e !== c.np.UNSPECIFIED &&
            i.Bo.post({
                url: u.Rsh.GIFT_INTENTS_DISMISS,
                body: { intent_type: e, target_id: t },
                oldFormErrors: !0,
                rejectWithError: !0,
            }).catch((e) => {
                d.A.captureException(e, { tags: { feature: "gift_intent" } });
            }));
}
n.d(
    t,
    {},
    {
        Ad: function () {
            r.h.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
        },
        Yd: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.np.FRIEND_ANNIVERSARY;
            (r.h.dispatch({ type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId: e }), _(t, e, "gift_sent"));
        },
        np: function (e, t) {
            let n = l.A.getMessage(e, t)?.giftingPrompt;
            null != n && _(n.giftIntentType, n.recipientUserId, "explicit");
        },
        qH: function (e) {
            let t = s.default.getId();
            return i.Bo.get({ url: u.Rsh.GIFT_INTENT_DISMISSALS, oldFormErrors: !0, rejectWithError: !0 }).then(
                (n) => {
                    s.default.getId() !== t
                        ? r.h.dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" })
                        : r.h.dispatch({
                              type: "GIFT_INTENT_DISMISSALS_FETCH_SUCCESS",
                              dismissals: (n.body.dismissals ?? []).map((e) => ({
                                  targetId: e.target_id,
                                  dismissedAtMs: Number(e.dismissed_at_ms),
                              })),
                              settingsTimestampMs: e,
                          });
                },
                (e) => {
                    (d.A.captureException(e, { tags: { feature: "gift_intent" } }),
                        r.h.dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" }));
                },
            );
        },
        xs: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.np.FRIEND_ANNIVERSARY;
            (r.h.dispatch({ type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId: e }), _(t, e, "shown"));
        },
    },
);
