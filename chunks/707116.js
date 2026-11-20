var l = n(477900),
    i = n(582128),
    a = n(855986),
    o = n(123292),
    r = n(403581),
    s = n(646514),
    u = n(477782),
    c = n(165862),
    d = n(625903),
    f = n(442433),
    g = n(793574),
    m = n(253932),
    p = n(780964),
    b = n(766075),
    h = n(532624),
    x = n(350535),
    _ = n(489496),
    A = n(464132),
    k = n(270607);
n(696016);
var I = n(652215),
    P = n(683825),
    j = n(792996),
    y = n(97580);
let C = [
    { mode: "off", message: P.default["uO/2T5"] },
    { mode: "manual", message: P.default.bBlUzK },
    { mode: "auto", message: P.default["4gzBi+"] },
];
function S() {
    return (0, a.bG)([h.Ay], () =>
        (0, x.dI)(h.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, x.OH)("alt+c"), !0),
    );
}
function v(e) {
    let { label: t } = e;
    return (0, l.jsxs)("div", {
        className: y.v,
        children: [t, (0, l.jsx)(r.NitroWheelIcon, { size: "xs", color: s.A.colors.PREMIUM_NITRO_PINK_TEXT })],
    });
}
n.d(
    t,
    {},
    {
        T: S,
        Y: function () {
            let { value: e } = (0, A.U)(),
                t = S();
            switch (e) {
                case "off":
                    return j.intl.string(P.default["uO/2T5"]);
                case "manual":
                    return t.length > 0
                        ? j.intl.formatToPlainString(P.default.pGVUxA, { shortcut: t })
                        : j.intl.string(P.default.ms4ibY);
                case "auto":
                    return t.length > 0
                        ? j.intl.formatToPlainString(P.default.VfytEu, { shortcut: t })
                        : j.intl.string(P.default["6ZXEjB"]);
            }
        },
        default: function (e) {
            let { onSelect: t, onClose: n = f.Z_, analyticsLocation: a = g.A.CLIPS_EA_RTC_MODE_ROW } = e,
                { value: r, onChange: s } = (0, A.U)(a),
                { isLocked: h, openRoadblock: x } = (0, k.B)(a),
                I = m.Q$.useSetting(),
                y = S(),
                E = y.length > 0,
                T = h("manual"),
                L = i.useMemo(
                    () =>
                        T
                            ? () => null
                            : (function (e) {
                                  function t(t) {
                                      (t.stopPropagation(), e(), (0, b.openUserSettings)(p.X.CLIPS_MANUAL_KEYBIND));
                                  }
                                  function n(e) {
                                      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), t(e));
                                  }
                                  return (e, i) =>
                                      (0, l.jsx)(
                                          o.Q,
                                          { text: e, textVariant: "body-xs/medium", onClick: t, onKeyDown: n },
                                          i,
                                      );
                              })(n),
                    [T, n],
                ),
                X = {
                    off: null,
                    manual: E
                        ? j.intl.format(P.default.QWyKXz, { keybind: y, editKeybindHook: L })
                        : j.intl.format(P.default["Sb+V+3"], { editKeybindHook: L }),
                    auto: E
                        ? j.intl.formatToPlainString(P.default.BvKcH9, { keybind: y })
                        : j.intl.string(P.default.VWJbxP),
                },
                B = j.intl.string(P.default.eIX9be);
            return (0, l.jsxs)(c.W, {
                navId: "clips-capture-mode",
                "aria-label": B,
                onClose: n,
                onSelect: t,
                children: [
                    (0, l.jsx)(u.rX, {
                        label: B,
                        children: C.map(function (e) {
                            var t;
                            let { mode: i, message: a } = e,
                                o = h(i);
                            return (0, l.jsx)(
                                u.iD,
                                {
                                    id: `clips-capture-mode-${i}`,
                                    group: "clips-capture-mode",
                                    ...((t = j.intl.string(a)),
                                    o ? { void_label: (0, l.jsx)(v, { label: t }) } : { label: t }),
                                    subtext: X[i],
                                    checked: r === i,
                                    action: () => (o ? void (n(), x()) : s(i)),
                                },
                                i,
                            );
                        }),
                    }),
                    (0, l.jsx)(u.rX, {
                        children: (0, l.jsx)(u.fP, {
                            id: "clips-capture-mode-voice",
                            label: j.intl.string(P.default["IxZyA+"]),
                            subtext: j.intl.string(P.default.GjNXmw),
                            checked: I,
                            action: (e) => (0, _.eQ)({ allowVoiceRecording: e, analyticsLocation: a }),
                        }),
                    }),
                    !T &&
                        (0, l.jsx)(u.rX, {
                            children: (0, l.jsx)(u.Dr, {
                                id: "clips-capture-mode-settings",
                                label: j.intl.string(j.t.J1hsY2),
                                iconLeft: d.SettingsIcon,
                                leadingAccessory: { type: "icon", icon: d.SettingsIcon },
                                action: () => (0, b.openUserSettings)(p.X.CLIPS_PANEL),
                            }),
                        }),
                ],
            });
        },
    },
);
