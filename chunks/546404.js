t.r(n), t.d(n, { default: () => s });
var o = {
        lessThanXSeconds: {
            one: {
                regular: "m\xe9n\u011B ne\u017E sekunda",
                past: "p\u0159ed m\xe9n\u011B ne\u017E sekundou",
                future: "za m\xe9n\u011B ne\u017E sekundu",
            },
            few: {
                regular: "m\xe9n\u011B ne\u017E {{count}} sekundy",
                past: "p\u0159ed m\xe9n\u011B ne\u017E {{count}} sekundami",
                future: "za m\xe9n\u011B ne\u017E {{count}} sekundy",
            },
            many: {
                regular: "m\xe9n\u011B ne\u017E {{count}} sekund",
                past: "p\u0159ed m\xe9n\u011B ne\u017E {{count}} sekundami",
                future: "za m\xe9n\u011B ne\u017E {{count}} sekund",
            },
        },
        xSeconds: {
            one: { regular: "sekunda", past: "p\u0159ed sekundou", future: "za sekundu" },
            few: {
                regular: "{{count}} sekundy",
                past: "p\u0159ed {{count}} sekundami",
                future: "za {{count}} sekundy",
            },
            many: { regular: "{{count}} sekund", past: "p\u0159ed {{count}} sekundami", future: "za {{count}} sekund" },
        },
        halfAMinute: {
            type: "other",
            other: { regular: "p\u016Fl minuty", past: "p\u0159ed p\u016Fl minutou", future: "za p\u016Fl minuty" },
        },
        lessThanXMinutes: {
            one: {
                regular: "m\xe9n\u011B ne\u017E minuta",
                past: "p\u0159ed m\xe9n\u011B ne\u017E minutou",
                future: "za m\xe9n\u011B ne\u017E minutu",
            },
            few: {
                regular: "m\xe9n\u011B ne\u017E {{count}} minuty",
                past: "p\u0159ed m\xe9n\u011B ne\u017E {{count}} minutami",
                future: "za m\xe9n\u011B ne\u017E {{count}} minuty",
            },
            many: {
                regular: "m\xe9n\u011B ne\u017E {{count}} minut",
                past: "p\u0159ed m\xe9n\u011B ne\u017E {{count}} minutami",
                future: "za m\xe9n\u011B ne\u017E {{count}} minut",
            },
        },
        xMinutes: {
            one: { regular: "minuta", past: "p\u0159ed minutou", future: "za minutu" },
            few: { regular: "{{count}} minuty", past: "p\u0159ed {{count}} minutami", future: "za {{count}} minuty" },
            many: { regular: "{{count}} minut", past: "p\u0159ed {{count}} minutami", future: "za {{count}} minut" },
        },
        aboutXHours: {
            one: {
                regular: "p\u0159ibli\u017En\u011B hodina",
                past: "p\u0159ibli\u017En\u011B p\u0159ed hodinou",
                future: "p\u0159ibli\u017En\u011B za hodinu",
            },
            few: {
                regular: "p\u0159ibli\u017En\u011B {{count}} hodiny",
                past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} hodinami",
                future: "p\u0159ibli\u017En\u011B za {{count}} hodiny",
            },
            many: {
                regular: "p\u0159ibli\u017En\u011B {{count}} hodin",
                past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} hodinami",
                future: "p\u0159ibli\u017En\u011B za {{count}} hodin",
            },
        },
        xHours: {
            one: { regular: "hodina", past: "p\u0159ed hodinou", future: "za hodinu" },
            few: { regular: "{{count}} hodiny", past: "p\u0159ed {{count}} hodinami", future: "za {{count}} hodiny" },
            many: { regular: "{{count}} hodin", past: "p\u0159ed {{count}} hodinami", future: "za {{count}} hodin" },
        },
        xDays: {
            one: { regular: "den", past: "p\u0159ed dnem", future: "za den" },
            few: { regular: "{{count}} dny", past: "p\u0159ed {{count}} dny", future: "za {{count}} dny" },
            many: { regular: "{{count}} dn\xed", past: "p\u0159ed {{count}} dny", future: "za {{count}} dn\xed" },
        },
        aboutXWeeks: {
            one: {
                regular: "p\u0159ibli\u017En\u011B t\xfdden",
                past: "p\u0159ibli\u017En\u011B p\u0159ed t\xfddnem",
                future: "p\u0159ibli\u017En\u011B za t\xfdden",
            },
            few: {
                regular: "p\u0159ibli\u017En\u011B {{count}} t\xfddny",
                past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} t\xfddny",
                future: "p\u0159ibli\u017En\u011B za {{count}} t\xfddny",
            },
            many: {
                regular: "p\u0159ibli\u017En\u011B {{count}} t\xfddn\u016F",
                past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} t\xfddny",
                future: "p\u0159ibli\u017En\u011B za {{count}} t\xfddn\u016F",
            },
        },
        xWeeks: {
            one: { regular: "t\xfdden", past: "p\u0159ed t\xfddnem", future: "za t\xfdden" },
            few: {
                regular: "{{count}} t\xfddny",
                past: "p\u0159ed {{count}} t\xfddny",
                future: "za {{count}} t\xfddny",
            },
            many: {
                regular: "{{count}} t\xfddn\u016F",
                past: "p\u0159ed {{count}} t\xfddny",
                future: "za {{count}} t\xfddn\u016F",
            },
        },
        aboutXMonths: {
            one: {
                regular: "p\u0159ibli\u017En\u011B m\u011Bs\xedc",
                past: "p\u0159ibli\u017En\u011B p\u0159ed m\u011Bs\xedcem",
                future: "p\u0159ibli\u017En\u011B za m\u011Bs\xedc",
            },
            few: {
                regular: "p\u0159ibli\u017En\u011B {{count}} m\u011Bs\xedce",
                past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} m\u011Bs\xedci",
                future: "p\u0159ibli\u017En\u011B za {{count}} m\u011Bs\xedce",
            },
            many: {
                regular: "p\u0159ibli\u017En\u011B {{count}} m\u011Bs\xedc\u016F",
                past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} m\u011Bs\xedci",
                future: "p\u0159ibli\u017En\u011B za {{count}} m\u011Bs\xedc\u016F",
            },
        },
        xMonths: {
            one: { regular: "m\u011Bs\xedc", past: "p\u0159ed m\u011Bs\xedcem", future: "za m\u011Bs\xedc" },
            few: {
                regular: "{{count}} m\u011Bs\xedce",
                past: "p\u0159ed {{count}} m\u011Bs\xedci",
                future: "za {{count}} m\u011Bs\xedce",
            },
            many: {
                regular: "{{count}} m\u011Bs\xedc\u016F",
                past: "p\u0159ed {{count}} m\u011Bs\xedci",
                future: "za {{count}} m\u011Bs\xedc\u016F",
            },
        },
        aboutXYears: {
            one: {
                regular: "p\u0159ibli\u017En\u011B rok",
                past: "p\u0159ibli\u017En\u011B p\u0159ed rokem",
                future: "p\u0159ibli\u017En\u011B za rok",
            },
            few: {
                regular: "p\u0159ibli\u017En\u011B {{count}} roky",
                past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} roky",
                future: "p\u0159ibli\u017En\u011B za {{count}} roky",
            },
            many: {
                regular: "p\u0159ibli\u017En\u011B {{count}} rok\u016F",
                past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} roky",
                future: "p\u0159ibli\u017En\u011B za {{count}} rok\u016F",
            },
        },
        xYears: {
            one: { regular: "rok", past: "p\u0159ed rokem", future: "za rok" },
            few: { regular: "{{count}} roky", past: "p\u0159ed {{count}} roky", future: "za {{count}} roky" },
            many: {
                regular: "{{count}} rok\u016F",
                past: "p\u0159ed {{count}} roky",
                future: "za {{count}} rok\u016F",
            },
        },
        overXYears: {
            one: {
                regular: "v\xedce ne\u017E rok",
                past: "p\u0159ed v\xedce ne\u017E rokem",
                future: "za v\xedce ne\u017E rok",
            },
            few: {
                regular: "v\xedce ne\u017E {{count}} roky",
                past: "p\u0159ed v\xedce ne\u017E {{count}} roky",
                future: "za v\xedce ne\u017E {{count}} roky",
            },
            many: {
                regular: "v\xedce ne\u017E {{count}} rok\u016F",
                past: "p\u0159ed v\xedce ne\u017E {{count}} roky",
                future: "za v\xedce ne\u017E {{count}} rok\u016F",
            },
        },
        almostXYears: {
            one: { regular: "skoro rok", past: "skoro p\u0159ed rokem", future: "skoro za rok" },
            few: {
                regular: "skoro {{count}} roky",
                past: "skoro p\u0159ed {{count}} roky",
                future: "skoro za {{count}} roky",
            },
            many: {
                regular: "skoro {{count}} rok\u016F",
                past: "skoro p\u0159ed {{count}} roky",
                future: "skoro za {{count}} rok\u016F",
            },
        },
    },
    r = t(385987),
    a = {
        date: (0, r.A)({
            formats: { full: "EEEE, d. MMMM yyyy", long: "d. MMMM yyyy", medium: "d. M. yyyy", short: "dd.MM.yyyy" },
            defaultWidth: "full",
        }),
        time: (0, r.A)({
            formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, r.A)({
            formats: {
                full: "{{date}} 'v' {{time}}",
                long: "{{date}} 'v' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    u = ["ned\u011Bli", "pond\u011Bl\xed", "\xfater\xfd", "st\u0159edu", "\u010Dtvrtek", "p\xe1tek", "sobotu"],
    i = {
        lastWeek: "'posledn\xed' eeee 've' p",
        yesterday: "'v\u010Dera v' p",
        today: "'dnes v' p",
        tomorrow: "'z\xedtra v' p",
        nextWeek: function (e) {
            return "'v " + u[e.getUTCDay()] + " o' p";
        },
        other: "P",
    },
    d = t(981737),
    p = {
        ordinalNumber: function (e, n) {
            return Number(e) + ".";
        },
        era: (0, d.A)({
            values: {
                narrow: ["p\u0159. n. l.", "n. l."],
                abbreviated: ["p\u0159. n. l.", "n. l."],
                wide: ["p\u0159ed na\u0161\xedm letopo\u010Dtem", "na\u0161eho letopo\u010Dtu"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, d.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: [
                    "1. \u010Dtvrtlet\xed",
                    "2. \u010Dtvrtlet\xed",
                    "3. \u010Dtvrtlet\xed",
                    "4. \u010Dtvrtlet\xed",
                ],
                wide: ["1. \u010Dtvrtlet\xed", "2. \u010Dtvrtlet\xed", "3. \u010Dtvrtlet\xed", "4. \u010Dtvrtlet\xed"],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
                return e - 1;
            },
        }),
        month: (0, d.A)({
            values: {
                narrow: ["L", "\xda", "B", "D", "K", "\u010C", "\u010C", "S", "Z", "\u0158", "L", "P"],
                abbreviated: [
                    "led",
                    "\xfano",
                    "b\u0159e",
                    "dub",
                    "kv\u011B",
                    "\u010Dvn",
                    "\u010Dvc",
                    "srp",
                    "z\xe1\u0159",
                    "\u0159\xedj",
                    "lis",
                    "pro",
                ],
                wide: [
                    "leden",
                    "\xfanor",
                    "b\u0159ezen",
                    "duben",
                    "kv\u011Bten",
                    "\u010Derven",
                    "\u010Dervenec",
                    "srpen",
                    "z\xe1\u0159\xed",
                    "\u0159\xedjen",
                    "listopad",
                    "prosinec",
                ],
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: ["L", "\xda", "B", "D", "K", "\u010C", "\u010C", "S", "Z", "\u0158", "L", "P"],
                abbreviated: [
                    "led",
                    "\xfano",
                    "b\u0159e",
                    "dub",
                    "kv\u011B",
                    "\u010Dvn",
                    "\u010Dvc",
                    "srp",
                    "z\xe1\u0159",
                    "\u0159\xedj",
                    "lis",
                    "pro",
                ],
                wide: [
                    "ledna",
                    "\xfanora",
                    "b\u0159ezna",
                    "dubna",
                    "kv\u011Btna",
                    "\u010Dervna",
                    "\u010Dervence",
                    "srpna",
                    "z\xe1\u0159\xed",
                    "\u0159\xedjna",
                    "listopadu",
                    "prosince",
                ],
            },
            defaultFormattingWidth: "wide",
        }),
        day: (0, d.A)({
            values: {
                narrow: ["ne", "po", "\xfat", "st", "\u010Dt", "p\xe1", "so"],
                short: ["ne", "po", "\xfat", "st", "\u010Dt", "p\xe1", "so"],
                abbreviated: ["ned", "pon", "\xfate", "st\u0159", "\u010Dtv", "p\xe1t", "sob"],
                wide: [
                    "ned\u011Ble",
                    "pond\u011Bl\xed",
                    "\xfater\xfd",
                    "st\u0159eda",
                    "\u010Dtvrtek",
                    "p\xe1tek",
                    "sobota",
                ],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, d.A)({
            values: {
                narrow: {
                    am: "dop.",
                    pm: "odp.",
                    midnight: "p\u016Flnoc",
                    noon: "poledne",
                    morning: "r\xe1no",
                    afternoon: "odpoledne",
                    evening: "ve\u010Der",
                    night: "noc",
                },
                abbreviated: {
                    am: "dop.",
                    pm: "odp.",
                    midnight: "p\u016Flnoc",
                    noon: "poledne",
                    morning: "r\xe1no",
                    afternoon: "odpoledne",
                    evening: "ve\u010Der",
                    night: "noc",
                },
                wide: {
                    am: "dopoledne",
                    pm: "odpoledne",
                    midnight: "p\u016Flnoc",
                    noon: "poledne",
                    morning: "r\xe1no",
                    afternoon: "odpoledne",
                    evening: "ve\u010Der",
                    night: "noc",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "dop.",
                    pm: "odp.",
                    midnight: "p\u016Flnoc",
                    noon: "poledne",
                    morning: "r\xe1no",
                    afternoon: "odpoledne",
                    evening: "ve\u010Der",
                    night: "noc",
                },
                abbreviated: {
                    am: "dop.",
                    pm: "odp.",
                    midnight: "p\u016Flnoc",
                    noon: "poledne",
                    morning: "r\xe1no",
                    afternoon: "odpoledne",
                    evening: "ve\u010Der",
                    night: "noc",
                },
                wide: {
                    am: "dopoledne",
                    pm: "odpoledne",
                    midnight: "p\u016Flnoc",
                    noon: "poledne",
                    morning: "r\xe1no",
                    afternoon: "odpoledne",
                    evening: "ve\u010Der",
                    night: "noc",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    l = t(303527);
let s = {
    code: "cs",
    formatDistance: function (e, n, t) {
        var r,
            a = o[e];
        r = "other" === a.type ? a.other : 1 === n ? a.one : n > 1 && n < 5 ? a.few : a.many;
        var u = (null == t ? void 0 : t.addSuffix) === !0,
            i = null == t ? void 0 : t.comparison;
        return (u && -1 === i ? r.past : u && 1 === i ? r.future : r.regular).replace("{{count}}", String(n));
    },
    formatLong: a,
    formatRelative: function (e, n) {
        var t = i[e];
        return "function" == typeof t ? t(n) : t;
    },
    localize: p,
    match: {
        ordinalNumber: (0, t(722023).A)({
            matchPattern: /^(\d+)\.?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
                return parseInt(e, 10);
            },
        }),
        era: (0, l.A)({
            matchPatterns: {
                narrow: /^(p[\u0159r](\.|ed) Kr\.|p[\u0159r](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
                abbreviated: /^(p[\u0159r](\.|ed) Kr\.|p[\u0159r](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
                wide: /^(p[\u0159r](\.|ed) Kristem|p[\u0159r](\.|ed) na[\u0161s][\xedi]m letopo[\u010dc]tem|po Kristu|na[\u0161s]eho letopo[\u010dc]tu)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^p[\u0159r]/i, /^(po|n)/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, l.A)({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^[1234]\. [\u010dc]tvrtlet[\xedi]/i,
                wide: /^[1234]\. [\u010dc]tvrtlet[\xedi]/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, l.A)({
            matchPatterns: {
                narrow: /^[l\xfaubdk\u010dcsz\u0159rlp]/i,
                abbreviated:
                    /^(led|[\xfau]no|b[\u0159r]e|dub|kv[\u011be]|[\u010dc]vn|[\u010dc]vc|srp|z[\xe1a][\u0159r]|[\u0159r][\xedi]j|lis|pro)/i,
                wide: /^(leden|ledna|[\xfau]nora?|b[\u0159r]ezen|b[\u0159r]ezna|duben|dubna|kv[\u011be]ten|kv[\u011be]tna|[\u010dc]erven(ec|ce)?|[\u010dc]ervna|srpen|srpna|z[\xe1a][\u0159r][\xedi]|[\u0159r][\xedi]jen|[\u0159r][\xedi]jna|listopad(a|u)?|prosinec|prosince)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [
                    /^l/i,
                    /^[\xfau]/i,
                    /^b/i,
                    /^d/i,
                    /^k/i,
                    /^[\u010dc]/i,
                    /^[\u010dc]/i,
                    /^s/i,
                    /^z/i,
                    /^[\u0159r]/i,
                    /^l/i,
                    /^p/i,
                ],
                any: [
                    /^led/i,
                    /^[\xfau]n/i,
                    /^b[\u0159r]e/i,
                    /^dub/i,
                    /^kv[\u011be]/i,
                    /^[\u010dc]vn|[\u010dc]erven(?!\w)|[\u010dc]ervna/i,
                    /^[\u010dc]vc|[\u010dc]erven(ec|ce)/i,
                    /^srp/i,
                    /^z[\xe1a][\u0159r]/i,
                    /^[\u0159r][\xedi]j/i,
                    /^lis/i,
                    /^pro/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        day: (0, l.A)({
            matchPatterns: {
                narrow: /^[npu\xfas\u010dps]/i,
                short: /^(ne|po|[\xfau]t|st|[\u010dc]t|p[\xe1a]|so)/i,
                abbreviated: /^(ned|pon|[\xfau]te|st[r\u0159]|[\u010dc]tv|p[\xe1a]t|sob)/i,
                wide: /^(ned[\u011be]le|pond[\u011be]l[\xedi]|[\xfau]ter[\xfdy]|st[\u0159r]eda|[\u010dc]tvrtek|p[\xe1a]tek|sobota)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^n/i, /^p/i, /^[\xfau]/i, /^s/i, /^[\u010dc]/i, /^p/i, /^s/i],
                any: [/^ne/i, /^po/i, /^[\xfau]t/i, /^st/i, /^[\u010dc]t/i, /^p[\xe1a]/i, /^so/i],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, l.A)({
            matchPatterns: {
                any: /^dopoledne|dop\.?|odpoledne|odp\.?|p[\u016fu]lnoc|poledne|r[\xe1a]no|odpoledne|ve[\u010dc]er|(v )?noci?/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^dop/i,
                    pm: /^odp/i,
                    midnight: /^p[\u016fu]lnoc/i,
                    noon: /^poledne/i,
                    morning: /r[\xe1a]no/i,
                    afternoon: /odpoledne/i,
                    evening: /ve[\u010dc]er/i,
                    night: /noc/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
};
