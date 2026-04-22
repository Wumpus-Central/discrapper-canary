"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(657044),
    r = n(761508),
    a = n(742589),
    o = n(976860),
    c = n(954571),
    d = n(144914),
    h = n(652215),
    p = n(985018),
    u = n(256855);
let A = (0, d.S)() || !1,
    m = s.memo(function (e) {
        let { currentRoute: t, renderToolbar: n } = e,
            d = s.useContext(c.AnalyticsContext),
            m = A || t === h.BVt.APPLICATION_LIBRARY_SETTINGS;
        return (0, i.jsxs)(a.A, {
            className: u.$,
            toolbar: n?.(),
            children: [
                (0, i.jsx)(a.A.Icon, { icon: l._, "aria-hidden": !0 }),
                (0, i.jsx)(a.A.Title, { children: p.intl.string(p.t.cw57ar) }),
                (0, i.jsx)(a.A.Divider, {}),
                (0, i.jsxs)(r.V, {
                    type: "top-pill",
                    selectedItem: t,
                    onItemSelect: function (e) {
                        e !== t &&
                            (0, o.pX)(e, {
                                state: {
                                    analyticsSource: {
                                        ...d.location,
                                        section: h.JJy.TABS,
                                        object: h.ZSU.NAVIGATION_LINK,
                                    },
                                },
                            });
                    },
                    children: [
                        (0, i.jsx)(r.V.Item, { id: h.BVt.APPLICATION_LIBRARY, children: p.intl.string(p.t.p7ARTB) }),
                        m
                            ? (0, i.jsx)(r.V.Item, {
                                  id: h.BVt.APPLICATION_LIBRARY_SETTINGS,
                                  children: p.intl.string(p.t["3D5yo/"]),
                              })
                            : null,
                    ],
                }),
            ],
        });
    });
