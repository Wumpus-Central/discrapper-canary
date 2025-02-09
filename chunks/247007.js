n.d(t, { Z: () => f }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    r = n(658722),
    o = n.n(r),
    c = n(481060),
    d = n(231239),
    u = n(881052),
    m = n(686546),
    x = n(565138),
    h = n(601964),
    _ = n(768581),
    N = n(888592),
    v = n(388032),
    g = n(793786),
    E = n(216019);
function I(e) {
    var t;
    let { guildInfo: n, onClick: i, submitting: s } = e,
        a =
            null !==
                (t = _.ZP.getGuildIconURL({
                    id: n.id,
                    icon: n.icon,
                    size: 40
                })) && void 0 !== t
                ? t
                : void 0;
    return (0, l.jsxs)(c.P3F, {
        className: g.clickableGuildInfoRow,
        onClick: i,
        children: [
            (0, l.jsx)(m.ZP, {
                mask: m.ZP.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, l.jsx)(x.Z, {
                    className: g.guildIcon,
                    iconSrc: a,
                    guild: new h.ZP(n),
                    size: x.Z.Sizes.MEDIUM
                })
            }),
            (0, l.jsx)(c.Text, {
                className: g.guildName,
                variant: 'text-md/semibold',
                children: n.name
            }),
            s
                ? (0, l.jsx)(c.$jN, { type: c.$jN.Type.PULSING_ELLIPSIS })
                : (0, l.jsx)('img', {
                      className: g.__invalid_arrow,
                      alt: '',
                      src: E
                  })
        ]
    });
}
let f = (e) => {
    let { setStep: t, email: n, guildsInfo: s, setGuildId: r, forceGuildScrollHeight: m } = e,
        [x, h] = i.useState(null),
        [_, E] = i.useState(void 0),
        [f, S] = i.useState(null),
        p = (e) => async () => {
            h(null), r(e), S(e);
            try {
                await d.Z.sendVerificationEmail(n, !0, e), t(N.tF.VERIFY_PIN);
            } catch (e) {
                h(new u.Hx(e));
            } finally {
                S(null);
            }
        },
        C = () => t(N.tF.SUBMIT_SCHOOL),
        T = s;
    return (
        null != _ && '' !== _ && (T = s.filter((e) => o()(_.toLowerCase(), e.name.toLowerCase()))),
        (0, l.jsxs)('div', {
            className: g.container,
            children: [
                (0, l.jsx)(c.X6q, {
                    className: a()(g.centerText, g.header),
                    variant: 'heading-xl/semibold',
                    children: v.intl.string(v.t.mOMeiY)
                }),
                (0, l.jsx)('div', {
                    className: g.description,
                    children: (0, l.jsx)(c.Text, {
                        className: g.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: v.intl.format(v.t.dZeiTE, { onJoinWaitlist: C })
                    })
                }),
                (0, l.jsxs)('div', {
                    className: a()(g.guildList, { [g.forcedHeight]: m }),
                    children: [
                        (0, l.jsxs)('div', {
                            className: g.searchContainer,
                            children: [
                                (0, l.jsx)(c.Rj2, {
                                    placeholder: v.intl.string(v.t['5h0QOD']),
                                    className: g.searchBox,
                                    inputClassName: g.searchBoxInput,
                                    searchIconClassName: g.searchBoxIcon,
                                    closeIconClassName: g.searchBoxIcon,
                                    onChange: (e) => {
                                        E(e);
                                    },
                                    label: v.intl.string(v.t['5h0QOD']),
                                    searchTerm: _,
                                    onClear: () => {
                                        E(void 0);
                                    }
                                }),
                                (0, l.jsx)(c.Text, {
                                    color: 'text-danger',
                                    variant: 'text-xs/normal',
                                    children: null == x ? void 0 : x.getAnyErrorMessage()
                                })
                            ]
                        }),
                        T.length > 0
                            ? (0, l.jsx)(c.zJl, {
                                  className: g.scroller,
                                  children: T.map((e) =>
                                      void 0 === e
                                          ? null
                                          : (0, l.jsx)(
                                                I,
                                                {
                                                    guildInfo: e,
                                                    onClick: p(e.id),
                                                    submitting: f === e.id
                                                },
                                                e.id
                                            )
                                  )
                              })
                            : (0, l.jsx)('div', {
                                  className: g.noResultsContainer,
                                  children: (0, l.jsxs)('div', {
                                      className: g.noResultsContent,
                                      children: [
                                          (0, l.jsx)('div', { className: g.noResultsImage }),
                                          (0, l.jsx)(c.X6q, {
                                              className: a()(g.centerText, g.header),
                                              variant: 'heading-xl/semibold',
                                              children: v.intl.string(v.t['1eUrDQ'])
                                          }),
                                          (0, l.jsx)(c.Text, {
                                              className: g.centerText,
                                              variant: 'text-md/normal',
                                              children: v.intl.format(v.t.flgDKC, { onJoinWaitlist: C })
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
