n.d(t, { ZP: () => K }), n(388685), n(35282), n(415506);
var r,
    i = n(54381),
    a = n(473749),
    o = n(588391),
    s = n(217986),
    l = n(971809),
    c = n(481060),
    u = n(313201),
    d = n(823379),
    f = n(754103),
    _ = n(388032),
    p = n(189068);
function h(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = "US",
    v = "CA",
    I = 5,
    T = [
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
    S = s.Z.map((e) => ({
        value: e.alpha2,
        label: e.name,
    })).filter((e) => "KP" !== e.value && "SY" !== e.value),
    A = Object.freeze(S.reduce((e, t) => E(m({}, e), { [t.label.toLowerCase()]: t.value }), {})),
    C = (0, u.hQ)(),
    N = (0, u.hQ)(),
    R = (0, u.hQ)(),
    P = (0, u.hQ)(),
    D = (0, u.hQ)(),
    w = (0, u.hQ)(),
    L = (0, u.hQ)();
var x = (function (e) {
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
    })(x || {}),
    M = (function (e) {
        return (e.EDIT = "edit"), (e.CREATE = "create"), e;
    })(M || {});
let k = {
        [O]: l.G,
        [v]: o.X,
    },
    j = {
        [O]: l.T,
        [v]: o.j,
    },
    U = (e) => ({
        name: "name",
        id: C,
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
                ? p.width100
                : p.width60,
        renderInput: (e) => (0, i.jsx)(c.oil, m({}, e)),
    }),
    G = (e) => ({
        name: "country",
        id: N,
        title: () => _.intl.string(_.t.eDdrAD),
        autoComplete: "country",
        getClassNameForLayout: (e) => {
            switch (e) {
                case "modalUS":
                case "modalInternational":
                case "modalUSWithName":
                case "modalInternationalWithName":
                    return p.width100;
                default:
                    return p.width75;
            }
        },
        renderInput(e, t) {
            let { onChange: n } = e,
                r = b(e, ["onChange"]);
            return (0, i.jsx)(
                c.VcW,
                E(m({}, r), {
                    autoFocus: !0,
                    maxVisibleItems: 8,
                    isDisabled: "edit" === t.mode,
                    options: S,
                    onSearchChange: (t) => {
                        if (null == n) return;
                        let r = t.toLowerCase();
                        r in A && n(A[r], e.name);
                    },
                    onChange: (t) => {
                        null != n && n(t, e.name);
                    },
                }),
            );
        },
    }),
    B = (e) => ({
        name: "line1",
        id: R,
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
                ? p.width100
                : p.width60,
        renderInput: (e) => (0, i.jsx)(c.oil, m({}, e)),
    }),
    Z = (e) => ({
        name: "line2",
        id: P,
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
                ? p.width100
                : p.width40,
        renderInput: (e) => (0, i.jsx)(c.oil, m({}, e)),
    }),
    F = (e) => ({
        name: "city",
        id: D,
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
                    return p.width100;
                case "settingsInternational":
                    return p.width60;
                default:
                    return p.width50;
            }
        },
        renderInput: (e) => (0, i.jsx)(c.oil, m({}, e)),
    }),
    V = (e) => {
        let t, n;
        switch (e) {
            case O:
                (t = _.intl.string(_.t["/95CeM"])), (n = _.intl.string(_.t["9xLNmi"]));
                break;
            case v:
                (t = _.intl.string(_.t.mfpJ9m)), (n = _.intl.string(_.t.Nc4Rzt));
                break;
            default:
                t = _.intl.string(_.t.mfpJ9m);
        }
        return {
            name: "postalCode",
            id: w,
            title: () => t,
            autoComplete: "postal-code",
            placeholder: () => n,
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalInternational":
                    case "modalInternationalWithName":
                        return p.width100;
                    case "modalUS":
                    case "modalUSWithName":
                    case "settingsUSMobile":
                    case "settingsInternationalMobile":
                    case "settingsInternationalWithoutNameMobile":
                        return p.width50;
                    case "settingsInternational":
                        return p.width30;
                    default:
                        return p.width25;
                }
            },
            renderInput: (e) => (0, i.jsx)(c.oil, m({}, e)),
        };
    },
    H = (e) => {
        let t;
        switch (e) {
            case O:
                t = _.intl.string(_.t.PNfx5f);
                break;
            case v:
                t = _.intl.string(_.t["7A/tE0"]);
                break;
            default:
                t = _.intl.string(_.t.w0xG2u);
        }
        return {
            name: "state",
            id: L,
            title: () => t,
            autoComplete: "address-level1",
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalInternational":
                    case "modalInternationalWithName":
                    case "settingsUSMobile":
                    case "settingsInternationalMobile":
                    case "settingsInternationalWithoutNameMobile":
                        return p.width100;
                    case "modalUS":
                    case "modalUSWithName":
                        return p.width50;
                    case "settingsInternational":
                        return p.width30;
                    default:
                        return p.width25;
                }
            },
            renderInput(t, n, r) {
                let a = k[e],
                    o =
                        null == t.value ||
                        "" === t.value ||
                        (null != a &&
                            null !=
                                a.find((e) => {
                                    let { value: n } = e;
                                    return n === t.value;
                                })),
                    { onChange: s } = t,
                    l = b(t, ["onChange"]),
                    u = j[e];
                return [O, v].includes(e) && o
                    ? (0, i.jsx)(
                          c.VcW,
                          E(m({}, l), {
                              popoutPosition: ["modalUS", "modalInternational"].includes(r) ? "top" : void 0,
                              options: a,
                              onSearchChange: (e) => {
                                  let n = e.toLowerCase();
                                  n in u && null != s && s(u[n], t.name);
                              },
                              onChange: (e) => {
                                  null != s && s(e, t.name);
                              },
                          }),
                      )
                    : (0, i.jsx)(c.oil, m({}, t));
            },
        };
    },
    Y = {
        modalUS: [[G], [B], [Z], [F], [H, V]],
        modalInternational: [[G], [B], [Z], [F], [H], [V]],
        modalUSWithName: [[G], [U], [B], [Z], [F], [H, V]],
        modalInternationalWithName: [[G], [U], [B], [Z], [F], [H], [V]],
        settingsUS: [[U], [B, Z], [F, H, V], [G]],
        settingsUSMobile: [[U], [B], [Z], [F], [H], [V], [G]],
        settingsInternational: [[U], [B, Z], [F], [H, V], [G]],
        settingsInternationalMobile: [[U], [B], [Z], [F], [H], [V], [G]],
        settingsInternationalWithoutName: [[B, Z], [F], [H, V], [G]],
        settingsInternationalWithoutNameMobile: [[B], [Z], [F], [H], [V], [G]],
    };
class W extends (r = a.PureComponent) {
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
            case O:
                if (!e || n.postalCode) {
                    let e = t.postalCode;
                    this.hasValue(e)
                        ? e.length !== I
                            ? (r.postalCode = _.intl.string(_.t["+zjAbg"]))
                            : /^\d{5}$/.test(e) || (r.postalCode = _.intl.string(_.t.CuZPea))
                        : (r.postalCode = _.intl.string(_.t["iXID+2"]));
                }
                (e && !n.state) || this.hasValue(t.state) || (r.state = _.intl.string(_.t.RIaPdF));
                break;
            case v:
                (e && !n.postalCode) || this.hasValue(t.postalCode) || (r.postalCode = _.intl.string(_.t.LRlhb1)),
                    (e && !n.state) || this.hasValue(t.state) || (r.state = _.intl.string(_.t.PsJCcj));
                break;
            default:
                (e && !n.postalCode) ||
                    this.hasValue(t.postalCode) ||
                    T.includes(null != i ? i : "") ||
                    (r.postalCode = _.intl.string(_.t.LRlhb1));
        }
        return r;
    }
    handleInfoChange() {
        let { values: e, dirtyFields: t } = this.state,
            n = this.validateForm(!1);
        this.props.onBillingAddressChange(e, 0 === Object.keys(n).length, Object.keys(t).length > 0);
    }
    render() {
        let { errors: e, values: t } = this.state,
            { layout: n, mode: r, className: a, error: o } = this.props,
            s = Y[n];
        if (null == s) throw Error("Provide a proper layout property.");
        let l = t.country,
            c = s
                .map((e) => {
                    let t = e.map((e) => e(null != l ? l : "")).filter(d.lm);
                    return t.length > 0 ? { fields: t } : null;
                })
                .filter(d.lm);
        return (0, i.jsx)(f.Z, {
            className: a,
            form: c,
            layout: n,
            values: t,
            errors: e,
            formError: o,
            onFieldChange: this.handleFieldChange,
            onFieldBlur: this.handleFieldBlur,
            mode: r,
        });
    }
    constructor(...e) {
        super(...e),
            h(this, "state", {
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
            }),
            h(this, "handleFieldBlur", () => {
                this.setState({ errors: this.validateForm(!0) });
            }),
            h(this, "handleFieldChange", (e, t) => {
                if (null == t) return;
                let { values: n, errors: r, dirtyFields: i } = this.state;
                delete r[t],
                    this.setState({
                        values: E(m({}, n), { [t]: e }),
                        dirtyFields: E(m({}, i), { [t]: !0 }),
                        errors: r,
                    });
            });
    }
}
h(W, "Layouts", x),
    h(W, "Modes", M),
    h(W, "defaultProps", {
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
    });
let K = W;
