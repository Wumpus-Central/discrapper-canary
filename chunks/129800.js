"use strict";
n.d(t, { A: () => B });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(320448),
    l = n(559647),
    u = n(311907),
    c = n(397927),
    d = n(155718),
    _ = n(775602),
    f = n(721768),
    p = n(264322),
    h = n(842209),
    m = n(392054),
    g = n(972995),
    E = n(390756),
    A = n(203982),
    I = n(211401),
    T = n(989837),
    y = n(500049),
    S = n(555045),
    v = n(455440),
    C = n(720371),
    b = n(735991),
    N = n(297486),
    R = n(956522),
    O = n(652215),
    D = n(73510),
    L = n(985018),
    w = n(457806),
    x = n(577382);
let P = 5,
    M = "placeholder",
    k = [, , , , ,].fill(M);
function U(e) {
    let { context: t, command: n, section: a, sectionName: s } = e,
        l = i.useCallback(() => {
            let e = T.A.entrypoint();
            I.k(y.Se.COMMAND),
                (0, E.Mv)({ command: n, location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW, sectionName: s }),
                "channel" === t.type &&
                    (f.Gf({
                        channelId: t.channel.id,
                        command: n,
                        section: a,
                        location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: s,
                        source: e,
                        commandOrigin: m.iw.APPLICATION_LAUNCHER,
                    }),
                    A._.dispatch(O.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id }));
        }, [t, n, a, s]),
        u = (n.options?.length ?? 0) > 0,
        d = i.useMemo(() => (0, N.SD)(n.displayDescription, void 0), [n.displayDescription]),
        _ = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: x.sd,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            children: n.displayName,
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            lineClamp: 1,
                            children: d,
                        }),
                    ],
                }),
            [n.displayName, d],
        );
    return (0, r.jsxs)(c.DUT, {
        className: x.G5,
        onClick: l,
        children: [
            (0, r.jsx)(c.M1G, { className: x.fg, children: _ }),
            u ? (0, r.jsx)(o._, {}) : (0, r.jsx)(V, { context: t, command: n, sectionName: s }),
        ],
    });
}
function G() {
    let e = (0, u.bG)([_.A], () => _.A.useReducedMotion),
        { styleLarge: t, styleSmall: n } = i.useMemo(
            () => ({
                styleLarge: { width: `${10 + 20 * Math.random()}%`, height: "auto" },
                styleSmall: { width: `${30 + 60 * Math.random()}%`, height: "auto" },
            }),
            [],
        ),
        a = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: x.Vc,
                    children: [
                        (0, r.jsx)("div", {
                            className: w.jC,
                            style: t,
                            children: (0, r.jsx)(c.Text, {
                                className: w.R,
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: "_",
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: w.jC,
                            style: n,
                            children: (0, r.jsx)(c.Text, {
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
    return (0, r.jsx)("div", { className: s()(x.G5, w.NX, { [w.cb]: e }), children: a });
}
function V(e) {
    let { context: t, command: n, sectionName: a } = e;
    (0, p.A4)(!0, !0), (0, p.SD)(t, !0, !0);
    let s = (0, S.e)(t),
        [o, u] = i.useState(!1),
        d = i.useCallback(
            async (e) => {
                if ("channel" !== t.type) return;
                e.stopPropagation();
                let r = T.A.lastShownEntrypoint();
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
                        (await (0, b.MJ)({
                            command: n,
                            optionValues: {},
                            context: s,
                            sectionName: a,
                            commandOrigin: m.iw.APP_LAUNCHER_APPLICATION_VIEW,
                        }),
                        I.k(y.Se.COMMAND));
                } finally {
                    u(!1);
                }
            },
            [n, t, a, s],
        );
    return (0, r.jsx)(c.Button, {
        type: "submit",
        onClick: d,
        disabled: o,
        variant: "secondary",
        "aria-label": L.intl.formatToPlainString(L.t.UXw6W2, { commandName: n.untranslatedName }),
        text: L.intl.string(L.t.TXNS7S),
        icon: l.l,
        iconPosition: "end",
        size: "md",
    });
}
function F(e) {
    let { context: t, commands: n, section: i, headerName: a, sectionName: s, children: o } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: x.Zp,
                      children: [(0, r.jsx)(c.Heading, { variant: "heading-sm/semibold", children: a }), o],
                  }),
                  (0, r.jsx)("ul", {
                      className: x.dO,
                      "aria-label": a,
                      children: n.map((e, n) =>
                          e === M
                              ? (0, r.jsx)(G, {}, e + n)
                              : (0, r.jsx)(U, { context: t, command: e, section: i, sectionName: s }, e.id),
                      ),
                  }),
              ],
          });
}
function B(e) {
    let { context: t, application: n, sectionName: a, installOnDemand: s, setHasCommands: o } = e,
        {
            filterSection: l,
            commandsByActiveSection: u,
            sectionDescriptors: c,
            loading: _,
        } = h.cu({
            context: t,
            filters: { commandTypes: [d.kc.CHAT] },
            options: {
                placeholderCount: 0,
                limit: D.Hi,
                includeFrecency: !0,
                allowApplicationState: s,
                installOnDemand: s,
                applicationId: n.id,
            },
            allowFetch: !0,
        }),
        f = c.find((e) => e.id === n.id) ?? null,
        {
            sortOrder: p,
            setSortOrder: m,
            commands: g,
            canSort: E,
        } = (0, C.A)({ sectionId: n.id, commandsByActiveSection: u });
    i.useEffect(() => {
        l(n.id);
    }, [n.id, l]);
    let A = (0, v.A)({ context: t, commands: g, limit: P });
    return (i.useEffect(() => {
        o(g.length > 0);
    }, [o, g]),
    _ || 0 !== g.length)
        ? (0, r.jsxs)("ul", {
              className: x.hQ,
              children: [
                  (0, r.jsx)(F, {
                      context: t,
                      section: f,
                      commands: A,
                      headerName: L.intl.string(L.t.acSE0h),
                      sectionName: a,
                  }),
                  (0, r.jsx)(F, {
                      context: t,
                      section: f,
                      commands: _ ? k : g,
                      headerName: L.intl.string(L.t.DUU9L3),
                      sectionName: a,
                      children: E && (0, r.jsx)(R.A, { sortOrder: p, onSortOptionClick: m }),
                  }),
              ],
          })
        : null;
}
