n.d(t, {
    Nx: () => d,
    lW: () => u,
    tK: () => c
});
var r,
    i = n(367907),
    s = n(626135),
    a = n(63063),
    l = n(981631);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
var c = (((r = {}).DESCRIPTION = 'description'), (r.CATEGORIES = 'categories'), (r.TAGS = 'tags'), (r.AGREE_TO_RULES = 'agree_to_rules'), r);
let d = (e, t, n) => {
        s.default.track(
            l.rMx.USER_FLOW_TRANSITION,
            o(
                {
                    flow_type: l.jXE.DISCOVERY_SETUP_MODAL,
                    from_step: e,
                    to_step: t
                },
                (0, i.hH)(n)
            )
        );
    },
    u = (e) => {
        let { articleId: t, guildId: n, modalStep: r = null, pageView: c = null } = e;
        open(a.Z.getArticleURL(t)),
            s.default.track(
                l.rMx.DISCOVERY_SETUP_CTA_CLICKED,
                o(
                    {
                        cta_name: l.b8q,
                        discovery_settings_view: c,
                        help_center_article_id: t,
                        modal_step: r
                    },
                    (0, i.hH)(n)
                )
            );
    };
