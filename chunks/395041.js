n.d(t, {
    O: () => d,
    w: () => u,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(819439),
    l = n(67759);
function c(e, t) {
    let { children: n } = e;
    return (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        className: t,
        children: n,
    });
}
let u = (e) => {
        let t = (0, s.$)({ location: "SearchTokens" });
        return c(e, a()(l.searchFilter, { [l.searchTokenTopLevel]: t }));
    },
    d = (e) => {
        let t = (0, s.$)({ location: "SearchTokens" });
        return c(e, a()(l.searchAnswer, { [l.searchTokenTopLevel]: t }));
    };
