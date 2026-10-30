n.d(t, { A: () => o });
var l = n(350835),
    i = n(17928),
    r = n(280450),
    a = n(290863),
    s = n(685396);
function o(e) {
    let t = (0, i.bG)([r.default], () => r.default.getId() === e),
        n = (0, s.K)(),
        o = (0, i.bG)([a.A], () =>
            a.A.findActivity(e, (e) => {
                let { type: t } = e;
                return t === l.$.CUSTOM_STATUS;
            }),
        );
    return t ? n : o;
}
