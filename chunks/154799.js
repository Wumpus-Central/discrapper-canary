"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `Vienums ${e.item} nav atlas\u{12B}ts.`,
    longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
    select: "Atlasīt",
    selectedAll: "Atlasīti visi vienumi.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Nav atlasīts neviens vienums", one: () => `Atlas\u{12B}to vienumu skaits: ${t.number(e.count)}`, other: () => `Atlas\u{12B}to vienumu skaits: ${t.number(e.count)}` })}.`,
    selectedItem: (e) => `Atlas\u{12B}ts vienums ${e.item}.`,
};
