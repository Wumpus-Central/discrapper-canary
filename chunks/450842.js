"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `\u{672A}\u{9009}\u{62E9} ${e.item}\u{3002}`,
    longPressToSelect: "长按以进入选择模式。",
    select: "选择",
    selectedAll: "已选择所有项目。",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "未选择项目", one: () => `\u{5DF2}\u{9009}\u{62E9} ${t.number(e.count)} \u{4E2A}\u{9879}\u{76EE}`, other: () => `\u{5DF2}\u{9009}\u{62E9} ${t.number(e.count)} \u{4E2A}\u{9879}\u{76EE}` })}\u{3002}`,
    selectedItem: (e) => `\u{5DF2}\u{9009}\u{62E9} ${e.item}\u{3002}`,
};
