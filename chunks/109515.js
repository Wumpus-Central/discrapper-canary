n.d(t, { Z: () => g });
var r = n(475637),
    i = n(925300),
    o = /^(\d+)(th|st|nd|rd)?/i,
    a = /\d+/i,
    s = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i
    },
    l = {
        any: [/^b/i, /^(a|c)/i]
    },
    c = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i
    },
    u = {
        any: [/1/i, /2/i, /3/i, /4/i]
    },
    d = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    },
    f = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    },
    _ = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    },
    p = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    },
    h = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    },
    m = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i
        }
    };
let g = {
    ordinalNumber: (0, i.Z)({
        matchPattern: o,
        parsePattern: a,
        valueCallback: function (e) {
            return parseInt(e, 10);
        }
    }),
    era: (0, r.Z)({
        matchPatterns: s,
        defaultMatchWidth: 'wide',
        parsePatterns: l,
        defaultParseWidth: 'any'
    }),
    quarter: (0, r.Z)({
        matchPatterns: c,
        defaultMatchWidth: 'wide',
        parsePatterns: u,
        defaultParseWidth: 'any',
        valueCallback: function (e) {
            return e + 1;
        }
    }),
    month: (0, r.Z)({
        matchPatterns: d,
        defaultMatchWidth: 'wide',
        parsePatterns: f,
        defaultParseWidth: 'any'
    }),
    day: (0, r.Z)({
        matchPatterns: _,
        defaultMatchWidth: 'wide',
        parsePatterns: p,
        defaultParseWidth: 'any'
    }),
    dayPeriod: (0, r.Z)({
        matchPatterns: h,
        defaultMatchWidth: 'any',
        parsePatterns: m,
        defaultParseWidth: 'any'
    })
};
