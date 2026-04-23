t.d(a, { A: () => r });
var r = {};
r = {
    previous: "Previous",
    next: "Next",
    selectedDateDescription: (e) => `Selected Date: ${e.date}`,
    selectedRangeDescription: (e) => `Selected Range: ${e.dateRange}`,
    todayDate: (e) => `Today, ${e.date}`,
    todayDateSelected: (e) => `Today, ${e.date} selected`,
    dateSelected: (e) => `${e.date} selected`,
    startRangeSelectionPrompt: "Click to start selecting date range",
    finishRangeSelectionPrompt: "Click to finish selecting date range",
    minimumDate: "First available date",
    maximumDate: "Last available date",
    dateRange: (e) => `${e.startDate} to ${e.endDate}`,
};
