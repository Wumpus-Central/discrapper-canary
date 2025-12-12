n.d(t, { Z: () => s });
var r = n(54381),
    i = n(473749),
    l = n(907862),
    a = n(388032),
    o = n(993516);
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
                    text: a.intl.string(a.t.RzWDqY),
                    variant: "primary",
                    onClick: c,
                },
            ],
            targetElementRef: t,
            title: a.intl.string(a.t.Ylu2JM),
            body: a.intl.string(a.t.vgylLQ),
            graphic: {
                type: "image",
                src: o.Z,
            },
        })
    );
}
