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
        return _;
    }
});
var i = r(544891),
    a = r(570140),
    s = r(881052),
    o = r(206583),
    l = r(981631),
    u = r(388032);
let c = async (e) => {
        let { token: n, feedId: r, feature: a } = e;
        try {
            let e = (
                    await i.tn.get({
                        url: l.ANM.MY_CONTENT_INVENTORY(n),
                        query: {
                            for_game_profile: r === o.YN.GAME_PROFILE_FEED,
                            feature: a
                        },
                        rejectWithError: !1
                    })
                ).body,
                s = e.wait_ms_until_next_fetch;
            if (null != s) {
                let n = new Date(Date.now() + s);
                e.expired_at = n.toISOString();
            }
            return e;
        } catch (e) {
            throw new s.Hx(e);
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
                new s.Hx(n))
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
            var s, o;
            let e = null !== (o = null == n ? void 0 : null === (s = n.body) || void 0 === s ? void 0 : s.message) && void 0 !== o ? o : u.intl.string(u.t.FMbL3t);
            a.Z.dispatch({
                type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE',
                error: e
            });
        }
    };
async function _(e, n) {
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
        throw new s.Hx(e);
    }
}
