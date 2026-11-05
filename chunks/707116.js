var i = n(477900);
n(582128);
var l = n(855986),
    a = n(123292),
    o = n(165862),
    s = n(477782),
    r = n(625903),
    c = n(442433),
    d = n(253932),
    u = n(780964),
    f = n(766075),
    p = n(532624),
    g = n(350535),
    m = n(489496),
    b = n(464132);
n(696016);
var h = n(652215),
    x = n(683825),
    y = n(792996);
let k = [
    { mode: "off", message: x.default["uO/2T5"] },
    { mode: "manual", message: x.default.bBlUzK },
    { mode: "auto", message: x.default["4gzBi+"] },
];
function S(e) {
    (e.stopPropagation(), (0, c.Z_)(), (0, f.openUserSettings)(u.X.CLIPS_MANUAL_KEYBIND));
}
function I(e) {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), S(e));
}
function A(e, t) {
    return (0, i.jsx)(a.Q, { text: e, textVariant: "body-xs/medium", onClick: S, onKeyDown: I }, t);
}
n.d(
    t,
    {},
    {
        default: function (e) {
            let { onSelect: t } = e,
                { value: n, onChange: a } = (0, b.U)(),
                S = d.Q$.useSetting(),
                I = (0, l.bG)([p.Ay], () =>
                    (0, g.dI)(p.Ay.getKeybindForAction(h.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, g.OH)("alt+c"), !0),
                ),
                j = I.length > 0,
                C = {
                    off: null,
                    manual: j
                        ? y.intl.format(x.default.QWyKXz, { keybind: I, editKeybindHook: A })
                        : y.intl.format(x.default["Sb+V+3"], { editKeybindHook: A }),
                    auto: j
                        ? y.intl.formatToPlainString(x.default.BvKcH9, { keybind: I })
                        : y.intl.string(x.default.VWJbxP),
                },
                P = y.intl.string(x.default.eIX9be);
            return (0, i.jsxs)(o.W, {
                navId: "clips-capture-mode",
                "aria-label": P,
                onClose: c.Z_,
                onSelect: t,
                children: [
                    (0, i.jsx)(s.rX, {
                        label: P,
                        children: k.map((e) => {
                            let { mode: t, message: l } = e;
                            return (0, i.jsx)(
                                s.iD,
                                {
                                    id: `clips-capture-mode-${t}`,
                                    group: "clips-capture-mode",
                                    label: y.intl.string(l),
                                    subtext: C[t],
                                    checked: n === t,
                                    action: () => a(t),
                                },
                                t,
                            );
                        }),
                    }),
                    (0, i.jsx)(s.rX, {
                        children: (0, i.jsx)(s.fP, {
                            id: "clips-capture-mode-voice",
                            label: y.intl.string(x.default["IxZyA+"]),
                            subtext: y.intl.string(x.default.t23RLK),
                            checked: S,
                            action: (e) => (0, m.eQ)({ allowVoiceRecording: e }),
                        }),
                    }),
                    (0, i.jsx)(s.rX, {
                        children: (0, i.jsx)(s.Dr, {
                            id: "clips-capture-mode-settings",
                            label: y.intl.string(y.t.J1hsY2),
                            iconLeft: r.SettingsIcon,
                            leadingAccessory: { type: "icon", icon: r.SettingsIcon },
                            action: () => (0, f.openUserSettings)(u.X.CLIPS_PANEL),
                        }),
                    }),
                ],
            });
        },
    },
);
