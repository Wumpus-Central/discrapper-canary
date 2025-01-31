n.d(l, { C: () => s });
var i = n(544891),
    t = n(405222),
    a = n(981631);
async function s(e) {
    let l = await i.tn.get({
        url: a.ANM.GUILD_PROFILE(e),
        rejectWithError: !1
    });
    return (0, t.x)(l.body);
}
