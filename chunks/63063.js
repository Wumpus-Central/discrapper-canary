n.d(t, {
    Z: () => _,
    w: () => o
});
var i = n(299379),
    r = n(706454),
    a = n(358085),
    s = n(981631);
let o = 'https://'.concat(s.xr4),
    l = 'https://'.concat(s.rxP),
    u = 'https://creator-support.discord.com',
    c = 'https://support-apps.discord.com';
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
    return t + e;
}
function f() {
    return r.default.locale.toLowerCase();
}
let _ = {
    getArticleURL: (e) => d('/hc/'.concat(f(), '/articles/').concat(e)),
    getDevArticleURL: (e) => d('/hc/'.concat(f(), '/articles/').concat(e), l),
    getCreatorSupportArticleURL: (e) => d('/hc/'.concat(f(), '/articles/').concat(e), u),
    getTwitterURL: () => (0, i.Z)(s.RK.TWITTER),
    getCommunityURL: () => d('/hc/'.concat(f())),
    getSubmitRequestURL(e) {
        let t = d('/hc/'.concat(f(), '/requests/new?platform=').concat(encodeURIComponent((0, a.getPlatformName)())));
        return null != e && (t += '&device_info='.concat(encodeURIComponent(e))), t;
    },
    getSearchURL(e) {
        let t = encodeURIComponent(e);
        return d('/hc/'.concat(f(), '/search?utf8=%E2%9C%93&query=').concat(t, '&commit=Search'));
    },
    getFeaturedArticlesJsonURL: () => d('/api/v2/help_center/en-us/articles.json?label_names=featured'),
    getAppsSupportURL: (e) => d('/hc/'.concat(f(), '/articles/').concat(e), c)
};
