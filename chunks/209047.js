n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(990078),
    a = n(265872),
    r = n(939249),
    o = n(499373),
    d = n(789645),
    c = n(976860),
    u = n(93055),
    h = n(652215),
    A = n(335993),
    _ = n(985018);
let m = l.lazy(() => n.e("60497").then(n.bind(n, 908424)));
function g(e) {
    let { className: t } = e,
        { hasAccess: n } = (0, u.TW)("FavoriteGuildHeaderActionButton"),
        g = l.useRef(null),
        p = n ? _.intl.string(A.default.G9fGlP) : _.intl.string(_.t.ojM1xJ),
        f = l.useCallback(() => {
            (0, c.pX)(h.BVt.ME);
        }, []),
        E = l.useCallback((e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(l.Suspense, {
                fallback: null,
                children: (0, i.jsx)(m, { navId: "favorite-guild-header-add-context", onClose: t, onSelect: t }),
            });
        }, []);
    return n
        ? (0, i.jsx)(a.Y, {
              targetElementRef: g,
              position: "bottom",
              align: "left",
              spacing: 4,
              renderPopout: E,
              children: (e, n) => {
                  let { isShown: l } = n;
                  return (0, i.jsx)(s.m, {
                      text: p,
                      position: "bottom",
                      asContainer: !0,
                      shouldShow: !l,
                      children: (0, i.jsx)(r.D, {
                          innerRef: g,
                          className: t,
                          "aria-label": p,
                          ...e,
                          children: (0, i.jsx)(o.T, { color: "currentColor", size: "refresh_sm" }),
                      }),
                  });
              },
          })
        : (0, i.jsx)(s.m, {
              text: p,
              position: "bottom",
              asContainer: !0,
              children: (0, i.jsx)(r.D, {
                  className: t,
                  "aria-label": p,
                  onClick: f,
                  children: (0, i.jsx)(d.P, { color: "currentColor", size: "refresh_sm" }),
              }),
          });
}
