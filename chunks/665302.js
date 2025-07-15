n.d(t, { h: () => s });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    a = n(671533),
    o = n(981631),
    c = n(261496);
function s(e) {
    let { buttonText: t, onGoBack: n, onDismiss: s, showCloseButton: u } = e;
    return (0, r.jsxs)(l.qXd, {
        className: c.backNotice,
        children: [
            u &&
                (0, r.jsx)(l.RyX, {
                    onClick: s,
                    noticeType: o.kVF.BACK_TO_PREVIOUS_SCREEN
                }),
            (0, r.jsxs)(i.zx, {
                className: c.backButton,
                innerClassName: c.backButtonInner,
                look: i.zx.Looks.OUTLINED,
                color: i.zx.Colors.WHITE,
                size: i.zx.Sizes.NONE,
                onClick: n,
                children: [
                    (0, r.jsx)(a.Z, {
                        width: 16,
                        height: 16,
                        direction: a.Z.Directions.LEFT,
                        className: c.__invalid_backArrow
                    }),
                    t
                ]
            })
        ]
    });
}
