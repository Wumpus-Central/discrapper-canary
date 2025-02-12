n.d(t, { Z: () => m }), n(47120);
var a = n(200651),
    l = n(192379),
    s = n(683860),
    r = n(481060),
    i = n(235449),
    o = n(487894),
    c = n(300234),
    d = n(388032),
    u = n(339996);
let h = new Set();
function m(e) {
    let { channel: t, startThread: n, goToThread: m } = e,
        { joinedThreadIds: x, unjoinedThreadIds: f } = (0, i.FO)(t),
        { threadIds: Z, canLoadMore: v, loading: j, loadMore: N } = (0, i.qQ)(t, s.z.LATEST_ACTIVITY, h),
        T = l.useRef(null);
    (0, i.r7)();
    let C = l.useCallback(
            (e) => {
                let t = 0 === e.section ? x : 1 === e.section ? f : Z;
                return (0, a.jsx)(
                    c.Z,
                    {
                        threadId: t[e.row],
                        goToThread: m
                    },
                    ''.concat(e.section, '-').concat(e.row)
                );
            },
            [Z, x, f, m]
        ),
        I = l.useCallback((e) => (0 === e.section ? (0, a.jsx)(g, { text: d.intl.formatToPlainString(d.t['4E27f3'], { count: x.length }) }, e.section) : 1 === e.section ? (0, a.jsx)(g, { text: d.intl.formatToPlainString(d.t.csPc4O, { count: f.length }) }, e.section) : (0, a.jsx)(g, { text: d.intl.string(d.t['wUNQ+/']) }, e.section)), [x.length, f.length]),
        p = l.useCallback((e) => (1 === e && x.length > 0 ? 64 : 2 === e && (x.length > 0 || f.length > 0) ? 64 : 32), [x.length, f.length]),
        E = l.useCallback(() => {
            var e;
            let t = null === (e = T.current) || void 0 === e ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = t.scrollTop + t.offsetHeight;
            t.scrollHeight - n < 200 && N();
        }, [N]);
    return 0 === x.length && 0 === f.length && 0 === Z.length
        ? j
            ? (0, a.jsx)('div', {
                  className: u.list,
                  children: (0, a.jsx)(r.$jN, { className: u.spinner })
              })
            : (0, a.jsx)('div', {
                  className: u.list,
                  children: (0, a.jsx)(o.Z, {
                      channel: t,
                      header: d.intl.string(d.t.HgTQ8v),
                      startThread: n
                  })
              })
        : (0, a.jsx)(r.aVo, {
              ref: T,
              className: u.list,
              fade: !0,
              sections: [x.length, f.length, Z.length],
              sectionHeight: p,
              rowHeight: 80,
              renderRow: C,
              renderSection: I,
              chunkSize: 20,
              onScroll: v ? E : void 0
          });
}
function g(e) {
    let { text: t } = e;
    return (0, a.jsx)(r.Text, {
        color: 'header-secondary',
        variant: 'text-xs/bold',
        className: u.sectionHeader,
        children: t
    });
}
