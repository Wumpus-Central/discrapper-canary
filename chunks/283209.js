n.d(t, { D: () => u });
var r = n(192379),
    i = n(995295),
    o = n(978008),
    a = n(427753),
    s = n.n(a),
    l = n(632590),
    c = [],
    u = function (e, t, n) {
        void 0 === n && (n = {});
        var a = r.useRef(null),
            u = {
                onFirstUpdate: n.onFirstUpdate,
                placement: n.placement || 'bottom',
                strategy: n.strategy || 'absolute',
                modifiers: n.modifiers || c
            },
            d = r.useState({
                styles: {
                    popper: {
                        position: u.strategy,
                        left: '0',
                        top: '0'
                    },
                    arrow: { position: 'absolute' }
                },
                attributes: {}
            }),
            f = d[0],
            p = d[1],
            _ = r.useMemo(function () {
                return {
                    name: 'updateState',
                    enabled: !0,
                    phase: 'write',
                    fn: function (e) {
                        var t = e.state,
                            n = Object.keys(t.elements);
                        i.flushSync(function () {
                            p({
                                styles: (0, l.sq)(
                                    n.map(function (e) {
                                        return [e, t.styles[e] || {}];
                                    })
                                ),
                                attributes: (0, l.sq)(
                                    n.map(function (e) {
                                        return [e, t.attributes[e]];
                                    })
                                )
                            });
                        });
                    },
                    requires: ['computeStyles']
                };
            }, []),
            h = r.useMemo(
                function () {
                    var e = {
                        onFirstUpdate: u.onFirstUpdate,
                        placement: u.placement,
                        strategy: u.strategy,
                        modifiers: [].concat(u.modifiers, [
                            _,
                            {
                                name: 'applyStyles',
                                enabled: !1
                            }
                        ])
                    };
                    return s()(a.current, e) ? a.current || e : ((a.current = e), e);
                },
                [u.onFirstUpdate, u.placement, u.strategy, u.modifiers, _]
            ),
            m = r.useRef();
        return (
            (0, l.LI)(
                function () {
                    m.current && m.current.setOptions(h);
                },
                [h]
            ),
            (0, l.LI)(
                function () {
                    if (null != e && null != t) {
                        var r = (n.createPopper || o.fi)(e, t, h);
                        return (
                            (m.current = r),
                            function () {
                                r.destroy(), (m.current = null);
                            }
                        );
                    }
                },
                [e, t, n.createPopper]
            ),
            {
                state: m.current ? m.current.state : null,
                styles: f.styles,
                attributes: f.attributes,
                update: m.current ? m.current.update : null,
                forceUpdate: m.current ? m.current.forceUpdate : null
            }
        );
    };
