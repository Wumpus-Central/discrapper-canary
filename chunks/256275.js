t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,
    dateSelected: (e) => `${e.date} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
    finishRangeSelectionPrompt: "انقر لإنهاء عملية تحديد نطاق التاريخ",
    maximumDate: "آخر تاريخ متاح",
    minimumDate: "أول تاريخ متاح",
    next: "التالي",
    previous: "السابق",
    selectedDateDescription: (e) => `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,
    selectedRangeDescription: (e) =>
        `\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.dateRange}`,
    startRangeSelectionPrompt: "انقر لبدء عملية تحديد نطاق التاريخ",
    todayDate: (e) => `\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date}`,
    todayDateSelected: (e) => `\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date} \u{645}\u{62D}\u{62F}\u{62F}`,
};
