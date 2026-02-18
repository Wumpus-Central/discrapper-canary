t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `Od ${e.startDate} do ${e.endDate}`,
    dateSelected: (e) => `Vybrat\xfd d\xe1tum ${e.date}`,
    finishRangeSelectionPrompt: "Kliknut\xedm dokonč\xedte v\xfdber rozsahu d\xe1tumov",
    maximumDate: "Posledn\xfd dostupn\xfd d\xe1tum",
    minimumDate: "Prv\xfd dostupn\xfd d\xe1tum",
    next: "Nasleduj\xface",
    previous: "Predch\xe1dzaj\xface",
    selectedDateDescription: (e) => `Vybrat\xfd d\xe1tum: ${e.date}`,
    selectedRangeDescription: (e) => `Vybrat\xfd rozsah: ${e.dateRange}`,
    startRangeSelectionPrompt: "Kliknut\xedm spust\xedte v\xfdber rozsahu d\xe1tumov",
    todayDate: (e) => `Dnes ${e.date}`,
    todayDateSelected: (e) => `Vybrat\xfd dne\u{161}n\xfd d\xe1tum ${e.date}`,
};
