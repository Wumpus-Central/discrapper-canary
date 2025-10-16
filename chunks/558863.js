n.d(t, { Z: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} nepasirinkta.`,
    longPressToSelect: `Nor\u{117}dami \u{12F}jungti pasirinkimo re\u{17E}im\u{105}, paspauskite ir palaikykite.`,
    select: "Pasirinkti",
    selectedAll: "Pasirinkti visi elementai.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": `Nepasirinktas n\u{117} vienas elementas`,
            one: () => `Pasirinktas ${t.number(e.count)} elementas`,
            other: () => `Pasirinkta element\u{173}: ${t.number(e.count)}`,
        })}.`,
    selectedItem: (e) => `Pasirinkta: ${e.item}.`,
};
