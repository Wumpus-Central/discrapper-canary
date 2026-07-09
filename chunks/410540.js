n.d(t, { A: () => o });
var l = n(17928),
    r = n(280450),
    i = n(290863),
    a = n(685396),
    s = n(652215);
function o(e) {
    let t = (0, l.bG)([r.default], () => r.default.getId() === e),
        n = (0, a.K)(),
        o = (0, l.bG)([i.A], () =>
            i.A.findActivity(e, (e) => {
                let { type: t } = e;
                return t === s.$pd.CUSTOM_STATUS;
            }),
        );
    return t ? n : o;
}
