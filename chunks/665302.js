n.d(t, { h: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(671533),
    o = n(981631),
    a = n(261496);
function c(e) {
    let { buttonText: t, onGoBack: n, onDismiss: c, showCloseButton: s } = e;
    return (0, r.jsxs)(i.qXd, {
        className: a.backNotice,
        children: [
            s &&
                (0, r.jsx)(i.RyX, {
                    onClick: c,
                    noticeType: o.kVF.BACK_TO_PREVIOUS_SCREEN
                }),
            (0, r.jsxs)(i.zxk, {
                className: a.backButton,
                innerClassName: a.backButtonInner,
                look: i.zxk.Looks.OUTLINED,
                color: i.zxk.Colors.WHITE,
                size: i.zxk.Sizes.NONE,
                onClick: n,
                children: [
                    (0, r.jsx)(l.Z, {
                        width: 16,
                        height: 16,
                        direction: l.Z.Directions.LEFT,
                        className: a.__invalid_backArrow
                    }),
                    t
                ]
            })
        ]
    });
}
