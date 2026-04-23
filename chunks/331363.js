t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} a\u{17E} ${e.endDate}`,
    dateSelected: (e) => `Vybr\xe1no ${e.date}`,
    finishRangeSelectionPrompt: "Kliknut\xedm dokonč\xedte v\xfdběr rozsahu dat",
    maximumDate: "Posledn\xed dostupn\xe9 datum",
    minimumDate: "Prvn\xed dostupn\xe9 datum",
    next: "Dalš\xed",
    previous: "Předchoz\xed",
    selectedDateDescription: (e) => `Vybran\xe9 datum: ${e.date}`,
    selectedRangeDescription: (e) => `Vybran\xe9 obdob\xed: ${e.dateRange}`,
    startRangeSelectionPrompt: "Kliknut\xedm zah\xe1j\xedte v\xfdběr rozsahu dat",
    todayDate: (e) => `Dnes, ${e.date}`,
    todayDateSelected: (e) => `Dnes, vybr\xe1no ${e.date}`,
};
