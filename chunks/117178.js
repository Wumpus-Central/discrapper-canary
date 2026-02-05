n.d(t, { A: () => A }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(695497),
    a = n.n(r),
    l = n(313869),
    o = n(451802),
    c = n(723702),
    d = n(837921),
    u = n(650583);
let _ = c.isPlatformEmbedded && null != d.Ay.getDiscordUtils().inputCaptureRegisterElement;
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
        c.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), (this.gs = null));
    }
    handleComboChange(e) {
        let { mode: t } = this.state,
            { onChange: n } = this.props;
        t === o.E.RECORDING && (null != n && n(e), this.setState({ codes: e }));
    }
    recordStart = () => {
        c.isPlatformEmbedded && !_ && ((this.gs = new l.A()), this.gs.on("change", this.handleGSChange)),
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
            let e = t.map((e) => [u.zY.KEYBOARD_KEY, a()(e), u.g$.BROWSER]),
                { keyCode: i } = n;
            null ==
                e.find((e) => {
                    let [, t] = e;
                    return i === t;
                }) && e.push([u.zY.KEYBOARD_KEY, i, u.g$.BROWSER]),
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
            { disabled: r } = this.props;
        return (
            _
                ? ((t = d.Ay.getDiscordUtils().inputCaptureRegisterElement), (e = this.handleNativeChange))
                : c.isPlatformEmbedded || (e = this.handleComboKeys),
            (0, i.jsx)(o.A, {
                disabled: r,
                value: n,
                mode: s,
                onClick: this.toggleRecordMode,
                onChange: e,
                registerNativeRecorder: t,
                disableOnClickWhileRecording: _,
            })
        );
    }
}
let A = m;
