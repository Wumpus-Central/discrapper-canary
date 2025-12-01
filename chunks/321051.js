n.d(t, { Z: () => m }), n(388685);
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
    p = n(596806);
let _ = [54, 8, 8, 8];
function m(e) {
    let { onSelect: t, sound: n } = e,
        [a, m] = i.useState(!1),
        h = i.useRef(null),
        g = (0, c.Z)({ location: "GiftSoundboard" }),
        E = o()(p.text, g && p.refresh);
    function b(e) {
        m(!1), null == t || t(e);
    }
    let y = (e) =>
        (0, r.jsxs)("div", {
            className: p.customGiftHeader,
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
                    className: p.searchAndSound,
                    children: e,
                }),
            ],
        });
    return (0, r.jsx)(l.yRy, {
        targetElementRef: h,
        shouldShow: a,
        position: "bottom",
        align: "left",
        onRequestClose: () => m(!1),
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
                    listPadding: _,
                    renderHeader: y,
                    defaultSoundsOnly: !0,
                }),
            });
        },
        children: () =>
            (0, r.jsx)(l.P3F, {
                className: o()(p.container, g && p.refresh),
                onClick: () => m(!0),
                innerRef: h,
                children:
                    null == n
                        ? (0, r.jsxs)("div", {
                              className: p.contentContainer,
                              children: [
                                  (0, r.jsx)(l.KY1, {
                                      size: "custom",
                                      color: g ? s.Z.colors.ICON_PRIMARY : s.Z.colors.WHITE,
                                      className: p.soundIcon,
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
                              className: p.contentContainer,
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
