i.d(t, {
    s4: () => o,
    vJ: () => s
}),
    i(757143);
var n = i(392711),
    a = i(302221);
let o = (e, t) => {
        let i = (0, a.WY)([t.r, t.g, t.b], 2);
        return (e = (e = e.replace(
            /(\[1,0,0,)/g,
            '['
                .concat(i[0][0] / 255, ',')
                .concat(i[0][1] / 255, ',')
                .concat(i[0][2] / 255, ',')
        )).replace(
            /\[0,0,1,/g,
            '['
                .concat(i[1][0] / 255, ',')
                .concat(i[1][1] / 255, ',')
                .concat(i[1][2] / 255, ',')
        ));
    },
    s = (0, n.memoize)((e) => {
        let t = 0;
        for (let i = 0; i < e.length; i++) t = (t << 5) - t + e.charCodeAt(i);
        return Math.abs(t);
    });
