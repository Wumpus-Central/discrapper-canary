n.d(t, { Z: () => s });
var r = n(54381),
    i = n(473749),
    l = n(907862),
    o = n(388032),
    a = n(30399);
function s(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: s,
        onActionClick: c,
        position: u = "right",
        align: d = "top",
        caretConfig: f = { align: "start" },
    } = e;
    return (
        i.useEffect(() => {
            null == n || n();
        }, [n]),
        (0, r.jsx)(l.J2, {
            size: "lg",
            shouldShow: !0,
            position: u,
            caretConfig: f,
            gradientColor: "purple",
            alignmentStrategy: "edge",
            align: d,
            badge: {
                type: "new",
                variant: "default",
            },
            onRequestClose: s,
            actions: [
                {
                    text: o.intl.string(o.t.RzWDqY),
                    variant: "primary",
                    onClick: c,
                },
            ],
            targetElementRef: t,
            title: o.intl.string(o.t.Ylu2JM),
            body: o.intl.string(o.t.vgylLQ),
            graphic: {
                type: "image",
                src: a.Z,
            },
        })
    );
}
