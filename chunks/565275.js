"use strict";
n.d(t, { A: () => f });
var r = n(140851),
    i = n(821085),
    s = n(559374),
    a = n(688899),
    o = n(175924),
    l = n(559751),
    u = n(499702),
    c = n(273101),
    d = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function _(e) {
    var t,
        n,
        l,
        u,
        _,
        f,
        p,
        h = e.popper,
        E = e.popperRect,
        m = e.placement,
        g = e.variation,
        A = e.offsets,
        I = e.position,
        T = e.gpuAcceleration,
        S = e.adaptive,
        y = e.roundOffsets,
        N = e.isFixed,
        v = A.x,
        C = void 0 === v ? 0 : v,
        O = A.y,
        R = void 0 === O ? 0 : O,
        b = "function" == typeof y ? y({ x: C, y: R }) : { x: C, y: R };
    (C = b.x), (R = b.y);
    var D = A.hasOwnProperty("x"),
        L = A.hasOwnProperty("y"),
        w = r.kb,
        M = r.Mn,
        P = window;
    if (S) {
        var x = (0, i.A)(h),
            k = "clientHeight",
            U = "clientWidth";
        x === (0, s.A)(h) &&
            ((x = (0, a.A)(h)),
            "static" !== (0, o.A)(x).position && "absolute" === I && ((k = "scrollHeight"), (U = "scrollWidth"))),
            (m === r.Mn || ((m === r.kb || m === r.pG) && g === r._N)) &&
                ((M = r.sQ),
                (R -= (N && x === P && P.visualViewport ? P.visualViewport.height : x[k]) - E.height),
                (R *= T ? 1 : -1)),
            (m === r.kb || ((m === r.Mn || m === r.sQ) && g === r._N)) &&
                ((w = r.pG),
                (C -= (N && x === P && P.visualViewport ? P.visualViewport.width : x[U]) - E.width),
                (C *= T ? 1 : -1));
    }
    var G = Object.assign({ position: I }, S && d),
        F =
            !0 === y
                ? ((t = { x: C, y: R }),
                  (n = (0, s.A)(h)),
                  (l = t.x),
                  (u = t.y),
                  (_ = n.devicePixelRatio || 1),
                  { x: (0, c.LI)(l * _) / _ || 0, y: (0, c.LI)(u * _) / _ || 0 })
                : { x: C, y: R };
    return ((C = F.x), (R = F.y), T)
        ? Object.assign(
              {},
              G,
              (((p = {})[M] = L ? "0" : ""),
              (p[w] = D ? "0" : ""),
              (p.transform =
                  1 >= (P.devicePixelRatio || 1)
                      ? "translate(" + C + "px, " + R + "px)"
                      : "translate3d(" + C + "px, " + R + "px, 0)"),
              p),
          )
        : Object.assign({}, G, (((f = {})[M] = L ? R + "px" : ""), (f[w] = D ? C + "px" : ""), (f.transform = ""), f));
}
let f = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (e) {
        var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            i = n.adaptive,
            s = n.roundOffsets,
            a = void 0 === s || s,
            o = {
                placement: (0, l.A)(t.placement),
                variation: (0, u.A)(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: void 0 === r || r,
                isFixed: "fixed" === t.options.strategy,
            };
        null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                _(
                    Object.assign({}, o, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: void 0 === i || i,
                        roundOffsets: a,
                    }),
                ),
            )),
            null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    _(
                        Object.assign({}, o, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: a,
                        }),
                    ),
                )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
    },
    data: {},
};
