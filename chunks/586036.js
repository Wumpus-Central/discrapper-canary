n.d(t, { j: () => g });
var r = n(477900),
    i = n(582128);
let a =
    "https://cdn.discordapp.com/assets/content/72e3c4b99b3c059f834115e197341d9ca7d5d5a133ba23b6b36e8be09b0a0a12.riv";
var o = n(729901),
    d = n(611361),
    s = n(799226),
    u = n(270597);
let b = {
        "Artboard 2": {
            reducedMotion: "boolean",
            debugMode: "boolean",
            edgeBand: "number",
            decayDuration: "number",
            falloffPower: "number",
            color: "color",
            glyphSize: "number",
            fpsLimit: "number",
            centerWidth: "number",
            radiusY: "number",
            radiusX: "number",
            insetRight: "number",
            insetLeft: "number",
            insetTop: "number",
            insetBottom: "number",
        },
    },
    c = { "Artboard 2": ["Instance"] },
    f = { "Artboard 2": ["State Machine 1"] },
    l = {
        "Artboard 2": function (e) {
            let { dataBinding: t, onDataBindingChange: n } = e,
                { instance: r, reducedMotionEnabled: i, playIfNeeded: a } = (0, d.o)();
            return (
                (0, u.Dr)("reducedMotion", r, t?.reducedMotion ?? i, void 0, a),
                (0, u.Dr)("debugMode", r, t?.debugMode, n?.debugMode, a),
                (0, u.Of)("edgeBand", r, t?.edgeBand, n?.edgeBand, a),
                (0, u.Of)("decayDuration", r, t?.decayDuration, n?.decayDuration, a),
                (0, u.Of)("falloffPower", r, t?.falloffPower, n?.falloffPower, a),
                (0, u.QJ)("color", r, t?.color, n?.color, a),
                (0, u.Of)("glyphSize", r, t?.glyphSize, n?.glyphSize, a),
                (0, u.Of)("fpsLimit", r, t?.fpsLimit, n?.fpsLimit, a),
                (0, u.Of)("centerWidth", r, t?.centerWidth, n?.centerWidth, a),
                (0, u.Of)("radiusY", r, t?.radiusY, n?.radiusY, a),
                (0, u.Of)("radiusX", r, t?.radiusX, n?.radiusX, a),
                (0, u.Of)("insetRight", r, t?.insetRight, n?.insetRight, a),
                (0, u.Of)("insetLeft", r, t?.insetLeft, n?.insetLeft, a),
                (0, u.Of)("insetTop", r, t?.insetTop, n?.insetTop, a),
                (0, u.Of)("insetBottom", r, t?.insetBottom, n?.insetBottom, a),
                null
            );
        },
    };
function g(e) {
    let { artboard: t = "Artboard 2", stateMachine: n, dataBinding: d, onDataBindingChange: u, ...g } = e,
        { status: h, buffer: p } = (0, s.CE)(a),
        m = (0, s.m2)(a),
        B = i.useCallback(() => {
            let e = l[t];
            return null == e ? null : (0, r.jsx)(e, { dataBinding: d, onDataBindingChange: u });
        }, [t, d, u]);
    return h === s.BW.Loading
        ? null
        : (0, r.jsx)(o.w, {
              ...(m ? { key: "override" } : {}),
              buffer: p,
              artboard: t,
              stateMachine: n,
              artboardProperties: b,
              artboardViewModelInstances: c,
              artboardStateMachines: f,
              renderDataBinding: B,
              ...g,
          });
}
g.riveSrc = a;
