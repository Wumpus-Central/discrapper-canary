t.d(a, {
    Zr: () => ed,
    _e: () => er,
    Yi: () => X,
    Vv: () => en,
    co: () => eo,
    Xq: () => es,
    pr: () => ee,
    r8: () => el,
    W$: () => eu,
});
var n = t(197867),
    r = t(825913),
    i = t(257537),
    l = t(193523),
    o = t(402112),
    u = {};
u = {
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
var s = t(939546),
    d = t(47276),
    c = t(849352),
    m = t(64700);
function h(e) {
    return e && e.__esModule ? e.default : e;
}
let D = new WeakMap();
function y(e) {
    return (null == e ? void 0 : e.calendar.identifier) === "gregory" && "BC" === e.era ? "short" : void 0;
}
function p(e, a, t, n) {
    let r = (0, d.o)(h(u), "@react-aria/calendar"),
        i = y(e) || y(a),
        l = (0, c.i)({ month: "long", year: "numeric", era: i, calendar: e.calendar.identifier, timeZone: t }),
        o = (0, c.i)({
            month: "long",
            year: "numeric",
            day: "numeric",
            era: i,
            calendar: e.calendar.identifier,
            timeZone: t,
        });
    return (0, m.useMemo)(() => {
        if ((0, s.ro)(e, (0, s.wH)(e))) {
            let i = e,
                o = a;
            if (
                (e.calendar.getFormattableMonth && (i = e.calendar.getFormattableMonth(e)),
                a.calendar.getFormattableMonth && (o = a.calendar.getFormattableMonth(a)),
                (0, s.ro)(a, (0, s.p9)(e)))
            )
                return l.format(i.toDate(t));
            if ((0, s.ro)(a, (0, s.p9)(a))) return n ? g(l, r, i, o, t) : l.formatRange(i.toDate(t), o.toDate(t));
        }
        return n ? g(o, r, e, a, t) : o.formatRange(e.toDate(t), a.toDate(t));
    }, [e, a, l, o, r, t, n]);
}
function g(e, a, t, n, r) {
    let i = e.formatRangeToParts(t.toDate(r), n.toDate(r)),
        l = -1;
    for (let e = 0; e < i.length; e++) {
        let a = i[e];
        if ("shared" === a.source && "literal" === a.type) l = e;
        else if ("endRange" === a.source) break;
    }
    let o = "",
        u = "";
    for (let e = 0; e < i.length; e++) e < l ? (o += i[e].value) : e > l && (u += i[e].value);
    return a.format("dateRange", { startDate: o, endDate: u });
}
var f = t(217512),
    v = t(290424),
    b = t(98909),
    R = t(985620),
    $ = t(48284),
    w = t(318473);
function P(e, a) {
    var t, n;
    let r,
        i,
        l,
        o,
        P,
        C = (0, d.o)((t = u) && t.__esModule ? t.default : t, "@react-aria/calendar"),
        k = (0, v.$)(e),
        x = p(a.visibleRange.start, a.visibleRange.end, a.timeZone, !1),
        E = p(a.visibleRange.start, a.visibleRange.end, a.timeZone, !0);
    (0, b.w)(() => {
        a.isFocused || (0, f.iP)(E);
    }, [E]);
    let S =
        ((l = (0, d.o)(h(u), "@react-aria/calendar")),
        "highlightedRange" in a
            ? ({ start: r, end: i } = a.highlightedRange || {})
            : (r = i = null != (n = a.value) ? n : void 0),
        (o = (0, c.i)({
            weekday: "long",
            month: "long",
            year: "numeric",
            day: "numeric",
            era: y(r) || y(i),
            timeZone: a.timeZone,
        })),
        (P = "anchorDate" in a ? a.anchorDate : null),
        (0, m.useMemo)(() => {
            if (!P && r && i)
                if ((0, s.ro)(r, i)) {
                    let e = o.format(r.toDate(a.timeZone));
                    return l.format("selectedDateDescription", { date: e });
                } else {
                    let e = g(o, l, r, i, a.timeZone);
                    return l.format("selectedRangeDescription", { dateRange: e });
                }
            return "";
        }, [r, i, P, a.timeZone, l, o]));
    (0, b.w)(() => {
        S && (0, f.iP)(S, "polite", 4e3);
    }, [S]);
    let V = (0, R.X1)([!!e.errorMessage, e.isInvalid, e.validationState]);
    D.set(a, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: e["aria-labelledby"],
        errorMessageId: V,
        selectedDateDescription: S,
    });
    let [F, B] = (0, m.useState)(!1),
        M = e.isDisabled || a.isNextVisibleRangeInvalid();
    M && F && (B(!1), a.setFocused(!0));
    let [I, A] = (0, m.useState)(!1),
        T = e.isDisabled || a.isPreviousVisibleRangeInvalid();
    T && I && (A(!1), a.setFocused(!0));
    let O = (0, $.b)({
        id: e.id,
        "aria-label": [e["aria-label"], E].filter(Boolean).join(", "),
        "aria-labelledby": e["aria-labelledby"],
    });
    return {
        calendarProps: (0, w.v)(k, O, {
            role: "application",
            "aria-details": e["aria-details"] || void 0,
            "aria-describedby": e["aria-describedby"] || void 0,
        }),
        nextButtonProps: {
            onPress: () => a.focusNextPage(),
            "aria-label": C.format("next"),
            isDisabled: M,
            onFocusChange: B,
        },
        prevButtonProps: {
            onPress: () => a.focusPreviousPage(),
            "aria-label": C.format("previous"),
            isDisabled: T,
            onFocusChange: A,
        },
        errorMessageProps: { id: V },
        title: x,
    };
}
var C = t(126031),
    k = t(248215),
    x = t(7521),
    E = t(807177),
    S = t(401705),
    V = t(518665),
    F = t(150047),
    B = t(775133),
    M = t(885714),
    I = t(967158),
    A = t(498430),
    T = t(485720),
    O = t(376472);
function N(e, a, t) {
    return (null != a && 0 > e.compare(a)) || (null != t && e.compare(t) > 0);
}
function Z(e, a, t, n, r) {
    let i = {};
    for (let e in a) (i[e] = Math.floor(a[e] / 2)), i[e] > 0 && a[e] % 2 == 0 && i[e]--;
    let l = z(e, a, t).subtract(i);
    return j(e, l, a, t, n, r);
}
function z(e, a, t, n, r) {
    let i = e;
    return (
        a.years ? (i = (0, s.D)(e)) : a.months ? (i = (0, s.wH)(e)) : a.weeks && (i = (0, s.kq)(e, t)),
        j(e, i, a, t, n, r)
    );
}
function U(e, a, t, n, r) {
    let i = { ...a };
    i.days ? i.days-- : i.weeks ? i.weeks-- : i.months ? i.months-- : i.years && i.years--;
    let l = z(e, a, t).subtract(i);
    return j(e, l, a, t, n, r);
}
function j(e, a, t, n, r, i) {
    if (r && e.compare(r) >= 0) {
        let e = (0, s.ZI)(a, z((0, O.gw)(r), t, n));
        e && (a = e);
    }
    if (i && 0 >= e.compare(i)) {
        let e = (0, s.Py)(a, U((0, O.gw)(i), t, n));
        e && (a = e);
    }
    return a;
}
function K(e, a, t) {
    if (a) {
        let t = (0, s.ZI)(e, (0, O.gw)(a));
        t && (e = t);
    }
    if (t) {
        let a = (0, s.Py)(e, (0, O.gw)(t));
        a && (e = a);
    }
    return e;
}
function L(e, a, t) {
    if (!t) return e;
    for (; e.compare(a) >= 0 && t(e); ) e = e.subtract({ days: 1 });
    return e.compare(a) >= 0 ? e : null;
}
var J = t(515702),
    W = t(142922),
    Y = t(492313);
function G(e) {
    var a, t, n;
    let r = (0, m.useMemo)(() => new (0, J.p)(e.locale), [e.locale]),
        i = (0, m.useMemo)(() => r.resolvedOptions(), [r]),
        {
            locale: l,
            createCalendar: o,
            visibleDuration: u = { months: 1 },
            minValue: d,
            maxValue: c,
            selectionAlignment: h,
            isDateUnavailable: D,
            pageBehavior: y = "visible",
            firstDayOfWeek: p,
        } = e,
        g = (0, m.useMemo)(() => o(i.calendar), [o, i.calendar]),
        [f, v] = (0, Y.P)(e.value, null != (a = e.defaultValue) ? a : null, e.onChange),
        b = (0, m.useMemo)(() => (f ? (0, O.yP)((0, O.gw)(f), g) : null), [f, g]),
        R = (0, m.useMemo)(() => (f && "timeZone" in f ? f.timeZone : i.timeZone), [f, i.timeZone]),
        $ = (0, m.useMemo)(
            () => (e.focusedValue ? K((0, O.yP)((0, O.gw)(e.focusedValue), g), d, c) : void 0),
            [e.focusedValue, g, d, c],
        ),
        w = (0, m.useMemo)(
            () =>
                K(
                    e.defaultFocusedValue
                        ? (0, O.yP)((0, O.gw)(e.defaultFocusedValue), g)
                        : b || (0, O.yP)((0, s.Ec)(R), g),
                    d,
                    c,
                ),
            [e.defaultFocusedValue, b, R, g, d, c],
        ),
        [P, C] = (0, Y.P)($, w, e.onFocusChange),
        [k, x] = (0, m.useState)(() => {
            switch (h) {
                case "start":
                    return z(P, u, l, d, c);
                case "end":
                    return U(P, u, l, d, c);
                default:
                    return Z(P, u, l, d, c);
            }
        }),
        [E, S] = (0, m.useState)(e.autoFocus || !1),
        V = (0, m.useMemo)(() => {
            let e = { ...u };
            return e.days ? e.days-- : (e.days = -1), k.add(e);
        }, [k, u]),
        [F, B] = (0, m.useState)(g);
    if (!(0, s.Jg)(g, F)) {
        let e = (0, O.yP)(P, g);
        x(Z(e, u, l, d, c)), C(e), B(g);
    }
    function M(e) {
        C((e = K(e, d, c)));
    }
    function I(a) {
        if (!e.isDisabled && !e.isReadOnly) {
            let e = a;
            if (null === e) return void v(null);
            (e = L((e = K(e, d, c)), k, D)) &&
                ((e = (0, O.yP)(e, (null == f ? void 0 : f.calendar) || new (0, W.FG)())),
                f && "hour" in f ? v(f.set(e)) : v(e));
        }
    }
    N(P, d, c) ? C(K(P, d, c)) : 0 > P.compare(k) ? x(U(P, u, l, d, c)) : P.compare(V) > 0 && x(z(P, u, l, d, c));
    let A = (0, m.useMemo)(() => !!b && (!!(D && D(b)) || N(b, d, c)), [b, D, d, c]),
        T = e.isInvalid || "invalid" === e.validationState || A,
        G = (0, m.useMemo)(() => ("visible" === y ? u : H(u)), [y, u]);
    return {
        isDisabled: null != (t = e.isDisabled) && t,
        isReadOnly: null != (n = e.isReadOnly) && n,
        value: b,
        setValue: I,
        visibleRange: { start: k, end: V },
        minValue: d,
        maxValue: c,
        focusedDate: P,
        timeZone: R,
        validationState: T ? "invalid" : null,
        isValueInvalid: T,
        setFocusedDate(e) {
            M(e), S(!0);
        },
        focusNextDay() {
            M(P.add({ days: 1 }));
        },
        focusPreviousDay() {
            M(P.subtract({ days: 1 }));
        },
        focusNextRow() {
            u.days ? this.focusNextPage() : (u.weeks || u.months || u.years) && M(P.add({ weeks: 1 }));
        },
        focusPreviousRow() {
            u.days ? this.focusPreviousPage() : (u.weeks || u.months || u.years) && M(P.subtract({ weeks: 1 }));
        },
        focusNextPage() {
            let e = k.add(G);
            C(K(P.add(G), d, c)), x(z(j(P, e, G, l, d, c), G, l));
        },
        focusPreviousPage() {
            let e = k.subtract(G);
            C(K(P.subtract(G), d, c)), x(z(j(P, e, G, l, d, c), G, l));
        },
        focusSectionStart() {
            u.days ? M(k) : u.weeks ? M((0, s.kq)(P, l)) : (u.months || u.years) && M((0, s.wH)(P));
        },
        focusSectionEnd() {
            u.days ? M(V) : u.weeks ? M((0, s.$I)(P, l)) : (u.months || u.years) && M((0, s.p9)(P));
        },
        focusNextSection(e) {
            e || u.days
                ? u.days
                    ? this.focusNextPage()
                    : u.weeks
                      ? M(P.add({ months: 1 }))
                      : (u.months || u.years) && M(P.add({ years: 1 }))
                : M(P.add(H(u)));
        },
        focusPreviousSection(e) {
            e || u.days
                ? u.days
                    ? this.focusPreviousPage()
                    : u.weeks
                      ? M(P.subtract({ months: 1 }))
                      : (u.months || u.years) && M(P.subtract({ years: 1 }))
                : M(P.subtract(H(u)));
        },
        selectFocusedDate() {
            (D && D(P)) || I(P);
        },
        selectDate(e) {
            I(e);
        },
        isFocused: E,
        setFocused: S,
        isInvalid: (e) => N(e, d, c),
        isSelected(e) {
            return null != b && (0, s.ro)(e, b) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => E && P && (0, s.ro)(e, P),
        isCellDisabled(a) {
            return e.isDisabled || 0 > a.compare(k) || a.compare(V) > 0 || this.isInvalid(a);
        },
        isCellUnavailable: (a) => !!e.isDateUnavailable && e.isDateUnavailable(a),
        isPreviousVisibleRangeInvalid() {
            let e = k.subtract({ days: 1 });
            return (0, s.ro)(e, k) || this.isInvalid(e);
        },
        isNextVisibleRangeInvalid() {
            let e = V.add({ days: 1 });
            return (0, s.ro)(e, V) || this.isInvalid(e);
        },
        getDatesInWeek(e, a = k) {
            let t = a.add({ weeks: e }),
                n = [];
            t = (0, s.kq)(t, l, p);
            let r = (0, s.SJ)(t, l, p);
            for (let e = 0; e < r; e++) n.push(null);
            for (; n.length < 7; ) {
                n.push(t);
                let e = t.add({ days: 1 });
                if ((0, s.ro)(t, e)) break;
                t = e;
            }
            for (; n.length < 7; ) n.push(null);
            return n;
        },
    };
}
function H(e) {
    let a = { ...e };
    for (let t in e) a[t] = 1;
    return a;
}
function _(e, a) {
    return e && a ? (0 > a.compare(e) && ([e, a] = [a, e]), { start: (0, O.gw)(e), end: (0, O.gw)(a) }) : null;
}
function q(e, a) {
    return ((e = (0, O.yP)(e, (null == a ? void 0 : a.calendar) || new (0, W.FG)())), a && "hour" in a) ? a.set(e) : e;
}
function Q(e, a, t) {
    let n = e.add({ days: t });
    for (
        ;
        (t < 0 ? n.compare(a.visibleRange.start) >= 0 : 0 >= n.compare(a.visibleRange.end)) && !a.isCellUnavailable(n);
    )
        n = n.add({ days: t });
    if (a.isCellUnavailable(n)) return n.add({ days: -t });
}
let X = (0, m.createContext)(null),
    ee = (0, m.createContext)(null),
    ea = (0, m.createContext)(null),
    et = (0, m.createContext)(null),
    en = (0, m.forwardRef)(function (e, a) {
        [e, a] = (0, r.JT)(e, a, X);
        let { locale: t } = (0, o.Y)(),
            u = G({ ...e, locale: t, createCalendar: e.createCalendar || T.d }),
            { calendarProps: s, prevButtonProps: d, nextButtonProps: c, errorMessageProps: h, title: D } = P(e, u),
            y = (0, r.Sl)({
                ...e,
                values: { state: u, isDisabled: e.isDisabled || !1, isInvalid: u.isValueInvalid },
                defaultClassName: "react-aria-Calendar",
            }),
            p = (0, v.$)(e, { global: !0 });
        return m.createElement(
            "div",
            {
                ...(0, w.v)(p, y, s),
                ref: a,
                slot: e.slot || void 0,
                "data-disabled": e.isDisabled || void 0,
                "data-invalid": u.isValueInvalid || void 0,
            },
            m.createElement(
                r.Kq,
                {
                    values: [
                        [n.k, { slots: { previous: d, next: c } }],
                        [i.A3, { "aria-hidden": !0, level: 2, children: D }],
                        [ea, u],
                        [X, e],
                        [l.h, { slots: { errorMessage: h } }],
                    ],
                },
                m.createElement(C.s, null, m.createElement("h2", null, s["aria-label"])),
                y.children,
                m.createElement(
                    C.s,
                    null,
                    m.createElement("button", {
                        "aria-label": c["aria-label"],
                        disabled: c.isDisabled,
                        onClick: () => u.focusNextPage(),
                        tabIndex: -1,
                    }),
                ),
            ),
        );
    }),
    er = (0, m.forwardRef)(function (e, a) {
        var t, u;
        let d, c, h;
        [e, a] = (0, r.JT)(e, a, ee);
        let { locale: D } = (0, o.Y)(),
            y = (function (e) {
                let {
                        value: a,
                        defaultValue: t,
                        onChange: n,
                        createCalendar: r,
                        locale: i,
                        visibleDuration: l = { months: 1 },
                        minValue: o,
                        maxValue: u,
                        ...d
                    } = e,
                    [c, h] = (0, Y.P)(a, t || null, n),
                    [D, y] = (0, m.useState)(null),
                    p = "center";
                if (c && c.start && c.end) {
                    let e = Z((0, O.gw)(c.start), l, i, o, u)
                        .add(l)
                        .subtract({ days: 1 });
                    c.end.compare(e) > 0 && (p = "start");
                }
                let g = (0, m.useRef)(null),
                    [f, v] = (0, m.useState)(null),
                    b = (0, m.useMemo)(() => (0, s.ZI)(o, null == f ? void 0 : f.start), [o, f]),
                    R = (0, m.useMemo)(() => (0, s.Py)(u, null == f ? void 0 : f.end), [u, f]),
                    $ = G({
                        ...d,
                        value: c && c.start,
                        createCalendar: r,
                        locale: i,
                        visibleDuration: l,
                        minValue: b,
                        maxValue: R,
                        selectionAlignment: e.selectionAlignment || p,
                    }),
                    w = (a) => {
                        a && e.isDateUnavailable && !e.allowsNonContiguousRanges
                            ? ((g.current = { start: Q(a, $, -1), end: Q(a, $, 1) }), v(g.current))
                            : ((g.current = null), v(null));
                    },
                    [P, C] = (0, m.useState)($.visibleRange);
                ((0, s.NV)($.visibleRange.start, P.start) && (0, s.NV)($.visibleRange.end, P.end)) ||
                    (w(D), C($.visibleRange));
                let k = (e) => {
                        e ? (y(e), w(e)) : (y(null), w(null));
                    },
                    x = D ? _(D, $.focusedDate) : c && _(c.start, c.end),
                    E = (a) => {
                        if (e.isReadOnly) return;
                        let t = L(K(a, b, R), $.visibleRange.start, e.isDateUnavailable);
                        if (t)
                            if (D) {
                                let e = _(D, t);
                                e &&
                                    h({
                                        start: q(e.start, null == c ? void 0 : c.start),
                                        end: q(e.end, null == c ? void 0 : c.end),
                                    }),
                                    k(null);
                            } else k(t);
                    },
                    [S, V] = (0, m.useState)(!1),
                    { isDateUnavailable: F } = e,
                    B = (0, m.useMemo)(
                        () => !!c && !D && (!!(F && (F(c.start) || F(c.end))) || N(c.start, o, u) || N(c.end, o, u)),
                        [F, c, D, o, u],
                    ),
                    M = e.isInvalid || "invalid" === e.validationState || B;
                return {
                    ...$,
                    value: c,
                    setValue: h,
                    anchorDate: D,
                    setAnchorDate: k,
                    highlightedRange: x,
                    validationState: M ? "invalid" : null,
                    isValueInvalid: M,
                    selectFocusedDate() {
                        E($.focusedDate);
                    },
                    selectDate: E,
                    highlightDate(e) {
                        D && $.setFocusedDate(e);
                    },
                    isSelected: (e) =>
                        !!(
                            x &&
                            e.compare(x.start) >= 0 &&
                            0 >= e.compare(x.end) &&
                            !$.isCellDisabled(e) &&
                            !$.isCellUnavailable(e)
                        ),
                    isInvalid(e) {
                        var a, t;
                        return (
                            $.isInvalid(e) ||
                            N(e, null == (a = g.current) ? void 0 : a.start, null == (t = g.current) ? void 0 : t.end)
                        );
                    },
                    isDragging: S,
                    setDragging: V,
                };
            })({ ...e, locale: D, createCalendar: e.createCalendar || T.d }),
            {
                calendarProps: p,
                prevButtonProps: g,
                nextButtonProps: f,
                errorMessageProps: b,
                title: R,
            } = ((t = e),
            (u = a),
            (d = P(t, y)),
            (c = (0, m.useRef)(!1)),
            (h = (0, m.useRef)("u" > typeof window ? window : null)),
            (0, k._)(h, "pointerdown", (e) => {
                c.current = 0 === e.width && 0 === e.height;
            }),
            (0, k._)(h, "pointerup", (e) => {
                if (c.current) {
                    c.current = !1;
                    return;
                }
                if ((y.setDragging(!1), !y.anchorDate)) return;
                let a = e.target;
                u.current &&
                    u.current.contains(document.activeElement) &&
                    (!u.current.contains(a) || !a.closest('button, [role="button"]')) &&
                    y.selectFocusedDate();
            }),
            (d.calendarProps.onBlur = (e) => {
                u.current &&
                    ((e.relatedTarget && u.current.contains(e.relatedTarget)) ||
                        !y.anchorDate ||
                        y.selectFocusedDate());
            }),
            (0, k._)(
                u,
                "touchmove",
                (e) => {
                    y.isDragging && e.preventDefault();
                },
                { passive: !1, capture: !0 },
            ),
            d),
            $ = (0, r.Sl)({
                ...e,
                values: { state: y, isDisabled: e.isDisabled || !1, isInvalid: y.isValueInvalid },
                defaultClassName: "react-aria-RangeCalendar",
            }),
            x = (0, v.$)(e, { global: !0 });
        return m.createElement(
            "div",
            {
                ...(0, w.v)($, x, p),
                ref: a,
                slot: e.slot || void 0,
                "data-disabled": e.isDisabled || void 0,
                "data-invalid": y.isValueInvalid || void 0,
            },
            m.createElement(
                r.Kq,
                {
                    values: [
                        [n.k, { slots: { previous: g, next: f } }],
                        [i.A3, { "aria-hidden": !0, level: 2, children: R }],
                        [et, y],
                        [ee, e],
                        [l.h, { slots: { errorMessage: b } }],
                    ],
                },
                m.createElement(C.s, null, m.createElement("h2", null, p["aria-label"])),
                $.children,
                m.createElement(
                    C.s,
                    null,
                    m.createElement("button", {
                        "aria-label": f["aria-label"],
                        disabled: f.isDisabled,
                        onClick: () => y.focusNextPage(),
                        tabIndex: -1,
                    }),
                ),
            ),
        );
    }),
    ei = (0, m.createContext)(null),
    el = (0, m.forwardRef)(function (e, a) {
        var t, n;
        let i = (0, m.useContext)(ea),
            l = (0, m.useContext)(et),
            u = (0, r.CC)(X),
            d = (0, r.CC)(ee),
            h = null != i ? i : l,
            y = h.visibleRange.start;
        e.offset && (y = y.add(e.offset));
        let g = null != (t = null == u ? void 0 : u.firstDayOfWeek) ? t : null == d ? void 0 : d.firstDayOfWeek,
            {
                gridProps: f,
                headerProps: b,
                weekDays: R,
                weeksInMonth: P,
            } = (function (e, a) {
                let { startDate: t = a.visibleRange.start, endDate: n = a.visibleRange.end, firstDayOfWeek: r } = e,
                    { direction: i } = (0, o.Y)(),
                    l = p(t, n, a.timeZone, !0),
                    { ariaLabel: u, ariaLabelledBy: d } = D.get(a),
                    h = (0, $.b)({ "aria-label": [u, l].filter(Boolean).join(", "), "aria-labelledby": d }),
                    y = (0, c.i)({ weekday: e.weekdayStyle || "narrow", timeZone: a.timeZone }),
                    { locale: g } = (0, o.Y)(),
                    f = (0, m.useMemo)(() => {
                        let e = (0, s.kq)((0, s.Ec)(a.timeZone), g, r);
                        return [...Array(7).keys()].map((t) => {
                            let n = e.add({ days: t }).toDate(a.timeZone);
                            return y.format(n);
                        });
                    }, [g, a.timeZone, y, r]),
                    v = (0, s.RZ)(t, g, r);
                return {
                    gridProps: (0, w.v)(h, {
                        role: "grid",
                        "aria-readonly": a.isReadOnly || void 0,
                        "aria-disabled": a.isDisabled || void 0,
                        "aria-multiselectable": "highlightedRange" in a || void 0,
                        onKeyDown: (e) => {
                            switch (e.key) {
                                case "Enter":
                                case " ":
                                    e.preventDefault(), a.selectFocusedDate();
                                    break;
                                case "PageUp":
                                    e.preventDefault(), e.stopPropagation(), a.focusPreviousSection(e.shiftKey);
                                    break;
                                case "PageDown":
                                    e.preventDefault(), e.stopPropagation(), a.focusNextSection(e.shiftKey);
                                    break;
                                case "End":
                                    e.preventDefault(), e.stopPropagation(), a.focusSectionEnd();
                                    break;
                                case "Home":
                                    e.preventDefault(), e.stopPropagation(), a.focusSectionStart();
                                    break;
                                case "ArrowLeft":
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        "rtl" === i ? a.focusNextDay() : a.focusPreviousDay();
                                    break;
                                case "ArrowUp":
                                    e.preventDefault(), e.stopPropagation(), a.focusPreviousRow();
                                    break;
                                case "ArrowRight":
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        "rtl" === i ? a.focusPreviousDay() : a.focusNextDay();
                                    break;
                                case "ArrowDown":
                                    e.preventDefault(), e.stopPropagation(), a.focusNextRow();
                                    break;
                                case "Escape":
                                    "setAnchorDate" in a && (e.preventDefault(), a.setAnchorDate(null));
                            }
                        },
                        onFocus: () => a.setFocused(!0),
                        onBlur: () => a.setFocused(!1),
                    }),
                    headerProps: { "aria-hidden": !0 },
                    weekDays: f,
                    weeksInMonth: v,
                };
            })({ startDate: y, endDate: (0, s.p9)(y), weekdayStyle: e.weekdayStyle, firstDayOfWeek: g }, h),
            C = (0, v.$)(e, { global: !0 });
        return m.createElement(
            ei.Provider,
            { value: { headerProps: b, weekDays: R, startDate: y, weeksInMonth: P } },
            m.createElement(
                "table",
                {
                    ...(0, w.v)(C, f),
                    ref: a,
                    style: e.style,
                    cellPadding: 0,
                    className: null != (n = e.className) ? n : "react-aria-CalendarGrid",
                },
                "function" != typeof e.children
                    ? e.children
                    : m.createElement(
                          m.Fragment,
                          null,
                          m.createElement(eo, null, (e) => m.createElement(eu, null, e)),
                          m.createElement(es, null, e.children),
                      ),
            ),
        );
    }),
    eo = (0, m.forwardRef)(function (e, a) {
        let { children: t, style: n, className: r } = e,
            { headerProps: i, weekDays: l } = (0, m.useContext)(ei),
            o = (0, v.$)(e, { global: !0 });
        return m.createElement(
            "thead",
            { ...(0, w.v)(o, i), ref: a, style: n, className: r || "react-aria-CalendarGridHeader" },
            m.createElement(
                "tr",
                null,
                l.map((e, a) => m.cloneElement(t(e), { key: a })),
            ),
        );
    }),
    eu = (0, m.forwardRef)(function (e, a) {
        let { children: t, style: n, className: r } = e,
            i = (0, v.$)(e, { global: !0 });
        return m.createElement("th", { ...i, ref: a, style: n, className: r || "react-aria-CalendarHeaderCell" }, t);
    }),
    es = (0, m.forwardRef)(function (e, a) {
        let { children: t, style: n, className: r } = e,
            i = (0, m.useContext)(ea),
            l = (0, m.useContext)(et),
            o = null != i ? i : l,
            { startDate: u, weeksInMonth: s } = (0, m.useContext)(ei),
            d = (0, v.$)(e, { global: !0 });
        return m.createElement(
            "tbody",
            { ...d, ref: a, style: n, className: r || "react-aria-CalendarGridBody" },
            [...Array(s).keys()].map((e) =>
                m.createElement(
                    "tr",
                    { key: e },
                    o
                        .getDatesInWeek(e, u)
                        .map((e, a) => (e ? m.cloneElement(t(e), { key: a }) : m.createElement("td", { key: a }))),
                ),
            ),
        );
    }),
    ed = (0, m.forwardRef)(function ({ date: e, ...a }, t) {
        var n;
        let i = (0, m.useContext)(ea),
            l = (0, m.useContext)(et),
            o = null != i ? i : l,
            { startDate: h } = null != (n = (0, m.useContext)(ei)) ? n : { startDate: o.visibleRange.start },
            p = !(0, s.tF)(h, e),
            g = (0, s.cK)(e, o.timeZone),
            f = (0, m.useRef)(null),
            {
                cellProps: b,
                buttonProps: R,
                ...$
            } = (function (e, a, t) {
                var n;
                let r,
                    { date: i, isDisabled: l } = e,
                    { errorMessageId: o, selectedDateDescription: h } = D.get(a),
                    p = (0, d.o)((n = u) && n.__esModule ? n.default : n, "@react-aria/calendar"),
                    g = (0, c.i)({
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        era: y(i),
                        timeZone: a.timeZone,
                    }),
                    f = a.isSelected(i),
                    v = a.isCellFocused(i) && !e.isOutsideMonth;
                l = l || a.isCellDisabled(i);
                let b = a.isCellUnavailable(i),
                    R = !l && !b,
                    $ =
                        a.isValueInvalid &&
                        !!("highlightedRange" in a
                            ? !a.anchorDate &&
                              a.highlightedRange &&
                              i.compare(a.highlightedRange.start) >= 0 &&
                              0 >= i.compare(a.highlightedRange.end)
                            : a.value && (0, s.ro)(a.value, i));
                $ && (f = !0), (i = (0, x.k)(i, s.NV));
                let P = (0, m.useMemo)(() => i.toDate(a.timeZone), [i, a.timeZone]),
                    C = (0, s.cK)(i, a.timeZone),
                    k = (0, m.useMemo)(() => {
                        let e = "";
                        return (
                            "highlightedRange" in a &&
                                a.value &&
                                !a.anchorDate &&
                                ((0, s.ro)(i, a.value.start) || (0, s.ro)(i, a.value.end)) &&
                                (e = h + ", "),
                            (e += g.format(P)),
                            C
                                ? (e = p.format(f ? "todayDateSelected" : "todayDate", { date: e }))
                                : f && (e = p.format("dateSelected", { date: e })),
                            a.minValue && (0, s.ro)(i, a.minValue)
                                ? (e += ", " + p.format("minimumDate"))
                                : a.maxValue && (0, s.ro)(i, a.maxValue) && (e += ", " + p.format("maximumDate")),
                            e
                        );
                    }, [g, P, p, f, C, i, a, h]),
                    I = "";
                "anchorDate" in a &&
                    v &&
                    !a.isReadOnly &&
                    R &&
                    (I = a.anchorDate ? p.format("finishRangeSelectionPrompt") : p.format("startRangeSelectionPrompt"));
                let A = (0, E.I)(I),
                    T = (0, m.useRef)(!1),
                    O = (0, m.useRef)(!1),
                    N = (0, m.useRef)(void 0),
                    { pressProps: Z, isPressed: z } = (0, B.d)({
                        shouldCancelOnPointerExit: "anchorDate" in a && !!a.anchorDate,
                        preventFocusOnPress: !0,
                        isDisabled: !R || a.isReadOnly,
                        onPressStart(e) {
                            if (a.isReadOnly) return void a.setFocusedDate(i);
                            if (
                                "highlightedRange" in a &&
                                !a.anchorDate &&
                                ("mouse" === e.pointerType || "touch" === e.pointerType)
                            ) {
                                if (a.highlightedRange && !$) {
                                    if ((0, s.ro)(i, a.highlightedRange.start)) {
                                        a.setAnchorDate(a.highlightedRange.end),
                                            a.setFocusedDate(i),
                                            a.setDragging(!0),
                                            (O.current = !0);
                                        return;
                                    } else if ((0, s.ro)(i, a.highlightedRange.end)) {
                                        a.setAnchorDate(a.highlightedRange.start),
                                            a.setFocusedDate(i),
                                            a.setDragging(!0),
                                            (O.current = !0);
                                        return;
                                    }
                                }
                                let t = () => {
                                    a.setDragging(!0),
                                        (N.current = void 0),
                                        a.selectDate(i),
                                        a.setFocusedDate(i),
                                        (T.current = !0);
                                };
                                "touch" === e.pointerType ? (N.current = setTimeout(t, 200)) : t();
                            }
                        },
                        onPressEnd() {
                            (O.current = !1), (T.current = !1), clearTimeout(N.current), (N.current = void 0);
                        },
                        onPress() {
                            "anchorDate" in a || a.isReadOnly || (a.selectDate(i), a.setFocusedDate(i));
                        },
                        onPressUp(e) {
                            if (
                                !a.isReadOnly &&
                                ("anchorDate" in a && N.current && (a.selectDate(i), a.setFocusedDate(i)),
                                "anchorDate" in a)
                            )
                                if (O.current) a.setAnchorDate(i);
                                else if (a.anchorDate && !T.current) a.selectDate(i), a.setFocusedDate(i);
                                else if ("keyboard" !== e.pointerType || a.anchorDate)
                                    "virtual" === e.pointerType && (a.selectDate(i), a.setFocusedDate(i));
                                else {
                                    a.selectDate(i);
                                    let e = i.add({ days: 1 });
                                    a.isInvalid(e) && (e = i.subtract({ days: 1 })),
                                        a.isInvalid(e) || a.setFocusedDate(e);
                                }
                        },
                    });
                l || (r = (0, s.ro)(i, a.focusedDate) ? 0 : -1),
                    (0, m.useEffect)(() => {
                        v &&
                            t.current &&
                            ((0, S.e)(t.current),
                            "pointer" !== (0, M.ME)() &&
                                document.activeElement === t.current &&
                                (0, V.o)(t.current, { containingElement: (0, F.m)(t.current) }));
                    }, [v, t]);
                let U = (0, c.i)({ day: "numeric", timeZone: a.timeZone, calendar: i.calendar.identifier }),
                    j = (0, m.useMemo)(() => U.formatToParts(P).find((e) => "day" === e.type).value, [U, P]);
                return {
                    cellProps: {
                        role: "gridcell",
                        "aria-disabled": !R || void 0,
                        "aria-selected": f || void 0,
                        "aria-invalid": $ || void 0,
                    },
                    buttonProps: (0, w.v)(Z, {
                        onFocus() {
                            l || a.setFocusedDate(i);
                        },
                        tabIndex: r,
                        role: "button",
                        "aria-disabled": !R || void 0,
                        "aria-label": k,
                        "aria-invalid": $ || void 0,
                        "aria-describedby": [$ ? o : void 0, A["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                        onPointerEnter(e) {
                            "highlightDate" in a &&
                                ("touch" !== e.pointerType || a.isDragging) &&
                                R &&
                                a.highlightDate(i);
                        },
                        onPointerDown(e) {
                            "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId);
                        },
                        onContextMenu(e) {
                            e.preventDefault();
                        },
                    }),
                    isPressed: z,
                    isFocused: v,
                    isSelected: f,
                    isDisabled: l,
                    isUnavailable: b,
                    isOutsideVisibleRange: 0 > i.compare(a.visibleRange.start) || i.compare(a.visibleRange.end) > 0,
                    isInvalid: $,
                    formattedDate: j,
                };
            })({ date: e, isOutsideMonth: p }, o, f),
            { hoverProps: P, isHovered: C } = (0, I.M)({ ...a, isDisabled: $.isDisabled }),
            { focusProps: k, isFocusVisible: T } = (0, A.o)();
        T && (T = $.isFocused);
        let O = !1,
            N = !1;
        "highlightedRange" in o &&
            o.highlightedRange &&
            ((O = (0, s.ro)(e, o.highlightedRange.start)), (N = (0, s.ro)(e, o.highlightedRange.end)));
        let Z = (0, r.Sl)({
                ...a,
                defaultChildren: $.formattedDate,
                defaultClassName: "react-aria-CalendarCell",
                values: {
                    date: e,
                    isHovered: C,
                    isOutsideMonth: p,
                    isFocusVisible: T,
                    isSelectionStart: O,
                    isSelectionEnd: N,
                    isToday: g,
                    ...$,
                },
            }),
            z = {
                "data-focused": $.isFocused || void 0,
                "data-hovered": C || void 0,
                "data-pressed": $.isPressed || void 0,
                "data-unavailable": $.isUnavailable || void 0,
                "data-disabled": $.isDisabled || void 0,
                "data-focus-visible": T || void 0,
                "data-outside-visible-range": $.isOutsideVisibleRange || void 0,
                "data-outside-month": p || void 0,
                "data-selected": $.isSelected || void 0,
                "data-selection-start": O || void 0,
                "data-selection-end": N || void 0,
                "data-invalid": $.isInvalid || void 0,
                "data-today": g || void 0,
            },
            U = (0, v.$)(a, { global: !0 });
        return m.createElement(
            "td",
            { ...b, ref: t },
            m.createElement("div", { ...(0, w.v)(U, R, k, P, z, Z), ref: f }),
        );
    });
