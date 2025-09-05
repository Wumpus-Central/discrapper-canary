n.d(t, {
    Z: () => S,
    u: () => I,
}),
    n(388685),
    n(539854),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(290780),
    n(642613);
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
    _ = n(581883),
    p = n(883904),
    h = n(68985),
    m = n(211644),
    g = n(428967),
    E = n(972118),
    b = n(730326),
    y = n(10198);
function O(e, t) {
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
function v(e) {
    let { content: t } = e,
        n = (0, s.e7)([_.Z], () => {
            var e, n;
            return null == (n = _.Z.settings.userContent) || null == (e = n.recurringDismissibleContentStates)
                ? void 0
                : e[t];
        });
    if (null == n) return null;
    let i = [],
        { lastDismissedVersion: a, lastDismissedAtMs: o, lastDismissedObjectId: l } = n;
    if ((void 0 !== a && 0 !== a && i.push("last_dismissed_version: ".concat(a)), void 0 !== o)) {
        let e = Number(o),
            t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
        i.push("last_dismissed_at: ".concat(t));
    }
    return (void 0 !== l && "0" !== l && i.push("last_dismissed_object_id: ".concat(l)), 0 === i.length)
        ? null
        : (0, r.jsx)(u.Text, {
              variant: "text-xs/normal",
              className: y.marginTop4,
              children: i.join(", "),
          });
}
function I(e) {
    let { className: t, contents: n, content: i, onChange: a } = e,
        o = l.z[i],
        { isDismissed: s, handleToggleDismissState: c } = (0, E.Z)(o, n),
        d = () => {
            a(i), c();
        };
    return (0, r.jsxs)(u.j7V, {
        value: s,
        onChange: d,
        className: t,
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                className: y.marginTop4,
                children: "".concat(i.toLowerCase(), " (").concat(l.z[i], ")"),
            }),
            (0, g.qh)(o) && (0, r.jsx)(v, { content: o }),
        ],
    });
}
function T(e) {
    let { items: t, dismissedContents: n, handleChange: i } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, r.jsx)(
                    I,
                    {
                        contents: n,
                        content: e,
                        onChange: i,
                    },
                    e,
                ),
            ),
    });
}
function S() {
    var e;
    let t = (0, m.ZP)((e) => e.recentlyShown),
        {
            dailyCapReached: n,
            dailyCapOverridden: a,
            newUserMinAgeRequiredOverridden: c,
        } = (0, s.cj)([h.Z], () => ({
            dailyCapReached: h.Z.hasUserHitDCCap(),
            dailyCapOverridden: h.Z.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: h.Z.newUserMinAgeRequiredOverridden,
        })),
        [g, E] = i.useState(""),
        v =
            null !=
            (e = (0, s.e7)([_.Z], () => {
                var e;
                return null == (e = _.Z.settings.userContent) ? void 0 : e.dismissedContents;
            }))
                ? e
                : new Uint8Array(),
        [I, S] = O("RecentDismissibleOverrides", []),
        A = (e) => {
            S((t) => {
                let n = new Set(t);
                n.delete(e);
                let r = Array.from(n).slice(0, 4);
                return r.unshift(e), r;
            });
        },
        C = t.map((e) => l.z[e]),
        N = I.filter((e) => e.toLowerCase().includes(g.toLowerCase())).filter((e) => !C.includes(e)),
        R = Object.keys(l.z)
            .filter((e) => !C.includes(e))
            .filter((e) => !I.includes(e))
            .filter((e) => e.toLowerCase().includes(g.toLowerCase()))
            .sort((e, t) => e.localeCompare(t));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(u.hjN, {
                title: "Dismissible Content Fatigue",
                tag: u.RB0.H1,
                className: y.marginBottom60,
                children: [
                    (0, r.jsx)(u.xJW, {
                        children: (0, r.jsxs)(u.R94, {
                            className: y.marginBottom4,
                            children: ["Daily Cap Reached: ", n ? "Yes" : "No"],
                        }),
                    }),
                    (0, r.jsx)(u.j7V, {
                        value: a,
                        onChange: p.Nj,
                        children: "Override Dismissible Content Daily Cap",
                    }),
                    (0, r.jsx)(u.j7V, {
                        value: c,
                        onChange: p.KC,
                        children: "Override Minimum User Account Age Requirement",
                    }),
                    (0, r.jsxs)(u.xJW, {
                        children: [
                            (0, r.jsx)(u.zxk, {
                                variant: "primary",
                                text: "Reset DismissibleContentFrameworkStore",
                                onClick: () => (0, p.EG)(),
                            }),
                            (0, r.jsx)(u.R94, {
                                className: y.marginTop4,
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
                        className: y.marginBottom20,
                        query: g,
                        onChange: E,
                        onClear: () => E(""),
                    }),
                    (0, r.jsxs)(u.xJW, {
                        className: b.buttonsContainer,
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
                    t.length > 0
                        ? (0, r.jsxs)("div", {
                              className: y.marginBottom20,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: y.marginBottom20,
                                      children: (0, r.jsx)(u.vwX, { children: "Recently Shown" }),
                                  }),
                                  (0, r.jsx)(T, {
                                      items: C,
                                      dismissedContents: v,
                                      handleChange: A,
                                  }),
                              ],
                          })
                        : null,
                    N.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: y.marginBottom20,
                                      children: (0, r.jsx)(u.vwX, { children: "Recent Overrides" }),
                                  }),
                                  (0, r.jsx)(T, {
                                      items: N,
                                      dismissedContents: v,
                                      handleChange: A,
                                  }),
                              ],
                          })
                        : null,
                    (0, r.jsx)(d.Z, {
                        className: o()(y.marginBottom20, y.marginTop20),
                        children: (0, r.jsx)(u.vwX, { children: "Available Dismissible Contents" }),
                    }),
                    (0, r.jsx)(T, {
                        items: R,
                        dismissedContents: v,
                        handleChange: A,
                    }),
                ],
            }),
        ],
    });
}
