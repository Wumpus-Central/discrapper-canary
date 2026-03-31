n.d(t, { S: () => s });
var i = n(353640),
    l = n(121894);
let s = (0, i.v)((e, t) => ({
    hasNoUnreads: !1,
    shouldHide: () => !t().hasNoUnreads,
    setInboxReadState: (n) => {
        n !== t().hasNoUnreads &&
            (0, l.r)(() => {
                e({ hasNoUnreads: n });
            });
    },
}));
