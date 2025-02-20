n.d(t, { K: () => c }), n(301563), n(566702);
var r = n(200651),
    o = n(192379),
    i = n(261833),
    l = n(481060),
    s = n(184299),
    a = n(677488);
function c(e) {
    var t;
    let { quest: n, onClose: c } = e,
        u = (0, s.km)((e) => e.transcript),
        d = (null == u ? void 0 : u.questId) === n.id && (null == u ? void 0 : u.fetchStatus) === s.iF.SUCCESS && null !== (t = u.text) && void 0 !== t ? t : '',
        m = o.useMemo(
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
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'currentColor',
                        children: 'Transcript'
                    }),
                    (0, r.jsx)(l.P3F, {
                        onClick: c,
                        className: a.transcriptBackBtn,
                        children: (0, r.jsx)(i.D, { color: 'currentColor' })
                    })
                ]
            }),
            (0, r.jsx)(l.tEY, {
                children: (0, r.jsx)(l.w0Z, {
                    className: a.transcriptScroller,
                    fade: !0,
                    children: (0, r.jsx)('div', {
                        className: a.transcriptBody,
                        children:
                            (null == u ? void 0 : u.fetchStatus) === s.iF.FETCHING
                                ? (0, r.jsx)('div', {
                                      className: a.transcriptBodySpinner,
                                      children: (0, r.jsx)(l.$jN, { type: l.$jN.Type.WANDERING_CUBES })
                                  })
                                : (0, r.jsx)(l.X6q, {
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
