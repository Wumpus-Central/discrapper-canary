t.d(e, { A4: () => s, Nt: () => i, V1: () => r });
var a = t(315847);
function r(n, e, t = Error) {
    if (!n) throw new t(e);
}
let i = (0, a.B)((...n) => new Intl.NumberFormat(...n), { strategy: a.W.variadic });
(0, a.B)((...n) => new Intl.PluralRules(...n), { strategy: a.W.variadic }),
    (0, a.B)((...n) => new Intl.Locale(...n), { strategy: a.W.variadic });
let s = (0, a.B)((...n) => new Intl.ListFormat(...n), { strategy: a.W.variadic });
