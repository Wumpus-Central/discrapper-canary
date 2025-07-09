(n.d(t, { Z: () => V }), n(388685));
var l = n(255367),
    i = n(73800),
    r = n(120356),
    a = n.n(r),
    o = n(140835),
    s = n(246521),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    p = n(911969),
    m = n(607070),
    f = n(555573),
    h = n(213459),
    v = n(10718),
    y = n(895924),
    x = n(104919),
    b = n(583027),
    g = n(585483),
    j = n(499254),
    N = n(541099),
    C = n(827498),
    E = n(496158),
    P = n(676161),
    O = n(660090),
    A = n(783097),
    I = n(176412),
    _ = n(870205),
    S = n(981631),
    T = n(689079),
    L = n(388032),
    R = n(85884),
    Z = n(100260);
let w = 'placeholder',
    k = [, , , , ,].fill(w);
function M(e) {
    var t, n;
    let { context: r, command: a, section: s, sectionName: c } = e,
        u = i.useCallback(() => {
            let e = N.Z.entrypoint();
            (j.yT(C.ti.COMMAND),
                (0, b.Mo)({
                    command: a,
                    location: y.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                    sectionName: c
                }),
                'channel' === r.type &&
                    (f.Po({
                        channelId: r.channel.id,
                        command: a,
                        section: s,
                        location: y.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: c,
                        source: e,
                        commandOrigin: y.bB.APPLICATION_LAUNCHER
                    }),
                    g.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: r.channel.id })));
        }, [r, a, s, c]),
        p = (null != (n = null == (t = a.options) ? void 0 : t.length) ? n : 0) > 0,
        m = i.useMemo(() => (0, I.ae)(a.displayDescription, void 0), [a.displayDescription]),
        h = i.useMemo(
            () =>
                (0, l.jsxs)('div', {
                    className: Z.commandTextContainer,
                    children: [
                        (0, l.jsx)(d.Text, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: a.displayName
                        }),
                        (0, l.jsx)(d.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            lineClamp: 1,
                            children: m
                        })
                    ]
                }),
            [a.displayName, m]
        );
    return (0, l.jsxs)(d.P3F, {
        className: Z.command,
        onClick: u,
        children: [
            (0, l.jsx)(d.Rny, {
                className: Z.commandFocusBlock,
                children: h
            }),
            p
                ? (0, l.jsx)(o.F, {})
                : (0, l.jsx)(D, {
                      context: r,
                      command: a,
                      sectionName: c
                  })
        ]
    });
}
function U() {
    let e = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        { styleLarge: t, styleSmall: n } = i.useMemo(
            () => ({
                styleLarge: {
                    width: ''.concat(10 + 20 * Math.random(), '%'),
                    height: 'auto'
                },
                styleSmall: {
                    width: ''.concat(30 + 60 * Math.random(), '%'),
                    height: 'auto'
                }
            }),
            []
        ),
        r = i.useMemo(
            () =>
                (0, l.jsxs)('div', {
                    className: Z.commandTextContainerPlaceholder,
                    children: [
                        (0, l.jsx)('div', {
                            className: R.textPlaceholder,
                            style: t,
                            children: (0, l.jsx)(d.Text, {
                                className: R.hidden,
                                variant: 'text-sm/semibold',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: '_'
                            })
                        }),
                        (0, l.jsx)('div', {
                            className: R.textPlaceholder,
                            style: n,
                            children: (0, l.jsx)(d.Text, {
                                className: R.hidden,
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                lineClamp: 1,
                                children: '_'
                            })
                        })
                    ]
                }),
            [t, n]
        );
    return (0, l.jsx)('div', {
        className: a()(Z.command, R.loadingAnimation, { [R.noAnimation]: e }),
        children: r
    });
}
function D(e) {
    let { context: t, command: n, sectionName: r } = e;
    ((0, h.PL)(!0, !0), (0, h.em)(t, !0, !0));
    let a = (0, E.D)(t),
        [o, c] = i.useState(!1),
        p = i.useCallback(
            async (e) => {
                if ('channel' !== t.type) return;
                e.stopPropagation();
                let l = N.Z.lastShownEntrypoint();
                try {
                    let { isAuthorized: e } = await (0, x.L)({
                        applicationId: n.applicationId,
                        channel: 'channel' === t.type ? t.channel : void 0,
                        commandIntegrationTypes: n.integration_types,
                        appLauncherContext: {
                            entrypoint: l,
                            location: y.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: r
                        }
                    });
                    e &&
                        (await (0, A.Y$)({
                            command: n,
                            optionValues: {},
                            context: a,
                            sectionName: r,
                            commandOrigin: y.bB.APP_LAUNCHER_APPLICATION_VIEW
                        }),
                        j.yT(C.ti.COMMAND));
                } finally {
                    c(!1);
                }
            },
            [n, t, r, a]
        );
    return (0, l.jsxs)(u.zx, {
        type: 'submit',
        onClick: p,
        disabled: o,
        size: u.Ph.ICON,
        color: u.zx.Colors.PRIMARY,
        className: Z.commandSentCTAButton,
        innerClassName: Z.commandSentCTAButtonInner,
        'aria-label': L.intl.formatToPlainString(L.t.UXw6W1, { commandName: n.untranslatedName }),
        children: [
            (0, l.jsx)(d.Text, {
                variant: 'text-sm/medium',
                color: 'currentColor',
                children: L.intl.string(L.t.TXNS7e)
            }),
            (0, l.jsx)(s.U, {
                size: 'xs',
                color: 'currentColor'
            })
        ]
    });
}
function H(e) {
    let { context: t, commands: n, section: i, headerName: r, sectionName: a, children: o } = e;
    return 0 === n.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      className: Z.commandListHeader,
                      children: [
                          (0, l.jsx)(d.X6q, {
                              variant: 'heading-sm/semibold',
                              children: r
                          }),
                          o
                      ]
                  }),
                  (0, l.jsx)('ul', {
                      className: Z.commandContainer,
                      'aria-label': r,
                      children: n.map((e, n) =>
                          e === w
                              ? (0, l.jsx)(U, {}, e + n)
                              : (0, l.jsx)(
                                    M,
                                    {
                                        context: t,
                                        command: e,
                                        section: i,
                                        sectionName: a
                                    },
                                    e.id
                                )
                      )
                  })
              ]
          });
}
function V(e) {
    var t;
    let { context: n, application: r, sectionName: a, installOnDemand: o, setHasCommands: s } = e,
        {
            filterSection: c,
            commandsByActiveSection: u,
            sectionDescriptors: d,
            loading: m
        } = v.wi({
            context: n,
            filters: { commandTypes: [p.yU.CHAT] },
            options: {
                placeholderCount: 0,
                limit: T.tn,
                includeFrecency: !0,
                allowApplicationState: o,
                installOnDemand: o,
                applicationId: r.id
            },
            allowFetch: !0
        }),
        f = null != (t = d.find((e) => e.id === r.id)) ? t : null,
        {
            sortOrder: h,
            setSortOrder: y,
            commands: x,
            canSort: b
        } = (0, O.Z)({
            sectionId: r.id,
            commandsByActiveSection: u
        });
    i.useEffect(() => {
        c(r.id);
    }, [r.id, c]);
    let g = (0, P.Z)({
        context: n,
        commands: x,
        limit: 5
    });
    return (i.useEffect(() => {
        s(x.length > 0);
    }, [s, x]),
    m || 0 !== x.length)
        ? (0, l.jsxs)('ul', {
              className: Z.contentContainer,
              children: [
                  (0, l.jsx)(H, {
                      context: n,
                      section: f,
                      commands: g,
                      headerName: L.intl.string(L.t.acSE0t),
                      sectionName: a
                  }),
                  (0, l.jsx)(H, {
                      context: n,
                      section: f,
                      commands: m ? k : x,
                      headerName: L.intl.string(L.t.DUU9Ly),
                      sectionName: a,
                      children:
                          b &&
                          (0, l.jsx)(_.Z, {
                              sortOrder: h,
                              onSortOptionClick: y
                          })
                  })
              ]
          })
        : null;
}
