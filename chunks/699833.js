n.d(t, { i: () => f });
var r = n(255367);
n(73800);
var i = n(913527),
    o = n.n(i),
    a = n(692547),
    s = n(481060),
    l = n(800530),
    c = n(388032),
    u = n(524438);
let d = (e) => o()().diff(o().unix(e), "days");
function f(e) {
    var t, i, o, f, _;
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let p = e.message.embeds[0],
        h =
            null != (o = null == (t = p.fields) ? void 0 : t.find((e) => e.rawName === l.Cg.CLASSIFICATION_ID))
                ? o
                : void 0,
        m = null != (f = null == h ? void 0 : h.rawValue) ? f : void 0,
        g =
            null != (_ = null == (i = p.fields) ? void 0 : i.find((e) => e.rawName === l.Cg.INCIDENT_TIMESTAMP))
                ? _
                : void 0,
        E = null == g || null == g.rawValue ? void 0 : parseFloat(g.rawValue);
    if (null == m || null == E) return null;
    let b = () => {
        (0, s.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e("25183"), n.e("3940"), n.e("18831"), n.e("68464")]).then(
                n.bind(n, 41164),
            );
            return (t) =>
                (0, r.jsx)(e, {
                    classificationId: m,
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
                                color: a.Z.colors.STATUS_DANGER,
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/semibold",
                                children: c.intl.string(c.t["4CxGXl"]),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: u.incidentTiming,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            children: c.intl.format(c.t.eevFb2, { daysAgo: d(E) }),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: u.noticeBody,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: c.intl.string(c.t["5CLb0N"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u.footerContainer,
                children: (0, r.jsx)(s.Avr, {
                    text: c.intl.string(c.t.zKnzws),
                    variant: "secondary",
                }),
            }),
        ],
    });
}
