e.d(n, { default: () => g }), e(388685);
var l = e(951288),
    r = e(647438),
    i = e(159691),
    a = e(481060),
    s = e(538211),
    u = e(698066),
    o = e(648159),
    c = e(388032);
function b(t, n, e) {
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
class d extends r.PureComponent {
    render() {
        let { isStreamer: t, transitionState: n, onClose: e } = this.props,
            { problem: r } = this.state;
        return (0, l.jsxs)(i.u_l, {
            title: c.intl.string(c.t.qnJ9W1),
            subtitle: c.intl.string(c.t["7vw0h4"]),
            actions: [
                {
                    text: c.intl.string(c.t["ETE/oK"]),
                    variant: "secondary",
                    onClick: e,
                },
                {
                    text: c.intl.string(c.t.E48BIS),
                    variant: "primary",
                    onClick: this.handleSubmit,
                    disabled: null == r,
                },
            ],
            onClose: e,
            transitionState: n,
            children: [
                (0, l.jsx)(o.Z, {}),
                (0, l.jsx)(a.q4e, {
                    label: c.intl.string(c.t["6Y1t5O"]),
                    placeholder: c.intl.string(c.t.U0kGk5),
                    options: (0, s.Z)({
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
            b(this, "state", { problem: null }),
            b(this, "handleChanged", (t) => {
                this.setState({ problem: null != t ? t : null });
            }),
            b(this, "handleSubmit", () => {
                let { stream: t, streamApplication: n, analyticsData: r, onClose: i } = this.props,
                    { problem: s } = this.state;
                (0, u.Z)({
                    problem: s,
                    stream: t,
                    feedback: "",
                    streamApplication: n,
                    analyticsData: r,
                    location: "Stream",
                }),
                    i(),
                    (0, a.ZDy)(async () => {
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
                                                b(t, n, e[n]);
                                            });
                                    }
                                    return t;
                                })({ body: c.intl.string(c.t.mMTVnp) }, n),
                            );
                    });
            });
    }
}
let g = d;
