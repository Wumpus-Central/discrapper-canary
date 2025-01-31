!(function (e, t) {
    t(n(913527));
})(0, function (e) {
    var t = {
            1: '༡',
            2: '༢',
            3: '༣',
            4: '༤',
            5: '༥',
            6: '༦',
            7: '༧',
            8: '༨',
            9: '༩',
            0: '༠'
        },
        n = {
            '༡': '1',
            '༢': '2',
            '༣': '3',
            '༤': '4',
            '༥': '5',
            '༦': '6',
            '༧': '7',
            '༨': '8',
            '༩': '9',
            '༠': '0'
        };
    return e.defineLocale('bo', {
        months: 'ཟླ\u0F0Bབ\u0F0Bདང\u0F0Bཔོ_ཟླ\u0F0Bབ\u0F0Bགཉིས\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bགསུམ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཞི\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bལྔ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདྲུག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབདུན\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབརྒྱད\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདགུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཅིག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཉིས\u0F0Bཔ'.split('_'),
        monthsShort: 'ཟླ\u0F0Bབ\u0F0Bདང\u0F0Bཔོ_ཟླ\u0F0Bབ\u0F0Bགཉིས\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bགསུམ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཞི\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bལྔ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདྲུག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབདུན\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབརྒྱད\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདགུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཅིག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཉིས\u0F0Bཔ'.split('_'),
        weekdays: 'གཟའ\u0F0Bཉི\u0F0Bམ\u0F0B_གཟའ\u0F0Bཟླ\u0F0Bབ\u0F0B_གཟའ\u0F0Bམིག\u0F0Bདམར\u0F0B_གཟའ\u0F0Bལྷག\u0F0Bཔ\u0F0B_གཟའ\u0F0Bཕུར\u0F0Bབུ_གཟའ\u0F0Bཔ\u0F0Bསངས\u0F0B_གཟའ\u0F0Bསྤེན\u0F0Bཔ\u0F0B'.split('_'),
        weekdaysShort: 'ཉི\u0F0Bམ\u0F0B_ཟླ\u0F0Bབ\u0F0B_མིག\u0F0Bདམར\u0F0B_ལྷག\u0F0Bཔ\u0F0B_ཕུར\u0F0Bབུ_པ\u0F0Bསངས\u0F0B_སྤེན\u0F0Bཔ\u0F0B'.split('_'),
        weekdaysMin: 'ཉི\u0F0Bམ\u0F0B_ཟླ\u0F0Bབ\u0F0B_མིག\u0F0Bདམར\u0F0B_ལྷག\u0F0Bཔ\u0F0B_ཕུར\u0F0Bབུ_པ\u0F0Bསངས\u0F0B_སྤེན\u0F0Bཔ\u0F0B'.split('_'),
        longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm',
            LLLL: 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar: {
            sameDay: '[དི\u0F0Bརིང] LT',
            nextDay: '[སང\u0F0Bཉིན] LT',
            nextWeek: '[བདུན\u0F0Bཕྲག\u0F0Bརྗེས\u0F0Bམ], LT',
            lastDay: '[ཁ\u0F0Bསང] LT',
            lastWeek: '[བདུན\u0F0Bཕྲག\u0F0Bམཐའ\u0F0Bམ] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s ལ\u0F0B',
            past: '%s སྔན\u0F0Bལ',
            s: 'ལམ\u0F0Bསང',
            ss: '%d སྐར\u0F0Bཆ\u0F0D',
            m: 'སྐར\u0F0Bམ\u0F0Bགཅིག',
            mm: '%d སྐར\u0F0Bམ',
            h: 'ཆུ\u0F0Bཚོད\u0F0Bགཅིག',
            hh: '%d ཆུ\u0F0Bཚོད',
            d: 'ཉིན\u0F0Bགཅིག',
            dd: '%d ཉིན\u0F0B',
            M: 'ཟླ\u0F0Bབ\u0F0Bགཅིག',
            MM: '%d ཟླ\u0F0Bབ',
            y: 'ལོ\u0F0Bགཅིག',
            yy: '%d ལོ'
        },
        preparse: function (e) {
            return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
                return n[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return t[e];
            });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function (e, t) {
            return (12 === e && (e = 0), ('མཚན\u0F0Bམོ' === t && e >= 4) || ('ཉིན\u0F0Bགུང' === t && e < 5) || 'དགོང\u0F0Bདག' === t) ? e + 12 : e;
        },
        meridiem: function (e, t, n) {
            return e < 4 ? 'མཚན\u0F0Bམོ' : e < 10 ? 'ཞོགས\u0F0Bཀས' : e < 17 ? 'ཉིན\u0F0Bགུང' : e < 20 ? 'དགོང\u0F0Bདག' : 'མཚན\u0F0Bམོ';
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
});
