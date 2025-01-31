n.d(t, { D: () => c });
var i = n(192379),
    r = n(995295),
    a = n(978008),
    s = n(427753),
    o = n.n(s),
    l = n(632590),
    u = [],
    c = function (e, t, n) {
        void 0 === n && (n = {});
        var s = i.useRef(null),
            c = {
                onFirstUpdate: n.onFirstUpdate,
                placement: n.placement || 'bottom',
                strategy: n.strategy || 'absolute',
                modifiers: n.modifiers || u
            },
            d = i.useState({
                styles: {
                    popper: {
                        position: c.strategy,
                        left: '0',
                        top: '0'
                    },
                    arrow: { position: 'absolute' }
                },
                attributes: {}
            }),
            f = d[0],
            _ = d[1],
            p = i.useMemo(function () {
                return {
                    name: 'updateState',
                    enabled: !0,
                    phase: 'write',
                    fn: function (e) {
                        var t = e.state,
                            n = Object.keys(t.elements);
                        r.flushSync(function () {
                            _({
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
            h = i.useMemo(
                function () {
                    var e = {
                        onFirstUpdate: c.onFirstUpdate,
                        placement: c.placement,
                        strategy: c.strategy,
                        modifiers: [].concat(c.modifiers, [
                            p,
                            {
                                name: 'applyStyles',
                                enabled: !1
                            }
                        ])
                    };
                    return o()(s.current, e) ? s.current || e : ((s.current = e), e);
                },
                [c.onFirstUpdate, c.placement, c.strategy, c.modifiers, p]
            ),
            m = i.useRef();
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
                        var i = (n.createPopper || a.fi)(e, t, h);
                        return (
                            (m.current = i),
                            function () {
                                i.destroy(), (m.current = null);
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
