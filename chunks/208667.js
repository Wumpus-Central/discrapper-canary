"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(110259),
    r = n(837381),
    a = n(397927),
    o = n(928039),
    c = n(139286),
    d = n(688895),
    u = n(456425),
    h = n(18373);
function A(e) {
    let { initialized: t, items: n, loading: A, loadMore: p } = e,
        g = s.useRef(null),
        m = (0, o.A)("for-you", g);
    (0, c.A)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.NOTIFICATION_CENTER_LANDING,
            properties: { empty: 0 === n.length },
        },
        { disableTrack: !t },
        [t],
    );
    let _ = () => {
        let e = g.current?.getScrollerState();
        null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 1500 && p());
    };
    return t
        ? 0 === n.length
            ? (0, i.jsx)(d.H, {})
            : (0, i.jsx)(r.hD, {
                  navigator: m,
                  children: (0, i.jsx)(r.PR, {
                      children: (e) => {
                          let { ref: t, ...s } = e;
                          return (0, i.jsxs)(a.T7Y, {
                              className: h.kL,
                              ref: (e) => {
                                  (g.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                              ...s,
                              onScroll: _,
                              children: [
                                  (0, i.jsx)(u.$, { items: n }),
                                  A ? (0, i.jsx)(a.y$y, { className: h.u1 }) : null,
                              ],
                          });
                      },
                  }),
              })
        : (0, i.jsx)(a.y$y, { className: h.k$ });
}
