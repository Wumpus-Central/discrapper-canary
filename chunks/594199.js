n.d(t, {
    T9: () => s,
    ZP: () => o
});
var i = n(477660),
    r = n.n(i);
let a = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/,
    s = (e) => new RegExp('^[\\s\\S]+?(?='.concat(e, '|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)')),
    o = {
        ...r().defaultRules.text,
        match: (0, i.anyScopeRegex)(a)
    };
