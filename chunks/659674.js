n.d(t, {
    G8: () => w,
    NV: () => C,
    V: () => R,
    ax: () => x,
    ds: () => P,
    fK: () => S,
    fS: () => D,
    nh: () => T,
    p6: () => N,
}),
    n(591487),
    n(727858),
    n(747238),
    n(228524),
    n(938796),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
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
    c = n(661191),
    u = n(652215),
    d = n(581619);
let f = /sketchfab/i,
    p = /^https:\/\/sketchfab\.com/i,
    _ = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
    h = 1492472454139,
    m = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
    g = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    E = RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop"),
    b = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/game-shop\/([0-9]+)\/([0-9]+)/,
    y = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/game-shop\/([0-9]+)\/([0-9]+)/;
function O(e) {
    let { width: t, height: n } = e;
    return t > 0 && n > 0;
}
function A(e, t, n) {
    if ((null != t && f.test(t.name)) || p.test(n.url)) return !1;
    let r = null != n.proxy_url || /^https:/i.test(n.url);
    return null != e && c.default.extractTimestamp(e) < h && (r = r && null != t && _.test(t.name)), r;
}
function v(e) {
    let {
        url: t,
        proxy_url: n,
        width: r,
        height: i,
        placeholder: a,
        placeholder_version: s,
        description: o,
        flags: c,
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
        srcIsAnimated: (0, l.Lt)(null != c ? c : 0, u.qNw.IS_ANIMATED),
        flags: null != c ? c : 0,
        contentType: null != d ? d : void 0,
    };
}
function S(e, t, n) {
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
            (r.footer = {
                text: n.footer.text,
                iconURL: n.footer.icon_url,
                iconProxyURL: n.footer.proxy_icon_url,
            }),
        null != n.author &&
            null != n.author.name &&
            (r.author = {
                name: n.author.name,
                url: n.author.url,
                iconURL: n.author.icon_url,
                iconProxyURL: n.author.proxy_icon_url,
            }),
        null != n.provider &&
            null != n.provider.name &&
            (r.provider = {
                name: n.provider.name,
                url: n.provider.url,
            }),
        null != n.timestamp && (r.timestamp = s()(new Date(n.timestamp))),
        null != n.color && (r.color = (0, o.$k)(n.color, !0)),
        null != n.thumbnail && O(n.thumbnail))
    )
        switch (r.type) {
            case u.Auw.ARTICLE:
            case u.Auw.IMAGE:
                r.image = v(n.thumbnail);
                break;
            default:
                r.thumbnail = v(n.thumbnail);
        }
    if (
        (null != n.image && O(n.image) && (r.image = v(n.image)),
        null != n.video &&
            (null == r.thumbnail &&
                null != n.video.proxy_url &&
                O(n.video) &&
                (r.thumbnail = {
                    width: n.video.width,
                    height: n.video.height,
                    url: I(n.video.proxy_url, { format: "webp" }),
                }),
            null != r.thumbnail && O(n.video) && A(t, n.provider, n.video) && (r.video = v(n.video))),
        d.p.has(r.type))
    ) {
        var a;
        r.fields = (null != (a = n.fields) ? a : []).map((e) => {
            let { name: t, value: n, inline: r } = e;
            return {
                rawName: t,
                rawValue: n,
                inline: r,
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
function T(e) {
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
function C(e) {
    let { image: t, video: n, type: r, author: i, rawTitle: a } = e;
    return (null != t || null != n) && (r === u.Auw.GIFV || (r !== u.Auw.RICH && null == i && null == a));
}
function N(e) {
    return e.type === u.Auw.ARTICLE && null != e.url && (g.test(e.url) || m.test(e.url));
}
function R(e) {
    return e.type === u.Auw.ARTICLE && null != e.url && E.test(e.url);
}
function w(e) {
    return e.type === u.Auw.ARTICLE && null != e.url && (y.test(e.url) || b.test(e.url));
}
function P(e, t, n) {
    var r;
    return null != t && null != n
        ? {
              maxMediaWidth: t,
              maxMediaHeight: n,
          }
        : (null == (r = e.provider) ? void 0 : r.name) === "TikTok"
          ? {
                maxMediaWidth: 400,
                maxMediaHeight: 450,
            }
          : {
                maxMediaWidth: 400,
                maxMediaHeight: 300,
            };
}
function D(e, t) {
    return e.isPrivate() ? !e.isManaged() : t.can(u.xBc.EMBED_LINKS, e);
}
function x(e) {
    return (
        "" !== e.content || e.messageSnapshots.some((e) => "" !== e.message.content || e.message.attachments.length > 0)
    );
}
