n.d(t, { Z: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} - ${e.endDate}`,
    dateSelected: (e) => `${e.date} se\xe7ildi`,
    finishRangeSelectionPrompt: `Tarih aral\u{131}\u{11F}\u{131} se\xe7imini tamamlamak i\xe7in t\u{131}klay\u{131}n`,
    maximumDate: `Son m\xfcsait tarih`,
    minimumDate: `\u{130}lk m\xfcsait tarih`,
    next: "Sonraki",
    previous: `\xd6nceki`,
    selectedDateDescription: (e) => `Se\xe7ilen Tarih: ${e.date}`,
    selectedRangeDescription: (e) => `Se\xe7ilen Aral\u{131}k: ${e.dateRange}`,
    startRangeSelectionPrompt: `Tarih aral\u{131}\u{11F}\u{131} se\xe7imini ba\u{15F}latmak i\xe7in t\u{131}klay\u{131}n`,
    todayDate: (e) => `Bug\xfcn, ${e.date}`,
    todayDateSelected: (e) => `Bug\xfcn, ${e.date} se\xe7ildi`,
};
