n.d(t, {
    U: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    r = n(704215),
    l = n(481060),
    a = n(243778),
    o = n(970731),
    s = n(2818),
    c = n(921944),
    u = n(388032),
    d = n(295646),
    m = n(235810);
let h = r.z.FOR_LATER_POPOUT_COACHMARK,
    f = () =>
        (0, i.jsx)('div', {
            className: d.imageContainer,
            children: (0, i.jsx)('img', {
                className: d.image,
                src: m,
                alt: ''
            })
        }),
    p = (e) =>
        (0, i.jsx)(o.ZP, {
            className: d.container,
            asset: (0, i.jsx)(f, {}),
            header: u.intl.string(u.t.qPbFKy),
            content: u.intl.string(u.t.URrJq6),
            buttonCTA: u.intl.string(u.t['NX+WJC']),
            buttonProps: {
                color: l.ButtonColors.WHITE,
                innerClassName: d.primaryButton
            },
            onClick: () => e(c.L.USER_DISMISS),
            markAsDismissed: e,
            caretPosition: o.DF.TOP_RIGHT
        });
function _(e) {
    let { location: t, children: n } = e,
        { enabled: r, inInbox: o } = s.Z.useExperiment({ location: 'ForLaterCoachmarkWeb' }, { autoTrackExposure: !1 }),
        [c, u] = (0, a.US)(r && t === (o ? 'inbox-button' : 'bookmarks-button') ? [h] : [], void 0);
    return c !== h
        ? (0, i.jsx)(i.Fragment, { children: n })
        : (0, i.jsx)(l.Popout, {
              renderPopout: () => p(u),
              position: 'bottom',
              align: 'right',
              animation: l.Popout.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => n
          });
}
