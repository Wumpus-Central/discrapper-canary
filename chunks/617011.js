s.d(t, { A: () => E });
var l = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(311907),
    o = s(821609),
    d = s(815021),
    c = s(707554),
    u = s(163328),
    h = s(534514),
    g = s(892547),
    m = s(576705),
    x = s(867455),
    A = s(406704),
    f = s(707539),
    j = s(836975),
    v = s(572275),
    S = s(747926),
    T = s(37411),
    w = s(652215),
    N = s(985018),
    p = s(702726);
function E(e) {
    let { channel: t, className: s, onClose: a, context: g } = e,
        E = (0, i.bG)([m.A], () => m.A.can(w.xBc.READ_MESSAGE_HISTORY, t)),
        b = (0, A.AI)(t),
        I = () => {
            a(), (0, S.Tv)(t, void 0, "Thread Browser Empty State");
        },
        C = n.useCallback(
            (e, t) => {
                a(), (0, S.JA)(e, !t, T.H9.BROWSER);
            },
            [a],
        ),
        _ = (function (e, t) {
            let [s, l] = n.useState(""),
                [a, r] = n.useState(!1),
                [i, o] = n.useState(!1),
                [d, c] = n.useState([]),
                u = async () => {
                    if (null != s && "" !== s && !a) {
                        r(!0);
                        try {
                            let l = await x.A.searchThreads(e, t, s);
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
                submit: u,
                results: d,
            };
        })(t.guild_id, t.id);
    return (
        n.useEffect(() => {
            (0, f.ju)();
        }, []),
        (0, l.jsx)("div", {
            className: r()(s, p.kL),
            children: (0, l.jsx)(c.F, {
                component: (0, l.jsxs)("div", {
                    className: p.wx,
                    children: [
                        (0, l.jsx)(u.y, { size: "md", color: "currentColor", className: p.aM }),
                        (0, l.jsx)(h.D, {
                            variant: "heading-md/semibold",
                            className: p.DD,
                            children: N.intl.string(N.t.E3H5lE),
                        }),
                        E
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [(0, l.jsx)("div", { className: p.yF }), (0, l.jsx)(y, { ..._ })],
                              })
                            : null,
                        (0, l.jsx)("div", { className: p.jH }),
                        b
                            ? (0, l.jsx)("div", {
                                  className: p.Tf,
                                  children: (0, l.jsx)(o.$, {
                                      size: "sm",
                                      onClick: () => {
                                          a(), (0, S.Tv)(t, void 0, "Thread Browser Toolbar");
                                      },
                                      text: N.intl.string(N.t.CumH4u),
                                  }),
                              })
                            : null,
                        "modal" === g
                            ? (0, l.jsx)("div", {
                                  className: p.ut,
                                  children: (0, l.jsx)(d.J, { size: "sm", onClick: a }),
                              })
                            : null,
                    ],
                }),
                children: _.hasResults
                    ? (0, l.jsx)(j.A, { channel: t, startThread: I, goToThread: C, threadIds: _.results })
                    : (0, l.jsx)(v.A, { channel: t, startThread: I, goToThread: C }),
            }),
        })
    );
}
function y(e) {
    let { query: t, setQuery: s, submit: n } = e;
    return (0, l.jsx)(g.I, {
        size: "sm",
        autoFocus: !0,
        query: t,
        onChange: (e) => s(e),
        onClear: () => s(""),
        onKeyDown: (e) => "Enter" === e.key && n(),
        placeholder: N.intl.string(N.t.h0JN7Q),
        "aria-label": N.intl.string(N.t.h0JN7Q),
    });
}
