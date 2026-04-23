n.d(t, { A: () => F });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(320448),
    o = n(559647),
    c = n(311907),
    d = n(834730),
    u = n(939249),
    m = n(247928),
    p = n(821609),
    _ = n(534514),
    A = n(155718),
    h = n(775602),
    f = n(721768),
    x = n(264322),
    C = n(842209),
    g = n(392054),
    N = n(972995),
    E = n(390756),
    b = n(203982),
    I = n(211401),
    v = n(989837),
    y = n(500049),
    j = n(555045),
    P = n(455440),
    L = n(720371),
    T = n(735991),
    S = n(297486),
    R = n(956522),
    O = n(652215),
    k = n(73510),
    M = n(985018),
    w = n(357887),
    D = n(291657);
let U = "placeholder",
    H = [, , , , ,].fill(U);
function V(e) {
    let { context: t, command: n, section: a, sectionName: s } = e,
        o = l.useCallback(() => {
            let e = v.A.entrypoint();
            I.k(y.Se.COMMAND),
                (0, E.Mv)({ command: n, location: g.Oh.APP_LAUNCHER_APPLICATION_VIEW, sectionName: s }),
                "channel" === t.type &&
                    (f.Gf({
                        channelId: t.channel.id,
                        command: n,
                        section: a,
                        location: g.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: s,
                        source: e,
                        commandOrigin: g.iw.APPLICATION_LAUNCHER,
                    }),
                    b._.dispatch(O.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id }));
        }, [t, n, a, s]),
        c = (n.options?.length ?? 0) > 0,
        p = l.useMemo(() => (0, S.SD)(n.displayDescription, void 0), [n.displayDescription]),
        _ = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: D.sd,
                    children: [
                        (0, i.jsx)(d.E, { variant: "text-sm/semibold", color: "text-strong", children: n.displayName }),
                        (0, i.jsx)(d.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: p }),
                    ],
                }),
            [n.displayName, p],
        );
    return (0, i.jsxs)(u.D, {
        className: D.G5,
        onClick: o,
        children: [
            (0, i.jsx)(m.M, { className: D.fg, children: _ }),
            c ? (0, i.jsx)(r._, {}) : (0, i.jsx)(B, { context: t, command: n, sectionName: s }),
        ],
    });
}
function W() {
    let e = (0, c.bG)([h.A], () => h.A.useReducedMotion),
        { styleLarge: t, styleSmall: n } = l.useMemo(
            () => ({
                styleLarge: { width: `${10 + 20 * Math.random()}%`, height: "auto" },
                styleSmall: { width: `${30 + 60 * Math.random()}%`, height: "auto" },
            }),
            [],
        ),
        a = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: D.Vc,
                    children: [
                        (0, i.jsx)("div", {
                            className: w.jC,
                            style: t,
                            children: (0, i.jsx)(d.E, {
                                className: w.R,
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: "_",
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: w.jC,
                            style: n,
                            children: (0, i.jsx)(d.E, {
                                className: w.R,
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
    return (0, i.jsx)("div", { className: s()(D.G5, w.NX, { [w.cb]: e }), children: a });
}
function B(e) {
    let { context: t, command: n, sectionName: a } = e;
    (0, x.A4)(!0, !0), (0, x.SD)(t, !0, !0);
    let s = (0, j.e)(t),
        [r, c] = l.useState(!1),
        d = l.useCallback(
            async (e) => {
                if ("channel" !== t.type) return;
                e.stopPropagation();
                let i = v.A.lastShownEntrypoint();
                try {
                    let { isAuthorized: e } = await (0, N.q)({
                        applicationId: n.applicationId,
                        channel: "channel" === t.type ? t.channel : void 0,
                        commandIntegrationTypes: n.integration_types,
                        appLauncherContext: {
                            entrypoint: i,
                            location: g.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: a,
                        },
                    });
                    e &&
                        (await (0, T.MJ)({
                            command: n,
                            optionValues: {},
                            context: s,
                            sectionName: a,
                            commandOrigin: g.iw.APP_LAUNCHER_APPLICATION_VIEW,
                        }),
                        I.k(y.Se.COMMAND));
                } finally {
                    c(!1);
                }
            },
            [n, t, a, s],
        );
    return (0, i.jsx)(p.$, {
        type: "submit",
        onClick: d,
        disabled: r,
        variant: "secondary",
        "aria-label": M.intl.formatToPlainString(M.t.UXw6W2, { commandName: n.untranslatedName }),
        text: M.intl.string(M.t.TXNS7S),
        icon: o.l,
        iconPosition: "end",
        size: "md",
    });
}
function G(e) {
    let { context: t, commands: n, section: l, headerName: a, sectionName: s, children: r } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: D.Zp,
                      children: [(0, i.jsx)(_.D, { variant: "heading-sm/semibold", children: a }), r],
                  }),
                  (0, i.jsx)("ul", {
                      className: D.dO,
                      "aria-label": a,
                      children: n.map((e, n) =>
                          e === U
                              ? (0, i.jsx)(W, {}, e + n)
                              : (0, i.jsx)(V, { context: t, command: e, section: l, sectionName: s }, e.id),
                      ),
                  }),
              ],
          });
}
function F(e) {
    let { context: t, application: n, sectionName: a, installOnDemand: s, setHasCommands: r } = e,
        {
            filterSection: o,
            commandsByActiveSection: c,
            sectionDescriptors: d,
            loading: u,
        } = C.cu({
            context: t,
            filters: { commandTypes: [A.kc.CHAT] },
            options: {
                placeholderCount: 0,
                limit: k.Hi,
                includeFrecency: !0,
                allowApplicationState: s,
                installOnDemand: s,
                applicationId: n.id,
            },
            allowFetch: !0,
        }),
        m = d.find((e) => e.id === n.id) ?? null,
        {
            sortOrder: p,
            setSortOrder: _,
            commands: h,
            canSort: f,
        } = (0, L.A)({ sectionId: n.id, commandsByActiveSection: c });
    l.useEffect(() => {
        o(n.id);
    }, [n.id, o]);
    let x = (0, P.A)({ context: t, commands: h, limit: 5 });
    return (l.useEffect(() => {
        r(h.length > 0);
    }, [r, h]),
    u || 0 !== h.length)
        ? (0, i.jsxs)("ul", {
              className: D.hQ,
              children: [
                  (0, i.jsx)(G, {
                      context: t,
                      section: m,
                      commands: x,
                      headerName: M.intl.string(M.t.acSE0h),
                      sectionName: a,
                  }),
                  (0, i.jsx)(G, {
                      context: t,
                      section: m,
                      commands: u ? H : h,
                      headerName: M.intl.string(M.t.DUU9L3),
                      sectionName: a,
                      children: f && (0, i.jsx)(R.A, { sortOrder: p, onSortOptionClick: _ }),
                  }),
              ],
          })
        : null;
}
