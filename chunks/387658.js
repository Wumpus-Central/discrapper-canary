n.d(t, { Z: () => B }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(140835),
    c = n(246521),
    s = n(442837),
    u = n(481060),
    d = n(911969),
    p = n(607070),
    m = n(555573),
    f = n(213459),
    h = n(10718),
    b = n(895924),
    C = n(583027),
    x = n(585483),
    _ = n(499254),
    y = n(541099),
    v = n(827498),
    N = n(496158),
    g = n(676161),
    j = n(660090),
    P = n(783097),
    E = n(46332),
    A = n(176412),
    I = n(870205),
    O = n(981631),
    S = n(689079),
    T = n(388032),
    L = n(85884),
    w = n(100260);
let R = 'placeholder',
    k = [, , , , ,].fill(R);
function Z(e) {
    var t, n;
    let { context: l, command: a, section: c, sectionName: s } = e,
        d = r.useCallback(() => {
            let e = y.Z.entrypoint();
            _.yT(v.ti.COMMAND),
                (0, C.Mo)({
                    command: a,
                    location: b.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                    sectionName: s
                }),
                'channel' === l.type &&
                    (m.Po({
                        channelId: l.channel.id,
                        command: a,
                        section: c,
                        location: b.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: s,
                        source: e,
                        commandOrigin: b.bB.APPLICATION_LAUNCHER
                    }),
                    x.S.dispatch(O.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.channel.id }));
        }, [l, a, c, s]),
        p = (null != (n = null == (t = a.options) ? void 0 : t.length) ? n : 0) > 0,
        f = r.useMemo(() => (0, A.ae)(a.displayDescription, void 0), [a.displayDescription]),
        h = r.useMemo(
            () =>
                (0, i.jsxs)('div', {
                    className: w.commandTextContainer,
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: a.displayName
                        }),
                        (0, i.jsx)(u.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            lineClamp: 1,
                            children: f
                        })
                    ]
                }),
            [a.displayName, f]
        );
    return (0, i.jsxs)(u.P3F, {
        className: w.command,
        onClick: d,
        children: [
            (0, i.jsx)(u.Rny, {
                className: w.commandFocusBlock,
                children: h
            }),
            p
                ? (0, i.jsx)(o.F, {})
                : (0, i.jsx)(D, {
                      context: l,
                      command: a,
                      sectionName: s
                  })
        ]
    });
}
function M() {
    let e = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        { styleLarge: t, styleSmall: n } = r.useMemo(
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
        l = r.useMemo(
            () =>
                (0, i.jsxs)('div', {
                    className: w.commandTextContainerPlaceholder,
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
        className: a()(w.command, L.loadingAnimation, { [L.noAnimation]: e }),
        children: l
    });
}
function D(e) {
    let { context: t, command: n, sectionName: l } = e;
    (0, f.PL)(!0, !0), (0, f.em)(t, !0, !0);
    let a = (0, N.D)(t),
        [o, s] = r.useState(!1),
        d = r.useCallback(
            async (e) => {
                if ('channel' !== t.type) return;
                e.stopPropagation();
                let i = y.Z.lastShownEntrypoint();
                try {
                    (await (0, E.L)({
                        applicationId: n.applicationId,
                        channel: 'channel' === t.type ? t.channel : void 0,
                        sectionName: l,
                        location: b.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        entrypoint: i,
                        commandIntegrationTypes: n.integration_types
                    })) &&
                        (await (0, P.Y$)({
                            command: n,
                            optionValues: {},
                            context: a,
                            sectionName: l,
                            commandOrigin: b.bB.APP_LAUNCHER_APPLICATION_VIEW
                        }),
                        _.yT(v.ti.COMMAND));
                } finally {
                    s(!1);
                }
            },
            [n, t, l, a]
        );
    return (0, i.jsxs)(u.zxk, {
        type: 'submit',
        onClick: d,
        disabled: o,
        size: u.PhG.ICON,
        color: u.zxk.Colors.PRIMARY,
        className: w.commandSentCTAButton,
        innerClassName: w.commandSentCTAButtonInner,
        'aria-label': T.NW.formatToPlainString(T.t.UXw6W1, { commandName: n.untranslatedName }),
        children: [
            (0, i.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: 'currentColor',
                children: T.NW.string(T.t.TXNS7e)
            }),
            (0, i.jsx)(c.U, {
                size: 'xs',
                color: 'currentColor'
            })
        ]
    });
}
function W(e) {
    let { context: t, commands: n, section: r, headerName: l, sectionName: a, children: o } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: w.commandListHeader,
                      children: [
                          (0, i.jsx)(u.X6q, {
                              variant: 'heading-sm/semibold',
                              children: l
                          }),
                          o
                      ]
                  }),
                  (0, i.jsx)('ul', {
                      className: w.commandContainer,
                      'aria-label': l,
                      children: n.map((e, n) =>
                          e === R
                              ? (0, i.jsx)(M, {}, e + n)
                              : (0, i.jsx)(
                                    Z,
                                    {
                                        context: t,
                                        command: e,
                                        section: r,
                                        sectionName: a
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
    let { context: n, application: l, sectionName: a, installOnDemand: o, setHasCommands: c } = e,
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
                allowApplicationState: o,
                installOnDemand: o,
                applicationId: l.id
            },
            allowFetch: !0
        }),
        f = null != (t = p.find((e) => e.id === l.id)) ? t : null,
        {
            sortOrder: b,
            setSortOrder: C,
            commands: x,
            canSort: _
        } = (0, j.Z)({
            sectionId: l.id,
            commandsByActiveSection: u
        });
    r.useEffect(() => {
        s(l.id);
    }, [l.id, s]);
    let y = (0, g.Z)({
        context: n,
        commands: x,
        limit: 5
    });
    return (r.useEffect(() => {
        c(x.length > 0);
    }, [c, x]),
    m || 0 !== x.length)
        ? (0, i.jsxs)('ul', {
              className: w.contentContainer,
              children: [
                  (0, i.jsx)(W, {
                      context: n,
                      section: f,
                      commands: y,
                      headerName: T.NW.string(T.t.acSE0t),
                      sectionName: a
                  }),
                  (0, i.jsx)(W, {
                      context: n,
                      section: f,
                      commands: m ? k : x,
                      headerName: T.NW.string(T.t.DUU9Ly),
                      sectionName: a,
                      children:
                          _ &&
                          (0, i.jsx)(I.Z, {
                              sortOrder: b,
                              onSortOptionClick: C
                          })
                  })
              ]
          })
        : null;
}
