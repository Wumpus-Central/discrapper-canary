n.d(t, {
    CV: () => d,
    JX: () => u,
    mt: () => c,
    yK: () => f
});
var r = n(544891),
    i = n(570140),
    o = n(881052),
    a = n(206583),
    s = n(981631),
    l = n(388032);
let c = async (e) => {
        let { token: t, feedId: n, feature: i } = e;
        try {
            let e = (
                    await r.tn.get({
                        url: s.ANM.MY_CONTENT_INVENTORY(t),
                        query: {
                            for_game_profile: n === a.YN.GAME_PROFILE_FEED,
                            feature: i
                        },
                        rejectWithError: !1
                    })
                ).body,
                o = e.wait_ms_until_next_fetch;
            return null != o && (e.expired_at = new Date(Date.now() + o).toISOString()), e;
        } catch (e) {
            throw new o.Hx(e);
        }
    },
    u = async (e, t) => {
        try {
            i.Z.dispatch({
                type: 'CONTENT_INVENTORY_FETCH_OUTBOX_START',
                userId: e
            });
            let n = (
                await r.tn.get({
                    url: s.ANM.CONTENT_INVENTORY_OUTBOX(e),
                    signal: t,
                    rejectWithError: !1
                })
            ).body;
            return (
                i.Z.dispatch({
                    type: 'CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS',
                    outbox: n,
                    userId: e
                }),
                n
            );
        } catch (t) {
            throw (
                (i.Z.dispatch({
                    type: 'CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE',
                    userId: e
                }),
                new o.Hx(t))
            );
        }
    },
    d = async (e, t, n) => {
        try {
            i.Z.dispatch({ type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START' }),
                await r.tn.del({
                    url: s.ANM.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY(e.id),
                    rejectWithError: !1
                }),
                i.Z.dispatch({
                    type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS',
                    userId: t,
                    entry: e
                }),
                null == n || n();
        } catch (t) {
            var o, a;
            let e = null != (a = null == t || null == (o = t.body) ? void 0 : o.message) ? a : l.NW.string(l.t.FMbL3t);
            i.Z.dispatch({
                type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE',
                error: e
            });
        }
    };
async function f(e, t) {
    try {
        await r.tn.post({
            url: s.ANM.MY_SPOTIFY_CONTENT_INVENTORY,
            body: {
                connection_id: e,
                tracks: [t]
            },
            rejectWithError: !1
        });
    } catch (e) {
        throw new o.Hx(e);
    }
}
