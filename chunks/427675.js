var l = n(582128),
    i = n(164636),
    r = n(67480),
    a = n(316363),
    s = n(682901);
let o = () => {
    let e = (0, a.t4)((e) => e.skuIds);
    return l.useMemo(() => e.filter((e) => !s.oz.includes(e)), [JSON.stringify(e)]);
};
function u() {
    let e = o();
    return (0, i.cf)(
        [r.A],
        () => {
            let t = {};
            for (let n of e) t[n] = r.A.get(n) ?? void 0;
            return t;
        },
        [e],
    );
}
n.d(
    t,
    {},
    {
        Hu: function () {
            let e = o();
            return (0, i.bG)([r.A], () => e.every((e) => !r.A.isFetching(e) && null != r.A.get(e)), [e]);
        },
        S3: function () {
            let e = (0, a.t4)((e) => e.selectedSkuId),
                t = u();
            return null != e ? t[e] : void 0;
        },
        gU: u,
    },
);
