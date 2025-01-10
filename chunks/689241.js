n.d(t, {
    q: function () {
        return r;
    }
});
var l = n(544891),
    s = n(570140),
    i = n(173747),
    a = n(981631);
async function r(e, t, n, r) {
    if (!!i.Z.needsToFetchBuildSize(n)) {
        s.Z.dispatch({
            type: 'APPLICATION_BUILD_SIZE_FETCH_START',
            buildId: n
        });
        try {
            let i = await l.tn.post({
                url: a.ANM.APPLICATION_BUILD_SIZE(e, t, n),
                body: { manifest_ids: r },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            s.Z.dispatch({
                type: 'APPLICATION_BUILD_SIZE_FETCH_SUCCESS',
                buildId: n,
                sizeKB: i.body.size_kb
            });
        } catch (e) {
            s.Z.dispatch({
                type: 'APPLICATION_BUILD_SIZE_FETCH_FAIL',
                buildId: n
            });
        }
    }
}
