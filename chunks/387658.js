n.d(t, { Z: () => H }), n(388685);
var i = n(951288),
    l = n(647438),
    r = n(120356),
    a = n.n(r),
    o = n(140835),
    s = n(246521),
    c = n(442837),
    u = n(481060),
    d = n(911969),
    p = n(607070),
    m = n(555573),
    f = n(213459),
    h = n(10718),
    v = n(895924),
    y = n(104919),
    g = n(583027),
    x = n(585483),
    b = n(499254),
    N = n(541099),
    j = n(827498),
    C = n(496158),
    E = n(676161),
    P = n(660090),
    A = n(783097),
    _ = n(176412),
    O = n(870205),
    I = n(981631),
    S = n(689079),
    T = n(388032),
    L = n(202874),
    R = n(698342);
let Z = "placeholder",
    w = [, , , , ,].fill(Z);
function k(e) {
    var t, n;
    let { context: r, command: a, section: s, sectionName: c } = e,
        d = l.useCallback(() => {
            let e = N.Z.entrypoint();
            b.yT(j.ti.COMMAND),
                (0, g.Mo)({
                    command: a,
                    location: v.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                    sectionName: c,
                }),
                "channel" === r.type &&
                    (m.Po({
                        channelId: r.channel.id,
                        command: a,
                        section: s,
                        location: v.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: c,
                        source: e,
                        commandOrigin: v.bB.APPLICATION_LAUNCHER,
                    }),
                    x.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: r.channel.id }));
        }, [r, a, s, c]),
        p = (null != (n = null == (t = a.options) ? void 0 : t.length) ? n : 0) > 0,
        f = l.useMemo(() => (0, _.ae)(a.displayDescription, void 0), [a.displayDescription]),
        h = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: R.commandTextContainer,
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: a.displayName,
                        }),
                        (0, i.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            lineClamp: 1,
                            children: f,
                        }),
                    ],
                }),
            [a.displayName, f],
        );
    return (0, i.jsxs)(u.P3F, {
        className: R.command,
        onClick: d,
        children: [
            (0, i.jsx)(u.Rny, {
                className: R.commandFocusBlock,
                children: h,
            }),
            p
                ? (0, i.jsx)(o.F, {})
                : (0, i.jsx)(U, {
                      context: r,
                      command: a,
                      sectionName: c,
                  }),
        ],
    });
}
function M() {
    let e = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        { styleLarge: t, styleSmall: n } = l.useMemo(
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
        r = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: R.commandTextContainerPlaceholder,
                    children: [
                        (0, i.jsx)("div", {
                            className: L.textPlaceholder,
                            style: t,
                            children: (0, i.jsx)(u.Text, {
                                className: L.hidden,
                                variant: "text-sm/semibold",
                                color: "header-primary",
                                lineClamp: 1,
                                children: "_",
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: L.textPlaceholder,
                            style: n,
                            children: (0, i.jsx)(u.Text, {
                                className: L.hidden,
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
    return (0, i.jsx)("div", {
        className: a()(R.command, L.loadingAnimation, { [L.noAnimation]: e }),
        children: r,
    });
}
function U(e) {
    let { context: t, command: n, sectionName: r } = e;
    (0, f.PL)(!0, !0), (0, f.em)(t, !0, !0);
    let a = (0, C.D)(t),
        [o, c] = l.useState(!1),
        d = l.useCallback(
            async (e) => {
                if ("channel" !== t.type) return;
                e.stopPropagation();
                let i = N.Z.lastShownEntrypoint();
                try {
                    let { isAuthorized: e } = await (0, y.L)({
                        applicationId: n.applicationId,
                        channel: "channel" === t.type ? t.channel : void 0,
                        commandIntegrationTypes: n.integration_types,
                        appLauncherContext: {
                            entrypoint: i,
                            location: v.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: r,
                        },
                    });
                    e &&
                        (await (0, A.Y$)({
                            command: n,
                            optionValues: {},
                            context: a,
                            sectionName: r,
                            commandOrigin: v.bB.APP_LAUNCHER_APPLICATION_VIEW,
                        }),
                        b.yT(j.ti.COMMAND));
                } finally {
                    c(!1);
                }
            },
            [n, t, r, a],
        );
    return (0, i.jsx)(u.Button, {
        type: "submit",
        onClick: d,
        disabled: o,
        variant: "secondary",
        "aria-label": T.intl.formatToPlainString(T.t.UXw6W2, { commandName: n.untranslatedName }),
        text: T.intl.string(T.t.TXNS7S),
        icon: s.U,
        iconPosition: "end",
        size: "md",
    });
}
function D(e) {
    let { context: t, commands: n, section: l, headerName: r, sectionName: a, children: o } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: R.commandListHeader,
                      children: [
                          (0, i.jsx)(u.Heading, {
                              variant: "heading-sm/semibold",
                              children: r,
                          }),
                          o,
                      ],
                  }),
                  (0, i.jsx)("ul", {
                      className: R.commandContainer,
                      "aria-label": r,
                      children: n.map((e, n) =>
                          e === Z
                              ? (0, i.jsx)(M, {}, e + n)
                              : (0, i.jsx)(
                                    k,
                                    {
                                        context: t,
                                        command: e,
                                        section: l,
                                        sectionName: a,
                                    },
                                    e.id,
                                ),
                      ),
                  }),
              ],
          });
}
function H(e) {
    var t;
    let { context: n, application: r, sectionName: a, installOnDemand: o, setHasCommands: s } = e,
        {
            filterSection: c,
            commandsByActiveSection: u,
            sectionDescriptors: p,
            loading: m,
        } = h.wi({
            context: n,
            filters: { commandTypes: [d.yU.CHAT] },
            options: {
                placeholderCount: 0,
                limit: S.tn,
                includeFrecency: !0,
                allowApplicationState: o,
                installOnDemand: o,
                applicationId: r.id,
            },
            allowFetch: !0,
        }),
        f = null != (t = p.find((e) => e.id === r.id)) ? t : null,
        {
            sortOrder: v,
            setSortOrder: y,
            commands: g,
            canSort: x,
        } = (0, P.Z)({
            sectionId: r.id,
            commandsByActiveSection: u,
        });
    l.useEffect(() => {
        c(r.id);
    }, [r.id, c]);
    let b = (0, E.Z)({
        context: n,
        commands: g,
        limit: 5,
    });
    return (l.useEffect(() => {
        s(g.length > 0);
    }, [s, g]),
    m || 0 !== g.length)
        ? (0, i.jsxs)("ul", {
              className: R.contentContainer,
              children: [
                  (0, i.jsx)(D, {
                      context: n,
                      section: f,
                      commands: b,
                      headerName: T.intl.string(T.t.acSE0h),
                      sectionName: a,
                  }),
                  (0, i.jsx)(D, {
                      context: n,
                      section: f,
                      commands: m ? w : g,
                      headerName: T.intl.string(T.t.DUU9L3),
                      sectionName: a,
                      children:
                          x &&
                          (0, i.jsx)(O.Z, {
                              sortOrder: v,
                              onSortOptionClick: y,
                          }),
                  }),
              ],
          })
        : null;
}
