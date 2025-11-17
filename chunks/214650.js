n.d(t, { Z: () => r });
var r = {};
r = {
    deselectedItem: (e) => `\u{672A}\u{9009}\u{62E9} ${e.item}\u{3002}`,
    longPressToSelect: `\u{957F}\u{6309}\u{4EE5}\u{8FDB}\u{5165}\u{9009}\u{62E9}\u{6A21}\u{5F0F}\u{3002}`,
    select: `\u{9009}\u{62E9}`,
    selectedAll: `\u{5DF2}\u{9009}\u{62E9}\u{6240}\u{6709}\u{9879}\u{76EE}\u{3002}`,
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": `\u{672A}\u{9009}\u{62E9}\u{9879}\u{76EE}`,
            one: () => `\u{5DF2}\u{9009}\u{62E9} ${t.number(e.count)} \u{4E2A}\u{9879}\u{76EE}`,
            other: () => `\u{5DF2}\u{9009}\u{62E9} ${t.number(e.count)} \u{4E2A}\u{9879}\u{76EE}`,
        })}\u{3002}`,
    selectedItem: (e) => `\u{5DF2}\u{9009}\u{62E9} ${e.item}\u{3002}`,
};
