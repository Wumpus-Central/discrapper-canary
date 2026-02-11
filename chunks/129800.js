"use strict";
n.d(t, { A: () => j });
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
    h = n(264322),
    p = n(842209),
    g = n(392054),
    E = n(972995),
    A = n(390756),
    I = n(203982),
    T = n(211401),
    y = n(989837),
    S = n(500049),
    v = n(555045),
    C = n(455440),
    b = n(720371),
    N = n(735991),
    R = n(297486),
    O = n(956522),
    D = n(652215),
    L = n(73510),
    w = n(985018),
    x = n(86e3),
    P = n(370092);
let M = 5,
    k = "placeholder",
    U = [, , , , ,].fill(k);
function G(e) {
    let { context: t, command: n, section: a, sectionName: s } = e,
        l = i.useCallback(() => {
            let e = y.A.entrypoint();
            T.k(S.Se.COMMAND),
                (0, A.Mv)({ command: n, location: g.Oh.APP_LAUNCHER_APPLICATION_VIEW, sectionName: s }),
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
                    I._.dispatch(D.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id }));
        }, [t, n, a, s]),
        u = (n.options?.length ?? 0) > 0,
        d = i.useMemo(() => (0, R.SD)(n.displayDescription, void 0), [n.displayDescription]),
        _ = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: P.sd,
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
        className: P.G5,
        onClick: l,
        children: [
            (0, r.jsx)(c.M1G, { className: P.fg, children: _ }),
            u ? (0, r.jsx)(o._, {}) : (0, r.jsx)(V, { context: t, command: n, sectionName: s }),
        ],
    });
}
function F() {
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
                    className: P.Vc,
                    children: [
                        (0, r.jsx)("div", {
                            className: x.jC,
                            style: t,
                            children: (0, r.jsx)(c.Text, {
                                className: x.R,
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: "_",
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: x.jC,
                            style: n,
                            children: (0, r.jsx)(c.Text, {
                                className: x.R,
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
    return (0, r.jsx)("div", { className: s()(P.G5, x.NX, { [x.cb]: e }), children: a });
}
function V(e) {
    let { context: t, command: n, sectionName: a } = e;
    (0, h.A4)(!0, !0), (0, h.SD)(t, !0, !0);
    let s = (0, v.e)(t),
        [o, u] = i.useState(!1),
        d = i.useCallback(
            async (e) => {
                if ("channel" !== t.type) return;
                e.stopPropagation();
                let r = y.A.lastShownEntrypoint();
                try {
                    let { isAuthorized: e } = await (0, E.q)({
                        applicationId: n.applicationId,
                        channel: "channel" === t.type ? t.channel : void 0,
                        commandIntegrationTypes: n.integration_types,
                        appLauncherContext: {
                            entrypoint: r,
                            location: g.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: a,
                        },
                    });
                    e &&
                        (await (0, N.MJ)({
                            command: n,
                            optionValues: {},
                            context: s,
                            sectionName: a,
                            commandOrigin: g.iw.APP_LAUNCHER_APPLICATION_VIEW,
                        }),
                        T.k(S.Se.COMMAND));
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
        "aria-label": w.intl.formatToPlainString(w.t.UXw6W2, { commandName: n.untranslatedName }),
        text: w.intl.string(w.t.TXNS7S),
        icon: l.l,
        iconPosition: "end",
        size: "md",
    });
}
function B(e) {
    let { context: t, commands: n, section: i, headerName: a, sectionName: s, children: o } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: P.Zp,
                      children: [(0, r.jsx)(c.Heading, { variant: "heading-sm/semibold", children: a }), o],
                  }),
                  (0, r.jsx)("ul", {
                      className: P.dO,
                      "aria-label": a,
                      children: n.map((e, n) =>
                          e === k
                              ? (0, r.jsx)(F, {}, e + n)
                              : (0, r.jsx)(G, { context: t, command: e, section: i, sectionName: s }, e.id),
                      ),
                  }),
              ],
          });
}
function j(e) {
    let { context: t, application: n, sectionName: a, installOnDemand: s, setHasCommands: o } = e,
        {
            filterSection: l,
            commandsByActiveSection: u,
            sectionDescriptors: c,
            loading: _,
        } = p.cu({
            context: t,
            filters: { commandTypes: [d.kc.CHAT] },
            options: {
                placeholderCount: 0,
                limit: L.Hi,
                includeFrecency: !0,
                allowApplicationState: s,
                installOnDemand: s,
                applicationId: n.id,
            },
            allowFetch: !0,
        }),
        f = c.find((e) => e.id === n.id) ?? null,
        {
            sortOrder: h,
            setSortOrder: g,
            commands: E,
            canSort: A,
        } = (0, b.A)({ sectionId: n.id, commandsByActiveSection: u });
    i.useEffect(() => {
        l(n.id);
    }, [n.id, l]);
    let I = (0, C.A)({ context: t, commands: E, limit: M });
    return (i.useEffect(() => {
        o(E.length > 0);
    }, [o, E]),
    _ || 0 !== E.length)
        ? (0, r.jsxs)("ul", {
              className: P.hQ,
              children: [
                  (0, r.jsx)(B, {
                      context: t,
                      section: f,
                      commands: I,
                      headerName: w.intl.string(w.t.acSE0h),
                      sectionName: a,
                  }),
                  (0, r.jsx)(B, {
                      context: t,
                      section: f,
                      commands: _ ? U : E,
                      headerName: w.intl.string(w.t.DUU9L3),
                      sectionName: a,
                      children: A && (0, r.jsx)(O.A, { sortOrder: h, onSortOptionClick: g }),
                  }),
              ],
          })
        : null;
}
