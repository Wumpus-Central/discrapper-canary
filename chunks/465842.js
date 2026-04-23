s.d(e, { K: () => r });
var l = s(562465),
    a = s(73153),
    n = s(568004),
    i = s(652215);
async function r(t, e, s, r) {
    if (n.A.needsToFetchBuildSize(s)) {
        a.h.dispatch({ type: "APPLICATION_BUILD_SIZE_FETCH_START", buildId: s });
        try {
            let n = await l.Bo.post({
                url: i.Rsh.APPLICATION_BUILD_SIZE(t, e, s),
                body: { manifest_ids: r },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            a.h.dispatch({ type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS", buildId: s, sizeKB: n.body.size_kb });
        } catch (t) {
            a.h.dispatch({ type: "APPLICATION_BUILD_SIZE_FETCH_FAIL", buildId: s });
        }
    }
}
