n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} nincs kijel\xf6lve.`,
    longPressToSelect: "Nyomja hosszan a kijelöléshez.",
    select: "Kijelölés",
    selectedAll: "Az összes elem kijelölve.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": "Egy elem sincs kijelölve",
            one: () => `${t.number(e.count)} elem kijel\xf6lve`,
            other: () => `${t.number(e.count)} elem kijel\xf6lve`,
        })}.`,
    selectedItem: (e) => `${e.item} kijel\xf6lve.`,
};
