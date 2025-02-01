n.d(t, { Z: () => d }), n(47120), n(757143);
var i = n(200651),
    s = n(192379),
    r = n(481060),
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
class c extends s.PureComponent {
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    render() {
        return (0, i.jsx)(r.oil, {
            ...this.props,
            inputMode: 'numeric',
            onChange: this.handleChange,
            inputRef: this.setRef
        });
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
                    s = this._inputRef;
                if (e === n || null == s || null == n) return;
                let r = (0, l.M)(e),
                    a = s.selectionStart;
                r === n && r.length <= 3 && n.includes('/') && !e.includes('/') ? (r = r.replace(o, '')) : r === n && e.includes('/') && !n.includes('/') && (r += '/'), r.length > e.length && (a += r.length - e.length), (this.selectionStart = a), null != i && i(r, t);
            });
    }
}
let d = c;
