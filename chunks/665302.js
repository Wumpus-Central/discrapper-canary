n.d(t, { h: () => c });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    a = n(671533),
    o = n(981631),
    s = n(261496);
function c(e) {
    let { buttonText: t, onGoBack: n, onDismiss: c, showCloseButton: u } = e;
    return (0, r.jsxs)(l.qXd, {
        className: s.backNotice,
        children: [
            u &&
                (0, r.jsx)(l.RyX, {
                    onClick: c,
                    noticeType: o.kVF.BACK_TO_PREVIOUS_SCREEN
                }),
            (0, r.jsxs)(i.zx, {
                className: s.backButton,
                innerClassName: s.backButtonInner,
                look: i.zx.Looks.OUTLINED,
                color: i.zx.Colors.WHITE,
                size: i.zx.Sizes.NONE,
                onClick: n,
                children: [
                    (0, r.jsx)(a.Z, {
                        width: 16,
                        height: 16,
                        direction: a.Z.Directions.LEFT,
                        className: s.__invalid_backArrow
                    }),
                    t
                ]
            })
        ]
    });
}
