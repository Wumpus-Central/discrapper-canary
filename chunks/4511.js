"use strict";
n.d(t, { r: () => i }), n(321073);
var r = n(731854);
class i {
    pixelBudget;
    ladder;
    orderedLadder;
    constructor(e = r.eQ) {
        const { width: t, height: n } = e.videoBudget;
        if (t <= 0 || n <= 0) throw Error("Invalid argument");
        (this.pixelBudget = t * n),
            (this.ladder = i.calculateLadder(this.pixelBudget)),
            (this.orderedLadder = i.calculateOrderedLadder(this.ladder));
    }
    getMaxSinkValue(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (e < 0) throw Error("getMaxSinkValue: Requested " + e);
        let n = this.orderedLadder[0].wantValue;
        for (let { pixelCount: r, wantValue: i } of this.orderedLadder) {
            if (t > 0 && t < r) {
                n = i;
                break;
            }
            if (r * e > this.pixelBudget) break;
            n = i;
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
        for (let r = 1; r < 4096; ++r) {
            let i = (16 * r) / 9;
            if (t.has(i % 16) && t.has(r % 16)) {
                let t = i * r;
                n.push({ pixelCount: t, width: i, height: r, budgetPortion: t / e, wantValue: 0 });
            }
        }
        let a = {},
            s = 0,
            o = 100;
        for (let t = 1; t <= 25; ++t) {
            let l = 0,
                u = 0,
                c = 0;
            for (let r of n) {
                if (r.pixelCount * t > e) break;
                (l = r.width), (u = r.height), (c = r.budgetPortion);
            }
            if (s !== l) {
                let e = i.getMutedFramerate(o);
                (a[o] = { width: l, height: u, budgetPortion: c, mutedFramerate: e, framerate: r.sG }),
                    (o -= 10),
                    (s = l);
            }
        }
        return a;
    }
    static getMutedFramerate(e) {
        return e <= 20 ? r.XA : r.kc;
    }
    static calculateOrderedLadder(e) {
        let t = [];
        for (let n of Object.keys(e)
            .map((e) => Number(e))
            .sort((e, t) => e - t)) {
            if (0 === n) continue;
            let r = e[n];
            t.push({ pixelCount: r.width * r.height, wantValue: n, ...r });
        }
        return t;
    }
}
