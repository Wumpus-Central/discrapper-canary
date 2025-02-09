n.d(t, { Z: () => N }), n(47120);
var a = n(200651),
    l = n(192379),
    s = n(120356),
    r = n.n(s),
    i = n(442837),
    o = n(481060),
    c = n(496675),
    d = n(346479),
    u = n(665906),
    h = n(91159),
    m = n(443671),
    g = n(342449),
    x = n(488131),
    f = n(124368),
    Z = n(981631),
    v = n(388032),
    j = n(419453);
function N(e) {
    let { channel: t, className: n, onClose: s } = e,
        N = (0, i.e7)([c.Z], () => c.Z.can(Z.Plq.READ_MESSAGE_HISTORY, t)),
        C = (0, u.cD)(t),
        I = () => {
            s(), (0, x.R6)(t, void 0, 'Thread Browser Empty State');
        },
        p = l.useCallback(
            (e, t) => {
                s(), (0, x.ok)(e, !t, f.on.BROWSER);
            },
            [s]
        ),
        E = (function (e, t) {
            let [n, a] = l.useState(''),
                [s, r] = l.useState(!1),
                [i, o] = l.useState(!1),
                [c, u] = l.useState([]),
                h = async () => {
                    if (null != n && '' !== n && !s) {
                        r(!0);
                        try {
                            let a = await d.Z.searchThreads(e, t, n);
                            o(!0), u(a);
                        } finally {
                            r(!1);
                        }
                    }
                };
            return {
                query: n,
                setQuery: (e) => {
                    a(e), 0 === e.length && o(!1);
                },
                isLoading: s,
                hasResults: i,
                submit: h,
                results: c
            };
        })(t.guild_id, t.id);
    return (
        l.useEffect(() => {
            (0, h.A_)();
        }, []),
        (0, a.jsx)('div', {
            className: r()(n, j.container),
            children: (0, a.jsx)(o.y5t, {
                component: (0, a.jsxs)('div', {
                    className: j.header,
                    children: [
                        (0, a.jsx)(o.or_, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.threadIcon
                        }),
                        (0, a.jsx)(o.X6q, {
                            variant: 'heading-md/semibold',
                            className: j.title,
                            children: v.intl.string(v.t.E3H5lJ)
                        }),
                        N
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)('div', { className: j.divider }), (0, a.jsx)(T, { ...E })]
                              })
                            : null,
                        (0, a.jsx)('div', { className: j.spacer }),
                        C
                            ? (0, a.jsx)(o.zxk, {
                                  size: o.zxk.Sizes.TINY,
                                  className: j.createButton,
                                  onClick: () => {
                                      s(), (0, x.R6)(t, void 0, 'Thread Browser Toolbar');
                                  },
                                  children: v.intl.string(v.t.CumH4u)
                              })
                            : null,
                        (0, a.jsx)(o.P3F, {
                            className: j.closeIcon,
                            onClick: s,
                            'aria-label': v.intl.string(v.t.cpT0Cg),
                            children: (0, a.jsx)(o.Dio, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                children: E.hasResults
                    ? (0, a.jsx)(m.Z, {
                          channel: t,
                          startThread: I,
                          goToThread: p,
                          threadIds: E.results
                      })
                    : (0, a.jsx)(g.Z, {
                          channel: t,
                          startThread: I,
                          goToThread: p
                      })
            })
        })
    );
}
function T(e) {
    let { query: t, setQuery: n, submit: l, isLoading: s } = e;
    return (0, a.jsx)(o.E1j, {
        autoFocus: !0,
        className: j.searchBox,
        query: t,
        isLoading: s,
        onChange: (e) => n(e),
        onClear: () => n(''),
        onKeyDown: (e) => 'Enter' === e.key && l(),
        placeholder: v.intl.string(v.t.h0JN7e),
        'aria-label': v.intl.string(v.t.h0JN7e)
    });
}
