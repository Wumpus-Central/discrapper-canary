t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(692547),
    s = t(481060),
    a = t(697426),
    c = t(603074),
    o = t(388032),
    u = t(677635);
let d = [54, 8, 8, 8];
function m(e) {
    let { onSelect: n, sound: t } = e,
        [m, p] = l.useState(!1);
    function x(e) {
        p(!1), null == n || n(e);
    }
    let h = (e) =>
        (0, i.jsxs)('div', {
            className: u.customGiftHeader,
            children: [
                (0, i.jsxs)('div', {
                    className: u.__invalid_customGiftHeaderText,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/bold',
                            children: o.intl.string(o.t.aThJz8)
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: o.intl.string(o.t.stGFAw)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: u.searchAndSound,
                    children: e
                })
            ]
        });
    return (0, i.jsx)(s.Popout, {
        shouldShow: m,
        position: 'bottom',
        align: 'left',
        onRequestClose: () => p(!1),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(s.Dialog, {
                children: (0, i.jsx)(c.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: n,
                    onSelect: x,
                    analyticsSource: 'gift soundboard',
                    soundButtonOverlay: a.Pb.ADD,
                    listPadding: d,
                    renderHeader: h,
                    defaultSoundsOnly: !0
                })
            });
        },
        children: () =>
            (0, i.jsx)(s.Clickable, {
                className: u.sound,
                onClick: () => p(!0),
                children:
                    null == t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(s.SoundboardIcon, {
                                      size: 'custom',
                                      color: r.Z.colors.WHITE,
                                      className: u.soundIcon,
                                      width: 14,
                                      height: 14
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      className: u.text,
                                      variant: 'text-sm/semibold',
                                      children: o.intl.string(o.t.aThJz8)
                                  })
                              ]
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      className: u.textSelected,
                                      variant: 'text-sm/semibold',
                                      children: t.emojiName
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      className: u.text,
                                      variant: 'text-sm/semibold',
                                      children: t.name
                                  })
                              ]
                          })
            })
    });
}
function p(e) {
    let { sound: n, onSelect: t } = e;
    return (0, i.jsx)('div', {
        className: u.container,
        children: (0, i.jsx)(m, {
            onSelect: t,
            sound: n
        })
    });
}
