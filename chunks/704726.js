n.d(t, { Ay: () => a, VC: () => r });
var i = n(478676);
function r(e) {
    return RegExp(`^[\\s\\S]+?(?=${e}|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)`);
}
let a = {
    ...n.n(i)().defaultRules.text,
    match: (0, i.anyScopeRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/),
};
