"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(990078),
    r = n(397927),
    a = n(976860),
    o = n(93055),
    c = n(652215),
    d = n(525736),
    u = n(985018);
let h = s.lazy(() => n.e("60497").then(n.bind(n, 908424)));
function A(e) {
    let { className: t } = e,
        { hasAccess: n } = (0, o.TW)("FavoriteGuildHeaderActionButton"),
        A = s.useRef(null),
        m = n ? u.intl.string(d.default.G9fGlP) : u.intl.string(u.t.ojM1xJ),
        p = s.useCallback(() => {
            (0, a.pX)(c.BVt.ME);
        }, []),
        g = s.useCallback((e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(s.Suspense, {
                fallback: null,
                children: (0, i.jsx)(h, { navId: "favorite-guild-header-add-context", onClose: t, onSelect: t }),
            });
        }, []);
    return (0, i.jsx)(l.m, {
        text: m,
        position: "bottom",
        asContainer: !0,
        children: n
            ? (0, i.jsx)(r.YNO, {
                  targetElementRef: A,
                  position: "bottom",
                  align: "left",
                  spacing: 4,
                  renderPopout: g,
                  children: (e) =>
                      (0, i.jsx)(r.DUT, {
                          innerRef: A,
                          className: t,
                          "aria-label": m,
                          ...e,
                          children: (0, i.jsx)(r.TIR, { color: "currentColor", size: "refresh_sm" }),
                      }),
              })
            : (0, i.jsx)(r.DUT, {
                  className: t,
                  "aria-label": m,
                  onClick: p,
                  children: (0, i.jsx)(r.PGe, { color: "currentColor", size: "refresh_sm" }),
              }),
    });
}
