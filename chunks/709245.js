var s,
    i = n(646514),
    l = n(792996),
    r =
        (((s = {}).FEATURED = "featured"),
        (s.IN_PROGRESS = "in-progress"),
        (s.ENDING_SOON = "ending-soon"),
        (s.ORB = "orb"),
        (s.DISCOVERED = "discovered"),
        (s.EXPIRED = "expired"),
        (s.PREVIEW = "preview"),
        (s.SPECIAL_QUESTS = "special-quests"),
        s);
let a = [
    { type: "featured-quests", identifier: "featured", title: l.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: l.t.PRg3qh },
    { type: "quests", identifier: "special-quests", title: l.t.P0lmqC },
    { type: "quests", identifier: "orb", title: l.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: l.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: l.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: l.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: l.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function o(e) {
    return i.A.space.SPACE_XL.resolve({ density: e });
}
let u = 221552 == n.j ? 295 : null;
n.d(
    t,
    {},
    {
        FQ: a,
        Hf: function (e, t) {
            return (1220 - 2 * o(e) * (t ? 2 : 0.75)) / 3;
        },
        Qm: o,
        Rg: function (e, t, n) {
            return e.scrollLeft + (t.getBoundingClientRect().left - (n.getBoundingClientRect().left + 2));
        },
        YF: "data-quest-tile-hovered",
        gi: r,
        mU: function (e, t) {
            return t < 2 ? t : Math.ceil(e / u) + 2 + 1;
        },
    },
);
