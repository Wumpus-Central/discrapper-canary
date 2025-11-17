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
    _ = n(827498),
    p = n(160973),
    h = n(783097),
    m = n(890280),
    g = n(176412),
    E = n(981631),
    b = n(388032);
function y(e) {
    let { context: t, application: n, sectionName: y, primaryEntryPointCommand: O } = e,
        v = i.useId(),
        I = i.useCallback(() => {
            d.y(_.ti.ACTIVITY);
        }, []),
        T = i.useCallback(() => {
            f.Z.shouldShowModal() && I();
        }, [I]),
        { submitting: S, wasSubmitting: A } = (0, m.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: v,
            onSubmissionComplete: I,
        }),
        [C, N] = i.useState(!1),
        R = (0, s.Qv)({
            applicationId: n.id,
            context: t,
        }),
        P = i.useMemo(() => (0, h.XZ)(O.displayName), [O.displayName]),
        {
            onActivityItemSelected: D,
            buttonVariant: w,
            buttonText: x,
        } = (0, g.P7)({
            context: t,
            application: n,
            location: l.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: y,
            commandName: P,
            autoDismissOnClick: R === s.JS.LEAVE || (0, c.g)(n),
            launchingComponentId: v,
            submitting: null != A ? A : S,
            onConfirmActivityLaunchChecksAlertOpen: T,
        }),
        { disabled: L, reason: M } = (0, p.Z)({
            context: t,
            application: n,
            activityAction: R,
        });
    return (0, r.jsx)(a.u, {
        shouldShow: null != M,
        __unsupportedReactNodeAsText: M,
        children: (0, r.jsx)(o.Button, {
            type: "submit",
            size: "md",
            variant: w,
            disabled: L,
            loading: C,
            onClick: () => {
                N(!0),
                    D(),
                    u.default.track(E.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                        application_id: n.id,
                        button_action: _._y.USE_APP_COMMAND,
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
