n.d(t, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate}\u{2013}${e.endDate}`,
    dateSelected: (e) => `${e.date} kiv\xe1lasztva`,
    finishRangeSelectionPrompt: "Kattintson a dátumtartomány kijelölésének befejezéséhez",
    maximumDate: "Utolsó elérhető dátum",
    minimumDate: "Az első elérhető dátum",
    next: "Következő",
    previous: "Előző",
    selectedDateDescription: (e) => `Kijel\xf6lt d\xe1tum: ${e.date}`,
    selectedRangeDescription: (e) => `Kijel\xf6lt tartom\xe1ny: ${e.dateRange}`,
    startRangeSelectionPrompt: "Kattintson a dátumtartomány kijelölésének indításához",
    todayDate: (e) => `Ma, ${e.date}`,
    todayDateSelected: (e) => `Ma, ${e.date} kijel\xf6lve`,
};
