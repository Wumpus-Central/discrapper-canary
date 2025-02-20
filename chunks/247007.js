n.d(t, { Z: () => E }), n(47120), n(266796);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(658722),
    o = n.n(a),
    c = n(481060),
    d = n(231239),
    u = n(881052),
    m = n(686546),
    N = n(565138),
    x = n(601964),
    h = n(768581),
    v = n(888592),
    _ = n(388032),
    g = n(160130),
    f = n(216019);
function p(e) {
    var t;
    let { guildInfo: n, onClick: r, submitting: i } = e,
        s =
            null !==
                (t = h.ZP.getGuildIconURL({
                    id: n.id,
                    icon: n.icon,
                    size: 40
                })) && void 0 !== t
                ? t
                : void 0;
    return (0, l.jsxs)(c.P3F, {
        className: g.clickableGuildInfoRow,
        onClick: r,
        children: [
            (0, l.jsx)(m.ZP, {
                mask: m.ZP.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, l.jsx)(N.Z, {
                    className: g.guildIcon,
                    iconSrc: s,
                    guild: new x.ZP(n),
                    size: N.Z.Sizes.MEDIUM
                })
            }),
            (0, l.jsx)(c.Text, {
                className: g.guildName,
                variant: 'text-md/semibold',
                children: n.name
            }),
            i
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
    let { setStep: t, email: n, guildsInfo: i, setGuildId: a, forceGuildScrollHeight: m } = e,
        [N, x] = r.useState(null),
        [h, f] = r.useState(void 0),
        [E, S] = r.useState(null),
        I = (e) => async () => {
            x(null), a(e), S(e);
            try {
                await d.Z.sendVerificationEmail(n, !0, e), t(v.tF.VERIFY_PIN);
            } catch (e) {
                x(new u.Hx(e));
            } finally {
                S(null);
            }
        },
        j = () => t(v.tF.SUBMIT_SCHOOL),
        y = i;
    return (
        null != h && '' !== h && (y = i.filter((e) => o()(h.toLowerCase(), e.name.toLowerCase()))),
        (0, l.jsxs)('div', {
            className: g.container,
            children: [
                (0, l.jsx)(c.X6q, {
                    className: s()(g.centerText, g.header),
                    variant: 'heading-xl/semibold',
                    children: _.NW.string(_.t.mOMeiY)
                }),
                (0, l.jsx)('div', {
                    className: g.description,
                    children: (0, l.jsx)(c.Text, {
                        className: g.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: _.NW.format(_.t.dZeiTE, { onJoinWaitlist: j })
                    })
                }),
                (0, l.jsxs)('div', {
                    className: s()(g.guildList, { [g.forcedHeight]: m }),
                    children: [
                        (0, l.jsxs)('div', {
                            className: g.searchContainer,
                            children: [
                                (0, l.jsx)(c.Rj2, {
                                    placeholder: _.NW.string(_.t['5h0QOD']),
                                    className: g.searchBox,
                                    inputClassName: g.searchBoxInput,
                                    searchIconClassName: g.searchBoxIcon,
                                    closeIconClassName: g.searchBoxIcon,
                                    onChange: (e) => {
                                        f(e);
                                    },
                                    label: _.NW.string(_.t['5h0QOD']),
                                    searchTerm: h,
                                    onClear: () => {
                                        f(void 0);
                                    }
                                }),
                                (0, l.jsx)(c.Text, {
                                    color: 'text-danger',
                                    variant: 'text-xs/normal',
                                    children: null == N ? void 0 : N.getAnyErrorMessage()
                                })
                            ]
                        }),
                        y.length > 0
                            ? (0, l.jsx)(c.zJl, {
                                  className: g.scroller,
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
                                  className: g.noResultsContainer,
                                  children: (0, l.jsxs)('div', {
                                      className: g.noResultsContent,
                                      children: [
                                          (0, l.jsx)('div', { className: g.noResultsImage }),
                                          (0, l.jsx)(c.X6q, {
                                              className: s()(g.centerText, g.header),
                                              variant: 'heading-xl/semibold',
                                              children: _.NW.string(_.t['1eUrDQ'])
                                          }),
                                          (0, l.jsx)(c.Text, {
                                              className: g.centerText,
                                              variant: 'text-md/normal',
                                              children: _.NW.format(_.t.flgDKC, { onJoinWaitlist: j })
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
