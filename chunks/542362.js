"use strict";
n.d(t, { E: () => c });
var r = n(64700),
    i = n(340287),
    s = n(669507),
    a = n(412700),
    o = n.n(a),
    l = n(418034),
    u = [],
    c = function (e, t, n) {
        void 0 === n && (n = {});
        var a = r.useRef(null),
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
                    return o()(a.current, e) ? a.current || e : ((a.current = e), e);
                },
                [c.onFirstUpdate, c.placement, c.strategy, c.modifiers, p],
            ),
            E = r.useRef();
        return (
            (0, l.Es)(
                function () {
                    E.current && E.current.setOptions(h);
                },
                [h],
            ),
            (0, l.Es)(
                function () {
                    if (null != e && null != t) {
                        var r = (n.createPopper || s.n)(e, t, h);
                        return (
                            (E.current = r),
                            function () {
                                r.destroy(), (E.current = null);
                            }
                        );
                    }
                },
                [e, t, n.createPopper],
            ),
            {
                state: E.current ? E.current.state : null,
                styles: _.styles,
                attributes: _.attributes,
                update: E.current ? E.current.update : null,
                forceUpdate: E.current ? E.current.forceUpdate : null,
            }
        );
    };
