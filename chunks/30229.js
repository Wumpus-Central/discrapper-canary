t.d(a, { A: () => r });
var r = {};
r = {
    rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
    rangeReversed: "Datum početka mora biti pre datuma završetka.",
    rangeUnderflow: (e) => `Vrednost mora da bude ${e.minValue} ili novija.`,
    unavailableDate: "Izabrani datum nije dostupan.",
};
