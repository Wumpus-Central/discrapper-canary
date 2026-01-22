n.d(t, { A: () => p }), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    i = n(732955),
    c = n(397927),
    u = n(576705),
    d = n(867455),
    h = n(406704),
    g = n(707539),
    m = n(836975),
    f = n(572275),
    j = n(747926),
    x = n(37411),
    v = n(652215),
    b = n(985018),
    A = n(204199);
function p(e) {
    let { channel: t, className: n, onClose: a, context: p } = e,
        w = (0, o.bG)([u.A], () => u.A.can(v.xBc.READ_MESSAGE_HISTORY, t)),
        O = (0, h.AI)(t),
        S = () => {
            a(), (0, j.Tv)(t, void 0, "Thread Browser Empty State");
        },
        T = l.useCallback(
            (e, t) => {
                a(), (0, j.JA)(e, !t, x.H9.BROWSER);
            },
            [a],
        ),
        N = (function (e, t) {
            let [n, r] = l.useState(""),
                [a, s] = l.useState(!1),
                [o, i] = l.useState(!1),
                [c, u] = l.useState([]),
                h = async () => {
                    if (null != n && "" !== n && !a) {
                        s(!0);
                        try {
                            let r = await d.A.searchThreads(e, t, n);
                            i(!0), u(r);
                        } finally {
                            s(!1);
                        }
                    }
                };
            return {
                query: n,
                setQuery: (e) => {
                    r(e), 0 === e.length && i(!1);
                },
                isLoading: a,
                hasResults: o,
                submit: h,
                results: c,
            };
        })(t.guild_id, t.id);
    return (
        l.useEffect(() => {
            (0, g.ju)();
        }, []),
        (0, r.jsx)("div", {
            className: s()(n, A.kL),
            children: (0, r.jsx)(c.Fmo, {
                component: (0, r.jsxs)("div", {
                    className: A.wx,
                    children: [
                        (0, r.jsx)(c.ysw, {
                            size: "md",
                            color: "currentColor",
                            className: A.aM,
                        }),
                        (0, r.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            className: A.DD,
                            children: b.intl.string(b.t.E3H5lE),
                        }),
                        w
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("div", { className: A.yF }),
                                      (0, r.jsx)(
                                          y,
                                          (function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                      r = Object.keys(n);
                                                  "function" == typeof Object.getOwnPropertySymbols &&
                                                      (r = r.concat(
                                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                          }),
                                                      )),
                                                      r.forEach(function (t) {
                                                          var r;
                                                          (r = n[t]),
                                                              t in e
                                                                  ? Object.defineProperty(e, t, {
                                                                        value: r,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0,
                                                                    })
                                                                  : (e[t] = r);
                                                      });
                                              }
                                              return e;
                                          })({}, N),
                                      ),
                                  ],
                              })
                            : null,
                        (0, r.jsx)("div", { className: A.jH }),
                        O
                            ? (0, r.jsx)("div", {
                                  className: A.Tf,
                                  children: (0, r.jsx)(i.$nd, {
                                      size: "sm",
                                      onClick: () => {
                                          a(), (0, j.Tv)(t, void 0, "Thread Browser Toolbar");
                                      },
                                      text: b.intl.string(b.t.CumH4u),
                                  }),
                              })
                            : null,
                        "modal" === p
                            ? (0, r.jsx)("div", {
                                  className: A.ut,
                                  children: (0, r.jsx)(i.JnF, {
                                      size: "sm",
                                      onClick: a,
                                  }),
                              })
                            : null,
                    ],
                }),
                children: N.hasResults
                    ? (0, r.jsx)(m.A, {
                          channel: t,
                          startThread: S,
                          goToThread: T,
                          threadIds: N.results,
                      })
                    : (0, r.jsx)(f.A, {
                          channel: t,
                          startThread: S,
                          goToThread: T,
                      }),
            }),
        })
    );
}
function y(e) {
    let { query: t, setQuery: n, submit: l } = e;
    return (0, r.jsx)(c.IWV, {
        size: "sm",
        autoFocus: !0,
        query: t,
        onChange: (e) => n(e),
        onClear: () => n(""),
        onKeyDown: (e) => "Enter" === e.key && l(),
        placeholder: b.intl.string(b.t.h0JN7Q),
        "aria-label": b.intl.string(b.t.h0JN7Q),
    });
}
