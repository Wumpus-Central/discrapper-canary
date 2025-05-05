n.d(t, {
    En: () => P,
    dY: () => T,
    eC: () => R,
    jz: () => N,
    kC: () => v,
    l3: () => A,
    o3: () => S,
    vP: () => C
}),
    n(413496),
    n(433524),
    n(35282),
    n(953529),
    n(997841),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(913527),
    o = n.n(a),
    s = n(866442),
    l = n(630388),
    c = n(709054),
    u = n(981631),
    d = n(817384);
let f = /sketchfab/i,
    _ = /^https:\/\/sketchfab\.com/i,
    p = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
    h = 1492472454139,
    m = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
    g = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    E = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop');
function b(e) {
    let { width: t, height: n } = e;
    return t > 0 && n > 0;
}
function y(e, t, n) {
    if ((null != t && f.test(t.name)) || _.test(n.url)) return !1;
    let r = null != n.proxy_url || /^https:/i.test(n.url);
    return null != e && c.default.extractTimestamp(e) < h && (r = r && null != t && p.test(t.name)), r;
}
function O(e) {
    let { url: t, proxy_url: n, width: r, height: i, placeholder: a, placeholder_version: o, description: s, flags: c } = e;
    return {
        url: t,
        proxyURL: n,
        width: r,
        height: i,
        placeholder: a,
        placeholderVersion: o,
        description: s,
        srcIsAnimated: (0, l.yE)(null != c ? c : 0, u.FoC.IS_ANIMATED),
        flags: null != c ? c : 0
    };
}
function v(e, t, n) {
    let r = {
        id: i().uniqueId('embed_'),
        url: n.url,
        type: n.type,
        rawTitle: n.title,
        rawDescription: n.description,
        referenceId: n.reference_id,
        flags: n.flags,
        contentScanVersion: n.content_scan_version
    };
    if (
        (null != n.footer &&
            (r.footer = {
                text: n.footer.text,
                iconURL: n.footer.icon_url,
                iconProxyURL: n.footer.proxy_icon_url
            }),
        null != n.author &&
            null != n.author.name &&
            (r.author = {
                name: n.author.name,
                url: n.author.url,
                iconURL: n.author.icon_url,
                iconProxyURL: n.author.proxy_icon_url
            }),
        null != n.provider &&
            null != n.provider.name &&
            (r.provider = {
                name: n.provider.name,
                url: n.provider.url
            }),
        null != n.timestamp && (r.timestamp = o()(new Date(n.timestamp))),
        null != n.color && (r.color = (0, s.ho)(n.color, !0)),
        null != n.thumbnail && b(n.thumbnail))
    )
        switch (r.type) {
            case u.hBH.ARTICLE:
            case u.hBH.IMAGE:
                r.image = O(n.thumbnail);
                break;
            default:
                r.thumbnail = O(n.thumbnail);
        }
    if (
        (null != n.image && b(n.image) && (r.image = O(n.image)),
        null != n.video &&
            (null == r.thumbnail &&
                null != n.video.proxy_url &&
                b(n.video) &&
                (r.thumbnail = {
                    width: n.video.width,
                    height: n.video.height,
                    url: I(n.video.proxy_url, { format: 'webp' })
                }),
            null != r.thumbnail && b(n.video) && y(t, n.provider, n.video) && (r.video = O(n.video))),
        d.k.has(r.type))
    ) {
        var a;
        r.fields = (null != (a = n.fields) ? a : []).map((e) => {
            let { name: t, value: n, inline: r } = e;
            return {
                rawName: t,
                rawValue: n,
                inline: r
            };
        });
    } else r.fields = [];
    return r;
}
function I(e, t) {
    let n = new URL(e);
    return (
        Object.keys(t).forEach((e) => {
            n.searchParams.set(e, t[e]);
        }),
        n.toString()
    );
}
function S(e) {
    let t = new Map(),
        n = [];
    return (
        e.forEach((e) => {
            if (null == e.url) return void n.push(e);
            let r = t.get(e.url);
            if (null == r) {
                n.push(e), t.set(e.url, e);
                return;
            }
            null != e.image && (null == r.images && ((r.images = []), null != r.image && r.images.push(r.image)), r.images.push(e.image));
        }),
        n
    );
}
function T(e) {
    let { image: t, video: n, type: r, author: i, rawTitle: a } = e;
    return (null != t || null != n) && (r === u.hBH.GIFV || (r !== u.hBH.RICH && null == i && null == a));
}
function A(e) {
    return e.type === u.hBH.ARTICLE && null != e.url && (g.test(e.url) || m.test(e.url));
}
function N(e) {
    return e.type === u.hBH.ARTICLE && null != e.url && E.test(e.url);
}
function C(e, t, n) {
    var r;
    return null != t && null != n
        ? {
              maxMediaWidth: t,
              maxMediaHeight: n
          }
        : (null == (r = e.provider) ? void 0 : r.name) === 'TikTok'
          ? {
                maxMediaWidth: 400,
                maxMediaHeight: 450
            }
          : {
                maxMediaWidth: 400,
                maxMediaHeight: 300
            };
}
function R(e, t) {
    return e.isPrivate() ? !e.isManaged() : t.can(u.Plq.EMBED_LINKS, e);
}
function P(e) {
    return '' !== e.content || e.messageSnapshots.some((e) => '' !== e.message.content || e.message.attachments.length > 0);
}
