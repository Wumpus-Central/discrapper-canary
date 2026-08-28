n.d(t, { A: () => S });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(661531),
    o = n(834730),
    u = n(922016),
    c = n(305866),
    d = n(939249),
    m = n(7807),
    p = n(807348),
    C = n(930946),
    h = n(375708),
    f = n(649028);
let E = [54, 8, 8, 8];
function S(e) {
    let { onSelect: t, sound: n } = e,
        [r, S] = i.useState(!1),
        y = i.useRef(null),
        I = a()(f.Qq, f.Ow);
    function A(e) {
        S(!1), t?.(e);
    }
    function g(e) {
        return (0, l.jsxs)("div", {
            className: f.Ry,
            children: [
                (0, l.jsxs)("div", {
                    className: f.__invalid_customGiftHeaderText,
                    children: [
                        (0, l.jsx)(o.E, { variant: "text-md/bold", children: h.intl.string(h.t.aThJz8) }),
                        (0, l.jsx)(o.E, { variant: "text-sm/normal", children: h.intl.string(h.t.stGFA3) }),
                    ],
                }),
                (0, l.jsx)("div", { className: f.$H, children: e }),
            ],
        });
    }
    return (0, l.jsx)(u.Y, {
        targetElementRef: y,
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
                    onSelect: A,
                    analyticsSource: "gift soundboard",
                    soundButtonOverlay: p.If.ADD,
                    listPadding: E,
                    renderHeader: g,
                    defaultSoundsOnly: !0,
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: a()(f.kL, f.Ow),
                onClick: () => S(!0),
                innerRef: y,
                children:
                    null == n
                        ? (0, l.jsxs)("div", {
                              className: f.hQ,
                              children: [
                                  (0, l.jsx)(m.J, {
                                      size: "custom",
                                      color: s.A.colors.ICON_STRONG,
                                      className: f.tc,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: h.intl.string(h.t.aThJz8),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: f.hQ,
                              children: [
                                  (0, l.jsx)(o.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.emojiName,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name,
                                  }),
                              ],
                          }),
            }),
    });
}
