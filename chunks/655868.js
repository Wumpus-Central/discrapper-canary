n.d(t, { Z: () => d }), n(47120), n(757143);
var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(218872);
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
        return (0, i.jsx)(l.oil, {
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
                let l = (0, r.M)(e),
                    a = s.selectionStart;
                l === n && l.length <= 3 && n.includes('/') && !e.includes('/') ? (l = l.replace(o, '')) : l === n && e.includes('/') && !n.includes('/') && (l += '/'), l.length > e.length && (a += l.length - e.length), (this.selectionStart = a), null != i && i(l, t);
            });
    }
}
let d = c;
