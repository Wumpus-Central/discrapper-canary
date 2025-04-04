n.d(t, {
    Z: () => _,
    w: () => s
});
var r = n(299379),
    i = n(706454),
    o = n(358085),
    a = n(981631);
let s = 'https://'.concat(a.xr4),
    l = 'https://'.concat(a.rxP),
    c = 'https://creator-support.discord.com',
    u = 'https://support-apps.discord.com';
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    return t + e;
}
function f() {
    return i.default.locale.toLowerCase();
}
let _ = {
    getArticleURL: (e) => d('/hc/'.concat(f(), '/articles/').concat(e)),
    getDevArticleURL: (e) => d('/hc/'.concat(f(), '/articles/').concat(e), l),
    getCreatorSupportArticleURL: (e) => d('/hc/'.concat(f(), '/articles/').concat(e), c),
    getTwitterURL: () => (0, r.Z)(a.RK.TWITTER),
    getCommunityURL: () => d('/hc/'.concat(f())),
    getSubmitRequestURL(e) {
        let t = d('/hc/'.concat(f(), '/requests/new?platform=').concat(encodeURIComponent((0, o.getPlatformName)())));
        return null != e && (t += '&device_info='.concat(encodeURIComponent(e))), t;
    },
    getSearchURL(e) {
        let t = encodeURIComponent(e);
        return d('/hc/'.concat(f(), '/search?utf8=%E2%9C%93&query=').concat(t, '&commit=Search'));
    },
    getFeaturedArticlesJsonURL: () => d('/api/v2/help_center/en-us/articles.json?label_names=featured'),
    getAppsSupportURL: (e) => d('/hc/'.concat(f(), '/articles/').concat(e), u)
};
