n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(110259),
    a = n(837381),
    r = n(397927),
    o = n(928039),
    d = n(139286),
    c = n(688895),
    u = n(456425),
    h = n(18373);
function A(e) {
    let { initialized: t, items: n, loading: A, loadMore: m } = e,
        p = l.useRef(null),
        g = (0, o.A)("for-you", p);
    (0, d.A)(
        {
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.NOTIFICATION_CENTER_LANDING,
            properties: { empty: 0 === n.length },
        },
        { disableTrack: !t },
        [t],
    );
    let _ = () => {
        let e = p.current?.getScrollerState();
        null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 1500 && m());
    };
    return t
        ? 0 === n.length
            ? (0, i.jsx)(c.H, {})
            : (0, i.jsx)(a.hD, {
                  navigator: g,
                  children: (0, i.jsx)(a.PR, {
                      children: (e) => {
                          let { ref: t, ...l } = e;
                          return (0, i.jsxs)(r.T7Y, {
                              className: h.kL,
                              ref: (e) => {
                                  (p.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                              ...l,
                              onScroll: _,
                              children: [
                                  (0, i.jsx)(u.$, { items: n }),
                                  A ? (0, i.jsx)(r.y$y, { className: h.u1 }) : null,
                              ],
                          });
                      },
                  }),
              })
        : (0, i.jsx)(r.y$y, { className: h.k$ });
}
