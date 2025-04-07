i(388685);
var r = i(8048),
    n = i(647425);
let a = new Map(),
    s = (e) => {
        let { canvas: t, canvasId: i, animationId: s, assetUrl: o, assetData: h, isVisible: l, shouldAnimate: u } = e,
            c = new r.default({
                canvas: t,
                id: s,
                assetUrl: o,
                assetData: h,
                isVisible: l,
                shouldAnimate: u,
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
        a.set(i, c);
    },
    o = (e) => {
        var t;
        let { canvasId: i } = e;
        null == (t = a.get(i)) || t.drop(), a.delete(i);
    },
    h = (e) => {
        var t;
        let { canvasId: i, isVisible: r } = e;
        null == (t = a.get(i)) || t.setVisibility(r);
    },
    l = (e) => {
        var t;
        let { canvasId: i, shouldAnimate: r, nextFrame: n } = e;
        null == (t = a.get(i)) || t.setState(r, n);
    };
self.addEventListener('message', (e) => {
    let { data: t } = e;
    switch (t.type) {
        case n.u.INITIALIZE:
            s(t);
            break;
        case n.u.DROP:
            o(t);
            break;
        case n.u.VISIBILITY_CHANGE:
            h(t);
            break;
        case n.u.STATE_CHANGE:
            l(t);
    }
});
