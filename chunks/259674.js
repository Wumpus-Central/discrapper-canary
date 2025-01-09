n.d(t, {
    Nx: function () {
        return c;
    },
    lW: function () {
        return d;
    },
    tK: function () {
        return r;
    }
});
var i,
    r,
    l = n(367907),
    s = n(626135),
    a = n(63063),
    o = n(981631);
((i = r || (r = {})).DESCRIPTION = 'description'), (i.CATEGORIES = 'categories'), (i.TAGS = 'tags'), (i.AGREE_TO_RULES = 'agree_to_rules');
let c = (e, t, n) => {
        s.default.track(o.rMx.USER_FLOW_TRANSITION, {
            flow_type: o.jXE.DISCOVERY_SETUP_MODAL,
            from_step: e,
            to_step: t,
            ...(0, l.hH)(n)
        });
    },
    d = (e) => {
        let { articleId: t, guildId: n, modalStep: i = null, pageView: r = null } = e;
        open(a.Z.getArticleURL(t)),
            s.default.track(o.rMx.DISCOVERY_SETUP_CTA_CLICKED, {
                cta_name: o.b8q,
                discovery_settings_view: r,
                help_center_article_id: t,
                modal_step: i,
                ...(0, l.hH)(n)
            });
    };
