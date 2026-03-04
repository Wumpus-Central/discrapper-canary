n.d(t, { y: () => o });
var i = n(627968);
n(64700);
var l = n(732955),
    r = n(397927),
    a = n(652215),
    s = n(321018);
function o(e) {
    let { buttonText: t, onGoBack: n, onDismiss: o, showCloseButton: c } = e;
    return (0, i.jsxs)(r.$Td, {
        className: s.eR,
        children: [
            c && (0, i.jsx)(r.PMB, { onClick: o, className: s.b, noticeType: a.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(l.$nd, { text: t, variant: "overlay-secondary", size: "sm", icon: r.rJJ, onClick: n }),
        ],
    });
}
