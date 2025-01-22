!(function (e, n) {
    n(r(913527));
})(0, function (e) {
    var n = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
        r = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
    function i(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10);
    }
    function a(e, n, r, a) {
        var o = e + ' ';
        switch (r) {
            case 's':
                return n || a ? 'pár sekund' : 'pár sekundami';
            case 'ss':
                if (n || a) return o + (i(e) ? 'sekundy' : 'sekund');
                return o + 'sekundami';
            case 'm':
                return n ? 'minuta' : a ? 'minutu' : 'minutou';
            case 'mm':
                if (n || a) return o + (i(e) ? 'minuty' : 'minut');
                return o + 'minutami';
            case 'h':
                return n ? 'hodina' : a ? 'hodinu' : 'hodinou';
            case 'hh':
                if (n || a) return o + (i(e) ? 'hodiny' : 'hodin');
                return o + 'hodinami';
            case 'd':
                return n || a ? 'den' : 'dnem';
            case 'dd':
                if (n || a) return o + (i(e) ? 'dny' : 'dní');
                return o + 'dny';
            case 'M':
                return n || a ? 'měsíc' : 'měsícem';
            case 'MM':
                if (n || a) return o + (i(e) ? 'měsíce' : 'měsíců');
                return o + 'měsíci';
            case 'y':
                return n || a ? 'rok' : 'rokem';
            case 'yy':
                if (n || a) return o + (i(e) ? 'roky' : 'let');
                return o + 'lety';
        }
    }
    return e.defineLocale('cs', {
        months: n,
        monthsShort: r,
        monthsParse: (function (e, n) {
            var r,
                i = [];
            for (r = 0; r < 12; r++) i[r] = RegExp('^' + e[r] + '$|^' + n[r] + '$', 'i');
            return i;
        })(n, r),
        shortMonthsParse: (function (e) {
            var n,
                r = [];
            for (n = 0; n < 12; n++) r[n] = RegExp('^' + e[n] + '$', 'i');
            return r;
        })(r),
        longMonthsParse: (function (e) {
            var n,
                r = [];
            for (n = 0; n < 12; n++) r[n] = RegExp('^' + e[n] + '$', 'i');
            return r;
        })(n),
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
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
});
