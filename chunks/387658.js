n.d(t, { Z: () => B }), n(388685);
var i = n(255367),
    l = n(73800),
    r = n(120356),
    o = n.n(r),
    a = n(140835),
    c = n(246521),
    s = n(442837),
    u = n(481060),
    d = n(911969),
    p = n(607070),
    m = n(555573),
    f = n(213459),
    h = n(10718),
    b = n(895924),
    _ = n(104919),
    C = n(583027),
    v = n(585483),
    x = n(499254),
    y = n(541099),
    g = n(827498),
    j = n(496158),
    N = n(676161),
    P = n(660090),
    E = n(783097),
    A = n(176412),
    I = n(870205),
    O = n(981631),
    S = n(689079),
    T = n(388032),
    L = n(85884),
    R = n(100260);
let w = 'placeholder',
    k = [, , , , ,].fill(w);
function Z(e) {
    var t, n;
    let { context: r, command: o, section: c, sectionName: s } = e,
        d = l.useCallback(() => {
            let e = y.Z.entrypoint();
            x.yT(g.ti.COMMAND),
                (0, C.Mo)({
                    command: o,
                    location: b.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                    sectionName: s
                }),
                'channel' === r.type &&
                    (m.Po({
                        channelId: r.channel.id,
                        command: o,
                        section: c,
                        location: b.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: s,
                        source: e,
                        commandOrigin: b.bB.APPLICATION_LAUNCHER
                    }),
                    v.S.dispatch(O.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: r.channel.id }));
        }, [r, o, c, s]),
        p = (null != (n = null == (t = o.options) ? void 0 : t.length) ? n : 0) > 0,
        f = l.useMemo(() => (0, A.ae)(o.displayDescription, void 0), [o.displayDescription]),
        h = l.useMemo(
            () =>
                (0, i.jsxs)('div', {
                    className: R.commandTextContainer,
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: o.displayName
                        }),
                        (0, i.jsx)(u.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            lineClamp: 1,
                            children: f
                        })
                    ]
                }),
            [o.displayName, f]
        );
    return (0, i.jsxs)(u.P3F, {
        className: R.command,
        onClick: d,
        children: [
            (0, i.jsx)(u.Rny, {
                className: R.commandFocusBlock,
                children: h
            }),
            p
                ? (0, i.jsx)(a.F, {})
                : (0, i.jsx)(D, {
                      context: r,
                      command: o,
                      sectionName: s
                  })
        ]
    });
}
function M() {
    let e = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        { styleLarge: t, styleSmall: n } = l.useMemo(
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
        r = l.useMemo(
            () =>
                (0, i.jsxs)('div', {
                    className: R.commandTextContainerPlaceholder,
                    children: [
                        (0, i.jsx)('div', {
                            className: L.textPlaceholder,
                            style: t,
                            children: (0, i.jsx)(u.Text, {
                                className: L.hidden,
                                variant: 'text-sm/semibold',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: '_'
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: L.textPlaceholder,
                            style: n,
                            children: (0, i.jsx)(u.Text, {
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
    return (0, i.jsx)('div', {
        className: o()(R.command, L.loadingAnimation, { [L.noAnimation]: e }),
        children: r
    });
}
function D(e) {
    let { context: t, command: n, sectionName: r } = e;
    (0, f.PL)(!0, !0), (0, f.em)(t, !0, !0);
    let o = (0, j.D)(t),
        [a, s] = l.useState(!1),
        d = l.useCallback(
            async (e) => {
                if ('channel' !== t.type) return;
                e.stopPropagation();
                let i = y.Z.lastShownEntrypoint();
                try {
                    let { isAuthorized: e } = await (0, _.L)({
                        applicationId: n.applicationId,
                        channel: 'channel' === t.type ? t.channel : void 0,
                        commandIntegrationTypes: n.integration_types,
                        appLauncherContext: {
                            entrypoint: i,
                            location: b.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: r
                        }
                    });
                    e &&
                        (await (0, E.Y$)({
                            command: n,
                            optionValues: {},
                            context: o,
                            sectionName: r,
                            commandOrigin: b.bB.APP_LAUNCHER_APPLICATION_VIEW
                        }),
                        x.yT(g.ti.COMMAND));
                } finally {
                    s(!1);
                }
            },
            [n, t, r, o]
        );
    return (0, i.jsxs)(u.zxk, {
        type: 'submit',
        onClick: d,
        disabled: a,
        size: u.PhG.ICON,
        color: u.zxk.Colors.PRIMARY,
        className: R.commandSentCTAButton,
        innerClassName: R.commandSentCTAButtonInner,
        'aria-label': T.intl.formatToPlainString(T.t.UXw6W1, { commandName: n.untranslatedName }),
        children: [
            (0, i.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: 'currentColor',
                children: T.intl.string(T.t.TXNS7e)
            }),
            (0, i.jsx)(c.U, {
                size: 'xs',
                color: 'currentColor'
            })
        ]
    });
}
function U(e) {
    let { context: t, commands: n, section: l, headerName: r, sectionName: o, children: a } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: R.commandListHeader,
                      children: [
                          (0, i.jsx)(u.X6q, {
                              variant: 'heading-sm/semibold',
                              children: r
                          }),
                          a
                      ]
                  }),
                  (0, i.jsx)('ul', {
                      className: R.commandContainer,
                      'aria-label': r,
                      children: n.map((e, n) =>
                          e === w
                              ? (0, i.jsx)(M, {}, e + n)
                              : (0, i.jsx)(
                                    Z,
                                    {
                                        context: t,
                                        command: e,
                                        section: l,
                                        sectionName: o
                                    },
                                    e.id
                                )
                      )
                  })
              ]
          });
}
function B(e) {
    var t;
    let { context: n, application: r, sectionName: o, installOnDemand: a, setHasCommands: c } = e,
        {
            filterSection: s,
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
                allowApplicationState: a,
                installOnDemand: a,
                applicationId: r.id
            },
            allowFetch: !0
        }),
        f = null != (t = p.find((e) => e.id === r.id)) ? t : null,
        {
            sortOrder: b,
            setSortOrder: _,
            commands: C,
            canSort: v
        } = (0, P.Z)({
            sectionId: r.id,
            commandsByActiveSection: u
        });
    l.useEffect(() => {
        s(r.id);
    }, [r.id, s]);
    let x = (0, N.Z)({
        context: n,
        commands: C,
        limit: 5
    });
    return (l.useEffect(() => {
        c(C.length > 0);
    }, [c, C]),
    m || 0 !== C.length)
        ? (0, i.jsxs)('ul', {
              className: R.contentContainer,
              children: [
                  (0, i.jsx)(U, {
                      context: n,
                      section: f,
                      commands: x,
                      headerName: T.intl.string(T.t.acSE0t),
                      sectionName: o
                  }),
                  (0, i.jsx)(U, {
                      context: n,
                      section: f,
                      commands: m ? k : C,
                      headerName: T.intl.string(T.t.DUU9Ly),
                      sectionName: o,
                      children:
                          v &&
                          (0, i.jsx)(I.Z, {
                              sortOrder: b,
                              onSortOptionClick: _
                          })
                  })
              ]
          })
        : null;
}
