a.d(l, { A: () => o });
var t = a(627968),
    s = a(64700),
    i = a(265486),
    n = a(976860),
    c = a(652215),
    h = a(985018),
    r = a(78701);
function o(e) {
    let { onNavigateToQuestHome: l, onRender: a, onRequestClose: o, targetElementRef: d } = e,
        v = s.useCallback(() => {
            l(), (0, n.pX)(c.BVt.QUEST_HOME);
        }, [l]);
    return (
        s.useEffect(() => {
            a();
        }, [a]),
        (0, t.jsx)(i.A, {
            actions: [{ text: h.intl.string(h.t.facYnD), variant: "primary", onClick: v }],
            alignmentStrategy: "edge",
            align: "top",
            body: h.intl.string(h.t.o4NGXc),
            caretConfig: { align: "start" },
            gradientColor: "purple",
            graphic: { type: "image", src: r.A },
            onRequestClose: o,
            position: "right",
            size: "lg",
            targetElementRef: d,
            title: h.intl.string(h.t.EDDchq),
        })
    );
}
