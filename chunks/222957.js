n.d(t, { D: () => u });
var r = n(473749),
    i = n(24156),
    a = n(978008),
    o = n(427753),
    s = n.n(o),
    l = n(658346),
    c = [],
    u = function (e, t, n) {
        void 0 === n && (n = {});
        var o = r.useRef(null),
            u = {
                onFirstUpdate: n.onFirstUpdate,
                placement: n.placement || "bottom",
                strategy: n.strategy || "absolute",
                modifiers: n.modifiers || c,
            },
            d = r.useState({
                styles: {
                    popper: {
                        position: u.strategy,
                        left: "0",
                        top: "0",
                    },
                    arrow: { position: "absolute" },
                },
                attributes: {},
            }),
            f = d[0],
            p = d[1],
            _ = r.useMemo(function () {
                return {
                    name: "updateState",
                    enabled: !0,
                    phase: "write",
                    fn: function (e) {
                        var t = e.state,
                            n = Object.keys(t.elements);
                        i.flushSync(function () {
                            p({
                                styles: (0, l.sq)(
                                    n.map(function (e) {
                                        return [e, t.styles[e] || {}];
                                    }),
                                ),
                                attributes: (0, l.sq)(
                                    n.map(function (e) {
                                        return [e, t.attributes[e]];
                                    }),
                                ),
                            });
                        });
                    },
                    requires: ["computeStyles"],
                };
            }, []),
            m = r.useMemo(
                function () {
                    var e = {
                        onFirstUpdate: u.onFirstUpdate,
                        placement: u.placement,
                        strategy: u.strategy,
                        modifiers: [].concat(u.modifiers, [
                            _,
                            {
                                name: "applyStyles",
                                enabled: !1,
                            },
                        ]),
                    };
                    return s()(o.current, e) ? o.current || e : ((o.current = e), e);
                },
                [u.onFirstUpdate, u.placement, u.strategy, u.modifiers, _],
            ),
            h = r.useRef();
        return (
            (0, l.LI)(
                function () {
                    h.current && h.current.setOptions(m);
                },
                [m],
            ),
            (0, l.LI)(
                function () {
                    if (null != e && null != t) {
                        var r = n.createPopper || a.fi,
                            i = r(e, t, m);
                        return (
                            (h.current = i),
                            function () {
                                i.destroy(), (h.current = null);
                            }
                        );
                    }
                },
                [e, t, n.createPopper],
            ),
            {
                state: h.current ? h.current.state : null,
                styles: f.styles,
                attributes: f.attributes,
                update: h.current ? h.current.update : null,
                forceUpdate: h.current ? h.current.forceUpdate : null,
            }
        );
    };
