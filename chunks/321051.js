n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(481060),
    c = n(283066),
    u = n(697426),
    d = n(603074),
    f = n(388032),
    _ = n(596806);
let p = [54, 8, 8, 8];
function h(e) {
    let { onSelect: t, sound: n } = e,
        [a, h] = i.useState(!1),
        m = i.useRef(null),
        g = (0, c.Z)({ location: "GiftSoundboard" }),
        E = o()(_.text, g && _.refresh);
    function b(e) {
        h(!1), null == t || t(e);
    }
    let y = (e) =>
        (0, r.jsxs)("div", {
            className: _.customGiftHeader,
            children: [
                (0, r.jsxs)("div", {
                    className: _.__invalid_customGiftHeaderText,
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
                    className: _.searchAndSound,
                    children: e,
                }),
            ],
        });
    return (0, r.jsx)(l.yRy, {
        targetElementRef: m,
        shouldShow: a,
        position: "bottom",
        align: "left",
        onRequestClose: () => h(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(l.VqE, {
                children: (0, r.jsx)(d.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: b,
                    analyticsSource: "gift soundboard",
                    soundButtonOverlay: u.Pb.ADD,
                    listPadding: p,
                    renderHeader: y,
                    defaultSoundsOnly: !0,
                }),
            });
        },
        children: () =>
            (0, r.jsx)(l.P3F, {
                className: o()(_.container, g && _.refresh),
                onClick: () => h(!0),
                innerRef: m,
                children:
                    null == n
                        ? (0, r.jsxs)("div", {
                              className: _.contentContainer,
                              children: [
                                  (0, r.jsx)(l.KY1, {
                                      size: "custom",
                                      color: g ? s.Z.colors.ICON_PRIMARY : s.Z.colors.WHITE,
                                      className: _.soundIcon,
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
                              className: _.contentContainer,
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
