var l = n(477900),
    a = n(582128),
    r = n(855986),
    i = n(821609),
    s = n(688810),
    u = n(419490),
    c = n(609174),
    o = n(721610),
    d = n(686320),
    f = n(240620);
n.d(
    t,
    {},
    {
        e: function (e) {
            let { variant: t = "primary" } = e,
                n = (0, c.Y_)(),
                p = (0, r.bG)([u.Ay], () => u.Ay.isClipExporting(n.id)),
                { analyticsLocations: m } = (0, s.Ay)(),
                { picker: v } = a.useContext(o.$),
                { label: h, icon: x } = (0, d.$)(v?.action),
                C = a.useCallback(
                    (e) => {
                        if ((e.stopPropagation(), e.preventDefault(), !p)) {
                            if (null != v) return void v.onPick(n);
                            (0, f.K)([n], { analyticsLocations: m });
                        }
                    },
                    [n, m, v, p],
                );
            return (0, l.jsx)(i.$, {
                disabled: p,
                onClick: C,
                icon: x,
                variant: t,
                size: "sm",
                text: h,
                fullWidth: !0,
            });
        },
    },
);
