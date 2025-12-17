n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(28664),
    o = n(481060),
    s = n(542094),
    l = n(895924),
    c = n(813370),
    u = n(626135),
    d = n(499254),
    f = n(541099),
    p = n(827498),
    _ = n(160973),
    m = n(783097),
    h = n(890280),
    g = n(176412),
    E = n(981631),
    b = n(388032);
function y(e) {
    let { context: t, application: n, sectionName: y, primaryEntryPointCommand: O } = e,
        v = i.useId(),
        S = i.useCallback(() => {
            d.y(p.ti.ACTIVITY);
        }, []),
        I = i.useCallback(() => {
            f.Z.shouldShowModal() && S();
        }, [S]),
        { submitting: T, wasSubmitting: C } = (0, h.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: v,
            onSubmissionComplete: S,
        }),
        [A, N] = i.useState(!1),
        P = (0, s.Qv)({
            applicationId: n.id,
            context: t,
        }),
        R = i.useMemo(() => (0, m.XZ)(O.displayName), [O.displayName]),
        {
            onActivityItemSelected: w,
            buttonVariant: D,
            buttonText: x,
        } = (0, g.P7)({
            context: t,
            application: n,
            location: l.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: y,
            commandName: R,
            autoDismissOnClick: P === s.JS.LEAVE || (0, c.g)(n),
            launchingComponentId: v,
            submitting: null != C ? C : T,
            onConfirmActivityLaunchChecksAlertOpen: I,
        }),
        { disabled: L, reason: j } = (0, _.Z)({
            context: t,
            application: n,
            activityAction: P,
        });
    return (0, r.jsx)(a.u, {
        shouldShow: null != j,
        __unsupportedReactNodeAsText: j,
        children: (0, r.jsx)(o.Button, {
            type: "submit",
            size: "md",
            variant: D,
            disabled: L,
            loading: A,
            onClick: () => {
                N(!0),
                    w(),
                    u.default.track(E.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                        application_id: n.id,
                        button_action: p._y.USE_APP_COMMAND,
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
