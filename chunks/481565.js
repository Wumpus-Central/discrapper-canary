n.d(t, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} kuni ${e.endDate}`,
    dateSelected: (e) => `${e.date} valitud`,
    finishRangeSelectionPrompt: "Klõpsake kuupäevavahemiku valimise lõpetamiseks",
    maximumDate: "Viimane saadaolev kuupäev",
    minimumDate: "Esimene saadaolev kuupäev",
    next: "Järgmine",
    previous: "Eelmine",
    selectedDateDescription: (e) => `Valitud kuup\xe4ev: ${e.date}`,
    selectedRangeDescription: (e) => `Valitud vahemik: ${e.dateRange}`,
    startRangeSelectionPrompt: "Klõpsake kuupäevavahemiku valimiseks",
    todayDate: (e) => `T\xe4na, ${e.date}`,
    todayDateSelected: (e) => `T\xe4na, ${e.date} valitud`,
};
