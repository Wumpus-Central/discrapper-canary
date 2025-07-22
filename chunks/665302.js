n.d(t, { h: () => c });
var i = n(255367);
n(73800);
var r = n(755721),
    l = n(481060),
    o = n(671533),
    s = n(981631),
    a = n(261496);
function c(e) {
    let { buttonText: t, onGoBack: n, onDismiss: c, showCloseButton: u } = e;
    return (0, i.jsxs)(l.qXd, {
        className: a.backNotice,
        children: [
            u &&
                (0, i.jsx)(l.RyX, {
                    onClick: c,
                    noticeType: s.kVF.BACK_TO_PREVIOUS_SCREEN
                }),
            (0, i.jsxs)(r.zx, {
                className: a.backButton,
                innerClassName: a.backButtonInner,
                look: r.zx.Looks.OUTLINED,
                color: r.zx.Colors.WHITE,
                size: r.zx.Sizes.NONE,
                onClick: n,
                children: [
                    (0, i.jsx)(o.Z, {
                        width: 16,
                        height: 16,
                        direction: o.Z.Directions.LEFT,
                        className: a.__invalid_backArrow
                    }),
                    t
                ]
            })
        ]
    });
}
