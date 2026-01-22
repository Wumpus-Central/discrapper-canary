n.d(t, {
    BZ: () => f,
    R7: () => b,
    S3: () => p,
    VP: () => m,
    ni: () => h,
});
var r = n(110259),
    l = n(562465),
    i = n(933681),
    a = n(73153),
    s = n(253932),
    o = n(499785),
    c = n(252431),
    u = n(995273),
    d = n(652215);

function f(e) {
    a.h.dispatch({
        type: "NOTIFICATION_CENTER_SET_ACTIVE",
        active: e,
    });
}

function p() {
    a.h.dispatch({
        type: "RESET_NOTIFICATION_CENTER",
    });
}
async function h(e, t) {
    if (c.A.loading) return;
    await a.h.dispatch({
        type: "LOAD_NOTIFICATION_CENTER_ITEMS",
    });
    let n = Math.ceil(c.A.items.length / e.limit);
    try {
        let l = await o.A.get({
            url: d.Rsh.NOTIF_CENTER_ITEMS(),
            trackedActionData: {
                event: r.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
                properties: (e) => {
                    var t;
                    let r = ((null == (t = e.body) ? void 0 : t.items) || []).map((e) => e.type);
                    return (0, i.e0)({
                        page: n,
                        items: r,
                        item_count: r.length,
                    });
                },
            },
            query: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e),
            rejectWithError: !0,
        });
        null == t || t(),
            await a.h.dispatch({
                type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
                items: l.body.items,
                cursor: l.body.cursor,
                hasMore: l.body.has_more,
            });
    } catch (e) {
        null == t || t(),
            await a.h.dispatch({
                type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE",
            });
    }
}

function b(e) {
    var t, n;
    null != e.local_id
        ? ((t = [e.local_id]),
          a.h.dispatch({
              type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK",
              localIds: t,
          }))
        : (0, u.gk)(e)
          ? ((n = e.id),
            a.h.dispatch({
                type: "NOTIFICATION_CENTER_ITEMS_ACK",
                optimistic: !0,
                ids: [n],
            }))
          : g(e.id);
}
async function g(e) {
    try {
        a.h.dispatch({
            type: "NOTIFICATION_CENTER_ITEMS_ACK",
            optimistic: !0,
            ids: [e],
        }),
            await l.Bo.post({
                url: d.Rsh.NOTIF_CENTER_ITEMS_ACK(e),
                rejectWithError: !0,
            });
    } catch (t) {
        a.h.dispatch({
            type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE",
            ids: [e],
        });
    }
}
async function m(e) {
    let t = s.ns.getSetting();
    try {
        a.h.dispatch({
            type: "NOTIFICATION_CENTER_ITEM_DELETE",
            id: e.id,
        }),
            await o.A.delete({
                url: d.Rsh.NOTIF_CENTER_ITEMS(e.id),
                body: {
                    item_type: (0, u.gk)(e) ? "mention" : "regular",
                },
                trackedActionData: {
                    event: r.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
                    properties: {
                        notification_center_id: e.id,
                        acked: (0, u.NW)(e, t),
                        item_type: e.type,
                    },
                },
                rejectWithError: !1,
            });
    } catch (t) {
        throw (
            (a.h.dispatch({
                type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE",
                item: e,
            }),
            t)
        );
    }
}
