n.d(t, {
    En: () => L,
    dY: () => C,
    eC: () => x,
    jz: () => O,
    kC: () => S,
    l3: () => R,
    o3: () => N,
    vP: () => D
}),
    n(789020),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(653041);
var i = n(392711),
    r = n.n(i),
    a = n(913527),
    s = n.n(a),
    o = n(866442),
    l = n(849727),
    u = n(948141),
    c = n(630388),
    d = n(709054),
    f = n(981631),
    _ = n(817384);
let p = /sketchfab/i,
    h = /^https:\/\/sketchfab\.com/i,
    m = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
    g = 1492472454139,
    E = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
    v = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    y = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop');
function I(e) {
    let { width: t, height: n } = e;
    return t > 0 && n > 0;
}
function T(e, t, n) {
    if ((null != t && p.test(t.name)) || h.test(n.url)) return !1;
    let i = null != n.proxy_url || /^https:/i.test(n.url);
    return null != e && d.default.extractTimestamp(e) < g && (i = i && null != t && m.test(t.name)), i;
}
function b(e) {
    let { url: t, proxy_url: n, width: i, height: r, placeholder: a, placeholder_version: s, flags: o } = e,
        d = l.Z.getCurrentConfig({ location: 'embed_utils_sanitize_media' }).enabled || u.Z.getCurrentConfig({ location: 'embed_utils_sanitize_media' }).enabled;
    return {
        url: t,
        proxyURL: n,
        width: i,
        height: r,
        placeholder: a,
        placeholderVersion: s,
        srcIsAnimated: d && (0, c.yE)(null != o ? o : 0, f.FoC.IS_ANIMATED),
        flags: d ? (null != o ? o : 0) : (0, c.Ge)(null != o ? o : 0, f.FoC.IS_ANIMATED)
    };
}
function S(e, t, n) {
    let i = {
        id: r().uniqueId('embed_'),
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
            (i.footer = {
                text: n.footer.text,
                iconURL: n.footer.icon_url,
                iconProxyURL: n.footer.proxy_icon_url
            }),
        null != n.author &&
            null != n.author.name &&
            (i.author = {
                name: n.author.name,
                url: n.author.url,
                iconURL: n.author.icon_url,
                iconProxyURL: n.author.proxy_icon_url
            }),
        null != n.provider &&
            null != n.provider.name &&
            (i.provider = {
                name: n.provider.name,
                url: n.provider.url
            }),
        null != n.timestamp && (i.timestamp = s()(new Date(n.timestamp))),
        null != n.color && (i.color = (0, o.ho)(n.color, !0)),
        null != n.thumbnail && I(n.thumbnail))
    )
        switch (i.type) {
            case f.hBH.ARTICLE:
            case f.hBH.IMAGE:
                i.image = b(n.thumbnail);
                break;
            default:
                i.thumbnail = b(n.thumbnail);
        }
    if (
        (null != n.image && I(n.image) && (i.image = b(n.image)),
        null != n.video &&
            (null == i.thumbnail &&
                null != n.video.proxy_url &&
                I(n.video) &&
                (i.thumbnail = {
                    width: n.video.width,
                    height: n.video.height,
                    url: A(n.video.proxy_url, { format: 'webp' })
                }),
            null != i.thumbnail && I(n.video) && T(t, n.provider, n.video) && (i.video = b(n.video))),
        _.k.has(i.type))
    ) {
        var a;
        let e = null !== (a = n.fields) && void 0 !== a ? a : [];
        i.fields = e.map((e) => {
            let { name: t, value: n, inline: i } = e;
            return {
                rawName: t,
                rawValue: n,
                inline: i
            };
        });
    } else i.fields = [];
    return i;
}
function A(e, t) {
    let n = new URL(e);
    return (
        Object.keys(t).forEach((e) => {
            n.searchParams.set(e, t[e]);
        }),
        n.toString()
    );
}
function N(e) {
    let t = new Map(),
        n = [];
    return (
        e.forEach((e) => {
            if (null == e.url) {
                n.push(e);
                return;
            }
            let i = t.get(e.url);
            if (null == i) {
                n.push(e), t.set(e.url, e);
                return;
            }
            null != e.image && (null == i.images && ((i.images = []), null != i.image && i.images.push(i.image)), i.images.push(e.image));
        }),
        n
    );
}
function C(e) {
    let { image: t, video: n, type: i, author: r, rawTitle: a } = e;
    return (null != t || null != n) && (i === f.hBH.GIFV || (i !== f.hBH.RICH && null == r && null == a));
}
function R(e) {
    return e.type === f.hBH.ARTICLE && null != e.url && (v.test(e.url) || E.test(e.url));
}
function O(e) {
    return e.type === f.hBH.ARTICLE && null != e.url && y.test(e.url);
}
function D(e, t, n) {
    var i;
    return null != t && null != n
        ? {
              maxMediaWidth: t,
              maxMediaHeight: n
          }
        : (null === (i = e.provider) || void 0 === i ? void 0 : i.name) === 'TikTok'
          ? {
                maxMediaWidth: 400,
                maxMediaHeight: 450
            }
          : {
                maxMediaWidth: 400,
                maxMediaHeight: 300
            };
}
function x(e, t) {
    return e.isPrivate() ? !e.isManaged() : t.can(f.Plq.EMBED_LINKS, e);
}
function L(e) {
    return '' !== e.content || e.messageSnapshots.some((e) => '' !== e.message.content || e.message.attachments.length > 0);
}
