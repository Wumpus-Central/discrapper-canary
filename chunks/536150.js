n.d(t, { i: () => o });
var r = n(544891),
    i = n(881052),
    a = n(981631);
async function o(e, t) {
    try {
        await r.tn.patch({
            url: a.ANM.MY_CONTENT_INVENTORY_APPLICATION(e),
            body: t,
            rejectWithError: !1
        });
    } catch (e) {
        throw new i.Hx(e);
    }
}
