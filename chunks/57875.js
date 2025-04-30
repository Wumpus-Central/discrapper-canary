r.d(t, { Z: () => a }), r(388685);
var n = r(200651),
    s = r(192379),
    i = r(748780),
    o = r(481060),
    l = r(502254);
class a extends s.Component {
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
