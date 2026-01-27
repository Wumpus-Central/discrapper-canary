n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968),
    l = n(311907),
    a = n(631670),
    i = n(287809),
    s = n(469778),
    o = n(796104),
    c = n(719718),
    u = n(612082),
    d = n(877272),
    m = n(622865),
    f = n(985018);

function p(e) {
    var t, n;
    let { className: p, textSize: h = 18 } = e,
        b = (0, l.bG)([i.default], () => i.default.getCurrentUser()),
        { avatarDecoration: g } = (0, l.bG)([c.A], () => c.A.getCheckpointData()),
        x = (0, l.yK)([s.A], () => {
            if ((null == g ? void 0 : g.skuId) == null) return [];
            let e = s.A.getForSku(null == g ? void 0 : g.skuId);
            return null != e ? [...e] : [];
        }),
        y = null != (t = null == b || null == (n = b.avatarDecoration) ? void 0 : n.skuId) ? t : null,
        v = null != y && y === (null == g ? void 0 : g.skuId),
        j = null != x[0],
        C = async () => {
            j &&
                !v &&
                (await (0, a.yu)({
                    avatarDecoration: g,
                }));
        };
    return (0, r.jsx)(u.A, {
        disabled: v,
        onClick: j
            ? v
                ? void 0
                : C
            : () => {
                  j || (0, o.qm)();
              },
        className: p,
        children: (0, r.jsx)(d.A, {
            variant: "eyebrow",
            style: {
                fontSize: h,
            },
            children: j
                ? v
                    ? f.intl.string(f.t["h+WsPb"])
                    : f.intl.string(f.t.MAS7uK)
                : f.intl.string(m.default.mDxM7m),
        }),
    });
}
