"use strict";
n.d(t, { default: () => I });
var r = n(627968),
    i = n(64700),
    a = n(110259),
    l = n(892547),
    s = n(834730),
    o = n(252452),
    c = n(139286),
    u = n(200921),
    d = n(507553),
    _ = n(324593),
    h = n(883662),
    p = n(961350),
    f = n(287809),
    m = n(152056),
    g = n(780964),
    E = n(921854),
    v = n(7564),
    y = n(175665),
    A = n(178241),
    S = n(779733),
    b = n(985018),
    x = n(298859);
let N = new Set([g.X.PROFILE_PANEL, g.X.SUBSCRIPTIONS_PANEL, g.X.FAMILY_CENTER_PANEL, g.X.POGGERMODE_PANEL]),
    C = new Map([
        [g.X.CONNECTIONS_PANEL, a.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [g.X.SESSIONS_PANEL, a.ImpressionNames.USER_SETTINGS_SESSIONS],
    ]);
function I(e) {
    let { target: t, ...n } = e,
        l = m.A.useField("query"),
        s = i.useCallback(() => {
            m.A.setState({ query: "" }), _.A.terminate();
        }, []),
        [b, x] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == f.default.getCurrentUser() && (x(!0), (0, S.default)());
        };
        return (
            p.default.addChangeListener(e),
            () => {
                p.default.removeChangeListener(e), y.A.resetState(), d.A.resetState(), o.A.close(), (0, u.ZQ)();
            }
        );
    }, []),
    b)
        ? null
        : (0, r.jsx)(h.A, {
              partialRoot: E.D,
              searchBar: T,
              emptyState: j,
              sidebarFooter: v.A,
              onViewChange: (e) => {
                  N.has(e) || (0, A._)(e);
                  let t = C.get(e);
                  null != t &&
                      (0, c.x)({
                          type: a.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: y.A.getField("source") },
                      }),
                      y.A.setState({ source: void 0 });
              },
              target: t,
              defaultTarget: g.X.ACCOUNT_PANEL,
              searchQuery: l,
              clearSearchQuery: s,
              ...n,
          });
}
function T() {
    let e = m.A.useField("query"),
        t = i.useCallback((e) => {
            m.A.setState({ query: e }), _.A.maybeTrackQueryEntered();
        }, []),
        n = i.useCallback(() => {
            _.A.isSessionActive() || _.A.initialize();
        }, []),
        a = i.useCallback(() => {
            0 === m.A.getField("query").trim().length && _.A.terminate();
        }, []),
        s = i.useCallback(() => {
            m.A.setState({ query: "" }), _.A.terminate();
        }, []);
    return (
        i.useEffect(
            () => () => {
                m.A.resetState(), _.A.terminate();
            },
            [],
        ),
        (0, r.jsx)("div", {
            className: x.P,
            children: (0, r.jsx)(l.I, { size: "md", query: e, onFocus: n, onBlur: a, onChange: t, onClear: s }),
        })
    );
}
function j() {
    return (0, r.jsxs)("div", {
        className: x.t,
        children: [
            (0, r.jsx)(s.E, { variant: "text-sm/semibold", color: "text-strong", children: b.intl.string(b.t.zihbmv) }),
            (0, r.jsx)(s.E, { variant: "text-sm/normal", color: "text-subtle", children: b.intl.string(b.t.XclvsB) }),
        ],
    });
}
