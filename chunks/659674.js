(n.d(t, {
    G8: () => U,
    NV: () => D,
    QY: () => y,
    V: () => b,
    Xk: () => P,
    ax: () => x,
    ds: () => w,
    fK: () => R,
    fS: () => G,
    nL: () => M,
    nh: () => L,
    p6: () => v,
}),
    n(938796),
    n(323874),
    n(14289),
    n(35956),
    n(321073));
var i = n(435558),
    r = n.n(i),
    a = n(536637),
    s = n.n(a),
    l = n(665260),
    o = n(437517),
    d = n(935208),
    c = n(652215),
    u = n(581619);
let _ = /sketchfab/i,
    E = /^https:\/\/sketchfab\.com/i,
    A = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
    h = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
    f = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    I = RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop"),
    p = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/game-shop\/([0-9]+)\/([0-9]+)/,
    T = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/game-shop\/([0-9]+)\/([0-9]+)/,
    m = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/game-shop\/[0-9]+\/?\?(?=.*skuIds=)/,
    g =
        /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/shop\?(?=.*tab=game-shops)(?=.*applicationId=[0-9]+)(?=.*skuId=[0-9]+)/,
    S = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/games\/[0-9]+(?:\/[A-Za-z0-9-]*)?\/?$/,
    N = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/users\/[0-9]+\/?$/;
function C(e) {
    let { width: t, height: n } = e;
    return t > 0 && n > 0;
}
function O(e) {
    let {
        url: t,
        proxy_url: n,
        width: i,
        height: r,
        placeholder: a,
        placeholder_version: s,
        description: o,
        flags: d,
        content_type: u,
    } = e;
    return {
        url: t,
        proxyURL: n,
        width: i,
        height: r,
        placeholder: a,
        placeholderVersion: s,
        description: o,
        srcIsAnimated: (0, l.Lt)(d ?? 0, c.qNw.IS_ANIMATED),
        flags: d ?? 0,
        contentType: u ?? void 0,
    };
}
function R(e, t, n) {
    var i, a;
    let l,
        h = {
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
            (h.footer = { text: n.footer.text, iconURL: n.footer.icon_url, iconProxyURL: n.footer.proxy_icon_url }),
        null != n.author &&
            null != n.author.name &&
            (h.author = {
                name: n.author.name,
                url: n.author.url,
                iconURL: n.author.icon_url,
                iconProxyURL: n.author.proxy_icon_url,
            }),
        null != n.provider && null != n.provider.name && (h.provider = { name: n.provider.name, url: n.provider.url }),
        null != n.timestamp && (h.timestamp = s()(new Date(n.timestamp))),
        null != n.color && (h.color = n.color),
        null != n.thumbnail && C(n.thumbnail))
    )
        switch (h.type) {
            case c.Auw.ARTICLE:
            case c.Auw.IMAGE:
                h.image = O(n.thumbnail);
                break;
            default:
                h.thumbnail = O(n.thumbnail);
        }
    if (
        (null != n.image && C(n.image) && (h.image = O(n.image)),
        null != n.video &&
            (null == h.thumbnail &&
                null != n.video.proxy_url &&
                C(n.video) &&
                (h.thumbnail = {
                    width: n.video.width,
                    height: n.video.height,
                    url:
                        ((i = n.video.proxy_url),
                        (a = { format: "webp" }),
                        (l = new URL(i)),
                        Object.keys(a).forEach((e) => {
                            l.searchParams.set(e, a[e]);
                        }),
                        l.toString()),
                }),
            null != h.thumbnail &&
                C(n.video) &&
                (function (e, t, n) {
                    if ((null != t && _.test(t.name)) || E.test(n.url)) return !1;
                    let i = null != n.proxy_url || /^https:/i.test(n.url);
                    return (
                        null != e &&
                            0x15b7e4a5bfb > d.default.extractTimestamp(e) &&
                            (i = i && null != t && A.test(t.name)),
                        i
                    );
                })(t, n.provider, n.video) &&
                (h.video = O(n.video))),
        u.pd.has(h.type)
            ? (h.fields = (n.fields ?? []).map((e) => {
                  let { name: t, value: n, inline: i } = e;
                  return { rawName: t, rawValue: n, inline: i };
              }))
            : (h.fields = []),
        null != n.components)
    ) {
        let e = (0, o.ZV)(n.components);
        h.components = e.length > 0 ? e : void 0;
    }
    return h;
}
function L(e) {
    let t = new Map(),
        n = [];
    return (
        e.forEach((e) => {
            if (null == e.url) return void n.push(e);
            let i = t.get(e.url);
            if (null == i) {
                (n.push(e), t.set(e.url, e));
                return;
            }
            null != e.image &&
                (null == i.images && ((i.images = []), null != i.image && i.images.push(i.image)),
                i.images.push(e.image));
        }),
        n
    );
}
function y(e, t) {
    if ("YouTube" === e || "TikTok" === e) return e;
    if (null != t)
        try {
            let e = new URL(t).hostname;
            if ("www.youtube.com" === e) return "YouTube";
            if ("www.tiktok.com" === e) return "TikTok";
        } catch {}
    return e;
}
function D(e) {
    let { image: t, video: n, type: i, author: r, rawTitle: a } = e;
    return (null != t || null != n) && (i === c.Auw.GIFV || (i !== c.Auw.RICH && null == r && null == a));
}
function v(e) {
    return e.type === c.Auw.ARTICLE && null != e.url && (f.test(e.url) || h.test(e.url));
}
function b(e) {
    return e.type === c.Auw.ARTICLE && null != e.url && I.test(e.url);
}
function P(e) {
    return e.type === c.Auw.ARTICLE && null != e.url && S.test(e.url);
}
function M(e) {
    return e.type === c.Auw.ARTICLE && null != e.url && N.test(e.url);
}
function U(e) {
    return (
        e.type === c.Auw.ARTICLE && null != e.url && (T.test(e.url) || m.test(e.url) || p.test(e.url) || g.test(e.url))
    );
}
function w(e, t, n) {
    return null != t && null != n
        ? { maxMediaWidth: t, maxMediaHeight: n }
        : e.provider?.name === "TikTok" ||
            (null != e.video && e.video.height > e.video.width && "YouTube" === y(e.provider?.name, e.video.url))
          ? { maxMediaWidth: 400, maxMediaHeight: 450 }
          : { maxMediaWidth: 400, maxMediaHeight: 300 };
}
function G(e, t) {
    return e.isPrivate() ? !e.isManaged() : t.can(c.xBc.EMBED_LINKS, e);
}
function x(e) {
    return (
        "" !== e.content || e.messageSnapshots.some((e) => "" !== e.message.content || e.message.attachments.length > 0)
    );
}
