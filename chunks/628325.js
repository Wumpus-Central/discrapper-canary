n.d(t, {
    S: () => i,
});
var r = n(353640),
    l = n(121894);
let i = (0, r.v)((e, t) => ({
    hasNoUnreads: !1,
    shouldHide: () => !t().hasNoUnreads,
    setInboxReadState: (n) => {
        n !== t().hasNoUnreads &&
            (0, l.r)(() => {
                e({
                    hasNoUnreads: n,
                });
            });
    },
}));
