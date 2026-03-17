e.d(n, { default: () => C });
var i = e(627968);
e(64700);
var a = e(158954),
    s = e(397927),
    o = e(253932),
    r = e(780964),
    c = e(840065),
    l = e(954571),
    p = e(652215),
    d = e(985018),
    u = e(575621);
function C(t) {
    let { onClose: n, transitionState: e } = t;
    function C() {
        n(), (0, c.openUserSettings)(r.X.ENABLE_LEGACY_CHAT_INPUT);
    }
    return (0, i.jsx)(a.ExpressiveModal, {
        transitionState: e,
        title: d.intl.string(d.t.G9HG5O),
        subtitle: d.intl.format(d.t.ZtUieE, {
            openSettingsHook: (t, n) => (0, i.jsx)(s.MzZ, { onClick: C, children: t }, n),
        }),
        onClose: n,
        graphic: { type: "image", src: u },
        actions: [
            { variant: "secondary", text: d.intl.string(d.t.f3Pet9), onClick: n },
            {
                variant: "primary",
                text: d.intl.string(d.t.VdzwlA),
                onClick: function () {
                    l.default.track(p.HAw.LEGACY_CHAT_INPUT_TOGGLED, {
                        enabled: !1,
                        location: "LegacyChatInputExplanationModal",
                    }),
                        o.D_.updateSetting(!1),
                        n();
                },
            },
        ],
    });
}
