(r.d(t, { U: () => _ }), r(388685));
var n = r(255367),
    s = r(704215),
    l = r(755721),
    a = r(481060),
    i = r(243778),
    o = r(970731),
    c = r(2818),
    u = r(921944),
    h = r(388032),
    d = r(327298),
    p = r(235810);
let f = s.z.FOR_LATER_POPOUT_COACHMARK,
    g = () =>
        (0, n.jsx)('div', {
            className: d.imageContainer,
            children: (0, n.jsx)('img', {
                className: d.image,
                src: p,
                alt: ''
            })
        }),
    m = (e) =>
        (0, n.jsx)(o.ZP, {
            className: d.container,
            asset: (0, n.jsx)(g, {}),
            header: h.intl.string(h.t.qPbFKy),
            content: h.intl.string(h.t.URrJq6),
            buttonCTA: h.intl.string(h.t['NX+WJC']),
            buttonProps: {
                color: l.Tt.WHITE,
                innerClassName: d.primaryButton
            },
            onClick: () => e(u.L.USER_DISMISS),
            markAsDismissed: e,
            caretPosition: o.DF.TOP_RIGHT
        });
function _(e) {
    let { location: t, children: r, targetElementRef: s } = e,
        { enabled: l, inInbox: o } = c.Z.useExperiment({ location: 'ForLaterCoachmarkWeb' }, { autoTrackExposure: !1 }),
        [u, h] = (0, i.US)(l && t === (o ? 'inbox-button' : 'bookmarks-button') ? [f] : [], void 0);
    return u !== f
        ? r
        : (0, n.jsx)(a.yRy, {
              targetElementRef: s,
              renderPopout: () => m(h),
              position: 'bottom',
              align: 'right',
              animation: a.yRy.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => r
          });
}
