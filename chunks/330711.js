n.d(t, { Z: () => o });
var r = n(973361),
    i = n(627420);
n(211604);
let a = new i.ZP({
    initialLocale: r.parse(document.cookie).locale,
    getMessages: (e) => n(248192)("./".concat(e, ".json")),
    getLanguages: () => n(34859),
});
a.addListener("locale", (e) => {
    document.cookie = "locale=".concat(e, ";path=/");
});
let o = a;
