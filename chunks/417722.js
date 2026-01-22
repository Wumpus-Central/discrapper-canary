n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `Polo\u{17E}ka ${e.item} nen\xed vybr\xe1na.`,
    longPressToSelect: "Dlouhým stisknutím přejdete do režimu výběru.",
    select: "Vybrat",
    selectedAll: "Vybrány všechny položky.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": "Nevybrány žádné položky",
            one: () => `Vybr\xe1na ${t.number(e.count)} polo\u{17E}ka`,
            other: () => `Vybr\xe1no ${t.number(e.count)} polo\u{17E}ek`,
        })}.`,
    selectedItem: (e) => `Vybr\xe1na polo\u{17E}ka ${e.item}.`,
};
