t.d(a, { A: () => r });
var r = {};
r = {
    rangeOverflow: (e) => `De\u{11F}er, ${e.maxValue} veya \xf6ncesi olmal\u{131}d\u{131}r.`,
    rangeReversed: "Başlangı\xe7 tarihi bitiş tarihinden \xf6nce olmalıdır.",
    rangeUnderflow: (e) => `De\u{11F}er, ${e.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,
    unavailableDate: "Se\xe7ilen tarih kullanılamıyor.",
};
