n.d(t, { y: () => l });
var r = n(627968);
n(64700);
var i = n(732955),
    a = n(397927),
    s = n(652215),
    o = n(321018);
function l(e) {
    let { buttonText: t, onGoBack: n, onDismiss: l, showCloseButton: c } = e;
    return (0, r.jsxs)(a.$Td, {
        className: o.eR,
        children: [
            c &&
                (0, r.jsx)(a.PMB, {
                    onClick: l,
                    className: o.b,
                    noticeType: s.kqX.BACK_TO_PREVIOUS_SCREEN,
                }),
            (0, r.jsx)(i.$nd, {
                text: t,
                variant: "overlay-secondary",
                size: "sm",
                icon: a.rJJ,
                onClick: n,
            }),
        ],
    });
}
