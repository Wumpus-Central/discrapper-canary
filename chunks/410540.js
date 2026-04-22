n.d(t, { A: () => s });
var a = n(311907),
    r = n(961350),
    l = n(290863),
    i = n(685396),
    o = n(652215);
function s(e) {
    let t = (0, a.bG)([r.default], () => r.default.getId() === e),
        n = (0, i.K)(),
        s = (0, a.bG)([l.A], () =>
            l.A.findActivity(e, (e) => {
                let { type: t } = e;
                return t === o.$pd.CUSTOM_STATUS;
            }),
        );
    return t ? n : s;
}
