n.d(t, { Z: () => p });
var i = n(740078),
    r = n(343713),
    a = n(49691),
    s = n(285363),
    o = n(874900),
    l = n(126387),
    u = n(632471),
    c = n(894417),
    d = {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto'
    };
function f(e, t) {
    var n = e.x,
        i = e.y,
        r = t.devicePixelRatio || 1;
    return {
        x: (0, c.NM)(n * r) / r || 0,
        y: (0, c.NM)(i * r) / r || 0
    };
}
function _(e) {
    var t,
        n,
        l = e.popper,
        u = e.popperRect,
        c = e.placement,
        _ = e.variation,
        p = e.offsets,
        h = e.position,
        m = e.gpuAcceleration,
        g = e.adaptive,
        E = e.roundOffsets,
        v = e.isFixed,
        y = p.x,
        I = void 0 === y ? 0 : y,
        T = p.y,
        b = void 0 === T ? 0 : T,
        S =
            'function' == typeof E
                ? E({
                      x: I,
                      y: b
                  })
                : {
                      x: I,
                      y: b
                  };
    (I = S.x), (b = S.y);
    var A = p.hasOwnProperty('x'),
        N = p.hasOwnProperty('y'),
        C = i.t$,
        R = i.we,
        O = window;
    if (g) {
        var D = (0, r.Z)(l),
            L = 'clientHeight',
            x = 'clientWidth';
        D === (0, a.Z)(l) && ((D = (0, s.Z)(l)), 'static' !== (0, o.Z)(D).position && 'absolute' === h && ((L = 'scrollHeight'), (x = 'scrollWidth'))), (c === i.we || ((c === i.t$ || c === i.F2) && _ === i.ut)) && ((R = i.I), (b -= (v && D === O && O.visualViewport ? O.visualViewport.height : D[L]) - u.height), (b *= m ? 1 : -1)), (c === i.t$ || ((c === i.we || c === i.I) && _ === i.ut)) && ((C = i.F2), (I -= (v && D === O && O.visualViewport ? O.visualViewport.width : D[x]) - u.width), (I *= m ? 1 : -1));
    }
    var P = Object.assign({ position: h }, g && d),
        w =
            !0 === E
                ? f(
                      {
                          x: I,
                          y: b
                      },
                      (0, a.Z)(l)
                  )
                : {
                      x: I,
                      y: b
                  };
    return ((I = w.x), (b = w.y), m) ? Object.assign({}, P, (((n = {})[R] = N ? '0' : ''), (n[C] = A ? '0' : ''), (n.transform = 1 >= (O.devicePixelRatio || 1) ? 'translate(' + I + 'px, ' + b + 'px)' : 'translate3d(' + I + 'px, ' + b + 'px, 0)'), n)) : Object.assign({}, P, (((t = {})[R] = N ? b + 'px' : ''), (t[C] = A ? I + 'px' : ''), (t.transform = ''), t));
}
let p = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: function (e) {
        var t = e.state,
            n = e.options,
            i = n.gpuAcceleration,
            r = void 0 === i || i,
            a = n.adaptive,
            s = void 0 === a || a,
            o = n.roundOffsets,
            c = void 0 === o || o,
            d = {
                placement: (0, l.Z)(t.placement),
                variation: (0, u.Z)(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: r,
                isFixed: 'fixed' === t.options.strategy
            };
        null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                _(
                    Object.assign({}, d, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: s,
                        roundOffsets: c
                    })
                )
            )),
            null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    _(
                        Object.assign({}, d, {
                            offsets: t.modifiersData.arrow,
                            position: 'absolute',
                            adaptive: !1,
                            roundOffsets: c
                        })
                    )
                )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, { 'data-popper-placement': t.placement }));
    },
    data: {}
};
