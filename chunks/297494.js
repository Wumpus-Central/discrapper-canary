i.d(t, { H4: () => s, vc: () => a });
var n = i(735438),
    l = i(998304);
let a = (e, t) => {
        let i = (0, l.Q7)([t.r, t.g, t.b], 2);
        return (e = e.replace(/(\[1,0,0,)/g, `[${i[0][0] / 255},${i[0][1] / 255},${i[0][2] / 255},`)).replace(
            /\[0,0,1,/g,
            `[${i[1][0] / 255},${i[1][1] / 255},${i[1][2] / 255},`,
        );
    },
    s = (0, n.memoize)((e) => {
        let t = 0;
        for (let i = 0; i < e.length; i++) t = (t << 5) - t + e.charCodeAt(i);
        return Math.abs(t);
    });
