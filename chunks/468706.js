n.d(t, {
    e: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(240872),
    a = n(923500),
    o = n(247206),
    s = n(774863),
    c = n(388032);
function d(e, t) {
    if (
        ((0, o.aP)({
            action: o.Yy.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
            messageId: t,
            channelId: e
        }),
        !s.Z.canSubmitFpReport(t))
    ) {
        l.Z.show({
            title: c.intl.string(c.t['iS/eFB']),
            body: c.intl.string(c.t.YrjcgY),
            confirmText: c.intl.string(c.t.BddRzc)
        }),
            a.Z.disableFalsePositiveButton(e, t);
        return;
    }
    (0, r.openModalLazy)(async () => {
        let { default: r } = await n(773276);
        return (n) =>
            (0, i.jsx)(r, {
                channelId: e,
                messageId: t,
                ...n
            });
    });
}
