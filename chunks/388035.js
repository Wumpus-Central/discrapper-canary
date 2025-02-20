n.d(t, { U: () => g }), n(47120);
var r = n(200651),
    i = n(704215),
    a = n(481060),
    o = n(243778),
    l = n(970731),
    s = n(2818),
    c = n(921944),
    d = n(388032),
    u = n(361170),
    p = n(235810);
let m = i.z.FOR_LATER_POPOUT_COACHMARK,
    f = () =>
        (0, r.jsx)('div', {
            className: u.imageContainer,
            children: (0, r.jsx)('img', {
                className: u.image,
                src: p,
                alt: ''
            })
        }),
    h = (e) =>
        (0, r.jsx)(l.ZP, {
            className: u.container,
            asset: (0, r.jsx)(f, {}),
            header: d.NW.string(d.t.qPbFKy),
            content: d.NW.string(d.t.URrJq6),
            buttonCTA: d.NW.string(d.t['NX+WJC']),
            buttonProps: {
                color: a.Ttl.WHITE,
                innerClassName: u.primaryButton
            },
            onClick: () => e(c.L.USER_DISMISS),
            markAsDismissed: e,
            caretPosition: l.DF.TOP_RIGHT
        });
function g(e) {
    let { location: t, children: n } = e,
        { enabled: i, inInbox: l } = s.Z.useExperiment({ location: 'ForLaterCoachmarkWeb' }, { autoTrackExposure: !1 }),
        [c, d] = (0, o.US)(i && t === (l ? 'inbox-button' : 'bookmarks-button') ? [m] : [], void 0);
    return c !== m
        ? (0, r.jsx)(r.Fragment, { children: n })
        : (0, r.jsx)(a.yRy, {
              renderPopout: () => h(d),
              position: 'bottom',
              align: 'right',
              animation: a.yRy.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => n
          });
}
