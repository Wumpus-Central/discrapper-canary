(n.d(t, { AX: () => _, GY: () => A, cf: () => d, oN: () => o }), n(134528), n(947204));
var i = n(636537),
    r = n(73153),
    a = n(85109),
    s = n(756377),
    l = n(652215);
async function o(e) {
    let t = await i.Bo.put({
        url: l.Rsh.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
        body: { due_at: e.dueAt, source: e.source },
        rejectWithError: (0, i.fT)(),
    });
    return (0, s.iz)(t.body);
}
async function d(e) {
    return (
        await i.Bo.del({ url: l.Rsh.DELETE_SAVED_MESSAGE(e.channelId, e.messageId), rejectWithError: (0, i.fT)() }), !0
    );
}
let c = null,
    u = 0;
function _() {
    return a.A.getIsStale()
        ? (c ??= E().finally(() => {
              c = null;
          }))
        : Promise.resolve();
}
async function E() {
    let e;
    try {
        e = await i.Bo.get({
            url: l.Rsh.GET_SAVED_MESSAGES,
            query: { bookmark_ids: !0 },
            rejectWithError: (0, i.fT)(),
        });
    } catch {
        await r.h.dispatch({ type: "SAVED_MESSAGES_UPDATE", reminders: [], bookmarkIds: [] });
        return;
    }
    let t = e.body;
    await r.h.dispatch({
        type: "SAVED_MESSAGES_UPDATE",
        reminders: t.reminders.map(s.iz),
        bookmarkIds: t.bookmark_ids,
    });
}
async function A() {
    let e,
        { loadMore: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (
        (await c,
        !(function (e) {
            switch (a.A.getBookmarksFetchState()) {
                case s.Z7.FAILED:
                    return !0;
                case s.Z7.LOADING:
                case s.Z7.LOADED_FINISHED:
                    return !1;
                case s.Z7.LOADED_HAS_MORE:
                    return e || !a.A.hasFetchedBookmarks();
            }
        })(t))
    )
        return;
    let n = a.A.getBookmarksCursor(),
        o = ++u;
    r.h.dispatch({ type: "BOOKMARKS_FETCH", requestId: o });
    try {
        e = await i.Bo.get({
            url: l.Rsh.GET_BOOKMARKS,
            query: { before: n ?? void 0, limit: 25 },
            retries: 2,
            rejectWithError: (0, i.fT)(),
        });
    } catch {
        r.h.dispatch({ type: "BOOKMARKS_FETCH_FAILURE", requestId: o });
        return;
    }
    let d = e.body;
    r.h.dispatch({
        type: "BOOKMARKS_FETCH_SUCCESS",
        requestId: o,
        nextBefore: d.results.at(-1)?.save_data.saved_at ?? n,
        bookmarks: d.results.map(s.iz),
        hasMore: d.has_more,
    });
}
