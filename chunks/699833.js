n.d(t, { i: () => _ });
var r = n(255367);
n(73800);
var i = n(913527),
    a = n.n(i),
    o = n(692547),
    s = n(755721),
    l = n(481060),
    c = n(800530),
    u = n(388032),
    d = n(524438);
let f = (e) => a()().diff(a().unix(e), 'days');
function _(e) {
    var t, i, a, _, p;
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let h = e.message.embeds[0],
        m = null != (a = null == (t = h.fields) ? void 0 : t.find((e) => e.rawName === c.Cg.CLASSIFICATION_ID)) ? a : void 0,
        g = null != (_ = null == m ? void 0 : m.rawValue) ? _ : void 0,
        E = null != (p = null == (i = h.fields) ? void 0 : i.find((e) => e.rawName === c.Cg.INCIDENT_TIMESTAMP)) ? p : void 0,
        b = null == E || null == E.rawValue ? void 0 : parseFloat(E.rawValue);
    if (null == g || null == b) return null;
    let y = () => {
        (0, l.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('25183'), n.e('3940'), n.e('18831'), n.e('68464')]).then(n.bind(n, 41164));
            return (t) =>
                (0, r.jsx)(e, {
                    classificationId: g,
                    source: c.s.SystemDM,
                    transitionState: t.transitionState,
                    onClose: t.onClose
                });
        });
    };
    return (0, r.jsxs)(l.P3F, {
        onClick: y,
        className: d.safetyPolicyNoticeContainer,
        children: [
            (0, r.jsxs)('div', {
                className: d.noticeContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: d.headerRow,
                        children: [
                            (0, r.jsx)(l.aNP, {
                                className: d.warningIcon,
                                color: o.Z.colors.STATUS_DANGER
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                children: u.intl.string(u.t['4CxGXl'])
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: d.incidentTiming,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-xs/medium',
                            children: u.intl.format(u.t.eevFb2, { daysAgo: f(b) })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: d.noticeBody,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: u.intl.string(u.t['5CLb0N'])
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.footerContainer,
                children: (0, r.jsx)(s.zx, {
                    look: s.zx.Looks.BLANK,
                    className: d.detailsButton,
                    color: s.zx.Colors.WHITE,
                    children: u.intl.string(u.t.zKnzws)
                })
            })
        ]
    });
}
