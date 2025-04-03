n.d(t, { K: () => c }), n(301563), n(566702);
var r = n(200651),
    l = n(192379),
    o = n(261833),
    i = n(481060),
    a = n(184299),
    s = n(844136);
function c(e) {
    var t;
    let { quest: n, onClose: c } = e,
        u = (0, a.km)((e) => e.transcript),
        d = (null == u ? void 0 : u.questId) === n.id && (null == u ? void 0 : u.fetchStatus) === a.iF.SUCCESS && null != (t = u.text) ? t : '',
        m = l.useMemo(
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
                className: s.transcriptHeader,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'currentColor',
                        children: 'Transcript'
                    }),
                    (0, r.jsx)(i.P3F, {
                        onClick: c,
                        className: s.transcriptBackBtn,
                        children: (0, r.jsx)(o.D, { color: 'currentColor' })
                    })
                ]
            }),
            (0, r.jsx)(i.tEY, {
                children: (0, r.jsx)(i.w0Z, {
                    className: s.transcriptScroller,
                    fade: !0,
                    children: (0, r.jsx)('div', {
                        className: s.transcriptBody,
                        children:
                            (null == u ? void 0 : u.fetchStatus) === a.iF.FETCHING
                                ? (0, r.jsx)('div', {
                                      className: s.transcriptBodySpinner,
                                      children: (0, r.jsx)(i.$jN, { type: i.$jN.Type.WANDERING_CUBES })
                                  })
                                : (0, r.jsx)(i.X6q, {
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
