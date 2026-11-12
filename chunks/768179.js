r.d(n, { J: () => S });
var a = r(477900),
    t = r(582128);
let d =
    "https://cdn.discordapp.com/assets/content/f6be7075b3756dfb89ce77617b82d7a9a863a31483e03dfedb07377038197910.riv";
var o = r(729901),
    i = r(611361),
    l = r(799226),
    c = r(752540);
let u = {
        "Gem L2": { reducedMotion: "boolean" },
        Sparkle: { reducedMotion: "boolean" },
        Sparkle_Tiny: { reducedMotion: "boolean" },
    },
    s = { "Gem L2": ["Instance"], Sparkle: ["Instance"], Sparkle_Tiny: ["Instance"] },
    p = { "Gem L2": ["SM_Hover"], Sparkle: ["SparkleSM"], Sparkle_Tiny: ["SparkleSM"] },
    M = {
        "Gem L2": function (e) {
            let { dataBinding: n } = e,
                { instance: r, reducedMotionEnabled: a, playIfNeeded: t } = (0, i.o)();
            return ((0, c.Dr)("reducedMotion", r, n?.reducedMotion ?? a, void 0, t), null);
        },
        Sparkle: function (e) {
            let { dataBinding: n } = e,
                { instance: r, reducedMotionEnabled: a, playIfNeeded: t } = (0, i.o)();
            return ((0, c.Dr)("reducedMotion", r, n?.reducedMotion ?? a, void 0, t), null);
        },
        Sparkle_Tiny: function (e) {
            let { dataBinding: n } = e,
                { instance: r, reducedMotionEnabled: a, playIfNeeded: t } = (0, i.o)();
            return ((0, c.Dr)("reducedMotion", r, n?.reducedMotion ?? a, void 0, t), null);
        },
    };
function S(e) {
    let { artboard: n = "Gem L2", stateMachine: r, dataBinding: i, onDataBindingChange: c, ...S } = e,
        { status: b, buffer: k } = (0, l.CE)(d),
        f = (0, l.m2)(d),
        v = t.useCallback(() => {
            let e = M[n];
            return null == e ? null : (0, a.jsx)(e, { dataBinding: i, onDataBindingChange: c });
        }, [n, i, c]);
    return b === l.BW.Loading
        ? null
        : (0, a.jsx)(o.w, {
              ...(f ? { key: "override" } : {}),
              buffer: k,
              artboard: n,
              stateMachine: r,
              artboardProperties: u,
              artboardViewModelInstances: s,
              artboardStateMachines: p,
              renderDataBinding: v,
              ...S,
          });
}
S.riveSrc = d;
