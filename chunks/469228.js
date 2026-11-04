a.d(e, { w: () => c });
var i = a(477900),
    o = a(582128);
let r =
    "https://cdn.discordapp.com/assets/content/b5a7e4dd53b173c7d1f38ddbd65142267a79529a228987d184c858c16c21ddf6.riv";
var g = a(729901),
    n = a(611361),
    m = a(799226),
    u = a(270597);
let f = {
        Artboard: { reducedMotion: "boolean", TextColor: "color", "Fire CountUp": "trigger", DisplayValue: "number" },
    },
    I = { Artboard: ["Instance"] },
    d = { Artboard: ["State Machine 1"] },
    s = {
        Artboard: function (t) {
            let { dataBinding: e, onDataBindingChange: a } = t,
                { instance: i, reducedMotionEnabled: o, playIfNeeded: r } = (0, n.o)();
            return (
                (0, u.Dr)("reducedMotion", i, e?.reducedMotion ?? o, void 0, r),
                (0, u.QJ)("TextColor", i, e?.TextColor, a?.TextColor, r),
                (0, u.zJ)("Fire CountUp", i, e?.["Fire CountUp"], a?.["Fire CountUp"], r),
                (0, u.Of)("DisplayValue", i, e?.DisplayValue, a?.DisplayValue, r),
                null
            );
        },
    };
function c(t) {
    let { artboard: e = "Artboard", stateMachine: a, dataBinding: n, onDataBindingChange: u, ...c } = t,
        { status: l, buffer: b } = (0, m.CE)(r),
        h = (0, m.m2)(r),
        O = o.useCallback(() => {
            let t = s[e];
            return null == t ? null : (0, i.jsx)(t, { dataBinding: n, onDataBindingChange: u });
        }, [e, n, u]);
    return l === m.BW.Loading
        ? null
        : (0, i.jsx)(g.w, {
              ...(h ? { key: "override" } : {}),
              buffer: b,
              artboard: e,
              stateMachine: a,
              artboardProperties: f,
              artboardViewModelInstances: I,
              artboardStateMachines: d,
              renderDataBinding: O,
              ...c,
          });
}
c.riveSrc = r;
