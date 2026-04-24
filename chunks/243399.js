"use strict";
n.d(t, { A4: () => u, Nt: () => a, V1: () => i });
var r = n(315847);
function i(e, t, n = Error) {
    if (!e) throw new n(t);
}
let a = (0, r.B)((...e) => new Intl.NumberFormat(...e), { strategy: r.W.variadic });
(0, r.B)((...e) => new Intl.PluralRules(...e), { strategy: r.W.variadic }),
    (0, r.B)((...e) => new Intl.Locale(...e), { strategy: r.W.variadic });
let u = (0, r.B)((...e) => new Intl.ListFormat(...e), { strategy: r.W.variadic });
