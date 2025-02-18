n.d(t, { default: () => b });
var a = n(200651),
    s = n(192379),
    l = n(481060),
    o = n(211266),
    i = n(332664),
    r = n(626135),
    c = n(900735),
    u = n(987562),
    d = n(981631),
    _ = n(388032);
let m = [u.F5.SOMETHING_ELSE];
function b(e) {
    let { onClose: t, transitionState: b } = e,
        x = (0, o.Z)(u.CE);
    s.useEffect(() => {
        r.default.track(d.rMx.OPEN_MODAL, { type: 'Block User Feedback' });
    }, []);
    let h = s.useCallback((e) => {
        let { rating: t, problem: s, feedback: o } = e,
            i = null == t;
        (0, c.t)(t, o, s, i),
            i ||
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, a.jsx)(e, {
                            body: _.NW.string(_.t['d9+vQ0']),
                            ...t
                        });
                });
    }, []);
    return (0, a.jsx)(i.Z, {
        modalType: 'block_user',
        header: _.NW.string(_.t['+2qQAQ']),
        body: _.NW.string(_.t['+0Rsvb']),
        problemTitle: _.NW.string(_.t.TXomWV),
        problems: x,
        freeformNeededProblems: m,
        onSubmit: h,
        onClose: t,
        transitionState: b,
        otherKey: u.F5.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowCheckbox: !0
    });
}
