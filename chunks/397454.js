n.d(t, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} \xe0 ${e.endDate}`,
    dateSelected: (e) => `${e.date} s\xe9lectionn\xe9`,
    finishRangeSelectionPrompt: "Cliquer pour finir de sélectionner la plage de dates",
    maximumDate: "Dernière date disponible",
    minimumDate: "Première date disponible",
    next: "Suivant",
    previous: "Précédent",
    selectedDateDescription: (e) => `Date s\xe9lectionn\xe9e\xa0: ${e.date}`,
    selectedRangeDescription: (e) => `Plage s\xe9lectionn\xe9e\xa0: ${e.dateRange}`,
    startRangeSelectionPrompt: "Cliquer pour commencer à sélectionner la plage de dates",
    todayDate: (e) => `Aujourd'hui, ${e.date}`,
    todayDateSelected: (e) => `Aujourd\u{2019}hui, ${e.date} s\xe9lectionn\xe9`,
};
