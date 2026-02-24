t.d(a, { A: () => r });
var r = {};
r = {
    calendar: "日历",
    day: "日",
    dayPeriod: "上午/下午",
    endDate: "结束日期",
    era: "纪元",
    hour: "小时",
    minute: "分钟",
    month: "月",
    second: "秒",
    selectedDateDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
    selectedRangeDescription: (e) =>
        `\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,
    selectedTimeDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{65F6}\u{95F4}\u{FF1A}${e.time}`,
    startDate: "开始日期",
    timeZoneName: "时区",
    weekday: "工作日",
    year: "年",
};
