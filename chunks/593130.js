(n.d(t, { Z: () => Z }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    i = n(755721),
    c = n(481060),
    d = n(496675),
    u = n(346479),
    h = n(665906),
    g = n(91159),
    m = n(443671),
    f = n(342449),
    j = n(488131),
    v = n(124368),
    x = n(981631),
    p = n(388032),
    b = n(269932);
function Z(e) {
    let { channel: t, className: n, onClose: a } = e,
        Z = (0, o.e7)([d.Z], () => d.Z.can(x.Plq.READ_MESSAGE_HISTORY, t)),
        O = (0, h.cD)(t),
        w = () => {
            (a(), (0, j.R6)(t, void 0, 'Thread Browser Empty State'));
        },
        N = l.useCallback(
            (e, t) => {
                (a(), (0, j.ok)(e, !t, v.on.BROWSER));
            },
            [a]
        ),
        S = (function (e, t) {
            let [n, r] = l.useState(''),
                [a, s] = l.useState(!1),
                [o, i] = l.useState(!1),
                [c, d] = l.useState([]),
                h = async () => {
                    if (null != n && '' !== n && !a) {
                        s(!0);
                        try {
                            let r = await u.Z.searchThreads(e, t, n);
                            (i(!0), d(r));
                        } finally {
                            s(!1);
                        }
                    }
                };
            return {
                query: n,
                setQuery: (e) => {
                    (r(e), 0 === e.length && i(!1));
                },
                isLoading: a,
                hasResults: o,
                submit: h,
                results: c
            };
        })(t.guild_id, t.id);
    return (
        l.useEffect(() => {
            (0, g.A_)();
        }, []),
        (0, r.jsx)('div', {
            className: s()(n, b.container),
            children: (0, r.jsx)(c.y5t, {
                component: (0, r.jsxs)('div', {
                    className: b.header,
                    children: [
                        (0, r.jsx)(c.or_, {
                            size: 'md',
                            color: 'currentColor',
                            className: b.threadIcon
                        }),
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            className: b.title,
                            children: p.intl.string(p.t.E3H5lJ)
                        }),
                        Z
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)('div', { className: b.divider }),
                                      (0, r.jsx)(
                                          y,
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
                                          })({}, S)
                                      )
                                  ]
                              })
                            : null,
                        (0, r.jsx)('div', { className: b.spacer }),
                        O
                            ? (0, r.jsx)(i.zx, {
                                  size: i.zx.Sizes.TINY,
                                  className: b.createButton,
                                  onClick: () => {
                                      (a(), (0, j.R6)(t, void 0, 'Thread Browser Toolbar'));
                                  },
                                  children: p.intl.string(p.t.CumH4u)
                              })
                            : null,
                        (0, r.jsx)(c.P3F, {
                            className: b.closeIcon,
                            onClick: a,
                            'aria-label': p.intl.string(p.t.cpT0Cg),
                            children: (0, r.jsx)(c.Dio, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                children: S.hasResults
                    ? (0, r.jsx)(m.Z, {
                          channel: t,
                          startThread: w,
                          goToThread: N,
                          threadIds: S.results
                      })
                    : (0, r.jsx)(f.Z, {
                          channel: t,
                          startThread: w,
                          goToThread: N
                      })
            })
        })
    );
}
function y(e) {
    let { query: t, setQuery: n, submit: l, isLoading: a } = e;
    return (0, r.jsx)(c.E1j, {
        autoFocus: !0,
        className: b.searchBox,
        query: t,
        isLoading: a,
        onChange: (e) => n(e),
        onClear: () => n(''),
        onKeyDown: (e) => 'Enter' === e.key && l(),
        placeholder: p.intl.string(p.t.h0JN7e),
        'aria-label': p.intl.string(p.t.h0JN7e)
    });
}
