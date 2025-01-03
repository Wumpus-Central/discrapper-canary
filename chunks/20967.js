n.d(t, {
    J: function () {
        return r;
    },
    z: function () {
        return h;
    }
});
var i,
    r,
    l = n(200651);
n(192379);
var a = n(990547),
    s = n(481060),
    o = n(213609),
    c = n(388032),
    d = n(818754),
    u = n(837753);
((i = r || (r = {})).GUILD_NOT_ELIGIBLE = 'guild_not_eligible'), (i.NOT_GUILD_MEMBER = 'not_guild_member');
let h = (e) => {
    let { errorType: t } = e;
    return (
        (0, o.Z)({
            type: a.ImpressionTypes.PAGE,
            name: a.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
            properties: { error_page_type: t }
        }),
        (0, l.jsx)('div', {
            className: d.errorPageContainer,
            children: (0, l.jsxs)('div', {
                className: d.errorPageContent,
                children: [
                    (0, l.jsx)('img', {
                        src: u,
                        alt: '',
                        className: d.errorPageIllo
                    }),
                    (0, l.jsx)(s.Heading, {
                        variant: 'heading-xl/extrabold',
                        className: d.errorPageTitle,
                        children: 'guild_not_eligible' === t ? c.intl.string(c.t.atZQVV) : c.intl.string(c.t.gAdWBg)
                    }),
                    (0, l.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        className: d.errorPagSubtitle,
                        children: 'guild_not_eligible' === t ? c.intl.string(c.t.teWe5O) : c.intl.string(c.t['X/yMrK'])
                    })
                ]
            })
        })
    );
};
