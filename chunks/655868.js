n.d(t, { Z: () => d }), n(388685), n(704826), n(35282);
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(218872);
function a(e, t, n) {
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
class c extends r.PureComponent {
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    render() {
        var e, t;
        return (0, i.jsx)(
            s.oil,
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            a(e, t, n[t]);
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
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
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
            a(this, '_inputRef', void 0),
            a(this, 'selectionStart', 0),
            a(this, 'setRef', (e) => {
                let { inputRef: t } = this.props;
                (this._inputRef = e), null != t && t(e);
            }),
            a(this, 'handleChange', (e, t) => {
                let { value: n, onChange: i } = this.props,
                    r = this._inputRef;
                if (e === n || null == r || null == n) return;
                let s = (0, l.M)(e),
                    a = r.selectionStart;
                s === n && s.length <= 3 && n.includes('/') && !e.includes('/') ? (s = s.replace(o, '')) : s === n && e.includes('/') && !n.includes('/') && (s += '/'), s.length > e.length && (a += s.length - e.length), (this.selectionStart = a), null != i && i(s, t);
            });
    }
}
let d = c;
