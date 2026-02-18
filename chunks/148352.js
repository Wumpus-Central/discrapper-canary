t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `\u{421} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,
    dateSelected: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
    finishRangeSelectionPrompt: "Щелкните, чтобы завершить выбор диапазона дат",
    maximumDate: "Последняя доступная дата",
    minimumDate: "Первая доступная дата",
    next: "Далее",
    previous: "Назад",
    selectedDateDescription: (e) =>
        `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
    selectedRangeDescription: (e) =>
        `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
    startRangeSelectionPrompt: "Щелкните, чтобы начать выбор диапазона дат",
    todayDate: (e) => `\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, ${e.date}`,
    todayDateSelected: (e) =>
        `\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
};
