i.d(t, { iv: () => a, p3: () => o });
var n,
    l = i(58149),
    c = i(954571),
    s = i(975571),
    d = i(652215),
    a =
        (((n = {}).DESCRIPTION = "description"),
        (n.CATEGORIES = "categories"),
        (n.TAGS = "tags"),
        (n.AGREE_TO_RULES = "agree_to_rules"),
        n);
let o = (e) => {
    let { articleId: t, guildId: i, modalStep: n = null, pageView: a = null } = e;
    open(s.A.getArticleURL(t)),
        c.default.track(d.HAw.DISCOVERY_SETUP_CTA_CLICKED, {
            cta_name: d.Mmu,
            discovery_settings_view: a,
            help_center_article_id: t,
            modal_step: n,
            ...(0, l.H$)(i),
        });
};
