n.d(t, { h: () => a });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(671533),
    o = n(981631),
    s = n(261496);
function a(e) {
    let { buttonText: t, onGoBack: n, onDismiss: a, showCloseButton: c } = e;
    return (0, i.jsxs)(r.qXd, {
        className: s.backNotice,
        children: [
            c &&
                (0, i.jsx)(r.RyX, {
                    onClick: a,
                    noticeType: o.kVF.BACK_TO_PREVIOUS_SCREEN
                }),
            (0, i.jsxs)(r.zxk, {
                className: s.backButton,
                innerClassName: s.backButtonInner,
                look: r.zxk.Looks.OUTLINED,
                color: r.zxk.Colors.WHITE,
                size: r.zxk.Sizes.NONE,
                onClick: n,
                children: [
                    (0, i.jsx)(l.Z, {
                        width: 16,
                        height: 16,
                        direction: l.Z.Directions.LEFT,
                        className: s.__invalid_backArrow
                    }),
                    t
                ]
            })
        ]
    });
}
