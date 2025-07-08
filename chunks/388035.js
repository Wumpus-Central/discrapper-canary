(n.d(t, { U: () => m }), n(388685));
var r = n(255367),
    l = n(704215),
    s = n(481060),
    a = n(243778),
    i = n(970731),
    o = n(2818),
    c = n(921944),
    u = n(388032),
    d = n(327298),
    h = n(235810);
let p = l.z.FOR_LATER_POPOUT_COACHMARK,
    f = () =>
        (0, r.jsx)('div', {
            className: d.imageContainer,
            children: (0, r.jsx)('img', {
                className: d.image,
                src: h,
                alt: ''
            })
        }),
    g = (e) =>
        (0, r.jsx)(i.ZP, {
            className: d.container,
            asset: (0, r.jsx)(f, {}),
            header: u.intl.string(u.t.qPbFKy),
            content: u.intl.string(u.t.URrJq6),
            buttonCTA: u.intl.string(u.t['NX+WJC']),
            buttonProps: {
                color: s.Ttl.WHITE,
                innerClassName: d.primaryButton
            },
            onClick: () => e(c.L.USER_DISMISS),
            markAsDismissed: e,
            caretPosition: i.DF.TOP_RIGHT
        });
function m(e) {
    let { location: t, children: n, targetElementRef: l } = e,
        { enabled: i, inInbox: c } = o.Z.useExperiment({ location: 'ForLaterCoachmarkWeb' }, { autoTrackExposure: !1 }),
        [u, d] = (0, a.US)(i && t === (c ? 'inbox-button' : 'bookmarks-button') ? [p] : [], void 0);
    return u !== p
        ? n
        : (0, r.jsx)(s.yRy, {
              targetElementRef: l,
              renderPopout: () => g(d),
              position: 'bottom',
              align: 'right',
              animation: s.yRy.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => n
          });
}
