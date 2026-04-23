"use strict";
n.d(t, { Ay: () => H });
var i,
    r,
    s = n(627968),
    a = n(64700);
let o = [
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
    l = Object.freeze(o.reduce((e, t) => ({ ...e, [t.label.toLowerCase()]: t.value }), {}));
var d = n(96337);
let _ = [
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
    u = Object.freeze(_.reduce((e, t) => ({ ...e, [t.label.toLowerCase()]: t.value }), {}));
var c = n(292666),
    E = n(783878),
    h = n(915089),
    m = n(403362),
    f = n(832208),
    g = n(985018),
    p = n(536439);
let A = [
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
    I = d.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })).filter(
        (e) => "KP" !== e.value && "SY" !== e.value,
    ),
    T = Object.freeze(I.reduce((e, t) => ({ ...e, [t.label.toLowerCase()]: t.value }), {})),
    S = (0, h.Ld)(),
    N = (0, h.Ld)(),
    C = (0, h.Ld)(),
    R = (0, h.Ld)(),
    O = (0, h.Ld)(),
    y = (0, h.Ld)(),
    v = (0, h.Ld)();
var D =
        (((i = D || {}).MODAL_US = "modalUS"),
        (i.MODAL_INTL = "modalInternational"),
        (i.MODAL_US_WITH_NAME = "modalUSWithName"),
        (i.MODAL_INTL_WITH_NAME = "modalInternationalWithName"),
        (i.SETTINGS_US = "settingsUS"),
        (i.SETTINGS_INTL = "settingsInternational"),
        (i.SETTINGS_INTL_NO_NAME = "settingsInternationalWithoutName"),
        (i.SETTINGS_US_MOBILE = "settingsUSMobile"),
        (i.SETTINGS_INTL_MOBILE = "settingsInternationalMobile"),
        (i.SETTINGS_INTL_NO_NAME_MOBILE = "settingsInternationalWithoutNameMobile"),
        i),
    L = (((r = L || {}).EDIT = "edit"), (r.CREATE = "create"), r);
let b = { US: _, CA: o },
    w = { US: u, CA: l },
    P = (e, t) => ({
        name: "name",
        id: S,
        title: () => g.intl.string(g.t.vyuULb),
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
                ? p.c6
                : p.bt,
        renderInput: (e) => (0, s.jsx)(c.k, { ...e }),
    }),
    k = (e, t) => {
        let n = t?.allowedBillingAddressCountries,
            i = null != n && n.length > 0 ? I.filter((e) => n.includes(e.value)) : I;
        return {
            name: "country",
            id: N,
            title: () => g.intl.string(g.t.eDdrAD),
            autoComplete: "country",
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalUS":
                    case "modalInternational":
                    case "modalUSWithName":
                    case "modalInternationalWithName":
                        return p.c6;
                    default:
                        return p.vO;
                }
            },
            renderInput(e, t) {
                let { onChange: n, ...r } = e;
                return (0, s.jsx)(E.Z, {
                    ...r,
                    selectionMode: "single",
                    autoFocus: !0,
                    maxOptionsVisible: 8,
                    disabled: "edit" === t.mode || 1 === i.length,
                    options: i,
                    onQueryChange: (t) => {
                        let i = t.target.value;
                        if (null == n) return;
                        let r = i.toLowerCase();
                        r in T && n(T[r], e.name);
                    },
                    onSelectionChange: (t) => {
                        null != n && n(t, e.name);
                    },
                });
            },
        };
    },
    M = (e, t) => ({
        name: "line1",
        id: C,
        title: () => g.intl.string(g.t.x0beVT),
        autoComplete: "address-line1",
        placeholder: () => g.intl.string(g.t["ynII/6"]),
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
                ? p.c6
                : p.bt,
        renderInput: (e) => (0, s.jsx)(c.k, { ...e }),
    }),
    U = (e, t) => ({
        name: "line2",
        id: R,
        title: () => g.intl.string(g.t.i2Z0gI),
        placeholder: () => g.intl.string(g.t.fKLoNo),
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
                ? p.c6
                : p.JH,
        renderInput: (e) => (0, s.jsx)(c.k, { ...e }),
    }),
    x = (e, t) => ({
        name: "city",
        id: O,
        title: () => g.intl.string(g.t.bUSWlw),
        autoComplete: "address-level2",
        placeholder: () => g.intl.string(g.t["5rRx31"]),
        getClassNameForLayout: (e) => {
            switch (e) {
                case "modalInternational":
                case "modalUS":
                case "modalInternationalWithName":
                case "modalUSWithName":
                case "settingsUSMobile":
                case "settingsInternationalMobile":
                case "settingsInternationalWithoutNameMobile":
                    return p.c6;
                case "settingsInternational":
                    return p.bt;
                default:
                    return p.ep;
            }
        },
        renderInput: (e) => (0, s.jsx)(c.k, { ...e }),
    }),
    G = (e, t) => {
        let n, i;
        switch (e) {
            case "US":
                (n = g.intl.string(g.t["/95CeM"])), (i = g.intl.string(g.t["9xLNmi"]));
                break;
            case "CA":
                (n = g.intl.string(g.t.mfpJ9m)), (i = g.intl.string(g.t.Nc4Rzt));
                break;
            default:
                n = g.intl.string(g.t.mfpJ9m);
        }
        return {
            name: "postalCode",
            id: y,
            title: () => n,
            autoComplete: "postal-code",
            placeholder: () => i,
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalInternational":
                    case "modalInternationalWithName":
                        return p.c6;
                    case "modalUS":
                    case "modalUSWithName":
                    case "settingsUSMobile":
                    case "settingsInternationalMobile":
                    case "settingsInternationalWithoutNameMobile":
                        return p.ep;
                    case "settingsInternational":
                        return p.kN;
                    default:
                        return p.IW;
                }
            },
            renderInput: (e) => (0, s.jsx)(c.k, { ...e }),
        };
    },
    V = (e, t) => {
        let n;
        switch (e) {
            case "US":
                n = g.intl.string(g.t.PNfx5f);
                break;
            case "CA":
                n = g.intl.string(g.t["7A/tE0"]);
                break;
            default:
                n = g.intl.string(g.t.w0xG2u);
        }
        return {
            name: "state",
            id: v,
            title: () => n,
            autoComplete: "address-level1",
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalInternational":
                    case "modalInternationalWithName":
                    case "settingsUSMobile":
                    case "settingsInternationalMobile":
                    case "settingsInternationalWithoutNameMobile":
                        return p.c6;
                    case "modalUS":
                    case "modalUSWithName":
                        return p.ep;
                    case "settingsInternational":
                        return p.kN;
                    default:
                        return p.IW;
                }
            },
            renderInput(t, n) {
                let i = b[e],
                    r =
                        null == t.value ||
                        "" === t.value ||
                        (null != i &&
                            null !=
                                i.find((e) => {
                                    let { value: n } = e;
                                    return n === t.value;
                                })),
                    { onChange: a, ...o } = t,
                    l = w[e];
                return ["US", "CA"].includes(e) && r
                    ? (0, s.jsx)(E.Z, {
                          ...o,
                          selectionMode: "single",
                          options: i,
                          formatOption: (e) => {
                              let { value: t, label: n } = e;
                              return { id: t, value: t, label: n };
                          },
                          onQueryChange: (e) => {
                              let n = e.target.value.toLowerCase();
                              n in l && null != a && a(l[n], t.name);
                          },
                          onSelectionChange: (e) => {
                              null != a && a(e, t.name);
                          },
                      })
                    : (0, s.jsx)(c.k, { ...t });
            },
        };
    },
    F = {
        modalUS: [[k], [M], [U], [x], [V, G]],
        modalInternational: [[k], [M], [U], [x], [V], [G]],
        modalUSWithName: [[k], [P], [M], [U], [x], [V, G]],
        modalInternationalWithName: [[k], [P], [M], [U], [x], [V], [G]],
        settingsUS: [[P], [M, U], [x, V, G], [k]],
        settingsUSMobile: [[P], [M], [U], [x], [V], [G], [k]],
        settingsInternational: [[P], [M, U], [x], [V, G], [k]],
        settingsInternationalMobile: [[P], [M], [U], [x], [V], [G], [k]],
        settingsInternationalWithoutName: [[M, U], [x], [V, G], [k]],
        settingsInternationalWithoutNameMobile: [[M], [U], [x], [V], [G], [k]],
    };
class B extends a.PureComponent {
    static Layouts = D;
    static Modes = L;
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
            i = {};
        (e && !n.name) || this.hasValue(t.name) || "edit" !== this.props.mode || (i.name = g.intl.string(g.t.KU5mWF)),
            (e && !n.country) || this.hasValue(t.country) || (i.country = g.intl.string(g.t["+bm+zE"])),
            (e && !n.line1) || this.hasValue(t.line1) || (i.line1 = g.intl.string(g.t["6HMkB4"])),
            (e && !n.city) || this.hasValue(t.city) || (i.city = g.intl.string(g.t.kOrBmU));
        let r = t.country;
        switch (r) {
            case "US":
                if (!e || n.postalCode) {
                    let e = t.postalCode;
                    this.hasValue(e)
                        ? 5 !== e.length
                            ? (i.postalCode = g.intl.string(g.t["+zjAbg"]))
                            : /^\d{5}$/.test(e) || (i.postalCode = g.intl.string(g.t.CuZPea))
                        : (i.postalCode = g.intl.string(g.t["iXID+2"]));
                }
                (e && !n.state) || this.hasValue(t.state) || (i.state = g.intl.string(g.t.RIaPdF));
                break;
            case "CA":
                (e && !n.postalCode) || this.hasValue(t.postalCode) || (i.postalCode = g.intl.string(g.t.LRlhb1)),
                    (e && !n.state) || this.hasValue(t.state) || (i.state = g.intl.string(g.t.PsJCcj));
                break;
            default:
                (e && !n.postalCode) ||
                    this.hasValue(t.postalCode) ||
                    A.includes(r ?? "") ||
                    (i.postalCode = g.intl.string(g.t.LRlhb1));
        }
        return i;
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
        let { values: n, errors: i, dirtyFields: r } = this.state;
        delete i[t], this.setState({ values: { ...n, [t]: e }, dirtyFields: { ...r, [t]: !0 }, errors: i });
    };
    render() {
        let { errors: e, values: t } = this.state,
            { layout: n, mode: i, className: r, error: a, allowedBillingAddressCountries: o } = this.props,
            l = F[n];
        if (null == l) throw Error("Provide a proper layout property.");
        let d = t.country,
            _ = { allowedBillingAddressCountries: o },
            u = l
                .map((e) => {
                    let t = e.map((e) => e(d ?? "", _)).filter(m.Vq);
                    return t.length > 0 ? { fields: t } : null;
                })
                .filter(m.Vq);
        return (0, s.jsx)(f.A, {
            className: r,
            form: u,
            layout: n,
            values: t,
            errors: e,
            formError: a,
            onFieldChange: this.handleFieldChange,
            onFieldBlur: this.handleFieldBlur,
            mode: i,
        });
    }
}
let H = B;
