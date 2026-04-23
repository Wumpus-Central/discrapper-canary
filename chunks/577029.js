t.d(a, { A: () => r });
var r = {};
r = {
    rangeOverflow: (e) => `La valeur doit \xeatre ${e.maxValue} ou ant\xe9rieure.`,
    rangeReversed: "La date de d\xe9but doit \xeatre ant\xe9rieure \xe0 la date de fin.",
    rangeUnderflow: (e) => `La valeur doit \xeatre ${e.minValue} ou ult\xe9rieure.`,
    unavailableDate: "La date s\xe9lectionn\xe9e n’est pas disponible.",
};
