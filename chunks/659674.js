"use strict";
n.d(t, {
    G8: () => L,
    NV: () => O,
    V: () => D,
    ax: () => x,
    ds: () => w,
    fK: () => N,
    fS: () => M,
    nh: () => R,
    p6: () => b,
}),
    n(938796),
    n(323874),
    n(14289),
    n(35956),
    n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(989349),
    a = n.n(s),
    o = n(317097),
    l = n(665260),
    u = n(814890),
    c = n(661191),
    d = n(652215),
    _ = n(581619);
let f = /sketchfab/i,
    p = /^https:\/\/sketchfab\.com/i,
    h = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
    m = 0x15b7e4a5bfb,
    E = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
    g = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    A = RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop"),
    I = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/game-shop\/([0-9]+)\/([0-9]+)/,
    T = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/game-shop\/([0-9]+)\/([0-9]+)/;
function S(e) {
    let { width: t, height: n } = e;
    return t > 0 && n > 0;
}
function y(e, t, n) {
    if ((null != t && f.test(t.name)) || p.test(n.url)) return !1;
    let r = null != n.proxy_url || /^https:/i.test(n.url);
    return null != e && c.default.extractTimestamp(e) < m && (r = r && null != t && h.test(t.name)), r;
}
function v(e) {
    let {
        url: t,
        proxy_url: n,
        width: r,
        height: i,
        placeholder: s,
        placeholder_version: a,
        description: o,
        flags: u,
        content_type: c,
    } = e;
    return {
        url: t,
        proxyURL: n,
        width: r,
        height: i,
        placeholder: s,
        placeholderVersion: a,
        description: o,
        srcIsAnimated: (0, l.Lt)(u ?? 0, d.qNw.IS_ANIMATED),
        flags: u ?? 0,
        contentType: c ?? void 0,
    };
}
function N(e, t, n) {
    let r = {
        id: i().uniqueId("embed_"),
        url: n.url,
        type: n.type,
        rawTitle: n.title,
        rawDescription: n.description,
        referenceId: n.reference_id,
        flags: n.flags,
        contentScanVersion: n.content_scan_version,
    };
    if (
        (null != n.footer &&
            (r.footer = { text: n.footer.text, iconURL: n.footer.icon_url, iconProxyURL: n.footer.proxy_icon_url }),
        null != n.author &&
            null != n.author.name &&
            (r.author = {
                name: n.author.name,
                url: n.author.url,
                iconURL: n.author.icon_url,
                iconProxyURL: n.author.proxy_icon_url,
            }),
        null != n.provider && null != n.provider.name && (r.provider = { name: n.provider.name, url: n.provider.url }),
        null != n.timestamp && (r.timestamp = a()(new Date(n.timestamp))),
        null != n.color && (r.color = (0, o.$k)(n.color, !0)),
        null != n.thumbnail && S(n.thumbnail))
    )
        switch (r.type) {
            case d.Auw.ARTICLE:
            case d.Auw.IMAGE:
                r.image = v(n.thumbnail);
                break;
            default:
                r.thumbnail = v(n.thumbnail);
        }
    if (
        (null != n.image && S(n.image) && (r.image = v(n.image)),
        null != n.video &&
            (null == r.thumbnail &&
                null != n.video.proxy_url &&
                S(n.video) &&
                (r.thumbnail = {
                    width: n.video.width,
                    height: n.video.height,
                    url: C(n.video.proxy_url, { format: "webp" }),
                }),
            null != r.thumbnail && S(n.video) && y(t, n.provider, n.video) && (r.video = v(n.video))),
        _.p.has(r.type)
            ? (r.fields = (n.fields ?? []).map((e) => {
                  let { name: t, value: n, inline: r } = e;
                  return { rawName: t, rawValue: n, inline: r };
              }))
            : (r.fields = []),
        null != n.components)
    ) {
        let e = (0, u.ZV)(n.components);
        r.components = e.length > 0 ? e : void 0;
    }
    return r;
}
function C(e, t) {
    let n = new URL(e);
    return (
        Object.keys(t).forEach((e) => {
            n.searchParams.set(e, t[e]);
        }),
        n.toString()
    );
}
function R(e) {
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
            null != e.image &&
                (null == r.images && ((r.images = []), null != r.image && r.images.push(r.image)),
                r.images.push(e.image));
        }),
        n
    );
}
function O(e) {
    let { image: t, video: n, type: r, author: i, rawTitle: s } = e;
    return (null != t || null != n) && (r === d.Auw.GIFV || (r !== d.Auw.RICH && null == i && null == s));
}
function b(e) {
    return e.type === d.Auw.ARTICLE && null != e.url && (g.test(e.url) || E.test(e.url));
}
function D(e) {
    return e.type === d.Auw.ARTICLE && null != e.url && A.test(e.url);
}
function L(e) {
    return e.type === d.Auw.ARTICLE && null != e.url && (T.test(e.url) || I.test(e.url));
}
function w(e, t, n) {
    return null != t && null != n
        ? { maxMediaWidth: t, maxMediaHeight: n }
        : e.provider?.name === "TikTok"
          ? { maxMediaWidth: 400, maxMediaHeight: 450 }
          : { maxMediaWidth: 400, maxMediaHeight: 300 };
}
function M(e, t) {
    return e.isPrivate() ? !e.isManaged() : t.can(d.xBc.EMBED_LINKS, e);
}
function x(e) {
    return (
        "" !== e.content || e.messageSnapshots.some((e) => "" !== e.message.content || e.message.attachments.length > 0)
    );
}
