i.d(n, { default: () => u });
var a = i(477900);
i(582128);
var e = i(189213),
    o = i(28863),
    s = i(885386),
    r = i(780964),
    l = i(766075),
    c = i(174459),
    d = i(652215),
    p = i(375708);
function u(t) {
    let { onClose: n, transitionState: i } = t;
    function u() {
        (n(), (0, l.openUserSettings)(r.X.ENABLE_LEGACY_CHAT_INPUT));
    }
    return (0, a.jsx)(e.a, {
        size: "md",
        transitionState: i,
        title: p.intl.string(p.t.G9HG5O),
        subtitle: p.intl.format(p.t.ZtUieE, {
            openSettingsHook: (t, n) => (0, a.jsx)(o.Anchor, { onClick: u, children: t }, n),
        }),
        onClose: n,
        actions: [
            {
                variant: "primary",
                text: p.intl.string(p.t.VdzwlA),
                onClick: function () {
                    (c.default.track(d.HAw.LEGACY_CHAT_INPUT_TOGGLED, {
                        enabled: !1,
                        location: "LegacyChatInputExplanationModal",
                    }),
                        s.D_.updateSetting(!1),
                        n());
                },
            },
        ],
    });
}
