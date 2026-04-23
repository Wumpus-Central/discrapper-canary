n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
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
function g(e) {
    let { context: t, application: n, sectionName: g, primaryEntryPointCommand: N } = e,
        E = l.useId(),
        b = l.useCallback(() => {
            u.k(p.Se.ACTIVITY);
        }, []),
        I = l.useCallback(() => {
            m.A.shouldShowModal() && b();
        }, [b]),
        { submitting: v, wasSubmitting: y } = (0, h.A)({
            applicationId: n.id,
            context: t,
            launchingComponentId: E,
            onSubmissionComplete: b,
        }),
        [j, P] = l.useState(!1),
        L = (0, r.Hq)({ applicationId: n.id, context: t }),
        T = l.useMemo(() => (0, A.kF)(N.displayName), [N.displayName]),
        {
            onActivityItemSelected: S,
            buttonVariant: R,
            buttonText: O,
        } = (0, f.dn)({
            context: t,
            application: n,
            location: o.Oh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: g,
            commandName: T,
            autoDismissOnClick: L === r.o6.LEAVE || (0, c.x)(n),
            launchingComponentId: E,
            submitting: y ?? v,
            onConfirmActivityLaunchChecksAlertOpen: I,
        }),
        { disabled: k, reason: M } = (0, _.A)({ context: t, application: n, activityAction: L });
    return (0, i.jsx)(a.m, {
        shouldShow: null != M,
        __unsupportedReactNodeAsText: M,
        children: (0, i.jsx)(s.$, {
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
