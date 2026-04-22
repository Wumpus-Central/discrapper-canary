"use strict";
n.d(t, { y: () => c });
var i = n(627968);
if ((n(64700), 21552 == n.j)) var r = n(821609);
if (21552 == n.j) var l = n(417098);
if (21552 == n.j) var s = n(477155);
var a = n(652215),
    o = n(22877);
function c(e) {
    let { buttonText: t, onGoBack: n, onDismiss: c, showCloseButton: u } = e;
    return (0, i.jsxs)(l.$T, {
        className: o.eR,
        children: [
            u && (0, i.jsx)(l.PM, { onClick: c, className: o.b, noticeType: a.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(r.$, { text: t, variant: "overlay-secondary", size: "sm", icon: s.r, onClick: n }),
        ],
    });
}
