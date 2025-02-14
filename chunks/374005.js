n.d(t, { b: () => C });
var i = n(200651),
    l = n(192379),
    r = n(489948),
    a = n(393238),
    s = n(540059),
    o = n(720734),
    d = n(840780),
    c = n(235555),
    u = n(746508),
    h = n(210724),
    m = n(905423),
    p = n(316173),
    g = n(410575),
    _ = n(981631),
    f = n(388032),
    E = n(306855);
function I(e) {
    let t = (0, m.Z)((e) => {
        let { guildId: t } = e;
        return t;
    });
    return (0, i.jsx)(d.Z, {
        ...e,
        guildId: t
    });
}
function C() {
    let e = (0, s.Q3)('AppPanels'),
        t = l.useRef(null);
    return (
        (0, a.P)(
            t,
            (t) => {
                let { height: n } = t;
                e && document.body.style.setProperty('--custom-app-panels-height', ''.concat(n, 'px'));
            },
            []
        ),
        (0, i.jsx)('section', {
            ref: t,
            className: E.panels,
            'aria-label': f.intl.string(f.t.StREWF),
            children: (0, i.jsxs)(r.Jc, {
                containerRef: t,
                children: [
                    e && (0, i.jsx)(p.Z, {}),
                    (0, i.jsx)(h.Z, {}),
                    (0, i.jsx)(c.Z, {}),
                    (0, i.jsx)(g.Z, {
                        section: _.jXE.ACTIVITY_PANEL,
                        children: (0, i.jsx)(I, { className: E.activityPanel })
                    }),
                    (0, i.jsx)(g.Z, {
                        section: _.jXE.RTC_CONNECTION_PANEL,
                        children: (0, i.jsx)(u.Z, {})
                    }),
                    (0, i.jsx)(g.Z, {
                        section: _.jXE.ACCOUNT_PANEL,
                        children: (0, i.jsx)(o.Z, {})
                    })
                ]
            })
        })
    );
}
