"use strict";
n.d(t, { Ay: () => s, VC: () => r });
var i = n(791332);
function r(e) {
    return RegExp(`^[\\s\\S]+?(?=${e}|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)`);
}
let s = {
    ...n.n(i)().defaultRules.text,
    match: (0, i.anyScopeRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/),
};
