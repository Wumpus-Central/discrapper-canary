"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} pole valitud.`,
    longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
    select: "Vali",
    selectedAll: "K\xf5ik \xfcksused valitud.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "\xdcksusi pole valitud", one: () => `${t.number(e.count)} \xfcksus valitud`, other: () => `${t.number(e.count)} \xfcksust valitud` })}.`,
    selectedItem: (e) => `${e.item} valitud.`,
};
