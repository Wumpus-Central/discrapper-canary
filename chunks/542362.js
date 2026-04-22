"use strict";
n.d(t, { E: () => d });
var r = n(64700),
    i = n(340287),
    s = n(669507),
    a = n(412700),
    o = n.n(a),
    l = n(418034),
    u = [],
    d = function (e, t, n) {
        void 0 === n && (n = {});
        var a = r.useRef(null),
            d = {
                onFirstUpdate: n.onFirstUpdate,
                placement: n.placement || "bottom",
                strategy: n.strategy || "absolute",
                modifiers: n.modifiers || u,
            },
            c = r.useState({
                styles: { popper: { position: d.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } },
                attributes: {},
            }),
            _ = c[0],
            f = c[1],
            E = r.useMemo(function () {
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
                        onFirstUpdate: d.onFirstUpdate,
                        placement: d.placement,
                        strategy: d.strategy,
                        modifiers: [].concat(d.modifiers, [E, { name: "applyStyles", enabled: !1 }]),
                    };
                    return o()(a.current, e) ? a.current || e : ((a.current = e), e);
                },
                [d.onFirstUpdate, d.placement, d.strategy, d.modifiers, E],
            ),
            p = r.useRef();
        return (
            (0, l.Es)(
                function () {
                    p.current && p.current.setOptions(h);
                },
                [h],
            ),
            (0, l.Es)(
                function () {
                    if (null != e && null != t) {
                        var r = (n.createPopper || s.n)(e, t, h);
                        return (
                            (p.current = r),
                            function () {
                                r.destroy(), (p.current = null);
                            }
                        );
                    }
                },
                [e, t, n.createPopper],
            ),
            {
                state: p.current ? p.current.state : null,
                styles: _.styles,
                attributes: _.attributes,
                update: p.current ? p.current.update : null,
                forceUpdate: p.current ? p.current.forceUpdate : null,
            }
        );
    };
