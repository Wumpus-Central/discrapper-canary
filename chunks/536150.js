n.d(t, { i: () => s });
var i = n(544891),
    r = n(881052),
    a = n(981631);
async function s(e, t) {
    try {
        await i.tn.patch({
            url: a.ANM.MY_CONTENT_INVENTORY_APPLICATION(e),
            body: t,
            rejectWithError: !1
        });
    } catch (e) {
        throw new r.Hx(e);
    }
}
