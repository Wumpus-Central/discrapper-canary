n.d(t, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `Od ${e.startDate} do ${e.endDate}`,
    dateSelected: (e) => `Vybrat\xfd d\xe1tum ${e.date}`,
    finishRangeSelectionPrompt: "Kliknutím dokončíte výber rozsahu dátumov",
    maximumDate: "Posledný dostupný dátum",
    minimumDate: "Prvý dostupný dátum",
    next: "Nasledujúce",
    previous: "Predchádzajúce",
    selectedDateDescription: (e) => `Vybrat\xfd d\xe1tum: ${e.date}`,
    selectedRangeDescription: (e) => `Vybrat\xfd rozsah: ${e.dateRange}`,
    startRangeSelectionPrompt: "Kliknutím spustíte výber rozsahu dátumov",
    todayDate: (e) => `Dnes ${e.date}`,
    todayDateSelected: (e) => `Vybrat\xfd dne\u{161}n\xfd d\xe1tum ${e.date}`,
};
