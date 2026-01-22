n.d(t, { A: () => s });
var r = n(562465),
    i = n(449054),
    a = n(652215);
let s = (e) =>
    r.Bo.get({
        url: a.Rsh.STICKER_GUILD_DATA(e),
        oldFormErrors: !0,
        rejectWithError: !0,
    })
        .then((e) => ((null == e ? void 0 : e.body) != null ? (0, i.jE)(e.body) : null))
        .catch(() => null);
