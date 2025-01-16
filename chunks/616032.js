n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(990547),
    a = n(91192),
    o = n(481060),
    s = n(724757),
    c = n(213609),
    d = n(441358),
    u = n(426521),
    m = n(817456);
function h(e) {
    let { initialized: t, items: n, loading: h, loadMore: f } = e,
        p = r.useRef(null),
        _ = (0, s.Z)('for-you', p);
    (0, c.Z)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.NOTIFICATION_CENTER_LANDING,
            properties: { empty: 0 === n.length }
        },
        { disableTrack: !t },
        [t]
    );
    let g = () => {
        var e;
        let t = null === (e = p.current) || void 0 === e ? void 0 : e.getScrollerState();
        if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && f();
    };
    return t
        ? 0 === n.length
            ? (0, i.jsx)(d.v, {})
            : (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)(a.bG, {
                      navigator: _,
                      children: (0, i.jsx)(a.SJ, {
                          children: (e) => {
                              let { ref: t, ...r } = e;
                              return (0, i.jsxs)(o.AdvancedScroller, {
                                  className: m.container,
                                  ref: (e) => {
                                      var n;
                                      (p.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                                  },
                                  ...r,
                                  onScroll: g,
                                  children: [(0, i.jsx)(u.U, { items: n }), h ? (0, i.jsx)(o.Spinner, { className: m.spinner }) : null]
                              });
                          }
                      })
                  })
              })
        : (0, i.jsx)(o.Spinner, { className: m.loadingPlaceholder });
}
