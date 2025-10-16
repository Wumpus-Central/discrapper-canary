n.d(t, { N: () => a });
var r = n(677061),
    i = n(864019);
function a(e) {
    let { id: t, label: n, "aria-labelledby": a, "aria-label": o, labelElementType: s = "label" } = e;
    t = (0, r.Me)(t);
    let l = (0, r.Me)(),
        c = {};
    return (
        n &&
            ((a = a ? `${l} ${a}` : l),
            (c = {
                id: l,
                htmlFor: "label" === s ? t : void 0,
            })),
        {
            labelProps: c,
            fieldProps: (0, i.b)({
                id: t,
                "aria-label": o,
                "aria-labelledby": a,
            }),
        }
    );
}
