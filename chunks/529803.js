"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `Nevybrat\xe9 polo\u{17E}ky: ${e.item}.`,
    longPressToSelect: "Dlhš\xedm stlačen\xedm prejdite do režimu v\xfdberu.",
    select: "Vybrať",
    selectedAll: "Všetky vybrat\xe9 položky.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Žiadne vybrat\xe9 položky", one: () => `${t.number(e.count)} vybrat\xe1 polo\u{17E}ka`, other: () => `Po\u{10D}et vybrat\xfdch polo\u{17E}iek:${t.number(e.count)}` })}.`,
    selectedItem: (e) => `Vybrat\xe9 polo\u{17E}ky: ${e.item}.`,
};
