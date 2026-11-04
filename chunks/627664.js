i.d(e, { default: () => N });
var a = i(477900),
    s = i(582128),
    n = i(858899),
    l = i(192308),
    r = i(173936),
    c = i(138399),
    o = i(92961),
    d = i(451909),
    u = i(378570),
    m = i(223863),
    v = i(734057),
    x = i(957565),
    h = i(403362),
    p = i(640794),
    f = i(97808),
    k = i(778712),
    C = i(834730),
    g = i(427262),
    y = i(253400),
    w = i(527212),
    A = i(718019),
    b = i(887640);
let j = y.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    P = k._3.SIZE_40;
function E(t) {
    let { user: e } = t,
        i = (0, w._c)(e.id),
        { avatarProps: s, eventHandlers: n } = (0, A.V)({ user: e, displayProfile: i, avatarSize: P }),
        l = g.Ay.useName(e),
        r = g.Ay.useUserTag(e);
    return (0, a.jsxs)("div", {
        className: b.V,
        children: [
            (0, a.jsx)(j, { ...s, ...n, statusBackdropColor: void 0 }),
            (0, a.jsxs)("div", {
                className: b.D,
                children: [
                    (0, a.jsx)(C.E, { variant: "body-md/medium", color: "text-default", lineClamp: 1, children: l }),
                    (0, a.jsx)(C.E, { variant: "body-sm/medium", color: "text-muted", lineClamp: 1, children: r }),
                ],
            }),
        ],
    });
}
var _ = i(381941),
    I = i(792996);
function N(t) {
    let { user: e, source: i, onClose: f, ...k } = t,
        C = (0, p.A)(e.id),
        g = s.useCallback(
            async (t, e, i) => {
                let { withMessage: a, transitionToDestination: s, closeAfterSend: r } = e;
                i(!0);
                try {
                    let e = (await Promise.all(t.map(m.pk))).filter(h.Vq);
                    if (0 === e.length) return void i(!1);
                    r && f();
                    let o =
                        null != a && "" !== a
                            ? `${C}

${a}`
                            : C;
                    for (let t of e) {
                        let e = v.A.getChannel(t);
                        null != e &&
                            (await c.A.sendMessage(e.id, d.Ay.parse(e, o), !1, { location: _.Hx.USER_PROFILE }));
                    }
                    ((0, n.P0)({ text: I.intl.string(I.t.kwmYkt), variant: "success" }),
                        s && null != e[0] && ((0, u.iN)(e[0], { openTextInVoiceIfVoiceChannel: !0 }), (0, l.s7)()));
                } catch (t) {
                    (0, n.P0)({ text: I.intl.string(I.t.iufib1), variant: "critical" });
                } finally {
                    i(!1);
                }
            },
            [f, C],
        ),
        y = s.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    "aria-label": I.intl.string(I.t.WqhZss),
                    onClick: () => {
                        (0, x.C)(C, () => (0, n.P0)({ text: I.intl.string(I.t["L/PwZf"]), variant: "success" }));
                    },
                    icon: r.LinkIcon,
                },
            ],
            [C],
        );
    return (0, a.jsx)(o.ForwardModal, {
        ...k,
        onClose: f,
        source: i,
        customTitle: I.intl.string(I.t["sFN1/M"]),
        customPreview: (0, a.jsx)(E, { user: e }),
        customSendHandler: g,
        additionalActions: y,
    });
}
