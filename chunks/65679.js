t.d(a, { A: () => r });
var r = {};
r = {
    rangeOverflow: (e) => `Il valore deve essere ${e.maxValue} o precedente.`,
    rangeReversed: "La data di inizio deve essere antecedente alla data di fine.",
    rangeUnderflow: (e) => `Il valore deve essere ${e.minValue} o successivo.`,
    unavailableDate: "Data selezionata non disponibile.",
};
