t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} til ${e.endDate}`,
    dateSelected: (e) => `${e.date} valgt`,
    finishRangeSelectionPrompt: "Klikk for \xe5 fullf\xf8re valg av datoomr\xe5de",
    maximumDate: "Siste tilgjengelige dato",
    minimumDate: "F\xf8rste tilgjengelige dato",
    next: "Neste",
    previous: "Forrige",
    selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
    selectedRangeDescription: (e) => `Valgt omr\xe5de: ${e.dateRange}`,
    startRangeSelectionPrompt: "Klikk for \xe5 starte valg av datoomr\xe5de",
    todayDate: (e) => `I dag, ${e.date}`,
    todayDateSelected: (e) => `I dag, ${e.date} valgt`,
};
