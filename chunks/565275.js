"use strict";
n.d(t, { A: () => f });
var r = n(140851),
    i = n(821085),
    s = n(559374),
    a = n(688899),
    o = n(175924),
    l = n(559751),
    u = n(499702),
    d = n(273101),
    c = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function _(e) {
    var t,
        n,
        l,
        u,
        _,
        f,
        E,
        h = e.popper,
        p = e.popperRect,
        m = e.placement,
        g = e.variation,
        A = e.offsets,
        I = e.position,
        T = e.gpuAcceleration,
        S = e.adaptive,
        y = e.roundOffsets,
        N = e.isFixed,
        O = A.x,
        R = void 0 === O ? 0 : O,
        v = A.y,
        C = void 0 === v ? 0 : v,
        b = "function" == typeof y ? y({ x: R, y: C }) : { x: R, y: C };
    (R = b.x), (C = b.y);
    var D = A.hasOwnProperty("x"),
        L = A.hasOwnProperty("y"),
        w = r.kb,
        M = r.Mn,
        P = window;
    if (S) {
        var U = (0, i.A)(h),
            k = "clientHeight",
            x = "clientWidth";
        U === (0, s.A)(h) &&
            ((U = (0, a.A)(h)),
            "static" !== (0, o.A)(U).position && "absolute" === I && ((k = "scrollHeight"), (x = "scrollWidth"))),
            (m === r.Mn || ((m === r.kb || m === r.pG) && g === r._N)) &&
                ((M = r.sQ),
                (C -= (N && U === P && P.visualViewport ? P.visualViewport.height : U[k]) - p.height),
                (C *= T ? 1 : -1)),
            (m === r.kb || ((m === r.Mn || m === r.sQ) && g === r._N)) &&
                ((w = r.pG),
                (R -= (N && U === P && P.visualViewport ? P.visualViewport.width : U[x]) - p.width),
                (R *= T ? 1 : -1));
    }
    var G = Object.assign({ position: I }, S && c),
        V =
            !0 === y
                ? ((t = { x: R, y: C }),
                  (n = (0, s.A)(h)),
                  (l = t.x),
                  (u = t.y),
                  (_ = n.devicePixelRatio || 1),
                  { x: (0, d.LI)(l * _) / _ || 0, y: (0, d.LI)(u * _) / _ || 0 })
                : { x: R, y: C };
    return ((R = V.x), (C = V.y), T)
        ? Object.assign(
              {},
              G,
              (((E = {})[M] = L ? "0" : ""),
              (E[w] = D ? "0" : ""),
              (E.transform =
                  1 >= (P.devicePixelRatio || 1)
                      ? "translate(" + R + "px, " + C + "px)"
                      : "translate3d(" + R + "px, " + C + "px, 0)"),
              E),
          )
        : Object.assign({}, G, (((f = {})[M] = L ? C + "px" : ""), (f[w] = D ? R + "px" : ""), (f.transform = ""), f));
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
