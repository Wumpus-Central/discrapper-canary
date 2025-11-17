n.d(e, { default: () => h }), n(35282);
var i = n(54381),
    r = n(473749),
    a = n(793030),
    o = n(481060),
    s = n(536442),
    c = n(13140),
    l = n(487029),
    d = n(388032),
    u = n(71661);
function h(t) {
    let { guildId: e, channel: h, keybind: y, transitionState: b, onClose: k } = t,
        p = r.useCallback(async () => {
            (0, s.Kw)(s.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await k();
        }, [k]),
        f = r.useCallback(async () => {
            await p(),
                (0, o.ZDy)(async () => {
                    let { default: t } = await n.e("58120").then(n.bind(n, 355453));
                    return (e) =>
                        (0, i.jsx)(
                            t,
                            (function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (e) {
                                            var i;
                                            (i = n[e]),
                                                e in t
                                                    ? Object.defineProperty(t, e, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (t[e] = i);
                                        });
                                }
                                return t;
                            })({}, e),
                        );
                });
        }, [p]),
        j = r.useMemo(
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
    return (0, i.jsxs)(a.Modal, {
        onClose: p,
        actions: j,
        transitionState: b,
        title: d.intl.string(d.t.yJeV51),
        children: [
            (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                children: d.intl.format(d.t.fq3Swz, {
                    keybind: (0, c.BB)(y.shortcut, !0).split(" + "),
                    keybindHook: (t, e) =>
                        (0, i.jsx)(
                            "span",
                            {
                                className: u.keybindHintKeys,
                                children: (0, i.jsx)(o.M2$, {
                                    className: u.keybindShortcut,
                                    shortcut: (0, c.BB)(y.shortcut, !1),
                                }),
                            },
                            e,
                        ),
                    openSettingsHook: (t, e) =>
                        (0, i.jsx)(
                            o.Anchor,
                            {
                                onClick: f,
                                children: t,
                            },
                            e,
                        ),
                }),
            }),
            (0, i.jsx)("div", {
                className: u.soundWheel,
                children: (0, i.jsx)(l.Z, {
                    width: 372,
                    height: 316,
                    guildId: e,
                    channel: h,
                    interactive: !1,
                    keepOpen: !0,
                    onClose: () => {},
                    analyticsSource: "education modal",
                }),
            }),
        ],
    });
}
