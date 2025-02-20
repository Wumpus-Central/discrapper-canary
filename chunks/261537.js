!(function (e, t) {
    t(n(913527));
})(0, function (e) {
    var t = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    function n(e, t, n, r) {
        var i = e;
        switch (n) {
            case 's':
                return r || t ? 'néhány másodperc' : 'néhány másodperce';
            case 'ss':
                return i + (r || t) ? ' másodperc' : ' másodperce';
            case 'm':
                return 'egy' + (r || t ? ' perc' : ' perce');
            case 'mm':
                return i + (r || t ? ' perc' : ' perce');
            case 'h':
                return 'egy' + (r || t ? ' óra' : ' órája');
            case 'hh':
                return i + (r || t ? ' óra' : ' órája');
            case 'd':
                return 'egy' + (r || t ? ' nap' : ' napja');
            case 'dd':
                return i + (r || t ? ' nap' : ' napja');
            case 'M':
                return 'egy' + (r || t ? ' hónap' : ' hónapja');
            case 'MM':
                return i + (r || t ? ' hónap' : ' hónapja');
            case 'y':
                return 'egy' + (r || t ? ' év' : ' éve');
            case 'yy':
                return i + (r || t ? ' év' : ' éve');
        }
        return '';
    }
    function r(e) {
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
                return r.call(this, !0);
            },
            lastDay: '[tegnap] LT[-kor]',
            lastWeek: function () {
                return r.call(this, !1);
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
