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
    I = n(270607);
n(696016);
var k = n(652215),
    P = n(683825),
    j = n(792996),
    C = n(97580);
let S = [
    { mode: "off", message: P.default["uO/2T5"] },
    { mode: "manual", message: P.default.bBlUzK },
    { mode: "auto", message: P.default["4gzBi+"] },
];
function v() {
    return (0, a.bG)([b.Ay], () =>
        (0, h.dI)(b.Ay.getKeybindForAction(k.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, h.OH)("alt+c"), !0),
    );
}
function _(e) {
    let { label: t } = e;
    return (0, i.jsxs)("div", {
        className: C.v,
        children: [t, (0, i.jsx)(r.NitroWheelIcon, { size: "xs", color: s.A.colors.PREMIUM_NITRO_PINK_TEXT })],
    });
}
n.d(
    t,
    {},
    {
        T: v,
        Y: function () {
            let { value: e } = (0, y.U)(),
                t = v();
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
            let { onSelect: t, onClose: n = f.Z_ } = e,
                { value: a, onChange: r } = (0, y.U)(),
                { isLocked: s, openRoadblock: b } = (0, I.B)("ClipsCaptureModeMenu"),
                h = g.Q$.useSetting(),
                k = v(),
                C = k.length > 0,
                A = s("manual"),
                T = l.useMemo(
                    () =>
                        A
                            ? () => null
                            : (function (e) {
                                  function t(t) {
                                      (t.stopPropagation(), e(), (0, p.openUserSettings)(m.X.CLIPS_MANUAL_KEYBIND));
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
                    [A, n],
                ),
                E = {
                    off: null,
                    manual: C
                        ? j.intl.format(P.default.QWyKXz, { keybind: k, editKeybindHook: T })
                        : j.intl.format(P.default["Sb+V+3"], { editKeybindHook: T }),
                    auto: C
                        ? j.intl.formatToPlainString(P.default.BvKcH9, { keybind: k })
                        : j.intl.string(P.default.VWJbxP),
                },
                U = j.intl.string(P.default.eIX9be);
            return (0, i.jsxs)(c.W, {
                navId: "clips-capture-mode",
                "aria-label": U,
                onClose: n,
                onSelect: t,
                children: [
                    (0, i.jsx)(u.rX, {
                        label: U,
                        children: S.map(function (e) {
                            var t;
                            let { mode: l, message: o } = e,
                                c = s(l);
                            return (0, i.jsx)(
                                u.iD,
                                {
                                    id: `clips-capture-mode-${l}`,
                                    group: "clips-capture-mode",
                                    ...((t = j.intl.string(o)),
                                    c ? { void_label: (0, i.jsx)(_, { label: t }) } : { label: t }),
                                    subtext: E[l],
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
                            label: j.intl.string(P.default["IxZyA+"]),
                            subtext: j.intl.string(P.default.t23RLK),
                            checked: h,
                            action: (e) => (0, x.eQ)({ allowVoiceRecording: e }),
                        }),
                    }),
                    !A &&
                        (0, i.jsx)(u.rX, {
                            children: (0, i.jsx)(u.Dr, {
                                id: "clips-capture-mode-settings",
                                label: j.intl.string(j.t.J1hsY2),
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
