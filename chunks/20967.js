n.d(t, {
    J: () => u,
    z: () => h
});
var i,
    l = n(200651);
n(192379);
var r = n(990547),
    a = n(481060),
    s = n(213609),
    o = n(388032),
    c = n(869504),
    d = n(837753),
    u = (((i = {}).GUILD_NOT_ELIGIBLE = 'guild_not_eligible'), (i.NOT_GUILD_MEMBER = 'not_guild_member'), i);
let h = (e) => {
    let { errorType: t } = e;
    return (
        (0, s.Z)({
            type: r.ImpressionTypes.PAGE,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
            properties: { error_page_type: t }
        }),
        (0, l.jsx)('div', {
            className: c.errorPageContainer,
            children: (0, l.jsxs)('div', {
                className: c.errorPageContent,
                children: [
                    (0, l.jsx)('img', {
                        src: d,
                        alt: '',
                        className: c.errorPageIllo
                    }),
                    (0, l.jsx)(a.X6q, {
                        variant: 'heading-xl/extrabold',
                        className: c.errorPageTitle,
                        children: 'guild_not_eligible' === t ? o.intl.string(o.t.atZQVV) : o.intl.string(o.t.gAdWBg)
                    }),
                    (0, l.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        className: c.errorPagSubtitle,
                        children: 'guild_not_eligible' === t ? o.intl.string(o.t.teWe5O) : o.intl.string(o.t['X/yMrK'])
                    })
                ]
            })
        })
    );
};
