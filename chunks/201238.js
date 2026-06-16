!(function (e) {
    "use strict";
    var t = {
        ss: "sekund\u0117_sekund\u017Ei\u0173_sekundes",
        m: "minut\u0117_minut\u0117s_minut\u0119",
        mm: "minut\u0117s_minu\u010Di\u0173_minutes",
        h: "valanda_valandos_valand\u0105",
        hh: "valandos_valand\u0173_valandas",
        d: "diena_dienos_dien\u0105",
        dd: "dienos_dien\u0173_dienas",
        M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F",
        MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
        y: "metai_met\u0173_metus",
        yy: "metai_met\u0173_metus",
    };
    function n(e, t, n, i) {
        return t ? r(n)[0] : i ? r(n)[1] : r(n)[2];
    }
    function i(e) {
        return e % 10 == 0 || (e > 10 && e < 20);
    }
    function r(e) {
        return t[e].split("_");
    }
    function s(e, t, s, a) {
        var o = e + " ";
        return 1 === e
            ? o + n(e, t, s[0], a)
            : t
              ? o + (i(e) ? r(s)[1] : r(s)[0])
              : a
                ? o + r(s)[1]
                : o + (i(e) ? r(s)[1] : r(s)[2]);
    }
    e.defineLocale("lt", {
        months: {
            format: "sausio_vasario_kovo_baland\u017Eio_gegu\u017E\u0117s_bir\u017Eelio_liepos_rugpj\u016B\u010Dio_rugs\u0117jo_spalio_lapkri\u010Dio_gruod\u017Eio".split(
                "_",
            ),
            standalone:
                "sausis_vasaris_kovas_balandis_gegu\u017E\u0117_bir\u017Eelis_liepa_rugpj\u016Btis_rugs\u0117jis_spalis_lapkritis_gruodis".split(
                    "_",
                ),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
        weekdays: {
            format: "sekmadien\u012F_pirmadien\u012F_antradien\u012F_tre\u010Diadien\u012F_ketvirtadien\u012F_penktadien\u012F_\u0161e\u0161tadien\u012F".split(
                "_",
            ),
            standalone:
                "sekmadienis_pirmadienis_antradienis_tre\u010Diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split(
                    "_",
                ),
            isFormat: /dddd HH:mm/,
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
        },
        calendar: {
            sameDay: "[\u0160iandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Pra\u0117jus\u012F] dddd LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "po %s",
            past: "prie\u0161 %s",
            s: function (e, t, n, i) {
                return t ? "kelios sekund\u0117s" : i ? "keli\u0173 sekund\u017Ei\u0173" : "kelias sekundes";
            },
            ss: s,
            m: n,
            mm: s,
            h: n,
            hh: s,
            d: n,
            dd: s,
            M: n,
            MM: s,
            y: n,
            yy: s,
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function (e) {
            return e + "-oji";
        },
        week: { dow: 1, doy: 4 },
    });
})(n(989349));
