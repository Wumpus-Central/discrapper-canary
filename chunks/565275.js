"use strict";
n.d(t, { A: () => p });
var r = n(140851),
    i = n(821085),
    a = n(559374),
    s = n(688899),
    o = n(175924),
    l = n(559751),
    u = n(499702),
    c = n(273101),
    d = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function _(e, t) {
    var n = e.x,
        r = e.y,
        i = t.devicePixelRatio || 1;
    return { x: (0, c.LI)(n * i) / i || 0, y: (0, c.LI)(r * i) / i || 0 };
}
function f(e) {
    var t,
        n,
        l = e.popper,
        u = e.popperRect,
        c = e.placement,
        f = e.variation,
        p = e.offsets,
        h = e.position,
        m = e.gpuAcceleration,
        g = e.adaptive,
        E = e.roundOffsets,
        A = e.isFixed,
        I = p.x,
        T = void 0 === I ? 0 : I,
        y = p.y,
        S = void 0 === y ? 0 : y,
        v = "function" == typeof E ? E({ x: T, y: S }) : { x: T, y: S };
    (T = v.x), (S = v.y);
    var C = p.hasOwnProperty("x"),
        b = p.hasOwnProperty("y"),
        N = r.kb,
        R = r.Mn,
        O = window;
    if (g) {
        var D = (0, i.A)(l),
            L = "clientHeight",
            w = "clientWidth";
        D === (0, a.A)(l) &&
            ((D = (0, s.A)(l)),
            "static" !== (0, o.A)(D).position && "absolute" === h && ((L = "scrollHeight"), (w = "scrollWidth"))),
            (c === r.Mn || ((c === r.kb || c === r.pG) && f === r._N)) &&
                ((R = r.sQ),
                (S -= (A && D === O && O.visualViewport ? O.visualViewport.height : D[L]) - u.height),
                (S *= m ? 1 : -1)),
            (c === r.kb || ((c === r.Mn || c === r.sQ) && f === r._N)) &&
                ((N = r.pG),
                (T -= (A && D === O && O.visualViewport ? O.visualViewport.width : D[w]) - u.width),
                (T *= m ? 1 : -1));
    }
    var x = Object.assign({ position: h }, g && d),
        P = !0 === E ? _({ x: T, y: S }, (0, a.A)(l)) : { x: T, y: S };
    return ((T = P.x), (S = P.y), m)
        ? Object.assign(
              {},
              x,
              (((n = {})[R] = b ? "0" : ""),
              (n[N] = C ? "0" : ""),
              (n.transform =
                  1 >= (O.devicePixelRatio || 1)
                      ? "translate(" + T + "px, " + S + "px)"
                      : "translate3d(" + T + "px, " + S + "px, 0)"),
              n),
          )
        : Object.assign({}, x, (((t = {})[R] = b ? S + "px" : ""), (t[N] = C ? T + "px" : ""), (t.transform = ""), t));
}
let p = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (e) {
        var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            i = void 0 === r || r,
            a = n.adaptive,
            s = void 0 === a || a,
            o = n.roundOffsets,
            c = void 0 === o || o,
            d = {
                placement: (0, l.A)(t.placement),
                variation: (0, u.A)(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: i,
                isFixed: "fixed" === t.options.strategy,
            };
        null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                f(
                    Object.assign({}, d, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: s,
                        roundOffsets: c,
                    }),
                ),
            )),
            null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    f(
                        Object.assign({}, d, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: c,
                        }),
                    ),
                )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
    },
    data: {},
};
