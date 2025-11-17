n.d(t, { h: () => l });
var r = n(54381);
n(473749);
var i = n(159691),
    a = n(481060),
    o = n(981631),
    s = n(496526);
function l(e) {
    let { buttonText: t, onGoBack: n, onDismiss: l, showCloseButton: c } = e;
    return (0, r.jsxs)(a.qXd, {
        className: s.backNotice,
        children: [
            c &&
                (0, r.jsx)(a.RyX, {
                    onClick: l,
                    className: s.closeButton,
                    noticeType: o.kVF.BACK_TO_PREVIOUS_SCREEN,
                }),
            (0, r.jsx)(i.zxk, {
                text: t,
                variant: "overlay-secondary",
                size: "sm",
                icon: a.whL,
                onClick: n,
            }),
        ],
    });
}
