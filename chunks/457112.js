(n.r(e),
    n.d(e, {
        AIVisualIdentitySmallSurfaceRive: () => a.j,
        AVSurveyFacesRive: () => i.i,
        AnimatedNitroOrbRewardsRive: () => o.Z,
        BadgeUnlockPulseRive: () => B,
        BadgesCoachmarkRive: () => r.U,
        BoostGemLevelOneRive: () => f.t,
        BoostGemLevelThreeRive: () => k.z,
        BoostGemLevelTwoRive: () => P.J,
        BoostThisServerRive: () => I.D,
        CheckpointCardRive: () => v,
        CheckpointCharacterRive: () => w.W,
        CheckpointFriendsRive: () => N.m,
        CheckpointIntroRive: () => y,
        CheckpointKnickKnacksRive: () => W.U,
        CheckpointNumbersCenterAlignedRive: () => G.m,
        CheckpointNumbersLeftAlignedRive: () => Q.w,
        DiceRive: () => J.m,
        FistBumpRive: () => x.l,
        GameServerHostingRive: () => X.E,
        GlowButtonRive: () => j.s,
        JetpackWumpusWithTrinketsRive: () => E.e,
        NitroCoinRive: () => T.s,
        NitroQuestOrbsMultiplierRive: () => U.E,
        NitroRewardsMouseRive: () => H.C,
        NitroWishlistingWumpusRive: () => $,
        OrbsIllustration_HandsRive: () => tt.a,
        PerfTestRive: () => te.Q,
        PulseGradientRive: () => tn.M,
        ServerHubPerkRive: () => ta.f,
        TabHoverGradientRive: () => to.U,
        TeenScreenTimeRive: () => ti.w,
        ThemeAwareNitroWishlistingWumpusRive: () => tr.u,
        UnlockRive: () => tl.V,
        VibingWumpusBackgroundRive: () => ts.R,
        VibingWumpusRive: () => td.Z,
        WandAndSparklesRive: () => tS,
    }));
var a = n(586036),
    o = n(953927),
    i = n(65274),
    r = n(381791),
    l = n(477900),
    d = n(582128);
let s =
    "https://cdn.discordapp.com/assets/content/f9902a37a9e65cbeee19648efc6501868d5394d331eb8e8fff9405e9b42adbad.riv";
var u = n(729901),
    c = n(611361),
    g = n(799226),
    b = n(270597);
let m = { Web: { fill: "color" }, Mobile: { fill: "color" } },
    S = { Web: ["Instance"], Mobile: ["Instance"] },
    M = { Web: ["State Machine 1"], Mobile: ["State Machine 1"] },
    C = {
        Web: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, playIfNeeded: o } = (0, c.o)();
            return ((0, b.QJ)("fill", a, e?.fill, n?.fill, o), null);
        },
        Mobile: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, playIfNeeded: o } = (0, c.o)();
            return ((0, b.QJ)("fill", a, e?.fill, n?.fill, o), null);
        },
    };
function B(t) {
    let { artboard: e = "Web", stateMachine: n, dataBinding: a, onDataBindingChange: o, ...i } = t,
        { status: r, buffer: c } = (0, g.CE)(s),
        b = (0, g.m2)(s),
        B = d.useCallback(() => {
            let t = C[e];
            return null == t ? null : (0, l.jsx)(t, { dataBinding: a, onDataBindingChange: o });
        }, [e, a, o]);
    return r === g.BW.Loading
        ? null
        : (0, l.jsx)(u.w, {
              ...(b ? { key: "override" } : {}),
              buffer: c,
              artboard: e,
              stateMachine: n,
              artboardProperties: m,
              artboardViewModelInstances: S,
              artboardStateMachines: M,
              renderDataBinding: B,
              ...i,
          });
}
B.riveSrc = s;
var f = n(54759),
    k = n(817943),
    P = n(768179),
    I = n(449349);
let L =
        "https://cdn.discordapp.com/assets/content/90100f5bba072ea8759cb5badbe01f05187ed7b573e7b6d6553775a3f78eef9d.riv",
    h = {
        Main: {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
        "Cassette Icon": {},
        Cassette: {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
        "Cat Icon": {},
        Cat: {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
        "Banana Icon": {},
        Banana: {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
        "Duck Icon": {},
        Duck: {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
        "Snail Icon": {},
        Snail: {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
        "Origami Icon": {},
        Origami: {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
        "Disco Icon": {},
        Disco: {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
        "Capybara Icon": {},
        Capybara: {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
        "Donut Icon": {},
        Donut: {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
        "Bonsai Icon": {},
        Bonsai: {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
        "Globe Single Line": {},
        "Card Back": {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
        knickknack: {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
        Globe: {},
        Card: {
            reducedMotion: "boolean",
            Icon: "artboard",
            Illustration: "artboard",
            AnimationState: "number",
            PowerMeter: "number",
            LVL: "string",
            PersonaName: "string",
            "id#": "string",
            Outof: "string",
            FillColor: "color",
        },
    },
    D = {
        Main: ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
        "Cassette Icon": [],
        Cassette: ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
        "Cat Icon": [],
        Cat: ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
        "Banana Icon": [],
        Banana: ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
        "Duck Icon": [],
        Duck: ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
        "Snail Icon": [],
        Snail: ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
        "Origami Icon": [],
        Origami: ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
        "Disco Icon": [],
        Disco: ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
        "Capybara Icon": [],
        Capybara: ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
        "Donut Icon": [],
        Donut: ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
        "Bonsai Icon": [],
        Bonsai: ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
        "Globe Single Line": [],
        "Card Back": ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
        knickknack: ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
        Globe: [],
        Card: ["Bonsai", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"],
    },
    O = {
        Main: ["State Machine 1"],
        "Cassette Icon": ["State Machine 1", "State Machine 2"],
        Cassette: ["State Machine 1"],
        "Cat Icon": ["State Machine 2", "State Machine 1"],
        Cat: ["State Machine 1"],
        "Banana Icon": ["State Machine 1", "State Machine 2"],
        Banana: ["State Machine 1"],
        "Duck Icon": ["State Machine 2", "State Machine 1"],
        Duck: ["State Machine 1"],
        "Snail Icon": ["State Machine 2", "State Machine 1"],
        Snail: ["State Machine 1"],
        "Origami Icon": ["State Machine 1", "State Machine 2"],
        Origami: ["State Machine 1"],
        "Disco Icon": ["State Machine 1", "State Machine 2"],
        Disco: ["State Machine 1"],
        "Capybara Icon": ["State Machine 1", "State Machine 2"],
        Capybara: ["State Machine 1"],
        "Donut Icon": ["State Machine 1", "State Machine 2"],
        Donut: ["State Machine 1"],
        "Bonsai Icon": ["State Machine 1"],
        Bonsai: ["State Machine 1"],
        "Globe Single Line": ["State Machine 1"],
        "Card Back": ["State Machine 1"],
        knickknack: ["State Machine 1"],
        Globe: ["State Machine 1"],
        Card: ["State Machine 1"],
    },
    p = {
        Main: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Cassette: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Cat: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Banana: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Duck: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Snail: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Origami: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Disco: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Capybara: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Donut: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Bonsai: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        "Card Back": function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        knickknack: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Card: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, b.gl)("Icon", a, i, e?.Icon, r),
                (0, b.gl)("Illustration", a, i, e?.Illustration, r),
                (0, b.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, b.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, b.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, b.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, b.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, b.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, b.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
    };
function v(t) {
    let { artboard: e = "Main", stateMachine: n, dataBinding: a, onDataBindingChange: o, ...i } = t,
        { status: r, buffer: s } = (0, g.CE)(L),
        c = (0, g.m2)(L),
        b = d.useCallback(() => {
            let t = p[e];
            return null == t ? null : (0, l.jsx)(t, { dataBinding: a, onDataBindingChange: o });
        }, [e, a, o]);
    return r === g.BW.Loading
        ? null
        : (0, l.jsx)(u.w, {
              ...(c ? { key: "override" } : {}),
              buffer: s,
              artboard: e,
              stateMachine: n,
              artboardProperties: h,
              artboardViewModelInstances: D,
              artboardStateMachines: O,
              renderDataBinding: b,
              ...i,
          });
}
v.riveSrc = L;
var w = n(516749),
    N = n(360450);
let V =
        "https://cdn.discordapp.com/assets/content/756c8e37a14fc267712502cc0892be86b2e98d9132fe075f9ba75fd9e9a0aa48.riv",
    A = {
        "Checkpoint Intro Desktop": {
            reducedMotion: "boolean",
            Subtitle: "string",
            "StartButton Pressed": "boolean",
            StartButton: "string",
        },
        Globe: {
            reducedMotion: "boolean",
            Subtitle: "string",
            "StartButton Pressed": "boolean",
            StartButton: "string",
        },
        "Globe Single Line": {},
        "Looping Checkboard": {},
        CheckRow: {},
        Entry: {
            reducedMotion: "boolean",
            Subtitle: "string",
            "StartButton Pressed": "boolean",
            StartButton: "string",
        },
        "Start Button": {
            reducedMotion: "boolean",
            Subtitle: "string",
            "StartButton Pressed": "boolean",
            StartButton: "string",
        },
    },
    _ = {
        "Checkpoint Intro Desktop": ["Instance"],
        Globe: ["Instance"],
        "Globe Single Line": [],
        "Looping Checkboard": [],
        CheckRow: [],
        Entry: ["Instance"],
        "Start Button": ["Instance"],
    },
    F = {
        "Checkpoint Intro Desktop": ["State Machine 1"],
        Globe: ["State Machine 1"],
        "Globe Single Line": ["State Machine 1"],
        "Looping Checkboard": ["State Machine 1"],
        CheckRow: ["State Machine 1"],
        Entry: ["State Machine 1"],
        "Start Button": ["State Machine 1"],
    },
    R = {
        "Checkpoint Intro Desktop": function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, playIfNeeded: i } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, i),
                (0, b.k6)("Subtitle", a, e?.Subtitle, n?.Subtitle, i),
                (0, b.Dr)("StartButton Pressed", a, e?.["StartButton Pressed"], n?.["StartButton Pressed"], i),
                (0, b.k6)("StartButton", a, e?.StartButton, n?.StartButton, i),
                null
            );
        },
        Globe: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, playIfNeeded: i } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, i),
                (0, b.k6)("Subtitle", a, e?.Subtitle, n?.Subtitle, i),
                (0, b.Dr)("StartButton Pressed", a, e?.["StartButton Pressed"], n?.["StartButton Pressed"], i),
                (0, b.k6)("StartButton", a, e?.StartButton, n?.StartButton, i),
                null
            );
        },
        Entry: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, playIfNeeded: i } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, i),
                (0, b.k6)("Subtitle", a, e?.Subtitle, n?.Subtitle, i),
                (0, b.Dr)("StartButton Pressed", a, e?.["StartButton Pressed"], n?.["StartButton Pressed"], i),
                (0, b.k6)("StartButton", a, e?.StartButton, n?.StartButton, i),
                null
            );
        },
        "Start Button": function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, playIfNeeded: i } = (0, c.o)();
            return (
                (0, b.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, i),
                (0, b.k6)("Subtitle", a, e?.Subtitle, n?.Subtitle, i),
                (0, b.Dr)("StartButton Pressed", a, e?.["StartButton Pressed"], n?.["StartButton Pressed"], i),
                (0, b.k6)("StartButton", a, e?.StartButton, n?.StartButton, i),
                null
            );
        },
    };
function y(t) {
    let { artboard: e = "Checkpoint Intro Desktop", stateMachine: n, dataBinding: a, onDataBindingChange: o, ...i } = t,
        { status: r, buffer: s } = (0, g.CE)(V),
        c = (0, g.m2)(V),
        b = d.useCallback(() => {
            let t = R[e];
            return null == t ? null : (0, l.jsx)(t, { dataBinding: a, onDataBindingChange: o });
        }, [e, a, o]);
    return r === g.BW.Loading
        ? null
        : (0, l.jsx)(u.w, {
              ...(c ? { key: "override" } : {}),
              buffer: s,
              artboard: e,
              stateMachine: n,
              artboardProperties: A,
              artboardViewModelInstances: _,
              artboardStateMachines: F,
              renderDataBinding: b,
              ...i,
          });
}
y.riveSrc = V;
var W = n(206701),
    G = n(663385),
    Q = n(469228),
    J = n(90302),
    x = n(7724),
    X = n(828334),
    j = n(470170),
    E = n(970002),
    T = n(883888),
    U = n(454153),
    H = n(915945);
let K =
        "https://cdn.discordapp.com/assets/content/7d79185ce3c3038667277ee16ba8cb835b1b012f20b92ef5428b9166c5347c59.riv",
    Z = { "Nitro Wishlist": { reducedMotion: "boolean" } },
    z = { "Nitro Wishlist": ["Instance"] },
    q = { "Nitro Wishlist": ["State Machine 1"] },
    Y = {
        "Nitro Wishlist": function (t) {
            let { dataBinding: e } = t,
                { instance: n, reducedMotionEnabled: a, playIfNeeded: o } = (0, c.o)();
            return ((0, b.Dr)("reducedMotion", n, e?.reducedMotion ?? a, void 0, o), null);
        },
    };
function $(t) {
    let { artboard: e = "Nitro Wishlist", stateMachine: n, dataBinding: a, onDataBindingChange: o, ...i } = t,
        { status: r, buffer: s } = (0, g.CE)(K),
        c = (0, g.m2)(K),
        b = d.useCallback(() => {
            let t = Y[e];
            return null == t ? null : (0, l.jsx)(t, { dataBinding: a, onDataBindingChange: o });
        }, [e, a, o]);
    return r === g.BW.Loading
        ? null
        : (0, l.jsx)(u.w, {
              ...(c ? { key: "override" } : {}),
              buffer: s,
              artboard: e,
              stateMachine: n,
              artboardProperties: Z,
              artboardViewModelInstances: z,
              artboardStateMachines: q,
              renderDataBinding: b,
              ...i,
          });
}
$.riveSrc = K;
var tt = n(190485),
    te = n(3265),
    tn = n(893030),
    ta = n(480749),
    to = n(704007),
    ti = n(287172),
    tr = n(580573),
    tl = n(213695),
    td = n(372880),
    ts = n(3200);
let tu =
        "https://cdn.discordapp.com/assets/content/026e9c119f280f5edf3ba486ba20c26e21c5dac14dfedd0a238373298bf289f0.riv",
    tc = { "Surprise Me": { fill: "color" } },
    tg = { "Surprise Me": [""] },
    tb = { "Surprise Me": ["State Machine 1"] },
    tm = {
        "Surprise Me": function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, playIfNeeded: o } = (0, c.o)();
            return ((0, b.QJ)("fill", a, e?.fill, n?.fill, o), null);
        },
    };
function tS(t) {
    let { artboard: e = "Surprise Me", stateMachine: n, dataBinding: a, onDataBindingChange: o, ...i } = t,
        { status: r, buffer: s } = (0, g.CE)(tu),
        c = (0, g.m2)(tu),
        b = d.useCallback(() => {
            let t = tm[e];
            return null == t ? null : (0, l.jsx)(t, { dataBinding: a, onDataBindingChange: o });
        }, [e, a, o]);
    return r === g.BW.Loading
        ? null
        : (0, l.jsx)(u.w, {
              ...(c ? { key: "override" } : {}),
              buffer: s,
              artboard: e,
              stateMachine: n,
              artboardProperties: tc,
              artboardViewModelInstances: tg,
              artboardStateMachines: tb,
              renderDataBinding: b,
              ...i,
          });
}
tS.riveSrc = tu;
