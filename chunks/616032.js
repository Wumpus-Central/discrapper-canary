n.d(t, { Z: () => _ });
var i = n(200651),
    l = n(192379),
    a = n(990547),
    r = n(91192),
    s = n(481060),
    o = n(724757),
    c = n(213609),
    d = n(441358),
    u = n(426521),
    m = n(301179);
function _(e) {
    let { initialized: t, items: n, loading: _, loadMore: h } = e,
        p = l.useRef(null),
        g = (0, o.Z)('for-you', p);
    (0, c.Z)(
        {
            type: a.ImpressionTypes.VIEW,
            name: a.ImpressionNames.NOTIFICATION_CENTER_LANDING,
            properties: { empty: 0 === n.length }
        },
        { disableTrack: !t },
        [t]
    );
    let f = () => {
        var e;
        let t = null === (e = p.current) || void 0 === e ? void 0 : e.getScrollerState();
        null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && h();
    };
    return t
        ? 0 === n.length
            ? (0, i.jsx)(d.v, {})
            : (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)(r.bG, {
                      navigator: g,
                      children: (0, i.jsx)(r.SJ, {
                          children: (e) => {
                              let { ref: t, ...l } = e;
                              return (0, i.jsxs)(s.Den, {
                                  className: m.container,
                                  ref: (e) => {
                                      var n;
                                      (p.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                                  },
                                  ...l,
                                  onScroll: f,
                                  children: [(0, i.jsx)(u.U, { items: n }), _ ? (0, i.jsx)(s.$jN, { className: m.spinner }) : null]
                              });
                          }
                      })
                  })
              })
        : (0, i.jsx)(s.$jN, { className: m.loadingPlaceholder });
}
