n.d(t, { default: () => b }), n(35282);
var i = n(54381),
    a = n(473749),
    r = n(793030),
    c = n(481060),
    o = n(536442),
    s = n(13140),
    l = n(487029),
    d = n(388032),
    u = n(362961);
function b(e) {
    let { guildId: t, channel: b, keybind: h, transitionState: y, onClose: k } = e,
        p = a.useCallback(async () => {
            (0, o.Kw)(o.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await k();
        }, [k]),
        f = a.useCallback(async () => {
            await p(),
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e("58120").then(n.bind(n, 355453));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, t),
                        );
                });
        }, [p]),
        j = a.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: d.intl.string(d.t.TJ0N99),
                    onClick: f,
                },
                {
                    text: d.intl.string(d.t.ZwRzIH),
                    onClick: p,
                    variant: "primary",
                },
            ],
            [f, p],
        );
    return (0, i.jsxs)(r.Modal, {
        onClose: p,
        actions: j,
        transitionState: y,
        title: d.intl.string(d.t.yJeV51),
        children: [
            (0, i.jsx)(c.Text, {
                variant: "text-md/normal",
                children: d.intl.format(d.t.fq3Swz, {
                    keybind: (0, s.BB)(h.shortcut, !0).split(" + "),
                    keybindHook: (e, t) =>
                        (0, i.jsx)(
                            "span",
                            {
                                className: u.keybindHintKeys,
                                children: (0, i.jsx)(c.M2$, {
                                    className: u.keybindShortcut,
                                    shortcut: (0, s.BB)(h.shortcut, !1),
                                }),
                            },
                            t,
                        ),
                    openSettingsHook: (e, t) =>
                        (0, i.jsx)(
                            c.Anchor,
                            {
                                onClick: f,
                                children: e,
                            },
                            t,
                        ),
                }),
            }),
            (0, i.jsx)("div", {
                className: u.soundWheel,
                children: (0, i.jsx)(l.Z, {
                    width: 372,
                    height: 316,
                    guildId: t,
                    channel: b,
                    interactive: !1,
                    keepOpen: !0,
                    onClose: () => {},
                    analyticsSource: "education modal",
                }),
            }),
        ],
    });
}
