n.d(t, { y: () => o });
var i = n(627968);
n(64700);
var l = n(732955),
    s = n(397927),
    a = n(652215),
    r = n(76400);
function o(e) {
    let { buttonText: t, onGoBack: n, onDismiss: o, showCloseButton: d } = e;
    return (0, i.jsxs)(s.$Td, {
        className: r.eR,
        children: [
            d && (0, i.jsx)(s.PMB, { onClick: o, className: r.b, noticeType: a.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(l.$nd, { text: t, variant: "overlay-secondary", size: "sm", icon: s.rJJ, onClick: n }),
        ],
    });
}
