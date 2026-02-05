t.d(n, { A: () => o });
var r = {
    lessThanXSeconds: {
        one: { regular: "m\xe9ně než sekunda", past: "před m\xe9ně než sekundou", future: "za m\xe9ně než sekundu" },
        few: {
            regular: "m\xe9ně než {{count}} sekundy",
            past: "před m\xe9ně než {{count}} sekundami",
            future: "za m\xe9ně než {{count}} sekundy",
        },
        many: {
            regular: "m\xe9ně než {{count}} sekund",
            past: "před m\xe9ně než {{count}} sekundami",
            future: "za m\xe9ně než {{count}} sekund",
        },
    },
    xSeconds: {
        one: { regular: "sekunda", past: "před sekundou", future: "za sekundu" },
        few: { regular: "{{count}} sekundy", past: "před {{count}} sekundami", future: "za {{count}} sekundy" },
        many: { regular: "{{count}} sekund", past: "před {{count}} sekundami", future: "za {{count}} sekund" },
    },
    halfAMinute: { type: "other", other: { regular: "půl minuty", past: "před půl minutou", future: "za půl minuty" } },
    lessThanXMinutes: {
        one: { regular: "m\xe9ně než minuta", past: "před m\xe9ně než minutou", future: "za m\xe9ně než minutu" },
        few: {
            regular: "m\xe9ně než {{count}} minuty",
            past: "před m\xe9ně než {{count}} minutami",
            future: "za m\xe9ně než {{count}} minuty",
        },
        many: {
            regular: "m\xe9ně než {{count}} minut",
            past: "před m\xe9ně než {{count}} minutami",
            future: "za m\xe9ně než {{count}} minut",
        },
    },
    xMinutes: {
        one: { regular: "minuta", past: "před minutou", future: "za minutu" },
        few: { regular: "{{count}} minuty", past: "před {{count}} minutami", future: "za {{count}} minuty" },
        many: { regular: "{{count}} minut", past: "před {{count}} minutami", future: "za {{count}} minut" },
    },
    aboutXHours: {
        one: { regular: "přibližně hodina", past: "přibližně před hodinou", future: "přibližně za hodinu" },
        few: {
            regular: "přibližně {{count}} hodiny",
            past: "přibližně před {{count}} hodinami",
            future: "přibližně za {{count}} hodiny",
        },
        many: {
            regular: "přibližně {{count}} hodin",
            past: "přibližně před {{count}} hodinami",
            future: "přibližně za {{count}} hodin",
        },
    },
    xHours: {
        one: { regular: "hodina", past: "před hodinou", future: "za hodinu" },
        few: { regular: "{{count}} hodiny", past: "před {{count}} hodinami", future: "za {{count}} hodiny" },
        many: { regular: "{{count}} hodin", past: "před {{count}} hodinami", future: "za {{count}} hodin" },
    },
    xDays: {
        one: { regular: "den", past: "před dnem", future: "za den" },
        few: { regular: "{{count}} dny", past: "před {{count}} dny", future: "za {{count}} dny" },
        many: { regular: "{{count}} dn\xed", past: "před {{count}} dny", future: "za {{count}} dn\xed" },
    },
    aboutXWeeks: {
        one: { regular: "přibližně t\xfdden", past: "přibližně před t\xfddnem", future: "přibližně za t\xfdden" },
        few: {
            regular: "přibližně {{count}} t\xfddny",
            past: "přibližně před {{count}} t\xfddny",
            future: "přibližně za {{count}} t\xfddny",
        },
        many: {
            regular: "přibližně {{count}} t\xfddnů",
            past: "přibližně před {{count}} t\xfddny",
            future: "přibližně za {{count}} t\xfddnů",
        },
    },
    xWeeks: {
        one: { regular: "t\xfdden", past: "před t\xfddnem", future: "za t\xfdden" },
        few: { regular: "{{count}} t\xfddny", past: "před {{count}} t\xfddny", future: "za {{count}} t\xfddny" },
        many: { regular: "{{count}} t\xfddnů", past: "před {{count}} t\xfddny", future: "za {{count}} t\xfddnů" },
    },
    aboutXMonths: {
        one: { regular: "přibližně měs\xedc", past: "přibližně před měs\xedcem", future: "přibližně za měs\xedc" },
        few: {
            regular: "přibližně {{count}} měs\xedce",
            past: "přibližně před {{count}} měs\xedci",
            future: "přibližně za {{count}} měs\xedce",
        },
        many: {
            regular: "přibližně {{count}} měs\xedců",
            past: "přibližně před {{count}} měs\xedci",
            future: "přibližně za {{count}} měs\xedců",
        },
    },
    xMonths: {
        one: { regular: "měs\xedc", past: "před měs\xedcem", future: "za měs\xedc" },
        few: { regular: "{{count}} měs\xedce", past: "před {{count}} měs\xedci", future: "za {{count}} měs\xedce" },
        many: { regular: "{{count}} měs\xedců", past: "před {{count}} měs\xedci", future: "za {{count}} měs\xedců" },
    },
    aboutXYears: {
        one: { regular: "přibližně rok", past: "přibližně před rokem", future: "přibližně za rok" },
        few: {
            regular: "přibližně {{count}} roky",
            past: "přibližně před {{count}} roky",
            future: "přibližně za {{count}} roky",
        },
        many: {
            regular: "přibližně {{count}} roků",
            past: "přibližně před {{count}} roky",
            future: "přibližně za {{count}} roků",
        },
    },
    xYears: {
        one: { regular: "rok", past: "před rokem", future: "za rok" },
        few: { regular: "{{count}} roky", past: "před {{count}} roky", future: "za {{count}} roky" },
        many: { regular: "{{count}} roků", past: "před {{count}} roky", future: "za {{count}} roků" },
    },
    overXYears: {
        one: { regular: "v\xedce než rok", past: "před v\xedce než rokem", future: "za v\xedce než rok" },
        few: {
            regular: "v\xedce než {{count}} roky",
            past: "před v\xedce než {{count}} roky",
            future: "za v\xedce než {{count}} roky",
        },
        many: {
            regular: "v\xedce než {{count}} roků",
            past: "před v\xedce než {{count}} roky",
            future: "za v\xedce než {{count}} roků",
        },
    },
    almostXYears: {
        one: { regular: "skoro rok", past: "skoro před rokem", future: "skoro za rok" },
        few: { regular: "skoro {{count}} roky", past: "skoro před {{count}} roky", future: "skoro za {{count}} roky" },
        many: { regular: "skoro {{count}} roků", past: "skoro před {{count}} roky", future: "skoro za {{count}} roků" },
    },
};
let o = function (e, n, t) {
    var o,
        a = r[e];
    o = "other" === a.type ? a.other : 1 === n ? a.one : n > 1 && n < 5 ? a.few : a.many;
    var u = (null == t ? void 0 : t.addSuffix) === !0,
        i = null == t ? void 0 : t.comparison;
    return (u && -1 === i ? o.past : u && 1 === i ? o.future : o.regular).replace("{{count}}", String(n));
};
