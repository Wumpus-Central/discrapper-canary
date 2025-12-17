t.d(n, { N: () => s });
var r = t(544891),
    a = t(570140),
    i = t(981631);
async function s(e) {
    let n = await r.tn.get({
        url: i.ANM.STORE_EULA(e),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    a.Z.dispatch({
        type: "EULA_FETCH_SUCCESS",
        eula: n.body,
    });
}
