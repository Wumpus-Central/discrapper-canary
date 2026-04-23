t.d(a, { A: () => r });
var r = {};
r = {
    rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
    rangeReversed: "Datum početka mora biti prije datuma završetka.",
    rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
    unavailableDate: "Odabrani datum nije dostupan.",
};
