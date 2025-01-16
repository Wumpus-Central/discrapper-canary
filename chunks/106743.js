n.d(t, {
    K: function () {
        return u;
    }
});
var r = n(200651),
    i = n(192379),
    l = n(261833),
    o = n(481060),
    s = n(184299),
    a = n(451680);
function u(e) {
    var t;
    let { quest: n, onClose: u } = e,
        c = (0, s.km)((e) => e.transcript),
        d = (null == c ? void 0 : c.questId) === n.id && (null == c ? void 0 : c.fetchStatus) === s.iF.SUCCESS && null !== (t = c.text) && void 0 !== t ? t : '',
        m = i.useMemo(
            () =>
                d
                    .split('\n')
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [d]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a.transcriptHeader,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'currentColor',
                        children: 'Transcript'
                    }),
                    (0, r.jsx)(o.Clickable, {
                        onClick: u,
                        className: a.transcriptBackBtn,
                        children: (0, r.jsx)(l.D, { color: 'currentColor' })
                    })
                ]
            }),
            (0, r.jsx)(o.FocusRing, {
                children: (0, r.jsx)(o.ScrollerAuto, {
                    className: a.transcriptScroller,
                    fade: !0,
                    children: (0, r.jsx)('div', {
                        className: a.transcriptBody,
                        children:
                            (null == c ? void 0 : c.fetchStatus) === s.iF.FETCHING
                                ? (0, r.jsx)('div', {
                                      className: a.transcriptBodySpinner,
                                      children: (0, r.jsx)(o.Spinner, { type: o.Spinner.Type.WANDERING_CUBES })
                                  })
                                : (0, r.jsx)(o.Heading, {
                                      variant: 'heading-md/normal',
                                      color: 'text-muted',
                                      children: m.map((e, t) => (0, r.jsx)('p', { children: e }, t))
                                  })
                    })
                })
            })
        ]
    });
}
