i.d(n, {
    default: () => _,
});
var e = i(627968);
i(64700);
var a = i(158954),
    o = i(397927),
    s = i(253932),
    l = i(780964),
    r = i(358776),
    c = i(840065),
    p = i(954571),
    C = i(652215),
    d = i(355097),
    u = i(985018),
    E = i(575621);

function _(t) {
    let { onClose: n, transitionState: i } = t;

    function _() {
        n();
        let t = (0, r.WJ)("LegacyChatInputExplanationModal");
        (0, c.openUserSettings)(t ? l.X.ENABLE_LEGACY_CHAT_INPUT : l.X.ACCESSIBILITY_PANEL, {
            section: C.nc_.ACCESSIBILITY,
            scrollPosition: t ? void 0 : d.Yu.LEGACY_CHAT_INPUT,
        });
    }
    return (0, e.jsx)(a.ExpressiveModal, {
        transitionState: i,
        title: u.intl.string(u.t.G9HG5O),
        subtitle: u.intl.format(u.t.ZtUieE, {
            openSettingsHook: (t, n) =>
                (0, e.jsx)(
                    o.MzZ,
                    {
                        onClick: _,
                        children: t,
                    },
                    n,
                ),
        }),
        onClose: n,
        graphic: {
            type: "image",
            src: E,
        },
        actions: [
            {
                variant: "secondary",
                text: u.intl.string(u.t.f3Pet9),
                onClick: n,
            },
            {
                variant: "primary",
                text: u.intl.string(u.t.VdzwlA),
                onClick: function () {
                    p.default.track(C.HAw.LEGACY_CHAT_INPUT_TOGGLED, {
                        enabled: !1,
                        location: "LegacyChatInputExplanationModal",
                    }),
                        s.D_.updateSetting(!1),
                        n();
                },
            },
        ],
    });
}
