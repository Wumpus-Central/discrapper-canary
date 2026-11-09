var i = n(477900),
    l = n(582128),
    a = n(855986),
    o = n(123292),
    s = n(165862),
    r = n(477782),
    c = n(625903),
    u = n(442433),
    d = n(253932),
    f = n(780964),
    p = n(766075),
    g = n(532624),
    m = n(350535),
    b = n(489496),
    h = n(464132);
n(696016);
var x = n(652215),
    y = n(683825),
    k = n(792996);
let S = [
    { mode: "off", message: y.default["uO/2T5"] },
    { mode: "manual", message: y.default.bBlUzK },
    { mode: "auto", message: y.default["4gzBi+"] },
];
function I() {
    return (0, a.bG)([g.Ay], () =>
        (0, m.dI)(g.Ay.getKeybindForAction(x.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, m.OH)("alt+c"), !0),
    );
}
n.d(
    t,
    {},
    {
        T: I,
        default: function (e) {
            let { onSelect: t, onClose: n = u.Z_ } = e,
                { value: a, onChange: g } = (0, h.U)(),
                m = d.Q$.useSetting(),
                x = I(),
                A = x.length > 0,
                j = l.useMemo(
                    () =>
                        (function (e) {
                            function t(t) {
                                (t.stopPropagation(), e(), (0, p.openUserSettings)(f.X.CLIPS_MANUAL_KEYBIND));
                            }
                            function n(e) {
                                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), t(e));
                            }
                            return (e, l) =>
                                (0, i.jsx)(
                                    o.Q,
                                    { text: e, textVariant: "body-xs/medium", onClick: t, onKeyDown: n },
                                    l,
                                );
                        })(n),
                    [n],
                ),
                C = {
                    off: null,
                    manual: A
                        ? k.intl.format(y.default.QWyKXz, { keybind: x, editKeybindHook: j })
                        : k.intl.format(y.default["Sb+V+3"], { editKeybindHook: j }),
                    auto: A
                        ? k.intl.formatToPlainString(y.default.BvKcH9, { keybind: x })
                        : k.intl.string(y.default.VWJbxP),
                },
                P = k.intl.string(y.default.eIX9be);
            return (0, i.jsxs)(s.W, {
                navId: "clips-capture-mode",
                "aria-label": P,
                onClose: n,
                onSelect: t,
                children: [
                    (0, i.jsx)(r.rX, {
                        label: P,
                        children: S.map((e) => {
                            let { mode: t, message: n } = e;
                            return (0, i.jsx)(
                                r.iD,
                                {
                                    id: `clips-capture-mode-${t}`,
                                    group: "clips-capture-mode",
                                    label: k.intl.string(n),
                                    subtext: C[t],
                                    checked: a === t,
                                    action: () => g(t),
                                },
                                t,
                            );
                        }),
                    }),
                    (0, i.jsx)(r.rX, {
                        children: (0, i.jsx)(r.fP, {
                            id: "clips-capture-mode-voice",
                            label: k.intl.string(y.default["IxZyA+"]),
                            subtext: k.intl.string(y.default.t23RLK),
                            checked: m,
                            action: (e) => (0, b.eQ)({ allowVoiceRecording: e }),
                        }),
                    }),
                    (0, i.jsx)(r.rX, {
                        children: (0, i.jsx)(r.Dr, {
                            id: "clips-capture-mode-settings",
                            label: k.intl.string(k.t.J1hsY2),
                            iconLeft: c.SettingsIcon,
                            leadingAccessory: { type: "icon", icon: c.SettingsIcon },
                            action: () => (0, p.openUserSettings)(f.X.CLIPS_PANEL),
                        }),
                    }),
                ],
            });
        },
    },
);
