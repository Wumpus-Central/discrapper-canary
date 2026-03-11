"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(397927),
    u = n(807348),
    c = n(989799),
    d = n(985018),
    _ = n(879254);
let f = [54, 8, 8, 8];
function p(e) {
    let { onSelect: t, sound: n } = e,
        [s, p] = i.useState(!1),
        h = i.useRef(null),
        m = a()(_.Qq, _.Ow);
    function E(e) {
        p(!1), t?.(e);
    }
    let g = (e) =>
        (0, r.jsxs)("div", {
            className: _.Ry,
            children: [
                (0, r.jsxs)("div", {
                    className: _.__invalid_customGiftHeaderText,
                    children: [
                        (0, r.jsx)(l.Text, { variant: "text-md/bold", children: d.intl.string(d.t.aThJz8) }),
                        (0, r.jsx)(l.Text, { variant: "text-sm/normal", children: d.intl.string(d.t.stGFA3) }),
                    ],
                }),
                (0, r.jsx)("div", { className: _.$H, children: e }),
            ],
        });
    return (0, r.jsx)(l.YNO, {
        targetElementRef: h,
        shouldShow: s,
        position: "bottom",
        align: "left",
        onRequestClose: () => p(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(l.lGe, {
                children: (0, r.jsx)(c.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: E,
                    analyticsSource: "gift soundboard",
                    soundButtonOverlay: u.If.ADD,
                    listPadding: f,
                    renderHeader: g,
                    defaultSoundsOnly: !0,
                }),
            });
        },
        children: () =>
            (0, r.jsx)(l.DUT, {
                className: a()(_.kL, _.Ow),
                onClick: () => p(!0),
                innerRef: h,
                children:
                    null == n
                        ? (0, r.jsxs)("div", {
                              className: _.hQ,
                              children: [
                                  (0, r.jsx)(l.JMI, {
                                      size: "custom",
                                      color: o.A.colors.ICON_STRONG,
                                      className: _.tc,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      className: m,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: d.intl.string(d.t.aThJz8),
                                  }),
                              ],
                          })
                        : (0, r.jsxs)("div", {
                              className: _.hQ,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      className: m,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.emojiName,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      className: m,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name,
                                  }),
                              ],
                          }),
            }),
    });
}
