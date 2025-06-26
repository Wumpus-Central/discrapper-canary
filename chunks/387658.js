n.d(t, { Z: () => H }), n(388685);
var l = n(255367),
    i = n(73800),
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
    x = n(583027),
    b = n(585483),
    g = n(499254),
    j = n(541099),
    N = n(827498),
    C = n(496158),
    E = n(676161),
    P = n(660090),
    O = n(783097),
    A = n(176412),
    I = n(870205),
    _ = n(981631),
    S = n(689079),
    T = n(388032),
    L = n(85884),
    R = n(100260);
let Z = 'placeholder',
    w = [, , , , ,].fill(Z);
function k(e) {
    var t, n;
    let { context: r, command: a, section: s, sectionName: c } = e,
        d = i.useCallback(() => {
            let e = j.Z.entrypoint();
            g.yT(N.ti.COMMAND),
                (0, x.Mo)({
                    command: a,
                    location: v.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                    sectionName: c
                }),
                'channel' === r.type &&
                    (m.Po({
                        channelId: r.channel.id,
                        command: a,
                        section: s,
                        location: v.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: c,
                        source: e,
                        commandOrigin: v.bB.APPLICATION_LAUNCHER
                    }),
                    b.S.dispatch(_.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: r.channel.id }));
        }, [r, a, s, c]),
        p = (null != (n = null == (t = a.options) ? void 0 : t.length) ? n : 0) > 0,
        f = i.useMemo(() => (0, A.ae)(a.displayDescription, void 0), [a.displayDescription]),
        h = i.useMemo(
            () =>
                (0, l.jsxs)('div', {
                    className: R.commandTextContainer,
                    children: [
                        (0, l.jsx)(u.Text, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: a.displayName
                        }),
                        (0, l.jsx)(u.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            lineClamp: 1,
                            children: f
                        })
                    ]
                }),
            [a.displayName, f]
        );
    return (0, l.jsxs)(u.P3F, {
        className: R.command,
        onClick: d,
        children: [
            (0, l.jsx)(u.Rny, {
                className: R.commandFocusBlock,
                children: h
            }),
            p
                ? (0, l.jsx)(o.F, {})
                : (0, l.jsx)(U, {
                      context: r,
                      command: a,
                      sectionName: c
                  })
        ]
    });
}
function M() {
    let e = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
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
                    className: R.commandTextContainerPlaceholder,
                    children: [
                        (0, l.jsx)('div', {
                            className: L.textPlaceholder,
                            style: t,
                            children: (0, l.jsx)(u.Text, {
                                className: L.hidden,
                                variant: 'text-sm/semibold',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: '_'
                            })
                        }),
                        (0, l.jsx)('div', {
                            className: L.textPlaceholder,
                            style: n,
                            children: (0, l.jsx)(u.Text, {
                                className: L.hidden,
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
        className: a()(R.command, L.loadingAnimation, { [L.noAnimation]: e }),
        children: r
    });
}
function U(e) {
    let { context: t, command: n, sectionName: r } = e;
    (0, f.PL)(!0, !0), (0, f.em)(t, !0, !0);
    let a = (0, C.D)(t),
        [o, c] = i.useState(!1),
        d = i.useCallback(
            async (e) => {
                if ('channel' !== t.type) return;
                e.stopPropagation();
                let l = j.Z.lastShownEntrypoint();
                try {
                    let { isAuthorized: e } = await (0, y.L)({
                        applicationId: n.applicationId,
                        channel: 'channel' === t.type ? t.channel : void 0,
                        commandIntegrationTypes: n.integration_types,
                        appLauncherContext: {
                            entrypoint: l,
                            location: v.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: r
                        }
                    });
                    e &&
                        (await (0, O.Y$)({
                            command: n,
                            optionValues: {},
                            context: a,
                            sectionName: r,
                            commandOrigin: v.bB.APP_LAUNCHER_APPLICATION_VIEW
                        }),
                        g.yT(N.ti.COMMAND));
                } finally {
                    c(!1);
                }
            },
            [n, t, r, a]
        );
    return (0, l.jsxs)(u.zxk, {
        type: 'submit',
        onClick: d,
        disabled: o,
        size: u.PhG.ICON,
        color: u.zxk.Colors.PRIMARY,
        className: R.commandSentCTAButton,
        innerClassName: R.commandSentCTAButtonInner,
        'aria-label': T.intl.formatToPlainString(T.t.UXw6W1, { commandName: n.untranslatedName }),
        children: [
            (0, l.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: 'currentColor',
                children: T.intl.string(T.t.TXNS7e)
            }),
            (0, l.jsx)(s.U, {
                size: 'xs',
                color: 'currentColor'
            })
        ]
    });
}
function D(e) {
    let { context: t, commands: n, section: i, headerName: r, sectionName: a, children: o } = e;
    return 0 === n.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      className: R.commandListHeader,
                      children: [
                          (0, l.jsx)(u.X6q, {
                              variant: 'heading-sm/semibold',
                              children: r
                          }),
                          o
                      ]
                  }),
                  (0, l.jsx)('ul', {
                      className: R.commandContainer,
                      'aria-label': r,
                      children: n.map((e, n) =>
                          e === Z
                              ? (0, l.jsx)(M, {}, e + n)
                              : (0, l.jsx)(
                                    k,
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
function H(e) {
    var t;
    let { context: n, application: r, sectionName: a, installOnDemand: o, setHasCommands: s } = e,
        {
            filterSection: c,
            commandsByActiveSection: u,
            sectionDescriptors: p,
            loading: m
        } = h.wi({
            context: n,
            filters: { commandTypes: [d.yU.CHAT] },
            options: {
                placeholderCount: 0,
                limit: S.tn,
                includeFrecency: !0,
                allowApplicationState: o,
                installOnDemand: o,
                applicationId: r.id
            },
            allowFetch: !0
        }),
        f = null != (t = p.find((e) => e.id === r.id)) ? t : null,
        {
            sortOrder: v,
            setSortOrder: y,
            commands: x,
            canSort: b
        } = (0, P.Z)({
            sectionId: r.id,
            commandsByActiveSection: u
        });
    i.useEffect(() => {
        c(r.id);
    }, [r.id, c]);
    let g = (0, E.Z)({
        context: n,
        commands: x,
        limit: 5
    });
    return (i.useEffect(() => {
        s(x.length > 0);
    }, [s, x]),
    m || 0 !== x.length)
        ? (0, l.jsxs)('ul', {
              className: R.contentContainer,
              children: [
                  (0, l.jsx)(D, {
                      context: n,
                      section: f,
                      commands: g,
                      headerName: T.intl.string(T.t.acSE0t),
                      sectionName: a
                  }),
                  (0, l.jsx)(D, {
                      context: n,
                      section: f,
                      commands: m ? w : x,
                      headerName: T.intl.string(T.t.DUU9Ly),
                      sectionName: a,
                      children:
                          b &&
                          (0, l.jsx)(I.Z, {
                              sortOrder: v,
                              onSortOptionClick: y
                          })
                  })
              ]
          })
        : null;
}
