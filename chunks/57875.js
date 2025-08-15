n.d(t, { Z: () => l }), n(388685);
var r = n(951288),
    s = n(647438),
    i = n(748780),
    o = n(481060),
    a = n(703301);
class l extends s.Component {
    componentWillEnter(e) {
        let { offset: t } = this.state;
        t.setValue(1),
            i.Z.spring(t, {
                toValue: 0,
                duration: 75,
            }).start(e);
    }
    componentWillLeave(e) {
        let { offset: t } = this.state;
        t.setValue(0),
            this.setState({ isExiting: !0 }, () => {
                i.Z.spring(t, {
                    toValue: -1,
                    duration: 75,
                }).start(e);
            });
    }
    render() {
        let { isExiting: e, offset: t } = this.state;
        return (0, r.jsx)(i.Z.div, {
            className: a.wrapper,
            style: {
                left: 0,
                position: e ? "absolute" : "relative",
                top: 0,
                transform: [
                    {
                        translateX: t.interpolate({
                            inputRange: [-1, 1],
                            outputRange: ["-100%", "100%"],
                        }),
                    },
                ],
            },
            children: (0, r.jsx)(o.hzk, {
                className: a.contentWrapper,
                children: this.props.children,
            }),
        });
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "state", {
                isExiting: !1,
                offset: new i.Z.Value(0),
                selectedValue: null,
            });
    }
}
