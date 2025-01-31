n.d(t, {
    CV: () => d,
    JX: () => c,
    mt: () => u,
    yK: () => f
});
var i = n(544891),
    r = n(570140),
    a = n(881052),
    s = n(206583),
    o = n(981631),
    l = n(388032);
let u = async (e) => {
        let { token: t, feedId: n, feature: r } = e;
        try {
            let e = (
                    await i.tn.get({
                        url: o.ANM.MY_CONTENT_INVENTORY(t),
                        query: {
                            for_game_profile: n === s.YN.GAME_PROFILE_FEED,
                            feature: r
                        },
                        rejectWithError: !1
                    })
                ).body,
                a = e.wait_ms_until_next_fetch;
            if (null != a) {
                let t = new Date(Date.now() + a);
                e.expired_at = t.toISOString();
            }
            return e;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    c = async (e, t) => {
        try {
            r.Z.dispatch({
                type: 'CONTENT_INVENTORY_FETCH_OUTBOX_START',
                userId: e
            });
            let n = (
                await i.tn.get({
                    url: o.ANM.CONTENT_INVENTORY_OUTBOX(e),
                    signal: t,
                    rejectWithError: !1
                })
            ).body;
            return (
                r.Z.dispatch({
                    type: 'CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS',
                    outbox: n,
                    userId: e
                }),
                n
            );
        } catch (t) {
            throw (
                (r.Z.dispatch({
                    type: 'CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE',
                    userId: e
                }),
                new a.Hx(t))
            );
        }
    },
    d = async (e, t, n) => {
        try {
            r.Z.dispatch({ type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START' }),
                await i.tn.del({
                    url: o.ANM.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY(e.id),
                    rejectWithError: !1
                }),
                r.Z.dispatch({
                    type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS',
                    userId: t,
                    entry: e
                }),
                null == n || n();
        } catch (t) {
            var a, s;
            let e = null !== (s = null == t ? void 0 : null === (a = t.body) || void 0 === a ? void 0 : a.message) && void 0 !== s ? s : l.intl.string(l.t.FMbL3t);
            r.Z.dispatch({
                type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE',
                error: e
            });
        }
    };
async function f(e, t) {
    try {
        await i.tn.post({
            url: o.ANM.MY_SPOTIFY_CONTENT_INVENTORY,
            body: {
                connection_id: e,
                tracks: [t]
            },
            rejectWithError: !1
        });
    } catch (e) {
        throw new a.Hx(e);
    }
}
