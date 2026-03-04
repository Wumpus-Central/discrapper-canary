"use strict";
n.d(t, { y: () => o });
var i = n(627968);
n(64700);
var r = n(732955),
    l = n(397927),
    s = n(652215),
    a = n(321018);
function o(e) {
    let { buttonText: t, onGoBack: n, onDismiss: o, showCloseButton: E } = e;
    return (0, i.jsxs)(l.$Td, {
        className: a.eR,
        children: [
            E && (0, i.jsx)(l.PMB, { onClick: o, className: a.b, noticeType: s.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(r.$nd, { text: t, variant: "overlay-secondary", size: "sm", icon: l.rJJ, onClick: n }),
        ],
    });
}
