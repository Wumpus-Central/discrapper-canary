n.d(t, { Z: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} nije izabrano.`,
    longPressToSelect: `Dugo pritisnite za ulazak u re\u{17E}im biranja.`,
    select: "Izaberite",
    selectedAll: "Izabrane su sve stavke.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": "Nije izabrana nijedna stavka",
            one: () => `Izabrana je ${t.number(e.count)} stavka`,
            other: () => `Izabrano je ${t.number(e.count)} stavki`,
        })}.`,
    selectedItem: (e) => `${e.item} je izabrano.`,
};
