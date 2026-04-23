t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} \u{2014} ${e.endDate}`,
    dateSelected: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
    finishRangeSelectionPrompt: "Натисніть, щоб завершити вибір діапазону дат",
    maximumDate: "Остання доступна дата",
    minimumDate: "Перша доступна дата",
    next: "Наступний",
    previous: "Попередній",
    selectedDateDescription: (e) =>
        `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
    selectedRangeDescription: (e) =>
        `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
    startRangeSelectionPrompt: "Натисніть, щоб почати вибір діапазону дат",
    todayDate: (e) => `\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, ${e.date}`,
    todayDateSelected: (e) =>
        `\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
};
