n.d(t, { V: () => O });
var r = n(200651),
    i = n(512722),
    l = n.n(i),
    o = n(442837),
    s = n(481060),
    a = n(550532),
    c = n(371991),
    u = n(594190),
    d = n(695346),
    h = n(885110),
    p = n(316496),
    f = n(560012),
    g = n(388032),
    m = n(24655);
function b() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.kZF, {
                size: 'xxs',
                color: 'currentColor',
                className: m.iconEye
            }),
            g.intl.string(g.t.jfrLLS)
        ]
    });
}
function _() {
    var e;
    let t = (0, o.e7)([a.Z], () => a.Z.getFakeGameData()),
        n = (0, o.e7)([u.ZP], () => u.ZP.getVisibleGame()),
        i = null != (e = null == t ? void 0 : t.start) ? e : null == n ? void 0 : n.start,
        h = d.SE.useSetting().length > 0;
    return (
        l()(null != i, 'Start time should be set for currently running game'),
        (0, r.jsxs)(r.Fragment, {
            children: [
                h &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.OgY, {
                                className: m.iconEye,
                                size: 'xxs',
                                color: 'currentColor'
                            }),
                            g.intl.string(f.default.jfDsyM),
                            '\xA0\xA0'
                        ]
                    }),
                (0, r.jsx)(c.x3, {
                    entry: { start: i },
                    textColor: 'text-positive'
                })
            ]
        })
    );
}
function y(e) {
    let { onClick: t, children: n } = e;
    return (0, r.jsx)(s.P3F, {
        onClick: t,
        className: m.container,
        children: (0, r.jsx)(s.Text, {
            variant: 'text-xs/medium',
            className: m.text,
            color: 'text-secondary',
            children: n
        })
    });
}
function O(e) {
    let { onClick: t } = e,
        { rtcPopoutEnabled: n } = (0, p.SN)('not sharing link'),
        { rtcPopoutEnabled: i } = (0, p.m_)('not sharing link'),
        { isEnabled: l, showActivitySharingIndicatorWhenSharing: a } = (0, p.Do)('not sharing link'),
        c = d.G6.useSetting(),
        u = (0, o.e7)([h.Z], () => h.Z.getStatus());
    return n || i || l
        ? !c || ((i || l) && u === s.Skl.INVISIBLE)
            ? (0, r.jsx)(y, {
                  onClick: t,
                  children: (0, r.jsx)(b, {})
              })
            : a
              ? (0, r.jsx)(y, {
                    onClick: t,
                    children: (0, r.jsx)(_, {})
                })
              : null
        : null;
}
