(n.d(t, { U: () => y }), n(388685));
var r = n(255367),
    l = n(704215),
    s = n(755721),
    a = n(481060),
    i = n(243778),
    o = n(970731),
    c = n(2818),
    u = n(921944),
    d = n(388032),
    h = n(327298),
    p = n(235810);
let f = l.z.FOR_LATER_POPOUT_COACHMARK,
    g = () =>
        (0, r.jsx)('div', {
            className: h.imageContainer,
            children: (0, r.jsx)('img', {
                className: h.image,
                src: p,
                alt: ''
            })
        }),
    m = (e) =>
        (0, r.jsx)(o.ZP, {
            className: h.container,
            asset: (0, r.jsx)(g, {}),
            header: d.intl.string(d.t.qPbFKy),
            content: d.intl.string(d.t.URrJq6),
            buttonCTA: d.intl.string(d.t['NX+WJC']),
            buttonProps: {
                color: s.Tt.WHITE,
                innerClassName: h.primaryButton
            },
            onClick: () => e(u.L.USER_DISMISS),
            markAsDismissed: e,
            caretPosition: o.DF.TOP_RIGHT
        });
function y(e) {
    let { location: t, children: n, targetElementRef: l } = e,
        { enabled: s, inInbox: o } = c.Z.useExperiment({ location: 'ForLaterCoachmarkWeb' }, { autoTrackExposure: !1 }),
        [u, d] = (0, i.US)(s && t === (o ? 'inbox-button' : 'bookmarks-button') ? [f] : [], void 0);
    return u !== f
        ? n
        : (0, r.jsx)(a.yRy, {
              targetElementRef: l,
              renderPopout: () => m(d),
              position: 'bottom',
              align: 'right',
              animation: a.yRy.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => n
          });
}
