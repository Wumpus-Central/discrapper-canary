t.d(n, {
    Z: function () {
        return x;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(481060),
    o = t(542094),
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
    let { channel: n, application: t, sectionName: x, primaryEntryPointCommand: _, buttonSize: N = a.ButtonSizes.MEDIUM } = e,
        g = l.useId(),
        A = l.useCallback(() => {
            c.yT(d.ti.ACTIVITY);
        }, []),
        { submitting: E, wasSubmitting: b } = (0, p.Z)({
            applicationId: t.id,
            channelId: n.id,
            launchingComponentId: g,
            onSubmissionComplete: A
        }),
        [I, P] = l.useState(!1),
        j = (0, o.Qv)({
            applicationId: t.id,
            channelId: n.id
        }),
        y = l.useMemo(() => (0, m.XZ)(_.displayName), [_.displayName]),
        {
            onActivityItemSelected: S,
            buttonColor: T,
            buttonText: L
        } = (0, h.P7)({
            channel: n,
            application: t,
            location: r.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: x,
            commandName: y,
            autoDismissOnClick: j === o.JS.LEAVE,
            launchingComponentId: g,
            submitting: null != b ? b : E
        }),
        { disabled: R, reason: M } = (0, u.Z)({
            channelId: n.id,
            application: t,
            activityAction: j
        });
    return (0, i.jsx)(a.Tooltip, {
        shouldShow: null != M,
        tooltipContentClassName: v.tooltipContent,
        text: M,
        children: (e) => {
            let { onClick: n, ...l } = e;
            return (0, i.jsx)(a.Button, {
                ...l,
                type: 'submit',
                size: N,
                color: T,
                disabled: R,
                submitting: I,
                onClick: () => {
                    P(!0),
                        S(),
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
