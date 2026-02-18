t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} a ${e.endDate}`,
    dateSelected: (e) => `${e.date} seleccionado`,
    finishRangeSelectionPrompt: "Haga clic para terminar de seleccionar rango de fechas",
    maximumDate: "\xdaltima fecha disponible",
    minimumDate: "Primera fecha disponible",
    next: "Siguiente",
    previous: "Anterior",
    selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
    selectedRangeDescription: (e) => `Intervalo seleccionado: ${e.dateRange}`,
    startRangeSelectionPrompt: "Haga clic para comenzar a seleccionar un rango de fechas",
    todayDate: (e) => `Hoy, ${e.date}`,
    todayDateSelected: (e) => `Hoy, ${e.date} seleccionado`,
};
