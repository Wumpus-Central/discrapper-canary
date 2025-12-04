e.d(n, { default: () => f }), e(388685);
var l = e(54381),
    r = e(473749),
    i = e(199849),
    a = e(159691),
    s = e(481060),
    o = e(538211),
    u = e(698066),
    c = e(648159),
    b = e(388032);
function d(t, n, e) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[n] = e),
        t
    );
}
class g extends r.PureComponent {
    render() {
        let { isStreamer: t, transitionState: n, onClose: e } = this.props,
            { problem: r } = this.state;
        return (0, l.jsxs)(a.u_l, {
            title: b.intl.string(b.t.qnJ9W3),
            subtitle: b.intl.string(b.t["7vw0h+"]),
            actions: [
                {
                    text: b.intl.string(b.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: e,
                },
                {
                    text: b.intl.string(b.t.E48BIc),
                    variant: "primary",
                    onClick: this.handleSubmit,
                    disabled: null == r,
                },
            ],
            onClose: e,
            transitionState: n,
            children: [
                (0, l.jsx)(c.Z, {}),
                (0, l.jsx)(i.y6, {
                    label: b.intl.string(b.t["6Y1t5P"]),
                    placeholder: b.intl.string(b.t.U0kGk6),
                    options: (0, o.Z)({
                        isStreamer: t,
                        isEndStream: !1,
                    }),
                    onChange: this.handleChanged,
                    value: r,
                    maxVisibleItems: 4,
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
                let { stream: t, streamApplication: n, analyticsData: r, onClose: i } = this.props,
                    { problem: a } = this.state;
                (0, u.Z)({
                    problem: a,
                    stream: t,
                    feedback: "",
                    streamApplication: n,
                    analyticsData: r,
                    location: "Stream",
                }),
                    i(),
                    (0, s.ZDy)(async () => {
                        let { default: t } = await e.e("14466").then(e.bind(e, 729328));
                        return (n) =>
                            (0, l.jsx)(
                                t,
                                (function (t) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var e = null != arguments[n] ? arguments[n] : {},
                                            l = Object.keys(e);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(e).filter(function (t) {
                                                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (n) {
                                                d(t, n, e[n]);
                                            });
                                    }
                                    return t;
                                })({ body: b.intl.string(b.t.mMTVnv) }, n),
                            );
                    });
            });
    }
}
let f = g;
