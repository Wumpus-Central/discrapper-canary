n.d(t, { Z: () => Z }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(140835),
    l = n(246521),
    c = n(442837),
    u = n(481060),
    d = n(911969),
    f = n(607070),
    _ = n(555573),
    p = n(213459),
    h = n(10718),
    m = n(895924),
    g = n(104919),
    E = n(583027),
    b = n(585483),
    y = n(499254),
    O = n(541099),
    v = n(827498),
    I = n(496158),
    T = n(676161),
    S = n(660090),
    A = n(783097),
    N = n(176412),
    C = n(870205),
    R = n(981631),
    P = n(689079),
    w = n(388032),
    D = n(74761),
    L = n(387191);
let x = 5,
    M = "placeholder",
    k = [, , , , ,].fill(M);
function j(e) {
    var t, n;
    let { context: o, command: a, section: l, sectionName: c } = e,
        d = i.useCallback(() => {
            let e = O.Z.entrypoint();
            y.yT(v.ti.COMMAND),
                (0, E.Mo)({
                    command: a,
                    location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                    sectionName: c,
                }),
                "channel" === o.type &&
                    (_.Po({
                        channelId: o.channel.id,
                        command: a,
                        section: l,
                        location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: c,
                        source: e,
                        commandOrigin: m.bB.APPLICATION_LAUNCHER,
                    }),
                    b.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: o.channel.id }));
        }, [o, a, l, c]),
        f = (null != (n = null == (t = a.options) ? void 0 : t.length) ? n : 0) > 0,
        p = i.useMemo(() => (0, N.ae)(a.displayDescription, void 0), [a.displayDescription]),
        h = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: L.commandTextContainer,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: a.displayName,
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            lineClamp: 1,
                            children: p,
                        }),
                    ],
                }),
            [a.displayName, p],
        );
    return (0, r.jsxs)(u.P3F, {
        className: L.command,
        onClick: d,
        children: [
            (0, r.jsx)(u.Rny, {
                className: L.commandFocusBlock,
                children: h,
            }),
            f
                ? (0, r.jsx)(s.F, {})
                : (0, r.jsx)(G, {
                      context: o,
                      command: a,
                      sectionName: c,
                  }),
        ],
    });
}
function U() {
    let e = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
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
        o = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: L.commandTextContainerPlaceholder,
                    children: [
                        (0, r.jsx)("div", {
                            className: D.textPlaceholder,
                            style: t,
                            children: (0, r.jsx)(u.Text, {
                                className: D.hidden,
                                variant: "text-sm/semibold",
                                color: "header-primary",
                                lineClamp: 1,
                                children: "_",
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: D.textPlaceholder,
                            style: n,
                            children: (0, r.jsx)(u.Text, {
                                className: D.hidden,
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
        className: a()(L.command, D.loadingAnimation, { [D.noAnimation]: e }),
        children: o,
    });
}
function G(e) {
    let { context: t, command: n, sectionName: o } = e;
    (0, p.PL)(!0, !0), (0, p.em)(t, !0, !0);
    let a = (0, I.D)(t),
        [s, c] = i.useState(!1),
        d = i.useCallback(
            async (e) => {
                if ("channel" !== t.type) return;
                e.stopPropagation();
                let r = O.Z.lastShownEntrypoint();
                try {
                    let { isAuthorized: e } = await (0, g.L)({
                        applicationId: n.applicationId,
                        channel: "channel" === t.type ? t.channel : void 0,
                        commandIntegrationTypes: n.integration_types,
                        appLauncherContext: {
                            entrypoint: r,
                            location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: o,
                        },
                    });
                    e &&
                        (await (0, A.Y$)({
                            command: n,
                            optionValues: {},
                            context: a,
                            sectionName: o,
                            commandOrigin: m.bB.APP_LAUNCHER_APPLICATION_VIEW,
                        }),
                        y.yT(v.ti.COMMAND));
                } finally {
                    c(!1);
                }
            },
            [n, t, o, a],
        );
    return (0, r.jsx)(u.zxk, {
        type: "submit",
        onClick: d,
        disabled: s,
        variant: "secondary",
        "aria-label": w.intl.formatToPlainString(w.t.UXw6W1, { commandName: n.untranslatedName }),
        text: w.intl.string(w.t.TXNS7e),
        icon: l.U,
        iconPosition: "end",
        size: "md",
    });
}
function B(e) {
    let { context: t, commands: n, section: i, headerName: o, sectionName: a, children: s } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: L.commandListHeader,
                      children: [
                          (0, r.jsx)(u.X6q, {
                              variant: "heading-sm/semibold",
                              children: o,
                          }),
                          s,
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      className: L.commandContainer,
                      "aria-label": o,
                      children: n.map((e, n) =>
                          e === M
                              ? (0, r.jsx)(U, {}, e + n)
                              : (0, r.jsx)(
                                    j,
                                    {
                                        context: t,
                                        command: e,
                                        section: i,
                                        sectionName: a,
                                    },
                                    e.id,
                                ),
                      ),
                  }),
              ],
          });
}
function Z(e) {
    var t;
    let { context: n, application: o, sectionName: a, installOnDemand: s, setHasCommands: l } = e,
        {
            filterSection: c,
            commandsByActiveSection: u,
            sectionDescriptors: f,
            loading: _,
        } = h.wi({
            context: n,
            filters: { commandTypes: [d.yU.CHAT] },
            options: {
                placeholderCount: 0,
                limit: P.tn,
                includeFrecency: !0,
                allowApplicationState: s,
                installOnDemand: s,
                applicationId: o.id,
            },
            allowFetch: !0,
        }),
        p = null != (t = f.find((e) => e.id === o.id)) ? t : null,
        {
            sortOrder: m,
            setSortOrder: g,
            commands: E,
            canSort: b,
        } = (0, S.Z)({
            sectionId: o.id,
            commandsByActiveSection: u,
        });
    i.useEffect(() => {
        c(o.id);
    }, [o.id, c]);
    let y = (0, T.Z)({
        context: n,
        commands: E,
        limit: x,
    });
    return (i.useEffect(() => {
        l(E.length > 0);
    }, [l, E]),
    _ || 0 !== E.length)
        ? (0, r.jsxs)("ul", {
              className: L.contentContainer,
              children: [
                  (0, r.jsx)(B, {
                      context: n,
                      section: p,
                      commands: y,
                      headerName: w.intl.string(w.t.acSE0t),
                      sectionName: a,
                  }),
                  (0, r.jsx)(B, {
                      context: n,
                      section: p,
                      commands: _ ? k : E,
                      headerName: w.intl.string(w.t.DUU9Ly),
                      sectionName: a,
                      children:
                          b &&
                          (0, r.jsx)(C.Z, {
                              sortOrder: m,
                              onSortOptionClick: g,
                          }),
                  }),
              ],
          })
        : null;
}
