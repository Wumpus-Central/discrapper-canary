t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} do ${e.endDate}`,
    dateSelected: (e) => `${e.date} izbrano`,
    finishRangeSelectionPrompt: "Kliknite za dokončanje izbire datumskega obsega",
    maximumDate: "Zadnji razpoložljivi datum",
    minimumDate: "Prvi razpoložljivi datum",
    next: "Naprej",
    previous: "Nazaj",
    selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
    selectedRangeDescription: (e) => `Izbrano obmo\u{10D}je: ${e.dateRange}`,
    startRangeSelectionPrompt: "Kliknite za začetek izbire datumskega obsega",
    todayDate: (e) => `Danes, ${e.date}`,
    todayDateSelected: (e) => `Danes, ${e.date} izbrano`,
};
