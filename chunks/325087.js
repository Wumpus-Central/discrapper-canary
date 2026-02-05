n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    a = n(342494),
    l = n(976860),
    s = n(652215),
    o = n(985018),
    d = n(78701);
function c(e) {
    let { onNavigateToQuestHome: t, onRender: n, onRequestClose: c, targetElementRef: u } = e,
        A = r.useCallback(() => {
            t(), (0, l.pX)(s.BVt.QUEST_HOME_V2);
        }, [t]);
    return (
        r.useEffect(() => {
            n();
        }, [n]),
        (0, i.jsx)(a.AM, {
            actions: [{ text: o.intl.string(o.t.facYnD), variant: "primary", onClick: A }],
            align: "top",
            body: o.intl.string(o.t.o4NGXc),
            caretConfig: { align: "start" },
            gradientColor: "purple",
            graphic: { type: "image", src: d.A },
            onRequestClose: c,
            position: "right",
            size: "lg",
            targetElementRef: u,
            title: o.intl.string(o.t.EDDchq),
        })
    );
}
