n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(397927),
    c = n(170887),
    u = n(807348),
    d = n(989799),
    f = n(985018),
    p = n(879254);
let _ = [54, 8, 8, 8];

function h(e) {
    let { onSelect: t, sound: n } = e,
        [a, h] = i.useState(!1),
        m = i.useRef(null),
        g = (0, c.A)({
            location: "GiftSoundboard",
        }),
        E = s()(p.Qq, g && p.Ow);

    function b(e) {
        h(!1), null == t || t(e);
    }
    let y = (e) =>
        (0, r.jsxs)("div", {
            className: p.Ry,
            children: [
                (0, r.jsxs)("div", {
                    className: p.__invalid_customGiftHeaderText,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: "text-md/bold",
                            children: f.intl.string(f.t.aThJz8),
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: f.intl.string(f.t.stGFA3),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: p.$H,
                    children: e,
                }),
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
                    onSelect: b,
                    analyticsSource: "gift soundboard",
                    soundButtonOverlay: u.If.ADD,
                    listPadding: _,
                    renderHeader: y,
                    defaultSoundsOnly: !0,
                }),
            });
        },
        children: () =>
            (0, r.jsx)(l.DUT, {
                className: s()(p.kL, g && p.Ow),
                onClick: () => h(!0),
                innerRef: m,
                children:
                    null == n
                        ? (0, r.jsxs)("div", {
                              className: p.hQ,
                              children: [
                                  (0, r.jsx)(l.JMI, {
                                      size: "custom",
                                      color: g ? o.A.colors.ICON_STRONG : o.A.colors.WHITE,
                                      className: p.tc,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      className: E,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: f.intl.string(f.t.aThJz8),
                                  }),
                              ],
                          })
                        : (0, r.jsxs)("div", {
                              className: p.hQ,
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
