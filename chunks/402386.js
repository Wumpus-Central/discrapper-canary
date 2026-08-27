t.d(r, { j: () => i });
var n = t(477900);
t(582128);
let a =
    "https://cdn.discordapp.com/assets/content/72e3c4b99b3c059f834115e197341d9ca7d5d5a133ba23b6b36e8be09b0a0a12.riv";
var o = t(502377),
    b = t(799226);
let d = {
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
};
function i(e) {
    let { artboard: r = "Artboard 2", stateMachine: t, ...i } = e,
        { status: u, buffer: s } = (0, b.CE)(a),
        c = (0, b.m2)(a);
    return u === b.BW.Loading
        ? null
        : (0, n.jsx)(o.w, {
              ...(c ? { key: "override" } : {}),
              buffer: s,
              artboard: r,
              stateMachine: t,
              artboardProperties: d,
              ...i,
          });
}
i.riveSrc = a;
