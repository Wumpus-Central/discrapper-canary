n.d(t, { Z: () => Z }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
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
    C = n(176412),
    N = n(870205),
    R = n(981631),
    P = n(689079),
    D = n(388032),
    w = n(387206),
    L = n(613321);
let x = 5,
    M = "placeholder",
    k = [, , , , ,].fill(M);
function j(e) {
    var t, n;
    let { context: a, command: o, section: l, sectionName: c } = e,
        d = i.useCallback(() => {
            let e = O.Z.entrypoint();
            y.y(v.ti.COMMAND),
                (0, E.Mo)({
                    command: o,
                    location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                    sectionName: c,
                }),
                "channel" === a.type &&
                    (_.Po({
                        channelId: a.channel.id,
                        command: o,
                        section: l,
                        location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: c,
                        source: e,
                        commandOrigin: m.bB.APPLICATION_LAUNCHER,
                    }),
                    b.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.channel.id }));
        }, [a, o, l, c]),
        f = (null != (n = null == (t = o.options) ? void 0 : t.length) ? n : 0) > 0,
        p = i.useMemo(() => (0, C.ae)(o.displayDescription, void 0), [o.displayDescription]),
        h = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: L.commandTextContainer,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: o.displayName,
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            lineClamp: 1,
                            children: p,
                        }),
                    ],
                }),
            [o.displayName, p],
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
                      context: a,
                      command: o,
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
        a = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: L.commandTextContainerPlaceholder,
                    children: [
                        (0, r.jsx)("div", {
                            className: w.textPlaceholder,
                            style: t,
                            children: (0, r.jsx)(u.Text, {
                                className: w.hidden,
                                variant: "text-sm/semibold",
                                color: "header-primary",
                                lineClamp: 1,
                                children: "_",
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: w.textPlaceholder,
                            style: n,
                            children: (0, r.jsx)(u.Text, {
                                className: w.hidden,
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
        className: o()(L.command, w.loadingAnimation, { [w.noAnimation]: e }),
        children: a,
    });
}
function G(e) {
    let { context: t, command: n, sectionName: a } = e;
    (0, p.PL)(!0, !0), (0, p.em)(t, !0, !0);
    let o = (0, I.D)(t),
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
                            sectionName: a,
                        },
                    });
                    e &&
                        (await (0, A.Y$)({
                            command: n,
                            optionValues: {},
                            context: o,
                            sectionName: a,
                            commandOrigin: m.bB.APP_LAUNCHER_APPLICATION_VIEW,
                        }),
                        y.y(v.ti.COMMAND));
                } finally {
                    c(!1);
                }
            },
            [n, t, a, o],
        );
    return (0, r.jsx)(u.Button, {
        type: "submit",
        onClick: d,
        disabled: s,
        variant: "secondary",
        "aria-label": D.intl.formatToPlainString(D.t.UXw6W2, { commandName: n.untranslatedName }),
        text: D.intl.string(D.t.TXNS7S),
        icon: l.U,
        iconPosition: "end",
        size: "md",
    });
}
function B(e) {
    let { context: t, commands: n, section: i, headerName: a, sectionName: o, children: s } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: L.commandListHeader,
                      children: [
                          (0, r.jsx)(u.Heading, {
                              variant: "heading-sm/semibold",
                              children: a,
                          }),
                          s,
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      className: L.commandContainer,
                      "aria-label": a,
                      children: n.map((e, n) =>
                          e === M
                              ? (0, r.jsx)(U, {}, e + n)
                              : (0, r.jsx)(
                                    j,
                                    {
                                        context: t,
                                        command: e,
                                        section: i,
                                        sectionName: o,
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
    let { context: n, application: a, sectionName: o, installOnDemand: s, setHasCommands: l } = e,
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
                applicationId: a.id,
            },
            allowFetch: !0,
        }),
        p = null != (t = f.find((e) => e.id === a.id)) ? t : null,
        {
            sortOrder: m,
            setSortOrder: g,
            commands: E,
            canSort: b,
        } = (0, S.Z)({
            sectionId: a.id,
            commandsByActiveSection: u,
        });
    i.useEffect(() => {
        c(a.id);
    }, [a.id, c]);
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
                      headerName: D.intl.string(D.t.acSE0h),
                      sectionName: o,
                  }),
                  (0, r.jsx)(B, {
                      context: n,
                      section: p,
                      commands: _ ? k : E,
                      headerName: D.intl.string(D.t.DUU9L3),
                      sectionName: o,
                      children:
                          b &&
                          (0, r.jsx)(N.Z, {
                              sortOrder: m,
                              onSortOptionClick: g,
                          }),
                  }),
              ],
          })
        : null;
}
