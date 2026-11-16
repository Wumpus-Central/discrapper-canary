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
    p = n(780964),
    m = n(766075),
    b = n(532624),
    h = n(350535),
    x = n(489496),
    y = n(464132),
    k = n(270607);
n(696016);
var I = n(652215),
    j = n(683825),
    P = n(792996),
    S = n(97580);
let v = [
    { mode: "off", message: j.default["uO/2T5"] },
    { mode: "manual", message: j.default.bBlUzK },
    { mode: "auto", message: j.default["4gzBi+"] },
];
function A() {
    return (0, a.bG)([b.Ay], () =>
        (0, h.dI)(b.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, h.OH)("alt+c"), !0),
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
                    return P.intl.string(j.default["uO/2T5"]);
                case "manual":
                    return e.length > 0
                        ? P.intl.formatToPlainString(j.default.pGVUxA, { shortcut: e })
                        : P.intl.string(j.default.ms4ibY);
                case "auto":
                    return e.length > 0
                        ? P.intl.formatToPlainString(j.default.VfytEu, { shortcut: e })
                        : P.intl.string(j.default["6ZXEjB"]);
            }
        },
        default: function (t) {
            let { onSelect: e, onClose: n = f.Z_ } = t,
                { value: a, onChange: r } = (0, y.U)(),
                { isLocked: s, openRoadblock: b } = (0, k.B)("ClipsCaptureModeMenu"),
                h = g.Q$.useSetting(),
                I = A(),
                S = I.length > 0,
                _ = s("manual"),
                T = l.useMemo(
                    () =>
                        _
                            ? () => null
                            : (function (t) {
                                  function e(e) {
                                      (e.stopPropagation(), t(), (0, m.openUserSettings)(p.X.CLIPS_MANUAL_KEYBIND));
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
                X = {
                    off: null,
                    manual: S
                        ? P.intl.format(j.default.QWyKXz, { keybind: I, editKeybindHook: T })
                        : P.intl.format(j.default["Sb+V+3"], { editKeybindHook: T }),
                    auto: S
                        ? P.intl.formatToPlainString(j.default.BvKcH9, { keybind: I })
                        : P.intl.string(j.default.VWJbxP),
                },
                B = P.intl.string(j.default.eIX9be);
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
                                    subtext: X[l],
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
                            label: P.intl.string(j.default["IxZyA+"]),
                            subtext: P.intl.string(j.default.t23RLK),
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
                                action: () => (0, m.openUserSettings)(p.X.CLIPS_PANEL),
                            }),
                        }),
                ],
            });
        },
    },
);
