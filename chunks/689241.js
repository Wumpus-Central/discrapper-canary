s.d(e, { q: () => r });
var l = s(544891),
    n = s(570140),
    a = s(173747),
    i = s(981631);
async function r(t, e, s, r) {
    if (a.Z.needsToFetchBuildSize(s)) {
        n.Z.dispatch({
            type: 'APPLICATION_BUILD_SIZE_FETCH_START',
            buildId: s
        });
        try {
            let a = await l.tn.post({
                url: i.ANM.APPLICATION_BUILD_SIZE(t, e, s),
                body: { manifest_ids: r },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            n.Z.dispatch({
                type: 'APPLICATION_BUILD_SIZE_FETCH_SUCCESS',
                buildId: s,
                sizeKB: a.body.size_kb
            });
        } catch (t) {
            n.Z.dispatch({
                type: 'APPLICATION_BUILD_SIZE_FETCH_FAIL',
                buildId: s
            });
        }
    }
}
