n.d(t, {
    h: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(671533),
    a = n(981631),
    o = n(43530);
function s(e) {
    let { buttonText: t, onGoBack: n, onDismiss: s, showCloseButton: c } = e;
    return (0, i.jsxs)(r.Notice, {
        className: o.backNotice,
        children: [
            c &&
                (0, i.jsx)(r.NoticeCloseButton, {
                    onClick: s,
                    noticeType: a.kVF.BACK_TO_PREVIOUS_SCREEN
                }),
            (0, i.jsxs)(r.Button, {
                className: o.backButton,
                innerClassName: o.backButtonInner,
                look: r.Button.Looks.OUTLINED,
                color: r.Button.Colors.WHITE,
                size: r.Button.Sizes.NONE,
                onClick: n,
                children: [
                    (0, i.jsx)(l.Z, {
                        width: 16,
                        height: 16,
                        direction: l.Z.Directions.LEFT,
                        className: o.__invalid_backArrow
                    }),
                    t
                ]
            })
        ]
    });
}
