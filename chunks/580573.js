i.d(t, { u: () => g });
var a = i(477900),
    e = i(582128);
let r =
    "https://cdn.discordapp.com/assets/content/53eb00aa300595b54d999e60d501f621ad4399918c568561f74b536b6f37c0ab.riv";
var n = i(729901),
    d = i(611361),
    l = i(799226),
    s = i(270597);
let c = { "Nitro Wishlist": { reducedMotion: "boolean", logoColor: "color" } },
    u = { "Nitro Wishlist": ["Instance"] },
    h = { "Nitro Wishlist": ["State Machine 1"] },
    b = {
        "Nitro Wishlist": function (o) {
            let { dataBinding: t, onDataBindingChange: i } = o,
                { instance: a, reducedMotionEnabled: e, playIfNeeded: r } = (0, d.o)();
            return (
                (0, s.Dr)("reducedMotion", a, t?.reducedMotion ?? e, void 0, r),
                (0, s.QJ)("logoColor", a, t?.logoColor, i?.logoColor, r),
                null
            );
        },
    };
function g(o) {
    let { artboard: t = "Nitro Wishlist", stateMachine: i, dataBinding: d, onDataBindingChange: s, ...g } = o,
        { status: p, buffer: C } = (0, l.CE)(r),
        f = (0, l.m2)(r),
        M = e.useCallback(() => {
            let o = b[t];
            return null == o ? null : (0, a.jsx)(o, { dataBinding: d, onDataBindingChange: s });
        }, [t, d, s]);
    return p === l.BW.Loading
        ? null
        : (0, a.jsx)(n.w, {
              ...(f ? { key: "override" } : {}),
              buffer: C,
              artboard: t,
              stateMachine: i,
              artboardProperties: c,
              artboardViewModelInstances: u,
              artboardStateMachines: h,
              renderDataBinding: M,
              ...g,
          });
}
g.riveSrc = r;
