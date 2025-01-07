n.r(t),
    n.d(t, {
        default: function () {
            return m;
        }
    });
var l = n(200651),
    a = n(192379),
    i = n(481060),
    r = n(211266),
    o = n(332664),
    s = n(626135),
    c = n(900735),
    u = n(987562),
    d = n(981631),
    b = n(388032);
function m(e) {
    let { onClose: t, transitionState: m } = e,
        f = (0, r.Z)(u.CE);
    a.useEffect(() => {
        s.default.track(d.rMx.OPEN_MODAL, { type: 'Block User Feedback' });
    }, []);
    let _ = a.useCallback((e) => {
        let { rating: t, problem: a, feedback: r } = e,
            o = null == t;
        (0, c.t)(t, r, a, o),
            !o &&
                (0, i.openModalLazy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, l.jsx)(e, {
                            body: b.intl.string(b.t['d9+vQ0']),
                            ...t
                        });
                });
    }, []);
    return (0, l.jsx)(o.Z, {
        modalType: 'block_user',
        header: b.intl.string(b.t['+2qQAQ']),
        body: b.intl.string(b.t['+0Rsvb']),
        problemTitle: b.intl.string(b.t.TXomWV),
        problems: f,
        feedbackProblems: [u.F5.SOMETHING_ELSE],
        onSubmit: _,
        onClose: t,
        transitionState: m,
        otherKey: u.F5.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowCheckbox: !0
    });
}
