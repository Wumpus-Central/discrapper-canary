"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(834730),
    u = n(265872),
    c = n(305866),
    d = n(939249),
    _ = n(7807),
    f = n(807348),
    p = n(989799),
    h = n(985018),
    E = n(139599);
let m = [54, 8, 8, 8];
function g(e) {
    let { onSelect: t, sound: n } = e,
        [s, g] = i.useState(!1),
        A = i.useRef(null),
        I = a()(E.Qq, E.Ow);
    function T(e) {
        g(!1), t?.(e);
    }
    let S = (e) =>
        (0, r.jsxs)("div", {
            className: E.Ry,
            children: [
                (0, r.jsxs)("div", {
                    className: E.__invalid_customGiftHeaderText,
                    children: [
                        (0, r.jsx)(l.E, { variant: "text-md/bold", children: h.intl.string(h.t.aThJz8) }),
                        (0, r.jsx)(l.E, { variant: "text-sm/normal", children: h.intl.string(h.t.stGFA3) }),
                    ],
                }),
                (0, r.jsx)("div", { className: E.$H, children: e }),
            ],
        });
    return (0, r.jsx)(u.Y, {
        targetElementRef: A,
        shouldShow: s,
        position: "bottom",
        align: "left",
        onRequestClose: () => g(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(c.l, {
                children: (0, r.jsx)(p.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: T,
                    analyticsSource: "gift soundboard",
                    soundButtonOverlay: f.If.ADD,
                    listPadding: m,
                    renderHeader: S,
                    defaultSoundsOnly: !0,
                }),
            });
        },
        children: () =>
            (0, r.jsx)(d.D, {
                className: a()(E.kL, E.Ow),
                onClick: () => g(!0),
                innerRef: A,
                children:
                    null == n
                        ? (0, r.jsxs)("div", {
                              className: E.hQ,
                              children: [
                                  (0, r.jsx)(_.J, {
                                      size: "custom",
                                      color: o.A.colors.ICON_STRONG,
                                      className: E.tc,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, r.jsx)(l.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: h.intl.string(h.t.aThJz8),
                                  }),
                              ],
                          })
                        : (0, r.jsxs)("div", {
                              className: E.hQ,
                              children: [
                                  (0, r.jsx)(l.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.emojiName,
                                  }),
                                  (0, r.jsx)(l.E, {
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
