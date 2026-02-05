"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} no seleccionado.`,
    longPressToSelect: "Mantenga pulsado para abrir el modo de selecci\xf3n.",
    select: "Seleccionar",
    selectedAll: "Todos los elementos seleccionados.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Ning\xfan elemento seleccionado", one: () => `${t.number(e.count)} elemento seleccionado`, other: () => `${t.number(e.count)} elementos seleccionados` })}.`,
    selectedItem: (e) => `${e.item} seleccionado.`,
};
