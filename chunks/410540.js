n.d(t, { A: () => o });
var l = n(17928),
    i = n(280450),
    a = n(290863),
    r = n(685396),
    s = n(652215);
function o(e) {
    let t = (0, l.bG)([i.default], () => i.default.getId() === e),
        n = (0, r.K)(),
        o = (0, l.bG)([a.A], () =>
            a.A.findActivity(e, (e) => {
                let { type: t } = e;
                return t === s.$pd.CUSTOM_STATUS;
            }),
        );
    return t ? n : o;
}
