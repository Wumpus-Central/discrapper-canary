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
    p = n(388032),
    _ = n(94627);
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
    S = 5,
    I = [
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
    T = s.Z.map((e) => ({
        id: e.alpha2,
        value: e.alpha2,
        label: e.name,
    })).filter((e) => "KP" !== e.value && "SY" !== e.value),
    C = Object.freeze(T.reduce((e, t) => E(m({}, e), { [t.label.toLowerCase()]: t.value }), {})),
    A = (0, u.hQ)(),
    N = (0, u.hQ)(),
    P = (0, u.hQ)(),
    w = (0, u.hQ)(),
    R = (0, u.hQ)(),
    D = (0, u.hQ)(),
    x = (0, u.hQ)();
var L = (function (e) {
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
    })(L || {}),
    j = (function (e) {
        return (e.EDIT = "edit"), (e.CREATE = "create"), e;
    })(j || {});
let M = {
        [O]: l.G,
        [v]: o.X,
    },
    k = {
        [O]: l.T,
        [v]: o.j,
    },
    U = (e) => ({
        name: "name",
        id: A,
        title: () => p.intl.string(p.t.vyuULb),
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
                ? _.width100
                : _.width60,
        renderInput: (e) => (0, i.jsx)(c.oil, m({}, e)),
    }),
    G = (e) => ({
        name: "country",
        id: N,
        title: () => p.intl.string(p.t.eDdrAD),
        autoComplete: "country",
        getClassNameForLayout: (e) => {
            switch (e) {
                case "modalUS":
                case "modalInternational":
                case "modalUSWithName":
                case "modalInternationalWithName":
                    return _.width100;
                default:
                    return _.width75;
            }
        },
        renderInput(e, t) {
            let { onChange: n } = e,
                r = b(e, ["onChange"]);
            return (0, i.jsx)(
                c.VcW,
                E(m({}, r), {
                    selectionMode: "single",
                    autoFocus: !0,
                    maxOptionsVisible: 8,
                    disabled: "edit" === t.mode,
                    options: T,
                    onQueryChange: (t) => {
                        let r = t.target.value;
                        if (null == n) return;
                        let i = r.toLowerCase();
                        i in C && n(C[i], e.name);
                    },
                    onSelectionChange: (t) => {
                        null != n && n(t, e.name);
                    },
                }),
            );
        },
    }),
    Z = (e) => ({
        name: "line1",
        id: P,
        title: () => p.intl.string(p.t.x0beVT),
        autoComplete: "address-line1",
        placeholder: () => p.intl.string(p.t["ynII/6"]),
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
                ? _.width100
                : _.width60,
        renderInput: (e) => (0, i.jsx)(c.oil, m({}, e)),
    }),
    F = (e) => ({
        name: "line2",
        id: w,
        title: () => p.intl.string(p.t.i2Z0gI),
        placeholder: () => p.intl.string(p.t.fKLoNo),
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
                ? _.width100
                : _.width40,
        renderInput: (e) => (0, i.jsx)(c.oil, m({}, e)),
    }),
    B = (e) => ({
        name: "city",
        id: R,
        title: () => p.intl.string(p.t.bUSWlw),
        autoComplete: "address-level2",
        placeholder: () => p.intl.string(p.t["5rRx31"]),
        getClassNameForLayout: (e) => {
            switch (e) {
                case "modalInternational":
                case "modalUS":
                case "modalInternationalWithName":
                case "modalUSWithName":
                case "settingsUSMobile":
                case "settingsInternationalMobile":
                case "settingsInternationalWithoutNameMobile":
                    return _.width100;
                case "settingsInternational":
                    return _.width60;
                default:
                    return _.width50;
            }
        },
        renderInput: (e) => (0, i.jsx)(c.oil, m({}, e)),
    }),
    V = (e) => {
        let t, n;
        switch (e) {
            case O:
                (t = p.intl.string(p.t["/95CeM"])), (n = p.intl.string(p.t["9xLNmi"]));
                break;
            case v:
                (t = p.intl.string(p.t.mfpJ9m)), (n = p.intl.string(p.t.Nc4Rzt));
                break;
            default:
                t = p.intl.string(p.t.mfpJ9m);
        }
        return {
            name: "postalCode",
            id: D,
            title: () => t,
            autoComplete: "postal-code",
            placeholder: () => n,
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalInternational":
                    case "modalInternationalWithName":
                        return _.width100;
                    case "modalUS":
                    case "modalUSWithName":
                    case "settingsUSMobile":
                    case "settingsInternationalMobile":
                    case "settingsInternationalWithoutNameMobile":
                        return _.width50;
                    case "settingsInternational":
                        return _.width30;
                    default:
                        return _.width25;
                }
            },
            renderInput: (e) => (0, i.jsx)(c.oil, m({}, e)),
        };
    },
    H = (e) => {
        let t;
        switch (e) {
            case O:
                t = p.intl.string(p.t.PNfx5f);
                break;
            case v:
                t = p.intl.string(p.t["7A/tE0"]);
                break;
            default:
                t = p.intl.string(p.t.w0xG2u);
        }
        return {
            name: "state",
            id: x,
            title: () => t,
            autoComplete: "address-level1",
            getClassNameForLayout: (e) => {
                switch (e) {
                    case "modalInternational":
                    case "modalInternationalWithName":
                    case "settingsUSMobile":
                    case "settingsInternationalMobile":
                    case "settingsInternationalWithoutNameMobile":
                        return _.width100;
                    case "modalUS":
                    case "modalUSWithName":
                        return _.width50;
                    case "settingsInternational":
                        return _.width30;
                    default:
                        return _.width25;
                }
            },
            renderInput(t, n) {
                let r = M[e],
                    a =
                        null == t.value ||
                        "" === t.value ||
                        (null != r &&
                            null !=
                                r.find((e) => {
                                    let { value: n } = e;
                                    return n === t.value;
                                })),
                    { onChange: o } = t,
                    s = b(t, ["onChange"]),
                    l = k[e];
                return [O, v].includes(e) && a
                    ? (0, i.jsx)(
                          c.VcW,
                          E(m({}, s), {
                              selectionMode: "single",
                              options: r,
                              formatOption: (e) => {
                                  let { value: t, label: n } = e;
                                  return {
                                      id: t,
                                      value: t,
                                      label: n,
                                  };
                              },
                              onQueryChange: (e) => {
                                  let n = e.target.value.toLowerCase();
                                  n in l && null != o && o(l[n], t.name);
                              },
                              onSelectionChange: (e) => {
                                  null != o && o(e, t.name);
                              },
                          }),
                      )
                    : (0, i.jsx)(c.oil, m({}, t));
            },
        };
    },
    Y = {
        modalUS: [[G], [Z], [F], [B], [H, V]],
        modalInternational: [[G], [Z], [F], [B], [H], [V]],
        modalUSWithName: [[G], [U], [Z], [F], [B], [H, V]],
        modalInternationalWithName: [[G], [U], [Z], [F], [B], [H], [V]],
        settingsUS: [[U], [Z, F], [B, H, V], [G]],
        settingsUSMobile: [[U], [Z], [F], [B], [H], [V], [G]],
        settingsInternational: [[U], [Z, F], [B], [H, V], [G]],
        settingsInternationalMobile: [[U], [Z], [F], [B], [H], [V], [G]],
        settingsInternationalWithoutName: [[Z, F], [B], [H, V], [G]],
        settingsInternationalWithoutNameMobile: [[Z], [F], [B], [H], [V], [G]],
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
        (e && !n.name) || this.hasValue(t.name) || "edit" !== this.props.mode || (r.name = p.intl.string(p.t.KU5mWF)),
            (e && !n.country) || this.hasValue(t.country) || (r.country = p.intl.string(p.t["+bm+zE"])),
            (e && !n.line1) || this.hasValue(t.line1) || (r.line1 = p.intl.string(p.t["6HMkB4"])),
            (e && !n.city) || this.hasValue(t.city) || (r.city = p.intl.string(p.t.kOrBmU));
        let i = t.country;
        switch (i) {
            case O:
                if (!e || n.postalCode) {
                    let e = t.postalCode;
                    this.hasValue(e)
                        ? e.length !== S
                            ? (r.postalCode = p.intl.string(p.t["+zjAbg"]))
                            : /^\d{5}$/.test(e) || (r.postalCode = p.intl.string(p.t.CuZPea))
                        : (r.postalCode = p.intl.string(p.t["iXID+2"]));
                }
                (e && !n.state) || this.hasValue(t.state) || (r.state = p.intl.string(p.t.RIaPdF));
                break;
            case v:
                (e && !n.postalCode) || this.hasValue(t.postalCode) || (r.postalCode = p.intl.string(p.t.LRlhb1)),
                    (e && !n.state) || this.hasValue(t.state) || (r.state = p.intl.string(p.t.PsJCcj));
                break;
            default:
                (e && !n.postalCode) ||
                    this.hasValue(t.postalCode) ||
                    I.includes(null != i ? i : "") ||
                    (r.postalCode = p.intl.string(p.t.LRlhb1));
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
h(W, "Layouts", L),
    h(W, "Modes", j),
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
