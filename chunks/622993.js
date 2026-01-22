n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `Kohdetta ${e.item} ei valittu.`,
    longPressToSelect: "Siirry valintatilaan painamalla pitkään.",
    select: "Valitse",
    selectedAll: "Kaikki kohteet valittu.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": "Ei yhtään kohdetta valittu",
            one: () => `${t.number(e.count)} kohde valittu`,
            other: () => `${t.number(e.count)} kohdetta valittu`,
        })}.`,
    selectedItem: (e) => `${e.item} valittu.`,
};
