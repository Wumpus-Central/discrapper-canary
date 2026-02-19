"use strict";
n.d(t, { BZ: () => h, R7: () => g, S3: () => A, VP: () => _, ni: () => p });
var i = n(110259),
    s = n(562465),
    l = n(933681),
    r = n(73153),
    a = n(253932),
    o = n(499785),
    c = n(252431),
    d = n(995273),
    u = n(652215);
function h(e) {
    r.h.dispatch({ type: "NOTIFICATION_CENTER_SET_ACTIVE", active: e });
}
function A() {
    r.h.dispatch({ type: "RESET_NOTIFICATION_CENTER" });
}
async function p(e, t) {
    if (c.A.loading) return;
    await r.h.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS" });
    let n = Math.ceil(c.A.items.length / e.limit);
    try {
        let s = await o.A.get({
            url: u.Rsh.NOTIF_CENTER_ITEMS(),
            trackedActionData: {
                event: i.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
                properties: (e) => {
                    let t = (e.body?.items || []).map((e) => e.type);
                    return (0, l.e0)({ page: n, items: t, item_count: t.length });
                },
            },
            query: { ...e },
            rejectWithError: !0,
        });
        t?.(),
            await r.h.dispatch({
                type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
                items: s.body.items,
                cursor: s.body.cursor,
                hasMore: s.body.has_more,
            });
    } catch (e) {
        t?.(), await r.h.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE" });
    }
}
function g(e) {
    var t, n;
    null != e.local_id
        ? ((t = [e.local_id]), r.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: t }))
        : (0, d.gk)(e)
          ? ((n = e.id), r.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: !0, ids: [n] }))
          : m(e.id);
}
async function m(e) {
    try {
        r.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: !0, ids: [e] }),
            await s.Bo.post({ url: u.Rsh.NOTIF_CENTER_ITEMS_ACK(e), rejectWithError: !0 });
    } catch (t) {
        r.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE", ids: [e] });
    }
}
async function _(e) {
    let t = a.ns.getSetting();
    try {
        r.h.dispatch({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id }),
            await o.A.delete({
                url: u.Rsh.NOTIF_CENTER_ITEMS(e.id),
                body: { item_type: (0, d.gk)(e) ? "mention" : "regular" },
                trackedActionData: {
                    event: i.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
                    properties: { notification_center_id: e.id, acked: (0, d.NW)(e, t), item_type: e.type },
                },
                rejectWithError: !1,
            });
    } catch (t) {
        throw (r.h.dispatch({ type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE", item: e }), t);
    }
}
