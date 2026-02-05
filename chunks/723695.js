"use strict";
n.d(t, { A: () => L });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(10716),
    c = n(631628),
    d = n(711765),
    _ = n(688810),
    f = n(918831),
    p = n(361926),
    h = n(429913),
    m = n(607470),
    g = n(713804),
    E = n(611010),
    A = n(954571),
    I = n(735991),
    T = n(485878),
    y = n(396533),
    S = n(567367),
    v = n(382607),
    C = n(652215),
    b = n(985018),
    N = n(516995),
    R = n(206314);
let O = 2,
    D = 2e3;
function L(e) {
    let { context: t, application: n, videoUrl: a, imageCoverUrl: l, sectionName: c, hasCommands: _ } = e,
        f = i.useMemo(() => (0, I.u8)(n) ?? "", [n]),
        p = (0, o.bG)([u.A], () => u.A.inDevModeForApplication(n.id)),
        { isSlideReady: h } = (0, T.uM)(),
        [g, E] = i.useState(!1);
    i.useEffect(() => {
        h && E(!0);
    }, [h]);
    let A = null != a;
    return (0, r.jsxs)("div", {
        className: N.kL,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    A
                        ? (0, r.jsxs)("div", {
                              className: N.j,
                              children: [
                                  g
                                      ? (0, r.jsx)(m.A, {
                                            className: s()(N.l3, N.Ki),
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            src: a,
                                            poster: l,
                                        })
                                      : null,
                                  (0, r.jsx)("img", {
                                      className: N.l3,
                                      src: l,
                                      "aria-label": b.intl.string(b.t.X4IxWL),
                                  }),
                              ],
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: A ? N.iw : N.bH,
                        children: [
                            (0, r.jsx)(x, { application: n }),
                            (0, r.jsx)(P, { application: n }),
                            f.length > 0 ? (0, r.jsx)(U, { description: f }) : null,
                            p
                                ? (0, r.jsx)("div", {
                                      className: N.G,
                                      children: (0, r.jsx)(d.F, { hideSearch: !0, className: N.bz }),
                                  })
                                : null,
                            (0, r.jsx)(k, {
                                context: t,
                                application: n,
                                sectionName: c,
                                isDeveloperOfThisApp: p,
                                hasCommands: _,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(w, { application: n }),
        ],
    });
}
function w(e) {
    let { application: t } = e,
        n = (0, I.K4)(t),
        i = (0, I.ME)(t);
    return n || i
        ? (0, r.jsxs)("div", {
              className: N.fP,
              children: [
                  n
                      ? (0, r.jsxs)("div", {
                            className: N.wi,
                            children: [
                                (0, r.jsx)(l.U1X, { size: "sm", color: l.LU0.colors.ICON_MUTED }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: b.intl.string(b.t["8z5B2U"]),
                                }),
                            ],
                        })
                      : null,
                  i
                      ? (0, r.jsxs)("div", {
                            className: N.wi,
                            children: [
                                (0, r.jsx)(l.d2Y, { size: "sm", color: l.LU0.colors.ICON_MUTED }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: b.intl.string(b.t["5khEk8"]),
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : null;
}
function x(e) {
    let { application: t } = e,
        n = (0, I.$B)(t) ? t.name : ((0, I.lq)(t) ?? ""),
        i = (0, I.b7)(t);
    return (0, r.jsxs)("div", {
        className: N.gn,
        children: [
            (0, r.jsx)(l.Heading, { variant: "heading-xl/extrabold", lineClamp: 1, children: n }),
            i
                ? (0, r.jsx)("div", {
                      className: N.s3,
                      children: (0, r.jsx)(l.Text, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: b.intl.string(b.t.LO4f0P),
                      }),
                  })
                : null,
        ],
    });
}
function P(e) {
    let { application: t } = e,
        n = i.useMemo(() => ((0, I.$B)(t) ? (t?.tags ?? []) : []), [t]);
    return (0, I.Ag)(t)
        ? (0, r.jsxs)("div", {
              className: N.Pc,
              children: [
                  (0, r.jsx)(M, { application: t }),
                  n.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              className: N.I8,
                              children: (0, r.jsx)(l.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: e,
                              }),
                          },
                          e + t,
                      ),
                  ),
              ],
          })
        : null;
}
function M(e) {
    let { application: t } = e;
    if (!(0, I.Ag)(t)) return null;
    let n = ((0, I.$B)(t) ? (t instanceof E.Ay ? t.maxParticipants : t.max_participants) : 0) ?? 0;
    return (0, r.jsxs)("div", {
        className: N.I8,
        children: [
            (0, r.jsx)(l.nFg, { size: "xs", color: l.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "interactive-text-default",
                children: (0, c.cL)(n),
            }),
        ],
    });
}
function k(e) {
    let { context: t, application: n, sectionName: a, hasCommands: s, isDeveloperOfThisApp: o } = e,
        u = (0, p.E0)(t, n.id),
        c = (0, h.h)(n.id),
        d = c?.bot?.id,
        m = (0, f.A)({ context: t, application: n, botUserId: d }),
        { analyticsLocations: g } = (0, _.Ay)();
    return (i.useEffect(() => {
        if (!(0, I.$B)(n) || !(0, I.Ag)(n)) return;
        let e = setTimeout(() => {
            (null == u || null == d) &&
                A.default.track(C.HAw.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                    application_id: n.id,
                    is_primary_entry_point_command_non_null: null != u,
                    is_bot_user_id_non_null: null != d,
                    show_try_it_out_button: m,
                });
        }, D);
        return () => clearTimeout(e);
    }, [n, u, d, m]),
    (0, I.$B)(n) && (0, I.Ag)(n))
        ? null != u && null != d
            ? (0, r.jsxs)(l.ButtonGroup, {
                  fullWidth: !0,
                  children: [
                      (0, r.jsx)(S.A, { context: t, application: n, sectionName: a, primaryEntryPointCommand: u }),
                      m && null != d
                          ? (0, r.jsx)(v.A, { botUserId: d, applicationId: n.id, analyticsLocations: g })
                          : null,
                  ],
              })
            : o && !s && (0, I.Ag)(n)
              ? (0, r.jsx)(l.po8, {
                    className: N.ai,
                    messageType: l.YCn.WARNING,
                    children: b.intl.format(b.t["s/3hjE"], {}),
                })
              : null
        : null;
}
function U(e) {
    let { description: t } = e,
        [n, a] = i.useState(!0);
    i.useLayoutEffect(() => a(!1), []);
    let s = i.useMemo(() => (0, g.parseBioReact)(t), [t]),
        { ref: o, lineHeight: u, lineCount: c } = G(),
        d = i.useMemo(() => {
            if (null == u || null == c) return { key: 0 };
            let e = u * c;
            return { key: 1, minHeightOverride: Math.min(e, O * u), maxHeightOverride: e };
        }, [c, u]),
        { ref: _, isTransitioning: f, onTransitionEnd: p } = (0, y.A)({ isExpanded: n, ...d }),
        h = n || f;
    return (0, r.jsxs)("div", {
        className: N.iQ,
        children: [
            (0, r.jsx)("div", {
                ref: _,
                className: N.ZT,
                onTransitionEnd: p,
                children: (0, r.jsx)(l.Text, {
                    ref: o,
                    className: R.PT,
                    variant: "text-sm/medium",
                    lineClamp: h ? void 0 : O,
                    style: { maxHeight: h ? void 0 : d.minHeightOverride },
                    children: s,
                }),
            }),
            null != c && c > O
                ? (0, r.jsxs)(l.DUT, {
                      className: N.lP,
                      onClick: () => a((e) => !e),
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: h ? b.intl.string(b.t.u4YJ8g) : b.intl.string(b.t["N/tajD"]),
                          }),
                          h
                              ? (0, r.jsx)(l.tN5, { size: "sm", color: l.LU0.colors.TEXT_BRAND })
                              : (0, r.jsx)(l.abt, { size: "sm", color: l.LU0.colors.TEXT_BRAND }),
                      ],
                  })
                : null,
        ],
    });
}
function G() {
    let e = i.useRef(null),
        [t, n] = i.useState(null),
        [r, a] = i.useState(null);
    return (
        i.useLayoutEffect(() => {
            let t = e.current;
            if (null === t || 0 === t.clientHeight) return;
            let r = parseInt(getComputedStyle(t).lineHeight);
            isNaN(r) || (n(r), a(Math.floor(t.clientHeight / r)));
        }, []),
        { ref: e, lineHeight: t, lineCount: r }
    );
}
