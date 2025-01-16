n.d(t, {
    b: function () {
        return I;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(393238),
    a = n(540059),
    s = n(720734),
    o = n(840780),
    c = n(235555),
    d = n(746508),
    u = n(210724),
    h = n(905423),
    m = n(316173),
    p = n(410575),
    g = n(981631),
    f = n(388032),
    _ = n(415281);
function E(e) {
    let t = (0, h.Z)((e) => {
        let { guildId: t } = e;
        return t;
    });
    return (0, i.jsx)(o.Z, {
        ...e,
        guildId: t
    });
}
function I() {
    let e = (0, a.Q3)('AppPanels'),
        t = r.useRef(null);
    return (
        (0, l.P)(
            t,
            (t) => {
                let { height: n } = t;
                e && document.body.style.setProperty('--custom-app-panels-height', ''.concat(n, 'px'));
            },
            []
        ),
        (0, i.jsxs)('section', {
            ref: t,
            className: _.panels,
            'aria-label': f.intl.string(f.t.StREWF),
            children: [
                e && (0, i.jsx)(m.Z, {}),
                (0, i.jsx)(u.Z, {}),
                (0, i.jsx)(c.Z, {}),
                (0, i.jsx)(p.Z, {
                    section: g.jXE.ACTIVITY_PANEL,
                    children: (0, i.jsx)(E, { className: _.activityPanel })
                }),
                (0, i.jsx)(p.Z, {
                    section: g.jXE.RTC_CONNECTION_PANEL,
                    children: (0, i.jsx)(d.Z, {})
                }),
                (0, i.jsx)(p.Z, {
                    section: g.jXE.ACCOUNT_PANEL,
                    children: (0, i.jsx)(s.Z, {})
                })
            ]
        })
    );
}
