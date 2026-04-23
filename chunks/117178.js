n.d(t, { A: () => _ }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(695497),
    a = n.n(l),
    r = n(313869),
    o = n(451802),
    d = n(723702),
    u = n(837921),
    c = n(650583);
let g = d.isPlatformEmbedded && null != u.Ay.getDiscordUtils().inputCaptureRegisterElement;
class m extends s.PureComponent {
    _input;
    gs;
    _mounted = !1;
    constructor(e) {
        super(e);
        const { defaultValue: t } = e;
        this.state = { codes: t, mode: o.E.DEFAULT };
    }
    componentDidMount() {
        this._mounted = !0;
    }
    componentWillUnmount() {
        (this._mounted = !1), this.cleanUp();
    }
    componentDidUpdate(e) {
        this.props.defaultValue !== e.defaultValue && this.setState({ codes: this.props.defaultValue });
    }
    cleanUp() {
        d.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), (this.gs = null));
    }
    handleComboChange(e) {
        let { mode: t } = this.state,
            { onChange: n } = this.props;
        t === o.E.RECORDING && (null != n && n(e), this.setState({ codes: e }));
    }
    recordStart = () => {
        d.isPlatformEmbedded && !g && ((this.gs = new r.A()), this.gs.on("change", this.handleGSChange)),
            this.setState({ mode: o.E.RECORDING });
    };
    recordEnd = () => {
        this.cleanUp(), this.setState({ mode: o.E.DEFAULT });
    };
    toggleRecordMode = () => {
        this.state.mode === o.E.DEFAULT ? this.recordStart() : this.recordEnd();
    };
    handleComboKeys = (e, t, n) => {
        if ((n.preventDefault(), "keydown" === n.type)) {
            let e = t.map((e) => [c.zY.KEYBOARD_KEY, a()(e), c.g$.BROWSER]),
                { keyCode: i } = n;
            null ==
                e.find((e) => {
                    let [, t] = e;
                    return i === t;
                }) && e.push([c.zY.KEYBOARD_KEY, i, c.g$.BROWSER]),
                this.handleComboChange(e);
        }
    };
    handleGSChange = (e) => {
        if (!1 === this._mounted) return;
        let t = [...e.combo];
        this.handleComboChange(t);
    };
    handleNativeChange = (e) => {
        e.length > 0 && this.handleComboChange(e), this.recordEnd();
    };
    render() {
        let e,
            t,
            { codes: n, mode: s } = this.state,
            { disabled: l } = this.props;
        return (
            g
                ? ((t = u.Ay.getDiscordUtils().inputCaptureRegisterElement), (e = this.handleNativeChange))
                : d.isPlatformEmbedded || (e = this.handleComboKeys),
            (0, i.jsx)(o.A, {
                disabled: l,
                value: n,
                mode: s,
                onClick: this.toggleRecordMode,
                onChange: e,
                registerNativeRecorder: t,
                disableOnClickWhileRecording: g,
            })
        );
    }
}
let _ = m;
