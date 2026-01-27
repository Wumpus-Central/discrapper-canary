n.d(t, {
    A: () => d,
}),
    n(896048),
    n(747238),
    n(812715);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(34006);

function a(e, t, n) {
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
let o = /[^0-9]/g;
class c extends i.PureComponent {
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    render() {
        var e, t;
        return (0, r.jsx)(
            l.ksK,
            ((e = (function (e) {
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
                            a(e, t, n[t]);
                        });
                }
                return e;
            })({}, this.props)),
            (t = t =
                {
                    inputMode: "numeric",
                    onChange: this.handleChange,
                    inputRef: this.setRef,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(t)).forEach(function (n) {
                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  }),
            e),
        );
    }
    constructor(...e) {
        super(...e),
            a(this, "_inputRef", void 0),
            a(this, "selectionStart", 0),
            a(this, "setRef", (e) => {
                let { inputRef: t } = this.props;
                (this._inputRef = e), null != t && t(e);
            }),
            a(this, "handleChange", (e, t) => {
                let { value: n, onChange: r } = this.props,
                    i = this._inputRef;
                if (e === n || null == i || null == n) return;
                let l = (0, s.N)(e),
                    a = i.selectionStart;
                l === n && l.length <= 3 && n.includes("/") && !e.includes("/")
                    ? (l = l.replace(o, ""))
                    : l === n && e.includes("/") && !n.includes("/") && (l += "/"),
                    l.length > e.length && (a += l.length - e.length),
                    (this.selectionStart = a),
                    null != r && r(l, t);
            });
    }
}
let d = c;
