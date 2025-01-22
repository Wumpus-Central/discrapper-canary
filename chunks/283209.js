r.d(n, {
    D: function () {
        return d;
    }
});
var i = r(192379),
    a = r(995295),
    o = r(978008),
    s = r(427753),
    l = r.n(s),
    u = r(632590),
    c = [],
    d = function (e, n, r) {
        void 0 === r && (r = {});
        var s = i.useRef(null),
            d = {
                onFirstUpdate: r.onFirstUpdate,
                placement: r.placement || 'bottom',
                strategy: r.strategy || 'absolute',
                modifiers: r.modifiers || c
            },
            f = i.useState({
                styles: {
                    popper: {
                        position: d.strategy,
                        left: '0',
                        top: '0'
                    },
                    arrow: { position: 'absolute' }
                },
                attributes: {}
            }),
            p = f[0],
            h = f[1],
            _ = i.useMemo(function () {
                return {
                    name: 'updateState',
                    enabled: !0,
                    phase: 'write',
                    fn: function (e) {
                        var n = e.state,
                            r = Object.keys(n.elements);
                        a.flushSync(function () {
                            h({
                                styles: (0, u.sq)(
                                    r.map(function (e) {
                                        return [e, n.styles[e] || {}];
                                    })
                                ),
                                attributes: (0, u.sq)(
                                    r.map(function (e) {
                                        return [e, n.attributes[e]];
                                    })
                                )
                            });
                        });
                    },
                    requires: ['computeStyles']
                };
            }, []),
            m = i.useMemo(
                function () {
                    var e = {
                        onFirstUpdate: d.onFirstUpdate,
                        placement: d.placement,
                        strategy: d.strategy,
                        modifiers: [].concat(d.modifiers, [
                            _,
                            {
                                name: 'applyStyles',
                                enabled: !1
                            }
                        ])
                    };
                    return l()(s.current, e) ? s.current || e : ((s.current = e), e);
                },
                [d.onFirstUpdate, d.placement, d.strategy, d.modifiers, _]
            ),
            g = i.useRef();
        return (
            (0, u.LI)(
                function () {
                    g.current && g.current.setOptions(m);
                },
                [m]
            ),
            (0, u.LI)(
                function () {
                    if (null != e && null != n) {
                        var i = (r.createPopper || o.fi)(e, n, m);
                        return (
                            (g.current = i),
                            function () {
                                i.destroy(), (g.current = null);
                            }
                        );
                    }
                },
                [e, n, r.createPopper]
            ),
            {
                state: g.current ? g.current.state : null,
                styles: p.styles,
                attributes: p.attributes,
                update: g.current ? g.current.update : null,
                forceUpdate: g.current ? g.current.forceUpdate : null
            }
        );
    };
