n.d(t, { Z: () => p }), n(388685), n(704826), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(218872);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = /[^0-9]/g;
class f extends i.PureComponent {
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    render() {
        return (0, r.jsx)(
            a.oil,
            u(l({}, this.props), {
                inputMode: "numeric",
                onChange: this.handleChange,
                inputRef: this.setRef,
            }),
        );
    }
    constructor(...e) {
        super(...e),
            s(this, "_inputRef", void 0),
            s(this, "selectionStart", 0),
            s(this, "setRef", (e) => {
                let { inputRef: t } = this.props;
                (this._inputRef = e), null != t && t(e);
            }),
            s(this, "handleChange", (e, t) => {
                let { value: n, onChange: r } = this.props,
                    i = this._inputRef;
                if (e === n || null == i || null == n) return;
                let a = (0, o.M)(e),
                    s = i.selectionStart;
                a === n && a.length <= 3 && n.includes("/") && !e.includes("/")
                    ? (a = a.replace(d, ""))
                    : a === n && e.includes("/") && !n.includes("/") && (a += "/"),
                    a.length > e.length && (s += a.length - e.length),
                    (this.selectionStart = s),
                    null != r && r(a, t);
            });
    }
}
let p = f;
