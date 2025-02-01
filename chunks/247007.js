n.d(t, { Z: () => E }), n(47120);
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
    v = n(768581),
    N = n(888592),
    _ = n(388032),
    g = n(728835),
    f = n(216019);
function p(e) {
    var t;
    let { guildInfo: n, onClick: i, submitting: s } = e,
        a =
            null !==
                (t = v.ZP.getGuildIconURL({
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
                      src: f
                  })
        ]
    });
}
let E = (e) => {
    let { setStep: t, email: n, guildsInfo: s, setGuildId: r, forceGuildScrollHeight: m } = e,
        [x, h] = i.useState(null),
        [v, f] = i.useState(void 0),
        [E, I] = i.useState(null),
        S = (e) => async () => {
            h(null), r(e), I(e);
            try {
                await d.Z.sendVerificationEmail(n, !0, e), t(N.tF.VERIFY_PIN);
            } catch (e) {
                h(new u.Hx(e));
            } finally {
                I(null);
            }
        },
        j = () => t(N.tF.SUBMIT_SCHOOL),
        C = s;
    return (
        null != v && '' !== v && (C = s.filter((e) => o()(v.toLowerCase(), e.name.toLowerCase()))),
        (0, l.jsxs)('div', {
            className: g.container,
            children: [
                (0, l.jsx)(c.X6q, {
                    className: a()(g.centerText, g.header),
                    variant: 'heading-xl/semibold',
                    children: _.intl.string(_.t.mOMeiY)
                }),
                (0, l.jsx)('div', {
                    className: g.description,
                    children: (0, l.jsx)(c.Text, {
                        className: g.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: _.intl.format(_.t.dZeiTE, { onJoinWaitlist: j })
                    })
                }),
                (0, l.jsxs)('div', {
                    className: a()(g.guildList, { [g.forcedHeight]: m }),
                    children: [
                        (0, l.jsxs)('div', {
                            className: g.searchContainer,
                            children: [
                                (0, l.jsx)(c.Rj2, {
                                    placeholder: _.intl.string(_.t['5h0QOD']),
                                    className: g.searchBox,
                                    inputClassName: g.searchBoxInput,
                                    searchIconClassName: g.searchBoxIcon,
                                    closeIconClassName: g.searchBoxIcon,
                                    onChange: (e) => {
                                        f(e);
                                    },
                                    label: _.intl.string(_.t['5h0QOD']),
                                    searchTerm: v,
                                    onClear: () => {
                                        f(void 0);
                                    }
                                }),
                                (0, l.jsx)(c.Text, {
                                    color: 'text-danger',
                                    variant: 'text-xs/normal',
                                    children: null == x ? void 0 : x.getAnyErrorMessage()
                                })
                            ]
                        }),
                        C.length > 0
                            ? (0, l.jsx)(c.zJl, {
                                  className: g.scroller,
                                  children: C.map((e) =>
                                      void 0 === e
                                          ? null
                                          : (0, l.jsx)(
                                                p,
                                                {
                                                    guildInfo: e,
                                                    onClick: S(e.id),
                                                    submitting: E === e.id
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
                                              children: _.intl.string(_.t['1eUrDQ'])
                                          }),
                                          (0, l.jsx)(c.Text, {
                                              className: g.centerText,
                                              variant: 'text-md/normal',
                                              children: _.intl.format(_.t.flgDKC, { onJoinWaitlist: j })
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
