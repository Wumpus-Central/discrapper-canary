n.d(t, {
    Z: () => f,
    w: () => s
});
var r = n(299379),
    i = n(706454),
    a = n(358085),
    o = n(981631);
let s = 'https://'.concat(o.xr4),
    l = 'https://'.concat(o.rxP),
    c = 'https://creator-support.discord.com',
    u = 'https://support-apps.discord.com';
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    return t + e;
}
function _() {
    return i.default.locale.toLowerCase();
}
let f = {
    getArticleURL: (e) => d('/hc/'.concat(_(), '/articles/').concat(e)),
    getDevArticleURL: (e) => d('/hc/'.concat(_(), '/articles/').concat(e), l),
    getCreatorSupportArticleURL: (e) => d('/hc/'.concat(_(), '/articles/').concat(e), c),
    getTwitterURL: () => (0, r.Z)(o.RK.TWITTER),
    getCommunityURL: () => d('/hc/'.concat(_())),
    getSubmitRequestURL(e) {
        let t = d('/hc/'.concat(_(), '/requests/new?platform=').concat(encodeURIComponent((0, a.getPlatformName)())));
        return null != e && (t += '&device_info='.concat(encodeURIComponent(e))), t;
    },
    getSearchURL(e) {
        let t = encodeURIComponent(e);
        return d('/hc/'.concat(_(), '/search?utf8=%E2%9C%93&query=').concat(t, '&commit=Search'));
    },
    getFeaturedArticlesJsonURL: () => d('/api/v2/help_center/en-us/articles.json?label_names=featured'),
    getAppsSupportURL: (e) => d('/hc/'.concat(_(), '/articles/').concat(e), u)
};
