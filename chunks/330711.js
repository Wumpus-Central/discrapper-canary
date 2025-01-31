n.d(t, { Z: () => s });
var i = n(973361),
    r = n(627420);
n(211604);
let a = new r.ZP({
    initialLocale: i.parse(document.cookie).locale,
    getMessages: (e) => n(292516)('./'.concat(e)),
    getLanguages: () => n(34859)
});
a.addListener('locale', (e) => {
    document.cookie = 'locale='.concat(e, ';path=/');
});
let s = a;
