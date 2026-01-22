n.d(t, { A: () => y }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(990078),
    s = n(397927),
    o = n(849269),
    l = n(392054),
    c = n(207371),
    u = n(954571),
    d = n(211401),
    f = n(989837),
    p = n(500049),
    _ = n(228965),
    h = n(735991),
    m = n(698141),
    g = n(297486),
    E = n(652215),
    b = n(985018);
function y(e) {
    let { context: t, application: n, sectionName: y, primaryEntryPointCommand: O } = e,
        A = i.useId(),
        v = i.useCallback(() => {
            d.k(p.Se.ACTIVITY);
        }, []),
        S = i.useCallback(() => {
            f.A.shouldShowModal() && v();
        }, [v]),
        { submitting: I, wasSubmitting: T } = (0, m.A)({
            applicationId: n.id,
            context: t,
            launchingComponentId: A,
            onSubmissionComplete: v,
        }),
        [C, N] = i.useState(!1),
        R = (0, o.Hq)({
            applicationId: n.id,
            context: t,
        }),
        w = i.useMemo(() => (0, h.kF)(O.displayName), [O.displayName]),
        {
            onActivityItemSelected: P,
            buttonVariant: D,
            buttonText: x,
        } = (0, g.dn)({
            context: t,
            application: n,
            location: l.Oh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: y,
            commandName: w,
            autoDismissOnClick: R === o.o6.LEAVE || (0, c.x)(n),
            launchingComponentId: A,
            submitting: null != T ? T : I,
            onConfirmActivityLaunchChecksAlertOpen: S,
        }),
        { disabled: L, reason: j } = (0, _.A)({
            context: t,
            application: n,
            activityAction: R,
        });
    return (0, r.jsx)(a.m, {
        shouldShow: null != j,
        __unsupportedReactNodeAsText: j,
        children: (0, r.jsx)(s.Button, {
            type: "submit",
            size: "md",
            variant: D,
            disabled: L,
            loading: C,
            onClick: () => {
                N(!0),
                    P(),
                    u.default.track(E.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                        application_id: n.id,
                        button_action: p.F5.USE_APP_COMMAND,
                    });
            },
            "aria-label": b.intl.formatToPlainString(b.t["XjP/R+"], {
                buttonText: x,
                applicationName: n.name,
            }),
            text: x,
        }),
    });
}
