n.d(t, { Z: () => E }), n(388685), n(361932), n(187205), n(35282);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(217986),
    l = n(886025),
    c = n(481060),
    u = n(133080),
    d = n(388032),
    f = n(984392);
function _(e, t, n) {
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
let p = new Map(
        s.Z.flatMap((e) => {
            let { alpha2: t, phoneCountryCodes: n } = e,
                r = (0, u.q9)(t);
            return n.map((e) => [
                "".concat(t, "-").concat(e),
                {
                    code: e,
                    alpha2: t,
                    name: r,
                },
            ]);
        }),
    ),
    h = Array.from(p.entries()).map((e) => {
        let [t, { name: n }] = e;
        return {
            value: t,
            label: n,
        };
    });
function m(e) {
    return String.fromCodePoint(
        ...e
            .toUpperCase()
            .split("")
            .map((e) => 127397 + e.charCodeAt(0)),
    );
}
class g extends i.PureComponent {
    render() {
        let { countryCodeId: e, phone: t } = this.state,
            { className: n, submitting: i, errorMessage: a } = this.props,
            s = p.get(e);
        return (0, r.jsx)("fieldset", {
            children: (0, r.jsxs)("div", {
                className: o()(f.phoneField, n),
                children: [
                    (0, r.jsx)(l.N, {
                        label: d.intl.string(d.t["k+bvrK"]),
                        children: (0, r.jsx)(c.VcW, {
                            value: e,
                            onChange: this.handleCountryChange,
                            renderOptionPrefix: this.renderOptionPrefix,
                            options: h,
                            popoutWidth: 280,
                            isDisabled: i,
                        }),
                    }),
                    (0, r.jsx)(c.oil, {
                        label: d.intl.string(d.t["64bX0N"]),
                        error: a,
                        leading: null == s ? void 0 : s.code,
                        type: "tel",
                        onChange: this.handlePhoneChange,
                        autoFocus: !0,
                        inputRef: this.inputRef,
                        disabled: i,
                        value: t,
                    }),
                ],
            }),
        });
    }
    constructor(e) {
        super(e),
            _(this, "inputRef", i.createRef()),
            _(this, "renderOptionLabel", (e) => {
                let { name: t } = p.get(e.value);
                return t;
            }),
            _(this, "renderOptionPrefix", (e) => {
                var t, n;
                if (null != e) return m(null != (n = null == (t = p.get(e.value)) ? void 0 : t.alpha2) ? n : "");
            }),
            _(this, "handleCountryChange", (e) => {
                var t;
                this.setState({ countryCodeId: e }),
                    null == (t = this.inputRef.current) || t.focus(),
                    this.handleChange(e, this.state.phone);
            }),
            _(this, "handlePhoneChange", (e) => {
                this.setState({ phone: e });
                let { countryCodeId: t } = this.state;
                this.handleChange(t, e);
            }),
            _(this, "handleChange", (e, t) => {
                var n, r, i;
                let a = null == (n = p.get(e)) ? void 0 : n.code;
                null == (r = (i = this.props).onChange) || r.call(i, "".concat(a).concat(t));
            });
        let t = s.Z.find((e) => "United States" === e.name),
            [n, r] = t.phoneCountryCode.split(" "),
            a = "".concat(t.alpha2, "-").concat(t.phoneCountryCode);
        this.state = {
            countryCodeId: a,
            phone: null != r ? r : "",
        };
    }
}
let E = g;
