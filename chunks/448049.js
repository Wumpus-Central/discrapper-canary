n.d(t, { Z: () => r });
var r = {};
r = {
    dateRange: (e) => `Nuo ${e.startDate} iki ${e.endDate}`,
    dateSelected: (e) => `Pasirinkta ${e.date}`,
    finishRangeSelectionPrompt: `Spustel\u{117}kite, kad baigtum\u{117}te pasirinkti dat\u{173} interval\u{105}`,
    maximumDate: `Paskutin\u{117} galima data`,
    minimumDate: "Pirmoji galima data",
    next: "Paskesnis",
    previous: "Ankstesnis",
    selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
    selectedRangeDescription: (e) => `Pasirinktas intervalas: ${e.dateRange}`,
    startRangeSelectionPrompt: `Spustel\u{117}kite, kad prad\u{117}tum\u{117}te pasirinkti dat\u{173} interval\u{105}`,
    todayDate: (e) => `\u{160}iandien, ${e.date}`,
    todayDateSelected: (e) => `\u{160}iandien, pasirinkta ${e.date}`,
};
