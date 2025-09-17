n.d(t, { Z: () => c });
var r = n(951288),
    i = n(442837),
    a = n(481060),
    o = n(883904),
    s = n(68985),
    l = n(197571);
function c(e) {
    let { hideBorder: t = !1 } = e,
        { dailyCapReached: n, dailyCapOverridden: c } = (0, i.cj)([s.Z], () => ({
            dailyCapReached: s.Z.hasUserHitDCCap(),
            dailyCapOverridden: s.Z.dailyCapOverridden,
        }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.xJW, {
                children: (0, r.jsxs)(a.R94, {
                    className: l.marginBottom4,
                    children: ["Daily Cap Reached: ", n ? "Yes" : "No"],
                }),
            }),
            (0, r.jsx)(a.j7V, {
                value: c,
                onChange: o.Nj,
                hideBorder: t,
                children: "Override Daily Cap",
            }),
        ],
    });
}
