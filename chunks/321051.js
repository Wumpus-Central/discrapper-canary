(n.d(t, { Z: () => f }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(692547),
    o = n(481060),
    s = n(697426),
    l = n(603074),
    c = n(388032),
    u = n(10123);
let d = [54, 8, 8, 8];
function f(e) {
    let { onSelect: t, sound: n } = e,
        [f, _] = i.useState(!1),
        p = i.useRef(null);
    function h(e) {
        (_(!1), null == t || t(e));
    }
    let m = (e) =>
        (0, r.jsxs)('div', {
            className: u.customGiftHeader,
            children: [
                (0, r.jsxs)('div', {
                    className: u.__invalid_customGiftHeaderText,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/bold',
                            children: c.intl.string(c.t.aThJz8)
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: c.intl.string(c.t.stGFAw)
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: u.searchAndSound,
                    children: e
                })
            ]
        });
    return (0, r.jsx)(o.yRy, {
        targetElementRef: p,
        shouldShow: f,
        position: 'bottom',
        align: 'left',
        onRequestClose: () => _(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(o.VqE, {
                children: (0, r.jsx)(l.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: h,
                    analyticsSource: 'gift soundboard',
                    soundButtonOverlay: s.Pb.ADD,
                    listPadding: d,
                    renderHeader: m,
                    defaultSoundsOnly: !0
                })
            });
        },
        children: () =>
            (0, r.jsx)(o.P3F, {
                className: u.container,
                onClick: () => _(!0),
                innerRef: p,
                children:
                    null == n
                        ? (0, r.jsxs)('div', {
                              className: u.contentContainer,
                              children: [
                                  (0, r.jsx)(o.KY1, {
                                      size: 'custom',
                                      color: a.Z.colors.WHITE,
                                      className: u.soundIcon,
                                      width: 14,
                                      height: 14
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      className: u.text,
                                      variant: 'text-sm/semibold',
                                      lineClamp: 1,
                                      children: c.intl.string(c.t.aThJz8)
                                  })
                              ]
                          })
                        : (0, r.jsxs)('div', {
                              className: u.contentContainer,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      className: u.textSelected,
                                      variant: 'text-sm/semibold',
                                      children: n.emojiName
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      className: u.text,
                                      variant: 'text-sm/semibold',
                                      lineClamp: 1,
                                      children: n.name
                                  })
                              ]
                          })
            })
    });
}
