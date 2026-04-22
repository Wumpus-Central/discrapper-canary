n.d(t, { T: () => b }), n(321073);
var i = n(627968),
    s = n(64700);
n(873298);
var l = n(990078),
    a = n(834730),
    r = n(939249),
    o = n(320448),
    d = n(827734),
    u = n(289873),
    c = n(486020),
    g = n(975571),
    m = n(661191);
n(253932);
var _ = n(780964),
    A = n(978304),
    h = n(858897);
n(505653), n(106148), n(650832);
var p = n(652215),
    x = n(985018),
    E = n(628736);
function T(e) {
    let { applications: t } = e,
        n = s.useMemo(() => t.sort((e, t) => m.default.compare(t.id, e.id)), [t]),
        u = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let i = n[t];
                if (null == i) break;
                e.push(i.name);
            }
            let t = e.join(", "),
                s = n.length - 3;
            return s > 0
                ? x.intl.format(x.t.sHFdTg, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, i.jsx)(
                              a.E,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: x.intl.format(x.t["EADv+4"], { count: s }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [n]),
        g = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let s = n[t];
                if (null == s) break;
                let { icon: a, name: r, id: o } = s,
                    d = c.Ay.getApplicationIconURL({ id: o, icon: a });
                e.push(
                    (0, i.jsx)(
                        l.m,
                        {
                            __unsupportedReactNodeAsText: r,
                            children: (0, i.jsx)("img", { src: d, "aria-label": r, className: E.Kk }),
                        },
                        o,
                    ),
                );
            }
            let t = n.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, i.jsx)(
                            "div",
                            {
                                className: E.lK,
                                children: (0, i.jsx)(a.E, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: `+${t}`,
                                }),
                            },
                            "omitted",
                        ),
                    ),
                e
            );
        }, [n]);
    return (0, i.jsxs)("div", {
        className: E.wx,
        children: [
            (0, i.jsxs)("div", {
                className: E.kX,
                children: [
                    (0, i.jsx)(a.E, { variant: "text-md/normal", color: "text-strong", children: u }),
                    (0, i.jsxs)(r.D, {
                        onClick: () => {
                            (0, h.openUserSettings)(_.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: E.bJ,
                        children: [
                            (0, i.jsx)(a.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: x.intl.format(x.t.oYaYOe, {}),
                            }),
                            (0, i.jsx)(o._, {
                                size: "xxs",
                                color: d.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: E.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: E.yF }),
            (0, i.jsx)("div", { className: E.lJ, children: g }),
        ],
    });
}
function S() {
    return (0, i.jsxs)("div", {
        className: E.do,
        children: [
            (0, i.jsx)(a.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: E.xV,
                children: x.intl.string(x.t["+0U77d"]),
            }),
            (0, i.jsx)(a.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: x.intl.format(x.t.V8wClM, {
                    helpdeskArticle: g.A.getArticleURL(p.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function f(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, i.jsx)(T, { applications: t }) : (0, i.jsx)(S, {});
}
function b() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = (0, A.A)(!0);
    return e ? (0, i.jsx)(u.y, {}) : (0, i.jsx)(f, { applications: t });
}
