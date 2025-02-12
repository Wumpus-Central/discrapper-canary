n.d(t, { h: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(671533),
    a = n(981631),
    s = n(636067);
function o(e) {
    let { buttonText: t, onGoBack: n, onDismiss: o, showCloseButton: c } = e;
    return (0, i.jsxs)(l.qXd, {
        className: s.backNotice,
        children: [
            c &&
                (0, i.jsx)(l.RyX, {
                    onClick: o,
                    noticeType: a.kVF.BACK_TO_PREVIOUS_SCREEN
                }),
            (0, i.jsxs)(l.zxk, {
                className: s.backButton,
                innerClassName: s.backButtonInner,
                look: l.zxk.Looks.OUTLINED,
                color: l.zxk.Colors.WHITE,
                size: l.zxk.Sizes.NONE,
                onClick: n,
                children: [
                    (0, i.jsx)(r.Z, {
                        width: 16,
                        height: 16,
                        direction: r.Z.Directions.LEFT,
                        className: s.__invalid_backArrow
                    }),
                    t
                ]
            })
        ]
    });
}
