n.d(t, { Z: () => O }), n(388685), n(290780), n(642613);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(433517),
    u = n(481060),
    d = n(600164),
    f = n(675478),
    _ = n(883904),
    p = n(68985),
    h = n(211644),
    m = n(87454),
    g = n(471345),
    E = n(197571);
function b(e, t) {
    let [n, r] = i.useState(() => {
        let n = c.K.get(e);
        return null != n ? n : t;
    });
    return (
        i.useEffect(() => {
            c.K.set(e, n);
        }, [e, n]),
        [n, r]
    );
}
function y(e) {
    let { items: t, handleChange: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, r.jsx)(
                    m.Z,
                    {
                        content: e,
                        onChange: n,
                    },
                    e,
                ),
            ),
    });
}
function O() {
    let e = (0, h.ZP)((e) => e.recentlyShown),
        {
            dailyCapReached: t,
            dailyCapOverridden: n,
            newUserMinAgeRequiredOverridden: a,
        } = (0, s.cj)([p.Z], () => ({
            dailyCapReached: p.Z.hasUserHitDCCap(),
            dailyCapOverridden: p.Z.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: p.Z.newUserMinAgeRequiredOverridden,
        })),
        [c, m] = i.useState(""),
        [O, v] = b("RecentDismissibleOverrides", []),
        I = i.useCallback(
            (e) => {
                v((t) => {
                    let n = new Set(t);
                    n.delete(e);
                    let r = Array.from(n).slice(0, 4);
                    return r.unshift(e), r;
                });
            },
            [v],
        ),
        T = e.map((e) => l.z[e]),
        S = O.filter((e) => e.toLowerCase().includes(c.toLowerCase())).filter((e) => !T.includes(e)),
        A = Object.keys(l.z)
            .filter((e) => !T.includes(e))
            .filter((e) => !O.includes(e))
            .filter((e) => e.toLowerCase().includes(c.toLowerCase()))
            .sort((e, t) => e.localeCompare(t));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(u.hjN, {
                title: "Dismissible Content Fatigue",
                tag: u.RB0.H1,
                className: E.marginBottom60,
                children: [
                    (0, r.jsx)(u.xJW, {
                        children: (0, r.jsxs)(u.R94, {
                            className: E.marginBottom4,
                            children: ["Daily Cap Reached: ", t ? "Yes" : "No"],
                        }),
                    }),
                    (0, r.jsx)(u.j7V, {
                        value: n,
                        onChange: _.Nj,
                        children: "Override Dismissible Content Daily Cap",
                    }),
                    (0, r.jsx)(u.j7V, {
                        value: a,
                        onChange: _.KC,
                        children: "Override Minimum User Account Age Requirement",
                    }),
                    (0, r.jsxs)(u.xJW, {
                        children: [
                            (0, r.jsx)(u.zxk, {
                                variant: "primary",
                                text: "Reset DismissibleContentFrameworkStore",
                                onClick: () => (0, _.EG)(),
                            }),
                            (0, r.jsx)(u.R94, {
                                className: E.marginTop4,
                                children: "This will reset the daily cap and content seen during session",
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(u.hjN, {
                title: "Dismissible Contents",
                tag: u.RB0.H1,
                children: [
                    (0, r.jsx)(u.E1j, {
                        className: E.marginBottom20,
                        query: c,
                        onChange: m,
                        onClear: () => m(""),
                    }),
                    (0, r.jsxs)(u.xJW, {
                        className: g.buttonsContainer,
                        children: [
                            (0, r.jsx)(u.zxk, {
                                variant: "primary",
                                text: "Clear All Dismissed Contents",
                                onClick: f.sr,
                            }),
                            (0, r.jsx)(u.zxk, {
                                variant: "primary",
                                text: "Check All Dismissed Contents",
                                onClick: f.bE,
                            }),
                        ],
                    }),
                    e.length > 0
                        ? (0, r.jsxs)("div", {
                              className: E.marginBottom20,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: E.marginBottom20,
                                      children: (0, r.jsx)(u.vwX, { children: "Recently Shown" }),
                                  }),
                                  (0, r.jsx)(y, {
                                      items: T,
                                      handleChange: I,
                                  }),
                              ],
                          })
                        : null,
                    S.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: E.marginBottom20,
                                      children: (0, r.jsx)(u.vwX, { children: "Recent Overrides" }),
                                  }),
                                  (0, r.jsx)(y, {
                                      items: S,
                                      handleChange: I,
                                  }),
                              ],
                          })
                        : null,
                    (0, r.jsx)(d.Z, {
                        className: o()(E.marginBottom20, E.marginTop20),
                        children: (0, r.jsx)(u.vwX, { children: "Available Dismissible Contents" }),
                    }),
                    (0, r.jsx)(y, {
                        items: A,
                        handleChange: I,
                    }),
                ],
            }),
        ],
    });
}
