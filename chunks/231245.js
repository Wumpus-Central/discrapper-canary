n.d(t, { Z: () => r });
var r = {};
r = {
    dateRange: (e) => `Da ${e.startDate} a ${e.endDate}`,
    dateSelected: (e) => `${e.date} selezionata`,
    finishRangeSelectionPrompt: `Fai clic per completare la selezione dell\u{2019}intervallo di date`,
    maximumDate: "Ultima data disponibile",
    minimumDate: "Prima data disponibile",
    next: "Successivo",
    previous: "Precedente",
    selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
    selectedRangeDescription: (e) => `Intervallo selezionato: ${e.dateRange}`,
    startRangeSelectionPrompt: `Fai clic per selezionare l\u{2019}intervallo di date`,
    todayDate: (e) => `Oggi, ${e.date}`,
    todayDateSelected: (e) => `Oggi, ${e.date} selezionata`,
};
