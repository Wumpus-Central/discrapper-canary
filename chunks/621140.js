!(function (e) {
    "use strict";
    var t = [
            "\u0796\u07AC\u0782\u07AA\u0787\u07A6\u0783\u07A9",
            "\u078A\u07AC\u0784\u07B0\u0783\u07AA\u0787\u07A6\u0783\u07A9",
            "\u0789\u07A7\u0783\u07A8\u0797\u07AA",
            "\u0787\u07AD\u0795\u07B0\u0783\u07A9\u078D\u07AA",
            "\u0789\u07AD",
            "\u0796\u07AB\u0782\u07B0",
            "\u0796\u07AA\u078D\u07A6\u0787\u07A8",
            "\u0787\u07AF\u078E\u07A6\u0790\u07B0\u0793\u07AA",
            "\u0790\u07AC\u0795\u07B0\u0793\u07AC\u0789\u07B0\u0784\u07A6\u0783\u07AA",
            "\u0787\u07AE\u0786\u07B0\u0793\u07AF\u0784\u07A6\u0783\u07AA",
            "\u0782\u07AE\u0788\u07AC\u0789\u07B0\u0784\u07A6\u0783\u07AA",
            "\u0791\u07A8\u0790\u07AC\u0789\u07B0\u0784\u07A6\u0783\u07AA",
        ],
        n = [
            "\u0787\u07A7\u078B\u07A8\u0787\u07B0\u078C\u07A6",
            "\u0780\u07AF\u0789\u07A6",
            "\u0787\u07A6\u0782\u07B0\u078E\u07A7\u0783\u07A6",
            "\u0784\u07AA\u078B\u07A6",
            "\u0784\u07AA\u0783\u07A7\u0790\u07B0\u078A\u07A6\u078C\u07A8",
            "\u0780\u07AA\u0786\u07AA\u0783\u07AA",
            "\u0780\u07AE\u0782\u07A8\u0780\u07A8\u0783\u07AA",
        ];
    e.defineLocale("dv", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin:
            "\u0787\u07A7\u078B\u07A8_\u0780\u07AF\u0789\u07A6_\u0787\u07A6\u0782\u07B0_\u0784\u07AA\u078B\u07A6_\u0784\u07AA\u0783\u07A7_\u0780\u07AA\u0786\u07AA_\u0780\u07AE\u0782\u07A8".split(
                "_",
            ),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/M/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /\u0789\u0786|\u0789\u078a/,
        isPM: function (e) {
            return "\u0789\u078A" === e;
        },
        meridiem: function (e, t, n) {
            return e < 12 ? "\u0789\u0786" : "\u0789\u078A";
        },
        calendar: {
            sameDay: "[\u0789\u07A8\u0787\u07A6\u078B\u07AA] LT",
            nextDay: "[\u0789\u07A7\u078B\u07A6\u0789\u07A7] LT",
            nextWeek: "dddd LT",
            lastDay: "[\u0787\u07A8\u0787\u07B0\u0794\u07AC] LT",
            lastWeek: "[\u078A\u07A7\u0787\u07A8\u078C\u07AA\u0788\u07A8] dddd LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "\u078C\u07AC\u0783\u07AD\u078E\u07A6\u0787\u07A8 %s",
            past: "\u0786\u07AA\u0783\u07A8\u0782\u07B0 %s",
            s: "\u0790\u07A8\u0786\u07AA\u0782\u07B0\u078C\u07AA\u0786\u07AE\u0785\u07AC\u0787\u07B0",
            ss: "d% \u0790\u07A8\u0786\u07AA\u0782\u07B0\u078C\u07AA",
            m: "\u0789\u07A8\u0782\u07A8\u0793\u07AC\u0787\u07B0",
            mm: "\u0789\u07A8\u0782\u07A8\u0793\u07AA %d",
            h: "\u078E\u07A6\u0791\u07A8\u0787\u07A8\u0783\u07AC\u0787\u07B0",
            hh: "\u078E\u07A6\u0791\u07A8\u0787\u07A8\u0783\u07AA %d",
            d: "\u078B\u07AA\u0788\u07A6\u0780\u07AC\u0787\u07B0",
            dd: "\u078B\u07AA\u0788\u07A6\u0790\u07B0 %d",
            M: "\u0789\u07A6\u0780\u07AC\u0787\u07B0",
            MM: "\u0789\u07A6\u0790\u07B0 %d",
            y: "\u0787\u07A6\u0780\u07A6\u0783\u07AC\u0787\u07B0",
            yy: "\u0787\u07A6\u0780\u07A6\u0783\u07AA %d",
        },
        preparse: function (e) {
            return e.replace(/\u060c/g, ",");
        },
        postformat: function (e) {
            return e.replace(/,/g, "\u060C");
        },
        week: { dow: 7, doy: 12 },
    });
})(n(989349));
