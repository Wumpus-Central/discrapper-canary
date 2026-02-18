t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} kuni ${e.endDate}`,
    dateSelected: (e) => `${e.date} valitud`,
    finishRangeSelectionPrompt: "Kl\xf5psake kuup\xe4evavahemiku valimise l\xf5petamiseks",
    maximumDate: "Viimane saadaolev kuup\xe4ev",
    minimumDate: "Esimene saadaolev kuup\xe4ev",
    next: "J\xe4rgmine",
    previous: "Eelmine",
    selectedDateDescription: (e) => `Valitud kuup\xe4ev: ${e.date}`,
    selectedRangeDescription: (e) => `Valitud vahemik: ${e.dateRange}`,
    startRangeSelectionPrompt: "Kl\xf5psake kuup\xe4evavahemiku valimiseks",
    todayDate: (e) => `T\xe4na, ${e.date}`,
    todayDateSelected: (e) => `T\xe4na, ${e.date} valitud`,
};
