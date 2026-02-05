r.d(t, { default: () => m });
var o = r(627968),
    n = r(64700),
    i = r(397927),
    _ = r(444927),
    a = r(612479),
    s = r(954571),
    l = r(34550),
    c = r(14594),
    u = r(652215),
    d = r(985018);
let b = [c.tF.SOMETHING_ELSE];
function m(e) {
    let { onClose: t, transitionState: m } = e,
        E = (0, _.A)(c.A4);
    n.useEffect(() => {
        s.default.track(u.HAw.OPEN_MODAL, { type: "Block User Feedback" });
    }, []);
    let g = n.useCallback((e) => {
        let { rating: t, problem: n, feedback: _ } = e,
            a = null == t;
        (0, l.$b)(t, _, n?.value ?? null, a),
            a ||
                (0, i.mMO)(async () => {
                    let { default: e } = await r.e("37836").then(r.bind(r, 845671));
                    return (t) => (0, o.jsx)(e, { body: d.intl.string(d.t["d9+vQ8"]), ...t });
                });
    }, []);
    return (0, o.jsx)(a.A, {
        modalType: "block_user",
        header: d.intl.string(d.t["+2qQAX"]),
        body: d.intl.string(d.t["+0RsvT"]),
        problemTitle: d.intl.string(d.t.TXomWW),
        problems: E,
        freeformNeededProblems: b,
        onSubmit: g,
        onClose: t,
        transitionState: m,
        otherKey: c.tF.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
    });
}
