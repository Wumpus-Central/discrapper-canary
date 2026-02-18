t.d(a, { A: () => r });
var r = {};
r = {
    calendar: "Календар",
    day: "ден",
    dayPeriod: "пр.об./сл.об.",
    endDate: "Крайна дата",
    era: "ера",
    hour: "час",
    minute: "минута",
    month: "месец",
    second: "секунда",
    selectedDateDescription: (e) =>
        `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
    selectedRangeDescription: (e) =>
        `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{434}\u{43E} ${e.endDate}`,
    selectedTimeDescription: (e) =>
        `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{432}\u{440}\u{435}\u{43C}\u{435}: ${e.time}`,
    startDate: "Начална дата",
    timeZoneName: "часова зона",
    weekday: "ден от седмицата",
    year: "година",
};
