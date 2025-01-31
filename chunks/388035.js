n.d(t, { U: () => g }), n(47120);
var i = n(200651),
    l = n(704215),
    a = n(481060),
    r = n(243778),
    s = n(970731),
    o = n(2818),
    c = n(921944),
    d = n(388032),
    u = n(295646),
    m = n(235810);
let h = l.z.FOR_LATER_POPOUT_COACHMARK,
    _ = () =>
        (0, i.jsx)('div', {
            className: u.imageContainer,
            children: (0, i.jsx)('img', {
                className: u.image,
                src: m,
                alt: ''
            })
        }),
    p = (e) =>
        (0, i.jsx)(s.ZP, {
            className: u.container,
            asset: (0, i.jsx)(_, {}),
            header: d.intl.string(d.t.qPbFKy),
            content: d.intl.string(d.t.URrJq6),
            buttonCTA: d.intl.string(d.t['NX+WJC']),
            buttonProps: {
                color: a.Ttl.WHITE,
                innerClassName: u.primaryButton
            },
            onClick: () => e(c.L.USER_DISMISS),
            markAsDismissed: e,
            caretPosition: s.DF.TOP_RIGHT
        });
function g(e) {
    let { location: t, children: n } = e,
        { enabled: l, inInbox: s } = o.Z.useExperiment({ location: 'ForLaterCoachmarkWeb' }, { autoTrackExposure: !1 }),
        [c, d] = (0, r.US)(l && t === (s ? 'inbox-button' : 'bookmarks-button') ? [h] : [], void 0);
    return c !== h
        ? (0, i.jsx)(i.Fragment, { children: n })
        : (0, i.jsx)(a.yRy, {
              renderPopout: () => p(d),
              position: 'bottom',
              align: 'right',
              animation: a.yRy.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => n
          });
}
