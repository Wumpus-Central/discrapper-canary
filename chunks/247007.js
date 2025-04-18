n.d(t, { Z: () => E }), n(388685), n(953529);
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
    _ = n(888592),
    g = n(388032),
    f = n(593673),
    v = n(216019);
function p(e) {
    var t;
    let { guildInfo: n, onClick: r, submitting: i } = e,
        s =
            null !=
            (t = h.ZP.getGuildIconURL({
                id: n.id,
                icon: n.icon,
                size: 40
            }))
                ? t
                : void 0;
    return (0, l.jsxs)(c.P3F, {
        className: f.clickableGuildInfoRow,
        onClick: r,
        children: [
            (0, l.jsx)(m.ZP, {
                mask: m.ZP.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, l.jsx)(N.Z, {
                    className: f.guildIcon,
                    iconSrc: s,
                    guild: new x.ZP(n),
                    size: N.Z.Sizes.MEDIUM
                })
            }),
            (0, l.jsx)(c.Text, {
                className: f.guildName,
                variant: 'text-md/semibold',
                children: n.name
            }),
            i
                ? (0, l.jsx)(c.$jN, { type: c.$jN.Type.PULSING_ELLIPSIS })
                : (0, l.jsx)('img', {
                      className: f.__invalid_arrow,
                      alt: '',
                      src: v
                  })
        ]
    });
}
let E = (e) => {
    let { setStep: t, email: n, guildsInfo: i, setGuildId: a, forceGuildScrollHeight: m } = e,
        [N, x] = r.useState(null),
        [h, v] = r.useState(void 0),
        [E, S] = r.useState(null),
        I = (e) => async () => {
            x(null), a(e), S(e);
            try {
                await d.Z.sendVerificationEmail(n, !0, e), t(_.tF.VERIFY_PIN);
            } catch (e) {
                x(new u.Hx(e));
            } finally {
                S(null);
            }
        },
        j = () => t(_.tF.SUBMIT_SCHOOL),
        y = i;
    return (
        null != h && '' !== h && (y = i.filter((e) => o()(h.toLowerCase(), e.name.toLowerCase()))),
        (0, l.jsxs)('div', {
            className: f.container,
            children: [
                (0, l.jsx)(c.X6q, {
                    className: s()(f.centerText, f.header),
                    variant: 'heading-xl/semibold',
                    children: g.NW.string(g.t.mOMeiY)
                }),
                (0, l.jsx)('div', {
                    className: f.description,
                    children: (0, l.jsx)(c.Text, {
                        className: f.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: g.NW.format(g.t.dZeiTE, { onJoinWaitlist: j })
                    })
                }),
                (0, l.jsxs)('div', {
                    className: s()(f.guildList, { [f.forcedHeight]: m }),
                    children: [
                        (0, l.jsxs)('div', {
                            className: f.searchContainer,
                            children: [
                                (0, l.jsx)(c.Rj2, {
                                    placeholder: g.NW.string(g.t['5h0QOD']),
                                    className: f.searchBox,
                                    inputClassName: f.searchBoxInput,
                                    searchIconClassName: f.searchBoxIcon,
                                    closeIconClassName: f.searchBoxIcon,
                                    onChange: (e) => {
                                        v(e);
                                    },
                                    label: g.NW.string(g.t['5h0QOD']),
                                    searchTerm: h,
                                    onClear: () => {
                                        v(void 0);
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
                                  className: f.scroller,
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
                                  className: f.noResultsContainer,
                                  children: (0, l.jsxs)('div', {
                                      className: f.noResultsContent,
                                      children: [
                                          (0, l.jsx)('div', { className: f.noResultsImage }),
                                          (0, l.jsx)(c.X6q, {
                                              className: s()(f.centerText, f.header),
                                              variant: 'heading-xl/semibold',
                                              children: g.NW.string(g.t['1eUrDQ'])
                                          }),
                                          (0, l.jsx)(c.Text, {
                                              className: f.centerText,
                                              variant: 'text-md/normal',
                                              children: g.NW.format(g.t.flgDKC, { onJoinWaitlist: j })
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
