r.d(n, { f: () => k });
var a = r(477900),
    t = r(582128);
let d =
    "https://cdn.discordapp.com/assets/content/67d52916de05ae5374f3644778bee66c05ae690f07026521e7d55ff97dd80850.riv";
var i = r(729901),
    o = r(611361),
    s = r(799226),
    c = r(752540);
let u = { "Server Hub Perk": { on: "boolean", reducedMotion: "boolean" }, _Asset_Pencil: {} },
    l = { "Server Hub Perk": ["Instance"], _Asset_Pencil: [] },
    b = { "Server Hub Perk": ["State Machine 1"], _Asset_Pencil: ["State Machine 1"] },
    h = {
        "Server Hub Perk": function (e) {
            let { dataBinding: n, onDataBindingChange: r } = e,
                { instance: a, reducedMotionEnabled: t, playIfNeeded: d } = (0, o.o)();
            return (
                (0, c.Dr)("on", a, n?.on, r?.on, d),
                (0, c.Dr)("reducedMotion", a, n?.reducedMotion ?? t, void 0, d),
                null
            );
        },
    };
function k(e) {
    let { artboard: n = "Server Hub Perk", stateMachine: r, dataBinding: o, onDataBindingChange: c, ...k } = e,
        { status: p, buffer: v } = (0, s.CE)(d),
        f = (0, s.m2)(d),
        P = t.useCallback(() => {
            let e = h[n];
            return null == e ? null : (0, a.jsx)(e, { dataBinding: o, onDataBindingChange: c });
        }, [n, o, c]);
    return p === s.BW.Loading
        ? null
        : (0, a.jsx)(i.w, {
              ...(f ? { key: "override" } : {}),
              buffer: v,
              artboard: n,
              stateMachine: r,
              artboardProperties: u,
              artboardViewModelInstances: l,
              artboardStateMachines: b,
              renderDataBinding: P,
              ...k,
          });
}
k.riveSrc = d;
