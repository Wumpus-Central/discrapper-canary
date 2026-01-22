n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(311907),
    a = n(631670),
    s = n(287809),
    o = n(469778),
    l = n(796104),
    c = n(719718),
    u = n(612082),
    d = n(877272),
    f = n(622865),
    p = n(985018);

function _(e) {
    var t, n;
    let { className: _, textSize: h = 18 } = e,
        m = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        { avatarDecoration: g } = (0, i.bG)([c.A], () => c.A.getCheckpointData()),
        E = (0, i.yK)([o.A], () => {
            if ((null == g ? void 0 : g.skuId) == null) return [];
            let e = o.A.getForSku(null == g ? void 0 : g.skuId);
            return null != e ? [...e] : [];
        }),
        b = null != (t = null == m || null == (n = m.avatarDecoration) ? void 0 : n.skuId) ? t : null,
        y = null != b && b === (null == g ? void 0 : g.skuId),
        O = null != E[0],
        A = () => {
            O || (0, l.qm)();
        },
        v = async () => {
            O &&
                !y &&
                (await (0, a.yu)({
                    avatarDecoration: g,
                }));
        };
    return (0, r.jsx)(u.A, {
        disabled: y,
        onClick: O ? (y ? void 0 : v) : A,
        className: _,
        children: (0, r.jsx)(d.A, {
            variant: "eyebrow",
            style: {
                fontSize: h,
            },
            children: O
                ? y
                    ? p.intl.string(p.t["h+WsPb"])
                    : p.intl.string(p.t.MAS7uK)
                : p.intl.string(f.default.mDxM7m),
        }),
    });
}
