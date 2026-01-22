n.d(t, {
    A: () => F,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(320448),
    l = n(559647),
    c = n(311907),
    u = n(397927),
    d = n(155718),
    f = n(775602),
    p = n(721768),
    _ = n(264322),
    h = n(842209),
    m = n(392054),
    g = n(972995),
    E = n(390756),
    b = n(203982),
    y = n(211401),
    O = n(989837),
    A = n(500049),
    v = n(555045),
    S = n(455440),
    I = n(720371),
    T = n(735991),
    C = n(297486),
    N = n(956522),
    R = n(652215),
    w = n(73510),
    P = n(985018),
    D = n(457806),
    x = n(577382);
let L = 5,
    j = "placeholder",
    M = [, , , , ,].fill(j);

function k(e) {
    var t, n;
    let { context: a, command: s, section: l, sectionName: c } = e,
        d = i.useCallback(() => {
            let e = O.A.entrypoint();
            y.k(A.Se.COMMAND),
                (0, E.Mv)({
                    command: s,
                    location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                    sectionName: c,
                }),
                "channel" === a.type &&
                    (p.Gf({
                        channelId: a.channel.id,
                        command: s,
                        section: l,
                        location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: c,
                        source: e,
                        commandOrigin: m.iw.APPLICATION_LAUNCHER,
                    }),
                    b._.dispatch(R.jej.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: a.channel.id,
                    }));
        }, [a, s, l, c]),
        f = (null != (t = null == (n = s.options) ? void 0 : n.length) ? t : 0) > 0,
        _ = i.useMemo(() => (0, C.SD)(s.displayDescription, void 0), [s.displayDescription]),
        h = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: x.sd,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            children: s.displayName,
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            lineClamp: 1,
                            children: _,
                        }),
                    ],
                }),
            [s.displayName, _],
        );
    return (0, r.jsxs)(u.DUT, {
        className: x.G5,
        onClick: d,
        children: [
            (0, r.jsx)(u.M1G, {
                className: x.fg,
                children: h,
            }),
            f
                ? (0, r.jsx)(o._, {})
                : (0, r.jsx)(G, {
                      context: a,
                      command: s,
                      sectionName: c,
                  }),
        ],
    });
}

function U() {
    let e = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        { styleLarge: t, styleSmall: n } = i.useMemo(
            () => ({
                styleLarge: {
                    width: "".concat(10 + 20 * Math.random(), "%"),
                    height: "auto",
                },
                styleSmall: {
                    width: "".concat(30 + 60 * Math.random(), "%"),
                    height: "auto",
                },
            }),
            [],
        ),
        a = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: x.Vc,
                    children: [
                        (0, r.jsx)("div", {
                            className: D.jC,
                            style: t,
                            children: (0, r.jsx)(u.Text, {
                                className: D.R,
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: "_",
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: D.jC,
                            style: n,
                            children: (0, r.jsx)(u.Text, {
                                className: D.R,
                                variant: "text-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: "_",
                            }),
                        }),
                    ],
                }),
            [t, n],
        );
    return (0, r.jsx)("div", {
        className: s()(x.G5, D.NX, {
            [D.cb]: e,
        }),
        children: a,
    });
}

function G(e) {
    let { context: t, command: n, sectionName: a } = e;
    (0, _.A4)(!0, !0), (0, _.SD)(t, !0, !0);
    let s = (0, v.e)(t),
        [o, c] = i.useState(!1),
        d = i.useCallback(
            async (e) => {
                if ("channel" !== t.type) return;
                e.stopPropagation();
                let r = O.A.lastShownEntrypoint();
                try {
                    let { isAuthorized: e } = await (0, g.q)({
                        applicationId: n.applicationId,
                        channel: "channel" === t.type ? t.channel : void 0,
                        commandIntegrationTypes: n.integration_types,
                        appLauncherContext: {
                            entrypoint: r,
                            location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: a,
                        },
                    });
                    e &&
                        (await (0, T.MJ)({
                            command: n,
                            optionValues: {},
                            context: s,
                            sectionName: a,
                            commandOrigin: m.iw.APP_LAUNCHER_APPLICATION_VIEW,
                        }),
                        y.k(A.Se.COMMAND));
                } finally {
                    c(!1);
                }
            },
            [n, t, a, s],
        );
    return (0, r.jsx)(u.Button, {
        type: "submit",
        onClick: d,
        disabled: o,
        variant: "secondary",
        "aria-label": P.intl.formatToPlainString(P.t.UXw6W2, {
            commandName: n.untranslatedName,
        }),
        text: P.intl.string(P.t.TXNS7S),
        icon: l.l,
        iconPosition: "end",
        size: "md",
    });
}

function V(e) {
    let { context: t, commands: n, section: i, headerName: a, sectionName: s, children: o } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: x.Zp,
                      children: [
                          (0, r.jsx)(u.Heading, {
                              variant: "heading-sm/semibold",
                              children: a,
                          }),
                          o,
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      className: x.dO,
                      "aria-label": a,
                      children: n.map((e, n) =>
                          e === j
                              ? (0, r.jsx)(U, {}, e + n)
                              : (0, r.jsx)(
                                    k,
                                    {
                                        context: t,
                                        command: e,
                                        section: i,
                                        sectionName: s,
                                    },
                                    e.id,
                                ),
                      ),
                  }),
              ],
          });
}

function F(e) {
    var t;
    let { context: n, application: a, sectionName: s, installOnDemand: o, setHasCommands: l } = e,
        {
            filterSection: c,
            commandsByActiveSection: u,
            sectionDescriptors: f,
            loading: p,
        } = h.cu({
            context: n,
            filters: {
                commandTypes: [d.kc.CHAT],
            },
            options: {
                placeholderCount: 0,
                limit: w.Hi,
                includeFrecency: !0,
                allowApplicationState: o,
                installOnDemand: o,
                applicationId: a.id,
            },
            allowFetch: !0,
        }),
        _ = null != (t = f.find((e) => e.id === a.id)) ? t : null,
        {
            sortOrder: m,
            setSortOrder: g,
            commands: E,
            canSort: b,
        } = (0, I.A)({
            sectionId: a.id,
            commandsByActiveSection: u,
        });
    i.useEffect(() => {
        c(a.id);
    }, [a.id, c]);
    let y = (0, S.A)({
        context: n,
        commands: E,
        limit: L,
    });
    return (i.useEffect(() => {
        l(E.length > 0);
    }, [l, E]),
    p || 0 !== E.length)
        ? (0, r.jsxs)("ul", {
              className: x.hQ,
              children: [
                  (0, r.jsx)(V, {
                      context: n,
                      section: _,
                      commands: y,
                      headerName: P.intl.string(P.t.acSE0h),
                      sectionName: s,
                  }),
                  (0, r.jsx)(V, {
                      context: n,
                      section: _,
                      commands: p ? M : E,
                      headerName: P.intl.string(P.t.DUU9L3),
                      sectionName: s,
                      children:
                          b &&
                          (0, r.jsx)(N.A, {
                              sortOrder: m,
                              onSortOptionClick: g,
                          }),
                  }),
              ],
          })
        : null;
}
