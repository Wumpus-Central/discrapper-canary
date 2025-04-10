c.d(t, {
    lW: () => a,
    tK: () => o
});
var n,
    r = c(367907),
    i = c(626135),
    l = c(63063),
    s = c(981631),
    o = (((n = {}).DESCRIPTION = 'description'), (n.CATEGORIES = 'categories'), (n.TAGS = 'tags'), (n.AGREE_TO_RULES = 'agree_to_rules'), n);
let a = (e) => {
    let { articleId: t, guildId: c, modalStep: n = null, pageView: o = null } = e;
    open(l.Z.getArticleURL(t)),
        i.default.track(
            s.rMx.DISCOVERY_SETUP_CTA_CLICKED,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var c = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(c);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(c).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(c, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = c[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })(
                {
                    cta_name: s.b8q,
                    discovery_settings_view: o,
                    help_center_article_id: t,
                    modal_step: n
                },
                (0, r.hH)(c)
            )
        );
};
