r.d(n, { t: () => S });
var a = r(477900),
    t = r(582128);
let d =
    "https://cdn.discordapp.com/assets/content/43b5fa41a3e3cada2b5bb7dfdc456d22a834d01c2947ffc986b4996ee40c063b.riv";
var o = r(729901),
    i = r(611361),
    l = r(799226),
    c = r(270597);
let u = {
        "Gem L1": { reducedMotion: "boolean" },
        Sparkle_Tiny: { reducedMotion: "boolean" },
        Sparkle: { reducedMotion: "boolean" },
    },
    s = { "Gem L1": ["Instance"], Sparkle_Tiny: ["Instance"], Sparkle: ["Instance"] },
    p = { "Gem L1": ["SM_Hover"], Sparkle_Tiny: ["SparkleSM"], Sparkle: ["SparkleSM"] },
    M = {
        "Gem L1": function (e) {
            let { dataBinding: n } = e,
                { instance: r, reducedMotionEnabled: a, playIfNeeded: t } = (0, i.o)();
            return ((0, c.Dr)("reducedMotion", r, n?.reducedMotion ?? a, void 0, t), null);
        },
        Sparkle_Tiny: function (e) {
            let { dataBinding: n } = e,
                { instance: r, reducedMotionEnabled: a, playIfNeeded: t } = (0, i.o)();
            return ((0, c.Dr)("reducedMotion", r, n?.reducedMotion ?? a, void 0, t), null);
        },
        Sparkle: function (e) {
            let { dataBinding: n } = e,
                { instance: r, reducedMotionEnabled: a, playIfNeeded: t } = (0, i.o)();
            return ((0, c.Dr)("reducedMotion", r, n?.reducedMotion ?? a, void 0, t), null);
        },
    };
function S(e) {
    let { artboard: n = "Gem L1", stateMachine: r, dataBinding: i, onDataBindingChange: c, ...S } = e,
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
