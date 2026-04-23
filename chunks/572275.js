s.d(t, { A: () => A });
var l = s(627968),
    n = s(64700),
    a = s(392421),
    r = s(602137),
    i = s(289873),
    o = s(475825),
    d = s(834730),
    c = s(424798),
    u = s(351633),
    h = s(663535),
    g = s(985018),
    m = s(351848);
let x = new Set();
function A(e) {
    let { channel: t, startThread: s, goToThread: d } = e,
        { joinedThreadIds: A, unjoinedThreadIds: j } = (0, c.jO)(t),
        {
            threadIds: v,
            canLoadMore: S,
            loading: T,
            loadMore: w,
        } = (0, c.Fr)(t, r.T.LATEST_ACTIVITY, x, a.n.MATCH_SOME),
        N = n.useRef(null);
    (0, c.Kk)();
    let p = n.useCallback(
            (e) => {
                let t = 0 === e.section ? A : 1 === e.section ? j : v;
                return (0, l.jsx)(h.A, { threadId: t[e.row], goToThread: d }, `${e.section}-${e.row}`);
            },
            [v, A, j, d],
        ),
        E = n.useCallback(
            (e) =>
                0 === e.section
                    ? (0, l.jsx)(f, { text: g.intl.formatToPlainString(g.t["4E27fz"], { count: A.length }) }, e.section)
                    : 1 === e.section
                      ? (0, l.jsx)(f, { text: g.intl.formatToPlainString(g.t.csPc4D, { count: j.length }) }, e.section)
                      : (0, l.jsx)(f, { text: g.intl.string(g.t["wUNQ+w"]) }, e.section),
            [A.length, j.length],
        ),
        y = n.useCallback(
            (e) => ((1 === e && A.length > 0) || (2 === e && (A.length > 0 || j.length > 0)) ? 64 : 32),
            [A.length, j.length],
        ),
        b = n.useCallback(() => {
            let e = N.current?.getScrollerState();
            if (null == e) return;
            let t = e.scrollTop + e.offsetHeight;
            e.scrollHeight - t < 200 && w();
        }, [w]);
    if (0 === A.length && 0 === j.length && 0 === v.length)
        if (T) return (0, l.jsx)("div", { className: m.p_, children: (0, l.jsx)(i.y, { className: m.u1 }) });
        else
            return (0, l.jsx)("div", {
                className: m.p_,
                children: (0, l.jsx)(u.A, { channel: t, header: g.intl.string(g.t.HgTQ8p), startThread: s }),
            });
    return (0, l.jsx)(o.OZ, {
        ref: N,
        className: m.p_,
        fade: !0,
        sections: [A.length, j.length, v.length],
        sectionHeight: y,
        rowHeight: 80,
        renderRow: p,
        renderSection: E,
        chunkSize: 20,
        onScroll: S ? b : void 0,
    });
}
function f(e) {
    let { text: t } = e;
    return (0, l.jsx)(d.E, { color: "text-default", variant: "text-xs/bold", className: m.bV, children: t });
}
