i.d(t, {
    iv: () => a,
    p3: () => o,
});
var n,
    l = i(58149),
    r = i(954571),
    c = i(975571),
    s = i(652215),
    a =
        (((n = {}).DESCRIPTION = "description"),
        (n.CATEGORIES = "categories"),
        (n.TAGS = "tags"),
        (n.AGREE_TO_RULES = "agree_to_rules"),
        n);
let o = (e) => {
    let { articleId: t, guildId: i, modalStep: n = null, pageView: a = null } = e;
    open(c.A.getArticleURL(t)),
        r.default.track(
            s.HAw.DISCOVERY_SETUP_CTA_CLICKED,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(i).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(i, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = i[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })(
                {
                    cta_name: s.Mmu,
                    discovery_settings_view: a,
                    help_center_article_id: t,
                    modal_step: n,
                },
                (0, l.H$)(i),
            ),
        );
};
