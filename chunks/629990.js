r.d(t, {
    ZP: () => i,
    db: () => o,
    mh: () => s
});
var a = r(527628),
    n = r(99978);
let s = {
    D50: [0.3457 / 0.3585, 1, 0.8251046025104602],
    D65: [0.3127 / 0.329, 1, 1.0890577507598784]
};
function o(e) {
    return Array.isArray(e) ? e : s[e];
}
function i(e, t, r, c = {}) {
    if (((e = o(e)), (t = o(t)), !e || !t)) throw TypeError(`Missing white point to convert ${!e ? 'from' : ''}${!e && !t ? '/' : ''}${!t ? 'to' : ''}`);
    if (e === t) return r;
    let l = {
        W1: e,
        W2: t,
        XYZ: r,
        options: c
    };
    if (
        (a.Z.run('chromatic-adaptation-start', l),
        l.M ||
            (l.W1 === s.D65 && l.W2 === s.D50
                ? (l.M = [
                      [1.0479297925449969, 0.022946870601609652, -0.05019226628920524],
                      [0.02962780877005599, 0.9904344267538799, -0.017073799063418826],
                      [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371]
                  ])
                : l.W1 === s.D50 &&
                  l.W2 === s.D65 &&
                  (l.M = [
                      [0.955473421488075, -0.02309845494876471, 0.06325924320057072],
                      [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323],
                      [0.012314014864481998, -0.020507649298898964, 1.330365926242124]
                  ])),
        a.Z.run('chromatic-adaptation-end', l),
        l.M)
    )
        return (0, n.Z)(l.M, l.XYZ);
    throw TypeError('Only Bradford CAT with white points D50 and D65 supported for now.');
}
