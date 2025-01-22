r.d(n, {
    S: function () {
        return s;
    }
});
var i = r(653041);
var a = r(285651),
    o = r(138421);
let s = (e, n, r) => {
    if ('' === e) return null;
    let i = [],
        s = [];
    return (
        (0, o.WL)(e).forEach((e) => {
            let o = (0, a.cO)(e, n, r);
            o === a.eb.SENDABLE ? i.push(e) : o === a.eb.SENDABLE_WITH_PREMIUM && s.push(e);
        }),
        {
            sendable: i,
            sendableWithPremium: s
        }
    );
};
