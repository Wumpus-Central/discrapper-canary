r.d(n, {
    CV: function () {
        return f;
    },
    JX: function () {
        return d;
    },
    mt: function () {
        return c;
    },
    yK: function () {
        return p;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(881052),
    s = r(206583),
    l = r(981631),
    u = r(388032);
let c = async (e) => {
        let { token: n, feedId: r, feature: a } = e;
        try {
            let e = (
                    await i.tn.get({
                        url: l.ANM.MY_CONTENT_INVENTORY(n),
                        query: {
                            for_game_profile: r === s.YN.GAME_PROFILE_FEED,
                            feature: a
                        },
                        rejectWithError: !1
                    })
                ).body,
                o = e.wait_ms_until_next_fetch;
            if (null != o) {
                let n = new Date(Date.now() + o);
                e.expired_at = n.toISOString();
            }
            return e;
        } catch (e) {
            throw new o.Hx(e);
        }
    },
    d = async (e, n) => {
        try {
            a.Z.dispatch({
                type: 'CONTENT_INVENTORY_FETCH_OUTBOX_START',
                userId: e
            });
            let r = (
                await i.tn.get({
                    url: l.ANM.CONTENT_INVENTORY_OUTBOX(e),
                    signal: n,
                    rejectWithError: !1
                })
            ).body;
            return (
                a.Z.dispatch({
                    type: 'CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS',
                    outbox: r,
                    userId: e
                }),
                r
            );
        } catch (n) {
            throw (
                (a.Z.dispatch({
                    type: 'CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE',
                    userId: e
                }),
                new o.Hx(n))
            );
        }
    },
    f = async (e, n, r) => {
        try {
            a.Z.dispatch({ type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START' }),
                await i.tn.del({
                    url: l.ANM.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY(e.id),
                    rejectWithError: !1
                }),
                a.Z.dispatch({
                    type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS',
                    userId: n,
                    entry: e
                }),
                null == r || r();
        } catch (n) {
            var o, s;
            let e = null !== (s = null == n ? void 0 : null === (o = n.body) || void 0 === o ? void 0 : o.message) && void 0 !== s ? s : u.intl.string(u.t.FMbL3t);
            a.Z.dispatch({
                type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE',
                error: e
            });
        }
    };
async function p(e, n) {
    try {
        await i.tn.post({
            url: l.ANM.MY_SPOTIFY_CONTENT_INVENTORY,
            body: {
                connection_id: e,
                tracks: [n]
            },
            rejectWithError: !1
        });
    } catch (e) {
        throw new o.Hx(e);
    }
}
