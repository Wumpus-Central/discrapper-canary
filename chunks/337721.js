n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(907862),
    l = n(434404),
    a = n(981631),
    o = n(921944),
    s = n(388032),
    c = n(930128);
function u(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: u } = e;
    return (0, r.jsx)(i.J2, {
        targetElementRef: u,
        title: s.intl.string(s.t.Hgd22r),
        body: s.intl.string(s.t.SorTPA),
        graphic: {
            type: "image",
            src: c,
        },
        actions: [
            {
                text: s.intl.string(s.t["9l+df7"]),
                variant: "primary",
                onClick: (e) => {
                    l.Z.open(t.id, a.pNK.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(o.L.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
