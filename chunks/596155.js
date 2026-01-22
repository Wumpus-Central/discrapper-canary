n.d(t, {
    A: () => b,
}),
    n(896048),
    n(457529);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(942381),
    l = n(311907),
    c = n(397927),
    u = n(750506),
    d = n(540999),
    f = n(111162),
    p = n(797820),
    _ = n(803102),
    h = n(686757),
    m = n(857235);

function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = E(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function b() {
    let { debugTrackedData: e, impressions: t } = (0, h.SD)(
            (e) => ({
                debugTrackedData: e.debugTrackedData,
                impressions: e.impressions,
            }),
            o.x,
        ),
        n = (0, l.bG)([f.default], () => f.default.isAnalyticsDebuggerEnabled),
        a = (0, l.bG)([d.A], () => d.A.isDeveloper),
        [E, b] = i.useState(!1),
        y = null != e ? e : {},
        { name: O } = y,
        A = g(y, ["name"]),
        v = null != O;
    return a && n
        ? (0, r.jsx)(u.Ay, {
              children: (0, r.jsxs)("div", {
                  className: s()(m.kL, {
                      [m.YV]: E,
                      [m.cn]: !v,
                  }),
                  children: [
                      (0, r.jsx)(c.DUT, {
                          className: m.VI,
                          onClick: () => {
                              b(!E);
                          },
                          children: E ? (0, r.jsx)(p.A, {}) : (0, r.jsx)(_.A, {}),
                      }),
                      (0, r.jsxs)("div", {
                          className: s()(m.Qs, {
                              [m.Cx]: E,
                          }),
                          children: [
                              (0, r.jsxs)(c.Text, {
                                  className: s()(m.Pf, {
                                      [m.cn]: !v,
                                  }),
                                  variant: "text-xxs/normal",
                                  children: [
                                      v
                                          ? (0, r.jsx)(c.yr3, {
                                                size: "md",
                                                color: "currentColor",
                                                className: m.sG,
                                            })
                                          : (0, r.jsx)(c.aXh, {
                                                size: "md",
                                                color: "currentColor",
                                                className: m.jZ,
                                            }),
                                      null != O ? O : "(untracked)",
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: m.ss,
                                  children: JSON.stringify(A, void 0, 2),
                              }),
                              (0, r.jsx)(c.Text, {
                                  className: s()(m.Pf, {
                                      [m.cn]: !v,
                                  }),
                                  variant: "text-xxs/normal",
                                  children: "impressions stack",
                              }),
                              (0, r.jsx)("div", {
                                  className: m.t$,
                                  children: JSON.stringify(t, void 0, 2),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
