t.d(e, { N: () => s });
var a = t(544891),
    i = t(570140),
    r = t(981631);
async function s(n) {
    let e = await a.tn.get({
        url: r.ANM.STORE_EULA(n),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    i.Z.dispatch({
        type: "EULA_FETCH_SUCCESS",
        eula: e.body,
    });
}
