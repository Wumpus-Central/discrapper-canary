t.d(r, { j: () => u });
var a = t(477900);
t(582128);
let n =
    "https://cdn.discordapp.com/assets/content/72e3c4b99b3c059f834115e197341d9ca7d5d5a133ba23b6b36e8be09b0a0a12.riv";
var o = t(845867),
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
    },
    i = { "Artboard 2": ["State Machine 1"] };
function u(e) {
    let { artboard: r = "Artboard 2", stateMachine: t, ...u } = e,
        { status: s, buffer: c } = (0, b.CE)(n),
        m = (0, b.m2)(n);
    return s === b.BW.Loading
        ? null
        : (0, a.jsx)(o.w, {
              ...(m ? { key: "override" } : {}),
              buffer: c,
              artboard: r,
              stateMachine: t,
              artboardProperties: d,
              artboardStateMachines: i,
              ...u,
          });
}
u.riveSrc = n;
