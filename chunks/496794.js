n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(34006);
let l = /[^0-9]/g;
class o extends s.PureComponent {
    _inputRef;
    selectionStart = 0;
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    setRef = (e) => {
        let { inputRef: t } = this.props;
        (this._inputRef = e), null != t && t(e);
    };
    handleChange = (e, t) => {
        let { value: n, onChange: i } = this.props,
            s = this._inputRef;
        if (e === n || null == s || null == n) return;
        let r = (0, a.N)(e),
            o = s.selectionStart;
        r === n && r.length <= 3 && n.includes("/") && !e.includes("/")
            ? (r = r.replace(l, ""))
            : r === n && e.includes("/") && !n.includes("/") && (r += "/"),
            r.length > e.length && (o += r.length - e.length),
            (this.selectionStart = o),
            null != i && i(r, t);
    };
    render() {
        return (0, i.jsx)(r.ksK, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
let c = o;
