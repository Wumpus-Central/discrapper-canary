"use strict";
n.d(t, { Ay: () => V });
var r,
    i,
    s = n(627968),
    a = n(64700),
    o = n(534834),
    l = n(96337),
    u = n(445737),
    c = n(292666),
    d = n(783878),
    _ = n(915089),
    f = n(403362),
    p = n(832208),
    h = n(985018),
    E = n(536439);
let m = [
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
    g = l.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })).filter(
        (e) => "KP" !== e.value && "SY" !== e.value,
    ),
    A = Object.freeze(g.reduce((e, t) => ({ ...e, [t.label.toLowerCase()]: t.value }), {})),
    I = (0, _.Ld)(),
    T = (0, _.Ld)(),
    S = (0, _.Ld)(),
    y = (0, _.Ld)(),
    N = (0, _.Ld)(),
    v = (0, _.Ld)(),
    C = (0, _.Ld)();
var O =
        (((r = O || {}).MODAL_US = "modalUS"),
        (r.MODAL_INTL = "modalInternational"),
        (r.MODAL_US_WITH_NAME = "modalUSWithName"),
        (r.MODAL_INTL_WITH_NAME = "modalInternationalWithName"),
        (r.SETTINGS_US = "settingsUS"),
        (r.SETTINGS_INTL = "settingsInternational"),
        (r.SETTINGS_INTL_NO_NAME = "settingsInternationalWithoutName"),
        (r.SETTINGS_US_MOBILE = "settingsUSMobile"),
        (r.SETTINGS_INTL_MOBILE = "settingsInternationalMobile"),
        (r.SETTINGS_INTL_NO_NAME_MOBILE = "settingsInternationalWithoutNameMobile"),
        r),
    R = (((i = R || {}).EDIT = "edit"), (i.CREATE = "create"), i);
let b = { US: u.D, CA: o.i },
    D = { US: u.J, CA: o.d },
    L = (e, t) => ({
        name: "name",
        id: I,
        title: () => h.intl.string(h.t.vyuULb),
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
                ? E.c6
                : E.bt,
        renderInput: (e) => (0, s.jsx)(c.k, { ...e }),
    }),
    w = (e, t) => {
        let n = t?.allowedBillingAddressCountries,
            r = null != n && n.length > 0 ? g.filter((e) => n.includes(e.value)) : g;
        return {
            name: "country",
            id: T,
            title: () => h.intl.string(h.t.eDdrAD),
            autoComplete: "country",
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalUS":
                    case "modalInternational":
                    case "modalUSWithName":
                    case "modalInternationalWithName":
                        return E.c6;
                    default:
                        return E.vO;
                }
            },
            renderInput(e, t) {
                let { onChange: n, ...i } = e;
                return (0, s.jsx)(d.Z, {
                    ...i,
                    selectionMode: "single",
                    autoFocus: !0,
                    maxOptionsVisible: 8,
                    disabled: "edit" === t.mode || 1 === r.length,
                    options: r,
                    onQueryChange: (t) => {
                        let r = t.target.value;
                        if (null == n) return;
                        let i = r.toLowerCase();
                        i in A && n(A[i], e.name);
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
        id: S,
        title: () => h.intl.string(h.t.x0beVT),
        autoComplete: "address-line1",
        placeholder: () => h.intl.string(h.t["ynII/6"]),
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
                ? E.c6
                : E.bt,
        renderInput: (e) => (0, s.jsx)(c.k, { ...e }),
    }),
    P = (e, t) => ({
        name: "line2",
        id: y,
        title: () => h.intl.string(h.t.i2Z0gI),
        placeholder: () => h.intl.string(h.t.fKLoNo),
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
                ? E.c6
                : E.JH,
        renderInput: (e) => (0, s.jsx)(c.k, { ...e }),
    }),
    x = (e, t) => ({
        name: "city",
        id: N,
        title: () => h.intl.string(h.t.bUSWlw),
        autoComplete: "address-level2",
        placeholder: () => h.intl.string(h.t["5rRx31"]),
        getClassNameForLayout: (e) => {
            switch (e) {
                case "modalInternational":
                case "modalUS":
                case "modalInternationalWithName":
                case "modalUSWithName":
                case "settingsUSMobile":
                case "settingsInternationalMobile":
                case "settingsInternationalWithoutNameMobile":
                    return E.c6;
                case "settingsInternational":
                    return E.bt;
                default:
                    return E.ep;
            }
        },
        renderInput: (e) => (0, s.jsx)(c.k, { ...e }),
    }),
    k = (e, t) => {
        let n, r;
        switch (e) {
            case "US":
                (n = h.intl.string(h.t["/95CeM"])), (r = h.intl.string(h.t["9xLNmi"]));
                break;
            case "CA":
                (n = h.intl.string(h.t.mfpJ9m)), (r = h.intl.string(h.t.Nc4Rzt));
                break;
            default:
                n = h.intl.string(h.t.mfpJ9m);
        }
        return {
            name: "postalCode",
            id: v,
            title: () => n,
            autoComplete: "postal-code",
            placeholder: () => r,
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalInternational":
                    case "modalInternationalWithName":
                        return E.c6;
                    case "modalUS":
                    case "modalUSWithName":
                    case "settingsUSMobile":
                    case "settingsInternationalMobile":
                    case "settingsInternationalWithoutNameMobile":
                        return E.ep;
                    case "settingsInternational":
                        return E.kN;
                    default:
                        return E.IW;
                }
            },
            renderInput: (e) => (0, s.jsx)(c.k, { ...e }),
        };
    },
    U = (e, t) => {
        let n;
        switch (e) {
            case "US":
                n = h.intl.string(h.t.PNfx5f);
                break;
            case "CA":
                n = h.intl.string(h.t["7A/tE0"]);
                break;
            default:
                n = h.intl.string(h.t.w0xG2u);
        }
        return {
            name: "state",
            id: C,
            title: () => n,
            autoComplete: "address-level1",
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalInternational":
                    case "modalInternationalWithName":
                    case "settingsUSMobile":
                    case "settingsInternationalMobile":
                    case "settingsInternationalWithoutNameMobile":
                        return E.c6;
                    case "modalUS":
                    case "modalUSWithName":
                        return E.ep;
                    case "settingsInternational":
                        return E.kN;
                    default:
                        return E.IW;
                }
            },
            renderInput(t, n) {
                let r = b[e],
                    i =
                        null == t.value ||
                        "" === t.value ||
                        (null != r &&
                            null !=
                                r.find((e) => {
                                    let { value: n } = e;
                                    return n === t.value;
                                })),
                    { onChange: a, ...o } = t,
                    l = D[e];
                return ["US", "CA"].includes(e) && i
                    ? (0, s.jsx)(d.Z, {
                          ...o,
                          selectionMode: "single",
                          options: r,
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
    G = {
        modalUS: [[w], [M], [P], [x], [U, k]],
        modalInternational: [[w], [M], [P], [x], [U], [k]],
        modalUSWithName: [[w], [L], [M], [P], [x], [U, k]],
        modalInternationalWithName: [[w], [L], [M], [P], [x], [U], [k]],
        settingsUS: [[L], [M, P], [x, U, k], [w]],
        settingsUSMobile: [[L], [M], [P], [x], [U], [k], [w]],
        settingsInternational: [[L], [M, P], [x], [U, k], [w]],
        settingsInternationalMobile: [[L], [M], [P], [x], [U], [k], [w]],
        settingsInternationalWithoutName: [[M, P], [x], [U, k], [w]],
        settingsInternationalWithoutNameMobile: [[M], [P], [x], [U], [k], [w]],
    };
class F extends a.PureComponent {
    static Layouts = O;
    static Modes = R;
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
            r = {};
        (e && !n.name) || this.hasValue(t.name) || "edit" !== this.props.mode || (r.name = h.intl.string(h.t.KU5mWF)),
            (e && !n.country) || this.hasValue(t.country) || (r.country = h.intl.string(h.t["+bm+zE"])),
            (e && !n.line1) || this.hasValue(t.line1) || (r.line1 = h.intl.string(h.t["6HMkB4"])),
            (e && !n.city) || this.hasValue(t.city) || (r.city = h.intl.string(h.t.kOrBmU));
        let i = t.country;
        switch (i) {
            case "US":
                if (!e || n.postalCode) {
                    let e = t.postalCode;
                    this.hasValue(e)
                        ? 5 !== e.length
                            ? (r.postalCode = h.intl.string(h.t["+zjAbg"]))
                            : /^\d{5}$/.test(e) || (r.postalCode = h.intl.string(h.t.CuZPea))
                        : (r.postalCode = h.intl.string(h.t["iXID+2"]));
                }
                (e && !n.state) || this.hasValue(t.state) || (r.state = h.intl.string(h.t.RIaPdF));
                break;
            case "CA":
                (e && !n.postalCode) || this.hasValue(t.postalCode) || (r.postalCode = h.intl.string(h.t.LRlhb1)),
                    (e && !n.state) || this.hasValue(t.state) || (r.state = h.intl.string(h.t.PsJCcj));
                break;
            default:
                (e && !n.postalCode) ||
                    this.hasValue(t.postalCode) ||
                    m.includes(i ?? "") ||
                    (r.postalCode = h.intl.string(h.t.LRlhb1));
        }
        return r;
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
        let { values: n, errors: r, dirtyFields: i } = this.state;
        delete r[t], this.setState({ values: { ...n, [t]: e }, dirtyFields: { ...i, [t]: !0 }, errors: r });
    };
    render() {
        let { errors: e, values: t } = this.state,
            { layout: n, mode: r, className: i, error: a, allowedBillingAddressCountries: o } = this.props,
            l = G[n];
        if (null == l) throw Error("Provide a proper layout property.");
        let u = t.country,
            c = { allowedBillingAddressCountries: o },
            d = l
                .map((e) => {
                    let t = e.map((e) => e(u ?? "", c)).filter(f.Vq);
                    return t.length > 0 ? { fields: t } : null;
                })
                .filter(f.Vq);
        return (0, s.jsx)(p.A, {
            className: i,
            form: d,
            layout: n,
            values: t,
            errors: e,
            formError: a,
            onFieldChange: this.handleFieldChange,
            onFieldBlur: this.handleFieldBlur,
            mode: r,
        });
    }
}
let V = F;
