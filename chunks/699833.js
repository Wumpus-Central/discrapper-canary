n.d(t, { i: () => f });
var r = n(54381);
n(473749);
var i = n(913527),
    a = n.n(i),
    o = n(692547),
    s = n(481060),
    l = n(800530),
    c = n(388032),
    u = n(832467);
let d = (e) => a()().diff(a().unix(e), "days");
function f(e) {
    var t, i, a, f, p;
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let _ = e.message.embeds[0],
        m =
            null != (a = null == (t = _.fields) ? void 0 : t.find((e) => e.rawName === l.Cg.CLASSIFICATION_ID))
                ? a
                : void 0,
        h = null != (f = null == m ? void 0 : m.rawValue) ? f : void 0,
        g =
            null != (p = null == (i = _.fields) ? void 0 : i.find((e) => e.rawName === l.Cg.INCIDENT_TIMESTAMP))
                ? p
                : void 0,
        E = null == g || null == g.rawValue ? void 0 : parseFloat(g.rawValue);
    if (null == h || null == E) return null;
    let b = () => {
        (0, s.ZDy)(async () => {
            let { default: e } = await n.e("18831").then(n.bind(n, 41164));
            return (t) =>
                (0, r.jsx)(e, {
                    classificationId: h,
                    source: l.s.SystemDM,
                    transitionState: t.transitionState,
                    onClose: t.onClose,
                });
        });
    };
    return (0, r.jsxs)(s.P3F, {
        onClick: b,
        className: u.safetyPolicyNoticeContainer,
        children: [
            (0, r.jsxs)("div", {
                className: u.noticeContent,
                children: [
                    (0, r.jsxs)("div", {
                        className: u.headerRow,
                        children: [
                            (0, r.jsx)(s.aNP, {
                                className: u.warningIcon,
                                color: o.Z.colors.STATUS_DANGER,
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/semibold",
                                children: c.intl.string(c.t["4CxGXi"]),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: u.incidentTiming,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            children: c.intl.format(c.t.eevFb6, { daysAgo: d(E) }),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: u.noticeBody,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: c.intl.string(c.t["5CLb0A"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u.footerContainer,
                children: (0, r.jsx)(s.Avr, {
                    text: c.intl.string(c.t.zKnzwm),
                    variant: "secondary",
                }),
            }),
        ],
    });
}
