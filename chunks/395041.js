n.d(t, {
    O: () => d,
    w: () => u,
});
var r = n(951288);
n(647438);
var s = n(120356),
    l = n.n(s),
    a = n(481060),
    i = n(819439),
    o = n(624595);
function c(e, t) {
    let { children: n } = e;
    return (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        className: t,
        children: n,
    });
}
let u = (e) => {
        let t = (0, i.$)({ location: "SearchTokens" });
        return c(e, l()(o.searchFilter, { [o.searchTokenTopLevel]: t }));
    },
    d = (e) => {
        let t = (0, i.$)({ location: "SearchTokens" });
        return c(e, l()(o.searchAnswer, { [o.searchTokenTopLevel]: t }));
    };
