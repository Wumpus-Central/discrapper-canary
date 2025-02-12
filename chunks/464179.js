n.d(t, { ZP: () => Z }), n(47120), n(411104);
var i,
    r = n(200651),
    a = n(192379),
    s = n(588391),
    o = n(217986),
    l = n(971809),
    u = n(481060),
    c = n(313201),
    d = n(823379),
    f = n(754103),
    _ = n(388032),
    p = n(589366);
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
let m = 'US',
    g = 'CA',
    E = 5,
    v = ['AE', 'AG', 'AN', 'AO', 'AW', 'BF', 'BI', 'BJ', 'BM', 'BO', 'BQ', 'BS', 'BW', 'BZ', 'CD', 'CF', 'CG', 'CI', 'CK', 'CM', 'CW', 'DJ', 'DM', 'ER', 'FJ', 'GA', 'GD', 'GH', 'GM', 'GQ', 'GY', 'HK', 'HM', 'IE', 'JM', 'KE', 'KI', 'KM', 'KN', 'KP', 'LY', 'ML', 'MO', 'MR', 'MW', 'NA', 'NR', 'NU', 'QA', 'RW', 'SB', 'SC', 'SL', 'SR', 'ST', 'SX', 'SY', 'TD', 'TF', 'TG', 'TK', 'TL', 'TO', 'TV', 'UG', 'VU', 'YE', 'ZA', 'ZW'],
    y = o.Z.map((e) => ({
        value: e.alpha2,
        label: e.name
    })).filter((e) => 'KP' !== e.value && 'SY' !== e.value),
    I = (0, c.hQ)(),
    T = (0, c.hQ)(),
    b = (0, c.hQ)(),
    S = (0, c.hQ)(),
    A = (0, c.hQ)(),
    N = (0, c.hQ)(),
    C = (0, c.hQ)();
var R = (function (e) {
        return (e.MODAL_US = 'modalUS'), (e.MODAL_INTL = 'modalInternational'), (e.MODAL_US_WITH_NAME = 'modalUSWithName'), (e.MODAL_INTL_WITH_NAME = 'modalInternationalWithName'), (e.SETTINGS_US = 'settingsUS'), (e.SETTINGS_INTL = 'settingsInternational'), (e.SETTINGS_INTL_NO_NAME = 'settingsInternationalWithoutName'), (e.SETTINGS_US_MOBILE = 'settingsUSMobile'), (e.SETTINGS_INTL_MOBILE = 'settingsInternationalMobile'), (e.SETTINGS_INTL_NO_NAME_MOBILE = 'settingsInternationalWithoutNameMobile'), e;
    })(R || {}),
    O = (function (e) {
        return (e.EDIT = 'edit'), (e.CREATE = 'create'), e;
    })(O || {});
let D = {
        [m]: l.G,
        [g]: s.X
    },
    L = (e) => ({
        name: 'name',
        id: I,
        title: () => _.intl.string(_.t.vyuULS),
        autoComplete: 'name',
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? p.width100 : p.width60),
        renderInput: (e) => (0, r.jsx)(u.oil, { ...e })
    }),
    x = (e) => ({
        name: 'country',
        id: T,
        title: () => _.intl.string(_.t.eDdrAA),
        autoComplete: 'country',
        getClassNameForLayout: (e) => {
            switch (e) {
                case 'modalUS':
                case 'modalInternational':
                case 'modalUSWithName':
                case 'modalInternationalWithName':
                    return p.width100;
                default:
                    return p.width75;
            }
        },
        renderInput(e, t) {
            let { onChange: n, ...i } = e;
            return (0, r.jsx)(u.VcW, {
                ...i,
                autoFocus: !0,
                maxVisibleItems: 8,
                isDisabled: 'edit' === t.mode,
                options: y,
                onChange: (t) => {
                    null != n && n(t, e.name);
                }
            });
        }
    }),
    P = (e) => ({
        name: 'line1',
        id: b,
        title: () => _.intl.string(_.t.x0beVV),
        autoComplete: 'address-line1',
        placeholder: () => _.intl.string(_.t['ynII//']),
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? p.width100 : p.width60),
        renderInput: (e) => (0, r.jsx)(u.oil, { ...e })
    }),
    w = (e) => ({
        name: 'line2',
        id: S,
        title: () => _.intl.string(_.t.i2Z0gI),
        placeholder: () => _.intl.string(_.t.fKLoNj),
        autoComplete: 'address-line2',
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? p.width100 : p.width40),
        renderInput: (e) => (0, r.jsx)(u.oil, { ...e })
    }),
    M = (e) => ({
        name: 'city',
        id: A,
        title: () => _.intl.string(_.t.bUSWl5),
        autoComplete: 'address-level2',
        placeholder: () => _.intl.string(_.t['5rRx39']),
        getClassNameForLayout: (e) => {
            switch (e) {
                case 'modalInternational':
                case 'modalUS':
                case 'modalInternationalWithName':
                case 'modalUSWithName':
                case 'settingsUSMobile':
                case 'settingsInternationalMobile':
                case 'settingsInternationalWithoutNameMobile':
                    return p.width100;
                case 'settingsInternational':
                    return p.width60;
                default:
                    return p.width50;
            }
        },
        renderInput: (e) => (0, r.jsx)(u.oil, { ...e })
    }),
    k = (e) => {
        let t, n;
        switch (e) {
            case m:
                (t = _.intl.string(_.t['/95CeH'])), (n = _.intl.string(_.t['9xLNmp']));
                break;
            case g:
                (t = _.intl.string(_.t.mfpJ9v)), (n = _.intl.string(_.t.Nc4Rzs));
                break;
            default:
                t = _.intl.string(_.t.mfpJ9v);
        }
        return {
            name: 'postalCode',
            id: N,
            title: () => t,
            autoComplete: 'postal-code',
            placeholder: () => n,
            getClassNameForLayout: (e) => {
                switch (e) {
                    case 'modalInternational':
                    case 'modalInternationalWithName':
                        return p.width100;
                    case 'modalUS':
                    case 'modalUSWithName':
                    case 'settingsUSMobile':
                    case 'settingsInternationalMobile':
                    case 'settingsInternationalWithoutNameMobile':
                        return p.width50;
                    case 'settingsInternational':
                        return p.width30;
                    default:
                        return p.width25;
                }
            },
            renderInput: (e) => (0, r.jsx)(u.oil, { ...e })
        };
    },
    U = (e) => {
        let t;
        switch (e) {
            case m:
                t = _.intl.string(_.t.PNfx5e);
                break;
            case g:
                t = _.intl.string(_.t['7A/tEx']);
                break;
            default:
                t = _.intl.string(_.t.w0xG2t);
        }
        return {
            name: 'state',
            id: C,
            title: () => t,
            autoComplete: 'address-level1',
            getClassNameForLayout: (e) => {
                switch (e) {
                    case 'modalInternational':
                    case 'modalInternationalWithName':
                    case 'settingsUSMobile':
                    case 'settingsInternationalMobile':
                    case 'settingsInternationalWithoutNameMobile':
                        return p.width100;
                    case 'modalUS':
                    case 'modalUSWithName':
                        return p.width50;
                    case 'settingsInternational':
                        return p.width30;
                    default:
                        return p.width25;
                }
            },
            renderInput(t) {
                let n = D[e],
                    i =
                        null == t.value ||
                        '' === t.value ||
                        (null != n &&
                            null !=
                                n.find((e) => {
                                    let { value: n } = e;
                                    return n === t.value;
                                })),
                    { layout: a, onChange: s, ...o } = t;
                return [m, g].includes(e) && i
                    ? (0, r.jsx)(u.VcW, {
                          ...o,
                          popoutPosition: ['modalUS', 'modalInternational'].includes(a) ? 'top' : void 0,
                          options: n,
                          onChange: (e) => {
                              null != s && s(e, t.name);
                          }
                      })
                    : (0, r.jsx)(u.oil, { ...t });
            }
        };
    },
    G = {
        modalUS: [[x], [P], [w], [M], [U, k]],
        modalInternational: [[x], [P], [w], [M], [U], [k]],
        modalUSWithName: [[x], [L], [P], [w], [M], [U, k]],
        modalInternationalWithName: [[x], [L], [P], [w], [M], [U], [k]],
        settingsUS: [[L], [P, w], [M, U, k], [x]],
        settingsUSMobile: [[L], [P], [w], [M], [U], [k], [x]],
        settingsInternational: [[L], [P, w], [M], [U, k], [x]],
        settingsInternationalMobile: [[L], [P], [w], [M], [U], [k], [x]],
        settingsInternationalWithoutName: [[P, w], [M], [U, k], [x]],
        settingsInternationalWithoutNameMobile: [[P], [w], [M], [U], [k], [x]]
    };
class B extends (i = a.PureComponent) {
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
            i = {};
        (e && !n.name) || this.hasValue(t.name) || 'edit' !== this.props.mode || (i.name = _.intl.string(_.t.KU5mWF)), (e && !n.country) || this.hasValue(t.country) || (i.country = _.intl.string(_.t['+bm+zM'])), (e && !n.line1) || this.hasValue(t.line1) || (i.line1 = _.intl.string(_.t['6HMkBw'])), (e && !n.city) || this.hasValue(t.city) || (i.city = _.intl.string(_.t.kOrBmZ));
        let r = t.country;
        switch (r) {
            case m:
                if (!e || n.postalCode) {
                    let e = t.postalCode;
                    this.hasValue(e) ? (e.length !== E ? (i.postalCode = _.intl.string(_.t['+zjAbm'])) : /^\d{5}$/.test(e) || (i.postalCode = _.intl.string(_.t.CuZPeX))) : (i.postalCode = _.intl.string(_.t['iXID+/']));
                }
                (e && !n.state) || this.hasValue(t.state) || (i.state = _.intl.string(_.t.RIaPdH));
                break;
            case g:
                (e && !n.postalCode) || this.hasValue(t.postalCode) || (i.postalCode = _.intl.string(_.t.LRlhb2)), (e && !n.state) || this.hasValue(t.state) || (i.state = _.intl.string(_.t.PsJCcn));
                break;
            default:
                (e && !n.postalCode) || this.hasValue(t.postalCode) || v.includes(null != r ? r : '') || (i.postalCode = _.intl.string(_.t.LRlhb2));
        }
        return i;
    }
    handleInfoChange() {
        let { values: e, dirtyFields: t } = this.state,
            n = this.validateForm(!1);
        this.props.onBillingAddressChange(e, 0 === Object.keys(n).length, Object.keys(t).length > 0);
    }
    render() {
        let { errors: e, values: t } = this.state,
            { layout: n, mode: i, className: a, error: s } = this.props,
            o = G[n];
        if (null == o) throw Error('Provide a proper layout property.');
        let l = t.country,
            u = o
                .map((e) => {
                    let t = e.map((e) => e(null != l ? l : '')).filter(d.lm);
                    return t.length > 0 ? { fields: t } : null;
                })
                .filter(d.lm);
        return (0, r.jsx)(f.Z, {
            className: a,
            form: u,
            layout: n,
            values: t,
            errors: e,
            formError: s,
            onFieldChange: this.handleFieldChange,
            onFieldBlur: this.handleFieldBlur,
            mode: i
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
                let { values: n, errors: i, dirtyFields: r } = this.state;
                delete i[t],
                    this.setState({
                        values: {
                            ...n,
                            [t]: e
                        },
                        dirtyFields: {
                            ...r,
                            [t]: !0
                        },
                        errors: i
                    });
            });
    }
}
h(B, 'Layouts', R),
    h(B, 'Modes', O),
    h(B, 'defaultProps', {
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
let Z = B;
