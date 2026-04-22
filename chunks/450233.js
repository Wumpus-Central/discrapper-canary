n.d(t, { Ay: () => G });
var l,
    i,
    a = n(627968),
    r = n(64700),
    s = n(534834),
    o = n(96337),
    u = n(445737),
    c = n(292666),
    d = n(783878),
    p = n(915089),
    m = n(403362),
    h = n(832208),
    A = n(985018),
    _ = n(536439);
let C = [
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
    E = o.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })).filter(
        (e) => "KP" !== e.value && "SY" !== e.value,
    ),
    y = Object.freeze(E.reduce((e, t) => ({ ...e, [t.label.toLowerCase()]: t.value }), {})),
    f = (0, p.Ld)(),
    P = (0, p.Ld)(),
    S = (0, p.Ld)(),
    x = (0, p.Ld)(),
    T = (0, p.Ld)(),
    N = (0, p.Ld)(),
    g = (0, p.Ld)();
var I =
        (((l = I || {}).MODAL_US = "modalUS"),
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
    v = (((i = v || {}).EDIT = "edit"), (i.CREATE = "create"), i);
let b = { US: u.D, CA: s.i },
    R = { US: u.J, CA: s.d },
    M = (e, t) => ({
        name: "name",
        id: f,
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
                ? _.c6
                : _.bt,
        renderInput: (e) => (0, a.jsx)(c.k, { ...e }),
    }),
    j = (e, t) => {
        let n = t?.allowedBillingAddressCountries,
            l = null != n && n.length > 0 ? E.filter((e) => n.includes(e.value)) : E;
        return {
            name: "country",
            id: P,
            title: () => A.intl.string(A.t.eDdrAD),
            autoComplete: "country",
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalUS":
                    case "modalInternational":
                    case "modalUSWithName":
                    case "modalInternationalWithName":
                        return _.c6;
                    default:
                        return _.vO;
                }
            },
            renderInput(e, t) {
                let { onChange: n, ...i } = e;
                return (0, a.jsx)(d.Z, {
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
                        i in y && n(y[i], e.name);
                    },
                    onSelectionChange: (t) => {
                        null != n && n(t, e.name);
                    },
                });
            },
        };
    },
    L = (e, t) => ({
        name: "line1",
        id: S,
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
                ? _.c6
                : _.bt,
        renderInput: (e) => (0, a.jsx)(c.k, { ...e }),
    }),
    O = (e, t) => ({
        name: "line2",
        id: x,
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
                ? _.c6
                : _.JH,
        renderInput: (e) => (0, a.jsx)(c.k, { ...e }),
    }),
    D = (e, t) => ({
        name: "city",
        id: T,
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
                    return _.c6;
                case "settingsInternational":
                    return _.bt;
                default:
                    return _.ep;
            }
        },
        renderInput: (e) => (0, a.jsx)(c.k, { ...e }),
    }),
    U = (e, t) => {
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
            id: N,
            title: () => n,
            autoComplete: "postal-code",
            placeholder: () => l,
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalInternational":
                    case "modalInternationalWithName":
                        return _.c6;
                    case "modalUS":
                    case "modalUSWithName":
                    case "settingsUSMobile":
                    case "settingsInternationalMobile":
                    case "settingsInternationalWithoutNameMobile":
                        return _.ep;
                    case "settingsInternational":
                        return _.kN;
                    default:
                        return _.IW;
                }
            },
            renderInput: (e) => (0, a.jsx)(c.k, { ...e }),
        };
    },
    w = (e, t) => {
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
            id: g,
            title: () => n,
            autoComplete: "address-level1",
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalInternational":
                    case "modalInternationalWithName":
                    case "settingsUSMobile":
                    case "settingsInternationalMobile":
                    case "settingsInternationalWithoutNameMobile":
                        return _.c6;
                    case "modalUS":
                    case "modalUSWithName":
                        return _.ep;
                    case "settingsInternational":
                        return _.kN;
                    default:
                        return _.IW;
                }
            },
            renderInput(t, n) {
                let l = b[e],
                    i =
                        null == t.value ||
                        "" === t.value ||
                        (null != l &&
                            null !=
                                l.find((e) => {
                                    let { value: n } = e;
                                    return n === t.value;
                                })),
                    { onChange: r, ...s } = t,
                    o = R[e];
                return ["US", "CA"].includes(e) && i
                    ? (0, a.jsx)(d.Z, {
                          ...s,
                          selectionMode: "single",
                          options: l,
                          formatOption: (e) => {
                              let { value: t, label: n } = e;
                              return { id: t, value: t, label: n };
                          },
                          onQueryChange: (e) => {
                              let n = e.target.value.toLowerCase();
                              n in o && null != r && r(o[n], t.name);
                          },
                          onSelectionChange: (e) => {
                              null != r && r(e, t.name);
                          },
                      })
                    : (0, a.jsx)(c.k, { ...t });
            },
        };
    },
    k = {
        modalUS: [[j], [L], [O], [D], [w, U]],
        modalInternational: [[j], [L], [O], [D], [w], [U]],
        modalUSWithName: [[j], [M], [L], [O], [D], [w, U]],
        modalInternationalWithName: [[j], [M], [L], [O], [D], [w], [U]],
        settingsUS: [[M], [L, O], [D, w, U], [j]],
        settingsUSMobile: [[M], [L], [O], [D], [w], [U], [j]],
        settingsInternational: [[M], [L, O], [D], [w, U], [j]],
        settingsInternationalMobile: [[M], [L], [O], [D], [w], [U], [j]],
        settingsInternationalWithoutName: [[L, O], [D], [w, U], [j]],
        settingsInternationalWithoutNameMobile: [[L], [O], [D], [w], [U], [j]],
    };
class F extends r.PureComponent {
    static Layouts = I;
    static Modes = v;
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
                    C.includes(i ?? "") ||
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
            { layout: n, mode: l, className: i, error: r, allowedBillingAddressCountries: s } = this.props,
            o = k[n];
        if (null == o) throw Error("Provide a proper layout property.");
        let u = t.country,
            c = { allowedBillingAddressCountries: s },
            d = o
                .map((e) => {
                    let t = e.map((e) => e(u ?? "", c)).filter(m.Vq);
                    return t.length > 0 ? { fields: t } : null;
                })
                .filter(m.Vq);
        return (0, a.jsx)(h.A, {
            className: i,
            form: d,
            layout: n,
            values: t,
            errors: e,
            formError: r,
            onFieldChange: this.handleFieldChange,
            onFieldBlur: this.handleFieldBlur,
            mode: l,
        });
    }
}
let G = F;
