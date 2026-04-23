t.d(a, { A: () => r });
var r = {};
r = {
    calendar: "日曆",
    day: "日",
    dayPeriod: "上午/下午",
    endDate: "結束日期",
    era: "纪元",
    hour: "小时",
    minute: "分钟",
    month: "月",
    second: "秒",
    selectedDateDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
    selectedRangeDescription: (e) =>
        `\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,
    selectedTimeDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{6642}\u{9593}\u{FF1A}${e.time}`,
    startDate: "開始日期",
    timeZoneName: "时区",
    weekday: "工作日",
    year: "年",
};
