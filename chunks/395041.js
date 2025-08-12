n.d(t, {
    O: () => d,
    w: () => u,
});
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(819439),
    l = n(141168);
function c(e, t) {
    let { children: n } = e;
    return (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        className: t,
        children: n,
    });
}
let u = (e) => {
        let t = (0, s.$)({ location: "SearchTokens" });
        return c(e, o()(l.searchFilter, { [l.searchTokenTopLevel]: t }));
    },
    d = (e) => {
        let t = (0, s.$)({ location: "SearchTokens" });
        return c(e, o()(l.searchAnswer, { [l.searchTokenTopLevel]: t }));
    };
