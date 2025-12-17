n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    l = n(907862),
    a = n(703656),
    o = n(981631),
    s = n(388032),
    c = n(332652);
function u(e) {
    let { onNavigateToQuestHome: t, onRender: n, onRequestClose: u, targetElementRef: d } = e,
        p = i.useCallback(() => {
            t(), (0, a.uL)(o.Z5c.QUEST_HOME_V2);
        }, [t]);
    return (
        i.useEffect(() => {
            n();
        }, [n]),
        (0, r.jsx)(l.J2, {
            actions: [
                {
                    text: s.intl.string(s.t.facYnD),
                    variant: "primary",
                    onClick: p,
                },
            ],
            align: "top",
            body: s.intl.string(s.t.o4NGXc),
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
            title: s.intl.string(s.t.EDDchq),
        })
    );
}
