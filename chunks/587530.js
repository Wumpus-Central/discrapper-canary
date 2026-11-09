(n.r(e),
    n.d(e, {
        AIVisualIdentitySmallSurfaceRive: () => a.j,
        AVSurveyFacesRive: () => i.i,
        AnimatedNitroOrbRewardsRive: () => o.Z,
        BadgeUnlockPulseRive: () => B,
        BadgesCoachmarkRive: () => r.U,
        BoostGemLevelOneRive: () => f.t,
        BoostGemLevelThreeRive: () => k.z,
        BoostGemLevelTwoRive: () => I.J,
        BoostThisServerRive: () => P.D,
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
        NitroCoinRive: () => H.s,
        NitroQuestOrbsMultiplierRive: () => T.E,
        NitroRewardsMouseRive: () => U.C,
        NitroWishlistingWumpusRive: () => $,
        OrbsIllustration_HandsRive: () => ti,
        PerfTestRive: () => tr.Q,
        PulseGradientRive: () => tl.M,
        ServerHubPerkRive: () => td.f,
        TabHoverGradientRive: () => ts.U,
        TeenScreenTimeRive: () => tu.w,
        ThemeAwareNitroWishlistingWumpusRive: () => tc.u,
        UnlockRive: () => tb.V,
        VibingWumpusBackgroundRive: () => tm.R,
        VibingWumpusRive: () => tg.Z,
        WandAndSparklesRive: () => tk,
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
    b = n(799226),
    g = n(270597);
let m = { Web: { fill: "color" }, Mobile: { fill: "color" } },
    S = { Web: ["Instance"], Mobile: ["Instance"] },
    M = { Web: ["State Machine 1"], Mobile: ["State Machine 1"] },
    C = {
        Web: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, playIfNeeded: o } = (0, c.o)();
            return ((0, g.QJ)("fill", a, e?.fill, n?.fill, o), null);
        },
        Mobile: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, playIfNeeded: o } = (0, c.o)();
            return ((0, g.QJ)("fill", a, e?.fill, n?.fill, o), null);
        },
    };
function B(t) {
    let { artboard: e = "Web", stateMachine: n, dataBinding: a, onDataBindingChange: o, ...i } = t,
        { status: r, buffer: c } = (0, b.CE)(s),
        g = (0, b.m2)(s),
        B = d.useCallback(() => {
            let t = C[e];
            return null == t ? null : (0, l.jsx)(t, { dataBinding: a, onDataBindingChange: o });
        }, [e, a, o]);
    return r === b.BW.Loading
        ? null
        : (0, l.jsx)(u.w, {
              ...(g ? { key: "override" } : {}),
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
    I = n(768179),
    P = n(449349);
let h =
        "https://cdn.discordapp.com/assets/content/90100f5bba072ea8759cb5badbe01f05187ed7b573e7b6d6553775a3f78eef9d.riv",
    L = {
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
    O = {
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
    D = {
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
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Cassette: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Cat: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Banana: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Duck: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Snail: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Origami: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Disco: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Capybara: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Donut: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Bonsai: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        "Card Back": function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        knickknack: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
        Card: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, rive: i, playIfNeeded: r } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, r),
                (0, g.gl)("Icon", a, i, e?.Icon, r),
                (0, g.gl)("Illustration", a, i, e?.Illustration, r),
                (0, g.Of)("AnimationState", a, e?.AnimationState, n?.AnimationState, r),
                (0, g.Of)("PowerMeter", a, e?.PowerMeter, n?.PowerMeter, r),
                (0, g.k6)("LVL", a, e?.LVL, n?.LVL, r),
                (0, g.k6)("PersonaName", a, e?.PersonaName, n?.PersonaName, r),
                (0, g.k6)("id#", a, e?.["id#"], n?.["id#"], r),
                (0, g.k6)("Outof", a, e?.Outof, n?.Outof, r),
                (0, g.QJ)("FillColor", a, e?.FillColor, n?.FillColor, r),
                null
            );
        },
    };
function v(t) {
    let { artboard: e = "Main", stateMachine: n, dataBinding: a, onDataBindingChange: o, ...i } = t,
        { status: r, buffer: s } = (0, b.CE)(h),
        c = (0, b.m2)(h),
        g = d.useCallback(() => {
            let t = p[e];
            return null == t ? null : (0, l.jsx)(t, { dataBinding: a, onDataBindingChange: o });
        }, [e, a, o]);
    return r === b.BW.Loading
        ? null
        : (0, l.jsx)(u.w, {
              ...(c ? { key: "override" } : {}),
              buffer: s,
              artboard: e,
              stateMachine: n,
              artboardProperties: L,
              artboardViewModelInstances: O,
              artboardStateMachines: D,
              renderDataBinding: g,
              ...i,
          });
}
v.riveSrc = h;
var w = n(516749),
    N = n(360450);
let V =
        "https://cdn.discordapp.com/assets/content/756c8e37a14fc267712502cc0892be86b2e98d9132fe075f9ba75fd9e9a0aa48.riv",
    _ = {
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
    A = {
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
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, i),
                (0, g.k6)("Subtitle", a, e?.Subtitle, n?.Subtitle, i),
                (0, g.Dr)("StartButton Pressed", a, e?.["StartButton Pressed"], n?.["StartButton Pressed"], i),
                (0, g.k6)("StartButton", a, e?.StartButton, n?.StartButton, i),
                null
            );
        },
        Globe: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, playIfNeeded: i } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, i),
                (0, g.k6)("Subtitle", a, e?.Subtitle, n?.Subtitle, i),
                (0, g.Dr)("StartButton Pressed", a, e?.["StartButton Pressed"], n?.["StartButton Pressed"], i),
                (0, g.k6)("StartButton", a, e?.StartButton, n?.StartButton, i),
                null
            );
        },
        Entry: function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, playIfNeeded: i } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, i),
                (0, g.k6)("Subtitle", a, e?.Subtitle, n?.Subtitle, i),
                (0, g.Dr)("StartButton Pressed", a, e?.["StartButton Pressed"], n?.["StartButton Pressed"], i),
                (0, g.k6)("StartButton", a, e?.StartButton, n?.StartButton, i),
                null
            );
        },
        "Start Button": function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, reducedMotionEnabled: o, playIfNeeded: i } = (0, c.o)();
            return (
                (0, g.Dr)("reducedMotion", a, e?.reducedMotion ?? o, void 0, i),
                (0, g.k6)("Subtitle", a, e?.Subtitle, n?.Subtitle, i),
                (0, g.Dr)("StartButton Pressed", a, e?.["StartButton Pressed"], n?.["StartButton Pressed"], i),
                (0, g.k6)("StartButton", a, e?.StartButton, n?.StartButton, i),
                null
            );
        },
    };
function y(t) {
    let { artboard: e = "Checkpoint Intro Desktop", stateMachine: n, dataBinding: a, onDataBindingChange: o, ...i } = t,
        { status: r, buffer: s } = (0, b.CE)(V),
        c = (0, b.m2)(V),
        g = d.useCallback(() => {
            let t = R[e];
            return null == t ? null : (0, l.jsx)(t, { dataBinding: a, onDataBindingChange: o });
        }, [e, a, o]);
    return r === b.BW.Loading
        ? null
        : (0, l.jsx)(u.w, {
              ...(c ? { key: "override" } : {}),
              buffer: s,
              artboard: e,
              stateMachine: n,
              artboardProperties: _,
              artboardViewModelInstances: A,
              artboardStateMachines: F,
              renderDataBinding: g,
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
    H = n(883888),
    T = n(454153),
    U = n(915945);
let K =
        "https://cdn.discordapp.com/assets/content/7d79185ce3c3038667277ee16ba8cb835b1b012f20b92ef5428b9166c5347c59.riv",
    Z = { "Nitro Wishlist": { reducedMotion: "boolean" } },
    z = { "Nitro Wishlist": ["Instance"] },
    q = { "Nitro Wishlist": ["State Machine 1"] },
    Y = {
        "Nitro Wishlist": function (t) {
            let { dataBinding: e } = t,
                { instance: n, reducedMotionEnabled: a, playIfNeeded: o } = (0, c.o)();
            return ((0, g.Dr)("reducedMotion", n, e?.reducedMotion ?? a, void 0, o), null);
        },
    };
function $(t) {
    let { artboard: e = "Nitro Wishlist", stateMachine: n, dataBinding: a, onDataBindingChange: o, ...i } = t,
        { status: r, buffer: s } = (0, b.CE)(K),
        c = (0, b.m2)(K),
        g = d.useCallback(() => {
            let t = Y[e];
            return null == t ? null : (0, l.jsx)(t, { dataBinding: a, onDataBindingChange: o });
        }, [e, a, o]);
    return r === b.BW.Loading
        ? null
        : (0, l.jsx)(u.w, {
              ...(c ? { key: "override" } : {}),
              buffer: s,
              artboard: e,
              stateMachine: n,
              artboardProperties: Z,
              artboardViewModelInstances: z,
              artboardStateMachines: q,
              renderDataBinding: g,
              ...i,
          });
}
$.riveSrc = K;
let tt =
        "https://cdn.discordapp.com/assets/content/1f36d546a4ac8054dbd6ab0384a6aa4bf3c574c8b435c58e0e4e8d922a0a4cce.riv",
    te = { "Bounties Illo Hands": { reducedMotion: "boolean" }, "Orb shine": { reducedMotion: "boolean" } },
    tn = { "Bounties Illo Hands": ["Instance"], "Orb shine": ["Instance"] },
    ta = { "Bounties Illo Hands": ["State Machine 1"], "Orb shine": ["SM_Orb"] },
    to = {
        "Bounties Illo Hands": function (t) {
            let { dataBinding: e } = t,
                { instance: n, reducedMotionEnabled: a, playIfNeeded: o } = (0, c.o)();
            return ((0, g.Dr)("reducedMotion", n, e?.reducedMotion ?? a, void 0, o), null);
        },
        "Orb shine": function (t) {
            let { dataBinding: e } = t,
                { instance: n, reducedMotionEnabled: a, playIfNeeded: o } = (0, c.o)();
            return ((0, g.Dr)("reducedMotion", n, e?.reducedMotion ?? a, void 0, o), null);
        },
    };
function ti(t) {
    let { artboard: e = "Bounties Illo Hands", stateMachine: n, dataBinding: a, onDataBindingChange: o, ...i } = t,
        { status: r, buffer: s } = (0, b.CE)(tt),
        c = (0, b.m2)(tt),
        g = d.useCallback(() => {
            let t = to[e];
            return null == t ? null : (0, l.jsx)(t, { dataBinding: a, onDataBindingChange: o });
        }, [e, a, o]);
    return r === b.BW.Loading
        ? null
        : (0, l.jsx)(u.w, {
              ...(c ? { key: "override" } : {}),
              buffer: s,
              artboard: e,
              stateMachine: n,
              artboardProperties: te,
              artboardViewModelInstances: tn,
              artboardStateMachines: ta,
              renderDataBinding: g,
              ...i,
          });
}
ti.riveSrc = tt;
var tr = n(3265),
    tl = n(893030),
    td = n(480749),
    ts = n(704007),
    tu = n(287172),
    tc = n(580573),
    tb = n(213695),
    tg = n(372880),
    tm = n(3200);
let tS =
        "https://cdn.discordapp.com/assets/content/026e9c119f280f5edf3ba486ba20c26e21c5dac14dfedd0a238373298bf289f0.riv",
    tM = { "Surprise Me": { fill: "color" } },
    tC = { "Surprise Me": [""] },
    tB = { "Surprise Me": ["State Machine 1"] },
    tf = {
        "Surprise Me": function (t) {
            let { dataBinding: e, onDataBindingChange: n } = t,
                { instance: a, playIfNeeded: o } = (0, c.o)();
            return ((0, g.QJ)("fill", a, e?.fill, n?.fill, o), null);
        },
    };
function tk(t) {
    let { artboard: e = "Surprise Me", stateMachine: n, dataBinding: a, onDataBindingChange: o, ...i } = t,
        { status: r, buffer: s } = (0, b.CE)(tS),
        c = (0, b.m2)(tS),
        g = d.useCallback(() => {
            let t = tf[e];
            return null == t ? null : (0, l.jsx)(t, { dataBinding: a, onDataBindingChange: o });
        }, [e, a, o]);
    return r === b.BW.Loading
        ? null
        : (0, l.jsx)(u.w, {
              ...(c ? { key: "override" } : {}),
              buffer: s,
              artboard: e,
              stateMachine: n,
              artboardProperties: tM,
              artboardViewModelInstances: tC,
              artboardStateMachines: tB,
              renderDataBinding: g,
              ...i,
          });
}
tk.riveSrc = tS;
