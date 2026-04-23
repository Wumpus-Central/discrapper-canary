t.d(a, { $l: () => b, eD: () => p, o_: () => $, nz: () => y, nf: () => R, bf: () => w, id: () => v });
var n,
    r = {};
r = {
    "ar-AE": {
        rangeOverflow: (e) =>
            `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.maxValue} \u{623}\u{648} \u{642}\u{628}\u{644} \u{630}\u{644}\u{643}.`,
        rangeReversed: "تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.",
        rangeUnderflow: (e) =>
            `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.minValue} \u{623}\u{648} \u{628}\u{639}\u{62F} \u{630}\u{644}\u{643}.`,
        unavailableDate: "البيانات المحددة غير متاحة.",
    },
    "bg-BG": {
        rangeOverflow: (e) =>
            `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.maxValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{440}\u{430}\u{43D}\u{43D}\u{430}.`,
        rangeReversed: "Началната дата трябва да е преди крайната.",
        rangeUnderflow: (e) =>
            `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.minValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{43A}\u{44A}\u{441}\u{43D}\u{43E}.`,
        unavailableDate: "Избраната дата не е налична.",
    },
    "cs-CZ": {
        rangeOverflow: (e) => `Hodnota mus\xed b\xfdt ${e.maxValue} nebo d\u{159}\xedv\u{11B}j\u{161}\xed.`,
        rangeReversed: "Datum zah\xe1jen\xed mus\xed předch\xe1zet datu ukončen\xed.",
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
        rangeReversed: "Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.",
        rangeUnderflow: (e) =>
            `\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.minValue} \u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B3}\u{3B5}\u{3BD}\u{3AD}\u{3C3}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
        unavailableDate: "Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη.",
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
        unavailableDate: "La date s\xe9lectionn\xe9e n’est pas disponible.",
    },
    "he-IL": {
        rangeOverflow: (e) =>
            `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.maxValue} \u{5D0}\u{5D5} \u{5DE}\u{5D5}\u{5E7}\u{5D3}\u{5DD} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
        rangeReversed: "תאריך ההתחלה חייב להיות לפני תאריך הסיום.",
        rangeUnderflow: (e) =>
            `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.minValue} \u{5D0}\u{5D5} \u{5DE}\u{5D0}\u{5D5}\u{5D7}\u{5E8} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
        unavailableDate: "התאריך הנבחר אינו זמין.",
    },
    "hr-HR": {
        rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
        rangeReversed: "Datum početka mora biti prije datuma završetka.",
        rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
        unavailableDate: "Odabrani datum nije dostupan.",
    },
    "hu-HU": {
        rangeOverflow: (e) => `Az \xe9rt\xe9knek ${e.maxValue} vagy kor\xe1bbinak kell lennie.`,
        rangeReversed: "A kezdő d\xe1tumnak a befejező d\xe1tumn\xe1l kor\xe1bbinak kell lennie.",
        rangeUnderflow: (e) => `Az \xe9rt\xe9knek ${e.minValue} vagy k\xe9s\u{151}bbinek kell lennie.`,
        unavailableDate: "A kiv\xe1lasztott d\xe1tum nem \xe9rhető el.",
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
        rangeReversed: "開始日は終了日より前にする必要があります。",
        rangeUnderflow: (e) =>
            `\u{5024}\u{306F} ${e.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
        unavailableDate: "選択した日付は使用できません。",
    },
    "ko-KR": {
        rangeOverflow: (e) =>
            `\u{AC12}\u{C740} ${e.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
        rangeReversed: "시작일은 종료일 이전이어야 합니다.",
        rangeUnderflow: (e) =>
            `\u{AC12}\u{C740} ${e.minValue} \u{C774}\u{C0C1}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
        unavailableDate: "선택한 날짜를 사용할 수 없습니다.",
    },
    "lt-LT": {
        rangeOverflow: (e) => `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.maxValue} arba ankstesn\u{117}.`,
        rangeReversed: "Pradžios data turi būti ankstesnė nei pabaigos data.",
        rangeUnderflow: (e) => `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.minValue} arba naujesn\u{117}.`,
        unavailableDate: "Pasirinkta data nepasiekiama.",
    },
    "lv-LV": {
        rangeOverflow: (e) => `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.maxValue} vai agr\u{101}kai.`,
        rangeReversed: "Sākuma datumam ir jābūt pirms beigu datuma.",
        rangeUnderflow: (e) => `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.minValue} vai v\u{113}l\u{101}kai.`,
        unavailableDate: "Atlasītais datums nav pieejams.",
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
        rangeReversed: "Data rozpoczęcia musi być wcześniejsza niż data zakończenia.",
        rangeUnderflow: (e) =>
            `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,
        unavailableDate: "Wybrana data jest niedostępna.",
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
        rangeReversed: "Data de \xeenceput trebuie să fie anterioară datei de sf\xe2rșit.",
        rangeUnderflow: (e) => `Valoarea trebuie s\u{103} fie ${e.minValue} sau ulterioar\u{103}.`,
        unavailableDate: "Data selectată nu este disponibilă.",
    },
    "ru-RU": {
        rangeOverflow: (e) =>
            `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435} ${e.maxValue}.`,
        rangeReversed: "Дата начала должна предшествовать дате окончания.",
        rangeUnderflow: (e) =>
            `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{44C}\u{448}\u{435} ${e.minValue}.`,
        unavailableDate: "Выбранная дата недоступна.",
    },
    "sk-SK": {
        rangeOverflow: (e) => `Hodnota mus\xed by\u{165} ${e.maxValue} alebo skor\u{161}ia.`,
        rangeReversed: "D\xe1tum začiatku mus\xed byť skorš\xed ako d\xe1tum konca.",
        rangeUnderflow: (e) => `Hodnota mus\xed by\u{165} ${e.minValue} alebo neskor\u{161}ia.`,
        unavailableDate: "Vybrat\xfd d\xe1tum je nedostupn\xfd.",
    },
    "sl-SI": {
        rangeOverflow: (e) => `Vrednost mora biti ${e.maxValue} ali starej\u{161}a.`,
        rangeReversed: "Začetni datum mora biti pred končnim datumom.",
        rangeUnderflow: (e) => `Vrednost mora biti ${e.minValue} ali novej\u{161}a.`,
        unavailableDate: "Izbrani datum ni na voljo.",
    },
    "sr-SP": {
        rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
        rangeReversed: "Datum početka mora biti pre datuma završetka.",
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
        rangeReversed: "Başlangı\xe7 tarihi bitiş tarihinden \xf6nce olmalıdır.",
        rangeUnderflow: (e) => `De\u{11F}er, ${e.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,
        unavailableDate: "Se\xe7ilen tarih kullanılamıyor.",
    },
    "uk-UA": {
        rangeOverflow: (e) =>
            `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435} ${e.maxValue}.`,
        rangeReversed: "Дата початку має передувати даті завершення.",
        rangeUnderflow: (e) =>
            `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{456}\u{448}\u{435} ${e.minValue}.`,
        unavailableDate: "Вибрана дата недоступна.",
    },
    "zh-CN": {
        rangeOverflow: (e) =>
            `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,
        rangeReversed: "开始日期必须早于结束日期。",
        rangeUnderflow: (e) =>
            `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,
        unavailableDate: "所选日期不可用。",
    },
    "zh-TW": {
        rangeOverflow: (e) => `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{3002}`,
        rangeReversed: "開始日期必須在結束日期之前。",
        rangeUnderflow: (e) => `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{3002}`,
        unavailableDate: "所選日期無法使用。",
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
