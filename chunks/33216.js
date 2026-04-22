n.d(e, { default: () => o });
var i = n(627968);
n(64700);
var a = n(189213),
    l = n(834730),
    s = n(974875),
    r = n(985018);
function o(t) {
    let { channelId: e, messageId: n, onClose: o, transitionState: c } = t;
    return (0, i.jsx)(a.Modal, {
        transitionState: c,
        onClose: o,
        title: r.intl.string(r.t.B3vFdU),
        subtitle: r.intl.string(r.t.i4AbAS),
        actions: [{ text: r.intl.string(r.t.WAI6xu), onClick: o }],
        children: (0, i.jsx)(l.E, {
            variant: "text-md/normal",
            color: "text-default",
            children: r.intl.format(r.t.Ge0HUi, {
                handleFalsePositiveHook: () => {
                    o(), (0, s.Q)(e, n);
                },
            }),
        }),
    });
}
