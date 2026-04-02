"use strict";
n.d(t, { default: () => N });
var r = n(627968),
    i = n(64700),
    l = n(110259),
    a = n(397927),
    s = n(252452),
    o = n(139286),
    u = n(507553),
    c = n(324593),
    d = n(883662),
    h = n(961350),
    f = n(287809),
    m = n(152056),
    p = n(780964),
    _ = n(921854),
    v = n(7564),
    y = n(175665),
    g = n(178241),
    x = n(779733),
    E = n(985018),
    A = n(188550);
let S = new Set([p.X.PROFILE_PANEL, p.X.SUBSCRIPTIONS_PANEL, p.X.FAMILY_CENTER_PANEL, p.X.POGGERMODE_PANEL]),
    b = new Map([
        [p.X.CONNECTIONS_PANEL, l.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [p.X.SESSIONS_PANEL, l.ImpressionNames.USER_SETTINGS_SESSIONS],
    ]);
function N(e) {
    let { target: t, ...n } = e,
        a = m.A.useField("query"),
        E = i.useCallback(() => {
            m.A.setState({ query: "" }), c.A.terminate();
        }, []),
        [A, N] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == f.default.getCurrentUser() && (N(!0), (0, x.default)());
        };
        return (
            h.default.addChangeListener(e),
            () => {
                h.default.removeChangeListener(e), y.A.resetState(), u.A.resetState(), s.A.close();
            }
        );
    }, []),
    A)
        ? null
        : (0, r.jsx)(d.A, {
              partialRoot: _.D,
              searchBar: j,
              emptyState: C,
              sidebarFooter: v.A,
              onViewChange: (e) => {
                  S.has(e) || (0, g._)(e);
                  let t = b.get(e);
                  null != t &&
                      (0, o.x)({
                          type: l.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: y.A.getField("source") },
                      }),
                      y.A.setState({ source: void 0 });
              },
              target: t,
              defaultTarget: p.X.ACCOUNT_PANEL,
              searchQuery: a,
              clearSearchQuery: E,
              ...n,
          });
}
function j() {
    let e = m.A.useField("query"),
        t = i.useCallback((e) => {
            m.A.setState({ query: e }), c.A.maybeTrackQueryEntered();
        }, []),
        n = i.useCallback(() => {
            c.A.isSessionActive() || c.A.initialize();
        }, []),
        l = i.useCallback(() => {
            0 === m.A.getField("query").trim().length && c.A.terminate();
        }, []),
        s = i.useCallback(() => {
            m.A.setState({ query: "" }), c.A.terminate();
        }, []);
    return (
        i.useEffect(
            () => () => {
                m.A.resetState(), c.A.terminate();
            },
            [],
        ),
        (0, r.jsx)("div", {
            className: A.P,
            children: (0, r.jsx)(a.IWV, { size: "md", query: e, onFocus: n, onBlur: l, onChange: t, onClear: s }),
        })
    );
}
function C() {
    return (0, r.jsxs)("div", {
        className: A.t,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: E.intl.string(E.t.zihbmv),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: E.intl.string(E.t.XclvsB),
            }),
        ],
    });
}
