n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    l = n(342494),
    a = n(976860),
    s = n(652215),
    o = n(985018),
    c = n(78701);
function u(e) {
    let { onNavigateToQuestHome: t, onRender: n, onRequestClose: u, targetElementRef: d } = e,
        p = i.useCallback(() => {
            t(), (0, a.pX)(s.BVt.QUEST_HOME_V2);
        }, [t]);
    return (
        i.useEffect(() => {
            n();
        }, [n]),
        (0, r.jsx)(l.AM, {
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
                src: c.A,
            },
            onRequestClose: u,
            position: "right",
            size: "lg",
            targetElementRef: d,
            title: o.intl.string(o.t.EDDchq),
        })
    );
}
