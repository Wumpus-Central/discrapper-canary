n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    a = n(392421),
    s = n(602137),
    o = n(397927),
    i = n(424798),
    c = n(351633),
    u = n(663535),
    d = n(985018),
    h = n(340399);
let g = new Set();

function m(e) {
    let { channel: t, startThread: n, goToThread: m } = e,
        { joinedThreadIds: j, unjoinedThreadIds: x } = (0, i.jO)(t),
        {
            threadIds: v,
            canLoadMore: b,
            loading: A,
            loadMore: p,
        } = (0, i.Fr)(t, s.T.LATEST_ACTIVITY, g, a.n.MATCH_SOME),
        y = l.useRef(null);
    (0, i.Kk)();
    let w = l.useCallback(
            (e) => {
                let t = 0 === e.section ? j : 1 === e.section ? x : v;
                return (0, r.jsx)(
                    u.A,
                    {
                        threadId: t[e.row],
                        goToThread: m,
                    },
                    "".concat(e.section, "-").concat(e.row),
                );
            },
            [v, j, x, m],
        ),
        O = l.useCallback(
            (e) =>
                0 === e.section
                    ? (0, r.jsx)(
                          f,
                          {
                              text: d.intl.formatToPlainString(d.t["4E27fz"], {
                                  count: j.length,
                              }),
                          },
                          e.section,
                      )
                    : 1 === e.section
                      ? (0, r.jsx)(
                            f,
                            {
                                text: d.intl.formatToPlainString(d.t.csPc4D, {
                                    count: x.length,
                                }),
                            },
                            e.section,
                        )
                      : (0, r.jsx)(
                            f,
                            {
                                text: d.intl.string(d.t["wUNQ+w"]),
                            },
                            e.section,
                        ),
            [j.length, x.length],
        ),
        S = l.useCallback(
            (e) => ((1 === e && j.length > 0) || (2 === e && (j.length > 0 || x.length > 0)) ? 64 : 32),
            [j.length, x.length],
        ),
        T = l.useCallback(() => {
            var e;
            let t = null == (e = y.current) ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = t.scrollTop + t.offsetHeight;
            t.scrollHeight - n < 200 && p();
        }, [p]);
    if (0 === j.length && 0 === x.length && 0 === v.length)
        if (A)
            return (0, r.jsx)("div", {
                className: h.p_,
                children: (0, r.jsx)(o.y$y, {
                    className: h.u1,
                }),
            });
        else
            return (0, r.jsx)("div", {
                className: h.p_,
                children: (0, r.jsx)(c.A, {
                    channel: t,
                    header: d.intl.string(d.t.HgTQ8p),
                    startThread: n,
                }),
            });
    return (0, r.jsx)(o.B8B, {
        ref: y,
        className: h.p_,
        fade: !0,
        sections: [j.length, x.length, v.length],
        sectionHeight: S,
        rowHeight: 80,
        renderRow: w,
        renderSection: O,
        chunkSize: 20,
        onScroll: b ? T : void 0,
    });
}

function f(e) {
    let { text: t } = e;
    return (0, r.jsx)(o.Text, {
        color: "text-default",
        variant: "text-xs/bold",
        className: h.bV,
        children: t,
    });
}
