t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,
    dateSelected: (e) => `${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
    finishRangeSelectionPrompt: "חץ כדי לסיים את בחירת טווח התאריכים",
    maximumDate: "תאריך פנוי אחרון",
    minimumDate: "תאריך פנוי ראשון",
    next: "הבא",
    previous: "הקודם",
    selectedDateDescription: (e) => `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,
    selectedRangeDescription: (e) => `\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.dateRange}`,
    startRangeSelectionPrompt: "לחץ כדי להתחיל בבחירת טווח התאריכים",
    todayDate: (e) => `\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date}`,
    todayDateSelected: (e) => `\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
};
