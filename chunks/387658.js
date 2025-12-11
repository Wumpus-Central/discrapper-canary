n.d(t, { Z: () => F }), n(388685);
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
    p = n(555573),
    _ = n(213459),
    m = n(10718),
    h = n(895924),
    g = n(104919),
    E = n(583027),
    b = n(585483),
    y = n(499254),
    O = n(541099),
    v = n(827498),
    S = n(496158),
    I = n(676161),
    T = n(660090),
    C = n(783097),
    A = n(176412),
    N = n(870205),
    P = n(981631),
    R = n(689079),
    w = n(388032),
    D = n(589118),
    x = n(450941);
let L = 5,
    j = "placeholder",
    M = [, , , , ,].fill(j);
function k(e) {
    var t, n;
    let { context: a, command: o, section: l, sectionName: c } = e,
        d = i.useCallback(() => {
            let e = O.Z.entrypoint();
            y.y(v.ti.COMMAND),
                (0, E.Mo)({
                    command: o,
                    location: h.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                    sectionName: c,
                }),
                "channel" === a.type &&
                    (p.Po({
                        channelId: a.channel.id,
                        command: o,
                        section: l,
                        location: h.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: c,
                        source: e,
                        commandOrigin: h.bB.APPLICATION_LAUNCHER,
                    }),
                    b.S.dispatch(P.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.channel.id }));
        }, [a, o, l, c]),
        f = (null != (n = null == (t = o.options) ? void 0 : t.length) ? n : 0) > 0,
        _ = i.useMemo(() => (0, A.ae)(o.displayDescription, void 0), [o.displayDescription]),
        m = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: x.commandTextContainer,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            children: o.displayName,
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            lineClamp: 1,
                            children: _,
                        }),
                    ],
                }),
            [o.displayName, _],
        );
    return (0, r.jsxs)(u.P3F, {
        className: x.command,
        onClick: d,
        children: [
            (0, r.jsx)(u.Rny, {
                className: x.commandFocusBlock,
                children: m,
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
                    className: x.commandTextContainerPlaceholder,
                    children: [
                        (0, r.jsx)("div", {
                            className: D.textPlaceholder,
                            style: t,
                            children: (0, r.jsx)(u.Text, {
                                className: D.hidden,
                                variant: "text-sm/semibold",
                                color: "text-strong",
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
        className: o()(x.command, D.loadingAnimation, { [D.noAnimation]: e }),
        children: a,
    });
}
function G(e) {
    let { context: t, command: n, sectionName: a } = e;
    (0, _.PL)(!0, !0), (0, _.em)(t, !0, !0);
    let o = (0, S.D)(t),
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
                            location: h.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: a,
                        },
                    });
                    e &&
                        (await (0, C.Y$)({
                            command: n,
                            optionValues: {},
                            context: o,
                            sectionName: a,
                            commandOrigin: h.bB.APP_LAUNCHER_APPLICATION_VIEW,
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
        "aria-label": w.intl.formatToPlainString(w.t.UXw6W2, { commandName: n.untranslatedName }),
        text: w.intl.string(w.t.TXNS7S),
        icon: l.U,
        iconPosition: "end",
        size: "md",
    });
}
function Z(e) {
    let { context: t, commands: n, section: i, headerName: a, sectionName: o, children: s } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: x.commandListHeader,
                      children: [
                          (0, r.jsx)(u.Heading, {
                              variant: "heading-sm/semibold",
                              children: a,
                          }),
                          s,
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      className: x.commandContainer,
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
                                        sectionName: o,
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
    let { context: n, application: a, sectionName: o, installOnDemand: s, setHasCommands: l } = e,
        {
            filterSection: c,
            commandsByActiveSection: u,
            sectionDescriptors: f,
            loading: p,
        } = m.wi({
            context: n,
            filters: { commandTypes: [d.yU.CHAT] },
            options: {
                placeholderCount: 0,
                limit: R.tn,
                includeFrecency: !0,
                allowApplicationState: s,
                installOnDemand: s,
                applicationId: a.id,
            },
            allowFetch: !0,
        }),
        _ = null != (t = f.find((e) => e.id === a.id)) ? t : null,
        {
            sortOrder: h,
            setSortOrder: g,
            commands: E,
            canSort: b,
        } = (0, T.Z)({
            sectionId: a.id,
            commandsByActiveSection: u,
        });
    i.useEffect(() => {
        c(a.id);
    }, [a.id, c]);
    let y = (0, I.Z)({
        context: n,
        commands: E,
        limit: L,
    });
    return (i.useEffect(() => {
        l(E.length > 0);
    }, [l, E]),
    p || 0 !== E.length)
        ? (0, r.jsxs)("ul", {
              className: x.contentContainer,
              children: [
                  (0, r.jsx)(Z, {
                      context: n,
                      section: _,
                      commands: y,
                      headerName: w.intl.string(w.t.acSE0h),
                      sectionName: o,
                  }),
                  (0, r.jsx)(Z, {
                      context: n,
                      section: _,
                      commands: p ? M : E,
                      headerName: w.intl.string(w.t.DUU9L3),
                      sectionName: o,
                      children:
                          b &&
                          (0, r.jsx)(N.Z, {
                              sortOrder: h,
                              onSortOptionClick: g,
                          }),
                  }),
              ],
          })
        : null;
}
