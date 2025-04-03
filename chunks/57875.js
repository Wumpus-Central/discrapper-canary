r.d(t, { Z: () => l }), r(47120);
var s = r(200651),
    n = r(192379),
    i = r(748780),
    o = r(481060),
    a = r(502254);
class l extends n.Component {
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
            children: (0, s.jsx)(o.hzk, {
                className: a.contentWrapper,
                children: this.props.children
            })
        });
    }
    constructor(...e) {
        var t, r;
        super(...e),
            (t = 'state'),
            (r = {
                isExiting: !1,
                offset: new i.Z.Value(0),
                selectedValue: null
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = r);
    }
}
