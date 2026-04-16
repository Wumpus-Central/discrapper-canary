"use strict";
n.d(t, { Ay: () => V });
var r = n(627968),
    i = n(64700),
    s = n(534834),
    a = n(96337),
    o = n(445737),
    l = n(397927),
    u = n(915089),
    c = n(403362),
    d = n(832208),
    _ = n(985018),
    f = n(536439);
let p = "US",
    h = "CA",
    m = 5,
    E = [
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
    g = a.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })).filter(
        (e) => "KP" !== e.value && "SY" !== e.value,
    ),
    A = Object.freeze(g.reduce((e, t) => ({ ...e, [t.label.toLowerCase()]: t.value }), {})),
    I = (0, u.Ld)(),
    T = (0, u.Ld)(),
    S = (0, u.Ld)(),
    y = (0, u.Ld)(),
    v = (0, u.Ld)(),
    N = (0, u.Ld)(),
    C = (0, u.Ld)();
var R = (function (e) {
        return (
            (e.MODAL_US = "modalUS"),
            (e.MODAL_INTL = "modalInternational"),
            (e.MODAL_US_WITH_NAME = "modalUSWithName"),
            (e.MODAL_INTL_WITH_NAME = "modalInternationalWithName"),
            (e.SETTINGS_US = "settingsUS"),
            (e.SETTINGS_INTL = "settingsInternational"),
            (e.SETTINGS_INTL_NO_NAME = "settingsInternationalWithoutName"),
            (e.SETTINGS_US_MOBILE = "settingsUSMobile"),
            (e.SETTINGS_INTL_MOBILE = "settingsInternationalMobile"),
            (e.SETTINGS_INTL_NO_NAME_MOBILE = "settingsInternationalWithoutNameMobile"),
            e
        );
    })(R || {}),
    O = (function (e) {
        return (e.EDIT = "edit"), (e.CREATE = "create"), e;
    })(O || {});
let b = { [p]: o.D, [h]: s.i },
    D = { [p]: o.J, [h]: s.d },
    L = (e, t) => ({
        name: "name",
        id: I,
        title: () => _.intl.string(_.t.vyuULb),
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
        renderInput: (e) => (0, r.jsx)(l.ksK, { ...e }),
    }),
    w = (e, t) => {
        let n = t?.allowedBillingAddressCountries,
            i = null != n && n.length > 0 ? g.filter((e) => n.includes(e.value)) : g;
        return {
            name: "country",
            id: T,
            title: () => _.intl.string(_.t.eDdrAD),
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
                let { onChange: n, ...s } = e;
                return (0, r.jsx)(l.ZiE, {
                    ...s,
                    selectionMode: "single",
                    autoFocus: !0,
                    maxOptionsVisible: 8,
                    disabled: "edit" === t.mode || 1 === i.length,
                    options: i,
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
        title: () => _.intl.string(_.t.x0beVT),
        autoComplete: "address-line1",
        placeholder: () => _.intl.string(_.t["ynII/6"]),
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
        renderInput: (e) => (0, r.jsx)(l.ksK, { ...e }),
    }),
    P = (e, t) => ({
        name: "line2",
        id: y,
        title: () => _.intl.string(_.t.i2Z0gI),
        placeholder: () => _.intl.string(_.t.fKLoNo),
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
        renderInput: (e) => (0, r.jsx)(l.ksK, { ...e }),
    }),
    x = (e, t) => ({
        name: "city",
        id: v,
        title: () => _.intl.string(_.t.bUSWlw),
        autoComplete: "address-level2",
        placeholder: () => _.intl.string(_.t["5rRx31"]),
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
        renderInput: (e) => (0, r.jsx)(l.ksK, { ...e }),
    }),
    k = (e, t) => {
        let n, i;
        switch (e) {
            case p:
                (n = _.intl.string(_.t["/95CeM"])), (i = _.intl.string(_.t["9xLNmi"]));
                break;
            case h:
                (n = _.intl.string(_.t.mfpJ9m)), (i = _.intl.string(_.t.Nc4Rzt));
                break;
            default:
                n = _.intl.string(_.t.mfpJ9m);
        }
        return {
            name: "postalCode",
            id: N,
            title: () => n,
            autoComplete: "postal-code",
            placeholder: () => i,
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
            renderInput: (e) => (0, r.jsx)(l.ksK, { ...e }),
        };
    },
    U = (e, t) => {
        let n;
        switch (e) {
            case p:
                n = _.intl.string(_.t.PNfx5f);
                break;
            case h:
                n = _.intl.string(_.t["7A/tE0"]);
                break;
            default:
                n = _.intl.string(_.t.w0xG2u);
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
                let i = b[e],
                    s =
                        null == t.value ||
                        "" === t.value ||
                        (null != i &&
                            null !=
                                i.find((e) => {
                                    let { value: n } = e;
                                    return n === t.value;
                                })),
                    { onChange: a, ...o } = t,
                    u = D[e];
                return [p, h].includes(e) && s
                    ? (0, r.jsx)(l.ZiE, {
                          ...o,
                          selectionMode: "single",
                          options: i,
                          formatOption: (e) => {
                              let { value: t, label: n } = e;
                              return { id: t, value: t, label: n };
                          },
                          onQueryChange: (e) => {
                              let n = e.target.value.toLowerCase();
                              n in u && null != a && a(u[n], t.name);
                          },
                          onSelectionChange: (e) => {
                              null != a && a(e, t.name);
                          },
                      })
                    : (0, r.jsx)(l.ksK, { ...t });
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
class F extends i.PureComponent {
    static Layouts = R;
    static Modes = O;
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
        (e && !n.name) || this.hasValue(t.name) || "edit" !== this.props.mode || (r.name = _.intl.string(_.t.KU5mWF)),
            (e && !n.country) || this.hasValue(t.country) || (r.country = _.intl.string(_.t["+bm+zE"])),
            (e && !n.line1) || this.hasValue(t.line1) || (r.line1 = _.intl.string(_.t["6HMkB4"])),
            (e && !n.city) || this.hasValue(t.city) || (r.city = _.intl.string(_.t.kOrBmU));
        let i = t.country;
        switch (i) {
            case p:
                if (!e || n.postalCode) {
                    let e = t.postalCode;
                    this.hasValue(e)
                        ? e.length !== m
                            ? (r.postalCode = _.intl.string(_.t["+zjAbg"]))
                            : /^\d{5}$/.test(e) || (r.postalCode = _.intl.string(_.t.CuZPea))
                        : (r.postalCode = _.intl.string(_.t["iXID+2"]));
                }
                (e && !n.state) || this.hasValue(t.state) || (r.state = _.intl.string(_.t.RIaPdF));
                break;
            case h:
                (e && !n.postalCode) || this.hasValue(t.postalCode) || (r.postalCode = _.intl.string(_.t.LRlhb1)),
                    (e && !n.state) || this.hasValue(t.state) || (r.state = _.intl.string(_.t.PsJCcj));
                break;
            default:
                (e && !n.postalCode) ||
                    this.hasValue(t.postalCode) ||
                    E.includes(i ?? "") ||
                    (r.postalCode = _.intl.string(_.t.LRlhb1));
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
            { layout: n, mode: i, className: s, error: a, allowedBillingAddressCountries: o } = this.props,
            l = G[n];
        if (null == l) throw Error("Provide a proper layout property.");
        let u = t.country,
            _ = { allowedBillingAddressCountries: o },
            f = l
                .map((e) => {
                    let t = e.map((e) => e(u ?? "", _)).filter(c.Vq);
                    return t.length > 0 ? { fields: t } : null;
                })
                .filter(c.Vq);
        return (0, r.jsx)(d.A, {
            className: s,
            form: f,
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
let V = F;
