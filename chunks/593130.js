(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    a = n(73800),
    l = n(120356),
    s = n.n(l),
    i = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(496675),
    u = n(346479),
    h = n(665906),
    g = n(91159),
    m = n(443671),
    f = n(342449),
    x = n(488131),
    j = n(124368),
    v = n(981631),
    Z = n(388032),
    p = n(269932);
function b(e) {
    let { channel: t, className: n, onClose: l } = e,
        b = (0, i.e7)([d.Z], () => d.Z.can(v.Plq.READ_MESSAGE_HISTORY, t)),
        T = (0, h.cD)(t),
        y = () => {
            (l(), (0, x.R6)(t, void 0, 'Thread Browser Empty State'));
        },
        P = a.useCallback(
            (e, t) => {
                (l(), (0, x.ok)(e, !t, j.on.BROWSER));
            },
            [l]
        ),
        C = (function (e, t) {
            let [n, r] = a.useState(''),
                [l, s] = a.useState(!1),
                [i, o] = a.useState(!1),
                [c, d] = a.useState([]),
                h = async () => {
                    if (null != n && '' !== n && !l) {
                        s(!0);
                        try {
                            let r = await u.Z.searchThreads(e, t, n);
                            (o(!0), d(r));
                        } finally {
                            s(!1);
                        }
                    }
                };
            return {
                query: n,
                setQuery: (e) => {
                    (r(e), 0 === e.length && o(!1));
                },
                isLoading: l,
                hasResults: i,
                submit: h,
                results: c
            };
        })(t.guild_id, t.id);
    return (
        a.useEffect(() => {
            (0, g.A_)();
        }, []),
        (0, r.jsx)('div', {
            className: s()(n, p.container),
            children: (0, r.jsx)(c.y5t, {
                component: (0, r.jsxs)('div', {
                    className: p.header,
                    children: [
                        (0, r.jsx)(c.or_, {
                            size: 'md',
                            color: 'currentColor',
                            className: p.threadIcon
                        }),
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            className: p.title,
                            children: Z.intl.string(Z.t.E3H5lJ)
                        }),
                        b
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)('div', { className: p.divider }),
                                      (0, r.jsx)(
                                          N,
                                          (function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                      r = Object.keys(n);
                                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                                      (r = r.concat(
                                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                          })
                                                      )),
                                                      r.forEach(function (t) {
                                                          var r;
                                                          ((r = n[t]),
                                                              t in e
                                                                  ? Object.defineProperty(e, t, {
                                                                        value: r,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0
                                                                    })
                                                                  : (e[t] = r));
                                                      }));
                                              }
                                              return e;
                                          })({}, C)
                                      )
                                  ]
                              })
                            : null,
                        (0, r.jsx)('div', { className: p.spacer }),
                        T
                            ? (0, r.jsx)(o.zx, {
                                  size: o.zx.Sizes.TINY,
                                  className: p.createButton,
                                  onClick: () => {
                                      (l(), (0, x.R6)(t, void 0, 'Thread Browser Toolbar'));
                                  },
                                  children: Z.intl.string(Z.t.CumH4u)
                              })
                            : null,
                        (0, r.jsx)(c.P3F, {
                            className: p.closeIcon,
                            onClick: l,
                            'aria-label': Z.intl.string(Z.t.cpT0Cg),
                            children: (0, r.jsx)(c.Dio, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                children: C.hasResults
                    ? (0, r.jsx)(m.Z, {
                          channel: t,
                          startThread: y,
                          goToThread: P,
                          threadIds: C.results
                      })
                    : (0, r.jsx)(f.Z, {
                          channel: t,
                          startThread: y,
                          goToThread: P
                      })
            })
        })
    );
}
function N(e) {
    let { query: t, setQuery: n, submit: a, isLoading: l } = e;
    return (0, r.jsx)(c.E1j, {
        autoFocus: !0,
        className: p.searchBox,
        query: t,
        isLoading: l,
        onChange: (e) => n(e),
        onClear: () => n(''),
        onKeyDown: (e) => 'Enter' === e.key && a(),
        placeholder: Z.intl.string(Z.t.h0JN7e),
        'aria-label': Z.intl.string(Z.t.h0JN7e)
    });
}
