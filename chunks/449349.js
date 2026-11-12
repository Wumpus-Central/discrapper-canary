o.d(t, { D: () => v });
var a = o(477900),
    n = o(582128);
let r =
    "https://cdn.discordapp.com/assets/content/4e02ee0451e556464805350795ce905d3f1fae8d476d249189c0d236fd312029.riv";
var d = o(729901),
    i = o(611361),
    s = o(799226),
    c = o(752540);
let l = {
        "Boost Server": { reducedMotion: "boolean" },
        "Boost Crystal": { reducedMotion: "boolean" },
        "Crystal Side B": {},
        "Crystal Side A": {},
        "Boost Saved": { reducedMotion: "boolean" },
    },
    u = {
        "Boost Server": ["Instance"],
        "Boost Crystal": ["Instance"],
        "Crystal Side B": [],
        "Crystal Side A": [],
        "Boost Saved": ["Instance"],
    },
    B = {
        "Boost Server": ["State Machine 1"],
        "Boost Crystal": ["State Machine 1"],
        "Crystal Side B": ["State Machine 1"],
        "Crystal Side A": ["State Machine 1"],
        "Boost Saved": ["State Machine 1"],
    },
    S = {
        "Boost Server": function (e) {
            let { dataBinding: t } = e,
                { instance: o, reducedMotionEnabled: a, playIfNeeded: n } = (0, i.o)();
            return ((0, c.Dr)("reducedMotion", o, t?.reducedMotion ?? a, void 0, n), null);
        },
        "Boost Crystal": function (e) {
            let { dataBinding: t } = e,
                { instance: o, reducedMotionEnabled: a, playIfNeeded: n } = (0, i.o)();
            return ((0, c.Dr)("reducedMotion", o, t?.reducedMotion ?? a, void 0, n), null);
        },
        "Boost Saved": function (e) {
            let { dataBinding: t } = e,
                { instance: o, reducedMotionEnabled: a, playIfNeeded: n } = (0, i.o)();
            return ((0, c.Dr)("reducedMotion", o, t?.reducedMotion ?? a, void 0, n), null);
        },
    };
function v(e) {
    let { artboard: t = "Boost Server", stateMachine: o, dataBinding: i, onDataBindingChange: c, ...v } = e,
        { status: M, buffer: C } = (0, s.CE)(r),
        h = (0, s.m2)(r),
        b = n.useCallback(() => {
            let e = S[t];
            return null == e ? null : (0, a.jsx)(e, { dataBinding: i, onDataBindingChange: c });
        }, [t, i, c]);
    return M === s.BW.Loading
        ? null
        : (0, a.jsx)(d.w, {
              ...(h ? { key: "override" } : {}),
              buffer: C,
              artboard: t,
              stateMachine: o,
              artboardProperties: l,
              artboardViewModelInstances: u,
              artboardStateMachines: B,
              renderDataBinding: b,
              ...v,
          });
}
v.riveSrc = r;
