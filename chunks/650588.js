var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(646514),
    o = n(834730),
    u = n(265872),
    c = n(305866),
    d = n(939249),
    m = n(7807),
    p = n(807348),
    C = n(327289),
    h = n(792996),
    f = n(649028);
let E = [54, 8, 8, 8];
n.d(
    t,
    {},
    {
        A: function (e) {
            let { onSelect: t, sound: n } = e,
                [r, S] = i.useState(!1),
                I = i.useRef(null),
                g = a()(f.Qq, f.Ow);
            function y(e) {
                (S(!1), t?.(e));
            }
            function A(e) {
                return (0, l.jsxs)("div", {
                    className: f.Ry,
                    children: [
                        (0, l.jsxs)("div", {
                            className: f.__invalid_customGiftHeaderText,
                            children: [
                                (0, l.jsx)(o.E, { variant: "body-md/semibold", children: h.intl.string(h.t.aThJz8) }),
                                (0, l.jsx)(o.E, { variant: "body-sm/normal", children: h.intl.string(h.t.stGFA3) }),
                            ],
                        }),
                        (0, l.jsx)("div", { className: f.$H, children: e }),
                    ],
                });
            }
            return (0, l.jsx)(u.Y, {
                targetElementRef: I,
                shouldShow: r,
                position: "bottom",
                align: "left",
                onRequestClose: () => S(!1),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(c.l, {
                        children: (0, l.jsx)(C.A, {
                            suppressPlaySound: !0,
                            shouldShowLockedSounds: !1,
                            guildId: null,
                            channel: null,
                            onClose: t,
                            onSelect: y,
                            analyticsSource: "gift soundboard",
                            soundButtonOverlay: p.If.ADD,
                            listPadding: E,
                            renderHeader: A,
                            defaultSoundsOnly: !0,
                        }),
                    });
                },
                children: () =>
                    (0, l.jsx)(d.D, {
                        className: a()(f.kL, f.Ow),
                        onClick: () => S(!0),
                        innerRef: I,
                        children:
                            null == n
                                ? (0, l.jsxs)("div", {
                                      className: f.hQ,
                                      children: [
                                          (0, l.jsx)(m.SoundboardIcon, {
                                              size: "custom",
                                              color: s.A.colors.ICON_STRONG,
                                              className: f.tc,
                                              width: 14,
                                              height: 14,
                                          }),
                                          (0, l.jsx)(o.E, {
                                              className: g,
                                              variant: "body-sm/semibold",
                                              lineClamp: 1,
                                              children: h.intl.string(h.t.aThJz8),
                                          }),
                                      ],
                                  })
                                : (0, l.jsxs)("div", {
                                      className: f.hQ,
                                      children: [
                                          (0, l.jsx)(o.E, {
                                              className: g,
                                              variant: "body-sm/semibold",
                                              lineClamp: 1,
                                              children: n.emojiName,
                                          }),
                                          (0, l.jsx)(o.E, {
                                              className: g,
                                              variant: "body-sm/semibold",
                                              lineClamp: 1,
                                              children: n.name,
                                          }),
                                      ],
                                  }),
                    }),
            });
        },
    },
);
