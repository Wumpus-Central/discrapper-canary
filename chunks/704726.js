var i = n(478676);
let r = {
    ...n.n(i)().defaultRules.text,
    match: (0, i.anyScopeRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/),
};
n.d(
    t,
    {},
    {
        Ay: r,
        VC: function (e) {
            return RegExp(`^[\\s\\S]+?(?=${e}|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)`);
        },
    },
);
