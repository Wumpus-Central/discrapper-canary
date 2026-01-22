n.d(e, { default: () => p }), n(896048);
var i = n(627968),
    l = n(64700),
    r = n(732955),
    a = n(397927),
    s = n(514041),
    o = n(835806),
    u = n(104890),
    c = n(985018);
function d(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
class b extends l.PureComponent {
    render() {
        let { isStreamer: t, transitionState: e, onClose: n } = this.props,
            { problem: l } = this.state;
        return (0, i.jsxs)(r.aFV, {
            title: c.intl.string(c.t.qnJ9W3),
            subtitle: c.intl.string(c.t["7vw0h+"]),
            actions: [
                {
                    text: c.intl.string(c.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: n,
                },
                {
                    text: c.intl.string(c.t.E48BIc),
                    variant: "primary",
                    onClick: this.handleSubmit,
                    disabled: null == l,
                },
            ],
            onClose: n,
            transitionState: e,
            children: [
                (0, i.jsx)(u.A, {}),
                (0, i.jsx)(a.l6P, {
                    selectionMode: "single",
                    label: c.intl.string(c.t["6Y1t5P"]),
                    placeholder: c.intl.string(c.t.U0kGk6),
                    options: (0, s.A)({
                        isStreamer: t,
                        isEndStream: !1,
                    }),
                    onSelectionChange: this.handleChanged,
                    value: l,
                    maxOptionsVisible: 4,
                }),
            ],
        });
    }
    constructor(...t) {
        super(...t),
            d(this, "state", { problem: null }),
            d(this, "handleChanged", (t) => {
                this.setState({ problem: null != t ? t : null });
            }),
            d(this, "handleSubmit", () => {
                let { stream: t, streamApplication: e, analyticsData: l, onClose: r } = this.props,
                    { problem: s } = this.state;
                (0, o.A)({
                    problem: s,
                    stream: t,
                    feedback: "",
                    streamApplication: e,
                    analyticsData: l,
                    location: "Stream",
                }),
                    r(),
                    (0, a.mMO)(async () => {
                        let { default: t } = await n.e("37836").then(n.bind(n, 845671));
                        return (e) =>
                            (0, i.jsx)(
                                t,
                                (function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                }),
                                            )),
                                            i.forEach(function (e) {
                                                d(t, e, n[e]);
                                            });
                                    }
                                    return t;
                                })({ body: c.intl.string(c.t.mMTVnv) }, e),
                            );
                    });
            });
    }
}
let p = b;
