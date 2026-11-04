(n(134528), n(947204));
var i = n(620632),
    r = n(73153),
    a = n(85109),
    s = n(756377),
    l = n(652215);
let o = null,
    d = 0;
n.d(
    t,
    {},
    {
        AX: function () {
            return a.A.getIsStale()
                ? (o ??= (async function () {
                      let e;
                      try {
                          e = await i.Bo.get({
                              url: l.Rsh.GET_SAVED_MESSAGES,
                              query: { bookmark_ids: !0 },
                              rejectWithError: (0, i.fT)(),
                          });
                      } catch {
                          await r.h.dispatch({
                              type: "SAVED_MESSAGES_UPDATE",
                              reminders: [],
                              bookmarkIds: [],
                              messages: [],
                          });
                          return;
                      }
                      let t = e.body;
                      await r.h.dispatch({
                          type: "SAVED_MESSAGES_UPDATE",
                          reminders: t.reminders.map(s.iz),
                          bookmarkIds: t.bookmark_ids,
                          messages: (0, s.wX)(t.reminders),
                      });
                  })().finally(() => {
                      o = null;
                  }))
                : Promise.resolve();
        },
        GY: async function () {
            let e,
                { loadMore: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (
                (await o,
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
                c = ++d;
            r.h.dispatch({ type: "BOOKMARKS_FETCH", requestId: c });
            try {
                e = await i.Bo.get({
                    url: l.Rsh.GET_BOOKMARKS,
                    query: { before: n ?? void 0, limit: 25 },
                    retries: 2,
                    rejectWithError: (0, i.fT)(),
                });
            } catch {
                r.h.dispatch({ type: "BOOKMARKS_FETCH_FAILURE", requestId: c });
                return;
            }
            let u = e.body;
            r.h.dispatch({
                type: "BOOKMARKS_FETCH_SUCCESS",
                requestId: c,
                nextBefore: u.results.at(-1)?.save_data.saved_at ?? n,
                bookmarks: u.results.map(s.iz),
                hasMore: u.has_more,
                messages: (0, s.wX)(u.results),
            });
        },
        cf: async function (e) {
            return (
                await i.Bo.del({
                    url: l.Rsh.DELETE_SAVED_MESSAGE(e.channelId, e.messageId),
                    rejectWithError: (0, i.fT)(),
                }),
                !0
            );
        },
        oN: async function (e) {
            let t = await i.Bo.put({
                url: l.Rsh.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
                body: { due_at: e.dueAt, source: e.source },
                rejectWithError: (0, i.fT)(),
            });
            return (0, s.iz)(t.body);
        },
    },
);
