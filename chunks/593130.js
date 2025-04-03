n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    a = n(192379),
    s = n(120356),
    l = n.n(s),
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
    j = n(981631),
    v = n(388032),
    Z = n(269932);
function N(e) {
    let { channel: t, className: n, onClose: s } = e,
        N = (0, i.e7)([c.Z], () => c.Z.can(j.Plq.READ_MESSAGE_HISTORY, t)),
        b = (0, u.cD)(t),
        T = () => {
            s(), (0, f.R6)(t, void 0, 'Thread Browser Empty State');
        },
        y = a.useCallback(
            (e, t) => {
                s(), (0, f.ok)(e, !t, x.on.BROWSER);
            },
            [s]
        ),
        P = (function (e, t) {
            let [n, r] = a.useState(''),
                [s, l] = a.useState(!1),
                [i, o] = a.useState(!1),
                [c, u] = a.useState([]),
                h = async () => {
                    if (null != n && '' !== n && !s) {
                        l(!0);
                        try {
                            let r = await d.Z.searchThreads(e, t, n);
                            o(!0), u(r);
                        } finally {
                            l(!1);
                        }
                    }
                };
            return {
                query: n,
                setQuery: (e) => {
                    r(e), 0 === e.length && o(!1);
                },
                isLoading: s,
                hasResults: i,
                submit: h,
                results: c
            };
        })(t.guild_id, t.id);
    return (
        a.useEffect(() => {
            (0, h.A_)();
        }, []),
        (0, r.jsx)('div', {
            className: l()(n, Z.container),
            children: (0, r.jsx)(o.y5t, {
                component: (0, r.jsxs)('div', {
                    className: Z.header,
                    children: [
                        (0, r.jsx)(o.or_, {
                            size: 'md',
                            color: 'currentColor',
                            className: Z.threadIcon
                        }),
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-md/semibold',
                            className: Z.title,
                            children: v.NW.string(v.t.E3H5lJ)
                        }),
                        N
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)('div', { className: Z.divider }),
                                      (0, r.jsx)(
                                          p,
                                          (function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                      r = Object.keys(n);
                                                  'function' == typeof Object.getOwnPropertySymbols &&
                                                      (r = r.concat(
                                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                          })
                                                      )),
                                                      r.forEach(function (t) {
                                                          var r;
                                                          (r = n[t]),
                                                              t in e
                                                                  ? Object.defineProperty(e, t, {
                                                                        value: r,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0
                                                                    })
                                                                  : (e[t] = r);
                                                      });
                                              }
                                              return e;
                                          })({}, P)
                                      )
                                  ]
                              })
                            : null,
                        (0, r.jsx)('div', { className: Z.spacer }),
                        b
                            ? (0, r.jsx)(o.zxk, {
                                  size: o.zxk.Sizes.TINY,
                                  className: Z.createButton,
                                  onClick: () => {
                                      s(), (0, f.R6)(t, void 0, 'Thread Browser Toolbar');
                                  },
                                  children: v.NW.string(v.t.CumH4u)
                              })
                            : null,
                        (0, r.jsx)(o.P3F, {
                            className: Z.closeIcon,
                            onClick: s,
                            'aria-label': v.NW.string(v.t.cpT0Cg),
                            children: (0, r.jsx)(o.Dio, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                children: P.hasResults
                    ? (0, r.jsx)(m.Z, {
                          channel: t,
                          startThread: T,
                          goToThread: y,
                          threadIds: P.results
                      })
                    : (0, r.jsx)(g.Z, {
                          channel: t,
                          startThread: T,
                          goToThread: y
                      })
            })
        })
    );
}
function p(e) {
    let { query: t, setQuery: n, submit: a, isLoading: s } = e;
    return (0, r.jsx)(o.E1j, {
        autoFocus: !0,
        className: Z.searchBox,
        query: t,
        isLoading: s,
        onChange: (e) => n(e),
        onClear: () => n(''),
        onKeyDown: (e) => 'Enter' === e.key && a(),
        placeholder: v.NW.string(v.t.h0JN7e),
        'aria-label': v.NW.string(v.t.h0JN7e)
    });
}
