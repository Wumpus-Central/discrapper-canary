"use strict";
n.d(t, { A: () => h }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(688810),
    s = n(850046),
    o = n(183555),
    l = n(633075),
    u = n(289173),
    c = n(80330),
    d = n(139730),
    _ = n(783256),
    f = n(518477),
    p = n(985018);
function h(e) {
    let { user: t, widgets: n = [], onOpenUserProfileModal: h } = e,
        m = i.useMemo(() => n.filter((e) => e instanceof l.R), [n]),
        g = i.useMemo(() => m.map((e) => e.applicationId), [m]),
        { analyticsLocations: E } = (0, a.Ay)(),
        { trackUserProfileAction: A } = (0, o.NJ)(),
        I = (0, s.A)(t.id, g),
        T = i.useCallback(() => {
            h?.({ tabSection: f.RP.WIDGETS });
        }, [h]),
        y = i.useCallback(
            (e) => {
                let t = !1,
                    i = [];
                for (let a of n)
                    a instanceof l.R
                        ? null != I[a.applicationId] &&
                          i.push(
                              (0, r.jsx)(
                                  d.A,
                                  { previewData: I[a.applicationId], onClick: T, ...e },
                                  `application-widget-${a.applicationId}`,
                              ),
                          )
                        : a instanceof u.Yy &&
                          !t &&
                          (i.push((0, r.jsx)(_.A, { widgets: n, onClick: T, ...e }, "collection-breadcrumb")),
                          (t = !0));
                return i;
            },
            [I, T, n],
        );
    return 0 === n.length
        ? null
        : (0, r.jsx)(c.A, {
              renderCards: y,
              heading: p.intl.string(p.t.Y55Tua),
              onExpand: () => {
                  A({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: E }), T();
              },
          });
}
