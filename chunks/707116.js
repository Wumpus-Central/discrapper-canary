var i = n(477900),
    l = n(582128),
    a = n(855986),
    o = n(123292),
    r = n(403581),
    s = n(646514),
    u = n(477782),
    c = n(165862),
    d = n(625903),
    f = n(442433),
    g = n(253932),
    m = n(780964),
    p = n(766075),
    b = n(532624),
    h = n(350535),
    x = n(489496),
    y = n(464132),
    j = n(270607);
n(696016);
var k = n(652215),
    I = n(683825),
    P = n(792996),
    S = n(97580);
let v = [
    { mode: "off", message: I.default["uO/2T5"] },
    { mode: "manual", message: I.default.bBlUzK },
    { mode: "auto", message: I.default["4gzBi+"] },
];
function A() {
    return (0, a.bG)([b.Ay], () =>
        (0, h.dI)(b.Ay.getKeybindForAction(k.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, h.OH)("alt+c"), !0),
    );
}
function C(t) {
    let { label: e } = t;
    return (0, i.jsxs)("div", {
        className: S.v,
        children: [e, (0, i.jsx)(r.NitroWheelIcon, { size: "xs", color: s.A.colors.PREMIUM_NITRO_PINK_TEXT })],
    });
}
n.d(
    e,
    {},
    {
        T: A,
        Y: function () {
            let { value: t } = (0, y.U)(),
                e = A();
            switch (t) {
                case "off":
                    return P.intl.string(I.default["uO/2T5"]);
                case "manual":
                    return e.length > 0
                        ? P.intl.formatToPlainString(I.default.pGVUxA, { shortcut: e })
                        : P.intl.string(I.default.ms4ibY);
                case "auto":
                    return e.length > 0
                        ? P.intl.formatToPlainString(I.default.VfytEu, { shortcut: e })
                        : P.intl.string(I.default["6ZXEjB"]);
            }
        },
        default: function (t) {
            let { onSelect: e, onClose: n = f.Z_ } = t,
                { value: a, onChange: r } = (0, y.U)(),
                { isLocked: s, openRoadblock: b } = (0, j.B)("ClipsCaptureModeMenu"),
                h = g.Q$.useSetting(),
                k = A(),
                S = k.length > 0,
                _ = s("manual"),
                X = l.useMemo(
                    () =>
                        _
                            ? () => null
                            : (function (t) {
                                  function e(e) {
                                      (e.stopPropagation(), t(), (0, p.openUserSettings)(m.X.CLIPS_MANUAL_KEYBIND));
                                  }
                                  function n(t) {
                                      ("Enter" === t.key || " " === t.key) && (t.preventDefault(), e(t));
                                  }
                                  return (t, l) =>
                                      (0, i.jsx)(
                                          o.Q,
                                          { text: t, textVariant: "body-xs/medium", onClick: e, onKeyDown: n },
                                          l,
                                      );
                              })(n),
                    [_, n],
                ),
                T = {
                    off: null,
                    manual: S
                        ? P.intl.format(I.default.QWyKXz, { keybind: k, editKeybindHook: X })
                        : P.intl.format(I.default["Sb+V+3"], { editKeybindHook: X }),
                    auto: S
                        ? P.intl.formatToPlainString(I.default.BvKcH9, { keybind: k })
                        : P.intl.string(I.default.VWJbxP),
                },
                B = P.intl.string(I.default.eIX9be);
            return (0, i.jsxs)(c.W, {
                navId: "clips-capture-mode",
                "aria-label": B,
                onClose: n,
                onSelect: e,
                children: [
                    (0, i.jsx)(u.rX, {
                        label: B,
                        children: v.map(function (t) {
                            var e;
                            let { mode: l, message: o } = t,
                                c = s(l);
                            return (0, i.jsx)(
                                u.iD,
                                {
                                    id: `clips-capture-mode-${l}`,
                                    group: "clips-capture-mode",
                                    ...((e = P.intl.string(o)),
                                    c ? { void_label: (0, i.jsx)(C, { label: e }) } : { label: e }),
                                    subtext: T[l],
                                    checked: a === l,
                                    action: () => (c ? void (n(), b()) : r(l)),
                                },
                                l,
                            );
                        }),
                    }),
                    (0, i.jsx)(u.rX, {
                        children: (0, i.jsx)(u.fP, {
                            id: "clips-capture-mode-voice",
                            label: P.intl.string(I.default["IxZyA+"]),
                            subtext: P.intl.string(I.default.GjNXmw),
                            checked: h,
                            action: (t) => (0, x.eQ)({ allowVoiceRecording: t }),
                        }),
                    }),
                    !_ &&
                        (0, i.jsx)(u.rX, {
                            children: (0, i.jsx)(u.Dr, {
                                id: "clips-capture-mode-settings",
                                label: P.intl.string(P.t.J1hsY2),
                                iconLeft: d.SettingsIcon,
                                leadingAccessory: { type: "icon", icon: d.SettingsIcon },
                                action: () => (0, p.openUserSettings)(m.X.CLIPS_PANEL),
                            }),
                        }),
                ],
            });
        },
    },
);
