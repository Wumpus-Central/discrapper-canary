n.d(t, { Z: () => m }), n(388685);
var r = n(200651),
    a = n(192379),
    l = n(697988),
    s = n(683860),
    i = n(481060),
    o = n(235449),
    c = n(487894),
    d = n(300234),
    u = n(388032),
    h = n(524855);
let g = new Set();
function m(e) {
    let { channel: t, startThread: n, goToThread: m } = e,
        { joinedThreadIds: x, unjoinedThreadIds: j } = (0, o.FO)(t),
        { threadIds: v, canLoadMore: Z, loading: N, loadMore: p } = (0, o.qQ)(t, s.z.LATEST_ACTIVITY, g, l.z.MATCH_SOME),
        b = a.useRef(null);
    (0, o.r7)();
    let T = a.useCallback(
            (e) => {
                let t = 0 === e.section ? x : 1 === e.section ? j : v;
                return (0, r.jsx)(
                    d.Z,
                    {
                        threadId: t[e.row],
                        goToThread: m
                    },
                    ''.concat(e.section, '-').concat(e.row)
                );
            },
            [v, x, j, m]
        ),
        y = a.useCallback((e) => (0 === e.section ? (0, r.jsx)(f, { text: u.NW.formatToPlainString(u.t['4E27f3'], { count: x.length }) }, e.section) : 1 === e.section ? (0, r.jsx)(f, { text: u.NW.formatToPlainString(u.t.csPc4O, { count: j.length }) }, e.section) : (0, r.jsx)(f, { text: u.NW.string(u.t['wUNQ+/']) }, e.section)), [x.length, j.length]),
        P = a.useCallback((e) => ((1 === e && x.length > 0) || (2 === e && (x.length > 0 || j.length > 0)) ? 64 : 32), [x.length, j.length]),
        C = a.useCallback(() => {
            var e;
            let t = null == (e = b.current) ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = t.scrollTop + t.offsetHeight;
            t.scrollHeight - n < 200 && p();
        }, [p]);
    if (0 === x.length && 0 === j.length && 0 === v.length)
        if (N)
            return (0, r.jsx)('div', {
                className: h.list,
                children: (0, r.jsx)(i.$jN, { className: h.spinner })
            });
        else
            return (0, r.jsx)('div', {
                className: h.list,
                children: (0, r.jsx)(c.Z, {
                    channel: t,
                    header: u.NW.string(u.t.HgTQ8v),
                    startThread: n
                })
            });
    return (0, r.jsx)(i.aVo, {
        ref: b,
        className: h.list,
        fade: !0,
        sections: [x.length, j.length, v.length],
        sectionHeight: P,
        rowHeight: 80,
        renderRow: T,
        renderSection: y,
        chunkSize: 20,
        onScroll: Z ? C : void 0
    });
}
function f(e) {
    let { text: t } = e;
    return (0, r.jsx)(i.Text, {
        color: 'header-secondary',
        variant: 'text-xs/bold',
        className: h.sectionHeader,
        children: t
    });
}
