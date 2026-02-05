i.d(n, { default: () => g });
var l = i(627968),
    e = i(64700),
    a = i(732955),
    s = i(397927),
    r = i(514041),
    d = i(835806),
    o = i(104890),
    u = i(985018);
class p extends e.PureComponent {
    state = { problem: null };
    handleChanged = (t) => {
        this.setState({ problem: t ?? null });
    };
    handleSubmit = () => {
        let { stream: t, streamApplication: n, analyticsData: e, onClose: a } = this.props,
            { problem: r } = this.state;
        (0, d.A)({ problem: r, stream: t, feedback: "", streamApplication: n, analyticsData: e, location: "Stream" }),
            a(),
            (0, s.mMO)(async () => {
                let { default: t } = await i.e("37836").then(i.bind(i, 845671));
                return (n) => (0, l.jsx)(t, { body: u.intl.string(u.t.mMTVnv), ...n });
            });
    };
    render() {
        let { isStreamer: t, transitionState: n, onClose: i } = this.props,
            { problem: e } = this.state;
        return (0, l.jsxs)(a.aFV, {
            title: u.intl.string(u.t.qnJ9W3),
            subtitle: u.intl.string(u.t["7vw0h+"]),
            actions: [
                { text: u.intl.string(u.t["ETE/oC"]), variant: "secondary", onClick: i },
                {
                    text: u.intl.string(u.t.E48BIc),
                    variant: "primary",
                    onClick: this.handleSubmit,
                    disabled: null == e,
                },
            ],
            onClose: i,
            transitionState: n,
            children: [
                (0, l.jsx)(o.A, {}),
                (0, l.jsx)(s.l6P, {
                    selectionMode: "single",
                    label: u.intl.string(u.t["6Y1t5P"]),
                    placeholder: u.intl.string(u.t.U0kGk6),
                    options: (0, r.A)({ isStreamer: t, isEndStream: !1 }),
                    onSelectionChange: this.handleChanged,
                    value: e,
                    maxOptionsVisible: 4,
                }),
            ],
        });
    }
}
let g = p;
