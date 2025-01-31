n.d(t, { S: () => a }), n(653041);
var i = n(285651),
    r = n(138421);
let a = (e, t, n) => {
    if ('' === e) return null;
    let a = [],
        s = [];
    return (
        (0, r.WL)(e).forEach((e) => {
            let r = (0, i.cO)(e, t, n);
            r === i.eb.SENDABLE ? a.push(e) : r === i.eb.SENDABLE_WITH_PREMIUM && s.push(e);
        }),
        {
            sendable: a,
            sendableWithPremium: s
        }
    );
};
