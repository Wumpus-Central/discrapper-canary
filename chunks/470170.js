n.d(t, { s: () => A });
var i = n(477900),
    r = n(582128);
let a =
    "https://cdn.discordapp.com/assets/content/bd712b6e0f8e5ee33f7f102f7bb02e40850fe06ccdf425523f3093c838ef6a28.riv";
var s = n(729901),
    l = n(611361),
    o = n(799226),
    d = n(270597);
let c = {
        HoverDarkmode: { posy: "number", posx: "number" },
        ButtonFillDarkmode: {},
        BaseGlowRemapped: {},
        BaseGlow: {},
        HoverLightmode: { posy: "number", posx: "number" },
        ButtonFillLightmode: {},
    },
    u = {
        HoverDarkmode: ["Instance"],
        ButtonFillDarkmode: [],
        BaseGlowRemapped: [],
        BaseGlow: [],
        HoverLightmode: ["Instance"],
        ButtonFillLightmode: [],
    },
    _ = {
        HoverDarkmode: ["Main State Machine"],
        ButtonFillDarkmode: ["Main State Machine"],
        BaseGlowRemapped: ["State Machine 1"],
        BaseGlow: ["Main State Machine"],
        HoverLightmode: ["Main State Machine"],
        ButtonFillLightmode: ["Main State Machine"],
    },
    E = {
        HoverDarkmode: function (e) {
            let { dataBinding: t, onDataBindingChange: n } = e,
                { instance: i, playIfNeeded: r } = (0, l.o)();
            return ((0, d.Of)("posy", i, t?.posy, n?.posy, r), (0, d.Of)("posx", i, t?.posx, n?.posx, r), null);
        },
        HoverLightmode: function (e) {
            let { dataBinding: t, onDataBindingChange: n } = e,
                { instance: i, playIfNeeded: r } = (0, l.o)();
            return ((0, d.Of)("posy", i, t?.posy, n?.posy, r), (0, d.Of)("posx", i, t?.posx, n?.posx, r), null);
        },
    };
function A(e) {
    let { artboard: t = "HoverDarkmode", stateMachine: n, dataBinding: l, onDataBindingChange: d, ...A } = e,
        { status: h, buffer: f } = (0, o.CE)(a),
        I = (0, o.m2)(a),
        p = r.useCallback(() => {
            let e = E[t];
            return null == e ? null : (0, i.jsx)(e, { dataBinding: l, onDataBindingChange: d });
        }, [t, l, d]);
    return h === o.BW.Loading
        ? null
        : (0, i.jsx)(s.w, {
              ...(I ? { key: "override" } : {}),
              buffer: f,
              artboard: t,
              stateMachine: n,
              artboardProperties: c,
              artboardViewModelInstances: u,
              artboardStateMachines: _,
              renderDataBinding: p,
              ...A,
          });
}
A.riveSrc = a;
