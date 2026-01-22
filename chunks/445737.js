function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n.d(t, {
    D: () => o,
    J: () => l,
});
let o = [
        {
            label: "Alabama",
            value: "AL",
        },
        {
            label: "Alaska",
            value: "AK",
        },
        {
            label: "American Samoa",
            value: "AS",
        },
        {
            label: "Arizona",
            value: "AZ",
        },
        {
            label: "Arkansas",
            value: "AR",
        },
        {
            label: "Armed Forces: Americas",
            value: "AA",
        },
        {
            label: "Armed Forces: Europe",
            value: "AE",
        },
        {
            label: "Armed Forces: Pacific",
            value: "AP",
        },
        {
            label: "California",
            value: "CA",
        },
        {
            label: "Colorado",
            value: "CO",
        },
        {
            label: "Connecticut",
            value: "CT",
        },
        {
            label: "Delaware",
            value: "DE",
        },
        {
            label: "District Of Columbia",
            value: "DC",
        },
        {
            label: "Federated States Of Micronesia",
            value: "FM",
        },
        {
            label: "Florida",
            value: "FL",
        },
        {
            label: "Georgia",
            value: "GA",
        },
        {
            label: "Guam",
            value: "GU",
        },
        {
            label: "Hawaii",
            value: "HI",
        },
        {
            label: "Idaho",
            value: "ID",
        },
        {
            label: "Illinois",
            value: "IL",
        },
        {
            label: "Indiana",
            value: "IN",
        },
        {
            label: "Iowa",
            value: "IA",
        },
        {
            label: "Kansas",
            value: "KS",
        },
        {
            label: "Kentucky",
            value: "KY",
        },
        {
            label: "Louisiana",
            value: "LA",
        },
        {
            label: "Maine",
            value: "ME",
        },
        {
            label: "Marshall Islands",
            value: "MH",
        },
        {
            label: "Maryland",
            value: "MD",
        },
        {
            label: "Massachusetts",
            value: "MA",
        },
        {
            label: "Michigan",
            value: "MI",
        },
        {
            label: "Minnesota",
            value: "MN",
        },
        {
            label: "Mississippi",
            value: "MS",
        },
        {
            label: "Missouri",
            value: "MO",
        },
        {
            label: "Montana",
            value: "MT",
        },
        {
            label: "Nebraska",
            value: "NE",
        },
        {
            label: "Nevada",
            value: "NV",
        },
        {
            label: "New Hampshire",
            value: "NH",
        },
        {
            label: "New Jersey",
            value: "NJ",
        },
        {
            label: "New Mexico",
            value: "NM",
        },
        {
            label: "New York",
            value: "NY",
        },
        {
            label: "North Carolina",
            value: "NC",
        },
        {
            label: "North Dakota",
            value: "ND",
        },
        {
            label: "Northern Mariana Islands",
            value: "MP",
        },
        {
            label: "Ohio",
            value: "OH",
        },
        {
            label: "Oklahoma",
            value: "OK",
        },
        {
            label: "Oregon",
            value: "OR",
        },
        {
            label: "Palau",
            value: "PW",
        },
        {
            label: "Pennsylvania",
            value: "PA",
        },
        {
            label: "Puerto Rico",
            value: "PR",
        },
        {
            label: "Rhode Island",
            value: "RI",
        },
        {
            label: "South Carolina",
            value: "SC",
        },
        {
            label: "South Dakota",
            value: "SD",
        },
        {
            label: "Tennessee",
            value: "TN",
        },
        {
            label: "Texas",
            value: "TX",
        },
        {
            label: "Utah",
            value: "UT",
        },
        {
            label: "Vermont",
            value: "VT",
        },
        {
            label: "Virgin Islands",
            value: "VI",
        },
        {
            label: "Virginia",
            value: "VA",
        },
        {
            label: "Washington",
            value: "WA",
        },
        {
            label: "West Virginia",
            value: "WV",
        },
        {
            label: "Wisconsin",
            value: "WI",
        },
        {
            label: "Wyoming",
            value: "WY",
        },
    ],
    l = Object.freeze(o.reduce((e, t) => s(i({}, e), { [t.label.toLowerCase()]: t.value }), {}));
