s.d(t, { A: () => m });
var l = s(627968),
    n = s(64700),
    a = s(392421),
    r = s(602137),
    i = s(397927),
    o = s(424798),
    d = s(351633),
    c = s(663535),
    u = s(985018),
    h = s(340399);
let g = new Set();
function m(e) {
    let { channel: t, startThread: s, goToThread: m } = e,
        { joinedThreadIds: A, unjoinedThreadIds: f } = (0, o.jO)(t),
        {
            threadIds: j,
            canLoadMore: v,
            loading: T,
            loadMore: w,
        } = (0, o.Fr)(t, r.T.LATEST_ACTIVITY, g, a.n.MATCH_SOME),
        S = n.useRef(null);
    (0, o.Kk)();
    let N = n.useCallback(
            (e) => {
                let t = 0 === e.section ? A : 1 === e.section ? f : j;
                return (0, l.jsx)(c.A, { threadId: t[e.row], goToThread: m }, `${e.section}-${e.row}`);
            },
            [j, A, f, m],
        ),
        p = n.useCallback(
            (e) =>
                0 === e.section
                    ? (0, l.jsx)(x, { text: u.intl.formatToPlainString(u.t["4E27fz"], { count: A.length }) }, e.section)
                    : 1 === e.section
                      ? (0, l.jsx)(x, { text: u.intl.formatToPlainString(u.t.csPc4D, { count: f.length }) }, e.section)
                      : (0, l.jsx)(x, { text: u.intl.string(u.t["wUNQ+w"]) }, e.section),
            [A.length, f.length],
        ),
        y = n.useCallback(
            (e) => ((1 === e && A.length > 0) || (2 === e && (A.length > 0 || f.length > 0)) ? 64 : 32),
            [A.length, f.length],
        ),
        b = n.useCallback(() => {
            let e = S.current?.getScrollerState();
            if (null == e) return;
            let t = e.scrollTop + e.offsetHeight;
            e.scrollHeight - t < 200 && w();
        }, [w]);
    if (0 === A.length && 0 === f.length && 0 === j.length)
        if (T) return (0, l.jsx)("div", { className: h.p_, children: (0, l.jsx)(i.y$y, { className: h.u1 }) });
        else
            return (0, l.jsx)("div", {
                className: h.p_,
                children: (0, l.jsx)(d.A, { channel: t, header: u.intl.string(u.t.HgTQ8p), startThread: s }),
            });
    return (0, l.jsx)(i.B8B, {
        ref: S,
        className: h.p_,
        fade: !0,
        sections: [A.length, f.length, j.length],
        sectionHeight: y,
        rowHeight: 80,
        renderRow: N,
        renderSection: p,
        chunkSize: 20,
        onScroll: v ? b : void 0,
    });
}
function x(e) {
    let { text: t } = e;
    return (0, l.jsx)(i.Text, { color: "text-default", variant: "text-xs/bold", className: h.bV, children: t });
}
