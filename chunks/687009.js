"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} \u{43D}\u{435} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
    longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
    select: "Выбрать",
    selectedAll: "Выбраны все элементы.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Нет выбранных элементов", one: () => `${t.number(e.count)} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}`, other: () => `${t.number(e.count)} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}` })}.`,
    selectedItem: (e) => `${e.item} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
};
