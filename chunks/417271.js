n.d(t, { Z: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} do ${e.endDate}`,
    dateSelected: (e) => `${e.date} izabran`,
    finishRangeSelectionPrompt: `Kliknite da dovr\u{161}ite opseg izabranih datuma`,
    maximumDate: `Zadnji raspolo\u{17E}ivi datum`,
    minimumDate: `Prvi raspolo\u{17E}ivi datum`,
    next: `Slede\u{107}i`,
    previous: "Prethodni",
    selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
    selectedRangeDescription: (e) => `Izabrani period: ${e.dateRange}`,
    startRangeSelectionPrompt: `Kliknite da zapo\u{10D}nete opseg izabranih datuma`,
    todayDate: (e) => `Danas, ${e.date}`,
    todayDateSelected: (e) => `Danas, izabran ${e.date}`,
};
