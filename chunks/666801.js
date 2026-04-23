l.d(t, { default: () => D });
var e = l(627968);
l(64700);
var i = l(550079),
    r = l(477782),
    a = l(442433),
    s = l(793574),
    u = l(688810),
    o = l(964355),
    c = l(824744),
    d = l(796774),
    b = l(536432),
    p = l(985018),
    A = l(17928),
    h = l(997509),
    x = l(931991),
    g = l(71393),
    f = l(652215);
function j(n) {
    let { guildId: t, onSelect: l, onPickerClose: s, onInteraction: j } = n,
        D = (function (n, t) {
            let l = (0, A.bG)([g.A], () => (null != n ? g.A.getGuild(n) : null)),
                { canCreateExpressions: i, canManageAllExpressions: a } = (0, x.nr)(l);
            return null != n && i && a
                ? (0, e.jsx)(r.Dr, {
                      id: p.intl.string(p.t["154/bL"]),
                      label: p.intl.string(p.t["154/bL"]),
                      action: () => {
                          h.A.open(n, f.BEX.SOUNDBOARD), t?.();
                      },
                  })
                : null;
        })(t, s),
        k = (function () {
            let n = (0, b.wH)(),
                { analyticsLocations: t } = (0, u.Ay)();
            return (0, e.jsx)(r.aK, {
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
        onClose: a.Z_,
        "aria-label": p.intl.string(p.t.liqwPJ),
        onSelect: l,
        onInteraction: j,
        children: (0, e.jsxs)(r.rX, { children: [k, D] }),
    });
}
function D(n) {
    let { analyticsLocations: t } = (0, u.Ay)(n.sourceAnalyticsLocations, s.A.SOUNDBOARD_CONTEXT_MENU);
    return (0, e.jsx)(u.f5, { value: t, children: (0, e.jsx)(j, { ...n }) });
}
