n.d(t, { BZ: () => h, R7: () => m, S3: () => A, VP: () => _, ni: () => g });
var i = n(110259),
    l = n(562465),
    s = n(933681),
    a = n(73153),
    r = n(253932),
    o = n(499785),
    d = n(252431),
    c = n(995273),
    u = n(652215);
function h(e) {
    a.h.dispatch({ type: "NOTIFICATION_CENTER_SET_ACTIVE", active: e });
}
function A() {
    a.h.dispatch({ type: "RESET_NOTIFICATION_CENTER" });
}
async function g(e, t) {
    if (d.A.loading) return;
    await a.h.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS" });
    let n = Math.ceil(d.A.items.length / e.limit);
    try {
        let l = await o.A.get({
            url: u.Rsh.NOTIF_CENTER_ITEMS(),
            trackedActionData: {
                event: i.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
                properties: (e) => {
                    let t = (e.body?.items || []).map((e) => e.type);
                    return (0, s.e0)({ page: n, items: t, item_count: t.length });
                },
            },
            query: { ...e },
            rejectWithError: !0,
        });
        t?.(),
            await a.h.dispatch({
                type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
                items: l.body.items,
                cursor: l.body.cursor,
                hasMore: l.body.has_more,
            });
    } catch (e) {
        t?.(), await a.h.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE" });
    }
}
function m(e) {
    var t, n;
    null != e.local_id
        ? ((t = [e.local_id]), a.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: t }))
        : (0, c.gk)(e)
          ? ((n = e.id), a.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: !0, ids: [n] }))
          : p(e.id);
}
async function p(e) {
    try {
        a.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: !0, ids: [e] }),
            await l.Bo.post({ url: u.Rsh.NOTIF_CENTER_ITEMS_ACK(e), rejectWithError: !0 });
    } catch (t) {
        a.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE", ids: [e] });
    }
}
async function _(e) {
    let t = r.ns.getSetting();
    try {
        a.h.dispatch({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id }),
            await o.A.delete({
                url: u.Rsh.NOTIF_CENTER_ITEMS(e.id),
                body: { item_type: (0, c.gk)(e) ? "mention" : "regular" },
                trackedActionData: {
                    event: i.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
                    properties: { notification_center_id: e.id, acked: (0, c.NW)(e, t), item_type: e.type },
                },
                rejectWithError: !1,
            });
    } catch (t) {
        throw (a.h.dispatch({ type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE", item: e }), t);
    }
}
