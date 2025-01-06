t.d(n, {
    C: function () {
        return a;
    }
});
var i = t(544891),
    l = t(405222),
    r = t(981631);
async function a(e) {
    let n = await i.tn.get({
        url: r.ANM.GUILD_PROFILE(e),
        rejectWithError: !1
    });
    return (0, l.x)(n.body);
}
