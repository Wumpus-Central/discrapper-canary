r.d(n, {
    i: function () {
        return s;
    }
});
var i = r(544891),
    a = r(881052),
    o = r(981631);
async function s(e, n) {
    try {
        await i.tn.patch({
            url: o.ANM.MY_CONTENT_INVENTORY_APPLICATION(e),
            body: n,
            rejectWithError: !1
        });
    } catch (e) {
        throw new a.Hx(e);
    }
}
