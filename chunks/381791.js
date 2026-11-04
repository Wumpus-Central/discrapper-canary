n.d(e, { U: () => g });
var r = n(477900),
    t = n(582128);
let o =
    "https://cdn.discordapp.com/assets/content/478c4e2368b95b01e5322800305a95640e4044e34f0da08b51845bc91b51526e.riv";
var d = n(729901),
    i = n(611361),
    c = n(799226),
    s = n(270597);
let l = { "Badges Coachmark": { on: "boolean", reducedMotion: "boolean" } },
    u = { "Badges Coachmark": ["Instance"] },
    h = { "Badges Coachmark": ["State Machine 1"] },
    b = {
        "Badges Coachmark": function (a) {
            let { dataBinding: e, onDataBindingChange: n } = a,
                { instance: r, reducedMotionEnabled: t, playIfNeeded: o } = (0, i.o)();
            return (
                (0, s.Dr)("on", r, e?.on, n?.on, o),
                (0, s.Dr)("reducedMotion", r, e?.reducedMotion ?? t, void 0, o),
                null
            );
        },
    };
function g(a) {
    let { artboard: e = "Badges Coachmark", stateMachine: n, dataBinding: i, onDataBindingChange: s, ...g } = a,
        { status: k, buffer: p } = (0, c.CE)(o),
        B = (0, c.m2)(o),
        C = t.useCallback(() => {
            let a = b[e];
            return null == a ? null : (0, r.jsx)(a, { dataBinding: i, onDataBindingChange: s });
        }, [e, i, s]);
    return k === c.BW.Loading
        ? null
        : (0, r.jsx)(d.w, {
              ...(B ? { key: "override" } : {}),
              buffer: p,
              artboard: e,
              stateMachine: n,
              artboardProperties: l,
              artboardViewModelInstances: u,
              artboardStateMachines: h,
              renderDataBinding: C,
              ...g,
          });
}
g.riveSrc = o;
