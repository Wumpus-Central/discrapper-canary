t.d(a, {
    Vv: () => ei,
    Zr: () => em,
    Yi: () => ea,
    r8: () => es,
    Xq: () => ec,
    co: () => ed,
    W$: () => eu,
    _e: () => eo,
    pr: () => et,
});
var r = t(51340),
    n = t(980807),
    i = t(325558),
    o = t(301153),
    l = t(29474),
    s = t(892730),
    d = {};
d = {
    "ar-AE": {
        dateRange: (e) => `${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,
        dateSelected: (e) => `${e.date} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
        finishRangeSelectionPrompt:
            "\u0627\u0646\u0642\u0631 \u0644\u0625\u0646\u0647\u0627\u0621 \u0639\u0645\u0644\u064A\u0629 \u062A\u062D\u062F\u064A\u062F \u0646\u0637\u0627\u0642 \u0627\u0644\u062A\u0627\u0631\u064A\u062E",
        maximumDate: "\u0622\u062E\u0631 \u062A\u0627\u0631\u064A\u062E \u0645\u062A\u0627\u062D",
        minimumDate: "\u0623\u0648\u0644 \u062A\u0627\u0631\u064A\u062E \u0645\u062A\u0627\u062D",
        next: "\u0627\u0644\u062A\u0627\u0644\u064A",
        previous: "\u0627\u0644\u0633\u0627\u0628\u0642",
        selectedDateDescription: (e) => `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,
        selectedRangeDescription: (e) =>
            `\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.dateRange}`,
        startRangeSelectionPrompt:
            "\u0627\u0646\u0642\u0631 \u0644\u0628\u062F\u0621 \u0639\u0645\u0644\u064A\u0629 \u062A\u062D\u062F\u064A\u062F \u0646\u0637\u0627\u0642 \u0627\u0644\u062A\u0627\u0631\u064A\u062E",
        todayDate: (e) => `\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date}`,
        todayDateSelected: (e) => `\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date} \u{645}\u{62D}\u{62F}\u{62F}`,
    },
    "bg-BG": {
        dateRange: (e) => `${e.startDate} \u{434}\u{43E} ${e.endDate}`,
        dateSelected: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435} ${e.date}`,
        finishRangeSelectionPrompt:
            "\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435, \u0437\u0430 \u0434\u0430 \u0434\u043E\u0432\u044A\u0440\u0448\u0438\u0442\u0435 \u0438\u0437\u0431\u043E\u0440\u0430 \u043D\u0430 \u0432\u0440\u0435\u043C\u0435\u0432\u0438 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B",
        maximumDate:
            "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u0430 \u0434\u0430\u0442\u0430",
        minimumDate:
            "\u041F\u044A\u0440\u0432\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u0430 \u0434\u0430\u0442\u0430",
        next: "\u041D\u0430\u043F\u0440\u0435\u0434",
        previous: "\u041D\u0430\u0437\u0430\u0434",
        selectedDateDescription: (e) =>
            `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
        selectedRangeDescription: (e) =>
            `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
        startRangeSelectionPrompt:
            "\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435, \u0437\u0430 \u0434\u0430 \u043F\u0440\u0438\u0441\u0442\u044A\u043F\u0438\u0442\u0435 \u043A\u044A\u043C \u0438\u0437\u0431\u043E\u0440\u0430 \u043D\u0430 \u0432\u0440\u0435\u043C\u0435\u0432\u0438 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B",
        todayDate: (e) => `\u{414}\u{43D}\u{435}\u{441}, ${e.date}`,
        todayDateSelected: (e) =>
            `\u{414}\u{43D}\u{435}\u{441}, ${e.date} \u{441}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`,
    },
    "cs-CZ": {
        dateRange: (e) => `${e.startDate} a\u{17E} ${e.endDate}`,
        dateSelected: (e) => `Vybr\xe1no ${e.date}`,
        finishRangeSelectionPrompt: "Kliknut\xedm dokon\u010D\xedte v\xfdb\u011Br rozsahu dat",
        maximumDate: "Posledn\xed dostupn\xe9 datum",
        minimumDate: "Prvn\xed dostupn\xe9 datum",
        next: "Dal\u0161\xed",
        previous: "P\u0159edchoz\xed",
        selectedDateDescription: (e) => `Vybran\xe9 datum: ${e.date}`,
        selectedRangeDescription: (e) => `Vybran\xe9 obdob\xed: ${e.dateRange}`,
        startRangeSelectionPrompt: "Kliknut\xedm zah\xe1j\xedte v\xfdb\u011Br rozsahu dat",
        todayDate: (e) => `Dnes, ${e.date}`,
        todayDateSelected: (e) => `Dnes, vybr\xe1no ${e.date}`,
    },
    "da-DK": {
        dateRange: (e) => `${e.startDate} til ${e.endDate}`,
        dateSelected: (e) => `${e.date} valgt`,
        finishRangeSelectionPrompt: "Klik for at fuldf\xf8re valg af datoomr\xe5de",
        maximumDate: "Sidste ledige dato",
        minimumDate: "F\xf8rste ledige dato",
        next: "N\xe6ste",
        previous: "Forrige",
        selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
        selectedRangeDescription: (e) => `Valgt interval: ${e.dateRange}`,
        startRangeSelectionPrompt: "Klik for at starte valg af datoomr\xe5de",
        todayDate: (e) => `I dag, ${e.date}`,
        todayDateSelected: (e) => `I dag, ${e.date} valgt`,
    },
    "de-DE": {
        dateRange: (e) => `${e.startDate} bis ${e.endDate}`,
        dateSelected: (e) => `${e.date} ausgew\xe4hlt`,
        finishRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beenden",
        maximumDate: "Letztes verf\xfcgbares Datum",
        minimumDate: "Erstes verf\xfcgbares Datum",
        next: "Weiter",
        previous: "Zur\xfcck",
        selectedDateDescription: (e) => `Ausgew\xe4hltes Datum: ${e.date}`,
        selectedRangeDescription: (e) => `Ausgew\xe4hlter Bereich: ${e.dateRange}`,
        startRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beginnen",
        todayDate: (e) => `Heute, ${e.date}`,
        todayDateSelected: (e) => `Heute, ${e.date} ausgew\xe4hlt`,
    },
    "el-GR": {
        dateRange: (e) => `${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,
        dateSelected: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${e.date}`,
        finishRangeSelectionPrompt:
            "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03B5\u03CD\u03C1\u03BF\u03C5\u03C2 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03B9\u03CE\u03BD",
        maximumDate:
            "\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B1 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B7 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1",
        minimumDate:
            "\u03A0\u03C1\u03CE\u03C4\u03B7 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B7 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1",
        next: "\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF",
        previous: "\u03A0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF",
        selectedDateDescription: (e) =>
            `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,
        selectedRangeDescription: (e) =>
            `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.dateRange}`,
        startRangeSelectionPrompt:
            "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03B5\u03CD\u03C1\u03BF\u03C5\u03C2 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03B9\u03CE\u03BD",
        todayDate: (e) => `\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, ${e.date}`,
        todayDateSelected: (e) =>
            `\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3C4}\u{3B7}\u{3BA}\u{3B5} ${e.date}`,
    },
    "en-US": {
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
    },
    "es-ES": {
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
    },
    "et-EE": {
        dateRange: (e) => `${e.startDate} kuni ${e.endDate}`,
        dateSelected: (e) => `${e.date} valitud`,
        finishRangeSelectionPrompt: "Kl\xf5psake kuup\xe4evavahemiku valimise l\xf5petamiseks",
        maximumDate: "Viimane saadaolev kuup\xe4ev",
        minimumDate: "Esimene saadaolev kuup\xe4ev",
        next: "J\xe4rgmine",
        previous: "Eelmine",
        selectedDateDescription: (e) => `Valitud kuup\xe4ev: ${e.date}`,
        selectedRangeDescription: (e) => `Valitud vahemik: ${e.dateRange}`,
        startRangeSelectionPrompt: "Kl\xf5psake kuup\xe4evavahemiku valimiseks",
        todayDate: (e) => `T\xe4na, ${e.date}`,
        todayDateSelected: (e) => `T\xe4na, ${e.date} valitud`,
    },
    "fi-FI": {
        dateRange: (e) => `${e.startDate} \u{2013} ${e.endDate}`,
        dateSelected: (e) => `${e.date} valittu`,
        finishRangeSelectionPrompt: "Lopeta p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.",
        maximumDate: "Viimeinen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4",
        minimumDate: "Ensimm\xe4inen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4",
        next: "Seuraava",
        previous: "Edellinen",
        selectedDateDescription: (e) => `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,
        selectedRangeDescription: (e) => `Valittu aikav\xe4li: ${e.dateRange}`,
        startRangeSelectionPrompt: "Aloita p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.",
        todayDate: (e) => `T\xe4n\xe4\xe4n, ${e.date}`,
        todayDateSelected: (e) => `T\xe4n\xe4\xe4n, ${e.date} valittu`,
    },
    "fr-FR": {
        dateRange: (e) => `${e.startDate} \xe0 ${e.endDate}`,
        dateSelected: (e) => `${e.date} s\xe9lectionn\xe9`,
        finishRangeSelectionPrompt: "Cliquer pour finir de s\xe9lectionner la plage de dates",
        maximumDate: "Derni\xe8re date disponible",
        minimumDate: "Premi\xe8re date disponible",
        next: "Suivant",
        previous: "Pr\xe9c\xe9dent",
        selectedDateDescription: (e) => `Date s\xe9lectionn\xe9e\xa0: ${e.date}`,
        selectedRangeDescription: (e) => `Plage s\xe9lectionn\xe9e\xa0: ${e.dateRange}`,
        startRangeSelectionPrompt: "Cliquer pour commencer \xe0 s\xe9lectionner la plage de dates",
        todayDate: (e) => `Aujourd'hui, ${e.date}`,
        todayDateSelected: (e) => `Aujourd\u{2019}hui, ${e.date} s\xe9lectionn\xe9`,
    },
    "he-IL": {
        dateRange: (e) => `${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,
        dateSelected: (e) => `${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
        finishRangeSelectionPrompt:
            "\u05D7\u05E5 \u05DB\u05D3\u05D9 \u05DC\u05E1\u05D9\u05D9\u05DD \u05D0\u05EA \u05D1\u05D7\u05D9\u05E8\u05EA \u05D8\u05D5\u05D5\u05D7 \u05D4\u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD",
        maximumDate: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E4\u05E0\u05D5\u05D9 \u05D0\u05D7\u05E8\u05D5\u05DF",
        minimumDate: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E4\u05E0\u05D5\u05D9 \u05E8\u05D0\u05E9\u05D5\u05DF",
        next: "\u05D4\u05D1\u05D0",
        previous: "\u05D4\u05E7\u05D5\u05D3\u05DD",
        selectedDateDescription: (e) => `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,
        selectedRangeDescription: (e) => `\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.dateRange}`,
        startRangeSelectionPrompt:
            "\u05DC\u05D7\u05E5 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1\u05D1\u05D7\u05D9\u05E8\u05EA \u05D8\u05D5\u05D5\u05D7 \u05D4\u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD",
        todayDate: (e) => `\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date}`,
        todayDateSelected: (e) => `\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
    },
    "hr-HR": {
        dateRange: (e) => `${e.startDate} do ${e.endDate}`,
        dateSelected: (e) => `${e.date} odabran`,
        finishRangeSelectionPrompt: "Kliknite da dovr\u0161ite raspon odabranih datuma",
        maximumDate: "Posljednji raspolo\u017Eivi datum",
        minimumDate: "Prvi raspolo\u017Eivi datum",
        next: "Sljede\u0107i",
        previous: "Prethodni",
        selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
        selectedRangeDescription: (e) => `Odabrani raspon: ${e.dateRange}`,
        startRangeSelectionPrompt: "Kliknite da zapo\u010Dnete raspon odabranih datuma",
        todayDate: (e) => `Danas, ${e.date}`,
        todayDateSelected: (e) => `Danas, odabran ${e.date}`,
    },
    "hu-HU": {
        dateRange: (e) => `${e.startDate}\u{2013}${e.endDate}`,
        dateSelected: (e) => `${e.date} kiv\xe1lasztva`,
        finishRangeSelectionPrompt: "Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek befejez\xe9s\xe9hez",
        maximumDate: "Utols\xf3 el\xe9rhet\u0151 d\xe1tum",
        minimumDate: "Az els\u0151 el\xe9rhet\u0151 d\xe1tum",
        next: "K\xf6vetkez\u0151",
        previous: "El\u0151z\u0151",
        selectedDateDescription: (e) => `Kijel\xf6lt d\xe1tum: ${e.date}`,
        selectedRangeDescription: (e) => `Kijel\xf6lt tartom\xe1ny: ${e.dateRange}`,
        startRangeSelectionPrompt: "Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek ind\xedt\xe1s\xe1hoz",
        todayDate: (e) => `Ma, ${e.date}`,
        todayDateSelected: (e) => `Ma, ${e.date} kijel\xf6lve`,
    },
    "it-IT": {
        dateRange: (e) => `Da ${e.startDate} a ${e.endDate}`,
        dateSelected: (e) => `${e.date} selezionata`,
        finishRangeSelectionPrompt: "Fai clic per completare la selezione dell\u2019intervallo di date",
        maximumDate: "Ultima data disponibile",
        minimumDate: "Prima data disponibile",
        next: "Successivo",
        previous: "Precedente",
        selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
        selectedRangeDescription: (e) => `Intervallo selezionato: ${e.dateRange}`,
        startRangeSelectionPrompt: "Fai clic per selezionare l\u2019intervallo di date",
        todayDate: (e) => `Oggi, ${e.date}`,
        todayDateSelected: (e) => `Oggi, ${e.date} selezionata`,
    },
    "ja-JP": {
        dateRange: (e) => `${e.startDate} \u{304B}\u{3089} ${e.endDate}`,
        dateSelected: (e) => `${e.date} \u{3092}\u{9078}\u{629E}`,
        finishRangeSelectionPrompt:
            "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u65E5\u4ED8\u7BC4\u56F2\u306E\u9078\u629E\u3092\u7D42\u4E86",
        maximumDate: "\u6700\u7D42\u5229\u7528\u53EF\u80FD\u65E5",
        minimumDate: "\u6700\u521D\u306E\u5229\u7528\u53EF\u80FD\u65E5",
        next: "\u6B21\u3078",
        previous: "\u524D\u3078",
        selectedDateDescription: (e) => `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,
        selectedRangeDescription: (e) => `\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.dateRange}`,
        startRangeSelectionPrompt:
            "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u65E5\u4ED8\u7BC4\u56F2\u306E\u9078\u629E\u3092\u958B\u59CB",
        todayDate: (e) => `\u{672C}\u{65E5}\u{3001}${e.date}`,
        todayDateSelected: (e) => `\u{672C}\u{65E5}\u{3001}${e.date} \u{3092}\u{9078}\u{629E}`,
    },
    "ko-KR": {
        dateRange: (e) => `${e.startDate} ~ ${e.endDate}`,
        dateSelected: (e) => `${e.date} \u{C120}\u{D0DD}\u{B428}`,
        finishRangeSelectionPrompt:
            "\uB0A0\uC9DC \uBC94\uC704 \uC120\uD0DD\uC744 \uC644\uB8CC\uD558\uB824\uBA74 \uD074\uB9AD\uD558\uC2ED\uC2DC\uC624.",
        maximumDate: "\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC77C\uC790",
        minimumDate: "\uCC98\uC74C\uC73C\uB85C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC77C\uC790",
        next: "\uB2E4\uC74C",
        previous: "\uC774\uC804",
        selectedDateDescription: (e) => `\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,
        selectedRangeDescription: (e) => `\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.dateRange}`,
        startRangeSelectionPrompt:
            "\uB0A0\uC9DC \uBC94\uC704 \uC120\uD0DD\uC744 \uC2DC\uC791\uD558\uB824\uBA74 \uD074\uB9AD\uD558\uC2ED\uC2DC\uC624.",
        todayDate: (e) => `\u{C624}\u{B298}, ${e.date}`,
        todayDateSelected: (e) => `\u{C624}\u{B298}, ${e.date} \u{C120}\u{D0DD}\u{B428}`,
    },
    "lt-LT": {
        dateRange: (e) => `Nuo ${e.startDate} iki ${e.endDate}`,
        dateSelected: (e) => `Pasirinkta ${e.date}`,
        finishRangeSelectionPrompt: "Spustel\u0117kite, kad baigtum\u0117te pasirinkti dat\u0173 interval\u0105",
        maximumDate: "Paskutin\u0117 galima data",
        minimumDate: "Pirmoji galima data",
        next: "Paskesnis",
        previous: "Ankstesnis",
        selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
        selectedRangeDescription: (e) => `Pasirinktas intervalas: ${e.dateRange}`,
        startRangeSelectionPrompt: "Spustel\u0117kite, kad prad\u0117tum\u0117te pasirinkti dat\u0173 interval\u0105",
        todayDate: (e) => `\u{160}iandien, ${e.date}`,
        todayDateSelected: (e) => `\u{160}iandien, pasirinkta ${e.date}`,
    },
    "lv-LV": {
        dateRange: (e) => `No ${e.startDate} l\u{12B}dz ${e.endDate}`,
        dateSelected: (e) => `Atlas\u{12B}ts: ${e.date}`,
        finishRangeSelectionPrompt: "Noklik\u0161\u0137iniet, lai pabeigtu datumu diapazona atlasi",
        maximumDate: "P\u0113d\u0113jais pieejamais datums",
        minimumDate: "Pirmais pieejamais datums",
        next: "T\u0101l\u0101k",
        previous: "Atpaka\u013C",
        selectedDateDescription: (e) => `Atlas\u{12B}tais datums: ${e.date}`,
        selectedRangeDescription: (e) => `Atlas\u{12B}tais diapazons: ${e.dateRange}`,
        startRangeSelectionPrompt: "Noklik\u0161\u0137iniet, lai s\u0101ktu datumu diapazona atlasi",
        todayDate: (e) => `\u{160}odien, ${e.date}`,
        todayDateSelected: (e) => `Atlas\u{12B}ta \u{161}odiena, ${e.date}`,
    },
    "nb-NO": {
        dateRange: (e) => `${e.startDate} til ${e.endDate}`,
        dateSelected: (e) => `${e.date} valgt`,
        finishRangeSelectionPrompt: "Klikk for \xe5 fullf\xf8re valg av datoomr\xe5de",
        maximumDate: "Siste tilgjengelige dato",
        minimumDate: "F\xf8rste tilgjengelige dato",
        next: "Neste",
        previous: "Forrige",
        selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
        selectedRangeDescription: (e) => `Valgt omr\xe5de: ${e.dateRange}`,
        startRangeSelectionPrompt: "Klikk for \xe5 starte valg av datoomr\xe5de",
        todayDate: (e) => `I dag, ${e.date}`,
        todayDateSelected: (e) => `I dag, ${e.date} valgt`,
    },
    "nl-NL": {
        dateRange: (e) => `${e.startDate} tot ${e.endDate}`,
        dateSelected: (e) => `${e.date} geselecteerd`,
        finishRangeSelectionPrompt: "Klik om de selectie van het datumbereik te voltooien",
        maximumDate: "Laatste beschikbare datum",
        minimumDate: "Eerste beschikbare datum",
        next: "Volgende",
        previous: "Vorige",
        selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
        selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.dateRange}`,
        startRangeSelectionPrompt: "Klik om het datumbereik te selecteren",
        todayDate: (e) => `Vandaag, ${e.date}`,
        todayDateSelected: (e) => `Vandaag, ${e.date} geselecteerd`,
    },
    "pl-PL": {
        dateRange: (e) => `${e.startDate} do ${e.endDate}`,
        dateSelected: (e) => `Wybrano ${e.date}`,
        finishRangeSelectionPrompt: "Kliknij, aby zako\u0144czy\u0107 wyb\xf3r zakresu dat",
        maximumDate: "Ostatnia dost\u0119pna data",
        minimumDate: "Pierwsza dost\u0119pna data",
        next: "Dalej",
        previous: "Wstecz",
        selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
        selectedRangeDescription: (e) => `Wybrany zakres: ${e.dateRange}`,
        startRangeSelectionPrompt: "Kliknij, aby rozpocz\u0105\u0107 wyb\xf3r zakresu dat",
        todayDate: (e) => `Dzisiaj, ${e.date}`,
        todayDateSelected: (e) => `Dzisiaj wybrano ${e.date}`,
    },
    "pt-BR": {
        dateRange: (e) => `${e.startDate} a ${e.endDate}`,
        dateSelected: (e) => `${e.date} selecionado`,
        finishRangeSelectionPrompt: "Clique para concluir a sele\xe7\xe3o do intervalo de datas",
        maximumDate: "\xdaltima data dispon\xedvel",
        minimumDate: "Primeira data dispon\xedvel",
        next: "Pr\xf3ximo",
        previous: "Anterior",
        selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
        selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
        startRangeSelectionPrompt: "Clique para iniciar a sele\xe7\xe3o do intervalo de datas",
        todayDate: (e) => `Hoje, ${e.date}`,
        todayDateSelected: (e) => `Hoje, ${e.date} selecionado`,
    },
    "pt-PT": {
        dateRange: (e) => `${e.startDate} a ${e.endDate}`,
        dateSelected: (e) => `${e.date} selecionado`,
        finishRangeSelectionPrompt: "Clique para terminar de selecionar o intervalo de datas",
        maximumDate: "\xdaltima data dispon\xedvel",
        minimumDate: "Primeira data dispon\xedvel",
        next: "Pr\xf3ximo",
        previous: "Anterior",
        selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
        selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
        startRangeSelectionPrompt: "Clique para come\xe7ar a selecionar o intervalo de datas",
        todayDate: (e) => `Hoje, ${e.date}`,
        todayDateSelected: (e) => `Hoje, ${e.date} selecionado`,
    },
    "ro-RO": {
        dateRange: (e) => `De la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,
        dateSelected: (e) => `${e.date} selectat\u{103}`,
        finishRangeSelectionPrompt: "Ap\u0103sa\u0163i pentru a finaliza selec\u0163ia razei pentru dat\u0103",
        maximumDate: "Ultima dat\u0103 disponibil\u0103",
        minimumDate: "Prima dat\u0103 disponibil\u0103",
        next: "Urm\u0103torul",
        previous: "\xcenainte",
        selectedDateDescription: (e) => `Dat\u{103} selectat\u{103}: ${e.date}`,
        selectedRangeDescription: (e) => `Interval selectat: ${e.dateRange}`,
        startRangeSelectionPrompt: "Ap\u0103sa\u0163i pentru a \xeencepe selec\u0163ia razei pentru dat\u0103",
        todayDate: (e) => `Ast\u{103}zi, ${e.date}`,
        todayDateSelected: (e) => `Azi, ${e.date} selectat\u{103}`,
    },
    "ru-RU": {
        dateRange: (e) => `\u{421} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,
        dateSelected: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
        finishRangeSelectionPrompt:
            "\u0429\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u0434\u0430\u0442",
        maximumDate:
            "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430\u044F \u0434\u0430\u0442\u0430",
        minimumDate:
            "\u041F\u0435\u0440\u0432\u0430\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430\u044F \u0434\u0430\u0442\u0430",
        next: "\u0414\u0430\u043B\u0435\u0435",
        previous: "\u041D\u0430\u0437\u0430\u0434",
        selectedDateDescription: (e) =>
            `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
        selectedRangeDescription: (e) =>
            `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
        startRangeSelectionPrompt:
            "\u0429\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0432\u044B\u0431\u043E\u0440 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u0434\u0430\u0442",
        todayDate: (e) => `\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, ${e.date}`,
        todayDateSelected: (e) =>
            `\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
    },
    "sk-SK": {
        dateRange: (e) => `Od ${e.startDate} do ${e.endDate}`,
        dateSelected: (e) => `Vybrat\xfd d\xe1tum ${e.date}`,
        finishRangeSelectionPrompt: "Kliknut\xedm dokon\u010D\xedte v\xfdber rozsahu d\xe1tumov",
        maximumDate: "Posledn\xfd dostupn\xfd d\xe1tum",
        minimumDate: "Prv\xfd dostupn\xfd d\xe1tum",
        next: "Nasleduj\xface",
        previous: "Predch\xe1dzaj\xface",
        selectedDateDescription: (e) => `Vybrat\xfd d\xe1tum: ${e.date}`,
        selectedRangeDescription: (e) => `Vybrat\xfd rozsah: ${e.dateRange}`,
        startRangeSelectionPrompt: "Kliknut\xedm spust\xedte v\xfdber rozsahu d\xe1tumov",
        todayDate: (e) => `Dnes ${e.date}`,
        todayDateSelected: (e) => `Vybrat\xfd dne\u{161}n\xfd d\xe1tum ${e.date}`,
    },
    "sl-SI": {
        dateRange: (e) => `${e.startDate} do ${e.endDate}`,
        dateSelected: (e) => `${e.date} izbrano`,
        finishRangeSelectionPrompt: "Kliknite za dokon\u010Danje izbire datumskega obsega",
        maximumDate: "Zadnji razpolo\u017Eljivi datum",
        minimumDate: "Prvi razpolo\u017Eljivi datum",
        next: "Naprej",
        previous: "Nazaj",
        selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
        selectedRangeDescription: (e) => `Izbrano obmo\u{10D}je: ${e.dateRange}`,
        startRangeSelectionPrompt: "Kliknite za za\u010Detek izbire datumskega obsega",
        todayDate: (e) => `Danes, ${e.date}`,
        todayDateSelected: (e) => `Danes, ${e.date} izbrano`,
    },
    "sr-SP": {
        dateRange: (e) => `${e.startDate} do ${e.endDate}`,
        dateSelected: (e) => `${e.date} izabran`,
        finishRangeSelectionPrompt: "Kliknite da dovr\u0161ite opseg izabranih datuma",
        maximumDate: "Zadnji raspolo\u017Eivi datum",
        minimumDate: "Prvi raspolo\u017Eivi datum",
        next: "Slede\u0107i",
        previous: "Prethodni",
        selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
        selectedRangeDescription: (e) => `Izabrani period: ${e.dateRange}`,
        startRangeSelectionPrompt: "Kliknite da zapo\u010Dnete opseg izabranih datuma",
        todayDate: (e) => `Danas, ${e.date}`,
        todayDateSelected: (e) => `Danas, izabran ${e.date}`,
    },
    "sv-SE": {
        dateRange: (e) => `${e.startDate} till ${e.endDate}`,
        dateSelected: (e) => `${e.date} har valts`,
        finishRangeSelectionPrompt: "Klicka f\xf6r att avsluta val av datumintervall",
        maximumDate: "Sista tillg\xe4ngliga datum",
        minimumDate: "F\xf6rsta tillg\xe4ngliga datum",
        next: "N\xe4sta",
        previous: "F\xf6reg\xe5ende",
        selectedDateDescription: (e) => `Valt datum: ${e.date}`,
        selectedRangeDescription: (e) => `Valt intervall: ${e.dateRange}`,
        startRangeSelectionPrompt: "Klicka f\xf6r att v\xe4lja datumintervall",
        todayDate: (e) => `Idag, ${e.date}`,
        todayDateSelected: (e) => `Idag, ${e.date} har valts`,
    },
    "tr-TR": {
        dateRange: (e) => `${e.startDate} - ${e.endDate}`,
        dateSelected: (e) => `${e.date} se\xe7ildi`,
        finishRangeSelectionPrompt: "Tarih aral\u0131\u011F\u0131 se\xe7imini tamamlamak i\xe7in t\u0131klay\u0131n",
        maximumDate: "Son m\xfcsait tarih",
        minimumDate: "\u0130lk m\xfcsait tarih",
        next: "Sonraki",
        previous: "\xd6nceki",
        selectedDateDescription: (e) => `Se\xe7ilen Tarih: ${e.date}`,
        selectedRangeDescription: (e) => `Se\xe7ilen Aral\u{131}k: ${e.dateRange}`,
        startRangeSelectionPrompt: "Tarih aral\u0131\u011F\u0131 se\xe7imini ba\u015Flatmak i\xe7in t\u0131klay\u0131n",
        todayDate: (e) => `Bug\xfcn, ${e.date}`,
        todayDateSelected: (e) => `Bug\xfcn, ${e.date} se\xe7ildi`,
    },
    "uk-UA": {
        dateRange: (e) => `${e.startDate} \u{2014} ${e.endDate}`,
        dateSelected: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
        finishRangeSelectionPrompt:
            "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u0432\u0438\u0431\u0456\u0440 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443 \u0434\u0430\u0442",
        maximumDate:
            "\u041E\u0441\u0442\u0430\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u0430\u0442\u0430",
        minimumDate:
            "\u041F\u0435\u0440\u0448\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u0430\u0442\u0430",
        next: "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439",
        previous: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439",
        selectedDateDescription: (e) =>
            `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
        selectedRangeDescription: (e) =>
            `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
        startRangeSelectionPrompt:
            "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438 \u0432\u0438\u0431\u0456\u0440 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443 \u0434\u0430\u0442",
        todayDate: (e) => `\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, ${e.date}`,
        todayDateSelected: (e) =>
            `\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
    },
    "zh-CN": {
        dateRange: (e) => `${e.startDate} \u{81F3} ${e.endDate}`,
        dateSelected: (e) => `\u{5DF2}\u{9009}\u{62E9} ${e.date}`,
        finishRangeSelectionPrompt: "\u5355\u51FB\u4EE5\u5B8C\u6210\u9009\u62E9\u65E5\u671F\u8303\u56F4",
        maximumDate: "\u6700\u540E\u4E00\u4E2A\u53EF\u7528\u65E5\u671F",
        minimumDate: "\u7B2C\u4E00\u4E2A\u53EF\u7528\u65E5\u671F",
        next: "\u4E0B\u4E00\u9875",
        previous: "\u4E0A\u4E00\u9875",
        selectedDateDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
        selectedRangeDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.dateRange}`,
        startRangeSelectionPrompt: "\u5355\u51FB\u4EE5\u5F00\u59CB\u9009\u62E9\u65E5\u671F\u8303\u56F4",
        todayDate: (e) => `\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`,
        todayDateSelected: (e) => `\u{5DF2}\u{9009}\u{62E9}\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`,
    },
    "zh-TW": {
        dateRange: (e) => `${e.startDate} \u{81F3} ${e.endDate}`,
        dateSelected: (e) => `\u{5DF2}\u{9078}\u{53D6} ${e.date}`,
        finishRangeSelectionPrompt: "\u6309\u4E00\u4E0B\u4EE5\u5B8C\u6210\u9078\u53D6\u65E5\u671F\u7BC4\u570D",
        maximumDate: "\u6700\u5F8C\u4E00\u500B\u53EF\u7528\u65E5\u671F",
        minimumDate: "\u7B2C\u4E00\u500B\u53EF\u7528\u65E5\u671F",
        next: "\u4E0B\u4E00\u9801",
        previous: "\u4E0A\u4E00\u9801",
        selectedDateDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
        selectedRangeDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.dateRange}`,
        startRangeSelectionPrompt: "\u6309\u4E00\u4E0B\u4EE5\u958B\u59CB\u9078\u53D6\u65E5\u671F\u7BC4\u570D",
        todayDate: (e) => `\u{4ECA}\u{5929}\u{FF0C}${e.date}`,
        todayDateSelected: (e) => `\u{5DF2}\u{9078}\u{53D6}\u{4ECA}\u{5929}\u{FF0C}${e.date}`,
    },
};
var u = t(702658),
    c = t(677654),
    m = t(95638),
    h = t(70254),
    y = t(582128);
function g(e) {
    return e && e.__esModule ? e.default : e;
}
let p = new WeakMap();
function f(e) {
    return e?.calendar.identifier === "gregory" && "BC" === e.era ? "short" : void 0;
}
function D(e, a, t, r) {
    let n = (0, m.o)(g(d), "@react-aria/calendar"),
        i = f(e) || f(a),
        o = (0, u.i)({ month: "long", year: "numeric", era: i, calendar: e.calendar.identifier, timeZone: t }),
        l = (0, u.i)({
            month: "long",
            year: "numeric",
            day: "numeric",
            era: i,
            calendar: e.calendar.identifier,
            timeZone: t,
        });
    return (0, y.useMemo)(() => {
        if ((0, h.ro)(e, (0, h.wH)(e))) {
            let i = e,
                l = a;
            if (
                (e.calendar.getFormattableMonth && (i = e.calendar.getFormattableMonth(e)),
                a.calendar.getFormattableMonth && (l = a.calendar.getFormattableMonth(a)),
                (0, h.ro)(a, (0, h.p9)(e)))
            )
                return o.format(i.toDate(t));
            if ((0, h.ro)(a, (0, h.p9)(a))) return r ? v(o, n, i, l, t) : o.formatRange(i.toDate(t), l.toDate(t));
        }
        return r ? v(l, n, e, a, t) : l.formatRange(e.toDate(t), a.toDate(t));
    }, [e, a, o, l, n, t, r]);
}
function v(e, a, t, r, n) {
    let i = e.formatRangeToParts(t.toDate(n), r.toDate(n)),
        o = -1;
    for (let e = 0; e < i.length; e++) {
        let a = i[e];
        if ("shared" === a.source && "literal" === a.type) o = e;
        else if ("endRange" === a.source) break;
    }
    let l = "",
        s = "";
    for (let e = 0; e < i.length; e++) e < o ? (l += i[e].value) : e > o && (s += i[e].value);
    return a.format("dateRange", { startDate: l, endDate: s });
}
var b = t(652664),
    $ = t(853830),
    R = t(802649),
    P = t(111035);
function w(e, a) {
    var t;
    let r = (0, m.o)((t = d) && t.__esModule ? t.default : t, "@react-aria/calendar"),
        n = (0, s.$)(e),
        i = D(a.visibleRange.start, a.visibleRange.end, a.timeZone, !1),
        o = D(a.visibleRange.start, a.visibleRange.end, a.timeZone, !0);
    (0, P.w)(() => {
        a.isFocused || (0, l.iP)(o);
    }, [o]);
    let w = (function (e) {
        let a,
            t,
            r = (0, m.o)(g(d), "@react-aria/calendar");
        "highlightedRange" in e
            ? ({ start: a, end: t } = e.highlightedRange || {})
            : ((a = Array.isArray(e.value) ? e.value[0] : (e.value ?? void 0)),
              (t = Array.isArray(e.value) ? e.value.at(-1) : (e.value ?? void 0)));
        let n = (0, u.i)({
                weekday: "long",
                month: "long",
                year: "numeric",
                day: "numeric",
                era: f(a) || f(t),
                timeZone: e.timeZone,
            }),
            { locale: i } = (0, c.Y)(),
            o = (0, y.useMemo)(() => new Intl.ListFormat(i), [i]),
            l = "anchorDate" in e ? e.anchorDate : null;
        return (0, y.useMemo)(() => {
            if (!l && a && t) {
                if ((0, h.ro)(a, t)) {
                    let t = n.format(a.toDate(e.timeZone));
                    return r.format("selectedDateDescription", { date: t });
                } else if ("highlightedRange" in e) {
                    let i = v(n, r, a, t, e.timeZone);
                    return r.format("selectedRangeDescription", { dateRange: i });
                } else if (Array.isArray(e.value)) {
                    let a = e.value.map((a) => n.format(a.toDate(e.timeZone))),
                        t = o.format(a);
                    return r.format("selectedDateDescription", { date: t });
                }
            }
            return "";
        }, [a, t, l, e, r, n, o]);
    })(a);
    (0, P.w)(() => {
        w && (0, l.iP)(w, "polite", 4e3);
    }, [w]);
    let x = (0, R.X1)([!!e.errorMessage, e.isInvalid, e.validationState]);
    p.set(a, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: e["aria-labelledby"],
        errorMessageId: x,
        selectedDateDescription: w,
    });
    let [k, S] = (0, y.useState)(!1),
        V = e.isDisabled || a.isNextVisibleRangeInvalid();
    V && k && (S(!1), a.setFocused(!0));
    let [C, M] = (0, y.useState)(!1),
        I = e.isDisabled || a.isPreviousVisibleRangeInvalid();
    I && C && (M(!1), a.setFocused(!0));
    let E = (0, $.b)({
        id: e.id,
        "aria-label": [e["aria-label"], o].filter(Boolean).join(", "),
        "aria-labelledby": e["aria-labelledby"],
    });
    return {
        calendarProps: (0, b.v)(n, E, {
            role: "application",
            "aria-details": e["aria-details"] || void 0,
            "aria-describedby": e["aria-describedby"] || void 0,
        }),
        nextButtonProps: {
            onPress: () => a.focusNextPage(),
            "aria-label": r.format("next"),
            isDisabled: V,
            onFocusChange: S,
        },
        prevButtonProps: {
            onPress: () => a.focusPreviousPage(),
            "aria-label": r.format("previous"),
            isDisabled: I,
            onFocusChange: M,
        },
        errorMessageProps: { id: x },
        title: i,
    };
}
var x = t(376541),
    k = t(862615),
    S = t(518206),
    V = t(478793),
    C = t(547993),
    M = t(681212),
    I = t(806335),
    E = t(23619),
    F = t(845062),
    T = t(512597),
    O = t(358835),
    A = t(594247);
function N(e, a, t) {
    return (null != a && 0 > e.compare(a)) || (null != t && e.compare(t) > 0);
}
function Z(e, a, t, r, n) {
    let i = {};
    for (let e in a) ((i[e] = Math.floor(a[e] / 2)), i[e] > 0 && a[e] % 2 == 0 && i[e]--);
    let o = U(e, a, t).subtract(i);
    return B(e, o, a, t, r, n);
}
function U(e, a, t, r, n) {
    let i = e;
    return (
        a.years
            ? (i = (0, h.D)(e))
            : a.months
              ? (i = (0, h.wH)(e))
              : (a.weeks || (a.days && a.days > 7)) && (i = (0, h.kq)(e, t)),
        B(e, i, a, t, r, n)
    );
}
function z(e, a, t, r, n) {
    let i = { ...a };
    i.days ? i.days-- : i.weeks ? i.weeks-- : i.months ? i.months-- : i.years && i.years--;
    let o = U(e, a, t).subtract(i);
    return B(e, o, a, t, r, n);
}
function B(e, a, t, r, n, i) {
    if (n && e.compare(n) >= 0) {
        let e = (0, h.ZI)(a, U((0, A.gw)(n), t, r));
        e && (a = e);
    }
    if (i && 0 >= e.compare(i)) {
        let e = (0, h.Py)(a, z((0, A.gw)(i), t, r));
        e && (a = e);
    }
    return a;
}
function j(e, a, t) {
    if (a) {
        let t = (0, h.ZI)(e, (0, A.gw)(a));
        t && (e = t);
    }
    if (t) {
        let a = (0, h.Py)(e, (0, A.gw)(t));
        a && (e = a);
    }
    return e;
}
function K(e, a, t) {
    if (!t) return e;
    for (; e.compare(a) >= 0 && t(e);) e = e.subtract({ days: 1 });
    return e.compare(a) >= 0 ? e : null;
}
var L = t(500243),
    J = t(825503),
    Y = t(576463);
function G(e) {
    let a = (0, y.useMemo)(() => new (0, J.p)(e.locale), [e.locale]),
        t = (0, y.useMemo)(() => a.resolvedOptions(), [a]),
        {
            locale: r,
            createCalendar: n,
            visibleDuration: i = { months: 1 },
            minValue: o,
            maxValue: l,
            selectionAlignment: s,
            isDateUnavailable: d,
            pageBehavior: u = "visible",
            selectionMode: c = "single",
            firstDayOfWeek: m,
            weeksInMonth: g,
        } = e,
        p = (0, y.useMemo)(() => n(t.calendar), [n, t.calendar]),
        [f, D] = (0, L.P)(e.value, e.defaultValue ?? null, e.onChange),
        v = (0, y.useMemo)(
            () => (Array.isArray(f) ? f.map((e) => (0, A.yP)((0, A.gw)(e), p)) : f ? (0, A.yP)((0, A.gw)(f), p) : null),
            [f, p],
        ),
        b = (0, y.useMemo)(() => {
            let e = Array.isArray(f) ? f[0] : f;
            return e && "timeZone" in e ? e.timeZone : t.timeZone;
        }, [f, t.timeZone]),
        $ = (0, y.useMemo)(
            () => (e.focusedValue ? j((0, A.yP)((0, A.gw)(e.focusedValue), p), o, l) : void 0),
            [e.focusedValue, p, o, l],
        ),
        R = (0, y.useMemo)(
            () =>
                e.defaultFocusedValue
                    ? j((0, A.yP)((0, A.gw)(e.defaultFocusedValue), p), o, l)
                    : v
                      ? j(Array.isArray(v) ? v[0] : v, o, l)
                      : j((0, A.yP)((0, h.Ec)(b), p), o, l),
            [e.defaultFocusedValue, v, b, p, o, l],
        ),
        [P, w] = (0, L.P)($, R, e.onFocusChange),
        x = () => {
            switch (s) {
                case "start":
                    return U(P, i, r, o, l);
                case "end":
                    return z(P, i, r, o, l);
                default:
                    return Z(P, i, r, o, l);
            }
        },
        [k, S] = (0, y.useState)(x),
        [V, C] = (0, y.useState)(e.autoFocus || !1),
        [M, I] = (0, y.useState)(i);
    i !== M &&
        (i.days !== M.days || i.weeks !== M.weeks || i.months !== M.months || i.years !== M.years) &&
        (I(i), S(x()));
    let E = (0, y.useMemo)(() => {
            let e = { ...i };
            return (e.days ? e.days-- : (e.days = -1), k.add(e));
        }, [k, i]),
        [F, T] = (0, y.useState)(p);
    if (!(0, h.Jg)(p, F)) {
        let e = (0, A.yP)(P, p);
        (S(Z(e, i, r, o, l)), w(e), T(p));
    }
    function O(e) {
        w((e = j(e, o, l)));
    }
    function G(e) {
        let a = K(j(e, o, l), k, d);
        if (!a) return null;
        let t = Array.isArray(f) ? f[0] : f,
            r = (0, A.yP)(a, t?.calendar || new (0, Y.FG)());
        return t && "hour" in t ? t.set(r) : r;
    }
    function q(a) {
        if (!e.isDisabled && !e.isReadOnly) {
            if (null === a) return void D("multiple" === c ? [] : null);
            if (Array.isArray(a)) D(a.map(G).filter(Boolean));
            else {
                let e = G(a);
                e && D(e);
            }
        }
    }
    N(P, o, l) ? w(j(P, o, l)) : 0 > P.compare(k) ? S(z(P, i, r, o, l)) : P.compare(E) > 0 && S(U(P, i, r, o, l));
    let H = (0, y.useMemo)(
            () => !!v && (Array.isArray(v) ? v.some((e) => d?.(e) || N(e, o, l)) : d?.(v) || N(v, o, l)),
            [v, d, o, l],
        ),
        _ = e.isInvalid || "invalid" === e.validationState || H,
        Q = (0, y.useMemo)(() => ("visible" === u ? i : W(i)), [u, i]);
    return {
        isDisabled: e.isDisabled ?? !1,
        isReadOnly: e.isReadOnly ?? !1,
        value: v,
        setValue: q,
        selectionMode: c,
        visibleDuration: i,
        visibleRange: { start: k, end: E },
        minValue: o,
        maxValue: l,
        focusedDate: P,
        timeZone: b,
        validationState: _ ? "invalid" : null,
        isValueInvalid: _,
        setFocusedDate(e) {
            O(e);
        },
        focusNextDay() {
            O(P.add({ days: 1 }));
        },
        focusPreviousDay() {
            O(P.subtract({ days: 1 }));
        },
        focusNextRow() {
            i.days ? this.focusNextPage() : (i.weeks || i.months || i.years) && O(P.add({ weeks: 1 }));
        },
        focusPreviousRow() {
            i.days ? this.focusPreviousPage() : (i.weeks || i.months || i.years) && O(P.subtract({ weeks: 1 }));
        },
        focusNextPage() {
            let e = k.add(Q);
            (w(j(P.add(Q), o, l)), S(U(B(P, e, Q, r, o, l), Q, r)));
        },
        focusPreviousPage() {
            let e = k.subtract(Q);
            (w(j(P.subtract(Q), o, l)), S(U(B(P, e, Q, r, o, l), Q, r)));
        },
        focusSectionStart() {
            i.days ? O(k) : i.weeks ? O((0, h.kq)(P, r)) : (i.months || i.years) && O((0, h.wH)(P));
        },
        focusSectionEnd() {
            i.days ? O(E) : i.weeks ? O((0, h.$I)(P, r)) : (i.months || i.years) && O((0, h.p9)(P));
        },
        focusNextSection(e) {
            e || i.days
                ? i.days
                    ? this.focusNextPage()
                    : i.weeks
                      ? O(P.add({ months: 1 }))
                      : (i.months || i.years) && O(P.add({ years: 1 }))
                : O(P.add(W(i)));
        },
        focusPreviousSection(e) {
            e || i.days
                ? i.days
                    ? this.focusPreviousPage()
                    : i.weeks
                      ? O(P.subtract({ months: 1 }))
                      : (i.months || i.years) && O(P.subtract({ years: 1 }))
                : O(P.subtract(W(i)));
        },
        selectFocusedDate() {
            (d && d(P)) || this.selectDate(P);
        },
        selectDate(a) {
            if (!e.isDisabled && !e.isReadOnly)
                if ("multiple" === c && null != a) {
                    let e = G(a);
                    if (!e) return;
                    let t = [];
                    Array.isArray(f) ? (t = f) : null != f && (t = [f]);
                    let r = t.findIndex((a) => (0, h.ro)(a, e));
                    D(r >= 0 ? t.slice(0, r).concat(t.slice(r + 1)) : [...t, e]);
                } else q(a);
        },
        isFocused: V,
        setFocused: C,
        isInvalid: (e) => N(e, o, l),
        isSelected(e) {
            return (
                !(!v || this.isCellDisabled(e) || this.isCellUnavailable(e)) &&
                (Array.isArray(v) ? v.some((a) => (0, h.ro)(a, e)) : (0, h.ro)(e, v))
            );
        },
        isCellFocused: (e) => V && P && (0, h.ro)(e, P),
        isCellDisabled(a) {
            return e.isDisabled || 0 > a.compare(k) || a.compare(E) > 0 || this.isInvalid(a);
        },
        isCellUnavailable: (a) => !!e.isDateUnavailable && e.isDateUnavailable(a),
        isPreviousVisibleRangeInvalid() {
            let e = k.subtract({ days: 1 });
            return (0, h.ro)(e, k) || this.isInvalid(e);
        },
        isNextVisibleRangeInvalid() {
            let e = E.add({ days: 1 });
            return (0, h.ro)(e, E) || this.isInvalid(e);
        },
        getDatesInWeek(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k,
                t = a.add({ weeks: e }),
                n = [],
                o = i.days && i.days < 7 ? i.days : 7;
            if (7 === o) {
                t = (0, h.kq)(t, r, m);
                let e = (0, h.SJ)(t, r, m);
                for (let a = 0; a < e; a++) n.push(null);
            }
            for (; n.length < o;) {
                n.push(t);
                let e = t.add({ days: 1 });
                if ((0, h.ro)(t, e)) break;
                t = e;
            }
            for (; n.length < o;) n.push(null);
            return n;
        },
        getWeeksInMonth() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
                a = g || (0, h.RZ)(e, r, m);
            return ((i.weeks || i.days) && ((a = i.weeks ?? 0), i.days && (a += Math.ceil(i.days / 7))), a);
        },
    };
}
function W(e) {
    let a = { ...e };
    for (let t in e) a[t] = 1;
    return a;
}
function q(e, a) {
    return e && a ? (0 > a.compare(e) && ([e, a] = [a, e]), { start: (0, A.gw)(e), end: (0, A.gw)(a) }) : null;
}
function H(e, a) {
    return ((e = (0, A.yP)(e, a?.calendar || new (0, Y.FG)())), a && "hour" in a) ? a.set(e) : e;
}
function _(e, a, t, r) {
    let n = e.add({ days: r }),
        i = e.subtract(t),
        o = e.add(t);
    for (; (r < 0 ? n.compare(i) >= 0 : 0 >= n.compare(o)) && !a(n);) n = n.add({ days: r });
    if (a(n)) return n.add({ days: -r });
}
var Q = t(736570),
    X = t(599291),
    ee = t(77692);
let ea = (0, y.createContext)(null),
    et = (0, y.createContext)(null),
    er = (0, y.createContext)(null),
    en = (0, y.createContext)(null),
    ei = (0, y.forwardRef)(function (e, a) {
        [e, a] = (0, n.JT)(e, a, ea);
        let { locale: t } = (0, c.Y)(),
            l = G({ ...e, locale: t, createCalendar: e.createCalendar || O.d }),
            { calendarProps: d, prevButtonProps: u, nextButtonProps: m, errorMessageProps: h, title: g } = w(e, l),
            p = (0, n.Sl)({
                ...e,
                values: { state: l, isDisabled: e.isDisabled || !1, isInvalid: l.isValueInvalid },
                defaultClassName: "react-aria-Calendar",
            }),
            f = (0, s.$)(e, { global: !0 });
        return y.createElement(
            n.tT.div,
            {
                ...(0, b.v)(f, p, d),
                ref: a,
                slot: e.slot || void 0,
                "data-disabled": e.isDisabled || void 0,
                "data-invalid": l.isValueInvalid || void 0,
            },
            y.createElement(
                n.Kq,
                {
                    values: [
                        [r.k, { slots: { previous: u, next: m } }],
                        [i.A, { "aria-hidden": !0, level: 2, children: g }],
                        [er, l],
                        [ea, e],
                        [o.h, { slots: { errorMessage: h } }],
                    ],
                },
                y.createElement(ee.s, null, y.createElement("h2", null, d["aria-label"])),
                p.children,
                y.createElement(
                    ee.s,
                    null,
                    y.createElement("button", {
                        "aria-label": m["aria-label"],
                        disabled: m.isDisabled,
                        onClick: () => l.focusNextPage(),
                        tabIndex: -1,
                    }),
                ),
            ),
        );
    }),
    eo = (0, y.forwardRef)(function (e, a) {
        [e, a] = (0, n.JT)(e, a, et);
        let { locale: t } = (0, c.Y)(),
            l = (function (e) {
                let {
                        value: a,
                        defaultValue: t,
                        onChange: r,
                        createCalendar: n,
                        locale: i,
                        visibleDuration: o = { months: 1 },
                        minValue: l,
                        maxValue: s,
                        ...d
                    } = e,
                    [u, c] = (0, L.P)(a, t || null, r),
                    [m, g] = (0, y.useState)(null),
                    p = "center";
                if (u && u.start && u.end) {
                    let e = Z((0, A.gw)(u.start), o, i, l, s)
                        .add(o)
                        .subtract({ days: 1 });
                    u.end.compare(e) > 0 && (p = "start");
                }
                let f = (0, y.useMemo)(() => {
                        let a = e.isDateUnavailable;
                        if (a) return (e) => a(e, m);
                    }, [e.isDateUnavailable, m]),
                    D = (0, y.useCallback)(
                        (a) =>
                            a && f && !e.allowsNonContiguousRanges
                                ? { start: _(a, f, o, -1), end: _(a, f, o, 1) }
                                : null,
                        [f, o, e.allowsNonContiguousRanges],
                    ),
                    v = (0, y.useMemo)(() => D(m), [D, m]),
                    b = (0, y.useMemo)(() => (0, h.ZI)(l, v?.start), [l, v]),
                    $ = (0, y.useMemo)(() => (0, h.Py)(s, v?.end), [s, v]),
                    R = G({
                        ...d,
                        value: u && u.start,
                        createCalendar: n,
                        locale: i,
                        visibleDuration: o,
                        minValue: b,
                        maxValue: $,
                        selectionAlignment: e.selectionAlignment || p,
                        isDateUnavailable: f,
                    }),
                    P = m ? q(m, R.focusedDate) : u && q(u.start, u.end),
                    w = (a) => {
                        if (e.isReadOnly) return;
                        let t = K(j(a, b, $), R.visibleRange.start, f);
                        if (t)
                            if (m) {
                                let e = q(m, t);
                                (e && c({ start: H(e.start, u?.start), end: H(e.end, u?.end) }), g(null));
                            } else g(t);
                    },
                    [x, k] = (0, y.useState)(!1),
                    S = (0, y.useMemo)(
                        () => !!u && !m && (!!(f && (f(u.start) || f(u.end))) || N(u.start, l, s) || N(u.end, l, s)),
                        [f, u, m, l, s],
                    ),
                    V = e.isInvalid || "invalid" === e.validationState || S;
                return {
                    ...R,
                    value: u,
                    setValue: c,
                    anchorDate: m,
                    setAnchorDate: g,
                    highlightedRange: P,
                    validationState: V ? "invalid" : null,
                    isValueInvalid: V,
                    selectFocusedDate() {
                        R.isCellUnavailable(R.focusedDate) || w(R.focusedDate);
                    },
                    commitSelection() {
                        w(R.focusedDate);
                    },
                    selectDate: w,
                    highlightDate(e) {
                        m && R.setFocusedDate(e);
                    },
                    isSelected: (e) =>
                        !!(
                            P &&
                            e.compare(P.start) >= 0 &&
                            0 >= e.compare(P.end) &&
                            !R.isCellDisabled(e) &&
                            !R.isCellUnavailable(e)
                        ),
                    isInvalid: (e) => R.isInvalid(e) || N(e, v?.start, v?.end),
                    isDragging: x,
                    setDragging: k,
                    clearSelection() {
                        (g(null), c(null));
                    },
                    focusNearestAvailableDate(e) {
                        let a = D(e),
                            t = (e) => this.isInvalid(e) || N(e, a?.start, a?.end),
                            r = e.add({ days: 1 });
                        (t(r) && (r = e.subtract({ days: 1 })), t(r) || (this.setFocusedDate(r), this.setFocused(!0)));
                    },
                };
            })({ ...e, locale: t, createCalendar: e.createCalendar || O.d }),
            {
                calendarProps: d,
                prevButtonProps: u,
                nextButtonProps: m,
                errorMessageProps: g,
                title: p,
            } = (function (e, a, t) {
                let { commitBehavior: r = "select", ...n } = e,
                    i = w(n, a),
                    o = (0, y.useRef)(!1),
                    l = (0, y.useRef)("u" > typeof window ? window : null);
                (0, T._)(l, "pointerdown", (e) => {
                    o.current = 0 === e.width && 0 === e.height;
                });
                let s = {
                    clear: () => a.clearSelection(),
                    reset: () => a.setAnchorDate(null),
                    select: () => a.commitSelection(),
                };
                return (
                    (0, T._)(l, "pointerup", (e) => {
                        if (o.current) {
                            o.current = !1;
                            return;
                        }
                        if ((a.setDragging(!1), !a.anchorDate)) return;
                        let n = e.target;
                        t.current &&
                            (0, S.ae)(t.current) &&
                            (!(0, S.sD)(t.current, n) || !n.closest('button, [role="button"]')) &&
                            s[r]();
                    }),
                    (i.calendarProps.onBlur = (e) => {
                        t.current &&
                            ((e.relatedTarget && (0, S.sD)(t.current, e.relatedTarget)) || !a.anchorDate || s[r]());
                    }),
                    (0, T._)(
                        t,
                        "touchmove",
                        (e) => {
                            a.isDragging && e.preventDefault();
                        },
                        { passive: !1, capture: !0 },
                    ),
                    i
                );
            })(e, l, a),
            f = (0, n.Sl)({
                ...e,
                values: { state: l, isDisabled: e.isDisabled || !1, isInvalid: l.isValueInvalid },
                defaultClassName: "react-aria-RangeCalendar",
            }),
            D = (0, s.$)(e, { global: !0 });
        return y.createElement(
            n.tT.div,
            {
                ...(0, b.v)(f, D, d),
                ref: a,
                slot: e.slot || void 0,
                "data-disabled": e.isDisabled || void 0,
                "data-invalid": l.isValueInvalid || void 0,
            },
            y.createElement(
                n.Kq,
                {
                    values: [
                        [r.k, { slots: { previous: u, next: m } }],
                        [i.A, { "aria-hidden": !0, level: 2, children: p }],
                        [en, l],
                        [et, e],
                        [o.h, { slots: { errorMessage: g } }],
                    ],
                },
                y.createElement(ee.s, null, y.createElement("h2", null, d["aria-label"])),
                f.children,
                y.createElement(
                    ee.s,
                    null,
                    y.createElement("button", {
                        "aria-label": m["aria-label"],
                        disabled: m.isDisabled,
                        onClick: () => l.focusNextPage(),
                        tabIndex: -1,
                    }),
                ),
            ),
        );
    }),
    el = (0, y.createContext)(null),
    es = (0, y.forwardRef)(function (e, a) {
        let t = (0, y.useContext)(er),
            r = (0, y.useContext)(en),
            i = (0, n.CC)(ea),
            o = (0, n.CC)(et),
            l = t ?? r,
            d = l.visibleRange.start;
        e.offset && (d = d.add(e.offset));
        let m = i?.firstDayOfWeek ?? o?.firstDayOfWeek,
            {
                gridProps: g,
                headerProps: f,
                weekDays: v,
                weeksInMonth: R,
            } = (function (e, a) {
                let { startDate: t = a.visibleRange.start, endDate: r = a.visibleRange.end, firstDayOfWeek: n } = e,
                    { direction: i } = (0, c.Y)(),
                    { keyboardProps: o } = (0, x.d)({
                        shortcuts: {
                            End: () => {
                                a.focusSectionEnd();
                            },
                            Home: () => {
                                a.focusSectionStart();
                            },
                            Escape: () => ("setAnchorDate" in a && a.setAnchorDate(null), !1),
                        },
                    }),
                    { keyboardProps: l } = (0, x.d)({
                        shortcuts: {
                            Enter: () => {
                                a.selectFocusedDate();
                            },
                            " ": () => {
                                a.selectFocusedDate();
                            },
                            PageUp: () => {
                                a.focusPreviousSection();
                            },
                            "Shift+PageUp": () => {
                                a.focusPreviousSection(!0);
                            },
                            PageDown: () => {
                                a.focusNextSection();
                            },
                            "Shift+PageDown": () => {
                                a.focusNextSection(!0);
                            },
                            ArrowLeft: () => {
                                "rtl" === i ? a.focusNextDay() : a.focusPreviousDay();
                            },
                            ArrowUp: () => {
                                a.focusPreviousRow();
                            },
                            ArrowRight: () => {
                                "rtl" === i ? a.focusPreviousDay() : a.focusNextDay();
                            },
                            ArrowDown: () => {
                                a.focusNextRow();
                            },
                        },
                        allowRepeats: !0,
                    }),
                    s = D(t, r, a.timeZone, !0),
                    { ariaLabel: d, ariaLabelledBy: m } = p.get(a),
                    g = (0, $.b)({ "aria-label": [d, s].filter(Boolean).join(", "), "aria-labelledby": m }),
                    f = (0, u.i)({ weekday: e.weekdayStyle || "narrow", timeZone: a.timeZone }),
                    { locale: v } = (0, c.Y)(),
                    R = (0, y.useMemo)(() => {
                        let e = a.visibleDuration.days && a.visibleDuration.days < 7,
                            r = e ? t : (0, h.kq)((0, h.Ec)(a.timeZone), v, n);
                        return [...Array(e ? a.visibleDuration.days : 7).keys()].map((e) => {
                            let t = r.add({ days: e }).toDate(a.timeZone);
                            return f.format(t);
                        });
                    }, [v, a.timeZone, f, n, t, a.visibleDuration.days]),
                    P = a.getWeeksInMonth(t);
                return {
                    gridProps: (0, b.v)(
                        g,
                        {
                            role: "grid",
                            "aria-readonly": a.isReadOnly || void 0,
                            "aria-disabled": a.isDisabled || void 0,
                            "aria-multiselectable": "highlightedRange" in a || "multiple" === a.selectionMode || void 0,
                            onFocus: () => a.setFocused(!0),
                            onBlur: () => a.setFocused(!1),
                        },
                        o,
                        l,
                    ),
                    headerProps: { "aria-hidden": !0 },
                    weekDays: R,
                    weeksInMonth: P,
                };
            })({ startDate: d, endDate: (0, h.p9)(d), weekdayStyle: e.weekdayStyle, firstDayOfWeek: m }, l),
            P = (0, s.$)(e, { global: !0 });
        return y.createElement(
            el.Provider,
            { value: { headerProps: f, weekDays: v, startDate: d, weeksInMonth: R } },
            y.createElement(
                n.tT.table,
                {
                    render: e.render,
                    ...(0, b.v)(P, g),
                    ref: a,
                    style: e.style,
                    cellPadding: 0,
                    className: e.className ?? "react-aria-CalendarGrid",
                },
                "function" != typeof e.children
                    ? e.children
                    : y.createElement(
                          y.Fragment,
                          null,
                          y.createElement(ed, null, (e) => y.createElement(eu, null, e)),
                          y.createElement(ec, null, e.children),
                      ),
            ),
        );
    }),
    ed = (0, y.forwardRef)(function (e, a) {
        let { children: t, style: r, className: i } = e,
            { headerProps: o, weekDays: l } = (0, y.useContext)(el),
            d = (0, s.$)(e, { global: !0 });
        return y.createElement(
            n.tT.thead,
            { render: e.render, ...(0, b.v)(d, o), ref: a, style: r, className: i ?? "react-aria-CalendarGridHeader" },
            y.createElement(
                "tr",
                null,
                l.map((e, a) => y.cloneElement(t(e), { key: a })),
            ),
        );
    }),
    eu = (0, y.forwardRef)(function (e, a) {
        let { children: t, style: r, className: i } = e,
            o = (0, s.$)(e, { global: !0 });
        return y.createElement(
            n.tT.th,
            { render: e.render, ...o, ref: a, style: r, className: i || "react-aria-CalendarHeaderCell" },
            t,
        );
    }),
    ec = (0, y.forwardRef)(function (e, a) {
        let { children: t, style: r, className: i } = e,
            o = (0, y.useContext)(er),
            l = (0, y.useContext)(en),
            d = o ?? l,
            { startDate: u, weeksInMonth: c } = (0, y.useContext)(el),
            m = (0, s.$)(e, { global: !0 });
        return y.createElement(
            n.tT.tbody,
            { render: e.render, ...m, ref: a, style: r, className: i ?? "react-aria-CalendarGridBody" },
            [...Array(c).keys()].map((e) =>
                y.createElement(
                    "tr",
                    { key: e },
                    d
                        .getDatesInWeek(e, u)
                        .map((e, a) => (e ? y.cloneElement(t(e), { key: a }) : y.createElement("td", { key: a }))),
                ),
            ),
        );
    }),
    em = (0, y.forwardRef)(function (e, a) {
        let { date: t, ...r } = e,
            i = (0, y.useContext)(er),
            o = (0, y.useContext)(en),
            l = i ?? o,
            { startDate: c } = (0, y.useContext)(el) ?? { startDate: l.visibleRange.start },
            g = !l.visibleDuration.days && !l.visibleDuration.weeks && !(0, h.tF)(c, t),
            D = (0, h.cK)(t, l.timeZone),
            v = (0, y.useRef)(null),
            {
                cellProps: $,
                buttonProps: R,
                ...P
            } = (function (e, a, t) {
                var r;
                let n,
                    { date: i, isDisabled: o } = e,
                    { errorMessageId: l, selectedDateDescription: s } = p.get(a),
                    c = (0, m.o)((r = d) && r.__esModule ? r.default : r, "@react-aria/calendar"),
                    g = (0, u.i)({
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        era: f(i),
                        timeZone: a.timeZone,
                    }),
                    D = a.isCellFocused(i) && !e.isOutsideMonth;
                o = o || a.isCellDisabled(i) || !!e.isOutsideMonth;
                let v = a.isCellUnavailable(i),
                    $ = !o && !v,
                    R = a.isSelected(i) && $,
                    P = !1;
                (a.isValueInvalid &&
                    ("highlightedRange" in a
                        ? (P =
                              !a.anchorDate &&
                              null != a.highlightedRange &&
                              i.compare(a.highlightedRange.start) >= 0 &&
                              0 >= i.compare(a.highlightedRange.end))
                        : Array.isArray(a.value)
                          ? (P = a.value.some((e) => (0, h.ro)(e, i)))
                          : a.value && (P = (0, h.ro)(a.value, i))),
                    P && !o && (R = !0),
                    (i = (0, I.k)(i, h.NV)));
                let w = (0, y.useMemo)(() => i.toDate(a.timeZone), [i, a.timeZone]),
                    x = (0, h.cK)(i, a.timeZone),
                    T = (0, y.useMemo)(() => {
                        let e = "";
                        return (
                            "highlightedRange" in a &&
                                a.value &&
                                !a.anchorDate &&
                                ((0, h.ro)(i, a.value.start) || (0, h.ro)(i, a.value.end)) &&
                                (e = s + ", "),
                            (e += g.format(w)),
                            x
                                ? (e = c.format(R ? "todayDateSelected" : "todayDate", { date: e }))
                                : R && (e = c.format("dateSelected", { date: e })),
                            a.minValue && (0, h.ro)(i, a.minValue)
                                ? (e += ", " + c.format("minimumDate"))
                                : a.maxValue && (0, h.ro)(i, a.maxValue) && (e += ", " + c.format("maximumDate")),
                            e
                        );
                    }, [g, w, c, R, x, i, a, s]),
                    O = "";
                "anchorDate" in a &&
                    D &&
                    !a.isReadOnly &&
                    $ &&
                    (O = a.anchorDate ? c.format("finishRangeSelectionPrompt") : c.format("startRangeSelectionPrompt"));
                let A = (0, E.I)(O),
                    N = (0, y.useRef)(!1),
                    Z = (0, y.useRef)(!1),
                    U = (0, y.useRef)(void 0),
                    { pressProps: z, isPressed: B } = (0, F.d)({
                        shouldCancelOnPointerExit: "anchorDate" in a && !!a.anchorDate,
                        preventFocusOnPress: !0,
                        isDisabled: !$ || a.isReadOnly,
                        onPressStart(e) {
                            if (a.isReadOnly) {
                                (a.setFocusedDate(i), a.setFocused(!0));
                                return;
                            }
                            if (
                                "highlightedRange" in a &&
                                !a.anchorDate &&
                                ("mouse" === e.pointerType || "touch" === e.pointerType)
                            ) {
                                if (a.highlightedRange && !P) {
                                    if ((0, h.ro)(i, a.highlightedRange.start)) {
                                        (a.setAnchorDate(a.highlightedRange.end),
                                            a.setFocusedDate(i),
                                            a.setFocused(!0),
                                            a.setDragging(!0),
                                            (Z.current = !0));
                                        return;
                                    } else if ((0, h.ro)(i, a.highlightedRange.end)) {
                                        (a.setAnchorDate(a.highlightedRange.start),
                                            a.setFocusedDate(i),
                                            a.setFocused(!0),
                                            a.setDragging(!0),
                                            (Z.current = !0));
                                        return;
                                    }
                                }
                                let t = () => {
                                    (a.setDragging(!0),
                                        (U.current = void 0),
                                        a.selectDate(i),
                                        a.setFocusedDate(i),
                                        a.setFocused(!0),
                                        (N.current = !0));
                                };
                                "touch" === e.pointerType ? (U.current = setTimeout(t, 200)) : t();
                            }
                        },
                        onPressEnd() {
                            ((Z.current = !1), (N.current = !1), clearTimeout(U.current), (U.current = void 0));
                        },
                        onPress() {
                            "anchorDate" in a ||
                                a.isReadOnly ||
                                (a.selectDate(i), a.setFocusedDate(i), a.setFocused(!0));
                        },
                        onPressUp(e) {
                            !a.isReadOnly &&
                                ("anchorDate" in a &&
                                    U.current &&
                                    (a.selectDate(i), a.setFocusedDate(i), a.setFocused(!0)),
                                "anchorDate" in a &&
                                    (Z.current
                                        ? a.setAnchorDate(i)
                                        : a.anchorDate && !N.current
                                          ? (a.selectDate(i), a.setFocusedDate(i), a.setFocused(!0))
                                          : "keyboard" !== e.pointerType || a.anchorDate
                                            ? "virtual" === e.pointerType &&
                                              (a.selectDate(i), a.setFocusedDate(i), a.setFocused(!0))
                                            : (a.selectDate(i), a.focusNearestAvailableDate(i))));
                        },
                    });
                (o || (n = (0, h.ro)(i, a.focusedDate) ? 0 : -1),
                    (0, y.useEffect)(() => {
                        D &&
                            t.current &&
                            ((0, k.e)(t.current),
                            "pointer" !== (0, V.ME)() &&
                                (0, S.bq)() === t.current &&
                                (0, M.o)(t.current, { containingElement: (0, C.m)(t.current) }));
                    }, [D, t]));
                let j = (0, u.i)({ day: "numeric", timeZone: a.timeZone, calendar: i.calendar.identifier }),
                    K = (0, y.useMemo)(() => j.formatToParts(w).find((e) => "day" === e.type).value, [j, w]);
                return {
                    cellProps: {
                        role: "gridcell",
                        "aria-disabled": !$ || void 0,
                        "aria-selected": R || void 0,
                        "aria-invalid": P || void 0,
                    },
                    buttonProps: (0, b.v)(z, {
                        onFocus() {
                            o || (a.setFocusedDate(i), a.setFocused(!0));
                        },
                        tabIndex: n,
                        role: "button",
                        "aria-disabled": !$ || void 0,
                        "aria-label": T,
                        "aria-invalid": P || void 0,
                        "aria-describedby": [P ? l : void 0, A["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                        onPointerEnter(e) {
                            "highlightDate" in a &&
                                ("touch" !== e.pointerType || a.isDragging) &&
                                $ &&
                                a.highlightDate(i);
                        },
                        onPointerDown(e) {
                            let a = (0, S.wt)(e);
                            a instanceof HTMLElement &&
                                "releasePointerCapture" in a &&
                                ("hasPointerCapture" in a
                                    ? a.hasPointerCapture(e.pointerId) && a.releasePointerCapture(e.pointerId)
                                    : a.releasePointerCapture(e.pointerId));
                        },
                        onContextMenu(e) {
                            e.preventDefault();
                        },
                    }),
                    isPressed: B,
                    isFocused: D,
                    isSelected: R,
                    isDisabled: o,
                    isUnavailable: v,
                    isOutsideVisibleRange: 0 > i.compare(a.visibleRange.start) || i.compare(a.visibleRange.end) > 0,
                    isInvalid: P,
                    formattedDate: K,
                };
            })({ date: t, isOutsideMonth: g }, l, v),
            { hoverProps: w, isHovered: x } = (0, X.M)({ ...r, isDisabled: P.isDisabled || P.isUnavailable }),
            { focusProps: T, isFocusVisible: O } = (0, Q.o)();
        O &&= P.isFocused;
        let A = !1,
            N = !1;
        "highlightedRange" in l &&
            l.highlightedRange &&
            ((A = (0, h.ro)(t, l.highlightedRange.start)), (N = (0, h.ro)(t, l.highlightedRange.end)));
        let Z = (0, n.Sl)({
                ...r,
                defaultChildren: P.formattedDate,
                defaultClassName: "react-aria-CalendarCell",
                values: {
                    date: t,
                    isHovered: x,
                    isOutsideMonth: g,
                    isFocusVisible: O,
                    isSelectionStart: A,
                    isSelectionEnd: N,
                    isToday: D,
                    ...P,
                },
            }),
            U = {
                "data-focused": P.isFocused || void 0,
                "data-hovered": x || void 0,
                "data-pressed": P.isPressed || void 0,
                "data-unavailable": P.isUnavailable || void 0,
                "data-disabled": P.isDisabled || void 0,
                "data-focus-visible": O || void 0,
                "data-outside-visible-range": P.isOutsideVisibleRange || void 0,
                "data-outside-month": g || void 0,
                "data-selected": P.isSelected || void 0,
                "data-selection-start": A || void 0,
                "data-selection-end": N || void 0,
                "data-invalid": P.isInvalid || void 0,
                "data-today": D || void 0,
            },
            z = (0, s.$)(r, { global: !0 });
        return y.createElement(
            "td",
            { ...$, ref: a },
            y.createElement(n.tT.div, { ...(0, b.v)(z, R, T, w, U, Z), ref: v }),
        );
    });
