n.d(t, { A: () => y });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(661531),
    o = n(834730),
    u = n(922016),
    c = n(305866),
    d = n(939249),
    p = n(7807),
    m = n(807348),
    h = n(277192),
    A = n(375708),
    E = n(139599);
let C = [54, 8, 8, 8];
function y(e) {
    let { onSelect: t, sound: n } = e,
        [i, y] = r.useState(!1),
        _ = r.useRef(null),
        S = a()(E.Qq, E.Ow);
    function P(e) {
        y(!1), t?.(e);
    }
    let I = (e) =>
        (0, l.jsxs)("div", {
            className: E.Ry,
            children: [
                (0, l.jsxs)("div", {
                    className: E.__invalid_customGiftHeaderText,
                    children: [
                        (0, l.jsx)(o.E, { variant: "text-md/bold", children: A.intl.string(A.t.aThJz8) }),
                        (0, l.jsx)(o.E, { variant: "text-sm/normal", children: A.intl.string(A.t.stGFA3) }),
                    ],
                }),
                (0, l.jsx)("div", { className: E.$H, children: e }),
            ],
        });
    return (0, l.jsx)(u.Y, {
        targetElementRef: _,
        shouldShow: i,
        position: "bottom",
        align: "left",
        onRequestClose: () => y(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(h.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: P,
                    analyticsSource: "gift soundboard",
                    soundButtonOverlay: m.If.ADD,
                    listPadding: C,
                    renderHeader: I,
                    defaultSoundsOnly: !0,
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: a()(E.kL, E.Ow),
                onClick: () => y(!0),
                innerRef: _,
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
                                      className: S,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: A.intl.string(A.t.aThJz8),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: E.hQ,
                              children: [
                                  (0, l.jsx)(o.E, {
                                      className: S,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.emojiName,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: S,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name,
                                  }),
                              ],
                          }),
            }),
    });
}
