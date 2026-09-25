n.d(i, { default: () => o });
var e = n(477900);
n(582128);
var a = n(189213),
    s = n(834730),
    l = n(974875),
    r = n(375708);
function o(t) {
    let { channelId: i, messageId: n, onClose: o, transitionState: d } = t;
    return (0, e.jsx)(a.a, {
        transitionState: d,
        onClose: o,
        title: r.intl.string(r.t.B3vFdU),
        subtitle: r.intl.string(r.t.i4AbAS),
        actions: [{ text: r.intl.string(r.t.WAI6xu), onClick: o }],
        children: (0, e.jsx)(s.E, {
            variant: "text-md/normal",
            color: "text-default",
            children: r.intl.format(r.t.Ge0HUi, {
                handleFalsePositiveHook: () => {
                    (o(), (0, l.Q)(i, n));
                },
            }),
        }),
    });
}
