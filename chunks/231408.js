i(47120);
var n = i(8048),
    r = i(647425);
let a = new Map(),
    s = (t) => {
        let { canvas: e, canvasId: i, animationId: s, assetUrl: o, assetData: h, isVisible: l, shouldAnimate: u } = t,
            c = new n.default({
                canvas: e,
                id: s,
                assetUrl: o,
                assetData: h,
                isVisible: l,
                shouldAnimate: u,
                onInitialDraw: () => {
                    self.postMessage({
                        type: r.u.FIRST_DRAW,
                        canvasId: i
                    });
                },
                onError: () => {
                    self.postMessage({
                        type: r.u.ERROR,
                        canvasId: i
                    });
                }
            });
        a.set(i, c);
    },
    o = (t) => {
        var e;
        let { canvasId: i } = t;
        null === (e = a.get(i)) || void 0 === e || e.drop(), a.delete(i);
    },
    h = (t) => {
        var e;
        let { canvasId: i, isVisible: n } = t;
        null === (e = a.get(i)) || void 0 === e || e.setVisibility(n);
    },
    l = (t) => {
        var e;
        let { canvasId: i, shouldAnimate: n, nextFrame: r } = t;
        null === (e = a.get(i)) || void 0 === e || e.setState(n, r);
    };
self.addEventListener('message', (t) => {
    let { data: e } = t;
    switch (e.type) {
        case r.u.INITIALIZE:
            s(e);
            break;
        case r.u.DROP:
            o(e);
            break;
        case r.u.VISIBILITY_CHANGE:
            h(e);
            break;
        case r.u.STATE_CHANGE:
            l(e);
    }
});
