r.r(t),
    r.d(t, {
        parseDate: () => en,
        casual: () => X,
        ReferenceWithTimezone: () => C.b5,
        ParsingResult: () => C.s4,
        createCasualConfiguration: () => ee,
        Weekday: () => A.Bw,
        strict: () => Q,
        Chrono: () => G.u,
        Meridiem: () => A.FF,
        ParsingComponents: () => C.BP,
        createConfiguration: () => et,
        parse: () => er,
    });
var n = r(476858),
    s = r(364242);
let a = "([^\\p{L}\\p{N}_]|^)",
    i = "(?=[^\\p{L}\\p{N}_]|$)",
    o = {
        \u043D\u0435\u0434\u0456\u043B\u044F: 0,
        \u043D\u0435\u0434\u0456\u043B\u0456: 0,
        \u043D\u0435\u0434\u0456\u043B\u044E: 0,
        \u043D\u0434: 0,
        "\u043D\u0434.": 0,
        \u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A: 1,
        \u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043A\u0430: 1,
        \u043F\u043D: 1,
        "\u043F\u043D.": 1,
        \u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A: 2,
        \u0432\u0456\u0432\u0442\u043E\u0440\u043A\u0430: 2,
        \u0432\u0442: 2,
        "\u0432\u0442.": 2,
        \u0441\u0435\u0440\u0435\u0434\u0430: 3,
        \u0441\u0435\u0440\u0435\u0434\u0438: 3,
        \u0441\u0435\u0440\u0435\u0434\u0443: 3,
        \u0441\u0440: 3,
        "\u0441\u0440.": 3,
        \u0447\u0435\u0442\u0432\u0435\u0440: 4,
        \u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430: 4,
        \u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0443: 4,
        \u0447\u0442: 4,
        "\u0447\u0442.": 4,
        "\u043F'\u044F\u0442\u043D\u0438\u0446\u044F": 5,
        "\u043F'\u044F\u0442\u043D\u0438\u0446\u0456": 5,
        "\u043F'\u044F\u0442\u043D\u0438\u0446\u044E": 5,
        \u043F\u0442: 5,
        "\u043F\u0442.": 5,
        \u0441\u0443\u0431\u043E\u0442\u0430: 6,
        \u0441\u0443\u0431\u043E\u0442\u0438: 6,
        \u0441\u0443\u0431\u043E\u0442\u0443: 6,
        \u0441\u0431: 6,
        "\u0441\u0431.": 6,
    },
    l = {
        \u0441\u0456\u0447\u0435\u043D\u044C: 1,
        \u0441\u0456\u0447\u043D\u044F: 1,
        \u0441\u0456\u0447\u043D\u0456: 1,
        \u043B\u044E\u0442\u0438\u0439: 2,
        \u043B\u044E\u0442\u043E\u0433\u043E: 2,
        \u043B\u044E\u0442\u043E\u043C\u0443: 2,
        \u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C: 3,
        \u0431\u0435\u0440\u0435\u0437\u043D\u044F: 3,
        \u0431\u0435\u0440\u0435\u0437\u043D\u0456: 3,
        \u043A\u0432\u0456\u0442\u0435\u043D\u044C: 4,
        \u043A\u0432\u0456\u0442\u043D\u044F: 4,
        \u043A\u0432\u0456\u0442\u043D\u0456: 4,
        \u0442\u0440\u0430\u0432\u0435\u043D\u044C: 5,
        \u0442\u0440\u0430\u0432\u043D\u044F: 5,
        \u0442\u0440\u0430\u0432\u043D\u0456: 5,
        \u0447\u0435\u0440\u0432\u0435\u043D\u044C: 6,
        \u0447\u0435\u0440\u0432\u043D\u044F: 6,
        \u0447\u0435\u0440\u0432\u043D\u0456: 6,
        \u043B\u0438\u043F\u0435\u043D\u044C: 7,
        \u043B\u0438\u043F\u043D\u044F: 7,
        \u043B\u0438\u043F\u043D\u0456: 7,
        \u0441\u0435\u0440\u043F\u0435\u043D\u044C: 8,
        \u0441\u0435\u0440\u043F\u043D\u044F: 8,
        \u0441\u0435\u0440\u043F\u043D\u0456: 8,
        \u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C: 9,
        \u0432\u0435\u0440\u0435\u0441\u043D\u044F: 9,
        \u0432\u0435\u0440\u0435\u0441\u043D\u0456: 9,
        \u0436\u043E\u0432\u0442\u0435\u043D\u044C: 10,
        \u0436\u043E\u0432\u0442\u043D\u044F: 10,
        \u0436\u043E\u0432\u0442\u043D\u0456: 10,
        \u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434: 11,
        \u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430: 11,
        \u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0443: 11,
        \u0433\u0440\u0443\u0434\u0435\u043D\u044C: 12,
        \u0433\u0440\u0443\u0434\u043D\u044F: 12,
        \u0433\u0440\u0443\u0434\u043D\u0456: 12,
    },
    u = {
        ...l,
        \u0441\u0456\u0447: 1,
        "\u0441\u0456\u0447.": 1,
        \u043B\u044E\u0442: 2,
        "\u043B\u044E\u0442.": 2,
        \u0431\u0435\u0440: 3,
        "\u0431\u0435\u0440.": 3,
        \u043A\u0432\u0456\u0442: 4,
        "\u043A\u0432\u0456\u0442.": 4,
        \u0442\u0440\u0430\u0432: 5,
        "\u0442\u0440\u0430\u0432.": 5,
        \u0447\u0435\u0440\u0432: 6,
        "\u0447\u0435\u0440\u0432.": 6,
        \u043B\u0438\u043F: 7,
        "\u043B\u0438\u043F.": 7,
        \u0441\u0435\u0440\u043F: 8,
        "\u0441\u0435\u0440\u043F.": 8,
        \u0441\u0435\u0440: 8,
        "c\u0435\u0440.": 8,
        \u0432\u0435\u0440: 9,
        "\u0432\u0435\u0440.": 9,
        \u0432\u0435\u0440\u0435\u0441: 9,
        "\u0432\u0435\u0440\u0435\u0441.": 9,
        \u0436\u043E\u0432\u0442: 10,
        "\u0436\u043E\u0432\u0442.": 10,
        \u043B\u0438\u0441\u0442\u043E\u043F: 11,
        "\u043B\u0438\u0441\u0442\u043E\u043F.": 11,
        \u0433\u0440\u0443\u0434: 12,
        "\u0433\u0440\u0443\u0434.": 12,
    },
    m = {
        \u043E\u0434\u0438\u043D: 1,
        \u043E\u0434\u043D\u0430: 1,
        \u043E\u0434\u043D\u043E\u0457: 1,
        \u043E\u0434\u043D\u0443: 1,
        \u0434\u0432\u0456: 2,
        \u0434\u0432\u0430: 2,
        \u0434\u0432\u043E\u0445: 2,
        \u0442\u0440\u0438: 3,
        \u0442\u0440\u044C\u043E\u0445: 3,
        \u0447\u043E\u0442\u0438\u0440\u0438: 4,
        \u0447\u043E\u0442\u0438\u0440\u044C\u043E\u0445: 4,
        "\u043F'\u044F\u0442\u044C": 5,
        "\u043F'\u044F\u0442\u0438": 5,
        \u0448\u0456\u0441\u0442\u044C: 6,
        \u0448\u0435\u0441\u0442\u0438: 6,
        \u0441\u0456\u043C: 7,
        \u0441\u0435\u043C\u0438: 7,
        \u0432\u0456\u0441\u0456\u043C: 8,
        \u0432\u043E\u0441\u044C\u043C\u0438: 8,
        "\u0434\u0435\u0432'\u044F\u0442\u044C": 9,
        "\u0434\u0435\u0432'\u044F\u0442\u0438": 9,
        \u0434\u0435\u0441\u044F\u0442\u044C: 10,
        \u0434\u0435\u0441\u044F\u0442\u0438: 10,
        \u043E\u0434\u0438\u043D\u0430\u0434\u0446\u044F\u0442\u044C: 11,
        \u043E\u0434\u0438\u043D\u0430\u0434\u0446\u044F\u0442\u0438: 11,
        \u0434\u0432\u0430\u043D\u0430\u0434\u0446\u044F\u0442\u044C: 12,
        \u0434\u0432\u0430\u043D\u0430\u0434\u0446\u044F\u0442\u0438: 12,
    },
    d = {
        \u043F\u0435\u0440\u0448\u0435: 1,
        \u043F\u0435\u0440\u0448\u043E\u0433\u043E: 1,
        \u0434\u0440\u0443\u0433\u0435: 2,
        \u0434\u0440\u0443\u0433\u043E\u0433\u043E: 2,
        \u0442\u0440\u0435\u0442\u0454: 3,
        \u0442\u0440\u0435\u0442\u044C\u043E\u0433\u043E: 3,
        \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0435: 4,
        \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043E\u0433\u043E: 4,
        "\u043F'\u044F\u0442\u0435": 5,
        "\u043F'\u044F\u0442\u043E\u0433\u043E": 5,
        \u0448\u043E\u0441\u0442\u0435: 6,
        \u0448\u043E\u0441\u0442\u043E\u0433\u043E: 6,
        \u0441\u044C\u043E\u043C\u0435: 7,
        \u0441\u044C\u043E\u043C\u043E\u0433\u043E: 7,
        \u0432\u043E\u0441\u044C\u043C\u0435: 8,
        \u0432\u043E\u0441\u044C\u043C\u043E\u0433\u043E: 8,
        "\u0434\u0435\u0432'\u044F\u0442\u0435": 9,
        "\u0434\u0435\u0432'\u044F\u0442\u043E\u0433\u043E": 9,
        \u0434\u0435\u0441\u044F\u0442\u0435: 10,
        \u0434\u0435\u0441\u044F\u0442\u043E\u0433\u043E: 10,
        \u043E\u0434\u0438\u043D\u0430\u0434\u0446\u044F\u0442\u0435: 11,
        \u043E\u0434\u0438\u043D\u0430\u0434\u0446\u044F\u0442\u043E\u0433\u043E: 11,
        \u0434\u0432\u0430\u043D\u0430\u0434\u0446\u044F\u0442\u0435: 12,
        \u0434\u0432\u0430\u043D\u0430\u0434\u0446\u044F\u0442\u043E\u0433\u043E: 12,
        \u0442\u0440\u0438\u043D\u0430\u0434\u0446\u044F\u0442\u0435: 13,
        \u0442\u0440\u0438\u043D\u0430\u0434\u0446\u044F\u0442\u043E\u0433\u043E: 13,
        \u0447\u043E\u0442\u0438\u0440\u043D\u0430\u0434\u0446\u044F\u0442\u0435: 14,
        \u0447\u043E\u0442\u0438\u043D\u0440\u043D\u0430\u0434\u0446\u044F\u0442\u043E\u0433\u043E: 14,
        "\u043F'\u044F\u0442\u043D\u0430\u0434\u0446\u044F\u0442\u0435": 15,
        "\u043F'\u044F\u0442\u043D\u0430\u0434\u0446\u044F\u0442\u043E\u0433\u043E": 15,
        \u0448\u0456\u0441\u0442\u043D\u0430\u0434\u0446\u044F\u0442\u0435: 16,
        \u0448\u0456\u0441\u0442\u043D\u0430\u0434\u0446\u044F\u0442\u043E\u0433\u043E: 16,
        \u0441\u0456\u043C\u043D\u0430\u0434\u0446\u044F\u0442\u0435: 17,
        \u0441\u0456\u043C\u043D\u0430\u0434\u0446\u044F\u0442\u043E\u0433\u043E: 17,
        \u0432\u0456\u0441\u0456\u043C\u043D\u0430\u0434\u0446\u044F\u0442\u0435: 18,
        \u0432\u0456\u0441\u0456\u043C\u043D\u0430\u0434\u0446\u044F\u0442\u043E\u0433\u043E: 18,
        "\u0434\u0435\u0432'\u044F\u0442\u043D\u0430\u0434\u0446\u044F\u0442\u0435": 19,
        "\u0434\u0435\u0432'\u044F\u0442\u043D\u0430\u0434\u0446\u044F\u0442\u043E\u0433\u043E": 19,
        \u0434\u0432\u0430\u0434\u0446\u044F\u0442\u0435: 20,
        \u0434\u0432\u0430\u0434\u0446\u044F\u0442\u043E\u0433\u043E: 20,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u043F\u0435\u0440\u0448\u0435": 21,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u043F\u0435\u0440\u0448\u043E\u0433\u043E": 21,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0434\u0440\u0443\u0433\u0435": 22,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0433\u043E": 22,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0442\u0440\u0435\u0442\u0454": 23,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0442\u0440\u0435\u0442\u044C\u043E\u0433\u043E": 23,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0435": 24,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043E\u0433\u043E": 24,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u043F'\u044F\u0442\u0435": 25,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u043F'\u044F\u0442\u043E\u0433\u043E": 25,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0448\u043E\u0441\u0442\u0435": 26,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0448\u043E\u0441\u0442\u043E\u0433\u043E": 26,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0441\u044C\u043E\u043C\u0435": 27,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0441\u044C\u043E\u043C\u043E\u0433\u043E": 27,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0432\u043E\u0441\u044C\u043C\u0435": 28,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0432\u043E\u0441\u044C\u043C\u043E\u0433\u043E": 28,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0434\u0435\u0432'\u044F\u0442\u0435": 29,
        "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C \u0434\u0435\u0432'\u044F\u0442\u043E\u0433\u043E": 29,
        \u0442\u0440\u0438\u0434\u0446\u044F\u0442\u0435: 30,
        \u0442\u0440\u0438\u0434\u0446\u044F\u0442\u043E\u0433\u043E: 30,
        "\u0442\u0440\u0438\u0434\u0446\u044F\u0442\u044C \u043F\u0435\u0440\u0448\u0435": 31,
        "\u0442\u0440\u0438\u0434\u0446\u044F\u0442\u044C \u043F\u0435\u0440\u0448\u043E\u0433\u043E": 31,
    },
    c = {
        \u0441\u0435\u043A: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434\u0430: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434\u0438: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434\u0443: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434\u043E\u0447\u043E\u043A: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434\u043E\u0447\u043A\u0438: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434\u043E\u0447\u043A\u0443: "second",
        \u0445\u0432: "minute",
        \u0445\u0432\u0438\u043B\u0438\u043D\u0430: "minute",
        \u0445\u0432\u0438\u043B\u0438\u043D: "minute",
        \u0445\u0432\u0438\u043B\u0438\u043D\u0438: "minute",
        \u0445\u0432\u0438\u043B\u0438\u043D\u0443: "minute",
        \u0445\u0432\u0438\u043B\u0438\u043D\u043E\u043A: "minute",
        \u0445\u0432\u0438\u043B\u0438\u043D\u043A\u0438: "minute",
        \u0445\u0432\u0438\u043B\u0438\u043D\u043A\u0443: "minute",
        \u0445\u0432\u0438\u043B\u0438\u043D\u043E\u0447\u043E\u043A: "minute",
        \u0445\u0432\u0438\u043B\u0438\u043D\u043E\u0447\u043A\u0438: "minute",
        \u0445\u0432\u0438\u043B\u0438\u043D\u043E\u0447\u043A\u0443: "minute",
        \u0433\u043E\u0434: "hour",
        \u0433\u043E\u0434\u0438\u043D\u0430: "hour",
        \u0433\u043E\u0434\u0438\u043D: "hour",
        \u0433\u043E\u0434\u0438\u043D\u0438: "hour",
        \u0433\u043E\u0434\u0438\u043D\u0443: "hour",
        \u0433\u043E\u0434\u0438\u043D\u043A\u0430: "hour",
        \u0433\u043E\u0434\u0438\u043D\u043E\u043A: "hour",
        \u0433\u043E\u0434\u0438\u043D\u043A\u0438: "hour",
        \u0433\u043E\u0434\u0438\u043D\u043A\u0443: "hour",
        \u0434\u0435\u043D\u044C: "day",
        \u0434\u043D\u044F: "day",
        \u0434\u043D\u0456\u0432: "day",
        \u0434\u043D\u0456: "day",
        \u0434\u043E\u0431\u0430: "day",
        \u0434\u043E\u0431\u0443: "day",
        \u0442\u0438\u0436\u0434\u0435\u043D\u044C: "week",
        \u0442\u0438\u0436\u043D\u044E: "week",
        \u0442\u0438\u0436\u043D\u044F: "week",
        \u0442\u0438\u0436\u043D\u0456: "week",
        \u0442\u0438\u0436\u043D\u0456\u0432: "week",
        \u043C\u0456\u0441\u044F\u0446\u044C: "month",
        \u043C\u0456\u0441\u044F\u0446\u0456\u0432: "month",
        \u043C\u0456\u0441\u044F\u0446\u0456: "month",
        \u043C\u0456\u0441\u044F\u0446\u044F: "month",
        \u043A\u0432\u0430\u0440\u0442\u0430\u043B: "quarter",
        \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0443: "quarter",
        \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0430: "quarter",
        \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0456\u0432: "quarter",
        \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0456: "quarter",
        \u0440\u0456\u043A: "year",
        \u0440\u043E\u043A\u0443: "year",
        \u0440\u043E\u0446\u0456: "year",
        \u0440\u043E\u043A\u0456\u0432: "year",
        \u0440\u043E\u043A\u0438: "year",
    },
    g = `(?:${(0, n.uJ)(m)}|[0-9]+|[0-9]+\\.[0-9]+|\u{43F}\u{456}\u{432}|\u{434}\u{435}\u{43A}\u{456}\u{43B}\u{44C}\u{43A}\u{430}|\u{43F}\u{430}\u{440}(?:\u{443})|\\s{0,3})`,
    h = `(?:${(0, n.uJ)(d)}|[0-9]{1,2}(?:\u{433}\u{43E}|\u{43E}\u{433}\u{43E}|\u{435})?)`;
function f(e) {
    let t = e.toLowerCase();
    return void 0 !== d[t] ? d[t] : parseInt(t);
}
let p = "(?:\\s+(?:\u0440\u043E\u043A\u0443|\u0440\u0456\u043A|\u0440|\u0440.))?",
    y = `(?:[1-9][0-9]{0,3}${p}\\s*(?:\u{43D}.\u{435}.|\u{434}\u{43E} \u{43D}.\u{435}.|\u{43D}. \u{435}.|\u{434}\u{43E} \u{43D}. \u{435}.)|[1-2][0-9]{3}${p}|[5-9][0-9]${p})`;
function x(e) {
    if (
        (/(\u0440\u0456\u043a|\u0440\u043e\u043a\u0443|\u0440|\u0440.)/i.test(e) &&
            (e = e.replace(/(\u0440\u0456\u043a|\u0440\u043e\u043a\u0443|\u0440|\u0440.)/i, "")),
        /(\u0434\u043e \u043d.\u0435.|\u0434\u043e \u043d. \u0435.)/i.test(e))
    )
        return -parseInt((e = e.replace(/(\u0434\u043e \u043d.\u0435.|\u0434\u043e \u043d. \u0435.)/i, "")));
    if (/(\u043d. \u0435.|\u043d.\u0435.)/i.test(e))
        return parseInt((e = e.replace(/(\u043d. \u0435.|\u043d.\u0435.)/i, "")));
    let t = parseInt(e);
    return (0, s.D)(t);
}
let w = `(${g})\\s{0,3}(${(0, n.uJ)(c)})`,
    D = RegExp(w, "i"),
    P = (0, n.mb)(
        "(?:(?:\u0431\u043B\u0438\u0437\u044C\u043A\u043E|\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E)\\s{0,3})?",
        w,
    );
function F(e) {
    let t = {},
        r = e,
        n = D.exec(r);
    for (; n; )
        (function (e, t) {
            let r = (function (e) {
                let t = e.toLowerCase();
                return void 0 !== m[t]
                    ? m[t]
                    : t.match(/\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430/)
                      ? 2
                      : t.match(/\u043f\u0456\u0432/)
                        ? 0.5
                        : t.match(/\u043f\u0430\u0440/)
                          ? 2
                          : "" === t
                            ? 1
                            : parseFloat(t);
            })(t[1]);
            e[c[t[2].toLowerCase()]] = r;
        })(t, n),
            (r = r.substring(n[0].length).trim()),
            (n = D.exec(r));
    return t;
}
var C = r(374372),
    T = r(355418);
let v = `(?:(?:\u{43F}\u{440}\u{438}\u{431}\u{43B}\u{438}\u{437}\u{43D}\u{43E}|\u{43E}\u{440}\u{456}\u{454}\u{43D}\u{442}\u{43E}\u{432}\u{43D}\u{43E})\\s*(?:~\\s*)?)?(${P})${i}`;
class M extends T.c {
    patternLeftBoundary() {
        return a;
    }
    innerPattern(e) {
        return e.option.forwardDate
            ? RegExp(v, "i")
            : RegExp(
                  `(?:\u{43F}\u{440}\u{43E}\u{442}\u{44F}\u{433}\u{43E}\u{43C}|\u{43D}\u{430} \u{43F}\u{440}\u{43E}\u{442}\u{44F}\u{437}\u{456}|\u{43F}\u{440}\u{43E}\u{442}\u{44F}\u{433}\u{43E}\u{43C}|\u{443}\u{43F}\u{440}\u{43E}\u{434}\u{43E}\u{432}\u{436}|\u{432}\u{43F}\u{440}\u{43E}\u{434}\u{43E}\u{432}\u{436})\\s*${v}`,
                  "iu",
              );
    }
    innerExtract(e, t) {
        let r = F(t[1]);
        return C.BP.createRelativeFromReference(e.reference, r);
    }
}
class $ extends T.c {
    patternLeftBoundary() {
        return a;
    }
    innerPattern(e) {
        return RegExp(this.innerPatternString(e), "iu");
    }
    innerPatternHasChange(e, t) {
        return !1;
    }
}
class R extends $ {
    innerPattern(e) {
        return RegExp(`${this.innerPatternString(e)}${i}`, "iu");
    }
}
class E extends R {
    innerPatternString(e) {
        return `(?:\u{437}|\u{456}\u{437})?\\s*(${h})(?:\\s{0,3}(?:\u{43F}\u{43E}|-|\u{2013}|\u{434}\u{43E})?\\s{0,3}(${h}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${(0, n.uJ)(u)})(?:(?:-|\\/|,?\\s{0,3})(${y}(?![^\\s]\\d)))?`;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = u[t[3].toLowerCase()],
            a = f(t[1]);
        if (a > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", n), r.start.assign("day", a), t[4])) {
            let e = x(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, s.Y)(e.reference.instant, a, n);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = f(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
class b extends $ {
    innerPatternString(e) {
        return `((?:\u{432}|\u{443})\\s*)?(${(0, n.uJ)(u)})\\s*(?:[,-]?\\s*(${y})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase();
        if (t[0].length <= 3 && !l[r]) return null;
        let n = e.createParsingResult(t.index, t.index + t[0].length);
        n.start.imply("day", 1);
        let a = u[r];
        if ((n.start.assign("month", a), t[3])) {
            let e = x(t[3]);
            n.start.assign("year", e);
        } else {
            let t = (0, s.Y)(e.reference.instant, 1, a);
            n.start.imply("year", t);
        }
        return n;
    }
}
var A = r(322811),
    k = r(985971);
class j extends k.B {
    constructor(e) {
        super(e);
    }
    patternFlags() {
        return "iu";
    }
    primaryPatternLeftBoundary() {
        return "(^|\\s|T|(?:[^\\p{L}\\p{N}_]))";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|\u0434\u043E|\u0456|\u043F\u043E|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:\u0432|\u0443|\u043E|\u043E\u0431|\u0437|\u0456\u0437|\u0432\u0456\u0434)\\s*)??";
    }
    primarySuffix() {
        return `(?:\\s*(?:\u{440}\u{430}\u{43D}\u{43A}\u{443}|\u{432}\u{435}\u{447}\u{43E}\u{440}\u{430}|\u{43F}\u{43E} \u{43E}\u{431}\u{456}\u{434}\u{456}|\u{43F}\u{456}\u{441}\u{43B}\u{44F} \u{43E}\u{431}\u{456}\u{434}\u{443}))?(?!\\/)${i}`;
    }
    extractPrimaryTimeComponents(e, t) {
        let r = super.extractPrimaryTimeComponents(e, t);
        if (r) {
            if (t[0].endsWith("\u0432\u0435\u0447\u043E\u0440\u0430")) {
                let e = r.get("hour");
                e >= 6 && e < 12
                    ? (r.assign("hour", r.get("hour") + 12), r.assign("meridiem", A.FF.PM))
                    : e < 6 && r.assign("meridiem", A.FF.AM);
            }
            if (
                t[0].endsWith("\u043F\u043E \u043E\u0431\u0456\u0434\u0456") ||
                t[0].endsWith("\u043F\u0456\u0441\u043B\u044F \u043E\u0431\u0456\u0434\u0443")
            ) {
                r.assign("meridiem", A.FF.PM);
                let e = r.get("hour");
                e >= 0 && e <= 6 && r.assign("hour", r.get("hour") + 12);
            }
            t[0].endsWith("\u0440\u0430\u043D\u043A\u0443") &&
                (r.assign("meridiem", A.FF.AM), 12 > r.get("hour") && r.assign("hour", r.get("hour")));
        }
        return r;
    }
}
var B = r(632434);
class W extends $ {
    innerPatternString(e) {
        return `(${P})\\s{0,5}\u{442}\u{43E}\u{43C}\u{443}(?=(?:\\W|$))`;
    }
    innerExtract(e, t) {
        let r = F(t[1]),
            n = (0, B.x4)(r);
        return C.BP.createRelativeFromReference(e.reference, n);
    }
}
var S = r(172609);
class I extends S.A {
    patternBetween() {
        return /^\s*(\u0456 \u0434\u043e|\u0456 \u043f\u043e|\u0434\u043e|\u043f\u043e|-)\s*$/i;
    }
}
var Y = r(230205);
class z extends Y.A {
    patternBetween() {
        return RegExp("^\\s*(T|\u0432|\u0443|\u043E|,|-)?\\s*$");
    }
}
var L = r(132588),
    N = r(996483);
class O extends R {
    innerPatternString(e) {
        return "(?:\u0437|\u0456\u0437|\u0432\u0456\u0434)?\\s*(\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456|\u0432\u0447\u043E\u0440\u0430|\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u0456\u0441\u043B\u044F\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u0456\u0441\u043B\u044F\u043F\u0456\u0441\u043B\u044F\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0437\u0430\u043F\u043E\u0437\u0430\u0432\u0447\u043E\u0440\u0430|\u043F\u043E\u0437\u0430\u0432\u0447\u043E\u0440\u0430)";
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = e.createParsingComponents();
        switch (r) {
            case "\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456":
                return N.Ec(e.reference);
            case "\u0432\u0447\u043E\u0440\u0430":
                return N.jI(e.reference);
            case "\u0437\u0430\u0432\u0442\u0440\u0430":
                return N.uf(e.reference);
            case "\u043F\u0456\u0441\u043B\u044F\u0437\u0430\u0432\u0442\u0440\u0430":
                return N.AV(e.reference, 2);
            case "\u043F\u0456\u0441\u043B\u044F\u043F\u0456\u0441\u043B\u044F\u0437\u0430\u0432\u0442\u0440\u0430":
                return N.AV(e.reference, 3);
            case "\u043F\u043E\u0437\u0430\u0432\u0447\u043E\u0440\u0430":
                return N.ti(e.reference, 2);
            case "\u043F\u043E\u0437\u0430\u043F\u043E\u0437\u0430\u0432\u0447\u043E\u0440\u0430":
                return N.ti(e.reference, 3);
        }
        return n;
    }
}
var J = r(881190);
class q extends R {
    innerPatternString(e) {
        return "(\u0437\u0430\u0440\u0430\u0437|\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E\\s*\u0432\u0435\u0447\u043E\u0440\u0430|\u043C\u0438\u043D\u0443\u043B\u043E\u0457\\s*\u043D\u043E\u0447\u0456|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0457\\s*\u043D\u043E\u0447\u0456|\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456\\s*\u0432\u043D\u043E\u0447\u0456|\u0446\u0456\u0454\u0457\\s*\u043D\u043E\u0447\u0456|\u0446\u044C\u043E\u0433\u043E \u0440\u0430\u043D\u043A\u0443|\u0432\u0440\u0430\u043D\u0446\u0456|\u0440\u0430\u043D\u043A\u0443|\u0437\u0440\u0430\u043D\u043A\u0443|\u043E\u043F\u0456\u0432\u0434\u043D\u0456|\u0432\u0432\u0435\u0447\u0435\u0440\u0456|\u0432\u0435\u0447\u043E\u0440\u0430|\u043E\u043F\u0456\u0432\u043D\u043E\u0447\u0456|\u0432\u043D\u043E\u0447\u0456)";
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[0].toLowerCase(),
            s = e.createParsingComponents();
        if ("\u0437\u0430\u0440\u0430\u0437" === n) return N.tB(e.reference);
        if ("\u0432\u0432\u0435\u0447\u0435\u0440\u0456" === n || "\u0432\u0435\u0447\u043E\u0440\u0430" === n)
            return N.Jp(e.reference);
        if (
            n.endsWith("\u0432\u0440\u0430\u043D\u0446\u0456") ||
            n.endsWith("\u0440\u0430\u043D\u043A\u0443") ||
            n.endsWith("\u0437\u0440\u0430\u043D\u043A\u0443")
        )
            return N.F1(e.reference);
        if (n.endsWith("\u043E\u043F\u0456\u0432\u0434\u043D\u0456")) return N.zW(e.reference);
        if (n.match(/\u043c\u0438\u043d\u0443\u043b\u043e\u0457\s*\u043d\u043e\u0447\u0456/)) return N.zr(e.reference);
        if (n.match(/\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e\s*\u0432\u0435\u0447\u043e\u0440\u0430/))
            return N.Z6(e.reference);
        if (n.match(/\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457\s*\u043d\u043e\u0447\u0456/)) {
            let e = 22 > r.getHours() ? 1 : 2,
                t = new Date(r.getTime());
            t.setDate(t.getDate() + e), (0, J.Pl)(s, t), s.imply("hour", 1);
        }
        return n.match(/\u0446\u0456\u0454\u0457\s*\u043d\u043e\u0447\u0456/) ||
            n.endsWith("\u043E\u043F\u0456\u0432\u043D\u043E\u0447\u0456") ||
            n.endsWith("\u0432\u043D\u043E\u0447\u0456")
            ? N.Bm(e.reference)
            : s;
    }
}
var H = r(1673);
class V extends R {
    innerPatternString(e) {
        return `(?:(?:,|\\(|\u{FF08})\\s*)?(?:\u{432}\\s*?)?(?:\u{443}\\s*?)?(?:(\u{446}\u{435}\u{439}|\u{43C}\u{438}\u{43D}\u{443}\u{43B}\u{43E}\u{433}\u{43E}|\u{43C}\u{438}\u{43D}\u{443}\u{43B}\u{438}\u{439}|\u{43F}\u{43E}\u{43F}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{456}\u{439}|\u{43F}\u{43E}\u{43F}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{44C}\u{43E}\u{433}\u{43E}|\u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}\u{433}\u{43E}|\u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{438}\u{439}|\u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}\u{43C}\u{443})\\s*)?(${(0, n.uJ)(o)})(?:\\s*(?:,|\\)|\u{FF09}))?(?:\\s*(\u{43D}\u{430}|\u{443}|\u{432})\\s*(\u{446}\u{44C}\u{43E}\u{43C}\u{443}|\u{43C}\u{438}\u{43D}\u{443}\u{43B}\u{43E}\u{43C}\u{443}|\u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}\u{43C}\u{443})\\s*\u{442}\u{438}\u{436}\u{43D}\u{456})?`;
    }
    innerExtract(e, t) {
        let r = o[t[2].toLocaleLowerCase()],
            n = t[1],
            s = t[3],
            a = n || s;
        a = (a = a || "").toLocaleLowerCase();
        let i = null;
        return (
            "\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E" == a ||
            "\u043C\u0438\u043D\u0443\u043B\u0438\u0439" == a ||
            "\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439" == a ||
            "\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E" == a
                ? (i = "last")
                : "\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E" == a ||
                    "\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439" == a
                  ? (i = "next")
                  : ("\u0446\u0435\u0439" == a ||
                        "\u0446\u044C\u043E\u0433\u043E" == a ||
                        "\u0446\u044C\u043E\u043C\u0443" == a) &&
                    (i = "this"),
            (0, H.Y5)(e.reference, r, i)
        );
    }
}
class U extends R {
    innerPatternString(e) {
        return `(\u{432} \u{43C}\u{438}\u{43D}\u{443}\u{43B}\u{43E}\u{43C}\u{443}|\u{443} \u{43C}\u{438}\u{43D}\u{443}\u{43B}\u{43E}\u{43C}\u{443}|\u{43D}\u{430} \u{43C}\u{438}\u{43D}\u{443}\u{43B}\u{43E}\u{43C}\u{443}|\u{43C}\u{438}\u{43D}\u{443}\u{43B}\u{43E}\u{433}\u{43E}|\u{43D}\u{430} \u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}\u{43C}\u{443}|\u{432} \u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}\u{43C}\u{443}|\u{443} \u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}\u{43C}\u{443}|\u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}\u{433}\u{43E}|\u{43D}\u{430} \u{446}\u{44C}\u{43E}\u{43C}\u{443}|\u{432} \u{446}\u{44C}\u{43E}\u{43C}\u{443}|\u{443} \u{446}\u{44C}\u{43E}\u{43C}\u{443}|\u{446}\u{44C}\u{43E}\u{433}\u{43E})\\s*(${(0, n.uJ)(c)})(?=\\s*)`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = c[t[2].toLowerCase()];
        if (
            "\u043D\u0430 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443" == r ||
            "\u0432 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443" == r ||
            "\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443" == r ||
            "\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E" == r
        ) {
            let t = {};
            return (t[n] = 1), C.BP.createRelativeFromReference(e.reference, t);
        }
        if (
            "\u043D\u0430 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443" == r ||
            "\u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443" == r ||
            "\u0443 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443" == r ||
            "\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E" == r
        ) {
            let t = {};
            return (t[n] = -1), C.BP.createRelativeFromReference(e.reference, t);
        }
        let s = e.createParsingComponents(),
            a = new Date(e.reference.instant.getTime());
        return (
            n.match(/week/i)
                ? (a.setDate(a.getDate() - a.getDay()),
                  s.imply("day", a.getDate()),
                  s.imply("month", a.getMonth() + 1),
                  s.imply("year", a.getFullYear()))
                : n.match(/month/i)
                  ? (a.setDate(1),
                    s.imply("day", a.getDate()),
                    s.assign("year", a.getFullYear()),
                    s.assign("month", a.getMonth() + 1))
                  : n.match(/year/i) &&
                    (a.setDate(1),
                    a.setMonth(0),
                    s.imply("day", a.getDate()),
                    s.imply("month", a.getMonth() + 1),
                    s.assign("year", a.getFullYear())),
            s
        );
    }
}
var G = r(880683),
    Z = r(774188);
class K extends R {
    innerPatternString(e) {
        return `(\u{446}\u{456}|\u{43E}\u{441}\u{442}\u{430}\u{43D}\u{43D}\u{456}|\u{43C}\u{438}\u{43D}\u{443}\u{43B}\u{456}|\u{43C}\u{430}\u{439}\u{431}\u{443}\u{442}\u{43D}\u{456}|\u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{456}|\u{43F}\u{456}\u{441}\u{43B}\u{44F}|\u{447}\u{435}\u{440}\u{435}\u{437}|\\+|-)\\s*(${P})`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = F(t[3]);
        switch (r) {
            case "\u043E\u0441\u0442\u0430\u043D\u043D\u0456":
            case "\u043C\u0438\u043D\u0443\u043B\u0456":
            case "-":
                n = (0, B.x4)(n);
        }
        return C.BP.createRelativeFromReference(e.reference, n);
    }
}
var _ = r(368324);
let X = new G.u(ee()),
    Q = new G.u(et(!0));
function ee() {
    let e = et(!1);
    return (
        e.parsers.unshift(new O()),
        e.parsers.unshift(new q()),
        e.parsers.unshift(new b()),
        e.parsers.unshift(new U()),
        e.parsers.unshift(new K()),
        e
    );
}
function et(e) {
    return (0, L.i)(
        {
            parsers: [new _.A(), new Z.A(!0), new M(), new E(), new V(), new j(e), new W()],
            refiners: [new z(), new I()],
        },
        e,
    );
}
function er(e, t, r) {
    return X.parse(e, t, r);
}
function en(e, t, r) {
    return X.parseDate(e, t, r);
}
