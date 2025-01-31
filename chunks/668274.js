t.d(n, { N: () => o });
var r = t(544891),
    l = t(570140),
    a = t(981631);
async function o(e) {
    let n = await r.tn.get({
        url: a.ANM.STORE_EULA(e),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    l.Z.dispatch({
        type: 'EULA_FETCH_SUCCESS',
        eula: n.body
    });
}
