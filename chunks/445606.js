n.d(t, { Z: () => o });
var r = n(54381),
    i = n(907862),
    l = n(388032);
function o(e) {
    let {
        targetElementRef: t,
        onRequestClose: n,
        onActionClick: o,
        position: a = "right",
        align: s = "top",
        caretConfig: c = {
            align: "start",
            position: "top",
        },
    } = e;
    return (0, r.jsx)(i.J2, {
        size: "lg",
        shouldShow: !0,
        position: a,
        caretConfig: c,
        gradientColor: "purple",
        align: s,
        badge: {
            type: "new",
            variant: "default",
        },
        onRequestClose: n,
        actions: [
            {
                text: l.intl.string(l.t.RzWDqY),
                variant: "primary",
                onClick: o,
            },
        ],
        targetElementRef: t,
        title: l.intl.string(l.t.Ylu2JM),
        body: l.intl.string(l.t.vgylLQ),
        graphic: void 0,
    });
}
