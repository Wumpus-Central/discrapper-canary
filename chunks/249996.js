n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    o = n(657707),
    a = n(524437),
    s = n(481060),
    l = n(75100);
function c(e) {
    let { redactionType: t, label: n } = e,
        c = i.useMemo(() => {
            switch (t) {
                case a.Q4.BLUR:
                    return o.XBm;
                case a.Q4.BLOCK:
                    return o.t6m;
                case a.Q4.SHOW:
                    return o.tEF;
                default:
                    return null;
            }
        }, [t]);
    return (0, r.jsxs)("div", {
        className: l.rowContainer,
        children: [
            null != c &&
                (0, r.jsx)(c, {
                    size: "xs",
                    color: "currentColor",
                }),
            (0, r.jsx)(s.Text, {
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
