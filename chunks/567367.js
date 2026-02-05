"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(990078),
    s = n(397927),
    o = n(849269),
    l = n(392054),
    u = n(207371),
    c = n(954571),
    d = n(211401),
    _ = n(989837),
    f = n(500049),
    p = n(228965),
    h = n(735991),
    m = n(698141),
    g = n(297486),
    E = n(652215),
    A = n(985018);
function I(e) {
    let { context: t, application: n, sectionName: I, primaryEntryPointCommand: T } = e,
        y = i.useId(),
        S = i.useCallback(() => {
            d.k(f.Se.ACTIVITY);
        }, []),
        v = i.useCallback(() => {
            _.A.shouldShowModal() && S();
        }, [S]),
        { submitting: C, wasSubmitting: b } = (0, m.A)({
            applicationId: n.id,
            context: t,
            launchingComponentId: y,
            onSubmissionComplete: S,
        }),
        [N, R] = i.useState(!1),
        O = (0, o.Hq)({ applicationId: n.id, context: t }),
        D = i.useMemo(() => (0, h.kF)(T.displayName), [T.displayName]),
        {
            onActivityItemSelected: L,
            buttonVariant: w,
            buttonText: x,
        } = (0, g.dn)({
            context: t,
            application: n,
            location: l.Oh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: I,
            commandName: D,
            autoDismissOnClick: O === o.o6.LEAVE || (0, u.x)(n),
            launchingComponentId: y,
            submitting: b ?? C,
            onConfirmActivityLaunchChecksAlertOpen: v,
        }),
        { disabled: P, reason: M } = (0, p.A)({ context: t, application: n, activityAction: O });
    return (0, r.jsx)(a.m, {
        shouldShow: null != M,
        __unsupportedReactNodeAsText: M,
        children: (0, r.jsx)(s.Button, {
            type: "submit",
            size: "md",
            variant: w,
            disabled: P,
            loading: N,
            onClick: () => {
                R(!0),
                    L(),
                    c.default.track(E.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                        application_id: n.id,
                        button_action: f.F5.USE_APP_COMMAND,
                    });
            },
            "aria-label": A.intl.formatToPlainString(A.t["XjP/R+"], { buttonText: x, applicationName: n.name }),
            text: x,
        }),
    });
}
