"use strict";
n.d(t, { A: () => o });
var r = n(791332),
    i = n.n(r);
let a = /\n$/,
    s = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
    o = {
        order: i().defaultRules.heading.order,
        requiredFirstCharacters: ["-"],
        match: (e, t, n) => (null == n || "" === n || null != n.match(a) ? (0, r.anyScopeRegex)(s)(e, t, n) : null),
        parse: function (e, t, n) {
            return { content: (0, r.parseInline)(t, e[1].trim(), n) };
        },
    };
