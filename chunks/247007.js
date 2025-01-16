n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(658722),
    o = n.n(r),
    c = n(481060),
    d = n(231239),
    u = n(881052),
    m = n(686546),
    x = n(565138),
    h = n(601964),
    g = n(768581),
    v = n(888592),
    N = n(388032),
    j = n(728835),
    f = n(216019);
function C(e) {
    var t;
    let { guildInfo: n, onClick: s, submitting: l } = e,
        a =
            null !==
                (t = g.ZP.getGuildIconURL({
                    id: n.id,
                    icon: n.icon,
                    size: 40
                })) && void 0 !== t
                ? t
                : void 0;
    return (0, i.jsxs)(c.Clickable, {
        className: j.clickableGuildInfoRow,
        onClick: s,
        children: [
            (0, i.jsx)(m.ZP, {
                mask: m.ZP.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, i.jsx)(x.Z, {
                    className: j.guildIcon,
                    iconSrc: a,
                    guild: new h.ZP(n),
                    size: x.Z.Sizes.MEDIUM
                })
            }),
            (0, i.jsx)(c.Text, {
                className: j.guildName,
                variant: 'text-md/semibold',
                children: n.name
            }),
            l
                ? (0, i.jsx)(c.Spinner, { type: c.Spinner.Type.PULSING_ELLIPSIS })
                : (0, i.jsx)('img', {
                      className: j.__invalid_arrow,
                      alt: '',
                      src: f
                  })
        ]
    });
}
t.Z = (e) => {
    let { setStep: t, email: n, guildsInfo: l, setGuildId: r, forceGuildScrollHeight: m } = e,
        [x, h] = s.useState(null),
        [g, f] = s.useState(void 0),
        [I, p] = s.useState(null),
        S = (e) => async () => {
            h(null), r(e), p(e);
            try {
                await d.Z.sendVerificationEmail(n, !0, e), t(v.tF.VERIFY_PIN);
            } catch (e) {
                h(new u.Hx(e));
            } finally {
                p(null);
            }
        },
        T = () => t(v.tF.SUBMIT_SCHOOL),
        b = l;
    return (
        null != g && '' !== g && (b = l.filter((e) => o()(g.toLowerCase(), e.name.toLowerCase()))),
        (0, i.jsxs)('div', {
            className: j.container,
            children: [
                (0, i.jsx)(c.Heading, {
                    className: a()(j.centerText, j.header),
                    variant: 'heading-xl/semibold',
                    children: N.intl.string(N.t.mOMeiY)
                }),
                (0, i.jsx)('div', {
                    className: j.description,
                    children: (0, i.jsx)(c.Text, {
                        className: j.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: N.intl.format(N.t.dZeiTE, { onJoinWaitlist: T })
                    })
                }),
                (0, i.jsxs)('div', {
                    className: a()(j.guildList, { [j.forcedHeight]: m }),
                    children: [
                        (0, i.jsxs)('div', {
                            className: j.searchContainer,
                            children: [
                                (0, i.jsx)(c.SearchBox, {
                                    placeholder: N.intl.string(N.t['5h0QOD']),
                                    className: j.searchBox,
                                    inputClassName: j.searchBoxInput,
                                    searchIconClassName: j.searchBoxIcon,
                                    closeIconClassName: j.searchBoxIcon,
                                    onChange: (e) => {
                                        f(e);
                                    },
                                    label: N.intl.string(N.t['5h0QOD']),
                                    searchTerm: g,
                                    onClear: () => {
                                        f(void 0);
                                    }
                                }),
                                (0, i.jsx)(c.Text, {
                                    color: 'text-danger',
                                    variant: 'text-xs/normal',
                                    children: null == x ? void 0 : x.getAnyErrorMessage()
                                })
                            ]
                        }),
                        b.length > 0
                            ? (0, i.jsx)(c.ScrollerThin, {
                                  className: j.scroller,
                                  children: b.map((e) =>
                                      void 0 === e
                                          ? null
                                          : (0, i.jsx)(
                                                C,
                                                {
                                                    guildInfo: e,
                                                    onClick: S(e.id),
                                                    submitting: I === e.id
                                                },
                                                e.id
                                            )
                                  )
                              })
                            : (0, i.jsx)('div', {
                                  className: j.noResultsContainer,
                                  children: (0, i.jsxs)('div', {
                                      className: j.noResultsContent,
                                      children: [
                                          (0, i.jsx)('div', { className: j.noResultsImage }),
                                          (0, i.jsx)(c.Heading, {
                                              className: a()(j.centerText, j.header),
                                              variant: 'heading-xl/semibold',
                                              children: N.intl.string(N.t['1eUrDQ'])
                                          }),
                                          (0, i.jsx)(c.Text, {
                                              className: j.centerText,
                                              variant: 'text-md/normal',
                                              children: N.intl.format(N.t.flgDKC, { onJoinWaitlist: T })
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
