l.d(t, { A: () => x });
var n = l(627968),
    i = l(64700),
    s = l(191023),
    a = l(428678),
    r = l(39623),
    d = l(873298),
    c = l(834730),
    u = l(321476);
function o(e) {
    let { redactionType: t, label: l } = e,
        o = i.useMemo(() => {
            switch (t) {
                case d.TO.BLUR:
                    return s.x;
                case d.TO.BLOCK:
                    return a.K;
                case d.TO.SHOW:
                    return r.b;
                default:
                    return null;
            }
        }, [t]);
    return (0, n.jsxs)("div", {
        className: u.q,
        children: [
            null != o && (0, n.jsx)(o, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(c.E, { variant: "text-md/normal", color: "text-default", children: l }),
        ],
    });
}
let x = i.memo(function (e) {
    let { option: t } = e;
    return (0, n.jsx)(o, { redactionType: t.value, label: t.label });
});
