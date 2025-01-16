n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    i = n(442837),
    o = n(481060),
    c = n(496675),
    d = n(346479),
    u = n(665906),
    h = n(91159),
    m = n(443671),
    g = n(342449),
    f = n(488131),
    x = n(124368),
    v = n(981631),
    Z = n(388032),
    j = n(494870);
function N(e) {
    let { channel: t, className: n, onClose: r } = e,
        N = (0, i.e7)([c.Z], () => c.Z.can(v.Plq.READ_MESSAGE_HISTORY, t)),
        I = (0, u.cD)(t),
        C = () => {
            r(), (0, f.R6)(t, void 0, 'Thread Browser Empty State');
        },
        p = l.useCallback(
            (e, t) => {
                r(), (0, f.ok)(e, !t, x.on.BROWSER);
            },
            [r]
        ),
        S = (function (e, t) {
            let [n, a] = l.useState(''),
                [r, s] = l.useState(!1),
                [i, o] = l.useState(!1),
                [c, u] = l.useState([]),
                h = async () => {
                    if (null != n && '' !== n) {
                        if (!r) {
                            s(!0);
                            try {
                                let a = await d.Z.searchThreads(e, t, n);
                                o(!0), u(a);
                            } finally {
                                s(!1);
                            }
                        }
                    }
                };
            return {
                query: n,
                setQuery: (e) => {
                    a(e), 0 === e.length && o(!1);
                },
                isLoading: r,
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
            className: s()(n, j.container),
            children: (0, a.jsx)(o.HeadingLevel, {
                component: (0, a.jsxs)('div', {
                    className: j.header,
                    children: [
                        (0, a.jsx)(o.ThreadIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.threadIcon
                        }),
                        (0, a.jsx)(o.Heading, {
                            variant: 'heading-md/semibold',
                            className: j.title,
                            children: Z.intl.string(Z.t.E3H5lJ)
                        }),
                        N
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)('div', { className: j.divider }), (0, a.jsx)(T, { ...S })]
                              })
                            : null,
                        (0, a.jsx)('div', { className: j.spacer }),
                        I
                            ? (0, a.jsx)(o.Button, {
                                  size: o.Button.Sizes.TINY,
                                  className: j.createButton,
                                  onClick: () => {
                                      r(), (0, f.R6)(t, void 0, 'Thread Browser Toolbar');
                                  },
                                  children: Z.intl.string(Z.t.CumH4u)
                              })
                            : null,
                        (0, a.jsx)(o.Clickable, {
                            className: j.closeIcon,
                            onClick: r,
                            'aria-label': Z.intl.string(Z.t.cpT0Cg),
                            children: (0, a.jsx)(o.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                children: S.hasResults
                    ? (0, a.jsx)(m.Z, {
                          channel: t,
                          startThread: C,
                          goToThread: p,
                          threadIds: S.results
                      })
                    : (0, a.jsx)(g.Z, {
                          channel: t,
                          startThread: C,
                          goToThread: p
                      })
            })
        })
    );
}
function T(e) {
    let { query: t, setQuery: n, submit: l, isLoading: r } = e;
    return (0, a.jsx)(o.SearchBar, {
        autoFocus: !0,
        className: j.searchBox,
        query: t,
        isLoading: r,
        onChange: (e) => n(e),
        onClear: () => n(''),
        onKeyDown: (e) => 'Enter' === e.key && l(),
        placeholder: Z.intl.string(Z.t.h0JN7e),
        'aria-label': Z.intl.string(Z.t.h0JN7e)
    });
}
