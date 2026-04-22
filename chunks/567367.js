n.d(t, { A: () => N });
var l = n(627968),
    i = n(64700),
    a = n(990078),
    s = n(821609),
    r = n(849269),
    o = n(392054),
    c = n(207371),
    d = n(954571),
    u = n(211401),
    m = n(989837),
    p = n(500049),
    _ = n(228965),
    A = n(735991),
    h = n(698141),
    f = n(297486),
    x = n(652215),
    C = n(985018);
function N(e) {
    let { context: t, application: n, sectionName: N, primaryEntryPointCommand: g } = e,
        E = i.useId(),
        v = i.useCallback(() => {
            u.k(p.Se.ACTIVITY);
        }, []),
        b = i.useCallback(() => {
            m.A.shouldShowModal() && v();
        }, [v]),
        { submitting: I, wasSubmitting: y } = (0, h.A)({
            applicationId: n.id,
            context: t,
            launchingComponentId: E,
            onSubmissionComplete: v,
        }),
        [j, P] = i.useState(!1),
        T = (0, r.Hq)({ applicationId: n.id, context: t }),
        L = i.useMemo(() => (0, A.kF)(g.displayName), [g.displayName]),
        {
            onActivityItemSelected: S,
            buttonVariant: R,
            buttonText: O,
        } = (0, f.dn)({
            context: t,
            application: n,
            location: o.Oh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: N,
            commandName: L,
            autoDismissOnClick: T === r.o6.LEAVE || (0, c.x)(n),
            launchingComponentId: E,
            submitting: y ?? I,
            onConfirmActivityLaunchChecksAlertOpen: b,
        }),
        { disabled: k, reason: M } = (0, _.A)({ context: t, application: n, activityAction: T });
    return (0, l.jsx)(a.m, {
        shouldShow: null != M,
        __unsupportedReactNodeAsText: M,
        children: (0, l.jsx)(s.$, {
            type: "submit",
            size: "md",
            variant: R,
            disabled: k,
            loading: j,
            onClick: () => {
                P(!0),
                    S(),
                    d.default.track(x.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                        application_id: n.id,
                        button_action: p.F5.USE_APP_COMMAND,
                    });
            },
            "aria-label": C.intl.formatToPlainString(C.t["XjP/R+"], { buttonText: O, applicationName: n.name }),
            text: O,
        }),
    });
}
