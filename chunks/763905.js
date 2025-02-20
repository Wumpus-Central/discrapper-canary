!(function (e, t) {
    t(n(913527));
})(0, function (e) {
    function t(e, t, n, r) {
        var i = e + ' ';
        switch (n) {
            case 's':
                return t || r ? 'nekaj sekund' : 'nekaj sekundami';
            case 'ss':
                return 1 === e ? (i += t ? 'sekundo' : 'sekundi') : 2 === e ? (i += t || r ? 'sekundi' : 'sekundah') : e < 5 ? (i += t || r ? 'sekunde' : 'sekundah') : (i += 'sekund'), i;
            case 'm':
                return t ? 'ena minuta' : 'eno minuto';
            case 'mm':
                return 1 === e ? (i += t ? 'minuta' : 'minuto') : 2 === e ? (i += t || r ? 'minuti' : 'minutama') : e < 5 ? (i += t || r ? 'minute' : 'minutami') : (i += t || r ? 'minut' : 'minutami'), i;
            case 'h':
                return t ? 'ena ura' : 'eno uro';
            case 'hh':
                return 1 === e ? (i += t ? 'ura' : 'uro') : 2 === e ? (i += t || r ? 'uri' : 'urama') : e < 5 ? (i += t || r ? 'ure' : 'urami') : (i += t || r ? 'ur' : 'urami'), i;
            case 'd':
                return t || r ? 'en dan' : 'enim dnem';
            case 'dd':
                return 1 === e ? (i += t || r ? 'dan' : 'dnem') : 2 === e ? (i += t || r ? 'dni' : 'dnevoma') : (i += t || r ? 'dni' : 'dnevi'), i;
            case 'M':
                return t || r ? 'en mesec' : 'enim mesecem';
            case 'MM':
                return 1 === e ? (i += t || r ? 'mesec' : 'mesecem') : 2 === e ? (i += t || r ? 'meseca' : 'mesecema') : e < 5 ? (i += t || r ? 'mesece' : 'meseci') : (i += t || r ? 'mesecev' : 'meseci'), i;
            case 'y':
                return t || r ? 'eno leto' : 'enim letom';
            case 'yy':
                return 1 === e ? (i += t || r ? 'leto' : 'letom') : 2 === e ? (i += t || r ? 'leti' : 'letoma') : e < 5 ? (i += t || r ? 'leta' : 'leti') : (i += t || r ? 'let' : 'leti'), i;
        }
    }
    return e.defineLocale('sl', {
        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danes ob] LT',
            nextDay: '[jutri ob] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[v] [nedeljo] [ob] LT';
                    case 3:
                        return '[v] [sredo] [ob] LT';
                    case 6:
                        return '[v] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[v] dddd [ob] LT';
                }
            },
            lastDay: '[včeraj ob] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[prejšnjo] [nedeljo] [ob] LT';
                    case 3:
                        return '[prejšnjo] [sredo] [ob] LT';
                    case 6:
                        return '[prejšnjo] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prejšnji] dddd [ob] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'čez %s',
            past: 'pred %s',
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 7
        }
    });
});
