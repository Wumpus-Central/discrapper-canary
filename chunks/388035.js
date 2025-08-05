(n.d(t, { U: () => g }), n(388685));
var r = n(255367),
    i = n(704215),
    a = n(755721),
    o = n(481060),
    s = n(243778),
    l = n(970731),
    c = n(2818),
    u = n(921944),
    d = n(388032),
    f = n(327298),
    _ = n(235810);
let p = i.z.FOR_LATER_POPOUT_COACHMARK,
    h = () =>
        (0, r.jsx)('div', {
            className: f.imageContainer,
            children: (0, r.jsx)('img', {
                className: f.image,
                src: _,
                alt: ''
            })
        }),
    m = (e) =>
        (0, r.jsx)(l.ZP, {
            className: f.container,
            asset: (0, r.jsx)(h, {}),
            header: d.intl.string(d.t.qPbFKy),
            content: d.intl.string(d.t.URrJq6),
            buttonCTA: d.intl.string(d.t['NX+WJC']),
            buttonProps: {
                color: a.Tt.WHITE,
                innerClassName: f.primaryButton
            },
            onClick: () => e(u.L.USER_DISMISS),
            markAsDismissed: e,
            caretPosition: l.DF.TOP_RIGHT
        });
function g(e) {
    let { location: t, children: n, targetElementRef: i } = e,
        { enabled: a, inInbox: l } = c.Z.useExperiment({ location: 'ForLaterCoachmarkWeb' }, { autoTrackExposure: !1 }),
        u = t === (l ? 'inbox-button' : 'bookmarks-button'),
        d = a && u ? [p] : [],
        [f, _] = (0, s.US)(d, void 0);
    return f !== p
        ? n
        : (0, r.jsx)(o.yRy, {
              targetElementRef: i,
              renderPopout: () => m(_),
              position: 'bottom',
              align: 'right',
              animation: o.yRy.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => n
          });
}
