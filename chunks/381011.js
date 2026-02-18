t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} \u{81F3} ${e.endDate}`,
    dateSelected: (e) => `\u{5DF2}\u{9078}\u{53D6} ${e.date}`,
    finishRangeSelectionPrompt: "按一下以完成選取日期範圍",
    maximumDate: "最後一個可用日期",
    minimumDate: "第一個可用日期",
    next: "下一頁",
    previous: "上一頁",
    selectedDateDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
    selectedRangeDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.dateRange}`,
    startRangeSelectionPrompt: "按一下以開始選取日期範圍",
    todayDate: (e) => `\u{4ECA}\u{5929}\u{FF0C}${e.date}`,
    todayDateSelected: (e) => `\u{5DF2}\u{9078}\u{53D6}\u{4ECA}\u{5929}\u{FF0C}${e.date}`,
};
