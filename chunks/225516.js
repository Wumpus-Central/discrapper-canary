n.d(t, { N: () => o });
var l = n(544891),
    a = n(570140),
    i = n(881052),
    s = n(482207),
    r = n(981631);
async function o() {
    if (s.Z.shouldFetch) {
        a.Z.dispatch({ type: 'RECENT_AVATARS_FETCH_START' });
        try {
            let e = await l.tn.get({
                url: r.ANM.RECENT_AVATARS,
                rejectWithError: !0
            });
            a.Z.dispatch({
                type: 'RECENT_AVATARS_FETCH_SUCCESS',
                avatars: e.body.avatars.map((e) => {
                    let { storage_hash: t, ...n } = e;
                    return {
                        ...n,
                        storageHash: t
                    };
                })
            });
        } catch (e) {
            a.Z.dispatch({
                type: 'RECENT_AVATARS_FETCH_FAILURE',
                error: new i.Hx(e)
            });
        }
    }
}
