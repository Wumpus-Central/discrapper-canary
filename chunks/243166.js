var r = i(477900);
i(582128);
var s = i(503698),
    a = i.n(s),
    c = i(261958),
    e = i(444570),
    l = i(866665),
    o = i(939249),
    u = i(183555),
    d = i(612630),
    p = i(518477),
    h = i(792996),
    k = i(935922);
i.d(
    n,
    {},
    {
        A: function (t) {
            let { userId: n, isVisible: i, onOpenProfile: s } = t,
                { note: x } = (0, d.A)(n),
                b = null != x && "" !== x,
                g = b ? c.PaperIcon : e.PaperPlusIcon,
                C = b ? h.intl.string(h.t["gs+qcM"]) : h.intl.string(h.t["1ZZtts"]),
                N = b ? x : h.intl.string(h.t["1ZZtts"]),
                { trackUserProfileAction: P } = (0, u.NJ)();
            return (0, r.jsx)(l.m, {
                asContainer: !0,
                text: N,
                ariaHidden: !b,
                children: (0, r.jsx)(o.D, {
                    "aria-label": C,
                    onClick: function () {
                        (P({ action: "PRESS_ADD_NOTE" }), s?.({ tabSection: p.RP.USER_INFO, scrollTarget: p.bk.NOTE }));
                    },
                    className: a()(k.x, i && k.R),
                    children: (0, r.jsx)(g, { size: "xs", color: "currentColor" }),
                }),
            });
        },
    },
);
