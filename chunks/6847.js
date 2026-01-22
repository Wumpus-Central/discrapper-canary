n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} se\xe7ilmedi.`,
    longPressToSelect: "Seçim moduna girmek için uzun basın.",
    select: "Seç",
    selectedAll: "Tüm ögeler seçildi.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": "Hiçbir öge seçilmedi",
            one: () => `${t.number(e.count)} \xf6ge se\xe7ildi`,
            other: () => `${t.number(e.count)} \xf6ge se\xe7ildi`,
        })}.`,
    selectedItem: (e) => `${e.item} se\xe7ildi.`,
};
