n.d(t, {
    lW: () => a,
    tK: () => s
});
var c,
    i = n(367907),
    r = n(626135),
    l = n(63063),
    o = n(981631),
    s = (((c = {}).DESCRIPTION = 'description'), (c.CATEGORIES = 'categories'), (c.TAGS = 'tags'), (c.AGREE_TO_RULES = 'agree_to_rules'), c);
let a = (e) => {
    let { articleId: t, guildId: n, modalStep: c = null, pageView: s = null } = e;
    (open(l.Z.getArticleURL(t)),
        r.default.track(
            o.rMx.DISCOVERY_SETUP_CTA_CLICKED,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        c = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (c = c.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        c.forEach(function (t) {
                            var c;
                            ((c = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: c,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = c));
                        }));
                }
                return e;
            })(
                {
                    cta_name: o.b8q,
                    discovery_settings_view: s,
                    help_center_article_id: t,
                    modal_step: c
                },
                (0, i.hH)(n)
            )
        ));
};
