t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `De la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,
    dateSelected: (e) => `${e.date} selectat\u{103}`,
    finishRangeSelectionPrompt: "Apăsaţi pentru a finaliza selecţia razei pentru dată",
    maximumDate: "Ultima dată disponibilă",
    minimumDate: "Prima dată disponibilă",
    next: "Următorul",
    previous: "\xcenainte",
    selectedDateDescription: (e) => `Dat\u{103} selectat\u{103}: ${e.date}`,
    selectedRangeDescription: (e) => `Interval selectat: ${e.dateRange}`,
    startRangeSelectionPrompt: "Apăsaţi pentru a \xeencepe selecţia razei pentru dată",
    todayDate: (e) => `Ast\u{103}zi, ${e.date}`,
    todayDateSelected: (e) => `Azi, ${e.date} selectat\u{103}`,
};
