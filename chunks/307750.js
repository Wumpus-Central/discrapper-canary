r.d(t, { default: () => g });
var o = r(627968),
    a = r(64700),
    l = r(192308),
    n = r(444927),
    i = r(612479),
    s = r(954571),
    d = r(34550),
    u = r(14594),
    c = r(652215),
    _ = r(985018);
let b = [u.tF.SOMETHING_ELSE];
function g(e) {
    let { onClose: t, transitionState: g } = e,
        m = (0, n.A)(u.A4);
    a.useEffect(() => {
        s.default.track(c.HAw.OPEN_MODAL, { type: "Block User Feedback" });
    }, []);
    let p = a.useCallback((e) => {
        let { rating: t, problem: a, feedback: n } = e,
            i = null == t;
        (0, d.$b)(t, n, a?.value ?? null, i),
            i ||
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await r.e("37836").then(r.bind(r, 845671));
                    return (t) => (0, o.jsx)(e, { body: _.intl.string(_.t["d9+vQ8"]), ...t });
                });
    }, []);
    return (0, o.jsx)(i.A, {
        modalType: "block_user",
        header: _.intl.string(_.t["+2qQAX"]),
        body: _.intl.string(_.t["+0RsvT"]),
        problemTitle: _.intl.string(_.t.TXomWW),
        problems: m,
        freeformNeededProblems: b,
        onSubmit: p,
        onClose: t,
        transitionState: g,
        otherKey: u.tF.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
    });
}
