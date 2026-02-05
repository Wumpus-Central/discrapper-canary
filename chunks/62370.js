"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `\u{672A}\u{9078}\u{53D6}\u{300C}${e.item}\u{300D}\u{3002}`,
    longPressToSelect: "長按以進入選擇模式。",
    select: "選取",
    selectedAll: "已選取所有項目。",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "未選取任何項目", one: () => `\u{5DF2}\u{9078}\u{53D6} ${t.number(e.count)} \u{500B}\u{9805}\u{76EE}`, other: () => `\u{5DF2}\u{9078}\u{53D6} ${t.number(e.count)} \u{500B}\u{9805}\u{76EE}` })}\u{3002}`,
    selectedItem: (e) => `\u{5DF2}\u{9078}\u{53D6}\u{300C}${e.item}\u{300D}\u{3002}`,
};
