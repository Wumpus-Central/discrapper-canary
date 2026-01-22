n.d(t, { A: () => p }), n(896048), n(747238), n(812715);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(34006);
function o(e, t, n) {
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
                o(e, t, n[t]);
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
            a.ksK,
            u(l({}, this.props), {
                inputMode: "numeric",
                onChange: this.handleChange,
                inputRef: this.setRef,
            }),
        );
    }
    constructor(...e) {
        super(...e),
            o(this, "_inputRef", void 0),
            o(this, "selectionStart", 0),
            o(this, "setRef", (e) => {
                let { inputRef: t } = this.props;
                (this._inputRef = e), null != t && t(e);
            }),
            o(this, "handleChange", (e, t) => {
                let { value: n, onChange: r } = this.props,
                    i = this._inputRef;
                if (e === n || null == i || null == n) return;
                let a = (0, s.N)(e),
                    o = i.selectionStart;
                a === n && a.length <= 3 && n.includes("/") && !e.includes("/")
                    ? (a = a.replace(d, ""))
                    : a === n && e.includes("/") && !n.includes("/") && (a += "/"),
                    a.length > e.length && (o += a.length - e.length),
                    (this.selectionStart = o),
                    null != r && r(a, t);
            });
    }
}
let p = f;
