t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} \u{81F3} ${e.endDate}`,
    dateSelected: (e) => `\u{5DF2}\u{9009}\u{62E9} ${e.date}`,
    finishRangeSelectionPrompt: "单击以完成选择日期范围",
    maximumDate: "最后一个可用日期",
    minimumDate: "第一个可用日期",
    next: "下一页",
    previous: "上一页",
    selectedDateDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
    selectedRangeDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.dateRange}`,
    startRangeSelectionPrompt: "单击以开始选择日期范围",
    todayDate: (e) => `\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`,
    todayDateSelected: (e) => `\u{5DF2}\u{9009}\u{62E9}\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`,
};
