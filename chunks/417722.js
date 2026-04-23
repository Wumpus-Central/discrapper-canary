"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `Polo\u{17E}ka ${e.item} nen\xed vybr\xe1na.`,
    longPressToSelect: "Dlouh\xfdm stisknut\xedm přejdete do režimu v\xfdběru.",
    select: "Vybrat",
    selectedAll: "Vybr\xe1ny všechny položky.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Nevybr\xe1ny ž\xe1dn\xe9 položky", one: () => `Vybr\xe1na ${t.number(e.count)} polo\u{17E}ka`, other: () => `Vybr\xe1no ${t.number(e.count)} polo\u{17E}ek` })}.`,
    selectedItem: (e) => `Vybr\xe1na polo\u{17E}ka ${e.item}.`,
};
