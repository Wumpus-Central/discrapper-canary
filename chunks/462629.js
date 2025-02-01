!(function (e, t) {
    t(n(913527));
})(0, function (e) {
    var t = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
        n = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
    function i(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10);
    }
    function r(e, t, n, r) {
        var a = e + ' ';
        switch (n) {
            case 's':
                return t || r ? 'pár sekund' : 'pár sekundami';
            case 'ss':
                if (t || r) return a + (i(e) ? 'sekundy' : 'sekund');
                return a + 'sekundami';
            case 'm':
                return t ? 'minuta' : r ? 'minutu' : 'minutou';
            case 'mm':
                if (t || r) return a + (i(e) ? 'minuty' : 'minut');
                return a + 'minutami';
            case 'h':
                return t ? 'hodina' : r ? 'hodinu' : 'hodinou';
            case 'hh':
                if (t || r) return a + (i(e) ? 'hodiny' : 'hodin');
                return a + 'hodinami';
            case 'd':
                return t || r ? 'den' : 'dnem';
            case 'dd':
                if (t || r) return a + (i(e) ? 'dny' : 'dní');
                return a + 'dny';
            case 'M':
                return t || r ? 'měsíc' : 'měsícem';
            case 'MM':
                if (t || r) return a + (i(e) ? 'měsíce' : 'měsíců');
                return a + 'měsíci';
            case 'y':
                return t || r ? 'rok' : 'rokem';
            case 'yy':
                if (t || r) return a + (i(e) ? 'roky' : 'let');
                return a + 'lety';
        }
    }
    return e.defineLocale('cs', {
        months: t,
        monthsShort: n,
        monthsParse: (function (e, t) {
            var n,
                i = [];
            for (n = 0; n < 12; n++) i[n] = RegExp('^' + e[n] + '$|^' + t[n] + '$', 'i');
            return i;
        })(t, n),
        shortMonthsParse: (function (e) {
            var t,
                n = [];
            for (t = 0; t < 12; t++) n[t] = RegExp('^' + e[t] + '$', 'i');
            return n;
        })(n),
        longMonthsParse: (function (e) {
            var t,
                n = [];
            for (t = 0; t < 12; t++) n[t] = RegExp('^' + e[t] + '$', 'i');
            return n;
        })(t),
        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
            l: 'D. M. YYYY'
        },
        calendar: {
            sameDay: '[dnes v] LT',
            nextDay: '[zítra v] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[v neděli v] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [v] LT';
                    case 3:
                        return '[ve středu v] LT';
                    case 4:
                        return '[ve čtvrtek v] LT';
                    case 5:
                        return '[v pátek v] LT';
                    case 6:
                        return '[v sobotu v] LT';
                }
            },
            lastDay: '[včera v] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[minulou neděli v] LT';
                    case 1:
                    case 2:
                        return '[minulé] dddd [v] LT';
                    case 3:
                        return '[minulou středu v] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [v] LT';
                    case 6:
                        return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: 'před %s',
            s: r,
            ss: r,
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: r,
            dd: r,
            M: r,
            MM: r,
            y: r,
            yy: r
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
});
