n.d(t, { A: () => A });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(661531),
    o = n(834730),
    u = n(922016),
    c = n(305866),
    d = n(939249),
    p = n(7807),
    m = n(807348),
    C = n(333216),
    h = n(375708),
    E = n(552055);
let f = [54, 8, 8, 8];
function A(e) {
    let { onSelect: t, sound: n } = e,
        [r, A] = i.useState(!1),
        S = i.useRef(null),
        y = a()(E.Qq, E.Ow);
    function P(e) {
        A(!1), t?.(e);
    }
    function I(e) {
        return (0, l.jsxs)("div", {
            className: E.Ry,
            children: [
                (0, l.jsxs)("div", {
                    className: E.__invalid_customGiftHeaderText,
                    children: [
                        (0, l.jsx)(o.E, { variant: "text-md/bold", children: h.intl.string(h.t.aThJz8) }),
                        (0, l.jsx)(o.E, { variant: "text-sm/normal", children: h.intl.string(h.t.stGFA3) }),
                    ],
                }),
                (0, l.jsx)("div", { className: E.$H, children: e }),
            ],
        });
    }
    return (0, l.jsx)(u.Y, {
        targetElementRef: S,
        shouldShow: r,
        position: "bottom",
        align: "left",
        onRequestClose: () => A(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(C.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: P,
                    analyticsSource: "gift soundboard",
                    soundButtonOverlay: m.If.ADD,
                    listPadding: f,
                    renderHeader: I,
                    defaultSoundsOnly: !0,
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: a()(E.kL, E.Ow),
                onClick: () => A(!0),
                innerRef: S,
                children:
                    null == n
                        ? (0, l.jsxs)("div", {
                              className: E.hQ,
                              children: [
                                  (0, l.jsx)(p.J, {
                                      size: "custom",
                                      color: s.A.colors.ICON_STRONG,
                                      className: E.tc,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: y,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: h.intl.string(h.t.aThJz8),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: E.hQ,
                              children: [
                                  (0, l.jsx)(o.E, {
                                      className: y,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.emojiName,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: y,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name,
                                  }),
                              ],
                          }),
            }),
    });
}
