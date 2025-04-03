e.d(a, { Z: () => t });
var n = e(475637);
let t = {
    ordinalNumber: (0, e(925300).Z)({
        matchPattern: /^(\d+)?/i,
        parsePattern: /\d+/i,
        valueCallback: function (i) {
            return parseInt(i, 10);
        }
    }),
    era: (0, n.Z)({
        matchPatterns: {
            narrow: /^(Î|D)/i,
            abbreviated: /^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,
            wide: /^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/^ÎC/i, /^DC/i],
            wide: [/^(Înainte de Cristos|Înaintea erei noastre)/i, /^(După Cristos|Era noastră)/i]
        },
        defaultParseWidth: 'any'
    }),
    quarter: (0, n.Z)({
        matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^T[1234]/i,
            wide: /^trimestrul [1234]/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/1/i, /2/i, /3/i, /4/i]
        },
        defaultParseWidth: 'any',
        valueCallback: function (i) {
            return i + 1;
        }
    }),
    month: (0, n.Z)({
        matchPatterns: {
            narrow: /^[ifmaasond]/i,
            abbreviated: /^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,
            wide: /^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^i/i, /^f/i, /^m/i, /^a/i, /^m/i, /^i/i, /^i/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
            any: [/^ia/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^iun/i, /^iul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
        },
        defaultParseWidth: 'any'
    }),
    day: (0, n.Z)({
        matchPatterns: {
            narrow: /^[dlmjvs]/i,
            short: /^(d|l|ma|mi|j|v|s)/i,
            abbreviated: /^(dum|lun|mar|mie|jo|vi|sâ)/i,
            wide: /^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
            any: [/^d/i, /^l/i, /^ma/i, /^mi/i, /^j/i, /^v/i, /^s/i]
        },
        defaultParseWidth: 'any'
    }),
    dayPeriod: (0, n.Z)({
        matchPatterns: {
            narrow: /^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i,
            any: /^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i
        },
        defaultMatchWidth: 'any',
        parsePatterns: {
            any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mn/i,
                noon: /amiaza/i,
                morning: /dimineaţa/i,
                afternoon: /după-amiaza/i,
                evening: /seara/i,
                night: /noaptea/i
            }
        },
        defaultParseWidth: 'any'
    })
};
