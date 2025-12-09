n.d(t, { Z: () => _ });
var r = n(740078),
    i = n(343713),
    a = n(49691),
    o = n(285363),
    s = n(874900),
    l = n(126387),
    c = n(632471),
    u = n(894417),
    d = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto",
    };
function f(e, t) {
    var n = e.x,
        r = e.y,
        i = t.devicePixelRatio || 1;
    return {
        x: (0, u.NM)(n * i) / i || 0,
        y: (0, u.NM)(r * i) / i || 0,
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
        m = e.position,
        h = e.gpuAcceleration,
        g = e.adaptive,
        E = e.roundOffsets,
        b = e.isFixed,
        y = _.x,
        O = void 0 === y ? 0 : y,
        v = _.y,
        S = void 0 === v ? 0 : v,
        I =
            "function" == typeof E
                ? E({
                      x: O,
                      y: S,
                  })
                : {
                      x: O,
                      y: S,
                  };
    (O = I.x), (S = I.y);
    var T = _.hasOwnProperty("x"),
        A = _.hasOwnProperty("y"),
        C = r.t$,
        N = r.we,
        P = window;
    if (g) {
        var R = (0, i.Z)(l),
            D = "clientHeight",
            w = "clientWidth";
        R === (0, a.Z)(l) &&
            ((R = (0, o.Z)(l)),
            "static" !== (0, s.Z)(R).position && "absolute" === m && ((D = "scrollHeight"), (w = "scrollWidth"))),
            (u === r.we || ((u === r.t$ || u === r.F2) && p === r.ut)) &&
                ((N = r.I),
                (S -= (b && R === P && P.visualViewport ? P.visualViewport.height : R[D]) - c.height),
                (S *= h ? 1 : -1)),
            (u === r.t$ || ((u === r.we || u === r.I) && p === r.ut)) &&
                ((C = r.F2),
                (O -= (b && R === P && P.visualViewport ? P.visualViewport.width : R[w]) - c.width),
                (O *= h ? 1 : -1));
    }
    var x = Object.assign({ position: m }, g && d),
        L =
            !0 === E
                ? f(
                      {
                          x: O,
                          y: S,
                      },
                      (0, a.Z)(l),
                  )
                : {
                      x: O,
                      y: S,
                  };
    return ((O = L.x), (S = L.y), h)
        ? Object.assign(
              {},
              x,
              (((n = {})[N] = A ? "0" : ""),
              (n[C] = T ? "0" : ""),
              (n.transform =
                  1 >= (P.devicePixelRatio || 1)
                      ? "translate(" + O + "px, " + S + "px)"
                      : "translate3d(" + O + "px, " + S + "px, 0)"),
              n),
          )
        : Object.assign({}, x, (((t = {})[N] = A ? S + "px" : ""), (t[C] = T ? O + "px" : ""), (t.transform = ""), t));
}
let _ = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (e) {
        var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            i = void 0 === r || r,
            a = n.adaptive,
            o = void 0 === a || a,
            s = n.roundOffsets,
            u = void 0 === s || s,
            d = {
                placement: (0, l.Z)(t.placement),
                variation: (0, c.Z)(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: i,
                isFixed: "fixed" === t.options.strategy,
            };
        null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                p(
                    Object.assign({}, d, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: o,
                        roundOffsets: u,
                    }),
                ),
            )),
            null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    p(
                        Object.assign({}, d, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: u,
                        }),
                    ),
                )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
    },
    data: {},
};
