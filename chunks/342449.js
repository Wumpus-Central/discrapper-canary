n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(683860),
    s = n(481060),
    i = n(235449),
    o = n(487894),
    c = n(300234),
    d = n(388032),
    u = n(258033);
let h = new Set();
function g(e) {
    let { channel: t, startThread: n, goToThread: g } = e,
        { joinedThreadIds: f, unjoinedThreadIds: x } = (0, i.FO)(t),
        { threadIds: j, canLoadMore: v, loading: Z, loadMore: N } = (0, i.qQ)(t, l.z.LATEST_ACTIVITY, h),
        p = a.useRef(null);
    (0, i.r7)();
    let b = a.useCallback(
            (e) => {
                let t = 0 === e.section ? f : 1 === e.section ? x : j;
                return (0, r.jsx)(
                    c.Z,
                    {
                        threadId: t[e.row],
                        goToThread: g
                    },
                    ''.concat(e.section, '-').concat(e.row)
                );
            },
            [j, f, x, g]
        ),
        T = a.useCallback((e) => (0 === e.section ? (0, r.jsx)(m, { text: d.NW.formatToPlainString(d.t['4E27f3'], { count: f.length }) }, e.section) : 1 === e.section ? (0, r.jsx)(m, { text: d.NW.formatToPlainString(d.t.csPc4O, { count: x.length }) }, e.section) : (0, r.jsx)(m, { text: d.NW.string(d.t['wUNQ+/']) }, e.section)), [f.length, x.length]),
        y = a.useCallback((e) => ((1 === e && f.length > 0) || (2 === e && (f.length > 0 || x.length > 0)) ? 64 : 32), [f.length, x.length]),
        P = a.useCallback(() => {
            var e;
            let t = null == (e = p.current) ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = t.scrollTop + t.offsetHeight;
            t.scrollHeight - n < 200 && N();
        }, [N]);
    if (0 === f.length && 0 === x.length && 0 === j.length)
        if (Z)
            return (0, r.jsx)('div', {
                className: u.list,
                children: (0, r.jsx)(s.$jN, { className: u.spinner })
            });
        else
            return (0, r.jsx)('div', {
                className: u.list,
                children: (0, r.jsx)(o.Z, {
                    channel: t,
                    header: d.NW.string(d.t.HgTQ8v),
                    startThread: n
                })
            });
    return (0, r.jsx)(s.aVo, {
        ref: p,
        className: u.list,
        fade: !0,
        sections: [f.length, x.length, j.length],
        sectionHeight: y,
        rowHeight: 80,
        renderRow: b,
        renderSection: T,
        chunkSize: 20,
        onScroll: v ? P : void 0
    });
}
function m(e) {
    let { text: t } = e;
    return (0, r.jsx)(s.Text, {
        color: 'header-secondary',
        variant: 'text-xs/bold',
        className: u.sectionHeader,
        children: t
    });
}
