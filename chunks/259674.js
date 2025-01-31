n.d(t, {
    Nx: () => c,
    lW: () => d,
    tK: () => o
});
var i,
    r = n(367907),
    l = n(626135),
    s = n(63063),
    a = n(981631),
    o = (((i = {}).DESCRIPTION = 'description'), (i.CATEGORIES = 'categories'), (i.TAGS = 'tags'), (i.AGREE_TO_RULES = 'agree_to_rules'), i);
let c = (e, t, n) => {
        l.default.track(a.rMx.USER_FLOW_TRANSITION, {
            flow_type: a.jXE.DISCOVERY_SETUP_MODAL,
            from_step: e,
            to_step: t,
            ...(0, r.hH)(n)
        });
    },
    d = (e) => {
        let { articleId: t, guildId: n, modalStep: i = null, pageView: o = null } = e;
        open(s.Z.getArticleURL(t)),
            l.default.track(a.rMx.DISCOVERY_SETUP_CTA_CLICKED, {
                cta_name: a.b8q,
                discovery_settings_view: o,
                help_center_article_id: t,
                modal_step: i,
                ...(0, r.hH)(n)
            });
    };
