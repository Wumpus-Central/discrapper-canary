!(function (e, t) {
    t(n(913527));
})(0, function (e) {
    var t = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    function n(e, t, n, i) {
        var r = e;
        switch (n) {
            case 's':
                return i || t ? 'néhány másodperc' : 'néhány másodperce';
            case 'ss':
                return r + (i || t) ? ' másodperc' : ' másodperce';
            case 'm':
                return 'egy' + (i || t ? ' perc' : ' perce');
            case 'mm':
                return r + (i || t ? ' perc' : ' perce');
            case 'h':
                return 'egy' + (i || t ? ' óra' : ' órája');
            case 'hh':
                return r + (i || t ? ' óra' : ' órája');
            case 'd':
                return 'egy' + (i || t ? ' nap' : ' napja');
            case 'dd':
                return r + (i || t ? ' nap' : ' napja');
            case 'M':
                return 'egy' + (i || t ? ' hónap' : ' hónapja');
            case 'MM':
                return r + (i || t ? ' hónap' : ' hónapja');
            case 'y':
                return 'egy' + (i || t ? ' év' : ' éve');
            case 'yy':
                return r + (i || t ? ' év' : ' éve');
        }
        return '';
    }
    function i(e) {
        return (e ? '' : '[múlt] ') + '[' + t[this.day()] + '] LT[-kor]';
    }
    return e.defineLocale('hu', {
        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'YYYY.MM.DD.',
            LL: 'YYYY. MMMM D.',
            LLL: 'YYYY. MMMM D. H:mm',
            LLLL: 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function (e) {
            return 'u' === e.charAt(1).toLowerCase();
        },
        meridiem: function (e, t, n) {
            return e < 12 ? (!0 === n ? 'de' : 'DE') : !0 === n ? 'du' : 'DU';
        },
        calendar: {
            sameDay: '[ma] LT[-kor]',
            nextDay: '[holnap] LT[-kor]',
            nextWeek: function () {
                return i.call(this, !0);
            },
            lastDay: '[tegnap] LT[-kor]',
            lastWeek: function () {
                return i.call(this, !1);
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s múlva',
            past: '%s',
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
});
