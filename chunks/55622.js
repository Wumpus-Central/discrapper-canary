"use strict";
n.d(t, { default: () => I });
var r = n(627968),
    i = n(64700),
    a = n(110259),
    s = n(892547),
    l = n(834730),
    o = n(252452),
    c = n(139286),
    u = n(200921),
    d = n(507553),
    _ = n(324593),
    f = n(883662),
    h = n(961350),
    p = n(287809),
    m = n(152056),
    g = n(780964),
    b = n(921854),
    v = n(7564),
    E = n(175665),
    y = n(178241),
    A = n(779733),
    x = n(985018),
    S = n(298859);
let C = new Set([g.X.PROFILE_PANEL, g.X.SUBSCRIPTIONS_PANEL, g.X.FAMILY_CENTER_PANEL, g.X.POGGERMODE_PANEL]),
    N = new Map([
        [g.X.CONNECTIONS_PANEL, a.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [g.X.SESSIONS_PANEL, a.ImpressionNames.USER_SETTINGS_SESSIONS],
    ]);
function I(e) {
    let { target: t, ...n } = e,
        s = m.A.useField("query"),
        l = i.useCallback(() => {
            m.A.setState({ query: "" }), _.A.terminate();
        }, []),
        [x, S] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == p.default.getCurrentUser() && (S(!0), (0, A.default)());
        };
        return (
            h.default.addChangeListener(e),
            () => {
                h.default.removeChangeListener(e), E.A.resetState(), d.A.resetState(), o.A.close(), (0, u.ZQ)();
            }
        );
    }, []),
    x)
        ? null
        : (0, r.jsx)(f.A, {
              partialRoot: b.D,
              searchBar: T,
              emptyState: j,
              sidebarFooter: v.A,
              onViewChange: (e) => {
                  C.has(e) || (0, y._)(e);
                  let t = N.get(e);
                  null != t &&
                      (0, c.x)({
                          type: a.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: E.A.getField("source") },
                      }),
                      E.A.setState({ source: void 0 });
              },
              target: t,
              defaultTarget: g.X.ACCOUNT_PANEL,
              searchQuery: s,
              clearSearchQuery: l,
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
        l = i.useCallback(() => {
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
            className: S.P,
            children: (0, r.jsx)(s.I, { size: "md", query: e, onFocus: n, onBlur: a, onChange: t, onClear: l }),
        })
    );
}
function j() {
    return (0, r.jsxs)("div", {
        className: S.t,
        children: [
            (0, r.jsx)(l.E, { variant: "text-sm/semibold", color: "text-strong", children: x.intl.string(x.t.zihbmv) }),
            (0, r.jsx)(l.E, { variant: "text-sm/normal", color: "text-subtle", children: x.intl.string(x.t.XclvsB) }),
        ],
    });
}
