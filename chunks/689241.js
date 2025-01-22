n.d(e, {
    q: function () {
        return r;
    }
});
var s = n(544891),
    l = n(570140),
    i = n(173747),
    a = n(981631);
async function r(t, e, n, r) {
    if (!!i.Z.needsToFetchBuildSize(n)) {
        l.Z.dispatch({
            type: 'APPLICATION_BUILD_SIZE_FETCH_START',
            buildId: n
        });
        try {
            let i = await s.tn.post({
                url: a.ANM.APPLICATION_BUILD_SIZE(t, e, n),
                body: { manifest_ids: r },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'APPLICATION_BUILD_SIZE_FETCH_SUCCESS',
                buildId: n,
                sizeKB: i.body.size_kb
            });
        } catch (t) {
            l.Z.dispatch({
                type: 'APPLICATION_BUILD_SIZE_FETCH_FAIL',
                buildId: n
            });
        }
    }
}
