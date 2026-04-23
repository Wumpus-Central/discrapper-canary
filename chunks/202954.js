t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `Nuo ${e.startDate} iki ${e.endDate}`,
    dateSelected: (e) => `Pasirinkta ${e.date}`,
    finishRangeSelectionPrompt: "Spustelėkite, kad baigtumėte pasirinkti datų intervalą",
    maximumDate: "Paskutinė galima data",
    minimumDate: "Pirmoji galima data",
    next: "Paskesnis",
    previous: "Ankstesnis",
    selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
    selectedRangeDescription: (e) => `Pasirinktas intervalas: ${e.dateRange}`,
    startRangeSelectionPrompt: "Spustelėkite, kad pradėtumėte pasirinkti datų intervalą",
    todayDate: (e) => `\u{160}iandien, ${e.date}`,
    todayDateSelected: (e) => `\u{160}iandien, pasirinkta ${e.date}`,
};
