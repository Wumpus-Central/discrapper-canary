"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} \u{43D}\u{435} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
    longPressToSelect: "Виконайте довге натиснення, щоб перейти в режим вибору.",
    select: "Вибрати",
    selectedAll: "Усі елементи вибрано.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Жодних елементів не вибрано", one: () => `${t.number(e.count)} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`, other: () => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{456}\u{432}: ${t.number(e.count)}` })}.`,
    selectedItem: (e) => `${e.item} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
};
