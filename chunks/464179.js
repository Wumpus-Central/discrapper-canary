var i,
    a,
    o,
    s,
    l = r(47120);
var u = r(411104);
var c = r(200651),
    d = r(192379),
    f = r(588391),
    p = r(217986),
    h = r(971809),
    _ = r(481060),
    m = r(313201),
    g = r(823379),
    E = r(754103),
    v = r(388032),
    y = r(498918);
function b(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let I = 'US',
    T = 'CA',
    S = 5,
    A = ['AE', 'AG', 'AN', 'AO', 'AW', 'BF', 'BI', 'BJ', 'BM', 'BO', 'BQ', 'BS', 'BW', 'BZ', 'CD', 'CF', 'CG', 'CI', 'CK', 'CM', 'CW', 'DJ', 'DM', 'ER', 'FJ', 'GA', 'GD', 'GH', 'GM', 'GQ', 'GY', 'HK', 'HM', 'IE', 'JM', 'KE', 'KI', 'KM', 'KN', 'KP', 'LY', 'ML', 'MO', 'MR', 'MW', 'NA', 'NR', 'NU', 'QA', 'RW', 'SB', 'SC', 'SL', 'SR', 'ST', 'SX', 'SY', 'TD', 'TF', 'TG', 'TK', 'TL', 'TO', 'TV', 'UG', 'VU', 'YE', 'ZA', 'ZW'],
    C = p.Z.map((e) => ({
        value: e.alpha2,
        label: e.name
    })).filter((e) => 'KP' !== e.value && 'SY' !== e.value),
    N = (0, m.hQ)(),
    R = (0, m.hQ)(),
    O = (0, m.hQ)(),
    D = (0, m.hQ)(),
    L = (0, m.hQ)(),
    x = (0, m.hQ)(),
    w = (0, m.hQ)();
!(function (e) {
    (e.NAME = 'name'), (e.COUNTRY = 'country'), (e.LINE1 = 'line1'), (e.LINE2 = 'line2'), (e.CITY = 'city'), (e.POSTAL_CODE = 'postalCode'), (e.STATE = 'state');
})(i || (i = {})),
    !(function (e) {
        (e.MODAL_US = 'modalUS'), (e.MODAL_INTL = 'modalInternational'), (e.MODAL_US_WITH_NAME = 'modalUSWithName'), (e.MODAL_INTL_WITH_NAME = 'modalInternationalWithName'), (e.SETTINGS_US = 'settingsUS'), (e.SETTINGS_INTL = 'settingsInternational'), (e.SETTINGS_INTL_NO_NAME = 'settingsInternationalWithoutName'), (e.SETTINGS_US_MOBILE = 'settingsUSMobile'), (e.SETTINGS_INTL_MOBILE = 'settingsInternationalMobile'), (e.SETTINGS_INTL_NO_NAME_MOBILE = 'settingsInternationalWithoutNameMobile');
    })(a || (a = {})),
    !(function (e) {
        (e.EDIT = 'edit'), (e.CREATE = 'create');
    })(o || (o = {}));
let P = {
        [I]: h.G,
        [T]: f.X
    },
    M = (e) => ({
        name: 'name',
        id: N,
        title: () => v.intl.string(v.t.vyuULS),
        autoComplete: 'name',
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? y.width100 : y.width60),
        renderInput: (e) => (0, c.jsx)(_.TextInput, { ...e })
    }),
    k = (e) => ({
        name: 'country',
        id: R,
        title: () => v.intl.string(v.t.eDdrAA),
        autoComplete: 'country',
        getClassNameForLayout: (e) => {
            switch (e) {
                case 'modalUS':
                case 'modalInternational':
                case 'modalUSWithName':
                case 'modalInternationalWithName':
                    return y.width100;
                default:
                    return y.width75;
            }
        },
        renderInput(e, n) {
            let { onChange: r, ...i } = e;
            return (0, c.jsx)(_.SearchableSelect, {
                ...i,
                autoFocus: !0,
                maxVisibleItems: 8,
                isDisabled: 'edit' === n.mode,
                options: C,
                onChange: (n) => {
                    null != r && r(n, e.name);
                }
            });
        }
    }),
    U = (e) => ({
        name: 'line1',
        id: O,
        title: () => v.intl.string(v.t.x0beVV),
        autoComplete: 'address-line1',
        placeholder: () => v.intl.string(v.t['ynII//']),
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? y.width100 : y.width60),
        renderInput: (e) => (0, c.jsx)(_.TextInput, { ...e })
    }),
    B = (e) => ({
        name: 'line2',
        id: D,
        title: () => v.intl.string(v.t.i2Z0gI),
        placeholder: () => v.intl.string(v.t.fKLoNj),
        autoComplete: 'address-line2',
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? y.width100 : y.width40),
        renderInput: (e) => (0, c.jsx)(_.TextInput, { ...e })
    }),
    G = (e) => ({
        name: 'city',
        id: L,
        title: () => v.intl.string(v.t.bUSWl5),
        autoComplete: 'address-level2',
        placeholder: () => v.intl.string(v.t['5rRx39']),
        getClassNameForLayout: (e) => {
            switch (e) {
                case 'modalInternational':
                case 'modalUS':
                case 'modalInternationalWithName':
                case 'modalUSWithName':
                case 'settingsUSMobile':
                case 'settingsInternationalMobile':
                case 'settingsInternationalWithoutNameMobile':
                    return y.width100;
                case 'settingsInternational':
                    return y.width60;
                default:
                    return y.width50;
            }
        },
        renderInput: (e) => (0, c.jsx)(_.TextInput, { ...e })
    }),
    Z = (e) => {
        let n, r;
        switch (e) {
            case I:
                (n = v.intl.string(v.t['/95CeH'])), (r = v.intl.string(v.t['9xLNmp']));
                break;
            case T:
                (n = v.intl.string(v.t.mfpJ9v)), (r = v.intl.string(v.t.Nc4Rzs));
                break;
            default:
                n = v.intl.string(v.t.mfpJ9v);
        }
        return {
            name: 'postalCode',
            id: x,
            title: () => n,
            autoComplete: 'postal-code',
            placeholder: () => r,
            getClassNameForLayout: (e) => {
                switch (e) {
                    case 'modalInternational':
                    case 'modalInternationalWithName':
                        return y.width100;
                    case 'modalUS':
                    case 'modalUSWithName':
                    case 'settingsUSMobile':
                    case 'settingsInternationalMobile':
                    case 'settingsInternationalWithoutNameMobile':
                        return y.width50;
                    case 'settingsInternational':
                        return y.width30;
                    default:
                        return y.width25;
                }
            },
            renderInput: (e) => (0, c.jsx)(_.TextInput, { ...e })
        };
    },
    F = (e) => {
        let n;
        switch (e) {
            case I:
                n = v.intl.string(v.t.PNfx5e);
                break;
            case T:
                n = v.intl.string(v.t['7A/tEx']);
                break;
            default:
                n = v.intl.string(v.t.w0xG2t);
        }
        return {
            name: 'state',
            id: w,
            title: () => n,
            autoComplete: 'address-level1',
            getClassNameForLayout: (e) => {
                switch (e) {
                    case 'modalInternational':
                    case 'modalInternationalWithName':
                    case 'settingsUSMobile':
                    case 'settingsInternationalMobile':
                    case 'settingsInternationalWithoutNameMobile':
                        return y.width100;
                    case 'modalUS':
                    case 'modalUSWithName':
                        return y.width50;
                    case 'settingsInternational':
                        return y.width30;
                    default:
                        return y.width25;
                }
            },
            renderInput(n) {
                let r = P[e],
                    i =
                        null == n.value ||
                        '' === n.value ||
                        (null != r &&
                            null !=
                                r.find((e) => {
                                    let { value: r } = e;
                                    return r === n.value;
                                })),
                    { layout: a, onChange: o, ...s } = n;
                return [I, T].includes(e) && i
                    ? (0, c.jsx)(_.SearchableSelect, {
                          ...s,
                          popoutPosition: ['modalUS', 'modalInternational'].includes(a) ? 'top' : void 0,
                          options: r,
                          onChange: (e) => {
                              null != o && o(e, n.name);
                          }
                      })
                    : (0, c.jsx)(_.TextInput, { ...n });
            }
        };
    },
    V = {
        modalUS: [[k], [U], [B], [G], [F, Z]],
        modalInternational: [[k], [U], [B], [G], [F], [Z]],
        modalUSWithName: [[k], [M], [U], [B], [G], [F, Z]],
        modalInternationalWithName: [[k], [M], [U], [B], [G], [F], [Z]],
        settingsUS: [[M], [U, B], [G, F, Z], [k]],
        settingsUSMobile: [[M], [U], [B], [G], [F], [Z], [k]],
        settingsInternational: [[M], [U, B], [G], [F, Z], [k]],
        settingsInternationalMobile: [[M], [U], [B], [G], [F], [Z], [k]],
        settingsInternationalWithoutName: [[U, B], [G], [F, Z], [k]],
        settingsInternationalWithoutNameMobile: [[U], [B], [G], [F], [Z], [k]]
    };
class j extends (s = d.PureComponent) {
    componentDidMount() {
        this.handleInfoChange();
    }
    componentDidUpdate(e, n) {
        this.state !== n && this.handleInfoChange();
    }
    hasValue(e) {
        return null != e && '' !== e;
    }
    validateForm(e) {
        let { values: n, dirtyFields: r } = this.state,
            i = {};
        (!e || r.name) && !this.hasValue(n.name) && 'edit' === this.props.mode && (i.name = v.intl.string(v.t.KU5mWF)), (!e || r.country) && !this.hasValue(n.country) && (i.country = v.intl.string(v.t['+bm+zM'])), (!e || r.line1) && !this.hasValue(n.line1) && (i.line1 = v.intl.string(v.t['6HMkBw'])), (!e || r.city) && !this.hasValue(n.city) && (i.city = v.intl.string(v.t.kOrBmZ));
        let a = n.country;
        switch (a) {
            case I:
                if (!e || r.postalCode) {
                    let e = n.postalCode;
                    this.hasValue(e) ? (e.length !== S ? (i.postalCode = v.intl.string(v.t['+zjAbm'])) : !/^\d{5}$/.test(e) && (i.postalCode = v.intl.string(v.t.CuZPeX))) : (i.postalCode = v.intl.string(v.t['iXID+/']));
                }
                (!e || r.state) && !this.hasValue(n.state) && (i.state = v.intl.string(v.t.RIaPdH));
                break;
            case T:
                (!e || r.postalCode) && !this.hasValue(n.postalCode) && (i.postalCode = v.intl.string(v.t.LRlhb2)), (!e || r.state) && !this.hasValue(n.state) && (i.state = v.intl.string(v.t.PsJCcn));
                break;
            default:
                (!e || r.postalCode) && !this.hasValue(n.postalCode) && !A.includes(null != a ? a : '') && (i.postalCode = v.intl.string(v.t.LRlhb2));
        }
        return i;
    }
    handleInfoChange() {
        let { values: e, dirtyFields: n } = this.state,
            r = this.validateForm(!1);
        this.props.onBillingAddressChange(e, 0 === Object.keys(r).length, Object.keys(n).length > 0);
    }
    render() {
        let { errors: e, values: n } = this.state,
            { layout: r, mode: i, className: a, error: o } = this.props,
            s = V[r];
        if (null == s) throw Error('Provide a proper layout property.');
        let l = n.country,
            u = s
                .map((e) => {
                    let n = e.map((e) => e(null != l ? l : '')).filter(g.lm);
                    return n.length > 0 ? { fields: n } : null;
                })
                .filter(g.lm);
        return (0, c.jsx)(E.Z, {
            className: a,
            form: u,
            layout: r,
            values: n,
            errors: e,
            formError: o,
            onFieldChange: this.handleFieldChange,
            onFieldBlur: this.handleFieldBlur,
            mode: i
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', {
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
            b(this, 'handleFieldBlur', () => {
                this.setState({ errors: this.validateForm(!0) });
            }),
            b(this, 'handleFieldChange', (e, n) => {
                if (null == n) return;
                let { values: r, errors: i, dirtyFields: a } = this.state;
                delete i[n],
                    this.setState({
                        values: {
                            ...r,
                            [n]: e
                        },
                        dirtyFields: {
                            ...a,
                            [n]: !0
                        },
                        errors: i
                    });
            });
    }
}
b(j, 'Layouts', a),
    b(j, 'Modes', o),
    b(j, 'defaultProps', {
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
    }),
    (n.ZP = j);
