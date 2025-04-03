n.d(t, { Z: () => d }), n(47120), n(757143), n(301563);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(218872);
function l(e, t, n) {
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
let o = /[^0-9]/g;
class c extends i.PureComponent {
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    render() {
        var e, t;
        return (0, r.jsx)(
            s.oil,
            ((e = (function (e) {
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
                            l(e, t, n[t]);
                        });
                }
                return e;
            })({}, this.props)),
            (t = t =
                {
                    inputMode: 'numeric',
                    onChange: this.handleChange,
                    inputRef: this.setRef
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
            e)
        );
    }
    constructor(...e) {
        super(...e),
            l(this, '_inputRef', void 0),
            l(this, 'selectionStart', 0),
            l(this, 'setRef', (e) => {
                let { inputRef: t } = this.props;
                (this._inputRef = e), null != t && t(e);
            }),
            l(this, 'handleChange', (e, t) => {
                let { value: n, onChange: r } = this.props,
                    i = this._inputRef;
                if (e === n || null == i || null == n) return;
                let s = (0, a.M)(e),
                    l = i.selectionStart;
                s === n && s.length <= 3 && n.includes('/') && !e.includes('/') ? (s = s.replace(o, '')) : s === n && e.includes('/') && !n.includes('/') && (s += '/'), s.length > e.length && (l += s.length - e.length), (this.selectionStart = l), null != r && r(s, t);
            });
    }
}
let d = c;
