t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} \xe0 ${e.endDate}`,
    dateSelected: (e) => `${e.date} s\xe9lectionn\xe9`,
    finishRangeSelectionPrompt: "Cliquer pour finir de s\xe9lectionner la plage de dates",
    maximumDate: "Derni\xe8re date disponible",
    minimumDate: "Premi\xe8re date disponible",
    next: "Suivant",
    previous: "Pr\xe9c\xe9dent",
    selectedDateDescription: (e) => `Date s\xe9lectionn\xe9e\xa0: ${e.date}`,
    selectedRangeDescription: (e) => `Plage s\xe9lectionn\xe9e\xa0: ${e.dateRange}`,
    startRangeSelectionPrompt: "Cliquer pour commencer \xe0 s\xe9lectionner la plage de dates",
    todayDate: (e) => `Aujourd'hui, ${e.date}`,
    todayDateSelected: (e) => `Aujourd\u{2019}hui, ${e.date} s\xe9lectionn\xe9`,
};
