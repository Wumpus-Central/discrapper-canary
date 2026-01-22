n.d(i, { default: () => o });
var e = n(627968);
n(64700);
var a = n(158954),
    l = n(397927),
    s = n(974875),
    r = n(985018);
function o(t) {
    let { channelId: i, messageId: n, onClose: o, transitionState: d } = t;
    return (0, e.jsx)(a.Modal, {
        transitionState: d,
        onClose: o,
        title: r.intl.string(r.t.B3vFdU),
        subtitle: r.intl.string(r.t.i4AbAS),
        actions: [
            {
                text: r.intl.string(r.t.WAI6xu),
                onClick: o,
            },
        ],
        children: (0, e.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: r.intl.format(r.t.Ge0HUi, {
                handleFalsePositiveHook: () => {
                    o(), (0, s.Q)(i, n);
                },
            }),
        }),
    });
}
