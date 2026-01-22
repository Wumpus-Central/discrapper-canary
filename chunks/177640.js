n.d(t, {
    A: () => a,
});
var r = n(417597),
    i = n(287809);

function a(e) {
    return (0, r.bG)([i.default], () => {
        var t;
        return (
            null != e &&
            e.isDM() &&
            1 === e.recipients.length &&
            (null == (t = i.default.getUser(e.recipients[0])) ? void 0 : t.bot) === !0
        );
    });
}
