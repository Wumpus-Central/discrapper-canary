!(function (e, t) {
    t(n(913527));
})(0, function (e) {
    var t = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
        n = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
    function r(e) {
        return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
    }
    function i(e, t, n) {
        var i = e + ' ';
        switch (n) {
            case 'ss':
                return i + (r(e) ? 'sekundy' : 'sekund');
            case 'm':
                return t ? 'minuta' : 'minutę';
            case 'mm':
                return i + (r(e) ? 'minuty' : 'minut');
            case 'h':
                return t ? 'godzina' : 'godzinę';
            case 'hh':
                return i + (r(e) ? 'godziny' : 'godzin');
            case 'MM':
                return i + (r(e) ? 'miesiące' : 'miesięcy');
            case 'yy':
                return i + (r(e) ? 'lata' : 'lat');
        }
    }
    return e.defineLocale('pl', {
        months: function (e, r) {
            return e ? ('' === r ? '(' + n[e.month()] + '|' + t[e.month()] + ')' : /D MMMM/.test(r) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[W niedzielę o] LT';
                    case 2:
                        return '[We wtorek o] LT';
                    case 3:
                        return '[W środę o] LT';
                    case 6:
                        return '[W sobotę o] LT';
                    default:
                        return '[W] dddd [o] LT';
                }
            },
            lastDay: '[Wczoraj o] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[W zeszłą niedzielę o] LT';
                    case 3:
                        return '[W zeszłą środę o] LT';
                    case 6:
                        return '[W zeszłą sobotę o] LT';
                    default:
                        return '[W zeszły] dddd [o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: '%s temu',
            s: 'kilka sekund',
            ss: i,
            m: i,
            mm: i,
            h: i,
            hh: i,
            d: '1 dzień',
            dd: '%d dni',
            M: 'miesiąc',
            MM: i,
            y: 'rok',
            yy: i
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
});
