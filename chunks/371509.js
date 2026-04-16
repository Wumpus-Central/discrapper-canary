n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(934551),
    r = n(873298),
    a = n(397927),
    o = n(26692);
function d(e) {
    let { redactionType: t, label: n } = e,
        d = s.useMemo(() => {
            switch (t) {
                case r.TO.BLUR:
                    return l.ImageIcon;
                case r.TO.BLOCK:
                    return l.DenyIcon;
                case r.TO.SHOW:
                    return l.EyeIcon;
                default:
                    return null;
            }
        }, [t]);
    return (0, i.jsxs)("div", {
        className: o.q,
        children: [
            null != d && (0, i.jsx)(d, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(a.Text, { variant: "text-md/normal", color: "text-default", children: n }),
        ],
    });
}
let c = s.memo(function (e) {
    let { option: t } = e;
    return (0, i.jsx)(d, { redactionType: t.value, label: t.label });
});
