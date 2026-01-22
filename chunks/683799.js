n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} no seleccionado.`,
    longPressToSelect: "Mantenga pulsado para abrir el modo de selección.",
    select: "Seleccionar",
    selectedAll: "Todos los elementos seleccionados.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": "Ningún elemento seleccionado",
            one: () => `${t.number(e.count)} elemento seleccionado`,
            other: () => `${t.number(e.count)} elementos seleccionados`,
        })}.`,
    selectedItem: (e) => `${e.item} seleccionado.`,
};
