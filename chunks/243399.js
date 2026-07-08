t.d(n, { A4: () => u, Nt: () => i, V1: () => r });
var a = t(315847);
function r(e, n, t = Error) {
    if (!e) throw new t(n);
}
let i = (0, a.B)((...e) => new Intl.NumberFormat(...e), { strategy: a.W.variadic });
(0, a.B)((...e) => new Intl.PluralRules(...e), { strategy: a.W.variadic }),
    (0, a.B)((...e) => new Intl.Locale(...e), { strategy: a.W.variadic });
let u = (0, a.B)((...e) => new Intl.ListFormat(...e), { strategy: a.W.variadic });
