t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} do ${e.endDate}`,
    dateSelected: (e) => `${e.date} odabran`,
    finishRangeSelectionPrompt: "Kliknite da dovršite raspon odabranih datuma",
    maximumDate: "Posljednji raspoloživi datum",
    minimumDate: "Prvi raspoloživi datum",
    next: "Sljedeći",
    previous: "Prethodni",
    selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
    selectedRangeDescription: (e) => `Odabrani raspon: ${e.dateRange}`,
    startRangeSelectionPrompt: "Kliknite da započnete raspon odabranih datuma",
    todayDate: (e) => `Danas, ${e.date}`,
    todayDateSelected: (e) => `Danas, odabran ${e.date}`,
};
