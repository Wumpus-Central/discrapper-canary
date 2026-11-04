var n = l(477900),
    i = l(582128),
    s = l(192308),
    r = l(444927),
    a = l(612479),
    o = l(129230),
    d = l(813393),
    u = l(14594),
    b = l(652215),
    c = l(792996);
let h = [u.tF.SOMETHING_ELSE];
l.d(
    t,
    {},
    {
        default: function (e) {
            let { onClose: t, transitionState: k } = e,
                p = (0, r.A)(u.A4);
            i.useEffect(() => {
                o.default.track(b.HAw.OPEN_MODAL, { type: "Block User Feedback" });
            }, []);
            let f = i.useCallback((e) => {
                let { rating: t, problem: i, feedback: r } = e,
                    a = null == t;
                ((0, d.$b)(t, r, i?.value ?? null, a),
                    a ||
                        (0, s.mM)(async () => {
                            let { default: e } = await l.e(137836).then(l.bind(l, 845671));
                            return (t) => (0, n.jsx)(e, { body: c.intl.string(c.t["d9+vQ8"]), ...t });
                        }));
            }, []);
            return (0, n.jsx)(a.A, {
                modalType: "block_user",
                header: c.intl.string(c.t["+2qQAX"]),
                body: c.intl.string(c.t["+0RsvT"]),
                problemTitle: c.intl.string(c.t.TXomWW),
                problems: p,
                freeformNeededProblems: h,
                onSubmit: f,
                onClose: t,
                transitionState: k,
                otherKey: u.tF.SOMETHING_ELSE,
                hideHelpDeskLink: !0,
                hideDontShowAgainCheckbox: !0,
            });
        },
    },
);
