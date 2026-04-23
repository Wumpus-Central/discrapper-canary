i.d(n, { default: () => u });
var e = i(627968);
i(64700);
var a = i(772707),
    s = i(349288),
    o = i(253932),
    r = i(780964),
    c = i(858897),
    l = i(954571),
    p = i(652215),
    d = i(985018);
function u(t) {
    let { onClose: n, transitionState: i } = t;
    function u() {
        n(), (0, c.openUserSettings)(r.X.ENABLE_LEGACY_CHAT_INPUT);
    }
    return (0, e.jsx)(a.k, {
        transitionState: i,
        title: d.intl.string(d.t.G9HG5O),
        subtitle: d.intl.format(d.t.ZtUieE, {
            openSettingsHook: (t, n) => (0, e.jsx)(s.Anchor, { onClick: u, children: t }, n),
        }),
        onClose: n,
        graphic: { type: "image", src: "/assets/caa84e7e4bbe95bd.svg" },
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
