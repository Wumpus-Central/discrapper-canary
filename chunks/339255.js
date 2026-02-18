t.d(a, { A: () => r });
var r = {};
r = {
    calendar: "Календарь",
    day: "день",
    dayPeriod: "AM/PM",
    endDate: "Дата окончания",
    era: "эра",
    hour: "час",
    minute: "минута",
    month: "месяц",
    second: "секунда",
    selectedDateDescription: (e) =>
        `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
    selectedRangeDescription: (e) =>
        `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: \u{441} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,
    selectedTimeDescription: (e) =>
        `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{435} \u{432}\u{440}\u{435}\u{43C}\u{44F}: ${e.time}`,
    startDate: "Дата начала",
    timeZoneName: "часовой пояс",
    weekday: "день недели",
    year: "год",
};
