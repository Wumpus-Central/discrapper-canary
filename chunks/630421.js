var i = r(740078),
    a = r(343713),
    o = r(49691),
    s = r(285363),
    l = r(874900),
    u = r(126387),
    c = r(632471),
    d = r(894417),
    f = {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto'
    };
function p(e, n) {
    var r = e.x,
        i = e.y,
        a = n.devicePixelRatio || 1;
    return {
        x: (0, d.NM)(r * a) / a || 0,
        y: (0, d.NM)(i * a) / a || 0
    };
}
function h(e) {
    var n,
        r,
        u = e.popper,
        c = e.popperRect,
        d = e.placement,
        h = e.variation,
        _ = e.offsets,
        m = e.position,
        g = e.gpuAcceleration,
        E = e.adaptive,
        v = e.roundOffsets,
        y = e.isFixed,
        b = _.x,
        I = void 0 === b ? 0 : b,
        T = _.y,
        S = void 0 === T ? 0 : T,
        A =
            'function' == typeof v
                ? v({
                      x: I,
                      y: S
                  })
                : {
                      x: I,
                      y: S
                  };
    (I = A.x), (S = A.y);
    var C = _.hasOwnProperty('x'),
        N = _.hasOwnProperty('y'),
        R = i.t$,
        O = i.we,
        D = window;
    if (E) {
        var L = (0, a.Z)(u),
            x = 'clientHeight',
            w = 'clientWidth';
        L === (0, o.Z)(u) && ((L = (0, s.Z)(u)), 'static' !== (0, l.Z)(L).position && 'absolute' === m && ((x = 'scrollHeight'), (w = 'scrollWidth')));
        (d === i.we || ((d === i.t$ || d === i.F2) && h === i.ut)) && ((O = i.I), (S -= (y && L === D && D.visualViewport ? D.visualViewport.height : L[x]) - c.height), (S *= g ? 1 : -1)), (d === i.t$ || ((d === i.we || d === i.I) && h === i.ut)) && ((R = i.F2), (I -= (y && L === D && D.visualViewport ? D.visualViewport.width : L[w]) - c.width), (I *= g ? 1 : -1));
    }
    var P = Object.assign({ position: m }, E && f),
        M =
            !0 === v
                ? p(
                      {
                          x: I,
                          y: S
                      },
                      (0, o.Z)(u)
                  )
                : {
                      x: I,
                      y: S
                  };
    return ((I = M.x), (S = M.y), g) ? Object.assign({}, P, (((r = {})[O] = N ? '0' : ''), (r[R] = C ? '0' : ''), (r.transform = 1 >= (D.devicePixelRatio || 1) ? 'translate(' + I + 'px, ' + S + 'px)' : 'translate3d(' + I + 'px, ' + S + 'px, 0)'), r)) : Object.assign({}, P, (((n = {})[O] = N ? S + 'px' : ''), (n[R] = C ? I + 'px' : ''), (n.transform = ''), n));
}
function _(e) {
    var n = e.state,
        r = e.options,
        i = r.gpuAcceleration,
        a = void 0 === i || i,
        o = r.adaptive,
        s = void 0 === o || o,
        l = r.roundOffsets,
        d = void 0 === l || l,
        f = {
            placement: (0, u.Z)(n.placement),
            variation: (0, c.Z)(n.placement),
            popper: n.elements.popper,
            popperRect: n.rects.popper,
            gpuAcceleration: a,
            isFixed: 'fixed' === n.options.strategy
        };
    null != n.modifiersData.popperOffsets &&
        (n.styles.popper = Object.assign(
            {},
            n.styles.popper,
            h(
                Object.assign({}, f, {
                    offsets: n.modifiersData.popperOffsets,
                    position: n.options.strategy,
                    adaptive: s,
                    roundOffsets: d
                })
            )
        )),
        null != n.modifiersData.arrow &&
            (n.styles.arrow = Object.assign(
                {},
                n.styles.arrow,
                h(
                    Object.assign({}, f, {
                        offsets: n.modifiersData.arrow,
                        position: 'absolute',
                        adaptive: !1,
                        roundOffsets: d
                    })
                )
            )),
        (n.attributes.popper = Object.assign({}, n.attributes.popper, { 'data-popper-placement': n.placement }));
}
n.Z = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: _,
    data: {}
};
