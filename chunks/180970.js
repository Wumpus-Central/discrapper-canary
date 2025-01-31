n.d(t, { default: () => m });
var l = n(200651),
    a = n(192379),
    i = n(481060),
    s = n(211266),
    r = n(332664),
    o = n(626135),
    c = n(900735),
    u = n(987562),
    d = n(981631),
    _ = n(388032);
function m(e) {
    let { onClose: t, transitionState: m } = e,
        x = (0, s.Z)(u.CE);
    a.useEffect(() => {
        o.default.track(d.rMx.OPEN_MODAL, { type: 'Block User Feedback' });
    }, []);
    let h = a.useCallback((e) => {
        let { rating: t, problem: a, feedback: s } = e,
            r = null == t;
        (0, c.t)(t, s, a, r),
            r ||
                (0, i.ZDy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, l.jsx)(e, {
                            body: _.intl.string(_.t['d9+vQ0']),
                            ...t
                        });
                });
    }, []);
    return (0, l.jsx)(r.Z, {
        modalType: 'block_user',
        header: _.intl.string(_.t['+2qQAQ']),
        body: _.intl.string(_.t['+0Rsvb']),
        problemTitle: _.intl.string(_.t.TXomWV),
        problems: x,
        feedbackProblems: [u.F5.SOMETHING_ELSE],
        onSubmit: h,
        onClose: t,
        transitionState: m,
        otherKey: u.F5.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowCheckbox: !0
    });
}
