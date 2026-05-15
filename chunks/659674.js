"use strict";
n.d(t, {
    G8: () => D,
    NV: () => O,
    QY: () => v,
    V: () => b,
    ax: () => M,
    ds: () => L,
    fK: () => y,
    fS: () => w,
    nh: () => C,
    p6: () => R,
}),
    n(938796),
    n(323874),
    n(14289),
    n(35956),
    n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(989349),
    a = n.n(s),
    o = n(317097),
    l = n(665260),
    u = n(814890),
    c = n(935208),
    d = n(652215),
    _ = n(581619);
let f = /sketchfab/i,
    h = /^https:\/\/sketchfab\.com/i,
    p = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
    E = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
    m = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    g = RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop"),
    A = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/game-shop\/([0-9]+)\/([0-9]+)/,
    I = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/game-shop\/([0-9]+)\/([0-9]+)/,
    T =
        /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/shop\?(?=.*tab=game-shops)(?=.*applicationId=[0-9]+)(?=.*skuId=[0-9]+)/;
function S(e) {
    let { width: t, height: n } = e;
    return t > 0 && n > 0;
}
function N(e) {
    let {
        url: t,
        proxy_url: n,
        width: i,
        height: r,
        placeholder: s,
        placeholder_version: a,
        description: o,
        flags: u,
        content_type: c,
    } = e;
    return {
        url: t,
        proxyURL: n,
        width: i,
        height: r,
        placeholder: s,
        placeholderVersion: a,
        description: o,
        srcIsAnimated: (0, l.Lt)(u ?? 0, d.qNw.IS_ANIMATED),
        flags: u ?? 0,
        contentType: c ?? void 0,
    };
}
function y(e, t, n) {
    var i, s;
    let l,
        E = {
            id: r().uniqueId("embed_"),
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
            (E.footer = { text: n.footer.text, iconURL: n.footer.icon_url, iconProxyURL: n.footer.proxy_icon_url }),
        null != n.author &&
            null != n.author.name &&
            (E.author = {
                name: n.author.name,
                url: n.author.url,
                iconURL: n.author.icon_url,
                iconProxyURL: n.author.proxy_icon_url,
            }),
        null != n.provider && null != n.provider.name && (E.provider = { name: n.provider.name, url: n.provider.url }),
        null != n.timestamp && (E.timestamp = a()(new Date(n.timestamp))),
        null != n.color && (E.color = (0, o.$k)(n.color, !0)),
        null != n.thumbnail && S(n.thumbnail))
    )
        switch (E.type) {
            case d.Auw.ARTICLE:
            case d.Auw.IMAGE:
                E.image = N(n.thumbnail);
                break;
            default:
                E.thumbnail = N(n.thumbnail);
        }
    if (
        (null != n.image && S(n.image) && (E.image = N(n.image)),
        null != n.video &&
            (null == E.thumbnail &&
                null != n.video.proxy_url &&
                S(n.video) &&
                (E.thumbnail = {
                    width: n.video.width,
                    height: n.video.height,
                    url:
                        ((i = n.video.proxy_url),
                        (s = { format: "webp" }),
                        (l = new URL(i)),
                        Object.keys(s).forEach((e) => {
                            l.searchParams.set(e, s[e]);
                        }),
                        l.toString()),
                }),
            null != E.thumbnail &&
                S(n.video) &&
                (function (e, t, n) {
                    if ((null != t && f.test(t.name)) || h.test(n.url)) return !1;
                    let i = null != n.proxy_url || /^https:/i.test(n.url);
                    return (
                        null != e &&
                            0x15b7e4a5bfb > c.default.extractTimestamp(e) &&
                            (i = i && null != t && p.test(t.name)),
                        i
                    );
                })(t, n.provider, n.video) &&
                (E.video = N(n.video))),
        _.p.has(E.type)
            ? (E.fields = (n.fields ?? []).map((e) => {
                  let { name: t, value: n, inline: i } = e;
                  return { rawName: t, rawValue: n, inline: i };
              }))
            : (E.fields = []),
        null != n.components)
    ) {
        let e = (0, u.ZV)(n.components);
        E.components = e.length > 0 ? e : void 0;
    }
    return E;
}
function C(e) {
    let t = new Map(),
        n = [];
    return (
        e.forEach((e) => {
            if (null == e.url) return void n.push(e);
            let i = t.get(e.url);
            if (null == i) {
                n.push(e), t.set(e.url, e);
                return;
            }
            null != e.image &&
                (null == i.images && ((i.images = []), null != i.image && i.images.push(i.image)),
                i.images.push(e.image));
        }),
        n
    );
}
function v(e, t) {
    if ("YouTube" === e || "TikTok" === e) return e;
    if (null != t)
        try {
            let e = new URL(t).hostname;
            if ("www.youtube.com" === e) return "YouTube";
            if ("www.tiktok.com" === e) return "TikTok";
        } catch {}
    return e;
}
function O(e) {
    let { image: t, video: n, type: i, author: r, rawTitle: s } = e;
    return (null != t || null != n) && (i === d.Auw.GIFV || (i !== d.Auw.RICH && null == r && null == s));
}
function R(e) {
    return e.type === d.Auw.ARTICLE && null != e.url && (m.test(e.url) || E.test(e.url));
}
function b(e) {
    return e.type === d.Auw.ARTICLE && null != e.url && g.test(e.url);
}
function D(e) {
    return e.type === d.Auw.ARTICLE && null != e.url && (I.test(e.url) || A.test(e.url) || T.test(e.url));
}
function L(e, t, n) {
    return null != t && null != n
        ? { maxMediaWidth: t, maxMediaHeight: n }
        : e.provider?.name === "TikTok"
          ? { maxMediaWidth: 400, maxMediaHeight: 450 }
          : { maxMediaWidth: 400, maxMediaHeight: 300 };
}
function w(e, t) {
    return e.isPrivate() ? !e.isManaged() : t.can(d.xBc.EMBED_LINKS, e);
}
function M(e) {
    return (
        "" !== e.content || e.messageSnapshots.some((e) => "" !== e.message.content || e.message.attachments.length > 0)
    );
}
