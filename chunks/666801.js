l.d(t, { default: () => D });
var e = l(477900);
l(582128);
var i = l(980707),
    a = l(477782),
    r = l(442433),
    u = l(793574),
    s = l(688810),
    o = l(964355),
    c = l(824744),
    d = l(796774),
    b = l(813564),
    p = l(375708),
    h = l(17928),
    A = l(468689),
    f = l(931991),
    x = l(71393),
    g = l(652215);
function j(n) {
    let { guildId: t, onSelect: l, onPickerClose: u, onInteraction: j } = n,
        D = (function (n, t) {
            let l = (0, h.bG)([x.A], () => (null != n ? x.A.getGuild(n) : null)),
                { canCreateExpressions: i, canManageAllExpressions: r } = (0, f.nr)(l);
            return null != n && i && r
                ? (0, e.jsx)(a.Dr, {
                      id: p.intl.string(p.t["154/bL"]),
                      label: p.intl.string(p.t["154/bL"]),
                      action: function () {
                          null != n && (A.default.open(n, g.BEX.SOUNDBOARD), t?.());
                      },
                  })
                : null;
        })(t, u),
        k = (function () {
            let n = (0, b.wH)(),
                { analyticsLocations: t } = (0, s.Ay)();
            return (0, e.jsx)(a.aK, {
                id: "user-volume",
                "aria-haspopup": !0,
                label: p.intl.string(p.t.kbFsAD),
                control: (l, i) =>
                    (0, e.jsx)(o.i, {
                        ...l,
                        ref: i,
                        value: (0, c.M)(n),
                        maxValue: 100,
                        onChange: (n) => (0, d.iy)((0, c.w)(n), t),
                        "aria-label": p.intl.string(p.t.kbFsAD),
                    }),
            });
        })();
    return (0, e.jsx)(i.W, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: r.Z_,
        "aria-label": p.intl.string(p.t.liqwPJ),
        onSelect: l,
        onInteraction: j,
        children: (0, e.jsxs)(a.rX, { children: [k, D] }),
    });
}
function D(n) {
    let { analyticsLocations: t } = (0, s.Ay)(n.sourceAnalyticsLocations, u.A.SOUNDBOARD_CONTEXT_MENU);
    return (0, e.jsx)(s.f5, { value: t, children: (0, e.jsx)(j, { ...n }) });
}
