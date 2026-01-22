n.d(t, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} til ${e.endDate}`,
    dateSelected: (e) => `${e.date} valgt`,
    finishRangeSelectionPrompt: "Klik for at fuldføre valg af datoområde",
    maximumDate: "Sidste ledige dato",
    minimumDate: "Første ledige dato",
    next: "Næste",
    previous: "Forrige",
    selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
    selectedRangeDescription: (e) => `Valgt interval: ${e.dateRange}`,
    startRangeSelectionPrompt: "Klik for at starte valg af datoområde",
    todayDate: (e) => `I dag, ${e.date}`,
    todayDateSelected: (e) => `I dag, ${e.date} valgt`,
};
