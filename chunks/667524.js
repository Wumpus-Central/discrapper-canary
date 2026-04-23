t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate}\u{2013}${e.endDate}`,
    dateSelected: (e) => `${e.date} kiv\xe1lasztva`,
    finishRangeSelectionPrompt: "Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek befejez\xe9s\xe9hez",
    maximumDate: "Utols\xf3 el\xe9rhető d\xe1tum",
    minimumDate: "Az első el\xe9rhető d\xe1tum",
    next: "K\xf6vetkező",
    previous: "Előző",
    selectedDateDescription: (e) => `Kijel\xf6lt d\xe1tum: ${e.date}`,
    selectedRangeDescription: (e) => `Kijel\xf6lt tartom\xe1ny: ${e.dateRange}`,
    startRangeSelectionPrompt: "Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek ind\xedt\xe1s\xe1hoz",
    todayDate: (e) => `Ma, ${e.date}`,
    todayDateSelected: (e) => `Ma, ${e.date} kijel\xf6lve`,
};
