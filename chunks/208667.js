n.d(t, { A: () => A });
var s = n(627968),
    a = n(64700),
    l = n(110259),
    i = n(837381),
    r = n(289873),
    o = n(599319),
    d = n(928039),
    c = n(139286),
    u = n(688895),
    h = n(456425),
    _ = n(523396);
function A(e) {
    let { initialized: t, items: n, loading: A, loadMore: m } = e,
        g = a.useRef(null),
        f = (0, d.A)("for-you", g);
    (0, c.A)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.NOTIFICATION_CENTER_LANDING,
            properties: { empty: 0 === n.length },
        },
        { disableTrack: !t },
        [t],
    );
    let E = () => {
        let e = g.current?.getScrollerState();
        null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 1500 && m());
    };
    return t
        ? 0 === n.length
            ? (0, s.jsx)(u.H, {})
            : (0, s.jsx)(i.hD, {
                  navigator: f,
                  children: (0, s.jsx)(i.PR, {
                      children: (e) => {
                          let { ref: t, ...a } = e;
                          return (0, s.jsxs)(o.Ch, {
                              className: _.kL,
                              ref: (e) => {
                                  (g.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                              ...a,
                              onScroll: E,
                              children: [
                                  (0, s.jsx)(h.$, { items: n }),
                                  A ? (0, s.jsx)(r.y, { className: _.u1 }) : null,
                              ],
                          });
                      },
                  }),
              })
        : (0, s.jsx)(r.y, { className: _.k$ });
}
