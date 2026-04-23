n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(292666),
    a = n(34006);
let r = /[^0-9]/g;
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
        let l = (0, a.N)(e),
            o = s.selectionStart;
        l === n && l.length <= 3 && n.includes("/") && !e.includes("/")
            ? (l = l.replace(r, ""))
            : l === n && e.includes("/") && !n.includes("/") && (l += "/"),
            l.length > e.length && (o += l.length - e.length),
            (this.selectionStart = o),
            null != i && i(l, t);
    };
    render() {
        return (0, i.jsx)(l.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
let d = o;
