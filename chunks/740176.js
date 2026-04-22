!(function (e) {
    "use strict";
    function t(e, t, n, r) {
        var i = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"],
        };
        return t ? i[n][0] : i[n][1];
    }
    function n(e) {
        if (isNaN((e = parseInt(e, 10)))) return !1;
        if (e < 0) return !0;
        if (e < 10) return !!(4 <= e) && !!(e <= 7);
        if (e < 100) {
            var t = e % 10,
                r = e / 10;
            return 0 === t ? n(r) : n(t);
        }
        if (!(e < 1e4)) return n((e /= 1e3));
        for (; e >= 10; ) e /= 10;
        return n(e);
    }
    e.defineLocale("lb", {
        months: "Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
        weekdaysShort: "So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm [Auer]",
            LTS: "H:mm:ss [Auer]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm [Auer]",
            LLLL: "dddd, D. MMMM YYYY H:mm [Auer]",
        },
        calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[G\xebschter um] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 2:
                    case 4:
                        return "[Leschten] dddd [um] LT";
                    default:
                        return "[Leschte] dddd [um] LT";
                }
            },
        },
        relativeTime: {
            future: function (e) {
                return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
            },
            past: function (e) {
                return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
            },
            s: "e puer Sekonnen",
            ss: "%d Sekonnen",
            m: t,
            mm: "%d Minutten",
            h: t,
            hh: "%d Stonnen",
            d: t,
            dd: "%d Deeg",
            M: t,
            MM: "%d M\xe9int",
            y: t,
            yy: "%d Joer",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
    });
})(n(989349));
