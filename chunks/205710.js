i.d(t, { A: () => r });
var n = i(668459);
let r = {
    read: function (e, t) {
        let i,
            r,
            a = {},
            s = n.A.getByteAt(e, t);
        return (
            (a.Alpha = { value: +!!(i = 16 & s), description: i ? "Yes" : "No" }),
            (a.Animation = { value: +!!(r = 2 & s), description: r ? "Yes" : "No" }),
            (a.ImageWidth = o(e, t + 4)),
            (a.ImageHeight = o(e, t + 7)),
            a
        );
    },
};
function o(e, t) {
    let i = n.A.getByteAt(e, t) + 256 * n.A.getByteAt(e, t + 1) + 65536 * n.A.getByteAt(e, t + 2) + 1;
    return { value: i, description: i + "px" };
}
