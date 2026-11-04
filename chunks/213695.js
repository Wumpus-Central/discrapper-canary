o.d(e, { V: () => b });
var a = o(477900),
    c = o(582128);
let t =
    "https://cdn.discordapp.com/assets/content/bee5073bff85cffaf0f4236456029b067925cd9de6742c5bb582f0ce39f1fa49.riv";
var l = o(729901),
    d = o(611361),
    r = o(799226),
    i = o(270597);
let s = { "Icon Unlock": { reducedMotion: "boolean", locked: "boolean", fill: "color" } },
    u = { "Icon Unlock": ["locked", "unlock"] },
    f = { "Icon Unlock": ["State Machine 1"] },
    k = {
        "Icon Unlock": function (n) {
            let { dataBinding: e, onDataBindingChange: o } = n,
                { instance: a, reducedMotionEnabled: c, playIfNeeded: t } = (0, d.o)();
            return (
                (0, i.Dr)("reducedMotion", a, e?.reducedMotion ?? c, void 0, t),
                (0, i.Dr)("locked", a, e?.locked, o?.locked, t),
                (0, i.QJ)("fill", a, e?.fill, o?.fill, t),
                null
            );
        },
    };
function b(n) {
    let { artboard: e = "Icon Unlock", stateMachine: o, dataBinding: d, onDataBindingChange: i, ...b } = n,
        { status: h, buffer: p } = (0, r.CE)(t),
        g = (0, r.m2)(t),
        M = c.useCallback(() => {
            let n = k[e];
            return null == n ? null : (0, a.jsx)(n, { dataBinding: d, onDataBindingChange: i });
        }, [e, d, i]);
    return h === r.BW.Loading
        ? null
        : (0, a.jsx)(l.w, {
              ...(g ? { key: "override" } : {}),
              buffer: p,
              artboard: e,
              stateMachine: o,
              artboardProperties: s,
              artboardViewModelInstances: u,
              artboardStateMachines: f,
              renderDataBinding: M,
              ...b,
          });
}
b.riveSrc = t;
