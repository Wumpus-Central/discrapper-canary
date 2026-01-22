n.d(t, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} a\u{17E} ${e.endDate}`,
    dateSelected: (e) => `Vybr\xe1no ${e.date}`,
    finishRangeSelectionPrompt: "Kliknutím dokončíte výběr rozsahu dat",
    maximumDate: "Poslední dostupné datum",
    minimumDate: "První dostupné datum",
    next: "Další",
    previous: "Předchozí",
    selectedDateDescription: (e) => `Vybran\xe9 datum: ${e.date}`,
    selectedRangeDescription: (e) => `Vybran\xe9 obdob\xed: ${e.dateRange}`,
    startRangeSelectionPrompt: "Kliknutím zahájíte výběr rozsahu dat",
    todayDate: (e) => `Dnes, ${e.date}`,
    todayDateSelected: (e) => `Dnes, vybr\xe1no ${e.date}`,
};
