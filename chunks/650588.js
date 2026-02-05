"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(397927),
    u = n(170887),
    c = n(807348),
    d = n(989799),
    _ = n(985018),
    f = n(879254);
let p = [54, 8, 8, 8];
function h(e) {
    let { onSelect: t, sound: n } = e,
        [a, h] = i.useState(!1),
        m = i.useRef(null),
        g = (0, u.A)({ location: "GiftSoundboard" }),
        E = s()(f.Qq, g && f.Ow);
    function A(e) {
        h(!1), t?.(e);
    }
    let I = (e) =>
        (0, r.jsxs)("div", {
            className: f.Ry,
            children: [
                (0, r.jsxs)("div", {
                    className: f.__invalid_customGiftHeaderText,
                    children: [
                        (0, r.jsx)(l.Text, { variant: "text-md/bold", children: _.intl.string(_.t.aThJz8) }),
                        (0, r.jsx)(l.Text, { variant: "text-sm/normal", children: _.intl.string(_.t.stGFA3) }),
                    ],
                }),
                (0, r.jsx)("div", { className: f.$H, children: e }),
            ],
        });
    return (0, r.jsx)(l.YNO, {
        targetElementRef: m,
        shouldShow: a,
        position: "bottom",
        align: "left",
        onRequestClose: () => h(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(l.lGe, {
                children: (0, r.jsx)(d.A, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: A,
                    analyticsSource: "gift soundboard",
                    soundButtonOverlay: c.If.ADD,
                    listPadding: p,
                    renderHeader: I,
                    defaultSoundsOnly: !0,
                }),
            });
        },
        children: () =>
            (0, r.jsx)(l.DUT, {
                className: s()(f.kL, g && f.Ow),
                onClick: () => h(!0),
                innerRef: m,
                children:
                    null == n
                        ? (0, r.jsxs)("div", {
                              className: f.hQ,
                              children: [
                                  (0, r.jsx)(l.JMI, {
                                      size: "custom",
                                      color: g ? o.A.colors.ICON_STRONG : o.A.colors.WHITE,
                                      className: f.tc,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      className: E,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: _.intl.string(_.t.aThJz8),
                                  }),
                              ],
                          })
                        : (0, r.jsxs)("div", {
                              className: f.hQ,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      className: E,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.emojiName,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      className: E,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name,
                                  }),
                              ],
                          }),
            }),
    });
}
