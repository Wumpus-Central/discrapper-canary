n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(692547),
    s = n(481060),
    o = n(697426),
    l = n(603074),
    u = n(388032),
    c = n(832264);
let d = [54, 8, 8, 8];
function f(e) {
    let { onSelect: t, sound: n } = e,
        [f, _] = r.useState(!1);
    function p(e) {
        _(!1), null == t || t(e);
    }
    let h = (e) =>
        (0, i.jsxs)('div', {
            className: c.customGiftHeader,
            children: [
                (0, i.jsxs)('div', {
                    className: c.__invalid_customGiftHeaderText,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/bold',
                            children: u.intl.string(u.t.aThJz8)
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: u.intl.string(u.t.stGFAw)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: c.searchAndSound,
                    children: e
                })
            ]
        });
    return (0, i.jsx)(s.yRy, {
        shouldShow: f,
        position: 'bottom',
        align: 'left',
        onRequestClose: () => _(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(s.VqE, {
                children: (0, i.jsx)(l.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: p,
                    analyticsSource: 'gift soundboard',
                    soundButtonOverlay: o.Pb.ADD,
                    listPadding: d,
                    renderHeader: h,
                    defaultSoundsOnly: !0
                })
            });
        },
        children: () =>
            (0, i.jsx)(s.P3F, {
                className: c.sound,
                onClick: () => _(!0),
                children:
                    null == n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(s.KY1, {
                                      size: 'custom',
                                      color: a.Z.colors.WHITE,
                                      className: c.soundIcon,
                                      width: 14,
                                      height: 14
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      className: c.text,
                                      variant: 'text-sm/semibold',
                                      children: u.intl.string(u.t.aThJz8)
                                  })
                              ]
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      className: c.textSelected,
                                      variant: 'text-sm/semibold',
                                      children: n.emojiName
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      className: c.text,
                                      variant: 'text-sm/semibold',
                                      children: n.name
                                  })
                              ]
                          })
            })
    });
}
function _(e) {
    let { sound: t, onSelect: n } = e;
    return (0, i.jsx)('div', {
        className: c.container,
        children: (0, i.jsx)(f, {
            onSelect: n,
            sound: t
        })
    });
}
