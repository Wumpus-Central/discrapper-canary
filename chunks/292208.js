i.d(n, { default: () => h });
var l = i(627968),
    e = i(64700),
    a = i(189213),
    s = i(192308),
    r = i(691885),
    d = i(325278),
    o = i(985018),
    u = i(835806),
    p = i(726249),
    g = i(723702);
function c() {
    return (
        e.useEffect(() => {
            g.isPlatformEmbedded ||
                (0, p.iA)({
                    messages: [o.intl.string(o.t.KIX3cl), o.intl.string(o.t["UbO+8i"]), o.intl.string(o.t.MbySu9)],
                    interval: 600,
                    count: 20,
                    onlyWhenBlurred: !0,
                });
        }, []),
        null
    );
}
class b extends e.PureComponent {
    state = { problem: null };
    handleChanged = (t) => {
        this.setState({ problem: t ?? null });
    };
    handleSubmit = () => {
        let { stream: t, streamApplication: n, analyticsData: e, onClose: a } = this.props,
            { problem: r } = this.state;
        (0, u.A)({ problem: r, stream: t, feedback: "", streamApplication: n, analyticsData: e, location: "Stream" }),
            a(),
            (0, s.openModalLazy)(async () => {
                let { default: t } = await i.e("37836").then(i.bind(i, 845671));
                return (n) => (0, l.jsx)(t, { body: o.intl.string(o.t.mMTVnv), ...n });
            });
    };
    render() {
        let { isStreamer: t, transitionState: n, onClose: i } = this.props,
            { problem: e } = this.state;
        return (0, l.jsxs)(a.Modal, {
            title: o.intl.string(o.t.qnJ9W3),
            subtitle: o.intl.string(o.t["7vw0h+"]),
            actions: [
                { text: o.intl.string(o.t["ETE/oC"]), variant: "secondary", onClick: i },
                {
                    text: o.intl.string(o.t.E48BIc),
                    variant: "primary",
                    onClick: this.handleSubmit,
                    disabled: null == e,
                },
            ],
            onClose: i,
            transitionState: n,
            children: [
                (0, l.jsx)(c, {}),
                (0, l.jsx)(r.l, {
                    selectionMode: "single",
                    label: o.intl.string(o.t["6Y1t5P"]),
                    placeholder: o.intl.string(o.t.U0kGk6),
                    options: (function (t) {
                        let { isEndStream: n } = t;
                        return [
                            {
                                id: "black-screen",
                                value: d.pj.BLACK_SCREEN,
                                label: n ? o.intl.string(o.t["0X5Zbq"]) : o.intl.string(o.t.fxiRNr),
                            },
                            {
                                id: "blurry",
                                value: d.pj.BLURRY,
                                label: n ? o.intl.string(o.t.VVPQyy) : o.intl.string(o.t.E8jTMN),
                            },
                            {
                                id: "lagging",
                                value: d.pj.LAGGING,
                                label: n ? o.intl.string(o.t.ObEHd4) : o.intl.string(o.t.VoSJEQ),
                            },
                            {
                                id: "out-of-sync",
                                value: d.pj.OUT_OF_SYNC,
                                label: n ? o.intl.string(o.t.mYmwD3) : o.intl.string(o.t["+NluQm"]),
                            },
                            {
                                id: "audio-missing",
                                value: d.pj.AUDIO_MISSING,
                                label: n ? o.intl.string(o.t["Xwv41+"]) : o.intl.string(o.t.G2egzT),
                            },
                            {
                                id: "audio-poor",
                                value: d.pj.AUDIO_POOR,
                                label: n ? o.intl.string(o.t["fHey+d"]) : o.intl.string(o.t.aHOfIo),
                            },
                            { id: "stream-stopped", value: d.pj.STREAM_STOPPED, label: o.intl.string(o.t.uEoqQp) },
                            { id: "vibes-off", value: d.pj.VIBES_OFF, label: o.intl.string(o.t["++JLL0"]) },
                            { id: "other", value: d.pj.OTHER, label: o.intl.string(o.t.emlT91) },
                        ];
                    })({ isStreamer: t, isEndStream: !1 }),
                    onSelectionChange: this.handleChanged,
                    value: e,
                    maxOptionsVisible: 4,
                }),
            ],
        });
    }
}
let h = b;
