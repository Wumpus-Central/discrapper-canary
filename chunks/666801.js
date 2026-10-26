e.d(t, { default: () => D });
var l = e(477900),
    i = e(582128),
    r = e(980707),
    u = e(477782),
    a = e(442433),
    s = e(793574),
    o = e(688810),
    c = e(964355),
    d = e(824744),
    b = e(796774),
    p = e(813564),
    h = e(340368),
    A = e(105292),
    x = e(17928),
    f = e(468689),
    g = e(931991),
    j = e(71393),
    m = e(652215);
function w(n) {
    let { guildId: t, onSelect: e, onPickerClose: s, onInteraction: w } = n,
        D = (function (n, t) {
            let e = (0, x.bG)([j.A], () => (null != n ? j.A.getGuild(n) : null)),
                { canCreateExpressions: i, canManageAllExpressions: r } = (0, g.nr)(e);
            return null != n && i && r
                ? (0, l.jsx)(u.Dr, {
                      id: A.intl.string(A.t["154/bL"]),
                      label: A.intl.string(A.t["154/bL"]),
                      action: function () {
                          null != n && (f.A.open(n, m.BEX.SOUNDBOARD), t?.());
                      },
                  })
                : null;
        })(t, s),
        O = (function () {
            let n = (0, p.wH)(),
                { analyticsLocations: t } = (0, o.Ay)(),
                e = (0, h._)("useEditVolumeItem"),
                r = i.useMemo(() => (e ? A.intl.string(A.t.wQKOBb) : A.intl.string(A.t.kbFsAD)), [e]);
            return (0, l.jsx)(u.aK, {
                id: "user-volume",
                "aria-haspopup": !0,
                label: r,
                control: (e, i) =>
                    (0, l.jsx)(c.i, {
                        ...e,
                        ref: i,
                        value: (0, d.M)(n),
                        maxValue: 100,
                        onChange: (n) => (0, b.iy)((0, d.w)(n), t),
                        "aria-label": r,
                    }),
            });
        })();
    return (0, l.jsx)(r.W, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": A.intl.string(A.t.liqwPJ),
        onSelect: e,
        onInteraction: w,
        children: (0, l.jsxs)(u.rX, { children: [O, D] }),
    });
}
function D(n) {
    let { analyticsLocations: t } = (0, o.Ay)(n.sourceAnalyticsLocations, s.A.SOUNDBOARD_CONTEXT_MENU);
    return (0, l.jsx)(o.f5, { value: t, children: (0, l.jsx)(w, { ...n }) });
}
