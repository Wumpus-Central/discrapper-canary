n.d(t, {
    t: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(738672),
    o = n(447564),
    c = n(921944),
    d = n(388032),
    u = n(467137);
let h = (e) => {
    let { channel: t, markAsDismissed: n, potionRef: l } = e;
    return (0, i.jsx)(m, {
        channel: t,
        buttonRef: l,
        dismissed: !1,
        nudgeAlignIntoViewport: !0,
        onClick: () => {
            n(c.L.TAKE_ACTION);
        },
        onDismiss: () => {
            n(c.L.USER_DISMISS);
        }
    });
};
function p(e) {
    let { channel: t, onClick: n, hidden: l, onDismiss: s } = e;
    return (0, i.jsxs)('div', {
        className: r()(u.popoutContainer, { [u.hidden]: l }),
        children: [
            (0, i.jsx)('img', {
                className: u.image,
                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                alt: 'HD Streaming Nitro Perk'
            }),
            (0, i.jsx)(a.Button, {
                className: u.closeButton,
                'aria-label': d.intl.string(d.t.cpT0Cg),
                look: a.Button.Looks.BLANK,
                size: a.Button.Sizes.NONE,
                onClick: () => {
                    s();
                },
                children: (0, i.jsx)(a.XSmallIcon, {
                    size: 'xs',
                    className: u.closeIcon,
                    color: 'white'
                })
            }),
            (0, i.jsxs)('div', {
                className: u.infoContainerParent,
                children: [
                    (0, i.jsx)(a.Heading, {
                        className: u.heading,
                        variant: 'heading-md/extrabold',
                        children: d.intl.string(d.t.kQqTnp)
                    }),
                    (0, i.jsx)('div', {
                        className: u.infoContainer,
                        children: (0, i.jsx)(a.Text, {
                            className: u.infoText,
                            variant: 'text-sm/medium',
                            children: d.intl.string(d.t.cxf5yM)
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: u.buttonContainer,
                        children: (0, i.jsx)(a.Button, {
                            onClick: () => {
                                (0, o.openHDPotionModal)(t, 'HDStreamingPotionUpsellPopout'), n();
                            },
                            color: a.ButtonColors.WHITE,
                            className: u.button,
                            children: d.intl.string(d.t.GBe9lJ)
                        })
                    })
                ]
            })
        ]
    });
}
function m(e) {
    let { channel: t, onClick: n, ...l } = e;
    return (0, i.jsx)(s.h, {
        ...l,
        skipForceHide: !0,
        renderComponent: (e) =>
            (0, i.jsx)(p, {
                onClick: n,
                channel: t,
                ...e
            })
    });
}
