a.d(e, { a: () => p });
var t = a(477900),
    d = a(582128);
let o =
    "https://cdn.discordapp.com/assets/content/1f36d546a4ac8054dbd6ab0384a6aa4bf3c574c8b435c58e0e4e8d922a0a4cce.riv";
var i = a(729901),
    r = a(611361),
    s = a(799226),
    c = a(270597);
let l = { "Bounties Illo Hands": { reducedMotion: "boolean" }, "Orb shine": { reducedMotion: "boolean" } },
    u = { "Bounties Illo Hands": ["Instance"], "Orb shine": ["Instance"] },
    b = { "Bounties Illo Hands": ["State Machine 1"], "Orb shine": ["SM_Orb"] },
    h = {
        "Bounties Illo Hands": function (n) {
            let { dataBinding: e } = n,
                { instance: a, reducedMotionEnabled: t, playIfNeeded: d } = (0, r.o)();
            return ((0, c.Dr)("reducedMotion", a, e?.reducedMotion ?? t, void 0, d), null);
        },
        "Orb shine": function (n) {
            let { dataBinding: e } = n,
                { instance: a, reducedMotionEnabled: t, playIfNeeded: d } = (0, r.o)();
            return ((0, c.Dr)("reducedMotion", a, e?.reducedMotion ?? t, void 0, d), null);
        },
    };
function p(n) {
    let { artboard: e = "Bounties Illo Hands", stateMachine: a, dataBinding: r, onDataBindingChange: c, ...p } = n,
        { status: B, buffer: M } = (0, s.CE)(o),
        I = (0, s.m2)(o),
        f = d.useCallback(() => {
            let n = h[e];
            return null == n ? null : (0, t.jsx)(n, { dataBinding: r, onDataBindingChange: c });
        }, [e, r, c]);
    return B === s.BW.Loading
        ? null
        : (0, t.jsx)(i.w, {
              ...(I ? { key: "override" } : {}),
              buffer: M,
              artboard: e,
              stateMachine: a,
              artboardProperties: l,
              artboardViewModelInstances: u,
              artboardStateMachines: b,
              renderDataBinding: f,
              ...p,
          });
}
p.riveSrc = o;
