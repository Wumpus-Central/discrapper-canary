n.d(t, { A: () => s });
var i = n(562465),
    l = n(449054),
    a = n(652215);
let s = (e) =>
    i.Bo.get({ url: a.Rsh.STICKER_GUILD_DATA(e), oldFormErrors: !0, rejectWithError: !0 })
        .then((e) => (e?.body != null ? (0, l.jE)(e.body) : null))
        .catch(() => null);
