n.d(t, {
    B: function () {
        return v;
    }
}),
    n(724458);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(397195),
    d = n(473403),
    u = n(603236),
    c = n(388032),
    h = n(755527),
    g = n(232186);
let m = (e) => {
        let { guild: t, inviteChannel: n, setInviteChannel: r } = e,
            s = (0, o.Z)(t.id),
            u = i.useMemo(
                () =>
                    s.reduce(
                        (e, t) => ({
                            ...e,
                            [t.id]: t
                        }),
                        {}
                    ),
                [s]
            ),
            h = i.useMemo(
                () =>
                    Object.values(u).map((e) => ({
                        value: e.id,
                        label: e.name
                    })),
                [u]
            );
        return (0, l.jsx)(a.SearchableSelect, {
            options: h,
            value: null == n ? void 0 : n.id,
            onChange: (e) => {
                r(u[e]);
            },
            placeholder: c.intl.string(c.t.VY7qjo),
            renderOptionPrefix: (e) => {
                if (null == e) return null;
                let n = u[e.value];
                return null == n
                    ? null
                    : (0, l.jsx)(d._, {
                          channel: n,
                          guild: t
                      });
            }
        });
    },
    v = (e) => {
        let { handleDone: t, headerId: n, inviteChannel: i, copyValue: r } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(a.ModalHeader, {
                    children: [
                        (0, l.jsx)('div', {
                            className: h.closeButton,
                            children: (0, l.jsx)(a.ModalCloseButton, { onClick: t })
                        }),
                        (0, l.jsx)('div', {
                            className: h.headerContainer,
                            children: (0, l.jsx)(a.FormTitle, {
                                id: n,
                                tag: 'h2',
                                className: s()(g.marginReset, h.headerCloseButtonSpacing, h.headerText),
                                children: c.intl.string(c.t.HF5aqq)
                            })
                        })
                    ]
                }),
                (0, l.jsx)(a.ModalContent, {
                    className: h.noScroll,
                    children: (0, l.jsxs)('div', {
                        className: h.guestBody,
                        children: [
                            (0, l.jsx)(a.Text, {
                                tag: 'div',
                                variant: 'heading-sm/normal',
                                color: 'header-secondary',
                                children: c.intl.string(c.t.BlXIsr)
                            }),
                            (0, l.jsx)(a.FormTitle, {
                                tag: 'h5',
                                className: h.guestSelectChannelHeader,
                                children: c.intl.string(c.t.sqHWY2)
                            }),
                            (0, l.jsx)(m, { ...e }),
                            (0, l.jsx)(a.FormTitle, {
                                tag: 'h5',
                                className: h.guestSendInviteLinkHeader,
                                children: c.intl.string(c.t.Fp6SU1)
                            }),
                            (0, l.jsx)(u.I, {
                                ...e,
                                copyValue: null == i ? '' : r,
                                disabled: null == i
                            })
                        ]
                    })
                })
            ]
        });
    };
