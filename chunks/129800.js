"use strict";
n.d(t, { A: () => B });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(972995),
    g = n(390756),
    A = n(203982),
    I = n(211401),
    T = n(989837),
    S = n(500049),
    y = n(555045),
    v = n(455440),
    N = n(720371),
    C = n(735991),
    b = n(297486),
    R = n(956522),
    O = n(652215),
    D = n(73510),
    L = n(985018),
    w = n(86e3),
    x = n(370092);
let M = 5,
    P = "placeholder",
    k = [, , , , ,].fill(P);
function U(e) {
    let { context: t, command: n, section: s, sectionName: a } = e,
        l = i.useCallback(() => {
            let e = T.A.entrypoint();
            I.k(S.Se.COMMAND),
                (0, g.Mv)({ command: n, location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW, sectionName: a }),
                "channel" === t.type &&
                    (f.Gf({
                        channelId: t.channel.id,
                        command: n,
                        section: s,
                        location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: a,
                        source: e,
                        commandOrigin: m.iw.APPLICATION_LAUNCHER,
                    }),
                    A._.dispatch(O.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id }));
        }, [t, n, s, a]),
        u = (n.options?.length ?? 0) > 0,
        d = i.useMemo(() => (0, b.SD)(n.displayDescription, void 0), [n.displayDescription]),
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
            u ? (0, r.jsx)(o._, {}) : (0, r.jsx)(F, { context: t, command: n, sectionName: a }),
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
        s = i.useMemo(
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
    return (0, r.jsx)("div", { className: a()(x.G5, w.NX, { [w.cb]: e }), children: s });
}
function F(e) {
    let { context: t, command: n, sectionName: s } = e;
    (0, p.A4)(!0, !0), (0, p.SD)(t, !0, !0);
    let a = (0, y.e)(t),
        [o, u] = i.useState(!1),
        d = i.useCallback(
            async (e) => {
                if ("channel" !== t.type) return;
                e.stopPropagation();
                let r = T.A.lastShownEntrypoint();
                try {
                    let { isAuthorized: e } = await (0, E.q)({
                        applicationId: n.applicationId,
                        channel: "channel" === t.type ? t.channel : void 0,
                        commandIntegrationTypes: n.integration_types,
                        appLauncherContext: {
                            entrypoint: r,
                            location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: s,
                        },
                    });
                    e &&
                        (await (0, C.MJ)({
                            command: n,
                            optionValues: {},
                            context: a,
                            sectionName: s,
                            commandOrigin: m.iw.APP_LAUNCHER_APPLICATION_VIEW,
                        }),
                        I.k(S.Se.COMMAND));
                } finally {
                    u(!1);
                }
            },
            [n, t, s, a],
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
function V(e) {
    let { context: t, commands: n, section: i, headerName: s, sectionName: a, children: o } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: x.Zp,
                      children: [(0, r.jsx)(c.Heading, { variant: "heading-sm/semibold", children: s }), o],
                  }),
                  (0, r.jsx)("ul", {
                      className: x.dO,
                      "aria-label": s,
                      children: n.map((e, n) =>
                          e === P
                              ? (0, r.jsx)(G, {}, e + n)
                              : (0, r.jsx)(U, { context: t, command: e, section: i, sectionName: a }, e.id),
                      ),
                  }),
              ],
          });
}
function B(e) {
    let { context: t, application: n, sectionName: s, installOnDemand: a, setHasCommands: o } = e,
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
                allowApplicationState: a,
                installOnDemand: a,
                applicationId: n.id,
            },
            allowFetch: !0,
        }),
        f = c.find((e) => e.id === n.id) ?? null,
        {
            sortOrder: p,
            setSortOrder: m,
            commands: E,
            canSort: g,
        } = (0, N.A)({ sectionId: n.id, commandsByActiveSection: u });
    i.useEffect(() => {
        l(n.id);
    }, [n.id, l]);
    let A = (0, v.A)({ context: t, commands: E, limit: M });
    return (i.useEffect(() => {
        o(E.length > 0);
    }, [o, E]),
    _ || 0 !== E.length)
        ? (0, r.jsxs)("ul", {
              className: x.hQ,
              children: [
                  (0, r.jsx)(V, {
                      context: t,
                      section: f,
                      commands: A,
                      headerName: L.intl.string(L.t.acSE0h),
                      sectionName: s,
                  }),
                  (0, r.jsx)(V, {
                      context: t,
                      section: f,
                      commands: _ ? k : E,
                      headerName: L.intl.string(L.t.DUU9L3),
                      sectionName: s,
                      children: g && (0, r.jsx)(R.A, { sortOrder: p, onSortOptionClick: m }),
                  }),
              ],
          })
        : null;
}
