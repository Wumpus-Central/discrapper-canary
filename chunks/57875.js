n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var s = n(200651),
    r = n(192379),
    i = n(748780),
    o = n(481060),
    a = n(632154);
class l extends r.Component {
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
        return (0, s.jsx)(i.Z.div, {
            className: a.wrapper,
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
            children: (0, s.jsx)(o.ModalContent, {
                className: a.contentWrapper,
                children: this.props.children
            })
        });
    }
    constructor(...e) {
        var t, n, s;
        super(...e),
            (t = this),
            (n = 'state'),
            (s = {
                isExiting: !1,
                offset: new i.Z.Value(0),
                selectedValue: null
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = s);
    }
}
