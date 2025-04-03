r.d(t, { N: () => o });
var n = r(544891),
    l = r(570140),
    a = r(981631);
async function o(e) {
    let t = await n.tn.get({
        url: a.ANM.STORE_EULA(e),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    l.Z.dispatch({
        type: 'EULA_FETCH_SUCCESS',
        eula: t.body
    });
}
