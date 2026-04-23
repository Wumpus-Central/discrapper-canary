n.d(t, { BZ: () => h, R7: () => m, S3: () => _, VP: () => f, ni: () => A });
var s = n(110259),
    a = n(562465),
    l = n(933681),
    i = n(73153),
    r = n(253932),
    o = n(499785),
    d = n(252431),
    c = n(995273),
    u = n(652215);
function h(e) {
    i.h.dispatch({ type: "NOTIFICATION_CENTER_SET_ACTIVE", active: e });
}
function _() {
    i.h.dispatch({ type: "RESET_NOTIFICATION_CENTER" });
}
async function A(e, t) {
    if (d.A.loading) return;
    await i.h.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS" });
    let n = Math.ceil(d.A.items.length / e.limit);
    try {
        let a = await o.A.get({
            url: u.Rsh.NOTIF_CENTER_ITEMS(),
            trackedActionData: {
                event: s.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
                properties: (e) => {
                    let t = (e.body?.items || []).map((e) => e.type);
                    return (0, l.e0)({ page: n, items: t, item_count: t.length });
                },
            },
            query: { ...e },
            rejectWithError: !0,
        });
        t?.(),
            await i.h.dispatch({
                type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
                items: a.body.items,
                cursor: a.body.cursor,
                hasMore: a.body.has_more,
            });
    } catch (e) {
        t?.(), await i.h.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE" });
    }
}
function m(e) {
    var t, n;
    null != e.local_id
        ? ((t = [e.local_id]), i.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: t }))
        : (0, c.gk)(e)
          ? ((n = e.id), i.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: !0, ids: [n] }))
          : g(e.id);
}
async function g(e) {
    try {
        i.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: !0, ids: [e] }),
            await a.Bo.post({ url: u.Rsh.NOTIF_CENTER_ITEMS_ACK(e), rejectWithError: !0 });
    } catch (t) {
        i.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE", ids: [e] });
    }
}
async function f(e) {
    let t = r.ns.getSetting();
    try {
        i.h.dispatch({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id }),
            await o.A.delete({
                url: u.Rsh.NOTIF_CENTER_ITEMS(e.id),
                body: { item_type: (0, c.gk)(e) ? "mention" : "regular" },
                trackedActionData: {
                    event: s.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
                    properties: { notification_center_id: e.id, acked: (0, c.NW)(e, t), item_type: e.type },
                },
                rejectWithError: !1,
            });
    } catch (t) {
        throw (i.h.dispatch({ type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE", item: e }), t);
    }
}
