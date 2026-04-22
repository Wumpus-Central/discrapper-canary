i.d(n, { default: () => c });
var l = i(627968),
    e = i(64700),
    a = i(189213),
    s = i(192308),
    r = i(691885),
    d = i(514041),
    o = i(835806),
    u = i(104890),
    p = i(985018);
class g extends e.PureComponent {
    state = { problem: null };
    handleChanged = (t) => {
        this.setState({ problem: t ?? null });
    };
    handleSubmit = () => {
        let { stream: t, streamApplication: n, analyticsData: e, onClose: a } = this.props,
            { problem: r } = this.state;
        (0, o.A)({ problem: r, stream: t, feedback: "", streamApplication: n, analyticsData: e, location: "Stream" }),
            a(),
            (0, s.openModalLazy)(async () => {
                let { default: t } = await i.e("37836").then(i.bind(i, 845671));
                return (n) => (0, l.jsx)(t, { body: p.intl.string(p.t.mMTVnv), ...n });
            });
    };
    render() {
        let { isStreamer: t, transitionState: n, onClose: i } = this.props,
            { problem: e } = this.state;
        return (0, l.jsxs)(a.Modal, {
            title: p.intl.string(p.t.qnJ9W3),
            subtitle: p.intl.string(p.t["7vw0h+"]),
            actions: [
                { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: i },
                {
                    text: p.intl.string(p.t.E48BIc),
                    variant: "primary",
                    onClick: this.handleSubmit,
                    disabled: null == e,
                },
            ],
            onClose: i,
            transitionState: n,
            children: [
                (0, l.jsx)(u.A, {}),
                (0, l.jsx)(r.l, {
                    selectionMode: "single",
                    label: p.intl.string(p.t["6Y1t5P"]),
                    placeholder: p.intl.string(p.t.U0kGk6),
                    options: (0, d.A)({ isStreamer: t, isEndStream: !1 }),
                    onSelectionChange: this.handleChanged,
                    value: e,
                    maxOptionsVisible: 4,
                }),
            ],
        });
    }
}
let c = g;
