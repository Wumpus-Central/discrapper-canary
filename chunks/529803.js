n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `Nevybrat\xe9 polo\u{17E}ky: ${e.item}.`,
    longPressToSelect: "Dlhším stlačením prejdite do režimu výberu.",
    select: "Vybrať",
    selectedAll: "Všetky vybraté položky.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": "Žiadne vybraté položky",
            one: () => `${t.number(e.count)} vybrat\xe1 polo\u{17E}ka`,
            other: () => `Po\u{10D}et vybrat\xfdch polo\u{17E}iek:${t.number(e.count)}`,
        })}.`,
    selectedItem: (e) => `Vybrat\xe9 polo\u{17E}ky: ${e.item}.`,
};
