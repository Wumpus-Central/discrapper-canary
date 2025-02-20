n.d(t, { i: () => a });
var r = n(544891),
    i = n(881052),
    o = n(981631);
async function a(e, t) {
    try {
        await r.tn.patch({
            url: o.ANM.MY_CONTENT_INVENTORY_APPLICATION(e),
            body: t,
            rejectWithError: !1
        });
    } catch (e) {
        throw new i.Hx(e);
    }
}
