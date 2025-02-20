n.d(t, { Z: () => W }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(140835),
    s = n(246521),
    c = n(442837),
    u = n(481060),
    d = n(911969),
    m = n(607070),
    p = n(555573),
    h = n(213459),
    f = n(10718),
    v = n(895924),
    N = n(583027),
    x = n(585483),
    y = n(499254),
    b = n(541099),
    E = n(827498),
    C = n(496158),
    j = n(183634),
    g = n(660090),
    P = n(783097),
    A = n(46332),
    O = n(176412),
    I = n(870205),
    _ = n(981631),
    S = n(689079),
    T = n(388032),
    L = n(116965),
    R = n(81668);
let M = 'placeholder',
    Z = [, , , , ,].fill(M);
function k(e) {
    var t, n;
    let { context: r, command: o, section: s, sectionName: c } = e,
        d = l.useCallback(() => {
            let e = b.Z.entrypoint();
            y.yT(E.ti.COMMAND),
                (0, N.Mo)({
                    command: o,
                    location: v.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                    sectionName: c
                }),
                'channel' === r.type &&
                    (p.Po({
                        channelId: r.channel.id,
                        command: o,
                        section: s,
                        location: v.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: c,
                        source: e,
                        commandOrigin: v.bB.APPLICATION_LAUNCHER
                    }),
                    x.S.dispatch(_.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: r.channel.id }));
        }, [r, o, s, c]),
        m = (null !== (n = null === (t = o.options) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0,
        h = l.useMemo(() => (0, O.ae)(o.displayDescription, void 0), [o.displayDescription]),
        f = l.useMemo(
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
                            children: h
                        })
                    ]
                }),
            [o.displayName, h]
        );
    return (0, i.jsxs)(u.P3F, {
        className: R.command,
        onClick: d,
        children: [
            (0, i.jsx)(u.Rny, {
                className: R.commandFocusBlock,
                children: f
            }),
            m
                ? (0, i.jsx)(a.F, {})
                : (0, i.jsx)(U, {
                      context: r,
                      command: o,
                      sectionName: c
                  })
        ]
    });
}
function w() {
    let e = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
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
function U(e) {
    let { context: t, command: n, sectionName: r } = e;
    (0, h.PL)(!0, !0), (0, h.em)(t, !0, !0);
    let o = (0, C.D)(t),
        [a, c] = l.useState(!1),
        d = l.useCallback(
            async (e) => {
                if ('channel' !== t.type) return;
                e.stopPropagation();
                let i = b.Z.lastShownEntrypoint();
                try {
                    (await (0, A.L)({
                        applicationId: n.applicationId,
                        channel: t.channel,
                        sectionName: r,
                        location: v.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        entrypoint: i,
                        commandIntegrationTypes: n.integration_types
                    })) &&
                        (await (0, P.Y$)({
                            command: n,
                            optionValues: {},
                            context: o,
                            sectionName: r,
                            commandOrigin: v.bB.APP_LAUNCHER_APPLICATION_VIEW
                        }),
                        y.yT(E.ti.COMMAND));
                } finally {
                    c(!1);
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
        'aria-label': T.NW.formatToPlainString(T.t.UXw6W1, { commandName: n.untranslatedName }),
        children: [
            (0, i.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: 'currentColor',
                children: T.NW.string(T.t.TXNS7e)
            }),
            (0, i.jsx)(s.U, {
                size: 'xs',
                color: 'currentColor'
            })
        ]
    });
}
function D(e) {
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
                          e === M
                              ? (0, i.jsx)(w, {}, e + n)
                              : (0, i.jsx)(
                                    k,
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
function W(e) {
    var t;
    let { context: n, application: r, sectionName: o, installOnDemand: a, setHasCommands: s } = e,
        {
            filterSection: c,
            commandsByActiveSection: u,
            sectionDescriptors: m,
            loading: p
        } = f.wi({
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
        h = null !== (t = m.find((e) => e.id === r.id)) && void 0 !== t ? t : null,
        {
            sortOrder: v,
            setSortOrder: N,
            commands: x,
            canSort: y
        } = (0, g.Z)({
            sectionId: r.id,
            commandsByActiveSection: u
        });
    l.useEffect(() => {
        c(r.id);
    }, [r.id, c]);
    let b = (0, j.Z)({
        context: n,
        commands: x,
        limit: 5
    });
    return (l.useEffect(() => {
        s(x.length > 0);
    }, [s, x]),
    p || 0 !== x.length)
        ? (0, i.jsxs)('ul', {
              className: R.contentContainer,
              children: [
                  (0, i.jsx)(D, {
                      context: n,
                      section: h,
                      commands: b,
                      headerName: T.NW.string(T.t.acSE0t),
                      sectionName: o
                  }),
                  (0, i.jsx)(D, {
                      context: n,
                      section: h,
                      commands: p ? Z : x,
                      headerName: T.NW.string(T.t.DUU9Ly),
                      sectionName: o,
                      children:
                          y &&
                          (0, i.jsx)(I.Z, {
                              sortOrder: v,
                              onSortOptionClick: N
                          })
                  })
              ]
          })
        : null;
}
