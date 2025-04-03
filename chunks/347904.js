n.d(t, {
    s4: () => o,
    vJ: () => a
}),
    n(757143),
    n(301563);
var i = n(392711),
    r = n(302221);
let o = (e, t) => {
        let n = (0, r.WY)([t.r, t.g, t.b], 2);
        return (e = (e = e.replace(
            /(\[1,0,0,)/g,
            '['
                .concat(n[0][0] / 255, ',')
                .concat(n[0][1] / 255, ',')
                .concat(n[0][2] / 255, ',')
        )).replace(
            /\[0,0,1,/g,
            '['
                .concat(n[1][0] / 255, ',')
                .concat(n[1][1] / 255, ',')
                .concat(n[1][2] / 255, ',')
        ));
    },
    a = (0, i.memoize)((e) => {
        let t = 0;
        for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
        return Math.abs(t);
    });
