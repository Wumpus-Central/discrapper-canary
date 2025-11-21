n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    l = n(907862),
    a = n(703656),
    s = n(981631),
    o = n(388032),
    c = n(504707);
function u(e) {
    let { onNavigateToQuestHome: t, onRender: n, onRequestClose: u, targetElementRef: d } = e,
        p = i.useCallback(() => {
            t(), (0, a.uL)(s.Z5c.QUEST_HOME_V2);
        }, [t]);
    return (
        i.useEffect(() => {
            n();
        }, [n]),
        (0, r.jsx)(l.J2, {
            actions: [
                {
                    text: o.intl.string(o.t.facYnD),
                    variant: "primary",
                    onClick: p,
                },
            ],
            align: "top",
            body: o.intl.string(o.t.o4NGXc),
            caretConfig: { align: "start" },
            gradientColor: "purple",
            graphic: {
                type: "image",
                src: c.Z,
            },
            onRequestClose: u,
            position: "right",
            size: "lg",
            targetElementRef: d,
            title: o.intl.string(o.t.EDDchq),
        })
    );
}
