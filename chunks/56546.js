t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} - ${e.endDate}`,
    dateSelected: (e) => `${e.date} se\xe7ildi`,
    finishRangeSelectionPrompt: "Tarih aralığı se\xe7imini tamamlamak i\xe7in tıklayın",
    maximumDate: "Son m\xfcsait tarih",
    minimumDate: "İlk m\xfcsait tarih",
    next: "Sonraki",
    previous: "\xd6nceki",
    selectedDateDescription: (e) => `Se\xe7ilen Tarih: ${e.date}`,
    selectedRangeDescription: (e) => `Se\xe7ilen Aral\u{131}k: ${e.dateRange}`,
    startRangeSelectionPrompt: "Tarih aralığı se\xe7imini başlatmak i\xe7in tıklayın",
    todayDate: (e) => `Bug\xfcn, ${e.date}`,
    todayDateSelected: (e) => `Bug\xfcn, ${e.date} se\xe7ildi`,
};
