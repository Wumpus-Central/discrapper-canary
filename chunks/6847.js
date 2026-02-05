"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} se\xe7ilmedi.`,
    longPressToSelect: "Se\xe7im moduna girmek i\xe7in uzun basın.",
    select: "Se\xe7",
    selectedAll: "T\xfcm \xf6geler se\xe7ildi.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Hi\xe7bir \xf6ge se\xe7ilmedi", one: () => `${t.number(e.count)} \xf6ge se\xe7ildi`, other: () => `${t.number(e.count)} \xf6ge se\xe7ildi` })}.`,
    selectedItem: (e) => `${e.item} se\xe7ildi.`,
};
