"use strict";
n.d(t, { Ay: () => ea, rr: () => ei }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(144165),
    o = n(939249),
    d = n(789645),
    c = n(775602),
    u = n(567243),
    _ = n(652215);
function E(e) {
    return "music.apple.com" === e;
}
var A = n(17928),
    h = n(462887),
    I = n(363195);
let f = Object.freeze({
    EMBED: (e, t, n) => `https://embed.music.apple.com/${e}?theme=${t}&i=${null != n ? encodeURIComponent(n) : ""}`,
});
var p = n(472840);
function T(e) {
    let {
            className: t,
            embed: { url: n },
        } = e,
        r = (0, A.bG)([I.A], () => (0, h.M)(I.A.theme));
    if (null == n) return null;
    let a = null,
        l = null,
        o = null;
    try {
        let e = u.parse(n, !0);
        (a = e.host), (l = e.pathname), (o = e.query.i ?? null), Array.isArray(o) && (o = o[0]);
    } catch (e) {
        return null;
    }
    if (!E(a) || null == l) return null;
    let d = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(l) ? 2 : 1,
        c = l.split("/"),
        _ = c[d]?.toLowerCase();
    null != o && (_ = "song");
    let T = 450;
    return (
        "song" === _ ? (T = 175) : "music-video" === _ && (T = 371),
        (l = l.substr(1)),
        (0, i.jsx)("iframe", {
            className: s()(p.li, t),
            src: f.EMBED(l, r ? "dark" : "light", o),
            style: { maxWidth: 660, minWidth: 300, width: "100%", height: T },
            frameBorder: 0,
            sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation",
            allow: "encrypted-media *; fullscreen *; clipboard-write",
        })
    );
}
var m = n(338717),
    g = n(643612),
    S = n(731068);
let N = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");
function C(e) {
    let t = null,
        n = null,
        i = null;
    try {
        (t = (i = u.parse(e, !0)).host), (n = i.pathname);
    } catch (e) {
        return null;
    }
    return null != i && N.test(t ?? "") && null != n ? i : null;
}
function R(e) {
    let {
        className: t,
        embed: { url: n, thumbnail: r },
    } = e;
    if (null == n || null == r) return null;
    let a = C(n);
    if (null == a) return null;
    let l = a.query.iframe_url;
    if (null == l || Array.isArray(l) || null == C(l)) return null;
    let { width: o, height: d } = r,
        c = o,
        u = d;
    return (
        (o > 500 || d > 400) && (o > d ? ((c = 500), (u = (500 * d) / o)) : ((c = (400 * o) / d), (u = 400))),
        (0, i.jsx)("iframe", {
            className: s()(p.FS, t),
            src: l,
            style: { width: c, height: u },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
        })
    );
}
n(508300);
var O = n(607470);
n(516653);
var L = n(375708);
function y(e) {
    let {
            poster: t,
            src: n,
            width: a,
            height: s,
            naturalWidth: l,
            naturalHeight: o,
            play: d = !0,
            className: c,
            alt: u,
            responsive: _,
        } = e,
        E = r.useRef(null);
    return (r.useEffect(() => {
        let { current: e } = E;
        d
            ? e?.play()?.catch((e) => {
                  if (!(e instanceof DOMException) || "NotAllowedError" !== e.name) throw e;
              })
            : e?.pause();
    }, [d]),
    (l <= 6016 && o <= 3384) || (l <= 3384 && o <= 6016))
        ? (0, i.jsx)(O.A, {
              ref: E,
              className: c,
              poster: t,
              src: n,
              width: a,
              height: s,
              responsive: _,
              muted: !0,
              loop: !0,
              autoPlay: d,
              playsInline: !0,
              preload: "none",
              "aria-label": u,
          })
        : (0, i.jsx)("img", { alt: "", src: t, width: a, height: s });
}
function D(e) {
    let {
        src: t,
        poster: n,
        naturalWidth: r,
        naturalHeight: a,
        responsive: s,
        autoPlay: l,
        className: o,
        playable: d = !0,
        renderImageComponent: c,
        alt: u = L.intl.string(L.t.I5gL2H),
        sourceMetadata: _,
        ...E
    } = e;
    return (0, i.jsx)(g.G.Consumer, {
        children: (e) =>
            c({
                ...E,
                alt: u,
                src: n,
                containerClassName: o,
                autoPlay: l,
                animated: d,
                freeze: !0,
                responsive: s,
                renderAccessory: e,
                tabIndex: d ? 0 : -1,
                dataSafeSrc: t,
                children(e) {
                    let { src: n, size: l, animating: c, alt: u } = e;
                    return (0, i.jsx)(y, {
                        alt: u,
                        className: o,
                        poster: n,
                        src: t,
                        width: l.width,
                        height: l.height,
                        naturalWidth: r,
                        naturalHeight: a,
                        responsive: s,
                        play: d && c,
                    });
                },
                sourceMetadata: _,
                analyticsSource: "LazyGIFV",
            }),
    });
}
var v = n(619517),
    b = n(821209),
    M = n(492230),
    P = n(114212),
    U = n(343552),
    w = n(302031);
function G(e) {
    return null != e && "open.spotify.com" === e;
}
var x = n(272984);
function k(e) {
    let {
        className: t,
        embed: { url: n },
    } = e;
    if (null == n) return null;
    let r = null,
        a = null;
    try {
        let e = u.parse(n.replace(/intl-[^/]+\//, ""), !0);
        (r = e.host), (a = e.pathname);
    } catch (e) {
        return null;
    }
    if (!G(r) || null == a) return null;
    let l = a.split("/"),
        o = null != l[1] ? l[1].toLowerCase() : null,
        d = null != l[3] ? l[3].toLowerCase() : null,
        c = l[4];
    if (
        !["track", "playlist", "album", "artist", "user", "show", "episode"].includes(o ?? "") ||
        ("user" === o && "playlist" !== d)
    )
        return null;
    "user" === o && "playlist" === d && null != c && (a = `/playlist/${c}`);
    let _ = 352;
    return (
        "track" === o ? (_ = 80) : ("episode" === o || "show" === o) && (_ = 232),
        (0, i.jsx)("iframe", {
            className: s()(p.IL, t),
            src: x.RQ.EMBED(a),
            style: { maxWidth: 400, minWidth: 300, width: "100%", height: _ },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
            allow: "clipboard-write",
        })
    );
}
var F = n(734057),
    V = n(644447),
    B = n(174459),
    H = n(625494),
    j = n(58703),
    W = n(659674),
    Y = n(515718),
    K = n(998218),
    $ = n(912051),
    z = n(259407),
    q = n(191704);
let Z = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
    X = ["PlayStation"];
function Q(e) {
    let t = e.embed.url,
        n = e.embed.provider?.name;
    if (null == t || null == n) return null;
    let r = null;
    try {
        r = u.parse(t, !0);
    } catch (e) {
        return null;
    }
    let a = (function (e, t) {
        let { host: n, pathname: i } = t,
            r = [];
        if ((null != i && (r = i.split("/")), "PlayStation" === e)) {
            let e;
            if (null == n || !Z.includes(n) || 2 !== r.length) return null;
            let t = r[1];
            return {
                embedUrl: ((e = L.intl.currentLocale), `https://${n}/embed/${t}?locale=${e}`),
                style: { width: 400, height: 300, borderRadius: 6 },
            };
        }
        return null;
    })(n, r);
    return null == a
        ? null
        : (0, i.jsx)("iframe", {
              src: a.embedUrl,
              className: s()(q.u, e.className),
              style: a.style,
              sandbox:
                  "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          });
}
var J = n(692051),
    ee = n(838541),
    et = n(992595);
function en(e) {
    let t = K.A.toURLSafe(e);
    return null == t ? e : (t.searchParams.set("format", "png"), t.toString());
}
function ei(e) {
    let {
            className: t,
            iframeWrapperClassName: n,
            maxWidth: a,
            maxHeight: l,
            thumbnail: o,
            video: d,
            provider: c,
            allowFullScreen: u = !0,
            responsive: E = !1,
            renderImageComponent: A,
            renderVideoComponent: h,
            renderLinkComponent: I,
            playable: f = !0,
            autoPlay: T = !1,
            autoMute: m,
            volume: g,
            onPlay: S,
            onPause: N,
            onEnded: C,
            onControlsHide: R,
            onControlsShow: O,
            onVolumeChange: L,
            onMute: y,
            href: D,
            placeholder: v,
            placeholderVersion: M,
            sourceMetadata: P,
        } = e,
        [U, w] = r.useState(T),
        G = null != d && null == d.proxyURL,
        x = r.useCallback(() => w(!1), [w]);
    function k(e) {
        e.preventDefault(),
            e.stopPropagation(),
            S?.(!1),
            w(!0),
            G &&
                (H._.dispatch(_.jej.VIDEO_EMBED_PLAYBACK_STARTED),
                H._.subscribeOnce(_.jej.VIDEO_EMBED_PLAYBACK_STARTED, x));
    }
    r.useEffect(
        () => () => {
            G && H._.unsubscribe(_.jej.VIDEO_EMBED_PLAYBACK_STARTED, x);
        },
        [G, x],
    );
    let { width: F, height: B } = o;
    null != d && ((F = d.width), (B = d.height));
    let j = (0, Y.Uj)({ width: F, height: B, maxWidth: a, maxHeight: l });
    (F = Math.max(j.width, 150)), (B = Math.max(j.height, 144));
    let W = (0, V.E)(o);
    if (null != d && null != d.proxyURL)
        return (0, i.jsx)("div", {
            className: s()(p.pu, t),
            children: h({
                poster: W,
                src: d.proxyURL,
                placeholder: v,
                placeholderVersion: M,
                width: F,
                height: B,
                responsive: E,
                autoPlay: T,
                onEnded: C,
                naturalWidth: d.width,
                naturalHeight: d.height,
                onVolumeChange: L,
                playable: f,
                autoMute: m,
                volume: g,
                onPlay: S,
                onPause: N,
                onMute: y,
                onControlsHide: R,
                onControlsShow: O,
                sourceMetadata: P,
            }),
        });
    if (U && null != d) {
        let e,
            r = !0 === m || ("function" == typeof m && m()),
            o = { width: F, height: B },
            _ = { width: F, height: B };
        if (E) {
            let t = 0 !== F ? B / F : 1;
            (o = { maxWidth: a, maxHeight: l, width: void 0, height: void 0 }),
                (_ = { paddingBottom: `${100 * t}%`, maxWidth: F }),
                (e = { position: "absolute", top: 0, left: 0, maxWidth: F, maxHeight: B });
        }
        return (0, i.jsx)("div", {
            className: t,
            style: o,
            children: (0, i.jsx)("div", {
                className: s()(p.pu, n),
                style: _,
                children: (0, i.jsx)(z.A, {
                    provider: c,
                    src: d.url,
                    style: e,
                    width: F,
                    height: B,
                    allowFullScreen: u,
                    autoMute: r,
                }),
            }),
        });
    }
    return (0, i.jsxs)("div", {
        className: s()(p.pu, t),
        style: E ? { maxWidth: F } : { width: F, height: B },
        children: [
            A({
                src: W,
                width: F,
                height: B,
                maxWidth: F,
                maxHeight: B,
                responsive: E,
                containerClassName: p.tW,
                imageClassName: p.jq,
                placeholder: v,
                placeholderVersion: M,
                onClick: f && null != d ? k : null,
                sourceMetadata: P,
                analyticsSource: "EmbedVideo",
            }),
            (0, i.jsx)("div", {
                className: p._W,
                children: (0, i.jsx)("div", {
                    className: p.Fo,
                    children: f
                        ? (0, i.jsx)(b.A, {
                              onPlay: null != d ? k : null,
                              externalURL: D,
                              renderLinkComponent: I,
                              messageId: P?.message?.id,
                              channelId: P?.message?.channel_id,
                          })
                        : null,
                }),
            }),
        ],
    });
}
function er(e) {
    let {
        className: t,
        href: n,
        autoPlay: r,
        maxWidth: a,
        maxHeight: l,
        thumbnail: o,
        video: d,
        renderImageComponent: c,
        responsive: u,
        alt: _,
        disableAltTextDisplay: E = !1,
        playable: A = !0,
        hiddenSpoilers: h,
        placeholder: I,
        placeholderVersion: f,
        sourceMetadata: T,
    } = e;
    return (0, i.jsx)(D, {
        className: s()(p.pu, t),
        original: n,
        poster: (0, V.E)(o),
        src: (0, V.E)(d),
        alt: _,
        width: o.width,
        height: o.height,
        naturalHeight: d.height,
        naturalWidth: d.width,
        maxWidth: a,
        maxHeight: l,
        responsive: u,
        autoPlay: r,
        playable: A,
        renderImageComponent: c,
        hiddenSpoilers: h,
        disableAltTextDisplay: E,
        placeholder: I,
        placeholderVersion: f,
        sourceMetadata: T,
    });
}
class ea extends r.PureComponent {
    static defaultProps = {
        hideMedia: !1,
        allowFullScreen: !0,
        maxThumbnailWidth: 80,
        maxThumbnailHeight: 80,
        embedIndex: 0,
    };
    state = {
        isVisible: null == this.props.obscureReason,
        videoControlsShown: !1,
        sourceMetadata: {
            message: this.props.message,
            identifier: { type: "embed", embedIndex: this.props.embedIndex },
        },
        ...(0, W.ds)(this.props.embed),
    };
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: t },
                renderLinkComponent: n,
                message: r,
            } = this.props;
        return null == t
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: s()(p.zC, p.aK),
                    children: this.renderContentPlaceholder({ width: 80, height: 18 }),
                })
              : (0, i.jsx)("div", {
                    className: s()(p.zC, p.aK),
                    children:
                        null != t.url
                            ? n({
                                  className: p.Cj,
                                  href: t.url,
                                  tabIndex: e ? 0 : -1,
                                  children: t.name,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: r?.id,
                                  channelId: r?.channel_id,
                              })
                            : (0, i.jsx)("span", { children: t.name }),
                });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: t },
                renderLinkComponent: n,
                message: r,
                autoPlayGif: a,
            } = this.props;
        return null == t
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: s()(p.rN, p.aK),
                    children: this.renderContentPlaceholder({ width: 150, height: 18 }),
                })
              : (0, i.jsx)(J.Y.Consumer, {
                    children: (l) => {
                        let { disableAnimations: o } = l;
                        return (0, i.jsxs)("div", {
                            className: s()(p.rN, p.aK),
                            children: [
                                null != t.iconProxyURL
                                    ? (0, i.jsx)("img", {
                                          alt: "",
                                          className: p.SG,
                                          src: a && !o ? t.iconProxyURL : en(t.iconProxyURL),
                                      })
                                    : null,
                                null != t.url
                                    ? n({
                                          className: p.av,
                                          href: t.url,
                                          tabIndex: e ? 0 : -1,
                                          children: t.name,
                                          target: "_blank",
                                          rel: "noreferrer noopener",
                                          messageId: r?.id,
                                          channelId: r?.channel_id,
                                      })
                                    : (0, i.jsx)("span", { className: p.QQ, children: t.name }),
                            ],
                        });
                    },
                });
    }
    renderContentPlaceholder(e) {
        let { width: t, height: n } = e;
        return (0, i.jsx)(P.FQ, { className: p.Jl, width: t, height: n, opacity: 0.3 });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: t, renderLinkComponent: n, renderTitle: r, message: a } = this.props,
            { rawTitle: l, url: o } = t;
        return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: s()(p.gt, p.aK),
                    children: this.renderContentPlaceholder({ width: 400, height: 30 }),
                })
              : (0, i.jsx)("div", {
                    className: s()(p.gt, p.aK),
                    children:
                        null != o
                            ? n({
                                  className: p.kv,
                                  href: o,
                                  tabIndex: e ? 0 : -1,
                                  children: r(t, l),
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: a?.id,
                                  channelId: a?.channel_id,
                              })
                            : r(t, l),
                });
    }
    renderDescription() {
        let { embed: e, renderDescription: t } = this.props,
            { rawDescription: n } = e;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: s()(p.cD, p.aK),
                  children: this.shouldShowStaticPlaceholder
                      ? this.renderContentPlaceholder({ width: 400, height: 50 })
                      : t(e, n, !1),
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: t },
                maxThumbnailWidth: n,
                maxThumbnailHeight: r,
                renderImageComponent: a,
                autoPlayGif: s,
            } = this.props,
            { sourceMetadata: l } = this.state;
        return null == t
            ? null
            : (0, i.jsx)(J.Y.Consumer, {
                  children: (i) => {
                      let { disableAnimations: o } = i;
                      return a({
                          containerClassName: p.ad,
                          src: (0, V.E)(t),
                          original: t.url,
                          width: t.width,
                          height: t.height,
                          maxWidth: n,
                          maxHeight: r,
                          shouldLink: e,
                          autoPlay: s && !o,
                          srcIsAnimated: t.srcIsAnimated,
                          placeholder: t.placeholder,
                          placeholderVersion: t.placeholderVersion,
                          alt:
                              null == t.description || "" === t.description ? L.intl.string(L.t.X4IxWL) : t.description,
                          disableAltTextDisplay: null == t.description || "" === t.description,
                          mosaicStyleAlt: !0,
                          sourceMetadata: l,
                          analyticsSource: "Embed",
                      });
                  },
              });
    }
    renderFields() {
        let { embed: e } = this.props,
            { fields: t } = e;
        if (null == t || 0 === t.length) return null;
        let n = [],
            r = null;
        for (let { rawName: i, rawValue: a, inline: s } of t)
            s || null == r || (n.push(r), (r = null)),
                null == r && (r = []),
                r.push([this.props.renderTitle(e, i), this.props.renderDescription(e, a, !0)]),
                (3 !== r.length && s) || (n.push(r), (r = null));
        return (
            null != r && n.push(r),
            (0, i.jsx)("div", {
                className: p.j0,
                children: n.map((e, t) => {
                    let { length: n } = e;
                    return e.map((e, r) => {
                        let a,
                            s,
                            [l, o] = e;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: p.Me,
                                style: { gridColumn: ((s = r * (a = 12 / n)), `${s + 1} / ${s + a + 1}`) },
                                children: [
                                    (0, i.jsx)("div", { className: p.$L, children: l }),
                                    (0, i.jsx)("div", { className: p.VN, children: o }),
                                ],
                            },
                            `${t}-${r}`,
                        );
                    });
                }),
            })
        );
    }
    renderImages() {
        let { hiddenSpoiler: e = !1, isVisible: t = !0 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: n } = this.props,
            { maxMediaHeight: r } = this.state;
        if (null == n.images) return null;
        let [a, s, l, o] = n.images.map((i) =>
            this.renderImage({ hiddenSpoiler: e, isVisible: t, image: i, isGalleryImage: !0, allImages: n.images }),
        );
        return null == a && null == s && null == l && null == o
            ? null
            : (0, i.jsxs)("div", {
                  className: p.$B,
                  style: { height: r },
                  children: [
                      (0, i.jsxs)("div", {
                          className: p.Zf,
                          children: [
                              (0, i.jsx)(
                                  g.G.Provider,
                                  { value: (0, U.b)(n.images[0].url, n.images[0]), children: a },
                                  0,
                              ),
                              null != o &&
                                  (0, i.jsx)(
                                      g.G.Provider,
                                      { value: (0, U.b)(n.images[2]?.url, n.images[2]), children: l },
                                      2,
                                  ),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: p.Zf,
                          children: [
                              (0, i.jsx)(
                                  g.G.Provider,
                                  { value: (0, U.b)(n.images[1]?.url, n.images[1]), children: s },
                                  1,
                              ),
                              null == o &&
                                  null != l &&
                                  (0, i.jsx)(
                                      g.G.Provider,
                                      { value: (0, U.b)(n.images[2]?.url, n.images[2]), children: l },
                                      2,
                                  ),
                              null != o &&
                                  (0, i.jsx)(
                                      g.G.Provider,
                                      { value: (0, U.b)(n.images[3]?.url, n.images[3]), children: o },
                                      3,
                                  ),
                          ],
                      }),
                  ],
              });
    }
    handleImageHover() {
        let e = F.A.getChannel(this.props.message?.channel_id);
        B.default.track(_.HAw.IMAGE_HOVERED, {
            guild_id: e?.guild_id,
            channel_id: e?.id,
            image_recommendations_shown: !1,
        });
    }
    renderImage() {
        let {
                hiddenSpoiler: e = !1,
                isVisible: t = !0,
                image: n,
                isGalleryImage: r = !1,
                alt: a = L.intl.string(L.t.X4IxWL),
                allImages: l = null,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: o, className: d, autoPlayGif: c } = this.props,
            { maxMediaWidth: u, maxMediaHeight: _, sourceMetadata: E } = this.state;
        if (null == n) return null;
        let A = (0, V.E)(n),
            { srcToOnClickOverride: h, srcToHandlePreloadImage: I } =
                null == l
                    ? { srcToOnClickOverride: {}, srcToHandlePreloadImage: {} }
                    : (0, M.o)(
                          l.map((e) => ({
                              ...(0, S.oU)(e, E, "IMAGE"),
                              original: e.url,
                              srcIsAnimated: e.srcIsAnimated,
                          })),
                          {},
                          "Embed",
                      ),
            f = v.Ay.isAnimated({ src: (0, V.E)(n), original: n.url, animated: !1, srcIsAnimated: n.srcIsAnimated }),
            T = {
                containerClassName: s()(d, { [p.W$]: !r, [p.Lw]: !r, [p.I_]: r }),
                imageContainerClassName: r ? p.FM : void 0,
                imageClassName: r ? p.t3 : void 0,
                src: (0, V.E)(n),
                alt: null == n.description || "" === n.description ? a : n.description,
                responsive: !0,
                limitResponsiveWidth: !r,
                width: n.width,
                height: n.height,
                maxWidth: u,
                maxHeight: _,
                original: n.url,
                shouldLink: t,
                disableAltTextDisplay: null == n.description || "" === n.description,
                hiddenSpoilers: e,
                placeholder: n.placeholder,
                placeholderVersion: n.placeholderVersion,
                srcIsAnimated: n.srcIsAnimated,
                mosaicStyleAlt: !0,
            },
            m = n.url.split(".").pop()?.split("?")[0] ?? "";
        return (
            "jpg" === m && (m = "jpeg"),
            (0, i.jsx)(g.G.Consumer, {
                children: (t) =>
                    (0, i.jsx)(
                        J.Y.Consumer,
                        {
                            children: (n) => {
                                let { disableAnimations: i } = n;
                                return o({
                                    ...T,
                                    autoPlay: c && !i && !e,
                                    renderAccessory: f ? t : null,
                                    handlePreloadImage: I[A],
                                    onClick: h[A],
                                    onMouseEnter: () => this.handleImageHover(),
                                    sourceMetadata: E,
                                    analyticsSource: "Embed",
                                });
                            },
                        },
                        n.url,
                    ),
            })
        );
    }
    renderVideo() {
        let {
                gifv: e = !1,
                isVisible: t = !0,
                hiddenSpoiler: n = !1,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: r, thumbnail: a, video: s, provider: l },
                renderVideoComponent: o,
                renderImageComponent: d,
                renderLinkComponent: c,
                allowFullScreen: u,
                autoPlayGif: _,
                obscureReason: E,
            } = this.props,
            { maxMediaWidth: A, maxMediaHeight: h, sourceMetadata: I } = this.state;
        if (null == r || null == a) return null;
        if (e)
            return null == s
                ? null
                : (0, i.jsx)(J.Y.Consumer, {
                      children: (e) => {
                          let { disableAnimations: l } = e;
                          return (0, i.jsx)(er, {
                              className: p.W$,
                              href: r,
                              thumbnail: a,
                              video: s,
                              maxWidth: A,
                              maxHeight: h,
                              responsive: !0,
                              autoPlay: !n && _ && !l && t,
                              renderImageComponent: d,
                              playable: t,
                              hiddenSpoilers: n,
                              disableAltTextDisplay: null != E,
                              placeholder: s.placeholder,
                              placeholderVersion: s.placeholderVersion,
                              sourceMetadata: I,
                          });
                      },
                  });
        let f = () => {
                this.setState({ videoControlsShown: !0 });
            },
            T = () => {
                this.setState({ videoControlsShown: !1 });
            };
        return (0, i.jsx)(ei, {
            className: p.W$,
            href: r,
            allowFullScreen: u,
            thumbnail: a,
            video: s,
            provider: (0, W.QY)(l?.name, s?.url),
            maxWidth: A,
            maxHeight: h,
            responsive: !0,
            renderImageComponent: d,
            renderVideoComponent: o,
            renderLinkComponent: c,
            onControlsShow: f,
            onControlsHide: T,
            playable: t && !n,
            placeholder: s?.placeholder,
            placeholderVersion: s?.placeholderVersion,
            sourceMetadata: I,
        });
    }
    renderFooter() {
        let { autoPlayGif: e } = this.props,
            { footer: t, timestamp: n } = this.props.embed;
        return null != t
            ? (0, i.jsx)(J.Y.Consumer, {
                  children: (r) => {
                      let { disableAnimations: a } = r;
                      return (0, i.jsxs)("div", {
                          className: s()(p.te, p.aK),
                          children: [
                              null != t.iconProxyURL && "" !== t.iconProxyURL
                                  ? (0, i.jsx)("img", {
                                        alt: "",
                                        className: p.mG,
                                        src: e && !a ? t.iconProxyURL : en(t.iconProxyURL),
                                    })
                                  : null,
                              (0, i.jsxs)("span", {
                                  className: p.oy,
                                  children: [
                                      t.text,
                                      null != t.text && null != n
                                          ? (0, i.jsx)("span", { className: p.i8, children: "\u2022" })
                                          : null,
                                      null != n ? (0, j.mk)(n) : null,
                                  ],
                              }),
                          ],
                      });
                  },
              })
            : null != n
              ? (0, i.jsx)("div", {
                    className: s()(p.te, p.aK),
                    children: (0, i.jsx)("span", { className: p.oy, children: (0, j.mk)(n) }),
                })
              : void 0;
    }
    renderStaticPlaceholderMedia() {
        let { className: e, embed: t } = this.props,
            { maxMediaWidth: n, maxMediaHeight: r } = this.state,
            a = t.image ?? t.video;
        if (null == a) return null;
        let { width: s, height: o } = (0, Y.Uj)({ width: a.width, height: a.height, maxWidth: n, maxHeight: r });
        return (0, i.jsx)(l._, {
            className: e,
            readyState: _.Rv1.READY,
            src: "",
            width: s,
            height: o,
            maxWidth: n,
            maxHeight: r,
            mediaLayoutType: ee.dG.STATIC,
            useFullWidth: !1,
            zoomable: !1,
        });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: t } = this.props,
            { isVisible: n } = this.state;
        if (this.shouldShowStaticPlaceholder) return this.renderStaticPlaceholderMedia();
        switch (t.type) {
            case _.Auw.GIFV:
                return this.renderVideo({ gifv: !0, hiddenSpoiler: e, isVisible: n });
            case _.Auw.VIDEO:
            default:
                if (null != t.video) return this.renderVideo({ gifv: !1, hiddenSpoiler: e, isVisible: n });
                if (null != t.images) return this.renderImages({ hiddenSpoiler: e, isVisible: n });
                return this.renderImage({ hiddenSpoiler: e, isVisible: n, image: t.image, alt: t.rawTitle });
        }
    }
    renderAll() {
        let e,
            t,
            { embed: n, hideMedia: i } = this.props,
            { isVisible: r } = this.state,
            a = this.renderProvider(r),
            s = this.renderAuthor(r),
            l = this.renderTitle(r);
        switch (n.type) {
            case _.Auw.IMAGE:
            case _.Auw.VIDEO:
            case _.Auw.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let o = this.renderFields();
        i || (t = this.renderMedia(!r));
        let d = this.renderFooter(),
            c = null == t;
        return (
            n.type === _.Auw.RICH && (c = null == n.video),
            {
                provider: a,
                author: s,
                title: l,
                description: e,
                thumbnail: !i && c ? this.renderThumbnail(r) : null,
                fields: o,
                media: t,
                footer: d,
            }
        );
    }
    onReveal = () => {
        this.setState({ isVisible: !0 });
    };
    onToggleObscurity = () => {
        this.setState({ isVisible: !this.state.isVisible });
    };
    getMaxWidth(e) {
        let {
                embed: { image: t, images: n, video: i, type: r, thumbnail: a },
            } = this.props,
            { maxMediaWidth: s, maxMediaHeight: l } = this.state,
            o = t ?? i;
        if (null == o) return;
        let { width: d } = (0, Y.Uj)({ width: o.width, height: o.height, maxWidth: s, maxHeight: l });
        if (!e && (r === _.Auw.VIDEO || d >= 300)) return d + 32;
        if (r === _.Auw.RICH && void 0 !== n) return 520;
        if (r === _.Auw.GIFV) {
            let { width: e } = (0, Y.Uj)({
                width: i?.width ?? a?.width ?? 0,
                height: i?.height ?? a?.height ?? 0,
                maxWidth: s,
                maxHeight: l,
            });
            return e;
        }
    }
    getMinSize() {
        let { video: e } = this.props.embed;
        return null != e ? { minWidth: 150, minHeight: 144 } : void 0;
    }
    isInline() {
        let { hideMedia: e, embed: t } = this.props;
        return !e && (0, W.NV)(t);
    }
    renderSuppressButton(e) {
        return (0, i.jsx)(o.D, {
            focusProps: { offset: { bottom: 4 } },
            className: p.PP,
            onClick: e,
            "aria-label": L.intl.string(L.t.GT3fNz),
            children: (0, i.jsx)(d.P, { size: "xs", color: "currentColor" }),
        });
    }
    renderInlineMediaEmbed = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { obscureReason: n, className: r } = e.props,
                a = e.getMaxWidth(!0);
            return (0, i.jsx)("div", {
                "aria-hidden": t,
                className: s()(p.JY, r, {
                    [p.gT]: n === m.Oc.SPOILER,
                    [p.We]: e.shouldObscure,
                    [p.dK]: t,
                    [p.qU]: e.usesJustifiedAutoStyle(),
                }),
                style: { maxWidth: a },
                children: e.renderMedia(t),
            });
        };
    })();
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return (
            e.type === _.Auw.IMAGE ||
            e.type === _.Auw.VIDEO ||
            e.type === _.Auw.GIFV ||
            ((e.type === _.Auw.RICH || e.type === _.Auw.ARTICLE) && (null != e.video || null != e.image))
        );
    }
    renderEmbedContent = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { className: n, onSuppressEmbed: r, obscureReason: a } = e.props,
                {
                    provider: l,
                    author: o,
                    title: d,
                    description: c,
                    fields: u,
                    thumbnail: _,
                    media: E,
                    footer: A,
                } = e.renderAll();
            return (0, i.jsx)("article", {
                className: s()(n, p.vO, et.PT, {
                    [p.dK]: t,
                    [p.o4]: a === m.Oc.SPOILER,
                    [p.q$]: e.shouldObscure,
                    [p.qU]: e.usesJustifiedAutoStyle(),
                }),
                "aria-hidden": t,
                style: { borderLeftColor: e.getEmbedColor(t), maxWidth: e.getMaxWidth(!1) },
                children: (0, i.jsx)("div", {
                    className: p.UT,
                    children: (0, i.jsxs)("div", {
                        className: s()({ [p.Vg]: !0, [p.$H]: null != _ }),
                        children: [null != r ? e.renderSuppressButton(r) : null, l, o, d, c, u, E, _, A],
                    }),
                }),
            });
        };
    })();
    getEmbedColor(e) {
        let { color: t } = this.props.embed;
        return (null != t && "#ffffff" === t.toLowerCase()) || e ? void 0 : t;
    }
    getSpoilerStyles(e) {
        let {
                embed: { image: t, images: n, video: i, type: r, rawDescription: a },
            } = this.props,
            { maxMediaWidth: s, maxMediaHeight: l } = this.state;
        if (!this.usesJustifiedAutoStyle()) return { justifySelf: "start", alignSelf: "start" };
        let o = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === o && void 0 === n && r !== _.Auw.RICH) {
            let e = t ?? i;
            if (void 0 !== e) {
                let { minWidth: t, minHeight: n } = this.getMinSize() ?? {},
                    { width: i } = (0, Y.Uj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: s,
                        maxHeight: l,
                        minWidth: t,
                        minHeight: n,
                    });
                o = i;
            }
        }
        let d = 150 / (c.Ay.fontScale / 100),
            u = null != a ? (0, $.W)(a) : 0,
            E = (a?.split("\n").length ?? 0) >= 5;
        return { maxWidth: void 0 === o || u >= d || E ? "max-content" : o, justifySelf: "auto" };
    }
    get shouldObscure() {
        let { obscureReason: e } = this.props;
        return null != e && m._K.has(e);
    }
    get shouldShowStaticPlaceholder() {
        let { shouldAgeVerify: e = !1 } = this.props;
        return this.shouldObscure && e;
    }
    render() {
        let { embed: e, obscureReason: t, className: n } = this.props;
        return null != e.provider && X.includes(e.provider.name)
            ? (0, i.jsx)(Q, { embed: e, className: n })
            : (function (e) {
                    if (null == e.url || e.provider?.name !== "Spotify" || e.type !== _.Auw.LINK) return !1;
                    try {
                        let t = u.parse(e.url, !0).host;
                        return G(t);
                    } catch (e) {
                        return !1;
                    }
                })(e)
              ? (0, i.jsx)(k, { embed: e, className: n })
              : e.provider?.name === "Amazon Music" && e.type === _.Auw.RICH
                ? (0, i.jsx)(R, { embed: e, className: n })
                : (function (e) {
                        if (
                            null == e.url ||
                            e.provider?.name !== "Apple Music" ||
                            (e.type !== _.Auw.ARTICLE && e.type !== _.Auw.LINK)
                        )
                            return !1;
                        try {
                            let t = u.parse(e.url, !0).host;
                            return E(t);
                        } catch (e) {
                            return !1;
                        }
                    })(e)
                  ? (0, i.jsx)(T, { embed: e, className: n })
                  : this.isInline()
                    ? null != t
                        ? (0, i.jsx)(w.Ay, {
                              type: w.Ay.Types.ATTACHMENT,
                              reason: t,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: s()({
                                  [p.yi]: this.state.isVisible && this.state.videoControlsShown,
                              }),
                              children: this.renderInlineMediaEmbed,
                          })
                        : this.renderInlineMediaEmbed()
                    : null != t
                      ? (0, i.jsx)(w.Ay, {
                            type: w.Ay.Types.EMBED,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            reason: t,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!1),
                            children: this.renderEmbedContent,
                        })
                      : this.renderEmbedContent();
    }
}
