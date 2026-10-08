n.d(t, { A: () => $ });
var s = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    i = n(17928),
    c = n(821609),
    o = n(815021),
    d = n(707554),
    h = n(163328),
    u = n(297264),
    g = n(683438),
    x = n(576705),
    m = n(867455),
    j = n(406704),
    f = n(707539),
    T = n(475825),
    v = n(62617);
function p(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: r, width: i, height: c, className: o, style: d } = e,
        h = l.useMemo(
            () => (0, v.H)({ width: i, height: c, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [i, c, d],
        );
    return (0, s.jsx)("img", {
        style: h,
        src: "https://cdn.discordapp.com/assets/content/a55e53565529b99537f24e9111b39ad84565ad76ac91760cfb5450a069dd640c.svg",
        className: (0, v.Z)(o),
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
var b = n(834730),
    N = n(660183),
    w = n(116379);
function S(e) {
    let { channel: t, header: n, startThread: l } = e,
        a = (0, j.n)(t),
        r = (0, j.Tb)(t);
    return (0, s.jsxs)("div", {
        className: w.kL,
        children: [
            (0, s.jsx)("div", {
                className: w.bm,
                children: (0, s.jsx)(p, { alt: "", ariaHidden: !0, width: 256, height: 144 }),
            }),
            (0, s.jsx)(u.D, { className: w.wx, variant: "heading-xl/semibold", children: n }),
            (0, s.jsx)(b.E, { color: "text-default", variant: "text-md/normal", children: N.intl.string(N.t.jmq9GC) }),
            a || r
                ? (0, s.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: w.lO,
                      children: (0, s.jsx)(c.$, { variant: "primary", text: N.intl.string(N.t.rBIGBL), onClick: l }),
                  })
                : null,
        ],
    });
}
var k = n(707335),
    C = n(798393);
function H(e) {
    let { channel: t, threadIds: n, startThread: a, goToThread: i } = e,
        c = l.useCallback(
            (e) => (0, s.jsx)(k.A, { threadId: n[e.row], goToThread: i }, `${e.section}-${e.row}`),
            [n, i],
        );
    return 0 === n.length
        ? (0, s.jsx)(S, { channel: t, header: N.intl.string(N.t.HgTQ8p), startThread: a })
        : (0, s.jsx)(T.OZ, {
              className: r()(C.p_, C.uW),
              fade: !0,
              sections: [n.length],
              sectionHeight: 0,
              rowHeight: 80,
              renderRow: c,
              renderSection: () => null,
              chunkSize: 20,
          });
}
var y = n(392421),
    E = n(602137),
    A = n(289873),
    _ = n(424798);
let I = new Set();
function R(e) {
    let { channel: t, startThread: n, goToThread: a } = e,
        { joinedThreadIds: r, unjoinedThreadIds: i } = (0, _.jO)(t),
        {
            threadIds: c,
            canLoadMore: o,
            loading: d,
            loadMore: h,
        } = (0, _.Fr)(t, E.T.LATEST_ACTIVITY, I, y.n.MATCH_SOME),
        u = l.useRef(null);
    (0, _.Kk)();
    let g = l.useCallback(
            (e) => {
                let t = 0 === e.section ? r : 1 === e.section ? i : c;
                return (0, s.jsx)(k.A, { threadId: t[e.row], goToThread: a }, `${e.section}-${e.row}`);
            },
            [c, r, i, a],
        ),
        x = l.useCallback(
            (e) =>
                0 === e.section
                    ? (0, s.jsx)(z, { text: N.intl.formatToPlainString(N.t["4E27fz"], { count: r.length }) }, e.section)
                    : 1 === e.section
                      ? (0, s.jsx)(z, { text: N.intl.formatToPlainString(N.t.csPc4D, { count: i.length }) }, e.section)
                      : (0, s.jsx)(z, { text: N.intl.string(N.t["wUNQ+w"]) }, e.section),
            [r.length, i.length],
        ),
        m = l.useCallback(
            (e) => ((1 === e && r.length > 0) || (2 === e && (r.length > 0 || i.length > 0)) ? 64 : 32),
            [r.length, i.length],
        ),
        j = l.useCallback(() => {
            let e = u.current?.getScrollerState();
            if (null == e) return;
            let t = e.scrollTop + e.offsetHeight;
            e.scrollHeight - t < 200 && h();
        }, [h]);
    if (0 === r.length && 0 === i.length && 0 === c.length)
        if (d) return (0, s.jsx)("div", { className: C.p_, children: (0, s.jsx)(A.y, { className: C.u1 }) });
        else
            return (0, s.jsx)("div", {
                className: C.p_,
                children: (0, s.jsx)(S, { channel: t, header: N.intl.string(N.t.HgTQ8p), startThread: n }),
            });
    return (0, s.jsx)(T.OZ, {
        ref: u,
        className: C.p_,
        fade: !0,
        sections: [r.length, i.length, c.length],
        sectionHeight: m,
        rowHeight: 80,
        renderRow: g,
        renderSection: x,
        chunkSize: 20,
        onScroll: o ? j : void 0,
    });
}
function z(e) {
    let { text: t } = e;
    return (0, s.jsx)(b.E, { color: "text-default", variant: "text-xs/bold", className: C.bV, children: t });
}
var D = n(747926),
    O = n(37411),
    B = n(652215),
    Q = n(37977);
function $(e) {
    let { channel: t, className: n, onClose: a, context: g } = e,
        T = (0, i.bG)([x.A], () => x.A.can(B.xBc.READ_MESSAGE_HISTORY, t)),
        v = (0, j.AI)(t);
    function p() {
        (a(), (0, D.Tv)(t, void 0, "Thread Browser Empty State"));
    }
    let b = l.useCallback(
            (e, t) => {
                (a(), (0, D.JA)(e, !t, O.H9.BROWSER));
            },
            [a],
        ),
        w = (function (e, t) {
            let [n, s] = l.useState(""),
                [a, r] = l.useState(!1),
                [i, c] = l.useState(!1),
                [o, d] = l.useState([]);
            async function h() {
                if (null != n && "" !== n && !a) {
                    r(!0);
                    try {
                        let s = await m.A.searchThreads(e, t, n);
                        (c(!0), d(s));
                    } finally {
                        r(!1);
                    }
                }
            }
            return {
                query: n,
                setQuery: function (e) {
                    (s(e), 0 === e.length && c(!1));
                },
                isLoading: a,
                hasResults: i,
                submit: h,
                results: o,
            };
        })(t.guild_id, t.id);
    return (
        l.useEffect(() => {
            (0, f.ju)();
        }, []),
        (0, s.jsx)("div", {
            className: r()(n, Q.kL),
            children: (0, s.jsx)(d.F, {
                component: (0, s.jsxs)("div", {
                    className: Q.wx,
                    children: [
                        (0, s.jsx)(h.y, { size: "md", color: "currentColor", className: Q.aM }),
                        (0, s.jsx)(u.D, {
                            variant: "heading-md/semibold",
                            className: Q.DD,
                            children: N.intl.string(N.t.E3H5lE),
                        }),
                        T
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [(0, s.jsx)("div", { className: Q.yF }), (0, s.jsx)(F, { ...w })],
                              })
                            : null,
                        (0, s.jsx)("div", { className: Q.jH }),
                        v
                            ? (0, s.jsx)("div", {
                                  className: Q.Tf,
                                  children: (0, s.jsx)(c.$, {
                                      size: "sm",
                                      onClick: function () {
                                          (a(), (0, D.Tv)(t, void 0, "Thread Browser Toolbar"));
                                      },
                                      text: N.intl.string(N.t.CumH4u),
                                  }),
                              })
                            : null,
                        "modal" === g
                            ? (0, s.jsx)("div", {
                                  className: Q.ut,
                                  children: (0, s.jsx)(o.J, { size: "sm", onClick: a }),
                              })
                            : null,
                    ],
                }),
                children: w.hasResults
                    ? (0, s.jsx)(H, { channel: t, startThread: p, goToThread: b, threadIds: w.results })
                    : (0, s.jsx)(R, { channel: t, startThread: p, goToThread: b }),
            }),
        })
    );
}
function F(e) {
    let { query: t, setQuery: n, submit: l } = e;
    return (0, s.jsx)(g.I, {
        size: "sm",
        autoFocus: !0,
        query: t,
        onChange: (e) => n(e),
        onClear: () => n(""),
        onKeyDown: (e) => "Enter" === e.key && l(),
        placeholder: N.intl.string(N.t.h0JN7Q),
        "aria-label": N.intl.string(N.t.h0JN7Q),
    });
}
