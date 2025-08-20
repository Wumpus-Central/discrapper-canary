t.d(n, { N: () => s });
var r = t(544891),
    i = t(570140),
    a = t(981631);
async function s(e) {
    let n = await r.tn.get({
        url: a.ANM.STORE_EULA(e),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    i.Z.dispatch({
        type: "EULA_FETCH_SUCCESS",
        eula: n.body,
    });
}
