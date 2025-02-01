i(47120), i(312677);
var r = i(8048),
    n = i(647425);
let a = new Map(),
    s = (t) => {
        let { canvas: e, canvasId: i, animationId: s, assetUrl: o, assetData: u, isVisible: c, shouldAnimate: h } = t,
            l = new r.default({
                canvas: e,
                id: s,
                assetUrl: o,
                assetData: u,
                isVisible: c,
                shouldAnimate: h,
                onInitialDraw: () => {
                    self.postMessage({
                        type: n.u.FIRST_DRAW,
                        canvasId: i
                    });
                },
                onError: () => {
                    self.postMessage({
                        type: n.u.ERROR,
                        canvasId: i
                    });
                }
            });
        a.set(i, l);
    },
    o = (t) => {
        var e;
        let { canvasId: i } = t;
        null === (e = a.get(i)) || void 0 === e || e.drop(), a.delete(i);
    },
    u = (t) => {
        var e;
        let { canvasId: i, isVisible: r } = t;
        null === (e = a.get(i)) || void 0 === e || e.setVisibility(r);
    },
    c = (t) => {
        var e;
        let { canvasId: i, shouldAnimate: r, nextFrame: n } = t;
        null === (e = a.get(i)) || void 0 === e || e.setState(r, n);
    };
self.addEventListener('message', (t) => {
    let { data: e } = t;
    switch (e.type) {
        case n.u.INITIALIZE:
            s(e);
            break;
        case n.u.DROP:
            o(e);
            break;
        case n.u.VISIBILITY_CHANGE:
            u(e);
            break;
        case n.u.STATE_CHANGE:
            c(e);
    }
});
