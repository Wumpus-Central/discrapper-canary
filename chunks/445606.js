n.d(t, { Z: () => a });
var r = n(54381),
    i = n(907862),
    l = n(388032),
    o = n(30399);
function a(e) {
    let {
        targetElementRef: t,
        onRequestClose: n,
        onActionClick: a,
        position: s = "right",
        align: c = "top",
        caretConfig: u = {
            align: "start",
            position: "top",
        },
    } = e;
    return (0, r.jsx)(i.J2, {
        size: "lg",
        shouldShow: !0,
        position: s,
        caretConfig: u,
        gradientColor: "purple",
        align: c,
        badge: {
            type: "new",
            variant: "default",
        },
        onRequestClose: n,
        actions: [
            {
                text: l.intl.string(l.t.RzWDqY),
                variant: "primary",
                onClick: a,
            },
        ],
        targetElementRef: t,
        title: l.intl.string(l.t.Ylu2JM),
        body: l.intl.string(l.t.vgylLQ),
        graphic: {
            type: "image",
            src: o.Z,
        },
    });
}
