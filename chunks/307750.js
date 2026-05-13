l.d(t, { default: () => h });
var n = l(627968),
    i = l(64700),
    s = l(192308),
    a = l(444927),
    o = l(612479),
    r = l(174459),
    d = l(988903),
    u = l(14594),
    b = l(652215),
    c = l(375708);
let p = [u.tF.SOMETHING_ELSE];
function h(e) {
    let { onClose: t, transitionState: h } = e,
        k = (0, a.A)(u.A4);
    i.useEffect(() => {
        r.default.track(b.HAw.OPEN_MODAL, { type: "Block User Feedback" });
    }, []);
    let f = i.useCallback((e) => {
        let { rating: t, problem: i, feedback: a } = e,
            o = null == t;
        (0, d.$b)(t, a, i?.value ?? null, o),
            o ||
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await l.e("37836").then(l.bind(l, 845671));
                    return (t) => (0, n.jsx)(e, { body: c.intl.string(c.t["d9+vQ8"]), ...t });
                });
    }, []);
    return (0, n.jsx)(o.A, {
        modalType: "block_user",
        header: c.intl.string(c.t["+2qQAX"]),
        body: c.intl.string(c.t["+0RsvT"]),
        problemTitle: c.intl.string(c.t.TXomWW),
        problems: k,
        freeformNeededProblems: p,
        onSubmit: f,
        onClose: t,
        transitionState: h,
        otherKey: u.tF.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
    });
}
