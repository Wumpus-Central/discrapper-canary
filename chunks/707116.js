var i = n(477900);
n(582128);
var a = n(855986);
if (588245 != n.j) var l = n(123292);
if (588245 != n.j) var r = n(165862);
if (588245 != n.j) var o = n(477782);
if (588245 != n.j) var s = n(625903);
var c = n(442433),
    u = n(253932),
    d = n(780964),
    f = n(766075),
    p = n(532624),
    g = n(350535),
    m = n(489496),
    b = n(464132);
n(696016);
var h = n(652215),
    x = n(683825),
    y = n(792996);
let j = [
    { mode: "off", message: x.default["uO/2T5"] },
    { mode: "manual", message: x.default.bBlUzK },
    { mode: "auto", message: x.default["4gzBi+"] },
];
function v() {
    return (0, a.bG)([p.Ay], () =>
        (0, g.dI)(p.Ay.getKeybindForAction(h.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, g.OH)("alt+c"), !0),
    );
}
function k(e) {
    (e.stopPropagation(), (0, c.Z_)(), (0, f.openUserSettings)(d.X.CLIPS_MANUAL_KEYBIND));
}
function S(e) {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), k(e));
}
function I(e, t) {
    return (0, i.jsx)(l.Q, { text: e, textVariant: "body-xs/medium", onClick: k, onKeyDown: S }, t);
}
n.d(
    t,
    {},
    {
        T: v,
        default: function (e) {
            let { onSelect: t } = e,
                { value: n, onChange: a } = (0, b.U)(),
                l = u.Q$.useSetting(),
                p = v(),
                g = p.length > 0,
                h = {
                    off: null,
                    manual: g
                        ? y.intl.format(x.default.QWyKXz, { keybind: p, editKeybindHook: I })
                        : y.intl.format(x.default["Sb+V+3"], { editKeybindHook: I }),
                    auto: g
                        ? y.intl.formatToPlainString(x.default.BvKcH9, { keybind: p })
                        : y.intl.string(x.default.VWJbxP),
                },
                k = y.intl.string(x.default.eIX9be);
            return (0, i.jsxs)(r.W, {
                navId: "clips-capture-mode",
                "aria-label": k,
                onClose: c.Z_,
                onSelect: t,
                children: [
                    (0, i.jsx)(o.rX, {
                        label: k,
                        children: j.map((e) => {
                            let { mode: t, message: l } = e;
                            return (0, i.jsx)(
                                o.iD,
                                {
                                    id: `clips-capture-mode-${t}`,
                                    group: "clips-capture-mode",
                                    label: y.intl.string(l),
                                    subtext: h[t],
                                    checked: n === t,
                                    action: () => a(t),
                                },
                                t,
                            );
                        }),
                    }),
                    (0, i.jsx)(o.rX, {
                        children: (0, i.jsx)(o.fP, {
                            id: "clips-capture-mode-voice",
                            label: y.intl.string(x.default["IxZyA+"]),
                            subtext: y.intl.string(x.default.t23RLK),
                            checked: l,
                            action: (e) => (0, m.eQ)({ allowVoiceRecording: e }),
                        }),
                    }),
                    (0, i.jsx)(o.rX, {
                        children: (0, i.jsx)(o.Dr, {
                            id: "clips-capture-mode-settings",
                            label: y.intl.string(y.t.J1hsY2),
                            iconLeft: s.SettingsIcon,
                            leadingAccessory: { type: "icon", icon: s.SettingsIcon },
                            action: () => (0, f.openUserSettings)(d.X.CLIPS_PANEL),
                        }),
                    }),
                ],
            });
        },
    },
);
