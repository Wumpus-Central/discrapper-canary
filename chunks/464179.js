n.d(t, { ZP: () => W }), n(47120), n(301563), n(411104);
var r,
    i = n(200651),
    o = n(192379),
    a = n(588391),
    s = n(217986),
    l = n(971809),
    c = n(481060),
    u = n(313201),
    d = n(823379),
    f = n(754103),
    p = n(388032),
    _ = n(251127);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = 'US',
    O = 'CA',
    S = 5,
    I = ['AE', 'AG', 'AN', 'AO', 'AW', 'BF', 'BI', 'BJ', 'BM', 'BO', 'BQ', 'BS', 'BW', 'BZ', 'CD', 'CF', 'CG', 'CI', 'CK', 'CM', 'CW', 'DJ', 'DM', 'ER', 'FJ', 'GA', 'GD', 'GH', 'GM', 'GQ', 'GY', 'HK', 'HM', 'IE', 'JM', 'KE', 'KI', 'KM', 'KN', 'KP', 'LY', 'ML', 'MO', 'MR', 'MW', 'NA', 'NR', 'NU', 'QA', 'RW', 'SB', 'SC', 'SL', 'SR', 'ST', 'SX', 'SY', 'TD', 'TF', 'TG', 'TK', 'TL', 'TO', 'TV', 'UG', 'VU', 'YE', 'ZA', 'ZW'],
    T = s.Z.map((e) => ({
        value: e.alpha2,
        label: e.name
    })).filter((e) => 'KP' !== e.value && 'SY' !== e.value),
    N = (0, u.hQ)(),
    A = (0, u.hQ)(),
    C = (0, u.hQ)(),
    R = (0, u.hQ)(),
    P = (0, u.hQ)(),
    w = (0, u.hQ)(),
    D = (0, u.hQ)();
var x = (function (e) {
        return (e.MODAL_US = 'modalUS'), (e.MODAL_INTL = 'modalInternational'), (e.MODAL_US_WITH_NAME = 'modalUSWithName'), (e.MODAL_INTL_WITH_NAME = 'modalInternationalWithName'), (e.SETTINGS_US = 'settingsUS'), (e.SETTINGS_INTL = 'settingsInternational'), (e.SETTINGS_INTL_NO_NAME = 'settingsInternationalWithoutName'), (e.SETTINGS_US_MOBILE = 'settingsUSMobile'), (e.SETTINGS_INTL_MOBILE = 'settingsInternationalMobile'), (e.SETTINGS_INTL_NO_NAME_MOBILE = 'settingsInternationalWithoutNameMobile'), e;
    })(x || {}),
    L = (function (e) {
        return (e.EDIT = 'edit'), (e.CREATE = 'create'), e;
    })(L || {});
let M = {
        [y]: l.G,
        [O]: a.X
    },
    k = (e) => ({
        name: 'name',
        id: N,
        title: () => p.NW.string(p.t.vyuULS),
        autoComplete: 'name',
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? _.width100 : _.width60),
        renderInput: (e) => (0, i.jsx)(c.oil, m({}, e))
    }),
    j = (e) => ({
        name: 'country',
        id: A,
        title: () => p.NW.string(p.t.eDdrAA),
        autoComplete: 'country',
        getClassNameForLayout: (e) => {
            switch (e) {
                case 'modalUS':
                case 'modalInternational':
                case 'modalUSWithName':
                case 'modalInternationalWithName':
                    return _.width100;
                default:
                    return _.width75;
            }
        },
        renderInput(e, t) {
            let { onChange: n } = e,
                r = v(e, ['onChange']);
            return (0, i.jsx)(
                c.VcW,
                E(m({}, r), {
                    autoFocus: !0,
                    maxVisibleItems: 8,
                    isDisabled: 'edit' === t.mode,
                    options: T,
                    onChange: (t) => {
                        null != n && n(t, e.name);
                    }
                })
            );
        }
    }),
    U = (e) => ({
        name: 'line1',
        id: C,
        title: () => p.NW.string(p.t.x0beVV),
        autoComplete: 'address-line1',
        placeholder: () => p.NW.string(p.t['ynII//']),
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? _.width100 : _.width60),
        renderInput: (e) => (0, i.jsx)(c.oil, m({}, e))
    }),
    G = (e) => ({
        name: 'line2',
        id: R,
        title: () => p.NW.string(p.t.i2Z0gI),
        placeholder: () => p.NW.string(p.t.fKLoNj),
        autoComplete: 'address-line2',
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? _.width100 : _.width40),
        renderInput: (e) => (0, i.jsx)(c.oil, m({}, e))
    }),
    B = (e) => ({
        name: 'city',
        id: P,
        title: () => p.NW.string(p.t.bUSWl5),
        autoComplete: 'address-level2',
        placeholder: () => p.NW.string(p.t['5rRx39']),
        getClassNameForLayout: (e) => {
            switch (e) {
                case 'modalInternational':
                case 'modalUS':
                case 'modalInternationalWithName':
                case 'modalUSWithName':
                case 'settingsUSMobile':
                case 'settingsInternationalMobile':
                case 'settingsInternationalWithoutNameMobile':
                    return _.width100;
                case 'settingsInternational':
                    return _.width60;
                default:
                    return _.width50;
            }
        },
        renderInput: (e) => (0, i.jsx)(c.oil, m({}, e))
    }),
    Z = (e) => {
        let t, n;
        switch (e) {
            case y:
                (t = p.NW.string(p.t['/95CeH'])), (n = p.NW.string(p.t['9xLNmp']));
                break;
            case O:
                (t = p.NW.string(p.t.mfpJ9v)), (n = p.NW.string(p.t.Nc4Rzs));
                break;
            default:
                t = p.NW.string(p.t.mfpJ9v);
        }
        return {
            name: 'postalCode',
            id: w,
            title: () => t,
            autoComplete: 'postal-code',
            placeholder: () => n,
            getClassNameForLayout: (e) => {
                switch (e) {
                    case 'modalInternational':
                    case 'modalInternationalWithName':
                        return _.width100;
                    case 'modalUS':
                    case 'modalUSWithName':
                    case 'settingsUSMobile':
                    case 'settingsInternationalMobile':
                    case 'settingsInternationalWithoutNameMobile':
                        return _.width50;
                    case 'settingsInternational':
                        return _.width30;
                    default:
                        return _.width25;
                }
            },
            renderInput: (e) => (0, i.jsx)(c.oil, m({}, e))
        };
    },
    F = (e) => {
        let t;
        switch (e) {
            case y:
                t = p.NW.string(p.t.PNfx5e);
                break;
            case O:
                t = p.NW.string(p.t['7A/tEx']);
                break;
            default:
                t = p.NW.string(p.t.w0xG2t);
        }
        return {
            name: 'state',
            id: D,
            title: () => t,
            autoComplete: 'address-level1',
            getClassNameForLayout: (e) => {
                switch (e) {
                    case 'modalInternational':
                    case 'modalInternationalWithName':
                    case 'settingsUSMobile':
                    case 'settingsInternationalMobile':
                    case 'settingsInternationalWithoutNameMobile':
                        return _.width100;
                    case 'modalUS':
                    case 'modalUSWithName':
                        return _.width50;
                    case 'settingsInternational':
                        return _.width30;
                    default:
                        return _.width25;
                }
            },
            renderInput(t) {
                let n = M[e],
                    r =
                        null == t.value ||
                        '' === t.value ||
                        (null != n &&
                            null !=
                                n.find((e) => {
                                    let { value: n } = e;
                                    return n === t.value;
                                })),
                    { layout: o, onChange: a } = t,
                    s = v(t, ['layout', 'onChange']);
                return [y, O].includes(e) && r
                    ? (0, i.jsx)(
                          c.VcW,
                          E(m({}, s), {
                              popoutPosition: ['modalUS', 'modalInternational'].includes(o) ? 'top' : void 0,
                              options: n,
                              onChange: (e) => {
                                  null != a && a(e, t.name);
                              }
                          })
                      )
                    : (0, i.jsx)(c.oil, m({}, t));
            }
        };
    },
    V = {
        modalUS: [[j], [U], [G], [B], [F, Z]],
        modalInternational: [[j], [U], [G], [B], [F], [Z]],
        modalUSWithName: [[j], [k], [U], [G], [B], [F, Z]],
        modalInternationalWithName: [[j], [k], [U], [G], [B], [F], [Z]],
        settingsUS: [[k], [U, G], [B, F, Z], [j]],
        settingsUSMobile: [[k], [U], [G], [B], [F], [Z], [j]],
        settingsInternational: [[k], [U, G], [B], [F, Z], [j]],
        settingsInternationalMobile: [[k], [U], [G], [B], [F], [Z], [j]],
        settingsInternationalWithoutName: [[U, G], [B], [F, Z], [j]],
        settingsInternationalWithoutNameMobile: [[U], [G], [B], [F], [Z], [j]]
    };
class H extends (r = o.PureComponent) {
    componentDidMount() {
        this.handleInfoChange();
    }
    componentDidUpdate(e, t) {
        this.state !== t && this.handleInfoChange();
    }
    hasValue(e) {
        return null != e && '' !== e;
    }
    validateForm(e) {
        let { values: t, dirtyFields: n } = this.state,
            r = {};
        (e && !n.name) || this.hasValue(t.name) || 'edit' !== this.props.mode || (r.name = p.NW.string(p.t.KU5mWF)), (e && !n.country) || this.hasValue(t.country) || (r.country = p.NW.string(p.t['+bm+zM'])), (e && !n.line1) || this.hasValue(t.line1) || (r.line1 = p.NW.string(p.t['6HMkBw'])), (e && !n.city) || this.hasValue(t.city) || (r.city = p.NW.string(p.t.kOrBmZ));
        let i = t.country;
        switch (i) {
            case y:
                if (!e || n.postalCode) {
                    let e = t.postalCode;
                    this.hasValue(e) ? (e.length !== S ? (r.postalCode = p.NW.string(p.t['+zjAbm'])) : /^\d{5}$/.test(e) || (r.postalCode = p.NW.string(p.t.CuZPeX))) : (r.postalCode = p.NW.string(p.t['iXID+/']));
                }
                (e && !n.state) || this.hasValue(t.state) || (r.state = p.NW.string(p.t.RIaPdH));
                break;
            case O:
                (e && !n.postalCode) || this.hasValue(t.postalCode) || (r.postalCode = p.NW.string(p.t.LRlhb2)), (e && !n.state) || this.hasValue(t.state) || (r.state = p.NW.string(p.t.PsJCcn));
                break;
            default:
                (e && !n.postalCode) || this.hasValue(t.postalCode) || I.includes(null != i ? i : '') || (r.postalCode = p.NW.string(p.t.LRlhb2));
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
            { layout: n, mode: r, className: o, error: a } = this.props,
            s = V[n];
        if (null == s) throw Error('Provide a proper layout property.');
        let l = t.country,
            c = s
                .map((e) => {
                    let t = e.map((e) => e(null != l ? l : '')).filter(d.lm);
                    return t.length > 0 ? { fields: t } : null;
                })
                .filter(d.lm);
        return (0, i.jsx)(f.Z, {
            className: o,
            form: c,
            layout: n,
            values: t,
            errors: e,
            formError: a,
            onFieldChange: this.handleFieldChange,
            onFieldBlur: this.handleFieldBlur,
            mode: r
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'state', {
                values: {
                    name: this.props.name,
                    country: this.props.country,
                    line1: this.props.line1,
                    line2: this.props.line2,
                    city: this.props.city,
                    postalCode: this.props.postalCode,
                    state: this.props.state
                },
                dirtyFields: {},
                errors: {}
            }),
            h(this, 'handleFieldBlur', () => {
                this.setState({ errors: this.validateForm(!0) });
            }),
            h(this, 'handleFieldChange', (e, t) => {
                if (null == t) return;
                let { values: n, errors: r, dirtyFields: i } = this.state;
                delete r[t],
                    this.setState({
                        values: E(m({}, n), { [t]: e }),
                        dirtyFields: E(m({}, i), { [t]: !0 }),
                        errors: r
                    });
            });
    }
}
h(H, 'Layouts', x),
    h(H, 'Modes', L),
    h(H, 'defaultProps', {
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: '',
        layout: 'modalUS',
        mode: 'create',
        error: null
    });
let W = H;
