(n.d(t, { U: () => y }), n(388685));
var r = n(255367),
    s = n(704215),
    l = n(755721),
    a = n(481060),
    i = n(243778),
    o = n(970731),
    c = n(2818),
    u = n(921944),
    h = n(388032),
    d = n(327298),
    p = n(235810);
let f = s.z.FOR_LATER_POPOUT_COACHMARK,
    g = () =>
        (0, r.jsx)('div', {
            className: d.imageContainer,
            children: (0, r.jsx)('img', {
                className: d.image,
                src: p,
                alt: ''
            })
        }),
    m = (e) =>
        (0, r.jsx)(o.ZP, {
            className: d.container,
            asset: (0, r.jsx)(g, {}),
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
function y(e) {
    let { location: t, children: n, targetElementRef: s } = e,
        { enabled: l, inInbox: o } = c.Z.useExperiment({ location: 'ForLaterCoachmarkWeb' }, { autoTrackExposure: !1 }),
        [u, h] = (0, i.US)(l && t === (o ? 'inbox-button' : 'bookmarks-button') ? [f] : [], void 0);
    return u !== f
        ? n
        : (0, r.jsx)(a.yRy, {
              targetElementRef: s,
              renderPopout: () => m(h),
              position: 'bottom',
              align: 'right',
              animation: a.yRy.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => n
          });
}
