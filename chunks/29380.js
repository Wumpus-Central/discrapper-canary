t.d(n, {
    Z: function () {
        return x;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(481060),
    a = t(542094),
    r = t(895924),
    s = t(626135),
    c = t(499254),
    d = t(827498),
    u = t(160973),
    m = t(783097),
    p = t(890280),
    h = t(176412),
    f = t(981631),
    C = t(388032),
    v = t(129571);
function x(e) {
    let { context: n, application: t, sectionName: x, primaryEntryPointCommand: _, buttonSize: N = o.ButtonSizes.MEDIUM } = e,
        A = l.useId(),
        I = l.useCallback(() => {
            c.yT(d.ti.ACTIVITY);
        }, []),
        { submitting: E, wasSubmitting: g } = (0, p.Z)({
            applicationId: t.id,
            context: n,
            launchingComponentId: A,
            onSubmissionComplete: I
        }),
        [b, P] = l.useState(!1),
        y = (0, a.Qv)({
            applicationId: t.id,
            context: n
        }),
        S = l.useMemo(() => (0, m.XZ)(_.displayName), [_.displayName]),
        {
            onActivityItemSelected: j,
            buttonColor: T,
            buttonText: L
        } = (0, h.P7)({
            context: n,
            application: t,
            location: r.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: x,
            commandName: S,
            autoDismissOnClick: y === a.JS.LEAVE,
            launchingComponentId: A,
            submitting: null != g ? g : E
        }),
        { disabled: R, reason: M } = (0, u.Z)({
            context: n,
            application: t,
            activityAction: y
        });
    return (0, i.jsx)(o.Tooltip, {
        shouldShow: null != M,
        tooltipContentClassName: v.tooltipContent,
        text: M,
        children: (e) => {
            let { onClick: n, ...l } = e;
            return (0, i.jsx)(o.Button, {
                ...l,
                type: 'submit',
                size: N,
                color: T,
                disabled: R,
                submitting: b,
                onClick: () => {
                    P(!0),
                        j(),
                        null == n || n(),
                        s.default.track(f.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                            application_id: t.id,
                            button_action: d._y.USE_APP_COMMAND
                        });
                },
                'aria-label': C.intl.formatToPlainString(C.t['XjP/R0'], {
                    buttonText: L,
                    applicationName: t.name
                }),
                children: L
            });
        }
    });
}
