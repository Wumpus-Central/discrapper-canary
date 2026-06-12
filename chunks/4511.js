"use strict";
n.d(t, { r: () => r }), n(321073);
var i = n(731854);
class r {
    pixelBudget;
    ladder;
    orderedLadder;
    constructor(e = i.eQ) {
        const { width: t, height: n } = e.videoBudget;
        if (t <= 0 || n <= 0) throw Error("Invalid argument");
        (this.pixelBudget = t * n),
            (this.ladder = r.calculateLadder(this.pixelBudget)),
            (this.orderedLadder = r.calculateOrderedLadder(this.ladder));
    }
    getMaxSinkValue(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (e < 0) throw Error("getMaxSinkValue: Requested " + e);
        let n = this.orderedLadder[0].wantValue;
        for (let { pixelCount: i, wantValue: r } of this.orderedLadder) {
            if (t > 0 && t < i) {
                n = r;
                break;
            }
            if (i * e > this.pixelBudget) break;
            n = r;
        }
        return n;
    }
    getResolution(e) {
        let t = null;
        for (let n of this.orderedLadder)
            if (e >= n.wantValue) t = n;
            else break;
        return {
            width: (t = t ?? this.orderedLadder[0]).width,
            height: t.height,
            budgetPortion: t.budgetPortion,
            mutedFramerate: t.mutedFramerate,
            framerate: t.framerate,
        };
    }
    static calculateLadder(e) {
        let t = new Set([0, 4, 8, 10]),
            n = [];
        for (let i = 1; i < 4096; ++i) {
            let r = (16 * i) / 9;
            if (t.has(r % 16) && t.has(i % 16)) {
                let t = r * i;
                n.push({ pixelCount: t, width: r, height: i, budgetPortion: t / e, wantValue: 0 });
            }
        }
        let s = {},
            a = 0,
            o = 100;
        for (let t = 1; t <= 25; ++t) {
            let l = 0,
                u = 0,
                c = 0;
            for (let i of n) {
                if (i.pixelCount * t > e) break;
                (l = i.width), (u = i.height), (c = i.budgetPortion);
            }
            if (a !== l) {
                let e = r.getMutedFramerate(o);
                (s[o] = { width: l, height: u, budgetPortion: c, mutedFramerate: e, framerate: i.sG }),
                    (o -= 10),
                    (a = l);
            }
        }
        return s;
    }
    static getMutedFramerate(e) {
        return e <= 20 ? i.XA : i.kc;
    }
    static calculateOrderedLadder(e) {
        let t = [];
        for (let n of Object.keys(e)
            .map((e) => Number(e))
            .sort((e, t) => e - t)) {
            if (0 === n) continue;
            let i = e[n];
            t.push({ pixelCount: i.width * i.height, wantValue: n, ...i });
        }
        return t;
    }
}
