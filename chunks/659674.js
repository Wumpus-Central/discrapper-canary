"use strict";
n.d(t, {
    G8: () => D,
    NV: () => N,
    V: () => O,
    ax: () => x,
    ds: () => L,
    fK: () => v,
    fS: () => w,
    nh: () => b,
    p6: () => R,
}),
    n(938796),
    n(323874),
    n(14289),
    n(35956),
    n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(989349),
    s = n.n(a),
    o = n(317097),
    l = n(665260),
    u = n(661191),
    c = n(652215),
    d = n(581619);
let _ = /sketchfab/i,
    f = /^https:\/\/sketchfab\.com/i,
    p = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
    h = 0x15b7e4a5bfb,
    m = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
    g = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    E = RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop"),
    A = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/game-shop\/([0-9]+)\/([0-9]+)/,
    I = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/game-shop\/([0-9]+)\/([0-9]+)/;
function T(e) {
    let { width: t, height: n } = e;
    return t > 0 && n > 0;
}
function y(e, t, n) {
    if ((null != t && _.test(t.name)) || f.test(n.url)) return !1;
    let r = null != n.proxy_url || /^https:/i.test(n.url);
    return null != e && u.default.extractTimestamp(e) < h && (r = r && null != t && p.test(t.name)), r;
}
function S(e) {
    let {
        url: t,
        proxy_url: n,
        width: r,
        height: i,
        placeholder: a,
        placeholder_version: s,
        description: o,
        flags: u,
        content_type: d,
    } = e;
    return {
        url: t,
        proxyURL: n,
        width: r,
        height: i,
        placeholder: a,
        placeholderVersion: s,
        description: o,
        srcIsAnimated: (0, l.Lt)(u ?? 0, c.qNw.IS_ANIMATED),
        flags: u ?? 0,
        contentType: d ?? void 0,
    };
}
function v(e, t, n) {
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
        null != n.timestamp && (r.timestamp = s()(new Date(n.timestamp))),
        null != n.color && (r.color = (0, o.$k)(n.color, !0)),
        null != n.thumbnail && T(n.thumbnail))
    )
        switch (r.type) {
            case c.Auw.ARTICLE:
            case c.Auw.IMAGE:
                r.image = S(n.thumbnail);
                break;
            default:
                r.thumbnail = S(n.thumbnail);
        }
    return (
        null != n.image && T(n.image) && (r.image = S(n.image)),
        null != n.video &&
            (null == r.thumbnail &&
                null != n.video.proxy_url &&
                T(n.video) &&
                (r.thumbnail = {
                    width: n.video.width,
                    height: n.video.height,
                    url: C(n.video.proxy_url, { format: "webp" }),
                }),
            null != r.thumbnail && T(n.video) && y(t, n.provider, n.video) && (r.video = S(n.video))),
        d.p.has(r.type)
            ? (r.fields = (n.fields ?? []).map((e) => {
                  let { name: t, value: n, inline: r } = e;
                  return { rawName: t, rawValue: n, inline: r };
              }))
            : (r.fields = []),
        r
    );
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
function b(e) {
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
function N(e) {
    let { image: t, video: n, type: r, author: i, rawTitle: a } = e;
    return (null != t || null != n) && (r === c.Auw.GIFV || (r !== c.Auw.RICH && null == i && null == a));
}
function R(e) {
    return e.type === c.Auw.ARTICLE && null != e.url && (g.test(e.url) || m.test(e.url));
}
function O(e) {
    return e.type === c.Auw.ARTICLE && null != e.url && E.test(e.url);
}
function D(e) {
    return e.type === c.Auw.ARTICLE && null != e.url && (I.test(e.url) || A.test(e.url));
}
function L(e, t, n) {
    return null != t && null != n
        ? { maxMediaWidth: t, maxMediaHeight: n }
        : e.provider?.name === "TikTok"
          ? { maxMediaWidth: 400, maxMediaHeight: 450 }
          : { maxMediaWidth: 400, maxMediaHeight: 300 };
}
function w(e, t) {
    return e.isPrivate() ? !e.isManaged() : t.can(c.xBc.EMBED_LINKS, e);
}
function x(e) {
    return (
        "" !== e.content || e.messageSnapshots.some((e) => "" !== e.message.content || e.message.attachments.length > 0)
    );
}
