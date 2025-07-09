(n.d(t, { Z: () => E }), n(388685), n(953529));
var l = n(255367),
    i = n(73800),
    r = n(120356),
    a = n.n(r),
    s = n(658722),
    o = n.n(s),
    c = n(481060),
    d = n(231239),
    u = n(881052),
    m = n(686546),
    h = n(565138),
    x = n(601964),
    _ = n(768581),
    g = n(888592),
    f = n(388032),
    p = n(593673),
    v = n(216019);
function N(e) {
    var t;
    let { guildInfo: n, onClick: i, submitting: r } = e,
        a =
            null !=
            (t = _.ZP.getGuildIconURL({
                id: n.id,
                icon: n.icon,
                size: 40
            }))
                ? t
                : void 0;
    return (0, l.jsxs)(c.P3F, {
        className: p.clickableGuildInfoRow,
        onClick: i,
        children: [
            (0, l.jsx)(m.ZP, {
                mask: m.ZP.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, l.jsx)(h.Z, {
                    className: p.guildIcon,
                    iconSrc: a,
                    guild: new x.ZP(n),
                    size: h.Z.Sizes.MEDIUM
                })
            }),
            (0, l.jsx)(c.Text, {
                className: p.guildName,
                variant: 'text-md/semibold',
                children: n.name
            }),
            r
                ? (0, l.jsx)(c.$jN, { type: c.$jN.Type.PULSING_ELLIPSIS })
                : (0, l.jsx)('img', {
                      className: p.__invalid_arrow,
                      alt: '',
                      src: v
                  })
        ]
    });
}
let E = (e) => {
    let { setStep: t, email: n, guildsInfo: r, setGuildId: s, forceGuildScrollHeight: m } = e,
        [h, x] = i.useState(null),
        [_, v] = i.useState(void 0),
        [E, S] = i.useState(null),
        I = (e) => async () => {
            (x(null), s(e), S(e));
            try {
                (await d.Z.sendVerificationEmail(n, !0, e), t(g.tF.VERIFY_PIN));
            } catch (e) {
                x(new u.Hx(e));
            } finally {
                S(null);
            }
        },
        j = () => t(g.tF.SUBMIT_SCHOOL),
        y = r;
    return (
        null != _ && '' !== _ && (y = r.filter((e) => o()(_.toLowerCase(), e.name.toLowerCase()))),
        (0, l.jsxs)('div', {
            className: p.container,
            children: [
                (0, l.jsx)(c.X6q, {
                    className: a()(p.centerText, p.header),
                    variant: 'heading-xl/semibold',
                    children: f.intl.string(f.t.mOMeiY)
                }),
                (0, l.jsx)('div', {
                    className: p.description,
                    children: (0, l.jsx)(c.Text, {
                        className: p.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: f.intl.format(f.t.dZeiTE, { onJoinWaitlist: j })
                    })
                }),
                (0, l.jsxs)('div', {
                    className: a()(p.guildList, { [p.forcedHeight]: m }),
                    children: [
                        (0, l.jsxs)('div', {
                            className: p.searchContainer,
                            children: [
                                (0, l.jsx)(c.Rj2, {
                                    placeholder: f.intl.string(f.t['5h0QOD']),
                                    className: p.searchBox,
                                    inputClassName: p.searchBoxInput,
                                    searchIconClassName: p.searchBoxIcon,
                                    closeIconClassName: p.searchBoxIcon,
                                    onChange: (e) => {
                                        v(e);
                                    },
                                    label: f.intl.string(f.t['5h0QOD']),
                                    searchTerm: _,
                                    onClear: () => {
                                        v(void 0);
                                    }
                                }),
                                (0, l.jsx)(c.Text, {
                                    color: 'text-danger',
                                    variant: 'text-xs/normal',
                                    children: null == h ? void 0 : h.getAnyErrorMessage()
                                })
                            ]
                        }),
                        y.length > 0
                            ? (0, l.jsx)(c.zJl, {
                                  className: p.scroller,
                                  children: y.map((e) =>
                                      void 0 === e
                                          ? null
                                          : (0, l.jsx)(
                                                N,
                                                {
                                                    guildInfo: e,
                                                    onClick: I(e.id),
                                                    submitting: E === e.id
                                                },
                                                e.id
                                            )
                                  )
                              })
                            : (0, l.jsx)('div', {
                                  className: p.noResultsContainer,
                                  children: (0, l.jsxs)('div', {
                                      className: p.noResultsContent,
                                      children: [
                                          (0, l.jsx)('div', { className: p.noResultsImage }),
                                          (0, l.jsx)(c.X6q, {
                                              className: a()(p.centerText, p.header),
                                              variant: 'heading-xl/semibold',
                                              children: f.intl.string(f.t['1eUrDQ'])
                                          }),
                                          (0, l.jsx)(c.Text, {
                                              className: p.centerText,
                                              variant: 'text-md/normal',
                                              children: f.intl.format(f.t.flgDKC, { onJoinWaitlist: j })
                                          })
                                      ]
                                  })
                              })
                    ]
                })
            ]
        })
    );
};
