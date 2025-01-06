t.d(n, {
    Z: function () {
        return D;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    o = t.n(a),
    r = t(140835),
    s = t(246521),
    c = t(442837),
    d = t(481060),
    u = t(911969),
    m = t(607070),
    p = t(555573),
    h = t(213459),
    f = t(10718),
    C = t(895924),
    v = t(583027),
    x = t(585483),
    _ = t(499254),
    N = t(541099),
    g = t(827498),
    A = t(496158),
    E = t(676161),
    b = t(660090),
    I = t(783097),
    P = t(46332),
    j = t(176412),
    y = t(870205),
    S = t(981631),
    T = t(689079),
    L = t(388032),
    R = t(61474),
    M = t(616362);
let Z = 'placeholder',
    k = [, , , , ,].fill(Z);
function O(e) {
    var n, t;
    let { channel: a, command: o, section: s, sectionName: c } = e,
        u = l.useCallback(() => {
            let e = N.Z.entrypoint();
            _.yT(g.ti.COMMAND),
                (0, v.Mo)({
                    command: o,
                    location: C.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                    sectionName: c
                }),
                p.Po({
                    channelId: a.id,
                    command: o,
                    section: s,
                    location: C.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                    sectionName: c,
                    source: e,
                    commandOrigin: C.bB.APPLICATION_LAUNCHER
                }),
                x.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.id });
        }, [a.id, o, s, c]),
        m = (null !== (t = null === (n = o.options) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0,
        h = l.useMemo(() => (0, j.ae)(o.displayDescription, void 0), [o.displayDescription]),
        f = l.useMemo(
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
    return (0, i.jsxs)(d.Clickable, {
        className: M.command,
        onClick: u,
        children: [
            (0, i.jsx)(d.FocusBlock, {
                className: M.commandFocusBlock,
                children: f
            }),
            m
                ? (0, i.jsx)(r.F, {})
                : (0, i.jsx)(B, {
                      channel: a,
                      command: o,
                      sectionName: c
                  })
        ]
    });
}
function U() {
    let e = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        { styleLarge: n, styleSmall: t } = l.useMemo(
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
                            style: n,
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
                            style: t,
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
            [n, t]
        );
    return (0, i.jsx)('div', {
        className: o()(M.command, R.loadingAnimation, { [R.noAnimation]: e }),
        children: a
    });
}
function B(e) {
    let { channel: n, command: t, sectionName: a } = e;
    (0, h.PL)(!0, !0), (0, h.em)(n, !0, !0);
    let o = (0, A.D)(n),
        [r, c] = l.useState(!1),
        u = l.useCallback(
            async (e) => {
                e.stopPropagation();
                let i = N.Z.lastShownEntrypoint();
                try {
                    (await (0, P.L)({
                        applicationId: t.applicationId,
                        channel: n,
                        sectionName: a,
                        location: C.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                        entrypoint: i,
                        commandIntegrationTypes: t.integration_types
                    })) &&
                        (await (0, I.Y$)({
                            command: t,
                            optionValues: {},
                            context: o,
                            sectionName: a,
                            commandOrigin: C.bB.APP_LAUNCHER_APPLICATION_VIEW
                        }),
                        _.yT(g.ti.COMMAND));
                } finally {
                    c(!1);
                }
            },
            [t, n, a, o]
        );
    return (0, i.jsxs)(d.Button, {
        type: 'submit',
        onClick: u,
        disabled: r,
        size: d.ButtonSizes.ICON,
        color: d.Button.Colors.PRIMARY,
        className: M.commandSentCTAButton,
        innerClassName: M.commandSentCTAButtonInner,
        'aria-label': L.intl.formatToPlainString(L.t.UXw6W1, { commandName: t.untranslatedName }),
        children: [
            (0, i.jsx)(d.Text, {
                variant: 'text-sm/medium',
                color: 'currentColor',
                children: L.intl.string(L.t.TXNS7e)
            }),
            (0, i.jsx)(s.U, {
                size: 'xs',
                color: 'currentColor'
            })
        ]
    });
}
function w(e) {
    let { channel: n, commands: t, section: l, headerName: a, sectionName: o, children: r } = e;
    return 0 === t.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: M.commandListHeader,
                      children: [
                          (0, i.jsx)(d.Heading, {
                              variant: 'heading-sm/semibold',
                              children: a
                          }),
                          r
                      ]
                  }),
                  (0, i.jsx)('ul', {
                      className: M.commandContainer,
                      'aria-label': a,
                      children: t.map((e, t) =>
                          e === Z
                              ? (0, i.jsx)(U, {}, e + t)
                              : (0, i.jsx)(
                                    O,
                                    {
                                        channel: n,
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
function D(e) {
    var n;
    let { channel: t, application: a, sectionName: o, installOnDemand: r, setHasCommands: s } = e,
        {
            filterSection: c,
            commandsByActiveSection: d,
            sectionDescriptors: m,
            loading: p
        } = f.wi({
            channel: t,
            filters: { commandTypes: [u.yU.CHAT] },
            options: {
                placeholderCount: 0,
                limit: T.tn,
                includeFrecency: !0,
                allowApplicationState: r,
                installOnDemand: r,
                applicationId: a.id
            },
            allowFetch: !0
        }),
        h = null !== (n = m.find((e) => e.id === a.id)) && void 0 !== n ? n : null,
        {
            sortOrder: C,
            setSortOrder: v,
            commands: x,
            canSort: _
        } = (0, b.Z)({
            sectionId: a.id,
            commandsByActiveSection: d
        });
    l.useEffect(() => {
        c(a.id);
    }, [a.id, c]);
    let N = (0, E.Z)({
        channel: t,
        commands: x,
        limit: 5
    });
    return (l.useEffect(() => {
        s(x.length > 0);
    }, [s, x]),
    p.current || 0 !== x.length)
        ? (0, i.jsxs)('ul', {
              className: M.contentContainer,
              children: [
                  (0, i.jsx)(w, {
                      channel: t,
                      section: h,
                      commands: N,
                      headerName: L.intl.string(L.t.acSE0t),
                      sectionName: o
                  }),
                  (0, i.jsx)(w, {
                      channel: t,
                      section: h,
                      commands: p.current ? k : x,
                      headerName: L.intl.string(L.t.DUU9Ly),
                      sectionName: o,
                      children:
                          _ &&
                          (0, i.jsx)(y.Z, {
                              sortOrder: C,
                              onSortOptionClick: v
                          })
                  })
              ]
          })
        : null;
}
