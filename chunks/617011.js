s.d(t, { A: () => w });
var l = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(311907),
    o = s(732955),
    d = s(397927),
    c = s(576705),
    u = s(867455),
    h = s(406704),
    g = s(707539),
    m = s(836975),
    x = s(572275),
    A = s(747926),
    f = s(37411),
    j = s(652215),
    v = s(985018),
    T = s(204199);
function w(e) {
    let { channel: t, className: s, onClose: a, context: w } = e,
        N = (0, i.bG)([c.A], () => c.A.can(j.xBc.READ_MESSAGE_HISTORY, t)),
        p = (0, h.AI)(t),
        y = () => {
            a(), (0, A.Tv)(t, void 0, "Thread Browser Empty State");
        },
        b = n.useCallback(
            (e, t) => {
                a(), (0, A.JA)(e, !t, f.H9.BROWSER);
            },
            [a],
        ),
        C = (function (e, t) {
            let [s, l] = n.useState(""),
                [a, r] = n.useState(!1),
                [i, o] = n.useState(!1),
                [d, c] = n.useState([]),
                h = async () => {
                    if (null != s && "" !== s && !a) {
                        r(!0);
                        try {
                            let l = await u.A.searchThreads(e, t, s);
                            o(!0), c(l);
                        } finally {
                            r(!1);
                        }
                    }
                };
            return {
                query: s,
                setQuery: (e) => {
                    l(e), 0 === e.length && o(!1);
                },
                isLoading: a,
                hasResults: i,
                submit: h,
                results: d,
            };
        })(t.guild_id, t.id);
    return (
        n.useEffect(() => {
            (0, g.ju)();
        }, []),
        (0, l.jsx)("div", {
            className: r()(s, T.kL),
            children: (0, l.jsx)(d.Fmo, {
                component: (0, l.jsxs)("div", {
                    className: T.wx,
                    children: [
                        (0, l.jsx)(d.ysw, { size: "md", color: "currentColor", className: T.aM }),
                        (0, l.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            className: T.DD,
                            children: v.intl.string(v.t.E3H5lE),
                        }),
                        N
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [(0, l.jsx)("div", { className: T.yF }), (0, l.jsx)(S, { ...C })],
                              })
                            : null,
                        (0, l.jsx)("div", { className: T.jH }),
                        p
                            ? (0, l.jsx)("div", {
                                  className: T.Tf,
                                  children: (0, l.jsx)(o.$nd, {
                                      size: "sm",
                                      onClick: () => {
                                          a(), (0, A.Tv)(t, void 0, "Thread Browser Toolbar");
                                      },
                                      text: v.intl.string(v.t.CumH4u),
                                  }),
                              })
                            : null,
                        "modal" === w
                            ? (0, l.jsx)("div", {
                                  className: T.ut,
                                  children: (0, l.jsx)(o.JnF, { size: "sm", onClick: a }),
                              })
                            : null,
                    ],
                }),
                children: C.hasResults
                    ? (0, l.jsx)(m.A, { channel: t, startThread: y, goToThread: b, threadIds: C.results })
                    : (0, l.jsx)(x.A, { channel: t, startThread: y, goToThread: b }),
            }),
        })
    );
}
function S(e) {
    let { query: t, setQuery: s, submit: n } = e;
    return (0, l.jsx)(d.IWV, {
        size: "sm",
        autoFocus: !0,
        query: t,
        onChange: (e) => s(e),
        onClear: () => s(""),
        onKeyDown: (e) => "Enter" === e.key && n(),
        placeholder: v.intl.string(v.t.h0JN7Q),
        "aria-label": v.intl.string(v.t.h0JN7Q),
    });
}
