n.d(t, { K: () => s }), n(35282), n(781311);
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(184299),
    a = n(844136);
function s(e) {
    var t;
    let { quest: n, onClose: s } = e,
        c = (0, i.km)((e) => e.transcript),
        u = (null == c ? void 0 : c.questId) === n.id && (null == c ? void 0 : c.fetchStatus) === i.iF.SUCCESS && null != (t = c.text) ? t : '',
        d = l.useMemo(
            () =>
                u
                    .split('\n')
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [u]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a.transcriptHeader,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'currentColor',
                        children: 'Transcript'
                    }),
                    (0, r.jsx)(o.P3F, {
                        onClick: s,
                        className: a.transcriptBackBtn,
                        children: (0, r.jsx)(o.Dio, { color: 'currentColor' })
                    })
                ]
            }),
            (0, r.jsx)(o.tEY, {
                children: (0, r.jsx)(o.w0Z, {
                    className: a.transcriptScroller,
                    fade: !0,
                    children: (0, r.jsx)('div', {
                        className: a.transcriptBody,
                        children:
                            (null == c ? void 0 : c.fetchStatus) === i.iF.FETCHING
                                ? (0, r.jsx)('div', {
                                      className: a.transcriptBodySpinner,
                                      children: (0, r.jsx)(o.$jN, { type: o.$jN.Type.WANDERING_CUBES })
                                  })
                                : (0, r.jsx)(o.X6q, {
                                      variant: 'heading-md/normal',
                                      color: 'text-muted',
                                      children: d.map((e, t) => (0, r.jsx)('p', { children: e }, t))
                                  })
                    })
                })
            })
        ]
    });
}
