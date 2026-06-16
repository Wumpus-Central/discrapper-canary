"use strict";
n.d(t, { A: () => o });
var i = n(791332),
    r = n.n(i);
let s = /\n$/,
    a = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
    o = {
        order: r().defaultRules.heading.order,
        requiredFirstCharacters: ["-"],
        match: (e, t, n) => (null == n || "" === n || null != n.match(s) ? (0, i.anyScopeRegex)(a)(e, t, n) : null),
        parse: function (e, t, n) {
            return { content: (0, i.parseInline)(t, e[1].trim(), n) };
        },
    };
