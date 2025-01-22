r.d(n, {
    w: function () {
        return l;
    }
});
var i = r(299379),
    a = r(706454),
    o = r(358085),
    s = r(981631);
let l = 'https://'.concat(s.xr4),
    u = 'https://'.concat(s.rxP),
    c = 'https://creator-support.discord.com',
    d = 'https://support-apps.discord.com';
function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
    return n + e;
}
function p() {
    return a.default.locale.toLowerCase();
}
n.Z = {
    getArticleURL: (e) => f('/hc/'.concat(p(), '/articles/').concat(e)),
    getDevArticleURL: (e) => f('/hc/'.concat(p(), '/articles/').concat(e), u),
    getCreatorSupportArticleURL: (e) => f('/hc/'.concat(p(), '/articles/').concat(e), c),
    getTwitterURL: () => (0, i.Z)(s.RK.TWITTER),
    getCommunityURL: () => f('/hc/'.concat(p())),
    getSubmitRequestURL(e) {
        let n = f('/hc/'.concat(p(), '/requests/new?platform=').concat(encodeURIComponent((0, o.getPlatformName)())));
        return null != e && (n += '&device_info='.concat(encodeURIComponent(e))), n;
    },
    getSearchURL(e) {
        let n = encodeURIComponent(e);
        return f('/hc/'.concat(p(), '/search?utf8=%E2%9C%93&query=').concat(n, '&commit=Search'));
    },
    getFeaturedArticlesJsonURL: () => f('/api/v2/help_center/en-us/articles.json?label_names=featured'),
    getAppsSupportURL: (e) => f('/hc/'.concat(p(), '/articles/').concat(e), d)
};
