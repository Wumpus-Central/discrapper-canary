n.d(t, { d: () => l });
var r = n(663042),
    i = n(731965);
let l = (0, r.U)((e, t) => ({
    hasNoUnreads: !1,
    shouldHide: () => !t().hasNoUnreads,
    setInboxReadState: (n) => {
        n !== t().hasNoUnreads &&
            (0, i.j)(() => {
                e({ hasNoUnreads: n });
            });
    },
}));
