n.d(t, { Z: () => r });
var i = n(544891),
    l = n(900849),
    a = n(981631);
let r = (e) =>
    i.tn
        .get({
            url: a.ANM.STICKER_GUILD_DATA(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then((e) => ((null == e ? void 0 : e.body) != null ? (0, l.PP)(e.body) : null))
        .catch(() => null);
