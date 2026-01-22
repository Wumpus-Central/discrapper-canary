n.d(t, {
    A: () => u,
});
var r = n(627968),
    i = n(64700),
    a = n(934551),
    s = n(873298),
    o = n(397927),
    l = n(308757);

function c(e) {
    let { redactionType: t, label: n } = e,
        c = i.useMemo(() => {
            switch (t) {
                case s.TO.BLUR:
                    return a.ImageIcon;
                case s.TO.BLOCK:
                    return a.DenyIcon;
                case s.TO.SHOW:
                    return a.EyeIcon;
                default:
                    return null;
            }
        }, [t]);
    return (0, r.jsxs)("div", {
        className: l.q,
        children: [
            null != c &&
                (0, r.jsx)(c, {
                    size: "xs",
                    color: "currentColor",
                }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: n,
            }),
        ],
    });
}
let u = i.memo(function (e) {
    let { option: t } = e;
    return (0, r.jsx)(c, {
        redactionType: t.value,
        label: t.label,
    });
});
