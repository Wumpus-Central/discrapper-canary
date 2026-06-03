"use strict";
n.d(t, { A: () => l, s: () => o });
var i,
    r = n(575593),
    s =
        (((i = {})[(i.INNER_WIDTH = 1200)] = "INNER_WIDTH"),
        (i[(i.OVERFLOW_TOP = 304)] = "OVERFLOW_TOP"),
        (i[(i.OVERFLOW_BOTTOM = 212)] = "OVERFLOW_BOTTOM"),
        (i[(i.OVERFLOW_HORIZONTAL = 56)] = "OVERFLOW_HORIZONTAL"),
        i),
    a = n(149807);
let o = (e) => e instanceof l;
class l extends a.A {
    label;
    layers;
    innerWidth;
    overflowTop;
    overflowBottom;
    overflowHorizontal;
    constructor(e) {
        super(e),
            (this.type = r.R.PROFILE_FRAME),
            (this.label = e.label),
            (this.layers = e.layers),
            (this.innerWidth = e.innerWidth ?? s.INNER_WIDTH),
            (this.overflowTop = e.overflowTop ?? s.OVERFLOW_TOP),
            (this.overflowBottom = e.overflowBottom ?? s.OVERFLOW_BOTTOM),
            (this.overflowHorizontal = e.overflowHorizontal ?? s.OVERFLOW_HORIZONTAL);
    }
    static fromServer(e) {
        let { inner_width: t, overflow_top: n, overflow_bottom: i, overflow_horizontal: r, ...s } = e;
        return new l({
            ...super.fromServer(s),
            ...s,
            innerWidth: t,
            overflowTop: n,
            overflowBottom: i,
            overflowHorizontal: r,
        });
    }
}
