n.d(t, {
    y: () => a,
}),
    n(321073);
var r = n(361670),
    i = n(464114);
let a = (e, t, n) => {
    if ("" === e) return null;
    let a = [],
        s = [];
    return (
        (0, i.G2)(e).forEach((e) => {
            let i = (0, r.W$)(e, t, n);
            i === r.Ux.SENDABLE ? a.push(e) : i === r.Ux.SENDABLE_WITH_PREMIUM && s.push(e);
        }),
        {
            sendable: a,
            sendableWithPremium: s,
        }
    );
};
