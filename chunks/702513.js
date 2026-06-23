n.d(t, { A: () => Q });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(17928),
    c = n(821609),
    o = n(815021),
    d = n(707554),
    h = n(163328),
    u = n(534514),
    x = n(892547),
    g = n(576705),
    j = n(867455),
    m = n(406704),
    T = n(707539),
    f = n(475825),
    v = n(834730),
    N = n(303727),
    w = n(375708),
    S = n(322264);
function k(e) {
    let { channel: t, header: n, startThread: l } = e,
        r = (0, m.n)(t),
        a = (0, m.Tb)(t);
    return (0, s.jsxs)("div", {
        className: S.kL,
        children: [
            (0, s.jsxs)("div", {
                className: S.zc,
                children: [
                    (0, s.jsx)("div", {
                        className: S.Kk,
                        children: (0, s.jsx)(h.y, { size: "custom", color: "currentColor", width: 36, height: 36 }),
                    }),
                    (0, s.jsx)(N.A, { className: S.uf }),
                ],
            }),
            (0, s.jsx)(u.D, { className: S.wx, variant: "heading-xl/semibold", children: n }),
            (0, s.jsx)(v.E, { color: "text-default", variant: "text-md/normal", children: w.intl.string(w.t.jmq9GC) }),
            r || a
                ? (0, s.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: S.lO,
                      children: (0, s.jsx)(c.$, { variant: "primary", text: w.intl.string(w.t.rBIGBL), onClick: l }),
                  })
                : null,
        ],
    });
}
var p = n(707335),
    C = n(351848);
function b(e) {
    let { channel: t, threadIds: n, startThread: r, goToThread: i } = e,
        c = l.useCallback(
            (e) => (0, s.jsx)(p.A, { threadId: n[e.row], goToThread: i }, `${e.section}-${e.row}`),
            [n, i],
        );
    return 0 === n.length
        ? (0, s.jsx)(k, { channel: t, header: w.intl.string(w.t.HgTQ8p), startThread: r })
        : (0, s.jsx)(f.OZ, {
              className: a()(C.p_, C.uW),
              fade: !0,
              sections: [n.length],
              sectionHeight: 0,
              rowHeight: 80,
              renderRow: c,
              renderSection: () => null,
              chunkSize: 20,
          });
}
var A = n(392421),
    E = n(602137),
    H = n(289873),
    y = n(424798);
let _ = new Set();
function I(e) {
    let { channel: t, startThread: n, goToThread: r } = e,
        { joinedThreadIds: a, unjoinedThreadIds: i } = (0, y.jO)(t),
        {
            threadIds: c,
            canLoadMore: o,
            loading: d,
            loadMore: h,
        } = (0, y.Fr)(t, E.T.LATEST_ACTIVITY, _, A.n.MATCH_SOME),
        u = l.useRef(null);
    (0, y.Kk)();
    let x = l.useCallback(
            (e) => {
                let t = 0 === e.section ? a : 1 === e.section ? i : c;
                return (0, s.jsx)(p.A, { threadId: t[e.row], goToThread: r }, `${e.section}-${e.row}`);
            },
            [c, a, i, r],
        ),
        g = l.useCallback(
            (e) =>
                0 === e.section
                    ? (0, s.jsx)(z, { text: w.intl.formatToPlainString(w.t["4E27fz"], { count: a.length }) }, e.section)
                    : 1 === e.section
                      ? (0, s.jsx)(z, { text: w.intl.formatToPlainString(w.t.csPc4D, { count: i.length }) }, e.section)
                      : (0, s.jsx)(z, { text: w.intl.string(w.t["wUNQ+w"]) }, e.section),
            [a.length, i.length],
        ),
        j = l.useCallback(
            (e) => ((1 === e && a.length > 0) || (2 === e && (a.length > 0 || i.length > 0)) ? 64 : 32),
            [a.length, i.length],
        ),
        m = l.useCallback(() => {
            let e = u.current?.getScrollerState();
            if (null == e) return;
            let t = e.scrollTop + e.offsetHeight;
            e.scrollHeight - t < 200 && h();
        }, [h]);
    if (0 === a.length && 0 === i.length && 0 === c.length)
        if (d) return (0, s.jsx)("div", { className: C.p_, children: (0, s.jsx)(H.y, { className: C.u1 }) });
        else
            return (0, s.jsx)("div", {
                className: C.p_,
                children: (0, s.jsx)(k, { channel: t, header: w.intl.string(w.t.HgTQ8p), startThread: n }),
            });
    return (0, s.jsx)(f.OZ, {
        ref: u,
        className: C.p_,
        fade: !0,
        sections: [a.length, i.length, c.length],
        sectionHeight: j,
        rowHeight: 80,
        renderRow: x,
        renderSection: g,
        chunkSize: 20,
        onScroll: o ? m : void 0,
    });
}
function z(e) {
    let { text: t } = e;
    return (0, s.jsx)(v.E, { color: "text-default", variant: "text-xs/bold", className: C.bV, children: t });
}
var R = n(747926),
    D = n(37411),
    O = n(652215),
    B = n(702726);
function Q(e) {
    let { channel: t, className: n, onClose: r, context: x } = e,
        f = (0, i.bG)([g.A], () => g.A.can(O.xBc.READ_MESSAGE_HISTORY, t)),
        v = (0, m.AI)(t);
    function N() {
        r(), (0, R.Tv)(t, void 0, "Thread Browser Empty State");
    }
    let S = l.useCallback(
            (e, t) => {
                r(), (0, R.JA)(e, !t, D.H9.BROWSER);
            },
            [r],
        ),
        k = (function (e, t) {
            let [n, s] = l.useState(""),
                [r, a] = l.useState(!1),
                [i, c] = l.useState(!1),
                [o, d] = l.useState([]);
            async function h() {
                if (null != n && "" !== n && !r) {
                    a(!0);
                    try {
                        let s = await j.A.searchThreads(e, t, n);
                        c(!0), d(s);
                    } finally {
                        a(!1);
                    }
                }
            }
            return {
                query: n,
                setQuery: function (e) {
                    s(e), 0 === e.length && c(!1);
                },
                isLoading: r,
                hasResults: i,
                submit: h,
                results: o,
            };
        })(t.guild_id, t.id);
    return (
        l.useEffect(() => {
            (0, T.ju)();
        }, []),
        (0, s.jsx)("div", {
            className: a()(n, B.kL),
            children: (0, s.jsx)(d.F, {
                component: (0, s.jsxs)("div", {
                    className: B.wx,
                    children: [
                        (0, s.jsx)(h.y, { size: "md", color: "currentColor", className: B.aM }),
                        (0, s.jsx)(u.D, {
                            variant: "heading-md/semibold",
                            className: B.DD,
                            children: w.intl.string(w.t.E3H5lE),
                        }),
                        f
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [(0, s.jsx)("div", { className: B.yF }), (0, s.jsx)($, { ...k })],
                              })
                            : null,
                        (0, s.jsx)("div", { className: B.jH }),
                        v
                            ? (0, s.jsx)("div", {
                                  className: B.Tf,
                                  children: (0, s.jsx)(c.$, {
                                      size: "sm",
                                      onClick: function () {
                                          r(), (0, R.Tv)(t, void 0, "Thread Browser Toolbar");
                                      },
                                      text: w.intl.string(w.t.CumH4u),
                                  }),
                              })
                            : null,
                        "modal" === x
                            ? (0, s.jsx)("div", {
                                  className: B.ut,
                                  children: (0, s.jsx)(o.J, { size: "sm", onClick: r }),
                              })
                            : null,
                    ],
                }),
                children: k.hasResults
                    ? (0, s.jsx)(b, { channel: t, startThread: N, goToThread: S, threadIds: k.results })
                    : (0, s.jsx)(I, { channel: t, startThread: N, goToThread: S }),
            }),
        })
    );
}
function $(e) {
    let { query: t, setQuery: n, submit: l } = e;
    return (0, s.jsx)(x.I, {
        size: "sm",
        autoFocus: !0,
        query: t,
        onChange: (e) => n(e),
        onClear: () => n(""),
        onKeyDown: (e) => "Enter" === e.key && l(),
        placeholder: w.intl.string(w.t.h0JN7Q),
        "aria-label": w.intl.string(w.t.h0JN7Q),
    });
}
