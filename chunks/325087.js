n.d(t, { A: () => c });
var i = n(627968),
    a = n(64700),
    l = n(342494),
    r = n(976860),
    s = n(652215),
    o = n(985018),
    d = n(78701);
function c(e) {
    let { onNavigateToQuestHome: t, onRender: n, onRequestClose: c, targetElementRef: u } = e,
        A = a.useCallback(() => {
            t(), (0, r.pX)(s.BVt.QUEST_HOME);
        }, [t]),
        [h, _] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e = setTimeout(() => {
                _(!0), n();
            }, 1e3);
            return () => clearTimeout(e);
        }, [n]),
        (0, i.jsx)(l.AM, {
            actions: [{ text: o.intl.string(o.t.facYnD), variant: "primary", onClick: A }],
            align: "top",
            body: o.intl.string(o.t.o4NGXc),
            caretConfig: { align: "start" },
            gradientColor: "purple",
            graphic: { type: "image", src: d.A },
            onRequestClose: c,
            shouldShow: h,
            position: "right",
            size: "lg",
            targetElementRef: u,
            title: o.intl.string(o.t.EDDchq),
        })
    );
}
