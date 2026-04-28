r.d(T, { A: () => E });
var A = r(627968);
r(64700);
var e = r(503698),
    c = r.n(e),
    t = r(496885),
    a = r(313375),
    i = r(652215),
    u = r(484840);
let l = { [i.TVA.NONE]: u.md, [i.TVA.TIER_1]: u.Yl, [i.TVA.TIER_2]: u.ut, [i.TVA.TIER_3]: u.UB },
    n = { [i.TVA.NONE]: u.W7, [i.TVA.TIER_1]: u.A1, [i.TVA.TIER_2]: u.kO, [i.TVA.TIER_3]: u.uq };
function E(s) {
    let { premiumTier: T, iconBackgroundClassName: r, iconClassName: e, size: i } = s;
    return (0, A.jsx)(t.A, {
        className: c()(r, l[T]),
        size: i,
        children: (0, A.jsx)(a.A, { tier: T, color: "currentColor", className: c()(e, u.AH, n[T]) }),
    });
}
