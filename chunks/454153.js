r.d(n, { E: () => h });
var o = r(477900),
    t = r(582128);
let i =
    "https://cdn.discordapp.com/assets/content/a5e059af7c16750f382df02ee50c55be2ee90575e42ff1790aa2067c7c890a16.riv";
var d = r(729901),
    a = r(611361),
    l = r(799226),
    u = r(270597);
let c = {
        Torbs_Multiply: { reducedMotion: "boolean" },
        Shards_All_Nitro: { reducedMotion: "boolean" },
        "Orb Mid Shine": { reducedMotion: "boolean" },
        Torbs_Shine: { reducedMotion: "boolean" },
    },
    s = {
        Torbs_Multiply: ["Instance"],
        Shards_All_Nitro: ["Instance"],
        "Orb Mid Shine": ["Instance"],
        Torbs_Shine: ["Instance"],
    },
    b = {
        Torbs_Multiply: ["SM_Torbs_Multiply"],
        Shards_All_Nitro: ["Shard_Burst"],
        "Orb Mid Shine": ["State Machine 1"],
        Torbs_Shine: ["SM_Torbs"],
    },
    M = {
        Torbs_Multiply: function (e) {
            let { dataBinding: n } = e,
                { instance: r, reducedMotionEnabled: o, playIfNeeded: t } = (0, a.o)();
            return ((0, u.Dr)("reducedMotion", r, n?.reducedMotion ?? o, void 0, t), null);
        },
        Shards_All_Nitro: function (e) {
            let { dataBinding: n } = e,
                { instance: r, reducedMotionEnabled: o, playIfNeeded: t } = (0, a.o)();
            return ((0, u.Dr)("reducedMotion", r, n?.reducedMotion ?? o, void 0, t), null);
        },
        "Orb Mid Shine": function (e) {
            let { dataBinding: n } = e,
                { instance: r, reducedMotionEnabled: o, playIfNeeded: t } = (0, a.o)();
            return ((0, u.Dr)("reducedMotion", r, n?.reducedMotion ?? o, void 0, t), null);
        },
        Torbs_Shine: function (e) {
            let { dataBinding: n } = e,
                { instance: r, reducedMotionEnabled: o, playIfNeeded: t } = (0, a.o)();
            return ((0, u.Dr)("reducedMotion", r, n?.reducedMotion ?? o, void 0, t), null);
        },
    };
function h(e) {
    let { artboard: n = "Torbs_Multiply", stateMachine: r, dataBinding: a, onDataBindingChange: u, ...h } = e,
        { status: _, buffer: S } = (0, l.CE)(i),
        p = (0, l.m2)(i),
        f = t.useCallback(() => {
            let e = M[n];
            return null == e ? null : (0, o.jsx)(e, { dataBinding: a, onDataBindingChange: u });
        }, [n, a, u]);
    return _ === l.BW.Loading
        ? null
        : (0, o.jsx)(d.w, {
              ...(p ? { key: "override" } : {}),
              buffer: S,
              artboard: n,
              stateMachine: r,
              artboardProperties: c,
              artboardViewModelInstances: s,
              artboardStateMachines: b,
              renderDataBinding: f,
              ...h,
          });
}
h.riveSrc = i;
