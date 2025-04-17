n.d(t, { Z: () => a });
var r = n(544891),
    i = n(900849),
    l = n(981631);
let a = (e) =>
    r.tn
        .get({
            url: l.ANM.STICKER_GUILD_DATA(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then((e) => ((null == e ? void 0 : e.body) != null ? (0, i.PP)(e.body) : null))
        .catch(() => null);
