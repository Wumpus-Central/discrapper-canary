"use strict";
n.d(t, { Ay: () => F });
var r = n(627968),
    i = n(64700),
    a = n(534834),
    s = n(96337),
    o = n(445737),
    l = n(397927),
    u = n(915089),
    c = n(403362),
    d = n(832208),
    _ = n(985018),
    f = n(784550);
let p = "US",
    h = "CA",
    m = 5,
    g = [
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
    E = s.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })).filter(
        (e) => "KP" !== e.value && "SY" !== e.value,
    ),
    A = Object.freeze(E.reduce((e, t) => ({ ...e, [t.label.toLowerCase()]: t.value }), {})),
    I = (0, u.Ld)(),
    T = (0, u.Ld)(),
    y = (0, u.Ld)(),
    S = (0, u.Ld)(),
    v = (0, u.Ld)(),
    C = (0, u.Ld)(),
    b = (0, u.Ld)();
var N = (function (e) {
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
    })(N || {}),
    R = (function (e) {
        return (e.EDIT = "edit"), (e.CREATE = "create"), e;
    })(R || {});
let O = { [p]: o.D, [h]: a.i },
    D = { [p]: o.J, [h]: a.d },
    L = (e) => ({
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
    w = (e) => ({
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
            let { onChange: n, ...i } = e;
            return (0, r.jsx)(l.ZiE, {
                ...i,
                selectionMode: "single",
                autoFocus: !0,
                maxOptionsVisible: 8,
                disabled: "edit" === t.mode,
                options: E,
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
    }),
    x = (e) => ({
        name: "line1",
        id: y,
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
    P = (e) => ({
        name: "line2",
        id: S,
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
    M = (e) => ({
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
    k = (e) => {
        let t, n;
        switch (e) {
            case p:
                (t = _.intl.string(_.t["/95CeM"])), (n = _.intl.string(_.t["9xLNmi"]));
                break;
            case h:
                (t = _.intl.string(_.t.mfpJ9m)), (n = _.intl.string(_.t.Nc4Rzt));
                break;
            default:
                t = _.intl.string(_.t.mfpJ9m);
        }
        return {
            name: "postalCode",
            id: C,
            title: () => t,
            autoComplete: "postal-code",
            placeholder: () => n,
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
    U = (e) => {
        let t;
        switch (e) {
            case p:
                t = _.intl.string(_.t.PNfx5f);
                break;
            case h:
                t = _.intl.string(_.t["7A/tE0"]);
                break;
            default:
                t = _.intl.string(_.t.w0xG2u);
        }
        return {
            name: "state",
            id: b,
            title: () => t,
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
                let i = O[e],
                    a =
                        null == t.value ||
                        "" === t.value ||
                        (null != i &&
                            null !=
                                i.find((e) => {
                                    let { value: n } = e;
                                    return n === t.value;
                                })),
                    { onChange: s, ...o } = t,
                    u = D[e];
                return [p, h].includes(e) && a
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
                              n in u && null != s && s(u[n], t.name);
                          },
                          onSelectionChange: (e) => {
                              null != s && s(e, t.name);
                          },
                      })
                    : (0, r.jsx)(l.ksK, { ...t });
            },
        };
    },
    G = {
        modalUS: [[w], [x], [P], [M], [U, k]],
        modalInternational: [[w], [x], [P], [M], [U], [k]],
        modalUSWithName: [[w], [L], [x], [P], [M], [U, k]],
        modalInternationalWithName: [[w], [L], [x], [P], [M], [U], [k]],
        settingsUS: [[L], [x, P], [M, U, k], [w]],
        settingsUSMobile: [[L], [x], [P], [M], [U], [k], [w]],
        settingsInternational: [[L], [x, P], [M], [U, k], [w]],
        settingsInternationalMobile: [[L], [x], [P], [M], [U], [k], [w]],
        settingsInternationalWithoutName: [[x, P], [M], [U, k], [w]],
        settingsInternationalWithoutNameMobile: [[x], [P], [M], [U], [k], [w]],
    };
class V extends i.PureComponent {
    static Layouts = N;
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
                    g.includes(i ?? "") ||
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
            { layout: n, mode: i, className: a, error: s } = this.props,
            o = G[n];
        if (null == o) throw Error("Provide a proper layout property.");
        let l = t.country,
            u = o
                .map((e) => {
                    let t = e.map((e) => e(l ?? "")).filter(c.Vq);
                    return t.length > 0 ? { fields: t } : null;
                })
                .filter(c.Vq);
        return (0, r.jsx)(d.A, {
            className: a,
            form: u,
            layout: n,
            values: t,
            errors: e,
            formError: s,
            onFieldChange: this.handleFieldChange,
            onFieldBlur: this.handleFieldBlur,
            mode: i,
        });
    }
}
let F = V;
