n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var a = n(200651),
    l = n(192379),
    r = n(683860),
    s = n(481060),
    i = n(235449),
    o = n(487894),
    c = n(300234),
    d = n(388032),
    u = n(773159);
let h = new Set();
function m(e) {
    let { channel: t, startThread: n, goToThread: m } = e,
        { joinedThreadIds: f, unjoinedThreadIds: x } = (0, i.FO)(t),
        { threadIds: v, canLoadMore: Z, loading: j, loadMore: N } = (0, i.qQ)(t, r.z.LATEST_ACTIVITY, h),
        T = l.useRef(null);
    (0, i.r7)();
    let I = l.useCallback(
            (e) => {
                let t = 0 === e.section ? f : 1 === e.section ? x : v;
                return (0, a.jsx)(
                    c.Z,
                    {
                        threadId: t[e.row],
                        goToThread: m
                    },
                    ''.concat(e.section, '-').concat(e.row)
                );
            },
            [v, f, x, m]
        ),
        C = l.useCallback((e) => (0 === e.section ? (0, a.jsx)(g, { text: d.intl.formatToPlainString(d.t['4E27f3'], { count: f.length }) }, e.section) : 1 === e.section ? (0, a.jsx)(g, { text: d.intl.formatToPlainString(d.t.csPc4O, { count: x.length }) }, e.section) : (0, a.jsx)(g, { text: d.intl.string(d.t['wUNQ+/']) }, e.section)), [f.length, x.length]),
        p = l.useCallback((e) => (1 === e && f.length > 0 ? 64 : 2 === e && (f.length > 0 || x.length > 0) ? 64 : 32), [f.length, x.length]),
        S = l.useCallback(() => {
            var e;
            let t = null === (e = T.current) || void 0 === e ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = t.scrollTop + t.offsetHeight;
            t.scrollHeight - n < 200 && N();
        }, [N]);
    if (0 === f.length && 0 === x.length && 0 === v.length)
        return j
            ? (0, a.jsx)('div', {
                  className: u.list,
                  children: (0, a.jsx)(s.Spinner, { className: u.spinner })
              })
            : (0, a.jsx)('div', {
                  className: u.list,
                  children: (0, a.jsx)(o.Z, {
                      channel: t,
                      header: d.intl.string(d.t.HgTQ8v),
                      startThread: n
                  })
              });
    return (0, a.jsx)(s.List, {
        ref: T,
        className: u.list,
        fade: !0,
        sections: [f.length, x.length, v.length],
        sectionHeight: p,
        rowHeight: 80,
        renderRow: I,
        renderSection: C,
        chunkSize: 20,
        onScroll: Z ? S : void 0
    });
}
function g(e) {
    let { text: t } = e;
    return (0, a.jsx)(s.Text, {
        color: 'header-secondary',
        variant: 'text-xs/bold',
        className: u.sectionHeader,
        children: t
    });
}
