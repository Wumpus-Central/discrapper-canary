t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} do ${e.endDate}`,
    dateSelected: (e) => `Wybrano ${e.date}`,
    finishRangeSelectionPrompt: "Kliknij, aby zakończyć wyb\xf3r zakresu dat",
    maximumDate: "Ostatnia dostępna data",
    minimumDate: "Pierwsza dostępna data",
    next: "Dalej",
    previous: "Wstecz",
    selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
    selectedRangeDescription: (e) => `Wybrany zakres: ${e.dateRange}`,
    startRangeSelectionPrompt: "Kliknij, aby rozpocząć wyb\xf3r zakresu dat",
    todayDate: (e) => `Dzisiaj, ${e.date}`,
    todayDateSelected: (e) => `Dzisiaj wybrano ${e.date}`,
};
