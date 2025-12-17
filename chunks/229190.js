n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(388032),
    s = n(24793);
function o(e) {
    let { showSecondaryColor: t, palette: n, onPrimaryColorChange: o, onSecondaryColorChange: c } = e,
        d = i.useRef(null);
    return (
        (0, l.Tbt)(d),
        (0, r.jsxs)("div", {
            className: s.popoutContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: s.customColorsHeader,
                    children: a.intl.string(a.t.JhNpgy),
                }),
                (0, r.jsxs)("div", {
                    ref: d,
                    className: s.colorPickersContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: s.colorColumn,
                            children: [
                                (0, r.jsx)("div", {
                                    className: s.colorSwatch,
                                    style: { backgroundColor: n.primary },
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: a.intl.string(a.t.C3KTQk),
                                }),
                                (0, r.jsx)(l.Z$W, {
                                    className: s.colorPicker,
                                    value: n.primary,
                                    eagerUpdate: !0,
                                    wrapperComponentType: "div",
                                    showEyeDropper: !0,
                                    onChange: o,
                                }),
                            ],
                        }),
                        t &&
                            (0, r.jsxs)("div", {
                                className: s.colorColumn,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: s.colorSwatch,
                                        style: { backgroundColor: n.secondary },
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-default",
                                        children: a.intl.string(a.t["8elvy6"]),
                                    }),
                                    (0, r.jsx)(l.Z$W, {
                                        className: s.colorPicker,
                                        value: n.secondary,
                                        eagerUpdate: !0,
                                        wrapperComponentType: "div",
                                        showEyeDropper: !0,
                                        onChange: c,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function c(e) {
    let {
        shouldShow: t,
        showSecondaryColor: n,
        onRequestClose: i,
        children: a,
        palette: s,
        onPrimaryColorChange: c,
        onSecondaryColorChange: d,
        popoutTargetRef: u,
    } = e;
    return (0, r.jsx)(l.yRy, {
        targetElementRef: u,
        renderPopout: () =>
            (0, r.jsx)(o, {
                showSecondaryColor: n,
                palette: s,
                onPrimaryColorChange: c,
                onSecondaryColorChange: d,
            }),
        position: "top",
        shouldShow: t,
        onRequestClose: i,
        animation: l.yRy.Animation.TRANSLATE,
        animationPosition: "right",
        children: a,
    });
}
