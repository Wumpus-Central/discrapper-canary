t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} til ${e.endDate}`,
    dateSelected: (e) => `${e.date} valgt`,
    finishRangeSelectionPrompt: "Klik for at fuldf\xf8re valg af datoomr\xe5de",
    maximumDate: "Sidste ledige dato",
    minimumDate: "F\xf8rste ledige dato",
    next: "N\xe6ste",
    previous: "Forrige",
    selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
    selectedRangeDescription: (e) => `Valgt interval: ${e.dateRange}`,
    startRangeSelectionPrompt: "Klik for at starte valg af datoomr\xe5de",
    todayDate: (e) => `I dag, ${e.date}`,
    todayDateSelected: (e) => `I dag, ${e.date} valgt`,
};
