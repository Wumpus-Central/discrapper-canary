!(function (e, n) {
    n(r(913527));
})(0, function (e) {
    var n = 'pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');
    function r(e) {
        var n = e;
        return (n = -1 !== e.indexOf('jaj') ? n.slice(0, -3) + 'leS' : -1 !== e.indexOf('jar') ? n.slice(0, -3) + 'waQ' : -1 !== e.indexOf('DIS') ? n.slice(0, -3) + 'nem' : n + ' pIq');
    }
    function i(e) {
        var n = e;
        return (n = -1 !== e.indexOf('jaj') ? n.slice(0, -3) + 'Hu\u2019' : -1 !== e.indexOf('jar') ? n.slice(0, -3) + 'wen' : -1 !== e.indexOf('DIS') ? n.slice(0, -3) + 'ben' : n + ' ret');
    }
    function a(e, n, r, i) {
        var a = o(e);
        switch (r) {
            case 'ss':
                return a + ' lup';
            case 'mm':
                return a + ' tup';
            case 'hh':
                return a + ' rep';
            case 'dd':
                return a + ' jaj';
            case 'MM':
                return a + ' jar';
            case 'yy':
                return a + ' DIS';
        }
    }
    function o(e) {
        var r = Math.floor((e % 1000) / 100),
            i = Math.floor((e % 100) / 10),
            a = e % 10,
            o = '';
        return r > 0 && (o += n[r] + 'vatlh'), i > 0 && (o += ('' !== o ? ' ' : '') + n[i] + 'maH'), a > 0 && (o += ('' !== o ? ' ' : '') + n[a]), '' === o ? 'pagh' : o;
    }
    return e.defineLocale('tlh', {
        months: 'tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019'.split('_'),
        monthsShort: 'jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019'.split('_'),
        monthsParseExact: !0,
        weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[DaHjaj] LT',
            nextDay: '[wa\u2019leS] LT',
            nextWeek: 'LLL',
            lastDay: '[wa\u2019Hu\u2019] LT',
            lastWeek: 'LLL',
            sameElse: 'L'
        },
        relativeTime: {
            future: r,
            past: i,
            s: 'puS lup',
            ss: a,
            m: 'wa\u2019 tup',
            mm: a,
            h: 'wa\u2019 rep',
            hh: a,
            d: 'wa\u2019 jaj',
            dd: a,
            M: 'wa\u2019 jar',
            MM: a,
            y: 'wa\u2019 DIS',
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
