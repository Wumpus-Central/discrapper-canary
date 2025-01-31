n.d(t, { Z: () => w }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(140835),
    r = n(246521),
    c = n(442837),
    d = n(481060),
    u = n(911969),
    m = n(607070),
    p = n(555573),
    h = n(213459),
    v = n(10718),
    x = n(895924),
    f = n(583027),
    N = n(585483),
    C = n(499254),
    E = n(541099),
    A = n(827498),
    I = n(496158),
    g = n(676161),
    _ = n(660090),
    P = n(783097),
    j = n(46332),
    y = n(176412),
    T = n(870205),
    S = n(981631),
    b = n(689079),
    L = n(388032),
    R = n(61474),
    M = n(616362);
let Z = 'placeholder',
    O = [, , , , ,].fill(Z);
function k(e) {
    var t, n;
    let { context: a, command: o, section: r, sectionName: c } = e,
        u = l.useCallback(() => {
            let e = E.Z.entrypoint();
            C.yT(A.ti.COMMAND),
                (0, f.Mo)({
                    command: o,
                    location: x.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                    sectionName: c
                }),
                'channel' === a.type &&
                    (p.Po({
                        channelId: a.channel.id,
                        command: o,
                        section: r,
                        location: x.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: c,
                        source: e,
                        commandOrigin: x.bB.APPLICATION_LAUNCHER
                    }),
                    N.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.channel.id }));
        }, [a, o, r, c]),
        m = (null !== (n = null === (t = o.options) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0,
        h = l.useMemo(() => (0, y.ae)(o.displayDescription, void 0), [o.displayDescription]),
        v = l.useMemo(
            () =>
                (0, i.jsxs)('div', {
                    className: M.commandTextContainer,
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: o.displayName
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            lineClamp: 1,
                            children: h
                        })
                    ]
                }),
            [o.displayName, h]
        );
    return (0, i.jsxs)(d.P3F, {
        className: M.command,
        onClick: u,
        children: [
            (0, i.jsx)(d.Rny, {
                className: M.commandFocusBlock,
                children: v
            }),
            m
                ? (0, i.jsx)(s.F, {})
                : (0, i.jsx)(D, {
                      context: a,
                      command: o,
                      sectionName: c
                  })
        ]
    });
}
function U() {
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
        a = l.useMemo(
            () =>
                (0, i.jsxs)('div', {
                    className: M.commandTextContainerPlaceholder,
                    children: [
                        (0, i.jsx)('div', {
                            className: R.textPlaceholder,
                            style: t,
                            children: (0, i.jsx)(d.Text, {
                                className: R.hidden,
                                variant: 'text-sm/semibold',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: '_'
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: R.textPlaceholder,
                            style: n,
                            children: (0, i.jsx)(d.Text, {
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
    return (0, i.jsx)('div', {
        className: o()(M.command, R.loadingAnimation, { [R.noAnimation]: e }),
        children: a
    });
}
function D(e) {
    let { context: t, command: n, sectionName: a } = e;
    (0, h.PL)(!0, !0), (0, h.em)(t, !0, !0);
    let o = (0, I.D)(t),
        [s, c] = l.useState(!1),
        u = l.useCallback(
            async (e) => {
                if ('channel' !== t.type) return;
                e.stopPropagation();
                let i = E.Z.lastShownEntrypoint();
                try {
                    (await (0, j.L)({
                        applicationId: n.applicationId,
                        channel: t.channel,
                        sectionName: a,
                        location: x.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        entrypoint: i,
                        commandIntegrationTypes: n.integration_types
                    })) &&
                        (await (0, P.Y$)({
                            command: n,
                            optionValues: {},
                            context: o,
                            sectionName: a,
                            commandOrigin: x.bB.APP_LAUNCHER_APPLICATION_VIEW
                        }),
                        C.yT(A.ti.COMMAND));
                } finally {
                    c(!1);
                }
            },
            [n, t, a, o]
        );
    return (0, i.jsxs)(d.zxk, {
        type: 'submit',
        onClick: u,
        disabled: s,
        size: d.PhG.ICON,
        color: d.zxk.Colors.PRIMARY,
        className: M.commandSentCTAButton,
        innerClassName: M.commandSentCTAButtonInner,
        'aria-label': L.intl.formatToPlainString(L.t.UXw6W1, { commandName: n.untranslatedName }),
        children: [
            (0, i.jsx)(d.Text, {
                variant: 'text-sm/medium',
                color: 'currentColor',
                children: L.intl.string(L.t.TXNS7e)
            }),
            (0, i.jsx)(r.U, {
                size: 'xs',
                color: 'currentColor'
            })
        ]
    });
}
function H(e) {
    let { context: t, commands: n, section: l, headerName: a, sectionName: o, children: s } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: M.commandListHeader,
                      children: [
                          (0, i.jsx)(d.X6q, {
                              variant: 'heading-sm/semibold',
                              children: a
                          }),
                          s
                      ]
                  }),
                  (0, i.jsx)('ul', {
                      className: M.commandContainer,
                      'aria-label': a,
                      children: n.map((e, n) =>
                          e === Z
                              ? (0, i.jsx)(U, {}, e + n)
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
function w(e) {
    var t;
    let { context: n, application: a, sectionName: o, installOnDemand: s, setHasCommands: r } = e,
        {
            filterSection: c,
            commandsByActiveSection: d,
            sectionDescriptors: m,
            loading: p
        } = v.wi({
            context: n,
            filters: { commandTypes: [u.yU.CHAT] },
            options: {
                placeholderCount: 0,
                limit: b.tn,
                includeFrecency: !0,
                allowApplicationState: s,
                installOnDemand: s,
                applicationId: a.id
            },
            allowFetch: !0
        }),
        h = null !== (t = m.find((e) => e.id === a.id)) && void 0 !== t ? t : null,
        {
            sortOrder: x,
            setSortOrder: f,
            commands: N,
            canSort: C
        } = (0, _.Z)({
            sectionId: a.id,
            commandsByActiveSection: d
        });
    l.useEffect(() => {
        c(a.id);
    }, [a.id, c]);
    let E = (0, g.Z)({
        context: n,
        commands: N,
        limit: 5
    });
    return (l.useEffect(() => {
        r(N.length > 0);
    }, [r, N]),
    p || 0 !== N.length)
        ? (0, i.jsxs)('ul', {
              className: M.contentContainer,
              children: [
                  (0, i.jsx)(H, {
                      context: n,
                      section: h,
                      commands: E,
                      headerName: L.intl.string(L.t.acSE0t),
                      sectionName: o
                  }),
                  (0, i.jsx)(H, {
                      context: n,
                      section: h,
                      commands: p ? O : N,
                      headerName: L.intl.string(L.t.DUU9Ly),
                      sectionName: o,
                      children:
                          C &&
                          (0, i.jsx)(T.Z, {
                              sortOrder: x,
                              onSortOptionClick: f
                          })
                  })
              ]
          })
        : null;
}
