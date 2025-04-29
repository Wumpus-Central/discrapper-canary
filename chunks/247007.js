n.d(t, { Z: () => E }), n(388685), n(953529);
var l = n(255367),
    i = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(658722),
    o = n.n(a),
    c = n(481060),
    d = n(231239),
    u = n(881052),
    m = n(686546),
    x = n(565138),
    h = n(601964),
    _ = n(768581),
    g = n(888592),
    f = n(388032),
    N = n(593673),
    v = n(216019);
function p(e) {
    var t;
    let { guildInfo: n, onClick: i, submitting: r } = e,
        s =
            null !=
            (t = _.ZP.getGuildIconURL({
                id: n.id,
                icon: n.icon,
                size: 40
            }))
                ? t
                : void 0;
    return (0, l.jsxs)(c.P3F, {
        className: N.clickableGuildInfoRow,
        onClick: i,
        children: [
            (0, l.jsx)(m.ZP, {
                mask: m.ZP.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, l.jsx)(x.Z, {
                    className: N.guildIcon,
                    iconSrc: s,
                    guild: new h.ZP(n),
                    size: x.Z.Sizes.MEDIUM
                })
            }),
            (0, l.jsx)(c.Text, {
                className: N.guildName,
                variant: 'text-md/semibold',
                children: n.name
            }),
            r
                ? (0, l.jsx)(c.$jN, { type: c.$jN.Type.PULSING_ELLIPSIS })
                : (0, l.jsx)('img', {
                      className: N.__invalid_arrow,
                      alt: '',
                      src: v
                  })
        ]
    });
}
let E = (e) => {
    let { setStep: t, email: n, guildsInfo: r, setGuildId: a, forceGuildScrollHeight: m } = e,
        [x, h] = i.useState(null),
        [_, v] = i.useState(void 0),
        [E, S] = i.useState(null),
        I = (e) => async () => {
            h(null), a(e), S(e);
            try {
                await d.Z.sendVerificationEmail(n, !0, e), t(g.tF.VERIFY_PIN);
            } catch (e) {
                h(new u.Hx(e));
            } finally {
                S(null);
            }
        },
        j = () => t(g.tF.SUBMIT_SCHOOL),
        y = r;
    return (
        null != _ && '' !== _ && (y = r.filter((e) => o()(_.toLowerCase(), e.name.toLowerCase()))),
        (0, l.jsxs)('div', {
            className: N.container,
            children: [
                (0, l.jsx)(c.X6q, {
                    className: s()(N.centerText, N.header),
                    variant: 'heading-xl/semibold',
                    children: f.intl.string(f.t.mOMeiY)
                }),
                (0, l.jsx)('div', {
                    className: N.description,
                    children: (0, l.jsx)(c.Text, {
                        className: N.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: f.intl.format(f.t.dZeiTE, { onJoinWaitlist: j })
                    })
                }),
                (0, l.jsxs)('div', {
                    className: s()(N.guildList, { [N.forcedHeight]: m }),
                    children: [
                        (0, l.jsxs)('div', {
                            className: N.searchContainer,
                            children: [
                                (0, l.jsx)(c.Rj2, {
                                    placeholder: f.intl.string(f.t['5h0QOD']),
                                    className: N.searchBox,
                                    inputClassName: N.searchBoxInput,
                                    searchIconClassName: N.searchBoxIcon,
                                    closeIconClassName: N.searchBoxIcon,
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
                                    children: null == x ? void 0 : x.getAnyErrorMessage()
                                })
                            ]
                        }),
                        y.length > 0
                            ? (0, l.jsx)(c.zJl, {
                                  className: N.scroller,
                                  children: y.map((e) =>
                                      void 0 === e
                                          ? null
                                          : (0, l.jsx)(
                                                p,
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
                                  className: N.noResultsContainer,
                                  children: (0, l.jsxs)('div', {
                                      className: N.noResultsContent,
                                      children: [
                                          (0, l.jsx)('div', { className: N.noResultsImage }),
                                          (0, l.jsx)(c.X6q, {
                                              className: s()(N.centerText, N.header),
                                              variant: 'heading-xl/semibold',
                                              children: f.intl.string(f.t['1eUrDQ'])
                                          }),
                                          (0, l.jsx)(c.Text, {
                                              className: N.centerText,
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
