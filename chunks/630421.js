n.d(t, { Z: () => _ });
var r = n(740078),
    i = n(343713),
    o = n(49691),
    a = n(285363),
    s = n(874900),
    l = n(126387),
    c = n(632471),
    u = n(894417),
    d = {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto'
    };
function f(e, t) {
    var n = e.x,
        r = e.y,
        i = t.devicePixelRatio || 1;
    return {
        x: (0, u.NM)(n * i) / i || 0,
        y: (0, u.NM)(r * i) / i || 0
    };
}
function p(e) {
    var t,
        n,
        l = e.popper,
        c = e.popperRect,
        u = e.placement,
        p = e.variation,
        _ = e.offsets,
        h = e.position,
        m = e.gpuAcceleration,
        g = e.adaptive,
        E = e.roundOffsets,
        v = e.isFixed,
        b = _.x,
        y = void 0 === b ? 0 : b,
        O = _.y,
        S = void 0 === O ? 0 : O,
        I =
            'function' == typeof E
                ? E({
                      x: y,
                      y: S
                  })
                : {
                      x: y,
                      y: S
                  };
    (y = I.x), (S = I.y);
    var T = _.hasOwnProperty('x'),
        N = _.hasOwnProperty('y'),
        A = r.t$,
        C = r.we,
        R = window;
    if (g) {
        var P = (0, i.Z)(l),
            w = 'clientHeight',
            D = 'clientWidth';
        P === (0, o.Z)(l) && ((P = (0, a.Z)(l)), 'static' !== (0, s.Z)(P).position && 'absolute' === h && ((w = 'scrollHeight'), (D = 'scrollWidth'))), (u === r.we || ((u === r.t$ || u === r.F2) && p === r.ut)) && ((C = r.I), (S -= (v && P === R && R.visualViewport ? R.visualViewport.height : P[w]) - c.height), (S *= m ? 1 : -1)), (u === r.t$ || ((u === r.we || u === r.I) && p === r.ut)) && ((A = r.F2), (y -= (v && P === R && R.visualViewport ? R.visualViewport.width : P[D]) - c.width), (y *= m ? 1 : -1));
    }
    var x = Object.assign({ position: h }, g && d),
        L =
            !0 === E
                ? f(
                      {
                          x: y,
                          y: S
                      },
                      (0, o.Z)(l)
                  )
                : {
                      x: y,
                      y: S
                  };
    return ((y = L.x), (S = L.y), m) ? Object.assign({}, x, (((n = {})[C] = N ? '0' : ''), (n[A] = T ? '0' : ''), (n.transform = 1 >= (R.devicePixelRatio || 1) ? 'translate(' + y + 'px, ' + S + 'px)' : 'translate3d(' + y + 'px, ' + S + 'px, 0)'), n)) : Object.assign({}, x, (((t = {})[C] = N ? S + 'px' : ''), (t[A] = T ? y + 'px' : ''), (t.transform = ''), t));
}
let _ = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: function (e) {
        var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            i = void 0 === r || r,
            o = n.adaptive,
            a = void 0 === o || o,
            s = n.roundOffsets,
            u = void 0 === s || s,
            d = {
                placement: (0, l.Z)(t.placement),
                variation: (0, c.Z)(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: i,
                isFixed: 'fixed' === t.options.strategy
            };
        null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                p(
                    Object.assign({}, d, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: a,
                        roundOffsets: u
                    })
                )
            )),
            null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    p(
                        Object.assign({}, d, {
                            offsets: t.modifiersData.arrow,
                            position: 'absolute',
                            adaptive: !1,
                            roundOffsets: u
                        })
                    )
                )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, { 'data-popper-placement': t.placement }));
    },
    data: {}
};
