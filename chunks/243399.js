"use strict";
r.d(t, { A4: () => a, Nt: () => o, V1: () => i });
var n = r(315847);
function i(e, t, r = Error) {
    if (!e) throw new r(t);
}
let o = (0, n.B)((...e) => new Intl.NumberFormat(...e), { strategy: n.W.variadic });
(0, n.B)((...e) => new Intl.PluralRules(...e), { strategy: n.W.variadic }),
    (0, n.B)((...e) => new Intl.Locale(...e), { strategy: n.W.variadic });
let a = (0, n.B)((...e) => new Intl.ListFormat(...e), { strategy: n.W.variadic });
