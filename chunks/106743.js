n.d(t, { K: () => u });
var r = n(200651),
    l = n(192379),
    i = n(261833),
    s = n(481060),
    o = n(184299),
    a = n(152860);
function u(e) {
    var t;
    let { quest: n, onClose: u } = e,
        c = (0, o.km)((e) => e.transcript),
        d = (null == c ? void 0 : c.questId) === n.id && (null == c ? void 0 : c.fetchStatus) === o.iF.SUCCESS && null !== (t = c.text) && void 0 !== t ? t : '',
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
                className: a.transcriptHeader,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'currentColor',
                        children: 'Transcript'
                    }),
                    (0, r.jsx)(s.P3F, {
                        onClick: u,
                        className: a.transcriptBackBtn,
                        children: (0, r.jsx)(i.D, { color: 'currentColor' })
                    })
                ]
            }),
            (0, r.jsx)(s.tEY, {
                children: (0, r.jsx)(s.w0Z, {
                    className: a.transcriptScroller,
                    fade: !0,
                    children: (0, r.jsx)('div', {
                        className: a.transcriptBody,
                        children:
                            (null == c ? void 0 : c.fetchStatus) === o.iF.FETCHING
                                ? (0, r.jsx)('div', {
                                      className: a.transcriptBodySpinner,
                                      children: (0, r.jsx)(s.$jN, { type: s.$jN.Type.WANDERING_CUBES })
                                  })
                                : (0, r.jsx)(s.X6q, {
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
