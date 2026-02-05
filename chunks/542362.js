"use strict";
n.d(t, { E: () => c });
var r = n(64700),
    i = n(340287),
    a = n(669507),
    s = n(412700),
    o = n.n(s),
    l = n(418034),
    u = [],
    c = function (e, t, n) {
        void 0 === n && (n = {});
        var s = r.useRef(null),
            c = {
                onFirstUpdate: n.onFirstUpdate,
                placement: n.placement || "bottom",
                strategy: n.strategy || "absolute",
                modifiers: n.modifiers || u,
            },
            d = r.useState({
                styles: { popper: { position: c.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } },
                attributes: {},
            }),
            _ = d[0],
            f = d[1],
            p = r.useMemo(function () {
                return {
                    name: "updateState",
                    enabled: !0,
                    phase: "write",
                    fn: function (e) {
                        var t = e.state,
                            n = Object.keys(t.elements);
                        i.flushSync(function () {
                            f({
                                styles: (0, l.PW)(
                                    n.map(function (e) {
                                        return [e, t.styles[e] || {}];
                                    }),
                                ),
                                attributes: (0, l.PW)(
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
            h = r.useMemo(
                function () {
                    var e = {
                        onFirstUpdate: c.onFirstUpdate,
                        placement: c.placement,
                        strategy: c.strategy,
                        modifiers: [].concat(c.modifiers, [p, { name: "applyStyles", enabled: !1 }]),
                    };
                    return o()(s.current, e) ? s.current || e : ((s.current = e), e);
                },
                [c.onFirstUpdate, c.placement, c.strategy, c.modifiers, p],
            ),
            m = r.useRef();
        return (
            (0, l.Es)(
                function () {
                    m.current && m.current.setOptions(h);
                },
                [h],
            ),
            (0, l.Es)(
                function () {
                    if (null != e && null != t) {
                        var r = n.createPopper || a.n,
                            i = r(e, t, h);
                        return (
                            (m.current = i),
                            function () {
                                i.destroy(), (m.current = null);
                            }
                        );
                    }
                },
                [e, t, n.createPopper],
            ),
            {
                state: m.current ? m.current.state : null,
                styles: _.styles,
                attributes: _.attributes,
                update: m.current ? m.current.update : null,
                forceUpdate: m.current ? m.current.forceUpdate : null,
            }
        );
    };
