s.d(t, { Z: () => a }), s(47120);
var n = s(200651),
    r = s(192379),
    i = s(748780),
    o = s(481060),
    l = s(52279);
class a extends r.Component {
    componentWillEnter(e) {
        let { offset: t } = this.state;
        t.setValue(1),
            i.Z.spring(t, {
                toValue: 0,
                duration: 75
            }).start(e);
    }
    componentWillLeave(e) {
        let { offset: t } = this.state;
        t.setValue(0),
            this.setState({ isExiting: !0 }, () => {
                i.Z.spring(t, {
                    toValue: -1,
                    duration: 75
                }).start(e);
            });
    }
    render() {
        let { isExiting: e, offset: t } = this.state;
        return (0, n.jsx)(i.Z.div, {
            className: l.wrapper,
            style: {
                left: 0,
                position: e ? 'absolute' : 'relative',
                top: 0,
                transform: [
                    {
                        translateX: t.interpolate({
                            inputRange: [-1, 1],
                            outputRange: ['-100%', '100%']
                        })
                    }
                ]
            },
            children: (0, n.jsx)(o.hzk, {
                className: l.contentWrapper,
                children: this.props.children
            })
        });
    }
    constructor(...e) {
        var t, s;
        super(...e),
            (t = 'state'),
            (s = {
                isExiting: !1,
                offset: new i.Z.Value(0),
                selectedValue: null
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = s);
    }
}
