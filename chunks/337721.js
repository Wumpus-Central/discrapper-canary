n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(907862),
    l = n(434404),
    a = n(981631),
    s = n(921944),
    o = n(388032),
    c = n(930128);
function u(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: u } = e;
    return (0, r.jsx)(i.J2, {
        targetElementRef: u,
        title: o.intl.string(o.t.Hgd22r),
        body: o.intl.string(o.t.SorTPA),
        graphic: {
            type: "image",
            src: c,
        },
        actions: [
            {
                text: o.intl.string(o.t["9l+df7"]),
                variant: "primary",
                onClick: (e) => {
                    l.Z.open(t.id, a.pNK.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(s.L.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
