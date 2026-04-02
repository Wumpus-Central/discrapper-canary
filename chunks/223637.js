"use strict";
n.d(t, { A: () => a });
var r = n(791332),
    i = n.n(r);
let s = /\n$/,
    a = {
        ...i().defaultRules.heading,
        requiredFirstCharacters: [" ", "#"],
        match: (e, t, n) =>
            t.allowHeading && (null == n || "" === n || null != n.match(s))
                ? (0, r.anyScopeRegex)(/^ *(#{1,3})(?:\s+)([^\n]+?)#*\s*(?:\n|$)/)(e, t, n)
                : null,
    };
