"use strict";
n.d(t, { Ay: () => o, VC: () => s });
var r = n(791332),
    i = n.n(r);
let a = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/,
    s = (e) => RegExp(`^[\\s\\S]+?(?=${e}|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)`),
    o = { ...i().defaultRules.text, match: (0, r.anyScopeRegex)(a) };
