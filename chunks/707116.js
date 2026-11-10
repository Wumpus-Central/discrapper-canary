var i = n(477900),
    l = n(582128),
    a = n(855986),
    r = n(123292),
    o = n(165862),
    s = n(477782),
    u = n(625903),
    c = n(442433),
    d = n(253932),
    f = n(780964),
    g = n(766075),
    p = n(532624),
    m = n(350535),
    b = n(489496),
    h = n(464132);
n(696016);
var x = n(652215),
    y = n(683825),
    S = n(792996);
let k = [
    { mode: "off", message: y.default["uO/2T5"] },
    { mode: "manual", message: y.default.bBlUzK },
    { mode: "auto", message: y.default["4gzBi+"] },
];
function A() {
    return (0, a.bG)([p.Ay], () =>
        (0, m.dI)(p.Ay.getKeybindForAction(x.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, m.OH)("alt+c"), !0),
    );
}
n.d(
    e,
    {},
    {
        T: A,
        Y: function () {
            let { value: t } = (0, h.U)(),
                e = A();
            switch (t) {
                case "off":
                    return S.intl.string(y.default["uO/2T5"]);
                case "manual":
                    return e.length > 0
                        ? S.intl.formatToPlainString(y.default.pGVUxA, { shortcut: e })
                        : S.intl.string(y.default.bBlUzK);
                case "auto":
                    return e.length > 0
                        ? S.intl.formatToPlainString(y.default.VfytEu, { shortcut: e })
                        : S.intl.string(y.default["6ZXEjB"]);
            }
        },
        default: function (t) {
            let { onSelect: e, onClose: n = c.Z_ } = t,
                { value: a, onChange: p } = (0, h.U)(),
                m = d.Q$.useSetting(),
                x = A(),
                I = x.length > 0,
                P = l.useMemo(
                    () =>
                        (function (t) {
                            function e(e) {
                                (e.stopPropagation(), t(), (0, g.openUserSettings)(f.X.CLIPS_MANUAL_KEYBIND));
                            }
                            function n(t) {
                                ("Enter" === t.key || " " === t.key) && (t.preventDefault(), e(t));
                            }
                            return (t, l) =>
                                (0, i.jsx)(
                                    r.Q,
                                    { text: t, textVariant: "body-xs/medium", onClick: e, onKeyDown: n },
                                    l,
                                );
                        })(n),
                    [n],
                ),
                j = {
                    off: null,
                    manual: I
                        ? S.intl.format(y.default.QWyKXz, { keybind: x, editKeybindHook: P })
                        : S.intl.format(y.default["Sb+V+3"], { editKeybindHook: P }),
                    auto: I
                        ? S.intl.formatToPlainString(y.default.BvKcH9, { keybind: x })
                        : S.intl.string(y.default.VWJbxP),
                },
                C = S.intl.string(y.default.eIX9be);
            return (0, i.jsxs)(o.W, {
                navId: "clips-capture-mode",
                "aria-label": C,
                onClose: n,
                onSelect: e,
                children: [
                    (0, i.jsx)(s.rX, {
                        label: C,
                        children: k.map((t) => {
                            let { mode: e, message: n } = t;
                            return (0, i.jsx)(
                                s.iD,
                                {
                                    id: `clips-capture-mode-${e}`,
                                    group: "clips-capture-mode",
                                    label: S.intl.string(n),
                                    subtext: j[e],
                                    checked: a === e,
                                    action: () => p(e),
                                },
                                e,
                            );
                        }),
                    }),
                    (0, i.jsx)(s.rX, {
                        children: (0, i.jsx)(s.fP, {
                            id: "clips-capture-mode-voice",
                            label: S.intl.string(y.default["IxZyA+"]),
                            subtext: S.intl.string(y.default.t23RLK),
                            checked: m,
                            action: (t) => (0, b.eQ)({ allowVoiceRecording: t }),
                        }),
                    }),
                    (0, i.jsx)(s.rX, {
                        children: (0, i.jsx)(s.Dr, {
                            id: "clips-capture-mode-settings",
                            label: S.intl.string(S.t.J1hsY2),
                            iconLeft: u.SettingsIcon,
                            leadingAccessory: { type: "icon", icon: u.SettingsIcon },
                            action: () => (0, g.openUserSettings)(f.X.CLIPS_PANEL),
                        }),
                    }),
                ],
            });
        },
    },
);
