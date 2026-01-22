n.d(t, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} til ${e.endDate}`,
    dateSelected: (e) => `${e.date} valgt`,
    finishRangeSelectionPrompt: "Klikk for å fullføre valg av datoområde",
    maximumDate: "Siste tilgjengelige dato",
    minimumDate: "Første tilgjengelige dato",
    next: "Neste",
    previous: "Forrige",
    selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
    selectedRangeDescription: (e) => `Valgt omr\xe5de: ${e.dateRange}`,
    startRangeSelectionPrompt: "Klikk for å starte valg av datoområde",
    todayDate: (e) => `I dag, ${e.date}`,
    todayDateSelected: (e) => `I dag, ${e.date} valgt`,
};
