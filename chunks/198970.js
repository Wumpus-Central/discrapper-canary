n.d(t, { Ay: () => Y });
var l,
    i,
    r = n(627968),
    a = n(64700);
let s = [
        { label: "Alberta", value: "AB" },
        { label: "British Columbia", value: "BC" },
        { label: "Manitoba", value: "MB" },
        { label: "New Brunswick", value: "NB" },
        { label: "Newfoundland and Labrador", value: "NL" },
        { label: "Nova Scotia", value: "NS" },
        { label: "Ontario", value: "ON" },
        { label: "Prince Edward Island", value: "PE" },
        { label: "Quebec", value: "QC" },
        { label: "Saskatchewan", value: "SK" },
        { label: "Northwest Territories", value: "NT" },
        { label: "Nunavut", value: "NU" },
        { label: "Yukon", value: "YT" },
    ],
    o = Object.freeze(s.reduce((e, t) => ({ ...e, [t.label.toLowerCase()]: t.value }), {}));
var u = n(96337);
let c = [
        { label: "Alabama", value: "AL" },
        { label: "Alaska", value: "AK" },
        { label: "American Samoa", value: "AS" },
        { label: "Arizona", value: "AZ" },
        { label: "Arkansas", value: "AR" },
        { label: "Armed Forces: Americas", value: "AA" },
        { label: "Armed Forces: Europe", value: "AE" },
        { label: "Armed Forces: Pacific", value: "AP" },
        { label: "California", value: "CA" },
        { label: "Colorado", value: "CO" },
        { label: "Connecticut", value: "CT" },
        { label: "Delaware", value: "DE" },
        { label: "District Of Columbia", value: "DC" },
        { label: "Federated States Of Micronesia", value: "FM" },
        { label: "Florida", value: "FL" },
        { label: "Georgia", value: "GA" },
        { label: "Guam", value: "GU" },
        { label: "Hawaii", value: "HI" },
        { label: "Idaho", value: "ID" },
        { label: "Illinois", value: "IL" },
        { label: "Indiana", value: "IN" },
        { label: "Iowa", value: "IA" },
        { label: "Kansas", value: "KS" },
        { label: "Kentucky", value: "KY" },
        { label: "Louisiana", value: "LA" },
        { label: "Maine", value: "ME" },
        { label: "Marshall Islands", value: "MH" },
        { label: "Maryland", value: "MD" },
        { label: "Massachusetts", value: "MA" },
        { label: "Michigan", value: "MI" },
        { label: "Minnesota", value: "MN" },
        { label: "Mississippi", value: "MS" },
        { label: "Missouri", value: "MO" },
        { label: "Montana", value: "MT" },
        { label: "Nebraska", value: "NE" },
        { label: "Nevada", value: "NV" },
        { label: "New Hampshire", value: "NH" },
        { label: "New Jersey", value: "NJ" },
        { label: "New Mexico", value: "NM" },
        { label: "New York", value: "NY" },
        { label: "North Carolina", value: "NC" },
        { label: "North Dakota", value: "ND" },
        { label: "Northern Mariana Islands", value: "MP" },
        { label: "Ohio", value: "OH" },
        { label: "Oklahoma", value: "OK" },
        { label: "Oregon", value: "OR" },
        { label: "Palau", value: "PW" },
        { label: "Pennsylvania", value: "PA" },
        { label: "Puerto Rico", value: "PR" },
        { label: "Rhode Island", value: "RI" },
        { label: "South Carolina", value: "SC" },
        { label: "South Dakota", value: "SD" },
        { label: "Tennessee", value: "TN" },
        { label: "Texas", value: "TX" },
        { label: "Utah", value: "UT" },
        { label: "Vermont", value: "VT" },
        { label: "Virgin Islands", value: "VI" },
        { label: "Virginia", value: "VA" },
        { label: "Washington", value: "WA" },
        { label: "West Virginia", value: "WV" },
        { label: "Wisconsin", value: "WI" },
        { label: "Wyoming", value: "WY" },
    ],
    d = Object.freeze(c.reduce((e, t) => ({ ...e, [t.label.toLowerCase()]: t.value }), {}));
var p = n(292666),
    m = n(783878),
    h = n(915089),
    C = n(403362),
    E = n(832208),
    A = n(375708),
    f = n(536439);
let S = [
        "AE",
        "AG",
        "AN",
        "AO",
        "AW",
        "BF",
        "BI",
        "BJ",
        "BM",
        "BO",
        "BQ",
        "BS",
        "BW",
        "BZ",
        "CD",
        "CF",
        "CG",
        "CI",
        "CK",
        "CM",
        "CW",
        "DJ",
        "DM",
        "ER",
        "FJ",
        "GA",
        "GD",
        "GH",
        "GM",
        "GQ",
        "GY",
        "HK",
        "HM",
        "IE",
        "JM",
        "KE",
        "KI",
        "KM",
        "KN",
        "KP",
        "LY",
        "ML",
        "MO",
        "MR",
        "MW",
        "NA",
        "NR",
        "NU",
        "QA",
        "RW",
        "SB",
        "SC",
        "SL",
        "SR",
        "ST",
        "SX",
        "SY",
        "TD",
        "TF",
        "TG",
        "TK",
        "TL",
        "TO",
        "TV",
        "UG",
        "VU",
        "YE",
        "ZA",
        "ZW",
    ],
    y = u.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })).filter(
        (e) => "KP" !== e.value && "SY" !== e.value,
    ),
    P = Object.freeze(y.reduce((e, t) => ({ ...e, [t.label.toLowerCase()]: t.value }), {})),
    I = (0, h.Ld)(),
    T = (0, h.Ld)(),
    _ = (0, h.Ld)(),
    g = (0, h.Ld)(),
    v = (0, h.Ld)(),
    x = (0, h.Ld)(),
    N = (0, h.Ld)();
var R =
        (((l = R || {}).MODAL_US = "modalUS"),
        (l.MODAL_INTL = "modalInternational"),
        (l.MODAL_US_WITH_NAME = "modalUSWithName"),
        (l.MODAL_INTL_WITH_NAME = "modalInternationalWithName"),
        (l.SETTINGS_US = "settingsUS"),
        (l.SETTINGS_INTL = "settingsInternational"),
        (l.SETTINGS_INTL_NO_NAME = "settingsInternationalWithoutName"),
        (l.SETTINGS_US_MOBILE = "settingsUSMobile"),
        (l.SETTINGS_INTL_MOBILE = "settingsInternationalMobile"),
        (l.SETTINGS_INTL_NO_NAME_MOBILE = "settingsInternationalWithoutNameMobile"),
        l),
    b = (((i = b || {}).EDIT = "edit"), (i.CREATE = "create"), i);
let M = { US: c, CA: s },
    O = { US: d, CA: o },
    j = (e, t) => ({
        name: "name",
        id: I,
        title: () => A.intl.string(A.t.vyuULb),
        autoComplete: "name",
        getClassNameForLayout: (e) =>
            [
                "modalUS",
                "modalInternational",
                "modalUSWithName",
                "modalInternationalWithName",
                "settingsUSMobile",
                "settingsInternationalMobile",
                "settingsInternationalWithoutNameMobile",
            ].includes(e)
                ? f.c6
                : f.bt,
        renderInput: (e) => (0, r.jsx)(p.k, { ...e }),
    }),
    L = (e, t) => {
        let n = t?.allowedBillingAddressCountries,
            l = null != n && n.length > 0 ? y.filter((e) => n.includes(e.value)) : y,
            i = t?.countryHelperText;
        return {
            name: "country",
            id: T,
            title: () => A.intl.string(A.t.eDdrAD),
            helperText: null != i && "" !== i ? () => i : void 0,
            autoComplete: "country",
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalUS":
                    case "modalInternational":
                    case "modalUSWithName":
                    case "modalInternationalWithName":
                        return f.c6;
                    default:
                        return f.vO;
                }
            },
            renderInput(e, t) {
                let { onChange: n, ...i } = e;
                return (0, r.jsx)(m.Z, {
                    ...i,
                    selectionMode: "single",
                    autoFocus: !0,
                    maxOptionsVisible: 8,
                    disabled: "edit" === t.mode || 1 === l.length,
                    options: l,
                    onQueryChange: (t) => {
                        let l = t.target.value;
                        if (null == n) return;
                        let i = l.toLowerCase();
                        i in P && n(P[i], e.name);
                    },
                    onSelectionChange: (t) => {
                        null != n && n(t, e.name);
                    },
                });
            },
        };
    },
    D = (e, t) => ({
        name: "line1",
        id: _,
        title: () => A.intl.string(A.t.x0beVT),
        autoComplete: "address-line1",
        placeholder: () => A.intl.string(A.t["ynII/6"]),
        getClassNameForLayout: (e) =>
            [
                "modalUS",
                "modalInternational",
                "modalUSWithName",
                "modalInternationalWithName",
                "settingsUSMobile",
                "settingsInternationalMobile",
                "settingsInternationalWithoutNameMobile",
            ].includes(e)
                ? f.c6
                : f.bt,
        renderInput: (e) => (0, r.jsx)(p.k, { ...e }),
    }),
    U = (e, t) => ({
        name: "line2",
        id: g,
        title: () => A.intl.string(A.t.i2Z0gI),
        placeholder: () => A.intl.string(A.t.fKLoNo),
        autoComplete: "address-line2",
        getClassNameForLayout: (e) =>
            [
                "modalUS",
                "modalInternational",
                "modalUSWithName",
                "modalInternationalWithName",
                "settingsUSMobile",
                "settingsInternationalMobile",
                "settingsInternationalWithoutNameMobile",
            ].includes(e)
                ? f.c6
                : f.JH,
        renderInput: (e) => (0, r.jsx)(p.k, { ...e }),
    }),
    w = (e, t) => ({
        name: "city",
        id: v,
        title: () => A.intl.string(A.t.bUSWlw),
        autoComplete: "address-level2",
        placeholder: () => A.intl.string(A.t["5rRx31"]),
        getClassNameForLayout: (e) => {
            switch (e) {
                case "modalInternational":
                case "modalUS":
                case "modalInternationalWithName":
                case "modalUSWithName":
                case "settingsUSMobile":
                case "settingsInternationalMobile":
                case "settingsInternationalWithoutNameMobile":
                    return f.c6;
                case "settingsInternational":
                    return f.bt;
                default:
                    return f.ep;
            }
        },
        renderInput: (e) => (0, r.jsx)(p.k, { ...e }),
    }),
    k = (e, t) => {
        let n, l;
        switch (e) {
            case "US":
                (n = A.intl.string(A.t["/95CeM"])), (l = A.intl.string(A.t["9xLNmi"]));
                break;
            case "CA":
                (n = A.intl.string(A.t.mfpJ9m)), (l = A.intl.string(A.t.Nc4Rzt));
                break;
            default:
                n = A.intl.string(A.t.mfpJ9m);
        }
        return {
            name: "postalCode",
            id: x,
            title: () => n,
            autoComplete: "postal-code",
            placeholder: () => l,
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalInternational":
                    case "modalInternationalWithName":
                        return f.c6;
                    case "modalUS":
                    case "modalUSWithName":
                    case "settingsUSMobile":
                    case "settingsInternationalMobile":
                    case "settingsInternationalWithoutNameMobile":
                        return f.ep;
                    case "settingsInternational":
                        return f.kN;
                    default:
                        return f.IW;
                }
            },
            renderInput: (e) => (0, r.jsx)(p.k, { ...e }),
        };
    },
    G = (e, t) => {
        let n;
        switch (e) {
            case "US":
                n = A.intl.string(A.t.PNfx5f);
                break;
            case "CA":
                n = A.intl.string(A.t["7A/tE0"]);
                break;
            default:
                n = A.intl.string(A.t.w0xG2u);
        }
        return {
            name: "state",
            id: N,
            title: () => n,
            autoComplete: "address-level1",
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalInternational":
                    case "modalInternationalWithName":
                    case "settingsUSMobile":
                    case "settingsInternationalMobile":
                    case "settingsInternationalWithoutNameMobile":
                        return f.c6;
                    case "modalUS":
                    case "modalUSWithName":
                        return f.ep;
                    case "settingsInternational":
                        return f.kN;
                    default:
                        return f.IW;
                }
            },
            renderInput(t, n) {
                let l = M[e],
                    i =
                        null == t.value ||
                        "" === t.value ||
                        (null != l &&
                            null !=
                                l.find((e) => {
                                    let { value: n } = e;
                                    return n === t.value;
                                })),
                    { onChange: a, ...s } = t,
                    o = O[e];
                return ["US", "CA"].includes(e) && i
                    ? (0, r.jsx)(m.Z, {
                          ...s,
                          selectionMode: "single",
                          options: l,
                          formatOption: (e) => {
                              let { value: t, label: n } = e;
                              return { id: t, value: t, label: n };
                          },
                          onQueryChange: (e) => {
                              let n = e.target.value.toLowerCase();
                              n in o && null != a && a(o[n], t.name);
                          },
                          onSelectionChange: (e) => {
                              null != a && a(e, t.name);
                          },
                      })
                    : (0, r.jsx)(p.k, { ...t });
            },
        };
    },
    F = {
        modalUS: [[L], [D], [U], [w], [G, k]],
        modalInternational: [[L], [D], [U], [w], [G], [k]],
        modalUSWithName: [[L], [j], [D], [U], [w], [G, k]],
        modalInternationalWithName: [[L], [j], [D], [U], [w], [G], [k]],
        settingsUS: [[j], [D, U], [w, G, k], [L]],
        settingsUSMobile: [[j], [D], [U], [w], [G], [k], [L]],
        settingsInternational: [[j], [D, U], [w], [G, k], [L]],
        settingsInternationalMobile: [[j], [D], [U], [w], [G], [k], [L]],
        settingsInternationalWithoutName: [[D, U], [w], [G, k], [L]],
        settingsInternationalWithoutNameMobile: [[D], [U], [w], [G], [k], [L]],
    };
class B extends a.PureComponent {
    static Layouts = R;
    static Modes = b;
    static defaultProps = {
        name: "",
        country: "",
        line1: "",
        line2: "",
        city: "",
        postalCode: "",
        state: "",
        layout: "modalUS",
        mode: "create",
        error: null,
        allowedBillingAddressCountries: null,
    };
    state = {
        values: {
            name: this.props.name,
            country: this.props.country,
            line1: this.props.line1,
            line2: this.props.line2,
            city: this.props.city,
            postalCode: this.props.postalCode,
            state: this.props.state,
        },
        dirtyFields: {},
        errors: {},
    };
    componentDidMount() {
        this.handleInfoChange();
    }
    componentDidUpdate(e, t) {
        this.state !== t && this.handleInfoChange();
    }
    hasValue(e) {
        return null != e && "" !== e;
    }
    validateForm(e) {
        let { values: t, dirtyFields: n } = this.state,
            l = {};
        (e && !n.name) || this.hasValue(t.name) || "edit" !== this.props.mode || (l.name = A.intl.string(A.t.KU5mWF)),
            (e && !n.country) || this.hasValue(t.country) || (l.country = A.intl.string(A.t["+bm+zE"])),
            (e && !n.line1) || this.hasValue(t.line1) || (l.line1 = A.intl.string(A.t["6HMkB4"])),
            (e && !n.city) || this.hasValue(t.city) || (l.city = A.intl.string(A.t.kOrBmU));
        let i = t.country;
        switch (i) {
            case "US":
                if (!e || n.postalCode) {
                    let e = t.postalCode;
                    this.hasValue(e)
                        ? 5 !== e.length
                            ? (l.postalCode = A.intl.string(A.t["+zjAbg"]))
                            : /^\d{5}$/.test(e) || (l.postalCode = A.intl.string(A.t.CuZPea))
                        : (l.postalCode = A.intl.string(A.t["iXID+2"]));
                }
                (e && !n.state) || this.hasValue(t.state) || (l.state = A.intl.string(A.t.RIaPdF));
                break;
            case "CA":
                (e && !n.postalCode) || this.hasValue(t.postalCode) || (l.postalCode = A.intl.string(A.t.LRlhb1)),
                    (e && !n.state) || this.hasValue(t.state) || (l.state = A.intl.string(A.t.PsJCcj));
                break;
            default:
                (e && !n.postalCode) ||
                    this.hasValue(t.postalCode) ||
                    S.includes(i ?? "") ||
                    (l.postalCode = A.intl.string(A.t.LRlhb1));
        }
        return l;
    }
    handleInfoChange() {
        let { values: e, dirtyFields: t } = this.state,
            n = this.validateForm(!1);
        this.props.onBillingAddressChange(e, 0 === Object.keys(n).length, Object.keys(t).length > 0);
    }
    handleFieldBlur = () => {
        this.setState({ errors: this.validateForm(!0) });
    };
    handleFieldChange = (e, t) => {
        if (null == t) return;
        let { values: n, errors: l, dirtyFields: i } = this.state;
        delete l[t], this.setState({ values: { ...n, [t]: e }, dirtyFields: { ...i, [t]: !0 }, errors: l });
    };
    render() {
        let { errors: e, values: t } = this.state,
            {
                layout: n,
                mode: l,
                className: i,
                error: a,
                allowedBillingAddressCountries: s,
                countryHelperText: o,
            } = this.props,
            u = F[n];
        if (null == u) throw Error("Provide a proper layout property.");
        let c = t.country,
            d = { allowedBillingAddressCountries: s, countryHelperText: o },
            p = u
                .map((e) => {
                    let t = e.map((e) => e(c ?? "", d)).filter(C.Vq);
                    return t.length > 0 ? { fields: t } : null;
                })
                .filter(C.Vq);
        return (0, r.jsx)(E.A, {
            className: i,
            form: p,
            layout: n,
            values: t,
            errors: e,
            formError: a,
            onFieldChange: this.handleFieldChange,
            onFieldBlur: this.handleFieldBlur,
            mode: l,
        });
    }
}
let Y = B;
