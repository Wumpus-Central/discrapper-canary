n.d(t, {
    a: () => s,
});
var r = n(562465),
    i = n(198982),
    a = n(652215);
async function s(e, t) {
    try {
        await r.Bo.patch({
            url: a.Rsh.MY_CONTENT_INVENTORY_APPLICATION(e),
            body: t,
            rejectWithError: !1,
        });
    } catch (e) {
        throw new i.LG(e);
    }
}
