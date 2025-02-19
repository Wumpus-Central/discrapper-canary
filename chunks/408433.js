n.d(t, {
    En: () => D,
    dY: () => A,
    eC: () => w,
    jz: () => R,
    kC: () => I,
    l3: () => C,
    o3: () => N,
    vP: () => P
}),
    n(474991),
    n(398202),
    n(301563),
    n(789020),
    n(266796),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(653041);
var r = n(392711),
    i = n.n(r),
    o = n(913527),
    a = n.n(o),
    s = n(866442),
    l = n(849727),
    c = n(948141),
    u = n(630388),
    d = n(709054),
    f = n(981631),
    p = n(817384);
let _ = /sketchfab/i,
    h = /^https:\/\/sketchfab\.com/i,
    m = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
    g = 1492472454139,
    E = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
    v = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    b = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop');
function y(e) {
    let { width: t, height: n } = e;
    return t > 0 && n > 0;
}
function O(e, t, n) {
    if ((null != t && _.test(t.name)) || h.test(n.url)) return !1;
    let r = null != n.proxy_url || /^https:/i.test(n.url);
    return null != e && d.default.extractTimestamp(e) < g && (r = r && null != t && m.test(t.name)), r;
}
function S(e) {
    let { url: t, proxy_url: n, width: r, height: i, placeholder: o, placeholder_version: a, flags: s } = e,
        d = l.Z.getCurrentConfig({ location: 'embed_utils_sanitize_media' }).enabled || c.Z.getCurrentConfig({ location: 'embed_utils_sanitize_media' }).enabled;
    return {
        url: t,
        proxyURL: n,
        width: r,
        height: i,
        placeholder: o,
        placeholderVersion: a,
        srcIsAnimated: d && (0, u.yE)(null != s ? s : 0, f.FoC.IS_ANIMATED),
        flags: d ? (null != s ? s : 0) : (0, u.Ge)(null != s ? s : 0, f.FoC.IS_ANIMATED)
    };
}
function I(e, t, n) {
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
        null != n.timestamp && (r.timestamp = a()(new Date(n.timestamp))),
        null != n.color && (r.color = (0, s.ho)(n.color, !0)),
        null != n.thumbnail && y(n.thumbnail))
    )
        switch (r.type) {
            case f.hBH.ARTICLE:
            case f.hBH.IMAGE:
                r.image = S(n.thumbnail);
                break;
            default:
                r.thumbnail = S(n.thumbnail);
        }
    if (
        (null != n.image && y(n.image) && (r.image = S(n.image)),
        null != n.video &&
            (null == r.thumbnail &&
                null != n.video.proxy_url &&
                y(n.video) &&
                (r.thumbnail = {
                    width: n.video.width,
                    height: n.video.height,
                    url: T(n.video.proxy_url, { format: 'webp' })
                }),
            null != r.thumbnail && y(n.video) && O(t, n.provider, n.video) && (r.video = S(n.video))),
        p.k.has(r.type))
    ) {
        var o;
        let e = null !== (o = n.fields) && void 0 !== o ? o : [];
        r.fields = e.map((e) => {
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
function T(e, t) {
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
function A(e) {
    let { image: t, video: n, type: r, author: i, rawTitle: o } = e;
    return (null != t || null != n) && (r === f.hBH.GIFV || (r !== f.hBH.RICH && null == i && null == o));
}
function C(e) {
    return e.type === f.hBH.ARTICLE && null != e.url && (v.test(e.url) || E.test(e.url));
}
function R(e) {
    return e.type === f.hBH.ARTICLE && null != e.url && b.test(e.url);
}
function P(e, t, n) {
    var r;
    return null != t && null != n
        ? {
              maxMediaWidth: t,
              maxMediaHeight: n
          }
        : (null === (r = e.provider) || void 0 === r ? void 0 : r.name) === 'TikTok'
          ? {
                maxMediaWidth: 400,
                maxMediaHeight: 450
            }
          : {
                maxMediaWidth: 400,
                maxMediaHeight: 300
            };
}
function w(e, t) {
    return e.isPrivate() ? !e.isManaged() : t.can(f.Plq.EMBED_LINKS, e);
}
function D(e) {
    return '' !== e.content || e.messageSnapshots.some((e) => '' !== e.message.content || e.message.attachments.length > 0);
}
