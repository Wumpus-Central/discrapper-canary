r.d(n, {
    T9: function () {
        return s;
    }
});
var i = r(477660),
    a = r.n(i);
let o = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/,
    s = (e) => new RegExp('^[\\s\\S]+?(?='.concat(e, '|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)')),
    l = {
        ...a().defaultRules.text,
        match: (0, i.anyScopeRegex)(o)
    };
n.ZP = l;
