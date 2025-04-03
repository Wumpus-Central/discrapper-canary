r.d(t, { Z: () => i });
var a = r(665352),
    n = r(99978),
    s = r(629990),
    o = r(856308);
class i extends a.Z {
    constructor(e) {
        e.coords ||
            (e.coords = {
                r: {
                    range: [0, 1],
                    name: 'Red'
                },
                g: {
                    range: [0, 1],
                    name: 'Green'
                },
                b: {
                    range: [0, 1],
                    name: 'Blue'
                }
            }),
            e.base || (e.base = o.Z),
            e.toXYZ_M &&
                e.fromXYZ_M &&
                ((e.toBase ??= (t) => {
                    let r = (0, n.Z)(e.toXYZ_M, t);
                    return this.white !== this.base.white && (r = (0, s.ZP)(this.white, this.base.white, r)), r;
                }),
                (e.fromBase ??= (t) => ((t = (0, s.ZP)(this.base.white, this.white, t)), (0, n.Z)(e.fromXYZ_M, t)))),
            (e.referred ??= 'display'),
            super(e);
    }
}
