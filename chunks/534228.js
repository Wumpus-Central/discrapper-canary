t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} bis ${e.endDate}`,
    dateSelected: (e) => `${e.date} ausgew\xe4hlt`,
    finishRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beenden",
    maximumDate: "Letztes verf\xfcgbares Datum",
    minimumDate: "Erstes verf\xfcgbares Datum",
    next: "Weiter",
    previous: "Zur\xfcck",
    selectedDateDescription: (e) => `Ausgew\xe4hltes Datum: ${e.date}`,
    selectedRangeDescription: (e) => `Ausgew\xe4hlter Bereich: ${e.dateRange}`,
    startRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beginnen",
    todayDate: (e) => `Heute, ${e.date}`,
    todayDateSelected: (e) => `Heute, ${e.date} ausgew\xe4hlt`,
};
