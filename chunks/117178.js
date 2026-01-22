n.d(t, { A: () => h }), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(695497),
    s = n.n(a),
    o = n(313869),
    l = n(451802),
    c = n(723702),
    u = n(837921),
    d = n(650583);
function f(e, t, n) {
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
let p = c.isPlatformEmbedded && null != u.Ay.getDiscordUtils().inputCaptureRegisterElement;
class _ extends i.PureComponent {
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
        t === l.E.RECORDING && (null != n && n(e), this.setState({ codes: e }));
    }
    render() {
        let e,
            t,
            { codes: n, mode: i } = this.state,
            { disabled: a } = this.props;
        return (
            p
                ? ((t = u.Ay.getDiscordUtils().inputCaptureRegisterElement), (e = this.handleNativeChange))
                : c.isPlatformEmbedded || (e = this.handleComboKeys),
            (0, r.jsx)(l.A, {
                disabled: a,
                value: n,
                mode: i,
                onClick: this.toggleRecordMode,
                onChange: e,
                registerNativeRecorder: t,
                disableOnClickWhileRecording: p,
            })
        );
    }
    constructor(e) {
        super(e),
            f(this, "_input", void 0),
            f(this, "gs", void 0),
            f(this, "_mounted", !1),
            f(this, "recordStart", () => {
                c.isPlatformEmbedded && !p && ((this.gs = new o.A()), this.gs.on("change", this.handleGSChange)),
                    this.setState({ mode: l.E.RECORDING });
            }),
            f(this, "recordEnd", () => {
                this.cleanUp(), this.setState({ mode: l.E.DEFAULT });
            }),
            f(this, "toggleRecordMode", () => {
                this.state.mode === l.E.DEFAULT ? this.recordStart() : this.recordEnd();
            }),
            f(this, "handleComboKeys", (e, t, n) => {
                if ((n.preventDefault(), "keydown" === n.type)) {
                    let e = t.map((e) => [d.zY.KEYBOARD_KEY, s()(e), d.g$.BROWSER]),
                        { keyCode: r } = n;
                    null ==
                        e.find((e) => {
                            let [, t] = e;
                            return r === t;
                        }) && e.push([d.zY.KEYBOARD_KEY, r, d.g$.BROWSER]),
                        this.handleComboChange(e);
                }
            }),
            f(this, "handleGSChange", (e) => {
                if (!1 === this._mounted) return;
                let t = [...e.combo];
                this.handleComboChange(t);
            }),
            f(this, "handleNativeChange", (e) => {
                e.length > 0 && this.handleComboChange(e), this.recordEnd();
            });
        const { defaultValue: t } = e;
        this.state = {
            codes: t,
            mode: l.E.DEFAULT,
        };
    }
}
let h = _;
