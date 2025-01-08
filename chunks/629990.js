r.d(t, {
    ZP: function () {
        return i;
    },
    db: function () {
        return s;
    },
    mh: function () {
        return o;
    }
});
var a = r(527628),
    n = r(99978);
let o = {
    D50: [0.3457 / 0.3585, 1, 0.8251046025104602],
    D65: [0.3127 / 0.329, 1, 1.0890577507598784]
};
function s(e) {
    return Array.isArray(e) ? e : o[e];
}
function i(e, t, r, i = {}) {
    if (((e = s(e)), (t = s(t)), !e || !t)) throw TypeError(`Missing white point to convert ${e ? '' : 'from'}${e || t ? '' : '/'}${t ? '' : 'to'}`);
    if (e === t) return r;
    let c = {
        W1: e,
        W2: t,
        XYZ: r,
        options: i
    };
    if (
        (a.Z.run('chromatic-adaptation-start', c),
        !c.M &&
            (c.W1 === o.D65 && c.W2 === o.D50
                ? (c.M = [
                      [1.0479297925449969, 0.022946870601609652, -0.05019226628920524],
                      [0.02962780877005599, 0.9904344267538799, -0.017073799063418826],
                      [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371]
                  ])
                : c.W1 === o.D50 &&
                  c.W2 === o.D65 &&
                  (c.M = [
                      [0.955473421488075, -0.02309845494876471, 0.06325924320057072],
                      [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323],
                      [0.012314014864481998, -0.020507649298898964, 1.330365926242124]
                  ])),
        a.Z.run('chromatic-adaptation-end', c),
        c.M)
    )
        return (0, n.Z)(c.M, c.XYZ);
    throw TypeError('Only Bradford CAT with white points D50 and D65 supported for now.');
}
