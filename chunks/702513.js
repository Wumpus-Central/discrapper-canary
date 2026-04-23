s.d(t, { A: () => D });
var l = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(17928),
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
    j = s(475825),
    v = s(834730),
    S = s(303727),
    T = s(985018),
    w = s(322264);
function N(e) {
    let { channel: t, header: s, startThread: n } = e,
        a = (0, A.n)(t),
        r = (0, A.Tb)(t);
    return (0, l.jsxs)("div", {
        className: w.kL,
        children: [
            (0, l.jsxs)("div", {
                className: w.zc,
                children: [
                    (0, l.jsx)("div", {
                        className: w.Kk,
                        children: (0, l.jsx)(u.y, { size: "custom", color: "currentColor", width: 36, height: 36 }),
                    }),
                    (0, l.jsx)(S.A, { className: w.uf }),
                ],
            }),
            (0, l.jsx)(h.D, { className: w.wx, variant: "heading-xl/semibold", children: s }),
            (0, l.jsx)(v.E, { color: "text-default", variant: "text-md/normal", children: T.intl.string(T.t.jmq9GC) }),
            a || r
                ? (0, l.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: w.lO,
                      children: (0, l.jsx)(o.$, { variant: "primary", text: T.intl.string(T.t.rBIGBL), onClick: n }),
                  })
                : null,
        ],
    });
}
var p = s(707335),
    E = s(351848);
function y(e) {
    let { channel: t, threadIds: s, startThread: a, goToThread: i } = e,
        o = n.useCallback(
            (e) => (0, l.jsx)(p.A, { threadId: s[e.row], goToThread: i }, `${e.section}-${e.row}`),
            [s, i],
        );
    return 0 === s.length
        ? (0, l.jsx)(N, { channel: t, header: T.intl.string(T.t.HgTQ8p), startThread: a })
        : (0, l.jsx)(j.OZ, {
              className: r()(E.p_, E.uW),
              fade: !0,
              sections: [s.length],
              sectionHeight: 0,
              rowHeight: 80,
              renderRow: o,
              renderSection: () => null,
              chunkSize: 20,
          });
}
var b = s(392421),
    I = s(602137),
    C = s(289873),
    _ = s(424798);
let k = new Set();
function M(e) {
    let { channel: t, startThread: s, goToThread: a } = e,
        { joinedThreadIds: r, unjoinedThreadIds: i } = (0, _.jO)(t),
        {
            threadIds: o,
            canLoadMore: d,
            loading: c,
            loadMore: u,
        } = (0, _.Fr)(t, I.T.LATEST_ACTIVITY, k, b.n.MATCH_SOME),
        h = n.useRef(null);
    (0, _.Kk)();
    let g = n.useCallback(
            (e) => {
                let t = 0 === e.section ? r : 1 === e.section ? i : o;
                return (0, l.jsx)(p.A, { threadId: t[e.row], goToThread: a }, `${e.section}-${e.row}`);
            },
            [o, r, i, a],
        ),
        m = n.useCallback(
            (e) =>
                0 === e.section
                    ? (0, l.jsx)(R, { text: T.intl.formatToPlainString(T.t["4E27fz"], { count: r.length }) }, e.section)
                    : 1 === e.section
                      ? (0, l.jsx)(R, { text: T.intl.formatToPlainString(T.t.csPc4D, { count: i.length }) }, e.section)
                      : (0, l.jsx)(R, { text: T.intl.string(T.t["wUNQ+w"]) }, e.section),
            [r.length, i.length],
        ),
        x = n.useCallback(
            (e) => ((1 === e && r.length > 0) || (2 === e && (r.length > 0 || i.length > 0)) ? 64 : 32),
            [r.length, i.length],
        ),
        A = n.useCallback(() => {
            let e = h.current?.getScrollerState();
            if (null == e) return;
            let t = e.scrollTop + e.offsetHeight;
            e.scrollHeight - t < 200 && u();
        }, [u]);
    if (0 === r.length && 0 === i.length && 0 === o.length)
        if (c) return (0, l.jsx)("div", { className: E.p_, children: (0, l.jsx)(C.y, { className: E.u1 }) });
        else
            return (0, l.jsx)("div", {
                className: E.p_,
                children: (0, l.jsx)(N, { channel: t, header: T.intl.string(T.t.HgTQ8p), startThread: s }),
            });
    return (0, l.jsx)(j.OZ, {
        ref: h,
        className: E.p_,
        fade: !0,
        sections: [r.length, i.length, o.length],
        sectionHeight: x,
        rowHeight: 80,
        renderRow: g,
        renderSection: m,
        chunkSize: 20,
        onScroll: d ? A : void 0,
    });
}
function R(e) {
    let { text: t } = e;
    return (0, l.jsx)(v.E, { color: "text-default", variant: "text-xs/bold", className: E.bV, children: t });
}
var F = s(747926),
    G = s(37411),
    H = s(652215),
    B = s(702726);
function D(e) {
    let { channel: t, className: s, onClose: a, context: g } = e,
        j = (0, i.bG)([m.A], () => m.A.can(H.xBc.READ_MESSAGE_HISTORY, t)),
        v = (0, A.AI)(t),
        S = () => {
            a(), (0, F.Tv)(t, void 0, "Thread Browser Empty State");
        },
        w = n.useCallback(
            (e, t) => {
                a(), (0, F.JA)(e, !t, G.H9.BROWSER);
            },
            [a],
        ),
        N = (function (e, t) {
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
            className: r()(s, B.kL),
            children: (0, l.jsx)(c.F, {
                component: (0, l.jsxs)("div", {
                    className: B.wx,
                    children: [
                        (0, l.jsx)(u.y, { size: "md", color: "currentColor", className: B.aM }),
                        (0, l.jsx)(h.D, {
                            variant: "heading-md/semibold",
                            className: B.DD,
                            children: T.intl.string(T.t.E3H5lE),
                        }),
                        j
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [(0, l.jsx)("div", { className: B.yF }), (0, l.jsx)(K, { ...N })],
                              })
                            : null,
                        (0, l.jsx)("div", { className: B.jH }),
                        v
                            ? (0, l.jsx)("div", {
                                  className: B.Tf,
                                  children: (0, l.jsx)(o.$, {
                                      size: "sm",
                                      onClick: () => {
                                          a(), (0, F.Tv)(t, void 0, "Thread Browser Toolbar");
                                      },
                                      text: T.intl.string(T.t.CumH4u),
                                  }),
                              })
                            : null,
                        "modal" === g
                            ? (0, l.jsx)("div", {
                                  className: B.ut,
                                  children: (0, l.jsx)(d.J, { size: "sm", onClick: a }),
                              })
                            : null,
                    ],
                }),
                children: N.hasResults
                    ? (0, l.jsx)(y, { channel: t, startThread: S, goToThread: w, threadIds: N.results })
                    : (0, l.jsx)(M, { channel: t, startThread: S, goToThread: w }),
            }),
        })
    );
}
function K(e) {
    let { query: t, setQuery: s, submit: n } = e;
    return (0, l.jsx)(g.I, {
        size: "sm",
        autoFocus: !0,
        query: t,
        onChange: (e) => s(e),
        onClear: () => s(""),
        onKeyDown: (e) => "Enter" === e.key && n(),
        placeholder: T.intl.string(T.t.h0JN7Q),
        "aria-label": T.intl.string(T.t.h0JN7Q),
    });
}
