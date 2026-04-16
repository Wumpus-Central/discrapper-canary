"use strict";
n.d(t, { default: () => C });
var r = n(627968),
    i = n(64700),
    a = n(110259),
    s = n(397927),
    l = n(252452),
    o = n(139286),
    u = n(200921),
    c = n(507553),
    d = n(324593),
    h = n(883662),
    p = n(961350),
    _ = n(287809),
    m = n(152056),
    f = n(780964),
    g = n(921854),
    y = n(7564),
    v = n(175665),
    S = n(178241),
    E = n(779733),
    x = n(985018),
    A = n(298859);
let N = new Set([f.X.PROFILE_PANEL, f.X.SUBSCRIPTIONS_PANEL, f.X.FAMILY_CENTER_PANEL, f.X.POGGERMODE_PANEL]),
    b = new Map([
        [f.X.CONNECTIONS_PANEL, a.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [f.X.SESSIONS_PANEL, a.ImpressionNames.USER_SETTINGS_SESSIONS],
    ]);
function C(e) {
    let { target: t, ...n } = e,
        s = m.A.useField("query"),
        x = i.useCallback(() => {
            m.A.setState({ query: "" }), d.A.terminate();
        }, []),
        [A, C] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == _.default.getCurrentUser() && (C(!0), (0, E.default)());
        };
        return (
            p.default.addChangeListener(e),
            () => {
                p.default.removeChangeListener(e), v.A.resetState(), c.A.resetState(), l.A.close(), (0, u.ZQ)();
            }
        );
    }, []),
    A)
        ? null
        : (0, r.jsx)(h.A, {
              partialRoot: g.D,
              searchBar: j,
              emptyState: T,
              sidebarFooter: y.A,
              onViewChange: (e) => {
                  N.has(e) || (0, S._)(e);
                  let t = b.get(e);
                  null != t &&
                      (0, o.x)({
                          type: a.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: v.A.getField("source") },
                      }),
                      v.A.setState({ source: void 0 });
              },
              target: t,
              defaultTarget: f.X.ACCOUNT_PANEL,
              searchQuery: s,
              clearSearchQuery: x,
              ...n,
          });
}
function j() {
    let e = m.A.useField("query"),
        t = i.useCallback((e) => {
            m.A.setState({ query: e }), d.A.maybeTrackQueryEntered();
        }, []),
        n = i.useCallback(() => {
            d.A.isSessionActive() || d.A.initialize();
        }, []),
        a = i.useCallback(() => {
            0 === m.A.getField("query").trim().length && d.A.terminate();
        }, []),
        l = i.useCallback(() => {
            m.A.setState({ query: "" }), d.A.terminate();
        }, []);
    return (
        i.useEffect(
            () => () => {
                m.A.resetState(), d.A.terminate();
            },
            [],
        ),
        (0, r.jsx)("div", {
            className: A.P,
            children: (0, r.jsx)(s.IWV, { size: "md", query: e, onFocus: n, onBlur: a, onChange: t, onClear: l }),
        })
    );
}
function T() {
    return (0, r.jsxs)("div", {
        className: A.t,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: x.intl.string(x.t.zihbmv),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: x.intl.string(x.t.XclvsB),
            }),
        ],
    });
}
