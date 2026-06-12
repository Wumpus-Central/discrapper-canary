n.d(t, { H4: () => r, vc: () => a });
var i = n(735438),
    l = n(998304);
let a = (e, t) => {
        let n = (0, l.Q7)([t.r, t.g, t.b], 2);
        return (e = e.replace(/(\[1,0,0,)/g, `[${n[0][0] / 255},${n[0][1] / 255},${n[0][2] / 255},`)).replace(
            /\[0,0,1,/g,
            `[${n[1][0] / 255},${n[1][1] / 255},${n[1][2] / 255},`,
        );
    },
    r = (0, i.memoize)((e) => {
        let t = 0;
        for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
        return Math.abs(t);
    });
