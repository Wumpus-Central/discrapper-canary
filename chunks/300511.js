t.d(a, { $l: () => b, eD: () => p, o_: () => $, nz: () => y, nf: () => R, bf: () => w, id: () => v });
var n,
    r = {};
r = {
    "ar-AE": {
        rangeOverflow: (e) =>
            `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.maxValue} \u{623}\u{648} \u{642}\u{628}\u{644} \u{630}\u{644}\u{643}.`,
        rangeReversed:
            "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0642\u0628\u0644 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621.",
        rangeUnderflow: (e) =>
            `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.minValue} \u{623}\u{648} \u{628}\u{639}\u{62F} \u{630}\u{644}\u{643}.`,
        unavailableDate:
            "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629.",
    },
    "bg-BG": {
        rangeOverflow: (e) =>
            `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.maxValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{440}\u{430}\u{43D}\u{43D}\u{430}.`,
        rangeReversed:
            "\u041D\u0430\u0447\u0430\u043B\u043D\u0430\u0442\u0430 \u0434\u0430\u0442\u0430 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0435 \u043F\u0440\u0435\u0434\u0438 \u043A\u0440\u0430\u0439\u043D\u0430\u0442\u0430.",
        rangeUnderflow: (e) =>
            `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.minValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{43A}\u{44A}\u{441}\u{43D}\u{43E}.`,
        unavailableDate:
            "\u0418\u0437\u0431\u0440\u0430\u043D\u0430\u0442\u0430 \u0434\u0430\u0442\u0430 \u043D\u0435 \u0435 \u043D\u0430\u043B\u0438\u0447\u043D\u0430.",
    },
    "cs-CZ": {
        rangeOverflow: (e) => `Hodnota mus\xed b\xfdt ${e.maxValue} nebo d\u{159}\xedv\u{11B}j\u{161}\xed.`,
        rangeReversed: "Datum zah\xe1jen\xed mus\xed p\u0159edch\xe1zet datu ukon\u010Den\xed.",
        rangeUnderflow: (e) => `Hodnota mus\xed b\xfdt ${e.minValue} nebo pozd\u{11B}j\u{161}\xed.`,
        unavailableDate: "Vybran\xe9 datum nen\xed k dispozici.",
    },
    "da-DK": {
        rangeOverflow: (e) => `V\xe6rdien skal v\xe6re ${e.maxValue} eller tidligere.`,
        rangeReversed: "Startdatoen skal v\xe6re f\xf8r slutdatoen.",
        rangeUnderflow: (e) => `V\xe6rdien skal v\xe6re ${e.minValue} eller nyere.`,
        unavailableDate: "Den valgte dato er ikke tilg\xe6ngelig.",
    },
    "de-DE": {
        rangeOverflow: (e) => `Der Wert muss ${e.maxValue} oder fr\xfcher sein.`,
        rangeReversed: "Das Startdatum muss vor dem Enddatum liegen.",
        rangeUnderflow: (e) => `Der Wert muss ${e.minValue} oder sp\xe4ter sein.`,
        unavailableDate: "Das ausgew\xe4hlte Datum ist nicht verf\xfcgbar.",
    },
    "el-GR": {
        rangeOverflow: (e) =>
            `\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.maxValue} \u{3AE} \u{3C0}\u{3B1}\u{3BB}\u{3B1}\u{3B9}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
        rangeReversed:
            "\u0397 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03AD\u03BD\u03B1\u03C1\u03BE\u03B7\u03C2 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03C1\u03B9\u03BD \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03BB\u03AE\u03BE\u03B7\u03C2.",
        rangeUnderflow: (e) =>
            `\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.minValue} \u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B3}\u{3B5}\u{3BD}\u{3AD}\u{3C3}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
        unavailableDate:
            "\u0397 \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B7 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B7.",
    },
    "en-US": {
        rangeUnderflow: (e) => `Value must be ${e.minValue} or later.`,
        rangeOverflow: (e) => `Value must be ${e.maxValue} or earlier.`,
        rangeReversed: "Start date must be before end date.",
        unavailableDate: "Selected date unavailable.",
    },
    "es-ES": {
        rangeOverflow: (e) => `El valor debe ser ${e.maxValue} o anterior.`,
        rangeReversed: "La fecha de inicio debe ser anterior a la fecha de finalizaci\xf3n.",
        rangeUnderflow: (e) => `El valor debe ser ${e.minValue} o posterior.`,
        unavailableDate: "Fecha seleccionada no disponible.",
    },
    "et-EE": {
        rangeOverflow: (e) => `V\xe4\xe4rtus peab olema ${e.maxValue} v\xf5i varasem.`,
        rangeReversed: "Alguskuup\xe4ev peab olema enne l\xf5ppkuup\xe4eva.",
        rangeUnderflow: (e) => `V\xe4\xe4rtus peab olema ${e.minValue} v\xf5i hilisem.`,
        unavailableDate: "Valitud kuup\xe4ev pole saadaval.",
    },
    "fi-FI": {
        rangeOverflow: (e) => `Arvon on oltava ${e.maxValue} tai sit\xe4 aikaisempi.`,
        rangeReversed: "Aloitusp\xe4iv\xe4n on oltava ennen lopetusp\xe4iv\xe4\xe4.",
        rangeUnderflow: (e) => `Arvon on oltava ${e.minValue} tai sit\xe4 my\xf6h\xe4isempi.`,
        unavailableDate: "Valittu p\xe4iv\xe4m\xe4\xe4r\xe4 ei ole k\xe4ytett\xe4viss\xe4.",
    },
    "fr-FR": {
        rangeOverflow: (e) => `La valeur doit \xeatre ${e.maxValue} ou ant\xe9rieure.`,
        rangeReversed: "La date de d\xe9but doit \xeatre ant\xe9rieure \xe0 la date de fin.",
        rangeUnderflow: (e) => `La valeur doit \xeatre ${e.minValue} ou ult\xe9rieure.`,
        unavailableDate: "La date s\xe9lectionn\xe9e n\u2019est pas disponible.",
    },
    "he-IL": {
        rangeOverflow: (e) =>
            `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.maxValue} \u{5D0}\u{5D5} \u{5DE}\u{5D5}\u{5E7}\u{5D3}\u{5DD} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
        rangeReversed:
            "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05D4\u05EA\u05D7\u05DC\u05D4 \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E1\u05D9\u05D5\u05DD.",
        rangeUnderflow: (e) =>
            `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.minValue} \u{5D0}\u{5D5} \u{5DE}\u{5D0}\u{5D5}\u{5D7}\u{5E8} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
        unavailableDate:
            "\u05D4\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E0\u05D1\u05D7\u05E8 \u05D0\u05D9\u05E0\u05D5 \u05D6\u05DE\u05D9\u05DF.",
    },
    "hr-HR": {
        rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
        rangeReversed: "Datum po\u010Detka mora biti prije datuma zavr\u0161etka.",
        rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
        unavailableDate: "Odabrani datum nije dostupan.",
    },
    "hu-HU": {
        rangeOverflow: (e) => `Az \xe9rt\xe9knek ${e.maxValue} vagy kor\xe1bbinak kell lennie.`,
        rangeReversed: "A kezd\u0151 d\xe1tumnak a befejez\u0151 d\xe1tumn\xe1l kor\xe1bbinak kell lennie.",
        rangeUnderflow: (e) => `Az \xe9rt\xe9knek ${e.minValue} vagy k\xe9s\u{151}bbinek kell lennie.`,
        unavailableDate: "A kiv\xe1lasztott d\xe1tum nem \xe9rhet\u0151 el.",
    },
    "it-IT": {
        rangeOverflow: (e) => `Il valore deve essere ${e.maxValue} o precedente.`,
        rangeReversed: "La data di inizio deve essere antecedente alla data di fine.",
        rangeUnderflow: (e) => `Il valore deve essere ${e.minValue} o successivo.`,
        unavailableDate: "Data selezionata non disponibile.",
    },
    "ja-JP": {
        rangeOverflow: (e) =>
            `\u{5024}\u{306F} ${e.maxValue} \u{4EE5}\u{4E0B}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
        rangeReversed:
            "\u958B\u59CB\u65E5\u306F\u7D42\u4E86\u65E5\u3088\u308A\u524D\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
        rangeUnderflow: (e) =>
            `\u{5024}\u{306F} ${e.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
        unavailableDate: "\u9078\u629E\u3057\u305F\u65E5\u4ED8\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002",
    },
    "ko-KR": {
        rangeOverflow: (e) =>
            `\u{AC12}\u{C740} ${e.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
        rangeReversed: "\uC2DC\uC791\uC77C\uC740 \uC885\uB8CC\uC77C \uC774\uC804\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.",
        rangeUnderflow: (e) =>
            `\u{AC12}\u{C740} ${e.minValue} \u{C774}\u{C0C1}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
        unavailableDate: "\uC120\uD0DD\uD55C \uB0A0\uC9DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
    },
    "lt-LT": {
        rangeOverflow: (e) => `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.maxValue} arba ankstesn\u{117}.`,
        rangeReversed: "Prad\u017Eios data turi b\u016Bti ankstesn\u0117 nei pabaigos data.",
        rangeUnderflow: (e) => `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.minValue} arba naujesn\u{117}.`,
        unavailableDate: "Pasirinkta data nepasiekiama.",
    },
    "lv-LV": {
        rangeOverflow: (e) => `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.maxValue} vai agr\u{101}kai.`,
        rangeReversed: "S\u0101kuma datumam ir j\u0101b\u016Bt pirms beigu datuma.",
        rangeUnderflow: (e) => `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.minValue} vai v\u{113}l\u{101}kai.`,
        unavailableDate: "Atlas\u012Btais datums nav pieejams.",
    },
    "nb-NO": {
        rangeOverflow: (e) => `Verdien m\xe5 v\xe6re ${e.maxValue} eller tidligere.`,
        rangeReversed: "Startdatoen m\xe5 v\xe6re f\xf8r sluttdatoen.",
        rangeUnderflow: (e) => `Verdien m\xe5 v\xe6re ${e.minValue} eller senere.`,
        unavailableDate: "Valgt dato utilgjengelig.",
    },
    "nl-NL": {
        rangeOverflow: (e) => `Waarde moet ${e.maxValue} of eerder zijn.`,
        rangeReversed: "De startdatum moet voor de einddatum liggen.",
        rangeUnderflow: (e) => `Waarde moet ${e.minValue} of later zijn.`,
        unavailableDate: "Geselecteerde datum niet beschikbaar.",
    },
    "pl-PL": {
        rangeOverflow: (e) =>
            `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.maxValue} lub wcze\u{15B}niejsz\u{105}.`,
        rangeReversed: "Data rozpocz\u0119cia musi by\u0107 wcze\u015Bniejsza ni\u017C data zako\u0144czenia.",
        rangeUnderflow: (e) =>
            `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,
        unavailableDate: "Wybrana data jest niedost\u0119pna.",
    },
    "pt-BR": {
        rangeOverflow: (e) => `O valor deve ser ${e.maxValue} ou anterior.`,
        rangeReversed: "A data inicial deve ser anterior \xe0 data final.",
        rangeUnderflow: (e) => `O valor deve ser ${e.minValue} ou posterior.`,
        unavailableDate: "Data selecionada indispon\xedvel.",
    },
    "pt-PT": {
        rangeOverflow: (e) => `O valor tem de ser ${e.maxValue} ou anterior.`,
        rangeReversed: "A data de in\xedcio deve ser anterior \xe0 data de fim.",
        rangeUnderflow: (e) => `O valor tem de ser ${e.minValue} ou posterior.`,
        unavailableDate: "Data selecionada indispon\xedvel.",
    },
    "ro-RO": {
        rangeOverflow: (e) => `Valoarea trebuie s\u{103} fie ${e.maxValue} sau anterioar\u{103}.`,
        rangeReversed: "Data de \xeenceput trebuie s\u0103 fie anterioar\u0103 datei de sf\xe2r\u0219it.",
        rangeUnderflow: (e) => `Valoarea trebuie s\u{103} fie ${e.minValue} sau ulterioar\u{103}.`,
        unavailableDate: "Data selectat\u0103 nu este disponibil\u0103.",
    },
    "ru-RU": {
        rangeOverflow: (e) =>
            `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435} ${e.maxValue}.`,
        rangeReversed:
            "\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u043F\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0434\u0430\u0442\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F.",
        rangeUnderflow: (e) =>
            `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{44C}\u{448}\u{435} ${e.minValue}.`,
        unavailableDate:
            "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u0430\u044F \u0434\u0430\u0442\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430.",
    },
    "sk-SK": {
        rangeOverflow: (e) => `Hodnota mus\xed by\u{165} ${e.maxValue} alebo skor\u{161}ia.`,
        rangeReversed: "D\xe1tum za\u010Diatku mus\xed by\u0165 skor\u0161\xed ako d\xe1tum konca.",
        rangeUnderflow: (e) => `Hodnota mus\xed by\u{165} ${e.minValue} alebo neskor\u{161}ia.`,
        unavailableDate: "Vybrat\xfd d\xe1tum je nedostupn\xfd.",
    },
    "sl-SI": {
        rangeOverflow: (e) => `Vrednost mora biti ${e.maxValue} ali starej\u{161}a.`,
        rangeReversed: "Za\u010Detni datum mora biti pred kon\u010Dnim datumom.",
        rangeUnderflow: (e) => `Vrednost mora biti ${e.minValue} ali novej\u{161}a.`,
        unavailableDate: "Izbrani datum ni na voljo.",
    },
    "sr-SP": {
        rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
        rangeReversed: "Datum po\u010Detka mora biti pre datuma zavr\u0161etka.",
        rangeUnderflow: (e) => `Vrednost mora da bude ${e.minValue} ili novija.`,
        unavailableDate: "Izabrani datum nije dostupan.",
    },
    "sv-SE": {
        rangeOverflow: (e) => `V\xe4rdet m\xe5ste vara ${e.maxValue} eller tidigare.`,
        rangeReversed: "Startdatumet m\xe5ste vara f\xf6re slutdatumet.",
        rangeUnderflow: (e) => `V\xe4rdet m\xe5ste vara ${e.minValue} eller senare.`,
        unavailableDate: "Det valda datumet \xe4r inte tillg\xe4ngligt.",
    },
    "tr-TR": {
        rangeOverflow: (e) => `De\u{11F}er, ${e.maxValue} veya \xf6ncesi olmal\u{131}d\u{131}r.`,
        rangeReversed: "Ba\u015Flang\u0131\xe7 tarihi biti\u015F tarihinden \xf6nce olmal\u0131d\u0131r.",
        rangeUnderflow: (e) => `De\u{11F}er, ${e.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,
        unavailableDate: "Se\xe7ilen tarih kullan\u0131lam\u0131yor.",
    },
    "uk-UA": {
        rangeOverflow: (e) =>
            `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435} ${e.maxValue}.`,
        rangeReversed:
            "\u0414\u0430\u0442\u0430 \u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043C\u0430\u0454 \u043F\u0435\u0440\u0435\u0434\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u0442\u0456 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F.",
        rangeUnderflow: (e) =>
            `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{456}\u{448}\u{435} ${e.minValue}.`,
        unavailableDate:
            "\u0412\u0438\u0431\u0440\u0430\u043D\u0430 \u0434\u0430\u0442\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430.",
    },
    "zh-CN": {
        rangeOverflow: (e) =>
            `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,
        rangeReversed: "\u5F00\u59CB\u65E5\u671F\u5FC5\u987B\u65E9\u4E8E\u7ED3\u675F\u65E5\u671F\u3002",
        rangeUnderflow: (e) =>
            `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,
        unavailableDate: "\u6240\u9009\u65E5\u671F\u4E0D\u53EF\u7528\u3002",
    },
    "zh-TW": {
        rangeOverflow: (e) => `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{3002}`,
        rangeReversed: "\u958B\u59CB\u65E5\u671F\u5FC5\u9808\u5728\u7D50\u675F\u65E5\u671F\u4E4B\u524D\u3002",
        rangeUnderflow: (e) => `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{3002}`,
        unavailableDate: "\u6240\u9078\u65E5\u671F\u7121\u6CD5\u4F7F\u7528\u3002",
    },
};
var i = t(515702),
    l = t(99478),
    o = t(376472),
    u = t(939546),
    s = t(731692),
    d = t(944490),
    c = t(339241),
    m = t(64700);
let h = new (0, s.B)((n = r) && n.__esModule ? n.default : n);
function D() {
    let e = ("u" > typeof navigator && (navigator.language || navigator.userLanguage)) || "en-US";
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e]);
    } catch {
        e = "en-US";
    }
    return e;
}
function y(e, a, t, n, r) {
    let l = null != e && null != t && e.compare(t) > 0,
        o = null != e && null != a && 0 > e.compare(a),
        u = (null != e && (null == n ? void 0 : n(e))) || !1,
        c = l || o || u,
        m = [];
    if (c) {
        let e = D(),
            n = s.B.getGlobalDictionaryForPackage("@react-stately/datepicker") || h,
            c = new (0, d.J)(e, n),
            y = new (0, i.p)(e, v({}, r)),
            p = y.resolvedOptions().timeZone;
        o && null != a && m.push(c.format("rangeUnderflow", { minValue: y.format(a.toDate(p)) })),
            l && null != t && m.push(c.format("rangeOverflow", { maxValue: y.format(t.toDate(p)) })),
            u && m.push(c.format("unavailableDate"));
    }
    return {
        isInvalid: c,
        validationErrors: m,
        validationDetails: {
            badInput: u,
            customError: !1,
            patternMismatch: !1,
            rangeOverflow: l,
            rangeUnderflow: o,
            stepMismatch: !1,
            tooLong: !1,
            tooShort: !1,
            typeMismatch: !1,
            valueMissing: !1,
            valid: !c,
        },
    };
}
function p(e, a, t, n, r) {
    var i, l;
    let o = y(null != (i = null == e ? void 0 : e.start) ? i : null, a, t, n, r),
        u = y(null != (l = null == e ? void 0 : e.end) ? l : null, a, t, n, r),
        d = (0, c.cX)(o, u);
    if ((null == e ? void 0 : e.end) != null && null != e.start && 0 > e.end.compare(e.start)) {
        let e = s.B.getGlobalDictionaryForPackage("@react-stately/datepicker") || h;
        d = (0, c.cX)(d, {
            isInvalid: !0,
            validationErrors: [e.getStringForLocale("rangeReversed", D())],
            validationDetails: { ...c.oE, rangeUnderflow: !0, rangeOverflow: !0, valid: !1 },
        });
    }
    return d;
}
let g = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit", second: "2-digit" },
    f = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" };
function v(e, a) {
    var t;
    e = { ...(a.shouldForceLeadingZeros ? f : g), ...e };
    let n = a.granularity || "minute",
        r = Object.keys(e),
        i = r.indexOf(null != (t = a.maxGranularity) ? t : "year");
    i < 0 && (i = 0);
    let l = r.indexOf(n);
    if ((l < 0 && (l = 2), i > l)) throw Error("maxGranularity must be greater than granularity");
    let o = r.slice(i, l + 1).reduce((a, t) => ((a[t] = e[t]), a), {});
    return (
        null != a.hourCycle && (o.hour12 = 12 === a.hourCycle),
        (o.timeZone = a.timeZone || "UTC"),
        ("hour" === n || "minute" === n || "second" === n) &&
            a.timeZone &&
            !a.hideTimeZone &&
            (o.timeZoneName = "short"),
        a.showEra && 0 === i && (o.era = "short"),
        o
    );
}
function b(e) {
    return e && "hour" in e ? e : new (0, l.gX)();
}
function R(e, a) {
    return null === e ? null : e ? (0, o.yP)(e, a) : void 0;
}
function $(e, a, t, n) {
    if (e) return R(e, t);
    let r = (0, o.yP)((0, u.tB)(null != n ? n : (0, u.Xj)()).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }), t);
    return "year" === a || "month" === a || "day" === a ? (0, o.gw)(r) : n ? r : (0, o.tR)(r);
}
function w(e, a) {
    let t = e && "timeZone" in e ? e.timeZone : void 0,
        n = e && "minute" in e ? "minute" : "day";
    if (e && a && !(a in e)) throw Error("Invalid granularity " + a + " for value " + e.toString());
    let [r, i] = (0, m.useState)([n, t]);
    return e && (r[0] !== n || r[1] !== t) && i([n, t]), a || (a = e ? n : r[0]), [a, e ? t : r[1]];
}
