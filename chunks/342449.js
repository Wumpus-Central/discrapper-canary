(n.d(t, { Z: () => m }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(697988),
    s = n(683860),
    o = n(481060),
    i = n(235449),
    c = n(487894),
    d = n(300234),
    u = n(388032),
    h = n(258033);
let g = new Set();
function m(e) {
    let { channel: t, startThread: n, goToThread: m } = e,
        { joinedThreadIds: j, unjoinedThreadIds: v } = (0, i.FO)(t),
        { threadIds: x, canLoadMore: p, loading: b, loadMore: Z } = (0, i.qQ)(t, s.z.LATEST_ACTIVITY, g, a.z.MATCH_SOME),
        y = l.useRef(null);
    (0, i.r7)();
    let O = l.useCallback(
            (e) => {
                let t = 0 === e.section ? j : 1 === e.section ? v : x;
                return (0, r.jsx)(
                    d.Z,
                    {
                        threadId: t[e.row],
                        goToThread: m
                    },
                    ''.concat(e.section, '-').concat(e.row)
                );
            },
            [x, j, v, m]
        ),
        w = l.useCallback((e) => (0 === e.section ? (0, r.jsx)(f, { text: u.intl.formatToPlainString(u.t['4E27f3'], { count: j.length }) }, e.section) : 1 === e.section ? (0, r.jsx)(f, { text: u.intl.formatToPlainString(u.t.csPc4O, { count: v.length }) }, e.section) : (0, r.jsx)(f, { text: u.intl.string(u.t['wUNQ+/']) }, e.section)), [j.length, v.length]),
        N = l.useCallback((e) => ((1 === e && j.length > 0) || (2 === e && (j.length > 0 || v.length > 0)) ? 64 : 32), [j.length, v.length]),
        S = l.useCallback(() => {
            var e;
            let t = null == (e = y.current) ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = t.scrollTop + t.offsetHeight;
            t.scrollHeight - n < 200 && Z();
        }, [Z]);
    if (0 === j.length && 0 === v.length && 0 === x.length)
        if (b)
            return (0, r.jsx)('div', {
                className: h.list,
                children: (0, r.jsx)(o.$jN, { className: h.spinner })
            });
        else
            return (0, r.jsx)('div', {
                className: h.list,
                children: (0, r.jsx)(c.Z, {
                    channel: t,
                    header: u.intl.string(u.t.HgTQ8v),
                    startThread: n
                })
            });
    return (0, r.jsx)(o.aVo, {
        ref: y,
        className: h.list,
        fade: !0,
        sections: [j.length, v.length, x.length],
        sectionHeight: N,
        rowHeight: 80,
        renderRow: O,
        renderSection: w,
        chunkSize: 20,
        onScroll: p ? S : void 0
    });
}
function f(e) {
    let { text: t } = e;
    return (0, r.jsx)(o.Text, {
        color: 'header-secondary',
        variant: 'text-xs/bold',
        className: h.sectionHeader,
        children: t
    });
}
