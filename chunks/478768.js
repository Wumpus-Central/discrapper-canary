"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) =>
        `${e.item} \u{304C}\u{9078}\u{629E}\u{3055}\u{308C}\u{3066}\u{3044}\u{307E}\u{305B}\u{3093}\u{3002}`,
    longPressToSelect: "長押しして選択モードを開きます。",
    select: "選択",
    selectedAll: "すべての項目を選択しました。",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "項目が選択されていません", one: () => `${t.number(e.count)} \u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}`, other: () => `${t.number(e.count)} \u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}` })}\u{3002}`,
    selectedItem: (e) => `${e.item} \u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}\u{3002}`,
};
