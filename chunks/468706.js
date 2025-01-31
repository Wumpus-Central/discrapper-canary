n.d(t, { e: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(240872),
    r = n(923500),
    s = n(247206),
    o = n(774863),
    c = n(388032);
function d(e, t) {
    if (
        ((0, s.aP)({
            action: s.Yy.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
            messageId: t,
            channelId: e
        }),
        !o.Z.canSubmitFpReport(t))
    ) {
        a.Z.show({
            title: c.intl.string(c.t['iS/eFB']),
            body: c.intl.string(c.t.YrjcgY),
            confirmText: c.intl.string(c.t.BddRzc)
        }),
            r.Z.disableFalsePositiveButton(e, t);
        return;
    }
    (0, l.ZDy)(async () => {
        let { default: l } = await n(773276);
        return (n) =>
            (0, i.jsx)(l, {
                channelId: e,
                messageId: t,
                ...n
            });
    });
}
