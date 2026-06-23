"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(661531),
    l = n(834730),
    u = n(922016),
    c = n(305866),
    d = n(939249),
    _ = n(7807),
    h = n(807348),
    f = n(277192),
    p = n(375708),
    E = n(139599);
let m = [54, 8, 8, 8];
function g(e) {
    let { onSelect: t, sound: n } = e,
        [s, g] = r.useState(!1),
        A = r.useRef(null),
        I = a()(E.Qq, E.Ow);
    function T(e) {
        g(!1), t?.(e);
    }
    function S(e) {
        return (0, i.jsxs)("div", {
            className: E.Ry,
            children: [
                (0, i.jsxs)("div", {
                    className: E.__invalid_customGiftHeaderText,
                    children: [
                        (0, i.jsx)(l.E, { variant: "text-md/bold", children: p.intl.string(p.t.aThJz8) }),
                        (0, i.jsx)(l.E, { variant: "text-sm/normal", children: p.intl.string(p.t.stGFA3) }),
                    ],
                }),
                (0, i.jsx)("div", { className: E.$H, children: e }),
            ],
        });
    }
    return (0, i.jsx)(u.Y, {
        targetElementRef: A,
        shouldShow: s,
        position: "bottom",
        align: "left",
        onRequestClose: () => g(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(c.l, {
                children: (0, i.jsx)(f.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: T,
                    analyticsSource: "gift soundboard",
                    soundButtonOverlay: h.If.ADD,
                    listPadding: m,
                    renderHeader: S,
                    defaultSoundsOnly: !0,
                }),
            });
        },
        children: () =>
            (0, i.jsx)(d.D, {
                className: a()(E.kL, E.Ow),
                onClick: () => g(!0),
                innerRef: A,
                children:
                    null == n
                        ? (0, i.jsxs)("div", {
                              className: E.hQ,
                              children: [
                                  (0, i.jsx)(_.J, {
                                      size: "custom",
                                      color: o.A.colors.ICON_STRONG,
                                      className: E.tc,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, i.jsx)(l.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: p.intl.string(p.t.aThJz8),
                                  }),
                              ],
                          })
                        : (0, i.jsxs)("div", {
                              className: E.hQ,
                              children: [
                                  (0, i.jsx)(l.E, {
                                      className: I,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.emojiName,
                                  }),
                                  (0, i.jsx)(l.E, {
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
